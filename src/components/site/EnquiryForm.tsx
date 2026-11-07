import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useId, useState } from "react";
import { useForm, type FieldError, type UseFormRegisterReturn } from "react-hook-form";
import { submitEnquiry } from "@/lib/enquiries.functions";
import { EVENT_TYPES, GENERAL_SUBJECTS, enquirySchema, type EnquiryInput } from "@/lib/enquiry-schema";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CtaArrow, ctaClass } from "./cta";

type Props = { kind: EnquiryInput["kind"]; tone?: "light" | "dark" };

const fieldBase =
  "peer w-full appearance-none border-0 border-b bg-transparent px-0 pt-6 pb-2 text-base outline-none transition-colors placeholder:text-transparent focus:border-gold focus-visible:outline-none";

function Field({
  label,
  error,
  registration,
  type = "text",
  required,
  autoComplete,
  inputMode,
  tone,
}: {
  label: string;
  error?: FieldError | undefined;
  registration: UseFormRegisterReturn;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "numeric" | "tel" | "email";
  tone: "light" | "dark";
}) {
  const id = useId();
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={label}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        aria-required={required}
        className={cn(fieldBase, tone === "dark" ? "border-ivory/30 text-ivory [color-scheme:dark]" : "border-charcoal/25 text-charcoal", error && "border-destructive")}
        {...registration}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute top-0 left-0 text-[0.65rem] font-semibold tracking-[0.24em] uppercase transition-all",
          tone === "dark" ? "text-ivory/65" : "text-muted-foreground",
        )}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {error && (
        <p id={`${id}-err`} role="alert" className={cn("mt-2 text-xs", tone === "dark" ? "text-gold" : "text-destructive")}>
          {error.message}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ kind, tone = "light" }: Props) {
  const send = useServerFn(submitEnquiry);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const ids = { subject: useId(), message: useId() };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      kind,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      eventDate: "",
      guestCount: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      await send({ data: values });
      setStatus("sent");
      reset();
    } catch (e) {
      setStatus("error");
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  });

  const options = kind === "private_event" ? EVENT_TYPES : GENERAL_SUBJECTS;
  const muted = tone === "dark" ? "text-ivory/65" : "text-muted-foreground";

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          role="status"
          className={cn("border p-10 text-center", tone === "dark" ? "border-gold/30" : "border-charcoal/15")}
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold text-gold">
            <Check className="h-6 w-6" strokeWidth={1.25} />
          </span>
          <h3 className="mt-6 text-3xl font-light">Thank you — we've received your message.</h3>
          <p className={cn("mx-auto mt-4 max-w-md text-sm leading-relaxed", muted)}>
            Our team will be in touch soon. For anything urgent, call us on{" "}
            <a href={SITE.reservationsPhone.href} className="whitespace-nowrap underline underline-offset-4">
              {SITE.reservationsPhone.display}
            </a>
            .
          </p>
          <button type="button" onClick={() => setStatus("idle")} className={ctaClass(tone === "dark" ? "light" : "dark", "mt-8")}>
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={onSubmit}
          noValidate
          className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          <input type="hidden" {...register("kind")} />
          {/* Honeypot */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" {...register("website")} />
            </label>
          </div>

          <Field tone={tone} label="First name" required autoComplete="given-name" registration={register("firstName")} error={errors.firstName} />
          <Field tone={tone} label="Last name" required autoComplete="family-name" registration={register("lastName")} error={errors.lastName} />
          <Field tone={tone} label="Email" type="email" inputMode="email" required autoComplete="email" registration={register("email")} error={errors.email} />
          <Field tone={tone} label="Phone (optional)" type="tel" inputMode="tel" autoComplete="tel" registration={register("phone")} error={errors.phone} />

          <div className="relative sm:col-span-2">
            <label htmlFor={ids.subject} className={cn("block text-[0.65rem] font-semibold tracking-[0.24em] uppercase", muted)}>
              {kind === "private_event" ? "Type of event" : "Subject"}
              <span aria-hidden="true"> *</span>
            </label>
            <select
              id={ids.subject}
              aria-invalid={errors.subject ? true : undefined}
              aria-required
              className={cn(
                fieldBase,
                "cursor-pointer pt-3",
                tone === "dark" ? "border-ivory/30 text-ivory [&>option]:bg-charcoal" : "border-charcoal/25 text-charcoal",
                errors.subject && "border-destructive",
              )}
              {...register("subject")}
            >
              <option value="">Please choose…</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p role="alert" className={cn("mt-2 text-xs", tone === "dark" ? "text-gold" : "text-destructive")}>
                {errors.subject.message}
              </p>
            )}
          </div>

          {kind === "private_event" && (
            <>
              <Field tone={tone} label="Preferred date" type="date" registration={register("eventDate")} error={errors.eventDate} />
              <Field tone={tone} label="Approx. guests" inputMode="numeric" registration={register("guestCount")} error={errors.guestCount} />
            </>
          )}

          <div className="relative sm:col-span-2">
            <label htmlFor={ids.message} className={cn("block text-[0.65rem] font-semibold tracking-[0.24em] uppercase", muted)}>
              {kind === "private_event" ? "Tell us about your event" : "Message"}
              <span aria-hidden="true"> *</span>
            </label>
            <textarea
              id={ids.message}
              rows={5}
              aria-invalid={errors.message ? true : undefined}
              aria-required
              className={cn(
                fieldBase,
                "resize-y pt-3",
                tone === "dark" ? "border-ivory/30 text-ivory" : "border-charcoal/25 text-charcoal",
                errors.message && "border-destructive",
              )}
              {...register("message")}
            />
            {errors.message && (
              <p role="alert" className={cn("mt-2 text-xs", tone === "dark" ? "text-gold" : "text-destructive")}>
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className={cn("max-w-sm text-xs leading-relaxed", muted)}>
              We'll only use your details to reply to this enquiry. Reservations are confirmed by phone.
            </p>
            <button type="submit" disabled={isSubmitting} className={ctaClass(tone === "dark" ? "gold" : "emerald", "disabled:opacity-60")}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  {kind === "private_event" ? "Send enquiry" : "Send message"} <CtaArrow />
                </>
              )}
            </button>
          </div>
          {status === "error" && serverError && (
            <p role="alert" className={cn("text-sm sm:col-span-2", tone === "dark" ? "text-gold" : "text-destructive")}>
              {serverError} You can also email{" "}
              <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
                {SITE.email}
              </a>
              .
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
