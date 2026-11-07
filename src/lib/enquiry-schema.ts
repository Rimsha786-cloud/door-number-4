import { z } from "zod";

export const GENERAL_SUBJECTS = [
  "General enquiry",
  "Large group booking",
  "Christmas party",
  "Press & media",
  "Other",
] as const;

export const EVENT_TYPES = [
  "Venue buyout",
  "Partial venue hire",
  "Cocktail class",
  "Private bartender services",
  "Bottled cocktails",
  "Festival bar services",
  "Holiday / Christmas party",
  "Other",
] as const;

const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const enquirySchema = z.object({
  kind: z.enum(["general", "private_event"]),
  firstName: z.string().trim().min(1, "Please enter your first name").max(80, "Too long"),
  lastName: z.string().trim().min(1, "Please enter your last name").max(80, "Too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: optionalText(40).refine((v) => !v || /^[+()\d\s.-]{6,40}$/.test(v), "Please enter a valid phone number"),
  subject: z.string().trim().min(1, "Please choose an option").max(150),
  eventDate: optionalText(10).refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Please choose a valid date"),
  guestCount: optionalText(4).refine((v) => !v || (/^\d+$/.test(v) && Number(v) >= 1 && Number(v) <= 1000), "Enter a number between 1 and 1000"),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(2000, "Please keep your message under 2000 characters"),
  /** Honeypot — real visitors never fill this in. */
  website: z.string().max(200).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
