import { cn } from "@/lib/utils";

export type CtaVariant = "gold" | "light" | "dark" | "emerald";

const base =
  "group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-[background-color,color,border-color,transform] duration-500 ease-deco active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4";

const variants: Record<CtaVariant, string> = {
  gold: "bg-gold text-charcoal hover:bg-ivory focus-visible:outline-gold",
  light: "border border-ivory/45 text-ivory hover:border-ivory hover:bg-ivory hover:text-charcoal focus-visible:outline-gold",
  dark: "border border-charcoal/35 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  emerald: "bg-emerald text-ivory hover:bg-charcoal",
};

export function ctaClass(variant: CtaVariant = "gold", className?: string) {
  return cn(base, variants[variant], className);
}

/** Small arrow that nudges on hover — use inside a `group` CTA or link. */
export function CtaArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 8"
      className={cn("h-2 w-6 transition-transform duration-500 ease-deco group-hover:translate-x-1", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 4h23M19 0.5 23 4l-4 3.5" />
    </svg>
  );
}

export const textLinkClass =
  "group inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] underline-offset-8 decoration-1 hover:underline";
