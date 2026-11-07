import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { CtaArrow, ctaClass, textLinkClass } from "@/components/site/cta";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SmartImage } from "@/components/site/SmartImage";
import { WEEKLY } from "@/lib/events";
import { SIGNATURES } from "@/lib/menus";
import { ALT, type PhotoKey } from "@/lib/photos";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  return (
    <section ref={ref} className="tone-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 will-change-transform">
        <SmartImage photo="velvet-stools" priority sizes="100vw" className="scale-105" />
      </motion.div>
      <div className="bg-hero-overlay absolute inset-0 -z-10" />

      <div className="container-deco pt-40 pb-24 sm:pb-28">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="eyebrow mb-8 flex items-center gap-4 text-gold"
          >
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            The Grove · Seven Mile Beach · Grand Cayman
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            className="text-[2.9rem] leading-[0.95] font-light sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
          >
            Where every evening becomes an <em className="text-gold">experience.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            Discover exceptional cocktails, Caribbean character and unforgettable evenings at Door No. 4, Grand Cayman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link to="/contact" hash="reserve" className={ctaClass("gold")}>
              Reserve a table <CtaArrow />
            </Link>
            <Link to="/menus" className={ctaClass("light")}>
              Explore our menus
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 hidden md:block">
        <div className="container-deco flex items-end justify-between pb-8">
          <p className="eyebrow text-ivory/60">#99 Best Bars North America, Canada & the Caribbean 2025</p>
          <a href="#enter" className="flex flex-col items-center gap-3 text-ivory/70 transition-colors hover:text-gold">
            <span className="eyebrow">Scroll</span>
            <span className="relative block h-12 w-px overflow-hidden bg-ivory/20">
              <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gold" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="enter" aria-labelledby="intro-title" className="relative scroll-mt-20 overflow-hidden bg-background py-24 sm:py-36">
      <div className="container-deco grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative lg:col-span-6">
          <div className="arch relative aspect-[4/5] max-w-xl shadow-deco">
            <SmartImage photo="bar-interior" sizes="(min-width: 1024px) 45vw, 90vw" />
          </div>
          <div className="absolute -right-2 -bottom-12 w-40 border-[6px] border-background shadow-deco sm:w-56 lg:-right-4">
            <div className="aspect-square">
              <SmartImage photo="terrace-evening" sizes="240px" />
            </div>
          </div>
          <p className="eyebrow absolute top-1/2 -left-2 hidden origin-left -translate-y-1/2 -rotate-90 text-gold-ink xl:block">
            Est. at The Grove
          </p>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading
            eyebrow="Enter Door No. 4"
            title={
              <span id="intro-title">
                An experience beyond the <em className="text-gold-ink">ordinary.</em>
              </span>
            }
          />
          <Reveal delay={0.1} className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p className="font-display text-2xl leading-snug text-foreground sm:text-[1.7rem]">
              Your go-to neighbourhood cocktail bar, nestled just behind the stunning blue waters of Seven Mile Beach.
            </p>
            <p>
              Here, we celebrate the vibrant spirit of the Caribbean with a refreshing twist. Our inviting atmosphere blends the charm of
              tropical cocktail culture with modern flair.
            </p>
            <p>
              Drawing inspiration from the idyllic surroundings of The Grove, our menus feature expertly crafted cocktails and delicious
              bites, made with the finest local ingredients from the Cayman Islands — fun-loving Caribbean hospitality where every visit
              feels like a celebration.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <Link to="/our-story" className={cn(textLinkClass, "text-foreground")}>
              Discover our story <CtaArrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SIGNATURE_PHOTOS: PhotoKey[] = ["pink-fizz", "green-highball", "golden-cocktail"];

export function Signatures() {
  return (
    <section aria-labelledby="sig-title" className="tone-dark relative overflow-hidden bg-charcoal py-24 sm:py-36">
      <div className="container-deco">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Signature Cocktails"
            title={
              <span id="sig-title">
                Caribbean spirit, <em className="text-gold">poured with precision.</em>
              </span>
            }
            intro="Approachable, flavourful cocktails showcasing quality Caymanian ingredients."
          />
          <Reveal delay={0.1}>
            <Link to="/menus" className={ctaClass("light")}>
              Explore our menus <CtaArrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {SIGNATURE_PHOTOS.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 0.1}
              className={cn("group relative overflow-hidden", i === 1 ? "sm:mt-16" : "", i === 0 ? "arch" : "")}
            >
              <div className="aspect-[3/4]">
                <SmartImage
                  photo={p}
                  sizes="(min-width: 640px) 30vw, 90vw"
                  className="transition-transform duration-[1.6s] ease-deco group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-x-16 border-t border-gold/25 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08} className="border-b border-gold/15 py-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-normal text-ivory">{c.name}</h3>
                <span className="eyebrow text-gold">0{i + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsOnPreview() {
  return (
    <section aria-labelledby="wo-title" className="bg-background py-24 sm:py-36">
      <div className="container-deco">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What's On"
            title={
              <span id="wo-title">
                Every week, <em className="text-gold-ink">a reason to return.</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <Link to="/whats-on" className={cn(textLinkClass, "text-foreground")}>
              All events & experiences <CtaArrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {WEEKLY.map((e, i) => (
            <Reveal as="article" key={e.id} delay={i * 0.1} className="group flex flex-col">
              <Link to="/whats-on" hash={e.id} className="block overflow-hidden" aria-label={`${e.title} — details`}>
                <div className={cn("aspect-[4/5] overflow-hidden", i === 1 && "arch")}>
                  {e.photo && (
                    <SmartImage
                      photo={e.photo}
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="transition-transform duration-[1.6s] ease-deco group-hover:scale-105"
                    />
                  )}
                </div>
              </Link>
              <p className="eyebrow mt-8 text-gold-ink">{e.when}</p>
              <h3 className="mt-3 text-3xl font-light sm:text-4xl">{e.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{e.summary}</p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link to="/menus" search={{ menu: e.menuId }} className={cn(textLinkClass, "text-foreground")}>
                  See the menu <CtaArrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY: { photo: PhotoKey; className: string }[] = [
  { photo: "dining-room", className: "col-span-2 row-span-2" },
  { photo: "punch-bowl", className: "row-span-2" },
  { photo: "team-toast", className: "col-span-1" },
  { photo: "tropical-cocktail", className: "col-span-1" },
  { photo: "plated-dish", className: "row-span-1" },
  { photo: "terrace-busy", className: "col-span-2" },
  { photo: "guests-stools", className: "col-span-1" },
];

export function GalleryPreview() {
  const [index, setIndex] = useState<number | null>(null);
  const photos = GALLERY.map((g) => g.photo);
  return (
    <section aria-labelledby="gal-title" className="bg-secondary/60 py-24 sm:py-36">
      <div className="container-deco">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Atmosphere"
            title={
              <span id="gal-title">
                A laid-back art deco space, <em className="text-gold-ink">alive after dark.</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <Link to="/gallery" className={cn(textLinkClass, "text-foreground")}>
              View the full gallery <CtaArrow />
            </Link>
          </Reveal>
        </div>
        <Reveal className="mt-16 grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 lg:auto-rows-[14rem] lg:gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={g.photo}
              type="button"
              onClick={() => setIndex(i)}
              className={cn("group relative overflow-hidden bg-muted", g.className)}
              aria-label={`View larger: ${ALT[g.photo]}`}
            >
              <SmartImage
                photo={g.photo}
                decorative
                sizes="(min-width: 768px) 40vw, 50vw"
                className="transition-transform duration-[1.6s] ease-deco group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />
            </button>
          ))}
        </Reveal>
      </div>
      <Lightbox photos={photos} index={index} onIndexChange={setIndex} />
    </section>
  );
}

export function PrivateEventsPromo() {
  return (
    <section aria-labelledby="pe-title" className="tone-dark relative isolate overflow-hidden bg-emerald-deep">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[26rem] lg:min-h-[44rem]">
          <SmartImage photo="team-toast" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-emerald-deep/30" />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <SectionHeading
              tone="dark"
              eyebrow="Private Events"
              title={
                <span id="pe-title">
                  Your celebration, <em className="text-gold">behind our door.</em>
                </span>
              }
              intro="Our team of experienced staff can turn your corporate or private event into an unforgettable experience — with packages to suit your party size and budget."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ivory/80">
                {["Venue buyouts", "Private bartender services", "Cocktail classes", "Bottled cocktails", "Bespoke menus", "Festival bar services"].map(
                  (s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
                      {s}
                    </li>
                  ),
                )}
              </ul>
              <Link to="/private-events" hash="enquire" className={ctaClass("gold", "mt-12")}>
                Enquire about private events <CtaArrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export const homeSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: SITE.name,
  description:
    "Neighbourhood cocktail bar at The Grove, Seven Mile Beach, Grand Cayman — expertly crafted cocktails and delicious bites made with local Cayman Islands ingredients.",
  email: SITE.email,
  telephone: SITE.reservationsPhone.display,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.unit}, ${SITE.address.street}`,
    addressLocality: SITE.address.area,
    addressRegion: SITE.address.city,
    postalCode: SITE.address.postal,
    addressCountry: "KY",
  },
  sameAs: [SITE.socials.instagram.href, SITE.socials.facebook.href],
});
