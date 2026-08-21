import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Lightbulb } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { historyMilestones } from "@/lib/engineering-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Historia y Evolución de la Ingeniería" },
      {
        name: "description",
        content:
          "Recorrido por la historia de la ingeniería: desde las primeras herramientas hasta la era digital y sostenible.",
      },
      { property: "og:title", content: "Historia de la Ingeniería" },
      {
        property: "og:description",
        content: "Línea de tiempo interactiva de la evolución de la ingeniería.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Historia,
});

function Historia() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Módulo</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Historia y <span className="gradient-text">evolución</span>
          </h1>
          <div className="mt-3 h-1 w-24 rounded-full gradient-hero" />
          <p className="mt-4 text-lg text-muted-foreground">
            Recorre los hitos clave que han dado forma a la ingeniería moderna.
          </p>
        </div>

        <ol className="mt-12 relative ml-4 sm:ml-6">
          <div
            className="absolute left-0 top-4 bottom-4 w-0.5 bg-border"
            aria-hidden
          />
          <div
            className="absolute left-0 top-4 w-0.5 gradient-hero transition-all duration-500"
            style={{
              height:
                open === null
                  ? "0%"
                  : `${((open + 1) / historyMilestones.length) * 100}%`,
            }}
            aria-hidden
          />

          {historyMilestones.map((m, i) => {
            const isOpen = open === i;
            const reached = open !== null && i <= open;
            return (
              <li key={m.title} className="relative mb-6 pl-10 sm:pl-14">
                <span
                  className={cn(
                    "absolute -left-5 top-6 h-10 w-10 rounded-full grid place-items-center text-sm font-bold border-2 transition-colors duration-300",
                    reached
                      ? "gradient-hero text-primary-foreground border-transparent shadow-elegant"
                      : "bg-card text-primary border-primary/40",
                  )}
                >
                  {i + 1}
                </span>

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "w-full text-left card-elegant p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant",
                    isOpen && "ring-2 ring-primary/40 shadow-elegant",
                  )}
                >
                  <div className="flex gap-4 sm:gap-6">
                    <div
                      className="hidden sm:grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-muted text-4xl"
                      aria-hidden
                    >
                      {m.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xl sm:text-2xl font-display font-bold text-primary">
                            {m.year}
                          </p>
                          <h2 className="mt-0.5 text-lg font-semibold">
                            <span className="sm:hidden mr-2" aria-hidden>
                              {m.icon}
                            </span>
                            {m.era}
                          </h2>
                        </div>
                        <ChevronDown
                          className={cn(
                            "mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      </div>

                      <p className="mt-2 text-sm font-medium text-accent">
                        {m.title}
                      </p>
                      <p className="mt-1 text-muted-foreground leading-relaxed">
                        {m.text}
                      </p>

                      <div className="mt-4 flex gap-3 rounded-xl bg-muted/70 border border-border/60 p-3">
                        <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide">
                            Dato curioso
                          </p>
                          <p className="mt-0.5 text-sm italic text-muted-foreground">
                            {m.fact}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "grid transition-all duration-300",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="space-y-2 border-l-2 border-primary/40 pl-4">
                            {m.more.map((d) => (
                              <li
                                key={d}
                                className="text-sm text-muted-foreground"
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-primary to-primary" />
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-wide text-primary">
            Para profundizar
          </h2>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-primary to-primary" />
        </div>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Complementa el recorrido con este video en español que explica la
          evolución histórica de la ingeniería, desde sus orígenes hasta la era
          digital y sostenible.
        </p>

        <div className="mt-8 card-elegant overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/otB-xjxqHT8"
              title="Historia y evolución de la ingeniería"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

