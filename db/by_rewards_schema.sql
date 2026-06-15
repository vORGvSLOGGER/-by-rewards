-- By REWARDS | بواسطة المكافآت
-- Expanded MVP schema for post-purchase rewards operations.
-- Run inside Supabase SQL editor after reviewing RLS policies.

create type public.app_role as enum ('admin', 'ops_manager', 'verifier', 'partner', 'customer');
create type public.order_status as enum (
  'draft',
  'link_issued',
  'purchased',
  'delivered',
  'proof_submitted',
  'under_review',
  'approved',
  'rejected',
  'paid',
  'closed'
);

create table if not exists public.users_profile (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  role public.app_role not null default 'customer',
  full_name text not null,
  email text unique,
  phone text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  contact_name text,
  contact_phone text,
  website text,
  status text not null default 'active',
  sla_hours int not null default 24,
  created_at timestamptz not null default now()
);

create table if not exists public.reward_packages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric(12,2) not null,
  reward_amount numeric(12,2) not null,
  ops_fee numeric(12,2) not null default 0,
  max_per_user_per_month int not null default 1,
  link_expiry_hours int not null default 12,
  proof_requirements jsonb not null default '[]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.reward_orders (
  id uuid primary key default gen_random_uuid(),
  public_ref text unique not null,
  customer_id uuid not null references public.users_profile(id),
  partner_id uuid references public.partners(id),
  package_id uuid references public.reward_packages(id),
  status public.order_status not null default 'draft',
  purchase_link text,
  link_token text unique,
  link_issued_at timestamptz,
  link_used_at timestamptz,
  order_ref text,
  delivery_tracking text,
  delivered_at timestamptz,
  proof_submitted_at timestamptz,
  review_assigned_to uuid references public.users_profile(id),
  review_decision_at timestamptz,
  reward_transfer_at timestamptz,
  public_notes text,
  internal_notes text,
  fraud_score int not null default 0 check (fraud_score >= 0 and fraud_score <= 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists reward_orders_partner_order_ref_unique
on public.reward_orders(partner_id, order_ref)
where order_ref is not null;

create table if not exists public.order_proofs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.reward_orders(id) on delete cascade,
  proof_type text not null,
  file_url text not null,
  metadata jsonb not null default '{}'::jsonb,
  uploaded_by uuid references public.users_profile(id),
  created_at timestamptz not null default now()
);

create table if not exists public.wallets (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null unique references public.users_profile(id),
  balance numeric(12,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.wallet_transactions (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid not null references public.wallets(id),
  order_id uuid references public.reward_orders(id),
  transaction_type text not null check (transaction_type in ('credit', 'debit', 'withdrawal')),
  amount numeric(12,2) not null check (amount > 0),
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references public.users_profile(id),
  order_id uuid references public.reward_orders(id),
  action text not null,
  before_state jsonb,
  after_state jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.fraud_flags (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.reward_orders(id) on delete cascade,
  flag_type text not null,
  severity text not null default 'medium',
  description text,
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);

-- MVP seed packages
insert into public.reward_packages (name, price, reward_amount, ops_fee, max_per_user_per_month, link_expiry_hours, proof_requirements)
values
  ('باقة 200', 200, 200, 25, 2, 12, '["فاتورة الشراء", "رقم الطلب", "إثبات الاستلام", "صورة المنتج"]'),
  ('باقة 700', 700, 700, 65, 1, 12, '["فاتورة الشراء", "رقم الطلب", "إثبات الاستلام", "صورة المنتج", "تتبع الشحنة"]')
on conflict do nothing;

-- Critical production note:
-- Enable RLS and write policies before accepting real users or real proof files.
