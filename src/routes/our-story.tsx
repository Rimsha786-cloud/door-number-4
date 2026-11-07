import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaArrow, ctaClass } from "@/components/site/cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AwardsSection, DecoFan, ReserveBand } from "@/components/site/sections";
import { SmartImage } from "@/components/site/SmartImage";

const TITLE = "Our Story — Door No. 4, Grand Cayman";
const DESCRIPTION =
  "Founded by former Diageo Ambassador Simon Crompton, Door No. 4 brings tropical cocktail culture to a relaxed art deco space at The Grove, Seven Mile Beach.";

export const Route = createFileRoute("/our-story")({
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
  component: OurStory,
});

const PILLARS = [
  {
    n: "I",
    title: "Neighbourhood at heart",
    body: "At heart, it's a neighbourhood cocktail bar — a place to drop in, meet friends, and feel at home.",
  },
  {
    n: "II",
    title: "Caribbean hospitality",
    body: "The drinks menu is inspired by Caribbean hospitality, showcasing quality Caymanian ingredients in cocktails that are approachable, flavourful, and made to be enjoyed by everyone.",
  },
  {
    n: "III",
    title: "Elevated bar favourites",
    body: "Alongside the drinks, the menu features elevated bar favourites and shareable plates, perfect for casual evenings, celebrations, or anything in between.",
  },
];

function OurStory() {
  return (
    <>
      <PageHero
        photo="dining-room"
        eyebrow="Our Story"
        title={
          <>
            What's behind <em className="text-gold">Door No. 4?</em>
          </>
        }
        intro="The spirit of tropical cocktail culture, brought into a relaxed, modern setting."
      />

      <section aria-labelledby="founder-title" className="bg-background py-24 sm:py-36">
        <div className="container-deco grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Welcome to Door No. 4"
              title={
                <span id="founder-title">
                  Founded by former Diageo Ambassador <em className="text-gold-ink">Simon Crompton.</em>
                </span>
              }
            />
            <Reveal delay={0.1} className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Door No. 4 brings the spirit of tropical cocktail culture into a relaxed, modern setting — nestled just behind the stunning
                blue waters of Seven Mile Beach.
              </p>
              <p>
                Everyone is welcome to experience an inviting atmosphere that blends the charm of tropical cocktail culture with modern flair,
                drawing inspiration from the idyllic surroundings of The Grove.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="relative lg:col-span-5 lg:col-start-8">
            <div className="arch aspect-[3/4] shadow-deco">
              <SmartImage photo="bartender-garnish" sizes="(min-width: 1024px) 40vw, 90vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="tone-dark relative overflow-hidden bg-emerald py-24 sm:py-36">
        <DecoFan className="pointer-events-none absolute -bottom-6 left-1/2 w-[50rem] -translate-x-1/2 rotate-180 text-gold/10" />
        <div className="container-deco relative">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Our Philosophy"
            title={<span id="philosophy-title">Fun-loving Caribbean hospitality, every visit.</span>}
          />
          <ol className="mt-20 grid gap-px bg-gold/20 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 0.1} className="bg-emerald p-10 lg:p-12">
                <span className="font-display text-5xl font-light text-gold italic">{p.n}</span>
                <h3 className="mt-8 text-3xl font-light">{p.title}</h3>
                <p className="mt-5 leading-relaxed text-ivory/75">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="space-title" className="bg-background py-24 sm:py-36">
        <div className="container-deco">
          <SectionHeading
            eyebrow="Interior & Atmosphere"
            title={
              <span id="space-title">
                A laid-back art deco space, <em className="text-gold-ink">wrapped in greenery.</em>
              </span>
            }
            intro="Set in a laid-back art deco space, Door No. 4 offers both indoor and outdoor seating, surrounded by the lush greenery of The Grove — an easygoing spot to settle in and stay awhile."
          />
          <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-6">
            <Reveal className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden">
                <SmartImage photo="velvet-stools" sizes="(min-width: 768px) 58vw, 100vw" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:mt-24">
              <div className="arch aspect-[3/4] overflow-hidden">
                <SmartImage photo="grove-night" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden">
                <SmartImage photo="terrace-evening" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-7 md:-mt-24">
              <div className="aspect-[4/3] overflow-hidden">
                <SmartImage photo="bar-interior" sizes="(min-width: 768px) 58vw, 100vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="team-title" className="bg-secondary/60 py-24 sm:py-36">
        <div className="container-deco grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <SmartImage photo="team-smiles" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
            <div className="mt-16 aspect-[3/4] overflow-hidden">
              <SmartImage photo="bartender-mixing" sizes="(min-width: 1024px) 25vw, 50vw" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="The Team"
              title={<span id="team-title">The people behind the bar.</span>}
              intro="Our experienced team specialise in creating bespoke beverage programmes with pride and professionalism — and in making every guest feel at home."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
              <Link to="/menus" className={ctaClass("emerald")}>
                Explore our menus <CtaArrow />
              </Link>
              <Link to="/private-events" className={ctaClass("dark")}>
                Private events
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <AwardsSection />
      <ReserveBand />
    </>
  );
}
