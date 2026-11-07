import * as Tabs from "@radix-ui/react-tabs";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { CtaArrow, ctaClass } from "@/components/site/cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ReserveBand } from "@/components/site/sections";
import { SmartImage } from "@/components/site/SmartImage";
import { EXTRA_DOWNLOADS, MENUS } from "@/lib/menus";

const TITLE = "Menus — Cocktails, Food & Sunday Roast | Door No. 4";
const DESCRIPTION =
  "Browse Door No. 4's cocktail list, kitchen menu, Happy Hour, Sunday Roast, Champagne Saturdays and kids' menu — crafted with local Cayman Islands ingredients.";

export const Route = createFileRoute("/menus")({
  validateSearch: (search: Record<string, unknown>): { menu?: string | undefined } => {
    const menu = search["menu"];
    return { menu: typeof menu === "string" ? menu : undefined };
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
  component: MenusPage,
});

function MenusPage() {
  const { menu } = Route.useSearch();
  const navigate = useNavigate({ from: "/menus" });
  const active = MENUS.some((m) => m.id === menu) ? (menu as string) : (MENUS[0]?.id ?? "cocktails");

  return (
    <>
      <PageHero
        photo="cocktail-trio"
        eyebrow="Menus"
        title={
          <>
            Expertly crafted, <em className="text-gold">locally inspired.</em>
          </>
        }
        intro="Cocktails and delicious bites, all made with the finest local ingredients from the Cayman Islands."
      />

      <section aria-label="Menus" className="bg-background pb-24 sm:pb-32">
        <Tabs.Root
          value={active}
          onValueChange={(v) => navigate({ search: { menu: v }, replace: true, resetScroll: false })}
        >
          <div className="sticky top-[4.25rem] z-30 border-b border-border bg-background/95 backdrop-blur-md">
            <div className="container-deco">
              <Tabs.List
                aria-label="Choose a menu"
                className="-mx-5 flex gap-1 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
              >
                {MENUS.map((m) => (
                  <Tabs.Trigger
                    key={m.id}
                    value={m.id}
                    className="relative shrink-0 px-4 py-5 text-[0.68rem] font-semibold tracking-[0.24em] whitespace-nowrap text-muted-foreground uppercase transition-colors hover:text-foreground data-[state=active]:text-foreground after:absolute after:inset-x-4 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gold-ink after:transition-transform after:duration-500 data-[state=active]:after:scale-x-100"
                  >
                    {m.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </div>
          </div>

          {MENUS.map((m) => (
            <Tabs.Content key={m.id} value={m.id} forceMount className="data-[state=inactive]:hidden focus-visible:outline-none">
              <div className="container-deco pt-16 sm:pt-24">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-8">
                    <p className="eyebrow mb-5 text-gold-ink">Door No. 4 · {m.label}</p>
                    <h2 className="text-5xl font-light sm:text-6xl">{m.label}</h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{m.intro}</p>
                  </div>
                  <div className="lg:col-span-4 lg:text-right">
                    <a href={m.pdf} target="_blank" rel="noopener noreferrer" className={ctaClass("dark")}>
                      <Download className="h-4 w-4" strokeWidth={1.25} /> Download menu
                    </a>
                  </div>
                </div>

                <div className="mt-16 space-y-20">
                  {m.sections.map((s) => (
                    <div key={s.title}>
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-b border-gold/40 pb-4">
                        <h3 className="font-display text-3xl font-normal text-gold-ink italic">{s.title}</h3>
                        {s.note && <p className="eyebrow text-muted-foreground">{s.note}</p>}
                      </div>
                      <ul className="mt-4 grid gap-x-16 md:grid-cols-2">
                        {s.items.map((it) => (
                          <li key={it.name} className="border-b border-border/70 py-6">
                            <div className="flex items-baseline gap-4">
                              <h4 className="font-display text-2xl leading-tight font-medium">{it.name}</h4>
                              <span aria-hidden="true" className="mb-1 flex-1 border-b border-dotted border-charcoal/25" />
                              {it.price && (
                                <span className="font-display text-xl">
                                  <span className="sr-only">CI$</span>
                                  {it.price}
                                </span>
                              )}
                            </div>
                            {(it.desc || it.tags) && (
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {it.desc}
                                {it.tags && <span className="ml-2 text-xs tracking-wider text-gold-ink">[{it.tags}]</span>}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {m.footnote && <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted-foreground">{m.footnote}</p>}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="container-deco mt-24">
          <div className="grid gap-px bg-border md:grid-cols-3">
            <Reveal className="relative min-h-64 overflow-hidden bg-charcoal md:row-span-2">
              <SmartImage photo="plated-dish" sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0" />
            </Reveal>
            {EXTRA_DOWNLOADS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 bg-background p-8 transition-colors hover:bg-secondary/60 md:col-span-2"
              >
                <span className="flex items-center gap-5">
                  <FileText className="h-6 w-6 text-gold-ink" strokeWidth={1} />
                  <span className="font-display text-2xl">{d.label}</span>
                </span>
                <CtaArrow />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Menus change with the seasons and the freshest produce on island. Please ask your server about today's selection.
          </p>
        </div>
      </section>

      <ReserveBand />
    </>
  );
}
