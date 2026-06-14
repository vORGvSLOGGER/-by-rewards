import { createClient } from '@supabase/supabase-js';

/**
 * Initializes and exports a single Supabase client instance.  The URL and
 * anonymous key are expected to be defined in environment variables at
 * build/runtime.  You can use this client across your components and
 * server functions to query your Supabase database and storage.
 *
 * Note: In a real production deployment you should avoid exposing
 * service-level keys on the client.  Instead, use Row Level Security (RLS)
 * policies within Supabase and only rely on the `anon` public key from
 * the browser.  Admin-level operations should be performed in secure
 * server environments.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key';

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
