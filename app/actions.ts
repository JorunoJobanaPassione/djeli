"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function joinWaitlist(email: string, phone: string) {
  if (!supabaseUrl || !supabaseServiceKey) {
    // Dev mode - just return success
    return { success: true };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { error } = await supabase.from("waitlist").insert([
    {
      email: email || null,
      phone: phone || null,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
