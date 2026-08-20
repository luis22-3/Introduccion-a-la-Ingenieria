import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Circle,
  HardHat,
  History,
  Network,
  Lightbulb,
  Briefcase,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { courseTopics } from "@/lib/engineering-data";
import { unitDetails } from "@/lib/unit-details";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/temas")({
  head: () => ({
    meta: [
      { title: "Temas de la Materia | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Contenidos temáticos de la asignatura Introducción a la Ingeniería, organizados por unidades con progreso e iconografía.",
      },
      { property: "og:title", content: "Temas de la Materia" },
      {
        property: "og:description",
        content: "Programa temático de Introducción a la Ingeniería.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Temas,
});

type UnitStyle = {
  icon: LucideIcon;
  accent: string;
  current?: boolean;
};

const unitStyles: UnitStyle[] = [
  { icon: HardHat, accent: "#235347" },
  { icon: History, accent: "#3f8f6f" },
  { icon: Network, accent: "#8CB79B", current: true },
  { icon: Lightbulb, accent: "#6b8f5a" },
  { icon: Briefcase, accent: "#173831" },
];

const STORAGE_KEY = "temas-progreso";

function ProgressRing({ value, accent }: { value: number; accent: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="relative h-[68px] w-[68px]">
        <svg viewBox="0 0 68 68" className="h-full w-full -rotate-90">
          <circle
            cx="34"
            cy="34"
            r={r}
            fill="none"
            strokeWidth="7"
            stroke="var(--color-muted)"
          />
          <circle
            cx="34"
            cy="34"
            r={r}
            fill="none"
            strokeWidth="7"
            strokeLinecap="round"
            stroke={accent}
            strokeDasharray={c}
            strokeDashoffset={c - (c * value) / 100}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-sm font-bold">
          {value}%
        </span>
      </div>
      <span className="text-[11px] text-muted-foreground">Completado</span>
    </div>
  );
}

function Temas() {
  const [open, setOpen] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };


  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Programa</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Temas de la <span className="gradient-text">materia</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Contenidos que se abordan a lo largo del curso Introducción a la
            Ingeniería.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {courseTopics.map((u, i) => {
            const style = unitStyles[i % unitStyles.length];
            const Icon = style.icon;
            const done = u.items.filter(
              (it) => checked[`${u.title}::${it}`],
            ).length;
            const progress = Math.round((done / u.items.length) * 100);
            const expanded = open === u.title;
            return (
              <article
                key={u.title}
                onClick={() => setOpen(expanded ? null : u.title)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden card-elegant p-6 pl-7",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elegant",
                  style.current && "ring-2 ring-primary/40",
                )}
              >
                <span
                  className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: style.accent }}
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute -top-3 right-4 select-none font-display text-7xl font-bold leading-none opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ color: style.accent }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start gap-4">
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${style.accent}1f` }}
                  >
                    <Icon className="h-8 w-8" style={{ color: style.accent }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {u.unit}
                      {style.current && (
                        <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] text-primary-foreground">
                          Unidad actual
                        </span>
                      )}
                    </div>
                    <h2 className="mt-1 font-display text-2xl font-bold leading-tight">
                      {u.title}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-5">
                  <ProgressRing value={progress} accent={style.accent} />
                  <ul className="min-w-0 flex-1 space-y-2.5">
                    {u.items.map((it) => {
                      const key = `${u.title}::${it}`;
                      const complete = !!checked[key];
                      return (
                        <li key={it}>
                          <button
                            type="button"
                            aria-pressed={complete}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggle(key);
                            }}
                            className="flex w-full items-start gap-2.5 rounded-md px-1 py-0.5 text-left text-sm leading-snug transition-colors duration-200 hover:bg-muted/60"
                          >
                            {complete ? (
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0"
                                style={{ color: style.accent }}
                              />
                            ) : (
                              <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                            )}
                            <span
                              className={cn(
                                !complete && "text-muted-foreground",
                              )}
                            >
                              {it}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    expanded
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border pt-4 text-sm text-muted-foreground">
                      {done} de {u.items.length} subtemas completados. Continúa
                      con “{u.items[Math.min(done, u.items.length - 1)]}” para
                      avanzar en esta unidad.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {done}/{u.items.length} subtemas · {unitDetails[i]?.weeks}{" "}
                    semanas
                  </span>
                  <Link
                    to="/unidades/$slug"
                    params={{ slug: unitDetails[i]?.slug ?? "" }}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1"
                  >
                    Comenzar
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

              </article>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
