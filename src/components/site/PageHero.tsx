import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { PhotoKey } from "@/lib/photos";
import { SmartImage } from "./SmartImage";

type Props = {
  photo: PhotoKey;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/** Cinematic image header used on every inner page. */
export function PageHero({ photo, eyebrow, title, intro, children }: Props) {
  return (
    <section className="tone-dark relative isolate flex min-h-[72svh] items-end overflow-hidden bg-charcoal pt-32 pb-16 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <SmartImage photo={photo} priority sizes="100vw" decorative />
        <div className="bg-hero-overlay absolute inset-0" />
      </div>
      <div className="container-deco">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="max-w-4xl"
        >
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold">
            <span aria-hidden="true" className="h-px w-10 bg-current" />
            {eyebrow}
          </p>
          <h1 className="text-5xl leading-[0.98] font-light sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <div className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">{intro}</div>}
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
