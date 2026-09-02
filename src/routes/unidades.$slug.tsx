import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  CalendarDays,
  FolderOpen,
  Lightbulb,
  Network,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { getUnitDetail, currentUnitSlug, unitDetails } from "@/lib/unit-details";
import { unitImages } from "@/lib/unit-images";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "temas-progreso";

export const Route = createFileRoute("/unidades/$slug")({
  loader: ({ params }) => {
    const unit = getUnitDetail(params.slug);
    if (!unit) throw notFound();
    return { unit };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unidad no encontrada | Introducción a la Ingeniería" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { unit } = loaderData;
    const title = `${unit.unit}: ${unit.title} | Introducción a la Ingeniería`;
    return {
      meta: [
        { title },
        { name: "description", content: unit.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: unit.intro },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: UnitPage,
});

function UnitPage() {
  const { unit } = Route.useLoaderData();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const setDone = (key: string, value: boolean) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const keyOf = (t: string) => `${unit.title}::${t}`;
  const doneCount = unit.subtopics.filter((s) => checked[keyOf(s.title)]).length;
  const progress = Math.round((doneCount / unit.subtopics.length) * 100);
  const isCurrent = unit.slug === currentUnitSlug;
  const index = unitDetails.findIndex((u) => u.slug === unit.slug);
  const nextUnit = unitDetails[index + 1];

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          to="/temas"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a Temas
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            {unit.unit} – {unit.title}
          </h1>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              <CheckCircle2 className="h-4 w-4" /> Unidad actual
            </span>
          )}
        </div>
        <p className="mt-3 max-w-3xl text-muted-foreground">{unit.intro}</p>

        {/* Resumen de progreso */}
        <div className="mt-6 grid gap-6 card-elegant p-5 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-sm font-semibold">Progreso de la unidad</p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {progress}% completado
            </p>
          </div>
          <div className="flex items-center gap-3 md:border-l md:border-border md:pl-6">
            <FolderOpen className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold">
                {doneCount}/{unit.subtopics.length} subtemas
              </p>
              <p className="text-xs text-muted-foreground">
                Subtemas completados
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:border-l md:border-border md:pl-6">
            <CalendarDays className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm font-semibold">
                Duración de la unidad: {unit.weeks} semanas
              </p>
              <p className="text-xs text-muted-foreground">({unit.weekRange})</p>
            </div>
          </div>
        </div>

        {/* Lista de subtemas */}
        <div className="mt-6 space-y-4">
          {unit.subtopics.map((s, i) => {
            const key = keyOf(s.title);
            const complete = !!checked[key];
            const expanded = open === i;
            return (
              <article key={s.title} className="card-elegant overflow-hidden">
                <div className="flex flex-wrap items-center gap-4 p-5">
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold",
                      complete
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground",
                    )}
                  >
                    {complete ? <Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <div className="min-w-[200px] flex-1">
                    <h2 className="font-display text-lg font-bold leading-tight">
                      {s.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{s.summary}</p>
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                      complete
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {complete ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <Clock className="h-3.5 w-3.5" />
                    )}
                    {complete ? "Completado" : "Pendiente"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? null : i)}
                    aria-expanded={expanded}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-muted"
                  >
                    Ver contenido
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    expanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-5 py-5">
                      <div className="flex items-start gap-3">
                        <Network className="mt-1 h-6 w-6 shrink-0 text-primary" />
                        <div className="space-y-3">
                          <h3 className="font-display text-base font-bold">
                            {s.heading}
                          </h3>
                          {s.paragraphs.map((p) => (
                            <p
                              key={p}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
                        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-bold">Dato clave</p>
                          <p className="text-sm text-muted-foreground">
                            {s.keyIdea}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setDone(key, !complete)}
                          className={cn(
                            "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            complete
                              ? "border border-border bg-card hover:bg-muted"
                              : "bg-primary text-primary-foreground hover:opacity-90",
                          )}
                        >
                          <Check className="h-4 w-4" />
                          {complete
                            ? "Marcar como pendiente"
                            : "Marcar como completado"}
                        </button>
                        {i < unit.subtopics.length - 1 && (
                          <button
                            type="button"
                            onClick={() => setOpen(i + 1)}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted"
                          >
                            Siguiente subtema
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-border px-5 py-2.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  Tiempo estimado: {s.estimate}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/temas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Volver a Temas
          </Link>
          {nextUnit && (
            <Link
              to="/unidades/$slug"
              params={{ slug: nextUnit.slug }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Siguiente unidad: {nextUnit.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
