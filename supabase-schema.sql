-- Create waitlist table for Billio
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon/authenticated users
CREATE POLICY "Allow inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only allow service role to read
CREATE POLICY "Service role can read" ON waitlist
  FOR SELECT
  USING (auth.role() = 'service_role');
