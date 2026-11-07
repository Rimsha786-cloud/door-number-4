import { ALT, getPhoto, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

type Props = {
  photo: PhotoKey;
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string;
  /** Decorative images get empty alt text */
  decorative?: boolean;
};

/** Responsive, lazy-loaded WebP photo with intrinsic size to prevent layout shift. */
export function SmartImage({ photo, sizes = "100vw", priority, className, alt, decorative }: Props) {
  const p = getPhoto(photo);
  return (
    <img
      src={p.lg}
      srcSet={`${p.sm} 800w, ${p.lg} 1800w`}
      sizes={sizes}
      width={p.w}
      height={p.h}
      alt={decorative ? "" : (alt ?? ALT[photo])}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
