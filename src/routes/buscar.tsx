import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import {
  associations,
  branches,
  courseTopics,
  historyMilestones,
} from "@/lib/engineering-data";

export const Route = createFileRoute("/buscar")({
  head: () => ({
    meta: [
      { title: "Buscar contenidos | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Busca ramas, temas, hitos históricos y agremiaciones dentro de la plataforma.",
      },
      { property: "og:title", content: "Buscar contenidos" },
      { property: "og:description", content: "Búsqueda por palabra clave o categoría." },
    ],
  }),
  component: Buscar,
});

type Result = {
  kind: "Rama" | "Historia" | "Tema" | "Agremiación";
  title: string;
  snippet: string;
  to: string;
  params?: Record<string, string>;
};

function Buscar() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"todo" | Result["kind"]>("todo");

  const allItems: Result[] = useMemo(() => {
    const items: Result[] = [];
    branches.forEach((b) => {
      items.push({
        kind: "Rama",
        title: b.name,
        snippet: b.definition,
        to: "/ramas/$slug",
        params: { slug: b.slug },
      });
    });
    historyMilestones.forEach((m) => {
      items.push({
        kind: "Historia",
        title: `${m.era} · ${m.title}`,
        snippet: m.text,
        to: "/historia",
      });
    });
    courseTopics.forEach((u) => {
      items.push({
        kind: "Tema",
        title: `${u.unit}: ${u.title}`,
        snippet: u.items.join(" · "),
        to: "/temas",
      });
    });
    associations.forEach((a) => {
      items.push({
        kind: "Agremiación",
        title: `${a.acronym} — ${a.name}`,
        snippet: a.description,
        to: "/agremiaciones",
      });
    });
    return items;
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allItems.filter((it) => {
      if (category !== "todo" && it.kind !== category) return false;
      if (!needle) return true;
      return (
        it.title.toLowerCase().includes(needle) ||
        it.snippet.toLowerCase().includes(needle)
      );
    });
  }, [q, category, allItems]);

  const categories: Array<"todo" | Result["kind"]> = [
    "todo",
    "Rama",
    "Historia",
    "Tema",
    "Agremiación",
  ];

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Buscar <span className="gradient-text">contenidos</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Encuentra ramas, temas, hitos históricos y agremiaciones por palabra
          clave o categoría.
        </p>

        <div className="mt-8 card-elegant p-4 flex items-center gap-3">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <input
            id="search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ej. sistemas, energía, historia, COPNIA..."
            className="flex-1 bg-transparent outline-none text-base"
            autoFocus
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${
                category === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-muted"
              }`}
            >
              {c === "todo" ? "Todos" : c}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          <div className="text-sm text-muted-foreground">
            {results.length} resultado{results.length === 1 ? "" : "s"}
          </div>
          {results.map((r, i) => (
            <Link
              key={i}
              to={r.to as "/ramas/$slug"}
              params={r.params as { slug: string }}
              className="block card-elegant p-5 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {r.kind}
              </div>
              <div className="mt-1 font-display font-semibold text-lg">
                {r.title}
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {r.snippet}
              </p>
            </Link>
          ))}
          {results.length === 0 && (
            <div className="card-elegant p-8 text-center text-muted-foreground">
              No se encontraron resultados para "{q}".
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
