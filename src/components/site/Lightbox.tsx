import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { ALT, getPhoto, type PhotoKey } from "@/lib/photos";

type Props = {
  photos: PhotoKey[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

/** Accessible full-screen image viewer with keyboard and swipe-free arrow navigation. */
export function Lightbox({ photos, index, onIndexChange }: Props) {
  const open = index !== null;
  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndexChange((index + dir + photos.length) % photos.length);
    },
    [index, onIndexChange, photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const key = index !== null ? photos[index] : null;
  const p = key ? getPhoto(key) : null;

  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onIndexChange(null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-charcoal/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="tone-dark fixed inset-0 z-[71] flex flex-col items-center justify-center p-4 outline-none sm:p-10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Title className="sr-only">Photo viewer</Dialog.Title>
          <Dialog.Description className="sr-only">Use the left and right arrow keys to browse photos.</Dialog.Description>
          {key && p && (
            <figure className="flex max-h-full w-full flex-col items-center">
              <img
                key={key}
                src={p.lg}
                alt={ALT[key]}
                width={p.w}
                height={p.h}
                className="max-h-[78svh] w-auto max-w-full object-contain shadow-deco"
              />
              <figcaption className="mt-5 flex w-full max-w-3xl items-center justify-between gap-4 text-sm text-ivory/75">
                <span>{ALT[key]}</span>
                <span className="eyebrow shrink-0 text-gold">
                  {(index ?? 0) + 1} / {photos.length}
                </span>
              </figcaption>
            </figure>
          )}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute top-1/2 left-2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute top-1/2 right-2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <Dialog.Close
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 grid h-12 w-12 place-items-center border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold sm:top-6 sm:right-6"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
