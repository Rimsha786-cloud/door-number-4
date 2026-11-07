import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", className, as = "h2" }: Props) {
  const H = as;
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-6 flex items-center gap-4", align === "center" && "justify-center", tone === "dark" ? "text-gold" : "text-gold-ink")}>
          <span aria-hidden="true" className="h-px w-10 bg-current" />
          {eyebrow}
          {align === "center" && <span aria-hidden="true" className="h-px w-10 bg-current" />}
        </p>
      )}
      <H className="text-4xl leading-[1.02] font-light sm:text-5xl lg:text-6xl">{title}</H>
      {intro && (
        <div className={cn("mt-6 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ivory/75" : "text-muted-foreground")}>
          {intro}
        </div>
      )}
    </Reveal>
  );
}
