import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { associations } from "@/lib/engineering-data";

export const Route = createFileRoute("/agremiaciones")({
  head: () => ({
    meta: [
      { title: "Agremiaciones de Ingeniería en Colombia" },
      {
        name: "description",
        content:
          "Conoce las principales agremiaciones profesionales de ingeniería en Colombia: SCI, COPNIA, ACIEM, ACIS, ACOFI y más.",
      },
      { property: "og:title", content: "Agremiaciones de Ingeniería" },
      {
        property: "og:description",
        content: "Organizaciones profesionales que agrupan y regulan la ingeniería en Colombia.",
      },
    ],
  }),
  component: Agremiaciones,
});

function Agremiaciones() {
  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Contexto profesional</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Agremiaciones en <span className="gradient-text">Colombia</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Las agremiaciones profesionales agrupan a los ingenieros, promueven
            la ética, el desarrollo profesional y actúan como consultoras del
            Estado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {associations.map((a) => (
            <article key={a.acronym} className="card-elegant p-6">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-2xl gradient-hero grid place-items-center text-white font-display font-bold text-lg shrink-0">
                  {a.acronym.slice(0, 3)}
                </div>
                <div className="min-w-0">
                  <h2 className="font-display font-semibold text-lg">
                    {a.name}
                  </h2>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {a.focus}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {a.description}
              </p>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
              >
                Sitio oficial <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
