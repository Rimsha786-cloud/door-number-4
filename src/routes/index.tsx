import { createFileRoute } from "@tanstack/react-router";
import {
  GalleryPreview,
  Hero,
  homeSchema,
  Intro,
  PrivateEventsPromo,
  Signatures,
  WhatsOnPreview,
} from "@/components/home/HomeSections";
import { AwardsSection, LocationSection } from "@/components/site/sections";
import { getPhoto } from "@/lib/photos";
import { HOURS } from "@/lib/site";

const TITLE = "Door No. 4 — Award-Winning Cocktail Bar, Seven Mile Beach, Grand Cayman";
const DESCRIPTION =
  "Neighbourhood cocktail bar at The Grove, Seven Mile Beach. Expertly crafted cocktails, delicious bites and Caribbean hospitality. Reserve a table at Door No. 4.";

export const Route = createFileRoute("/")({
  head: () => {
    const hero = getPhoto("velvet-stools");
    const schema = {
      ...homeSchema(),
      openingHoursSpecification: HOURS.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.schema,
        opens: h.opens,
        closes: h.closes,
      })),
    };
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "preload",
          as: "image",
          href: hero.lg,
          imageSrcSet: `${hero.sm} 800w, ${hero.lg} 1800w`,
          imageSizes: "100vw",
          fetchPriority: "high",
        },
      ],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Signatures />
      <AwardsSection />
      <WhatsOnPreview />
      <GalleryPreview />
      <PrivateEventsPromo />
      <LocationSection />
    </>
  );
}
