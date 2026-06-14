-- Database schema for By REWARDS
-- This file is intended for Supabase PostgreSQL.

create type reward_request_status as enum (
  'draft',
  'submitted',
  'under_review',
  'needs_user_action',
  'approved',
  'rejected',
  'ready_for_payout',
  'paid',
  'cancelled'
);

create type partner_status as enum (
  'pending',
  'approved',
  'rejected',
  'suspended',
  'verified'
);

create type offer_status as enum (
  'draft',
  'pending_review',
  'active',
  'paused',
  'expired',
  'rejected'
);

create type wallet_transaction_type as enum (
  'reward_pending',
  'reward_approved',
  'reward_rejected',
  'payout_requested',
  'payout_paid',
  'admin_adjustment',
  'reversal'
);

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text not null default 'user',
  status text not null default 'active',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  full_name text,
  phone text,
  avatar_url text,
  country text,
  city text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table partners (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid references users(id),
  business_name text not null,
  business_type text,
  commercial_registration text,
  website_url text,
  store_url text,
  contact_email text,
  contact_phone text,
  status partner_status default 'pending',
  verified_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table offers (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid references partners(id) on delete cascade,
  title text not null,
  description text,
  image_url text,
  reward_type text not null check (reward_type in ('fixed','percentage')),
  reward_value numeric not null,
  min_purchase_amount numeric default 0,
  max_reward_amount numeric,
  start_date date not null,
  end_date date not null,
  usage_limit integer,
  terms text,
  purchase_url text,
  status offer_status default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table reward_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  partner_id uuid references partners(id),
  offer_id uuid references offers(id),
  order_number text,
  purchase_amount numeric not null,
  purchase_date date not null,
  receipt_file_url text not null,
  status reward_request_status default 'submitted',
  rejection_reason text,
  admin_notes text,
  reviewed_by uuid references users(id),
  reviewed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table wallets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  available_balance numeric default 0,
  pending_balance numeric default 0,
  paid_balance numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table wallet_transactions (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid references wallets(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  reward_request_id uuid references reward_requests(id),
  type wallet_transaction_type not null,
  amount numeric not null,
  status text default 'completed',
  description text,
  created_by uuid references users(id),
  created_at timestamptz default now()
);

create table payout_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  amount numeric not null,
  method text not null,
  destination text not null,
  status text default 'pending',
  reviewed_by uuid references users(id),
  reviewed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  message text not null,
  type text default 'info',
  read_at timestamptz,
  created_at timestamptz default now()
);

create table activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  old_value jsonb,
  new_value jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz default now()
);

create table fraud_flags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  reward_request_id uuid references reward_requests(id),
  flag_type text not null,
  severity integer default 1,
  description text,
  resolved_by uuid references users(id),
  resolved_at timestamptz,
  created_at timestamptz default now()
);

create table settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null,
  updated_by uuid references users(id),
  updated_at timestamptz default now()
);

create table partner_applications (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  business_type text,
  website_url text,
  contact_email text not null,
  contact_phone text,
  message text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text default 'new',
  created_at timestamptz default now()
);

-- Recommended indexes
create index idx_offers_status on offers(status);
create index idx_reward_requests_user on reward_requests(user_id);
create index idx_reward_requests_status on reward_requests(status);
create index idx_wallet_transactions_user on wallet_transactions(user_id);
create index idx_activity_logs_entity on activity_logs(entity_type, entity_id);
