import { supabase } from './supabaseClient';

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function signOut() {
  return supabase.auth.signOut();
}
