import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquirySchema } from "./enquiry-schema";

/** Public enquiry endpoint: validates on the server, then stores the enquiry. */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot filled in: pretend success, store nothing.
    if (data.website) return { ok: true as const };

    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) throw new Error("Enquiries are temporarily unavailable. Please email us instead.");

    const client = createClient<Database>(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await client.from("enquiries").insert({
      kind: data.kind,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject,
      message: data.message,
      event_date: data.eventDate || null,
      guest_count: data.guestCount ? Number(data.guestCount) : null,
    });

    if (error) {
      console.error("Enquiry insert failed", error.message);
      throw new Error("We couldn't send your message just now. Please try again or email us.");
    }
    return { ok: true as const };
  });
