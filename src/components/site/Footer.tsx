import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { HOURS, NAV, SITE } from "@/lib/site";
import { Wordmark } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="tone-dark relative bg-charcoal pt-24 pb-10">
      <div className="container-deco">
        <div className="flex flex-col gap-10 border-b border-gold/20 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link to="/" aria-label="Door No. 4 — home" className="text-ivory">
              <Wordmark className="[&_span:last-child]:text-3xl sm:[&_span:last-child]:text-4xl" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Your neighbourhood cocktail bar, nestled just behind the blue waters of Seven Mile Beach.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={SITE.socials.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Door No. 4 on Instagram"
              className="grid h-12 w-12 place-items-center border border-gold/30 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.25} />
            </a>
            <a
              href={SITE.socials.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Door No. 4 on Facebook"
              className="grid h-12 w-12 place-items-center border border-gold/30 text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.25} />
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="eyebrow mb-5 font-sans text-gold">Visit</h2>
            <address className="text-sm leading-7 text-ivory/80 not-italic">
              {SITE.address.unit}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.area}, {SITE.address.city}
              <br />
              {SITE.address.postal}, {SITE.address.country}
            </address>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-gold underline-offset-4 hover:underline"
            >
              View map
            </a>
          </div>
          <div>
            <h2 className="eyebrow mb-5 font-sans text-gold">Opening hours</h2>
            <dl className="space-y-2 text-sm text-ivory/80">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 sm:block">
                  <dt>{h.days}</dt>
                  <dd className="text-ivory">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="eyebrow mb-5 font-sans text-gold">Contact</h2>
            <ul className="space-y-2 text-sm text-ivory/80">
              <li>
                Reservations:{" "}
                <a href={SITE.reservationsPhone.href} className="text-ivory hover:text-gold">
                  {SITE.reservationsPhone.display}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={SITE.generalPhone.href} className="text-ivory hover:text-gold">
                  {SITE.generalPhone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-ivory hover:text-gold">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.socials.instagram.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {SITE.socials.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-5 font-sans text-gold">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ivory/80 lg:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-gold">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/gallery" className="hover:text-gold">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gold/20 pt-8 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Door No. 4. All rights reserved. Please drink responsibly.</p>
          <Link to="/privacy" className="hover:text-gold">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
