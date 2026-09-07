/*
# Create quote_requests table (single-tenant, no auth)

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting a quote
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone number
  - `project_type` (text, not null) — Residential, Commercial, Turnkey, or Industrial
  - `area_size` (text) — approximate area in sq ft
  - `details` (text) — additional project details from the user
  - `status` (text, default 'pending') — processing status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT (public quote form, no sign-in).
- Allow anon + authenticated SELECT (so the form can confirm submission).
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  area_size text,
  details text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_quote_requests" ON quote_requests;
CREATE POLICY "anon_select_quote_requests" ON quote_requests FOR SELECT
  TO anon, authenticated USING (true);
