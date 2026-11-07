import { cn } from "@/lib/utils";

/** Arched-doorway monogram with the "4" — the brand's signature motif. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true" className={cn("h-9 w-auto", className)} fill="none">
      <path d="M3 47V19a17 17 0 0 1 34 0v28" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 47V20a12 12 0 0 1 24 0v27" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <text
        x="20"
        y="37"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="20"
        fill="currentColor"
      >
        4
      </text>
    </svg>
  );
}

export function Wordmark({ className, withMonogram = true }: { className?: string; withMonogram?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {withMonogram && <Monogram className="text-gold" />}
      <span className="font-display text-xl leading-none tracking-[0.3em] whitespace-nowrap">
        DOOR NO. 4
      </span>
    </span>
  );
}
