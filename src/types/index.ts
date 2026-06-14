/**
 * Shared TypeScript definitions for the By REWARDS platform.  These
 * interfaces mirror the database tables defined in `db/schema.sql` and
 * provide a convenient source of truth when working with Supabase data.
 */

export type UserRole =
  | 'guest'
  | 'user'
  | 'partner'
  | 'reviewer'
  | 'moderator'
  | 'manager'
  | 'owner';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  country: string | null;
  city: string | null;
  created_at: string;
  updated_at: string;
}

export interface Partner {
  id: string;
  owner_user_id: string;
  business_name: string;
  business_type: string;
  commercial_registration: string | null;
  website_url: string | null;
  store_url: string | null;
  contact_email: string;
  contact_phone: string;
  status: string;
  verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Offer {
  id: string;
  partner_id: string;
  title: string;
  description: string;
  image_url: string | null;
  reward_type: string;
  reward_value: number;
  min_purchase_amount: number | null;
  max_reward_amount: number | null;
  start_date: string;
  end_date: string;
  usage_limit: number | null;
  terms: string | null;
  purchase_url: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface RewardRequest {
  id: string;
  user_id: string;
  partner_id: string;
  offer_id: string;
  order_number: string;
  purchase_amount: number;
  purchase_date: string;
  receipt_file_url: string;
  status: string;
  rejection_reason: string | null;
  admin_notes: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Wallet {
  id: string;
  user_id: string;
  available_balance: number;
  pending_balance: number;
  paid_balance: number;
  created_at: string;
  updated_at: string;
}

export interface WalletTransaction {
  id: string;
  wallet_id: string;
  user_id: string;
  reward_request_id: string | null;
  type: string;
  amount: number;
  status: string;
  description: string | null;
  created_by: string | null;
  created_at: string;
}

export interface PayoutRequest {
  id: string;
  user_id: string;
  amount: number;
  method: string;
  destination: string;
  status: string;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  read_at: string | null;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  actor_user_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  old_value: string | null;
  new_value: string | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
}

export interface FraudFlag {
  id: string;
  user_id: string;
  reward_request_id: string;
  flag_type: string;
  severity: number;
  description: string | null;
  resolved_by: string | null;
  resolved_at: string | null;
  created_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: string;
  updated_by: string | null;
  updated_at: string;
}
