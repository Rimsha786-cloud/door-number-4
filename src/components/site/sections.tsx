import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { AWARD_LINES, AWARDS, HOURS, SITE } from "@/lib/site";
import { CtaArrow, ctaClass } from "./cta";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SmartImage } from "./SmartImage";

/** Deco fan ornament used as a quiet section divider. */
export function DecoFan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="0.75">
      <path d="M2 59a58 58 0 0 1 116 0" />
      <path d="M18 59a42 42 0 0 1 84 0" />
      <path d="M34 59a26 26 0 0 1 52 0" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = Math.PI - (i * Math.PI) / 8;
        return <path key={i} d={`M60 59L${60 + 58 * Math.cos(a)} ${59 - 58 * Math.sin(a)}`} opacity="0.5" />;
      })}
    </svg>
  );
}

export function AwardsMarquee() {
  const items = [...AWARD_LINES, ...AWARD_LINES];
  return (
    <div className="relative overflow-hidden border-y border-gold/25 py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((a, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl text-ivory/85 italic">
            {a}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function AwardsSection() {
  return (
    <section aria-labelledby="awards-title" className="tone-dark relative overflow-hidden bg-emerald py-24 sm:py-32">
      <DecoFan className="pointer-events-none absolute -top-10 left-1/2 w-[46rem] -translate-x-1/2 text-gold/15" />
      <div className="container-deco relative">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Awards & Recognition"
          title={
            <span id="awards-title">
              Recognised among the <em className="text-gold">very best.</em>
            </span>
          }
          intro="An island neighbourhood bar, celebrated on the world stage."
        />
      </div>
      <div className="mt-16">
        <AwardsMarquee />
      </div>
      <div className="container-deco relative mt-16">
        <ul className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a, i) => (
            <Reveal as="li" key={a.title + a.mark + a.detail} delay={(i % 4) * 0.08} className="bg-emerald p-8 lg:p-10">
              <p className="font-display text-5xl font-light text-gold">{a.mark}</p>
              <p className="mt-6 text-base leading-snug text-ivory">{a.title}</p>
              <p className="eyebrow mt-4 text-ivory/60">{a.detail}</p>
            </Reveal>
          ))}
          <li className="flex flex-col justify-between bg-emerald-deep p-8 lg:p-10">
            <p className="font-display text-2xl leading-snug font-light text-ivory italic">
              Come and see what the fuss is about.
            </p>
            <Link to="/contact" hash="reserve" className={ctaClass("gold", "mt-8 self-start")}>
              Reserve <CtaArrow />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function HoursList({ className }: { className?: string }) {
  return (
    <dl className={className}>
      {HOURS.map((h) => (
        <div key={h.days} className="flex items-baseline justify-between gap-6 border-b border-current/15 py-3">
          <dt>{h.days}</dt>
          <dd className="font-display text-xl">{h.time}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LocationSection() {
  return (
    <section aria-labelledby="visit-title" className="bg-background py-24 sm:py-32">
      <div className="container-deco grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Visit Us"
            title={<span id="visit-title">Find the door at The Grove.</span>}
            intro="Just behind the blue waters of Seven Mile Beach, with indoor and outdoor seating surrounded by the lush greenery of The Grove."
          />
          <Reveal delay={0.1} className="mt-12 space-y-10">
            <div className="flex gap-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-ink" strokeWidth={1.25} />
              <address className="leading-7 not-italic">
                {SITE.address.unit}, {SITE.address.street}
                <br />
                {SITE.address.area}, {SITE.address.city} {SITE.address.postal}
                <br />
                {SITE.address.country}
                <br />
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-ink underline underline-offset-4">
                  Get directions
                </a>
              </address>
            </div>
            <div className="flex gap-5">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-ink" strokeWidth={1.25} />
              <HoursList className="w-full" />
            </div>
            <div className="flex gap-5">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-ink" strokeWidth={1.25} />
              <p className="leading-7">
                Reservations{" "}
                <a href={SITE.reservationsPhone.href} className="font-medium underline-offset-4 hover:underline">
                  {SITE.reservationsPhone.display}
                </a>
                <br />
                <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">
                  {SITE.email}
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" hash="reserve" className={ctaClass("emerald")}>
              Reserve a table <CtaArrow />
            </Link>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className={ctaClass("dark")}>
              Open in Maps
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[5/4] lg:h-full lg:aspect-auto">
            <iframe
              title="Map showing Door No. 4 at The Grove, Seven Mile Beach"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.6] sepia-[0.15]"
            />
          </div>
          <div className="arch absolute -bottom-10 -left-6 hidden w-44 border-4 border-background shadow-deco sm:block lg:-left-12">
            <div className="aspect-[3/4]">
              <SmartImage photo="grove-night" sizes="180px" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ReserveBand() {
  return (
    <section className="tone-dark relative isolate overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-35">
        <SmartImage photo="bar-lights" sizes="100vw" decorative />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      <div className="container-deco flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          tone="dark"
          eyebrow="Reservations"
          title={
            <>
              Your table is <em className="text-gold">waiting.</em>
            </>
          }
          intro={`Call us on ${SITE.reservationsPhone.display} to reserve. Everyone is welcome at Door No. 4.`}
        />
        <Reveal delay={0.1} className="flex flex-wrap gap-4">
          <a href={SITE.reservationsPhone.href} className={ctaClass("gold")}>
            Call to reserve <CtaArrow />
          </a>
          <Link to="/contact" className={ctaClass("light")}>
            Contact us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
