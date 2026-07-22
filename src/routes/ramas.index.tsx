import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";

export const Route = createFileRoute("/ramas/")({
  head: () => ({
    meta: [
      { title: "Ramas de la Ingeniería | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Conoce las principales ramas de la ingeniería: civil, mecánica, eléctrica, industrial, de sistemas, química, ambiental y electrónica.",
      },
      { property: "og:title", content: "Ramas de la Ingeniería" },
      {
        property: "og:description",
        content: "Explora las disciplinas de la ingeniería y sus campos de acción.",
      },
    ],
  }),
  component: RamasIndex,
});

function RamasIndex() {
  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Módulo</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Ramas de la <span className="gradient-text">ingeniería</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            La ingeniería se organiza en disciplinas especializadas. Cada una
            aborda problemas distintos con métodos, herramientas y perfiles
            profesionales propios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <Link
              key={b.slug}
              to="/ramas/$slug"
              params={{ slug: b.slug }}
              className="card-elegant p-6 group hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${b.color} grid place-items-center text-4xl`}>
                {b.icon}
              </div>
              <h2 className="mt-4 font-display font-semibold text-xl">{b.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
              <span className="mt-4 inline-block text-primary text-sm font-semibold group-hover:underline">
                Ver detalles →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
