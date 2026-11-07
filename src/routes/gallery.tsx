import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/site/Lightbox";
import { PageHero } from "@/components/site/PageHero";
import { ReserveBand } from "@/components/site/sections";
import { SmartImage } from "@/components/site/SmartImage";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from "@/lib/gallery";
import { ALT } from "@/lib/photos";
import { cn } from "@/lib/utils";

const TITLE = "Gallery — Inside Door No. 4, Grand Cayman";
const DESCRIPTION =
  "Step inside Door No. 4: the art deco bar, signature cocktails, food, the team and events at The Grove, Seven Mile Beach.";

const IDS = GALLERY_CATEGORIES.map((c) => c.id) as string[];

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): { c?: GalleryCategory | undefined } => {
    const c = search["c"];
    return { c: typeof c === "string" && IDS.includes(c) ? (c as GalleryCategory) : undefined };
  },
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
  component: GalleryPage,
});

function GalleryPage() {
  const { c = "all" } = Route.useSearch();
  const [index, setIndex] = useState<number | null>(null);
  const items = c === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === c);
  const photos = items.map((i) => i.photo);

  return (
    <>
      <PageHero
        photo="guests-stools"
        eyebrow="Gallery"
        title={
          <>
            Step <em className="text-gold">inside.</em>
          </>
        }
        intro="Cocktails, conversation and the warm glow of The Grove after dark."
      />

      <section aria-label="Photo gallery" className="bg-background py-16 sm:py-24">
        <div className="container-deco">
          <nav aria-label="Filter photos" className="flex flex-wrap gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to="/gallery"
                search={cat.id === "all" ? {} : { c: cat.id }}
                resetScroll={false}
                replace
                aria-current={c === cat.id ? "page" : undefined}
                className={cn(
                  "border px-5 py-3 text-[0.68rem] font-semibold tracking-[0.24em] uppercase transition-colors",
                  c === cat.id
                    ? "border-emerald bg-emerald text-ivory"
                    : "border-border text-muted-foreground hover:border-charcoal hover:text-foreground",
                )}
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          <ul className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
            <AnimatePresence initial={false}>
              {items.map((item, i) => (
                <motion.li
                  key={item.photo}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 break-inside-avoid lg:mb-6"
                >
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`View larger: ${ALT[item.photo]}`}
                    className="group relative block w-full overflow-hidden bg-muted"
                  >
                    <SmartImage
                      photo={item.photo}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      decorative
                      className="h-auto transition-transform duration-[1.6s] ease-deco group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/20" />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </section>

      <Lightbox photos={photos} index={index} onIndexChange={setIndex} />
      <ReserveBand />
    </>
  );
}
