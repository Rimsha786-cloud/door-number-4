import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { CtaArrow, ctaClass, textLinkClass } from "@/components/site/cta";
import { Monogram } from "@/components/site/Logo";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DecoFan, ReserveBand } from "@/components/site/sections";
import { SmartImage } from "@/components/site/SmartImage";
import { SEASONAL, WEEKLY, type EventItem } from "@/lib/events";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const TITLE = "What's On — Happy Hour, Sunday Roast & Events | Door No. 4";
const DESCRIPTION =
  "Happy Hour Sunday–Thursday, Champagne Saturdays, Sunday Roast and seasonal events including the Christmas Miracle pop-up at Door No. 4, Grand Cayman.";

export const Route = createFileRoute("/whats-on")({
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
  component: WhatsOn,
});

function WhatsOn() {
  const [christmas, caymanLoves] = SEASONAL as [EventItem, EventItem];
  return (
    <>
      <PageHero
        photo="red-cocktails-raised"
        eyebrow="What's On"
        title={
          <>
            We <em className="text-gold">love</em> events.
          </>
        }
        intro="Weekly rituals, seasonal celebrations and guest bartenders from some of the world's most celebrated bars."
      />

      <section aria-labelledby="weekly-title" className="bg-background py-24 sm:py-32">
        <div className="container-deco">
          <SectionHeading eyebrow="Every Week" title={<span id="weekly-title">Weekly experiences.</span>} />
          <div className="mt-20 space-y-24 sm:space-y-32">
            {WEEKLY.map((e, i) => (
              <article
                key={e.id}
                id={e.id}
                aria-labelledby={`${e.id}-title`}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                  <div className={cn("aspect-[4/3] overflow-hidden shadow-deco", i % 2 === 1 && "arch aspect-[4/5]")}>
                    {e.photo && <SmartImage photo={e.photo} sizes="(min-width: 1024px) 50vw, 100vw" />}
                  </div>
                </Reveal>
                <Reveal delay={0.1} className={cn("lg:col-span-5", i % 2 === 1 ? "lg:order-1" : "lg:col-start-8")}>
                  <p className="eyebrow text-gold-ink">{e.when}</p>
                  <h3 id={`${e.id}-title`} className="mt-4 text-5xl font-light sm:text-6xl">
                    {e.title}
                  </h3>
                  <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                    {e.body.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    {e.menuId && (
                      <Link to="/menus" search={{ menu: e.menuId }} className={ctaClass("emerald")}>
                        See the menu <CtaArrow />
                      </Link>
                    )}
                    <a href={SITE.reservationsPhone.href} className={cn(textLinkClass, "text-foreground")}>
                      Call to reserve
                    </a>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="seasonal-title" className="tone-dark relative overflow-hidden bg-emerald py-24 sm:py-32">
        <DecoFan className="pointer-events-none absolute -top-8 right-0 w-[36rem] text-gold/10" />
        <div className="container-deco relative">
          <SectionHeading
            tone="dark"
            eyebrow="Seasonal & Annual"
            title={<span id="seasonal-title">Mark your calendar.</span>}
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal as="article" className="relative flex flex-col justify-between overflow-hidden border border-gold/30 bg-emerald-deep p-10 sm:p-14" id={christmas.id}>
              <Monogram className="absolute -right-6 -bottom-8 h-64 text-gold/10" />
              <div className="relative">
                <p className="eyebrow text-gold">{christmas.when}</p>
                <h3 className="mt-5 text-5xl font-light">{christmas.title}</h3>
                <div className="mt-6 space-y-4 leading-relaxed text-ivory/80">
                  {christmas.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </div>
              <div className="relative mt-10 flex flex-wrap gap-4">
                <a href={`mailto:${SITE.email}?subject=Christmas%20party%20enquiry`} className={ctaClass("gold")}>
                  Book your Christmas party <CtaArrow />
                </a>
              </div>
            </Reveal>
            <Reveal as="article" delay={0.1} className="group relative isolate flex min-h-[32rem] flex-col justify-end overflow-hidden p-10 sm:p-14" id={caymanLoves.id}>
              {caymanLoves.photo && (
                <div className="absolute inset-0 -z-10">
                  <SmartImage photo={caymanLoves.photo} sizes="(min-width: 1024px) 50vw, 100vw" className="transition-transform duration-[1.6s] ease-deco group-hover:scale-105" />
                  <div className="bg-card-overlay absolute inset-0" />
                </div>
              )}
              <p className="eyebrow text-gold">{caymanLoves.when}</p>
              <h3 className="mt-5 text-5xl font-light">{caymanLoves.title}</h3>
              <div className="mt-6 space-y-4 leading-relaxed text-ivory/85">
                {caymanLoves.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="socials-title" className="bg-secondary/60 py-24 sm:py-32">
        <div className="container-deco grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Events at Door No. 4"
            title={<span id="socials-title">There's always something happening.</span>}
            intro="Keep an eye on our socials to see what's happening next."
          />
          <Reveal delay={0.1} className="flex flex-wrap gap-4 lg:justify-end">
            <a href={SITE.socials.instagram.href} target="_blank" rel="noopener noreferrer" className={ctaClass("emerald")}>
              <Instagram className="h-4 w-4" strokeWidth={1.25} /> Follow {SITE.socials.instagram.handle}
            </a>
            <Link to="/gallery" search={{ c: "events" }} className={ctaClass("dark")}>
              View event gallery
            </Link>
          </Reveal>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
