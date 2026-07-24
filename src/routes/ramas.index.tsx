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
  const n = branches.length;
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

        <div className="mt-16 flex justify-center">
          <div
            className="relative wheel"
            style={{ width: "var(--wheel-size)", height: "var(--wheel-size)" }}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-border/60" />
            <div className="absolute inset-[10%] rounded-full border border-dashed border-border/50" />

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[38%] w-[38%] rounded-full gradient-hero text-primary-foreground shadow-elegant grid place-items-center text-center p-4 z-10">
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-80">
                  Explora
                </div>
                <div className="mt-1 font-display font-bold text-lg md:text-2xl leading-tight">
                  Ramas de la ingeniería
                </div>
                <div className="mt-2 text-[10px] md:text-xs opacity-80">
                  {n} disciplinas
                </div>
              </div>
            </div>

            {/* Orbit items */}
            {branches.map((b, i) => {
              const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 42; // % from center
              const y = 50 + Math.sin(angle) * 42;
              return (
                <Link
                  key={b.slug}
                  to="/ramas/$slug"
                  params={{ slug: b.slug }}
                  aria-label={b.name}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 h-[22%] w-[22%] rounded-full bg-card border border-border shadow-soft grid place-items-center text-center p-2 transition-all duration-300 hover:scale-125 hover:shadow-elegant hover:border-primary hover:z-20 hover:bg-primary hover:text-primary-foreground"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br ${b.color} grid place-items-center text-xl md:text-2xl transition-transform group-hover:scale-110`}
                    >
                      {b.icon}
                    </div>
                    <div className="font-display font-semibold text-[10px] md:text-xs leading-tight px-1">
                      {b.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hover tagline list (kept for accessibility / reference) */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Pasa el cursor sobre cada rama y haz clic para ver sus detalles.
        </p>
      </section>
      <SiteFooter />
    </>
  );
}

