-- Create waitlist table for Djeli
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from service role only (server actions)
CREATE POLICY "Service role can insert" ON waitlist
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Only allow service role to read
CREATE POLICY "Service role can read" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
