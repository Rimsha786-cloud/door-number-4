CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  kind text NOT NULL DEFAULT 'general',
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  event_date date,
  guest_count integer,
  CONSTRAINT enquiries_kind_check CHECK (kind IN ('general', 'reservation', 'private_event')),
  CONSTRAINT enquiries_lengths_check CHECK (
    char_length(first_name) BETWEEN 1 AND 80
    AND char_length(last_name) BETWEEN 1 AND 80
    AND char_length(email) BETWEEN 3 AND 255
    AND (phone IS NULL OR char_length(phone) <= 40)
    AND (subject IS NULL OR char_length(subject) <= 150)
    AND char_length(message) BETWEEN 1 AND 2000
    AND (guest_count IS NULL OR guest_count BETWEEN 1 AND 1000)
  )
);

GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);