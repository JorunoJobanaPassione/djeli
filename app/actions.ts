"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?225?\s?0?[0-9]{8,10}$/;

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\s/g, "");
  return PHONE_REGEX.test(cleaned);
}

export async function joinWaitlist(email: string, phone: string) {
  const hasValidEmail = email && validateEmail(email);
  const hasValidPhone = phone && validatePhone(phone);

  if (!hasValidEmail && !hasValidPhone) {
    return { success: false, error: "Email ou téléphone invalide" };
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    return { success: true };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { error } = await supabase.from("waitlist").upsert(
    {
      email: hasValidEmail ? email.trim().toLowerCase() : null,
      phone: hasValidPhone ? phone.replace(/\s/g, "") : null,
    },
    { onConflict: "email", ignoreDuplicates: true }
  );

  if (error) {
    return { success: false, error: "Erreur lors de l'inscription" };
  }

  return { success: true };
}
