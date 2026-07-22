import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { courseTopics } from "@/lib/engineering-data";

export const Route = createFileRoute("/temas")({
  head: () => ({
    meta: [
      { title: "Temas de la Materia | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Contenidos temáticos de la asignatura Introducción a la Ingeniería, organizados por unidades.",
      },
      { property: "og:title", content: "Temas de la Materia" },
      {
        property: "og:description",
        content: "Programa temático de Introducción a la Ingeniería.",
      },
    ],
  }),
  component: Temas,
});

function Temas() {
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courseTopics.map((u) => (
            <div key={u.title} className="card-elegant p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                {u.unit}
              </div>
              <h2 className="mt-1 font-display font-semibold text-xl">
                {u.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {u.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
