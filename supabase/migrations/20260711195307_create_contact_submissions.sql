/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the parent's name
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — optional phone number
  - `cake_type` (text, nullable) — the type of cake they're interested in
  - `event_date` (date, nullable) — the date of the celebration
  - `message` (text, not null) — the inquiry message
  - `status` (text, default 'new') — tracking: new, contacted, completed
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public can submit forms).
- No SELECT/UPDATE/DELETE for anon — only the bakery owner (via service role) can read submissions.
- This is a no-auth app: the contact form is public, but submissions are private to the bakery.

3. Notes
- This table stores customer inquiries from the website contact form.
- Only INSERT is allowed for the anon role to prevent data leakage.
- The bakery owner reads submissions via the Supabase dashboard or service-role client.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  cake_type text,
  event_date date,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form (INSERT only)
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon — submissions are private to the bakery owner
