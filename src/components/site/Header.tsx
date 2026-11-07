import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HOURS, NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ctaClass } from "./cta";
import { Wordmark } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-gold px-4 py-2 text-charcoal focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "tone-dark fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-700 ease-deco",
          solid
            ? "bg-charcoal/92 py-3 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_30%,transparent)] backdrop-blur-md"
            : "bg-transparent py-6",
        )}
      >
        <div className="container-deco flex items-center justify-between gap-6">
          <Link to="/" aria-label="Door No. 4 — home" className="relative z-10 text-ivory">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="group relative py-2 text-[0.7rem] font-medium tracking-[0.24em] text-ivory/80 uppercase transition-colors hover:text-ivory data-[status=active]:text-ivory"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-deco group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" hash="reserve" className={ctaClass("gold", "hidden px-5 py-3 sm:inline-flex")}>
              Reserve a table
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-10 grid h-11 w-11 place-items-center border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold xl:hidden"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.25} /> : <Menu className="h-5 w-5" strokeWidth={1.25} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="tone-dark fixed inset-0 z-40 flex flex-col overflow-y-auto bg-emerald-deep pt-28 pb-10 xl:hidden"
          >
            <nav aria-label="Mobile" className="container-deco flex-1">
              <ul className="space-y-1">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="flex items-baseline gap-5 border-b border-gold/15 py-4 font-display text-4xl font-light text-ivory transition-colors hover:text-gold data-[status=active]:text-gold sm:text-5xl"
                    >
                      <span className="eyebrow text-gold/80">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link to="/contact" hash="reserve" className={ctaClass("gold", "mt-10 w-full sm:w-auto")}>
                Reserve a table
              </Link>
            </nav>
            <div className="container-deco mt-12 grid gap-6 text-sm text-ivory/75 sm:grid-cols-2">
              <div>
                <p className="eyebrow mb-3 text-gold">Opening hours</p>
                {HOURS.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
              <div>
                <p className="eyebrow mb-3 text-gold">Reservations</p>
                <a href={SITE.reservationsPhone.href} className="hover:text-gold">
                  {SITE.reservationsPhone.display}
                </a>
                <br />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                  {SITE.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
