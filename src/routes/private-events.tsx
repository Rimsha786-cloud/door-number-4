import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { CtaArrow, ctaClass } from "@/components/site/cta";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import type { PhotoKey } from "@/lib/photos";
import { DOCS, SITE } from "@/lib/site";

const TITLE = "Private Events, Venue Hire & Cocktail Classes | Door No. 4";
const DESCRIPTION =
  "Venue buyouts, private bartender services, cocktail classes, bottled cocktails and bespoke menus from Door No. 4, Grand Cayman. Enquire about your event.";

export const Route = createFileRoute("/private-events")({
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
  component: PrivateEvents,
});

const SERVICES = [
  {
    title: "Venue buyouts",
    body: "Our most popular option for corporate socials. Full or partial venue hire — the patio, dining room or high-top tables — available any day of the week.",
  },
  {
    title: "Private bartender services",
    body: "A world-class level of service in your own home or event space. Birthdays, weddings and everything in between — we bring the booze, equipment and staff.",
  },
  {
    title: "Cocktail classes",
    body: "Perfect for corporate events, team building or a bachelorette party. Led by our professional bartenders, with all equipment provided.",
  },
  {
    title: "Bottled cocktails",
    body: "Take-home bottled cocktails make memorable party favours, with personalised touches available.",
  },
  {
    title: "Bespoke menus",
    body: "Choose from house cocktails, classics, beers, wine and spirits — or have something created just for your occasion or theme.",
  },
  {
    title: "Festival bar services",
    body: "Our mobile cocktail cart is perfect for outdoor events, markets, parties and parades — your own espresso martini bar or spritz stand.",
  },
];

const STRIP: PhotoKey[] = ["cocktail-cart", "rose-glasses", "outdoor-event", "bottled-cocktails"];

const TESTIMONIALS = [
  {
    quote:
      "You guys made the party… the drinks were so good and you guys made sure we all had a fabulous time! I highly recommend your services!",
    name: "Blair Ebanks",
    org: "Plant Based Studio",
  },
  {
    quote: "Fantastic team and well worth booking for the great experience and services that they offer.",
    name: "Chef Eliot Wilkie",
    org: "Bespoke Catering Cayman",
  },
];

function PrivateEvents() {
  return (
    <>
      <PageHero
        photo="team-toast"
        eyebrow="Venue Hire & Buyouts"
        title={
          <>
            Unforgettable events, <em className="text-gold">crafted by our team.</em>
          </>
        }
        intro="Our team of experienced staff can turn your corporate or private event into an unforgettable experience."
      >
        <a href="#enquire" className={ctaClass("gold")}>
          Enquire about private events <CtaArrow />
        </a>
        <a href={DOCS.brochure} target="_blank" rel="noopener noreferrer" className={ctaClass("light")}>
          <Download className="h-4 w-4" strokeWidth={1.25} /> Service brochure
        </a>
      </PageHero>

      <section aria-labelledby="services-title" className="bg-background py-24 sm:py-32">
        <div className="container-deco">
          <SectionHeading
            eyebrow="What We Offer"
            title={
              <span id="services-title">
                Packages to suit your party size <em className="text-gold-ink">and budget.</em>
              </span>
            }
            intro="We specialise in creating bespoke beverage programmes with pride and professionalism."
          />
          <ul className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 0.08} className="group bg-background p-10 transition-colors duration-500 hover:bg-secondary/50">
                <span className="font-display text-lg text-gold-ink italic">0{i + 1}</span>
                <h3 className="mt-6 text-3xl font-light">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Event photography" className="bg-background pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {STRIP.map((p, i) => (
            <Reveal key={p} delay={i * 0.08} className="group aspect-[3/4] overflow-hidden">
              <SmartImage
                photo={p}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="transition-transform duration-[1.6s] ease-deco group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="holiday-title" className="tone-dark bg-emerald py-24 sm:py-32">
        <div className="container-deco grid gap-16 lg:grid-cols-2">
          <SectionHeading
            tone="dark"
            eyebrow="Holiday Parties"
            title={<span id="holiday-title">Planning a Christmas party?</span>}
            intro="Whether it's a work night out or a festive celebration with friends, Door No. 4 is the perfect place for your Christmas party. Bookings are recommended as early as possible to avoid disappointment."
          />
          <div className="space-y-10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="article" key={t.name} delay={i * 0.1} className="border-l border-gold/50 pl-8">
                <blockquote className="font-display text-2xl leading-snug font-light text-ivory italic sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <p className="eyebrow mt-5 text-gold">
                  {t.name} · <span className="text-ivory/65">{t.org}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-20 bg-background py-24 sm:py-32">
        <div className="container-deco grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Enquire"
              title={<span id="enquire-title">Tell us about your event.</span>}
              intro="Share a few details and our events team will be in touch to curate a quote for you."
            />
            <Reveal delay={0.1} className="mt-10 space-y-3 text-sm text-muted-foreground">
              <p>
                Prefer to talk?{" "}
                <a href={SITE.reservationsPhone.href} className="text-foreground underline underline-offset-4">
                  {SITE.reservationsPhone.display}
                </a>
              </p>
              <p>
                Or email{" "}
                <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
                  {SITE.email}
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm kind="private_event" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
