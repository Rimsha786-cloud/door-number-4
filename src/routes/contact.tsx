import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { CtaArrow, ctaClass } from "@/components/site/cta";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HoursList, LocationSection } from "@/components/site/sections";
import { SITE } from "@/lib/site";

const TITLE = "Contact & Reservations — Door No. 4, Seven Mile Beach";
const DESCRIPTION =
  "Reserve a table at Door No. 4 by phone on +1 345-746-3619. Find us at Unit 12, The Grove, 1358 W Bay Rd, Seven Mile Beach, Grand Cayman.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        photo="grove-night"
        eyebrow="Contact & Reservations"
        title={
          <>
            We'll keep the <em className="text-gold">door open.</em>
          </>
        }
        intro="Reserve a table, plan a celebration or simply say hello."
      />

      <section id="reserve" aria-labelledby="reserve-title" className="scroll-mt-20 bg-background py-24 sm:py-32">
        <div className="container-deco">
        <div className="grid gap-px bg-border lg:grid-cols-3">
          <Reveal className="bg-emerald p-10 text-ivory sm:p-14 lg:col-span-2 tone-dark">
            <p className="eyebrow text-gold">Reserve a table</p>
            <h2 id="reserve-title" className="mt-6 text-5xl font-light sm:text-6xl">
              Call now to reserve.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">
              Reservations are taken by phone. For large bookings, corporate parties or cocktail masterclasses, email our team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={SITE.reservationsPhone.href} className={ctaClass("gold")}>
                <Phone className="h-4 w-4" strokeWidth={1.25} /> {SITE.reservationsPhone.display}
              </a>
              <a href={`mailto:${SITE.email}?subject=Large%20booking%20enquiry`} className={ctaClass("light")}>
                <Mail className="h-4 w-4" strokeWidth={1.25} /> Email for large bookings
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="bg-background p-10 sm:p-14">
            <p className="eyebrow text-gold-ink">Opening hours</p>
            <HoursList className="mt-6" />
            <p className="mt-6 text-sm text-muted-foreground">Kitchen closes at 11pm.</p>
          </Reveal>
        </div>
        </div>
      </section>

      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-20 bg-secondary/60 py-24 sm:py-32">
        <div className="container-deco grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Get in touch"
              title={<span id="enquire-title">Send us a message.</span>}
              intro="Questions, large groups, press or anything else — we'd love to hear from you."
            />
            <Reveal delay={0.1} className="mt-10 space-y-2 text-sm text-muted-foreground">
              <p>
                General line:{" "}
                <a href={SITE.generalPhone.href} className="text-foreground underline underline-offset-4">
                  {SITE.generalPhone.display}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
                  {SITE.email}
                </a>
              </p>
              <a
                href={SITE.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-3 text-foreground"
              >
                Instagram {SITE.socials.instagram.handle} <CtaArrow />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="general" />
          </Reveal>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
