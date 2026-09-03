import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, BookOpen, Users, Sparkles } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";
import heroGlass from "@/assets/hero-glass.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Introducción a la Ingeniería | Bienvenida" },
      {
        name: "description",
        content:
          "Bienvenido a la plataforma de la materia Introducción a la Ingeniería. Explora ramas, historia y descubre tu afinidad profesional.",
      },
      { property: "og:title", content: "Introducción a la Ingeniería" },
      {
        property: "og:description",
        content:
          "Recurso educativo para conocer la ingeniería, sus ramas, su historia y su contexto profesional.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteNav />

      <section className="relative overflow-hidden">
        {/* 3D glass background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroGlass}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>

        {/* Floating soft glows for depth */}
        <div className="absolute -z-10 left-[8%] top-[18%] h-40 w-40 rounded-full bg-secondary/40 blur-3xl animate-float" />
        <div className="absolute -z-10 right-[12%] bottom-[20%] h-56 w-56 rounded-full bg-primary-glow/30 blur-3xl animate-float-slow" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {["Descubre", "el", "mundo", "de", "la", "ingeniería"]
                .map((word, i) => (
                  <span
                    key={`${word}-${i}`}
                    className={`animate-title-word ${
                      i === 5 ? "gradient-text" : ""
                    }`}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {word}
                  </span>
                ))
                .flatMap((node, i) => (i === 0 ? [node] : [" ", node]))}
            </h1>

            <div
              className="animate-hero-fade"
              style={{ animationDelay: "0.45s" }}
            >
              <span className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Sparkles className="h-3 w-3" /> Materia: Introducción a la Ingeniería
              </span>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Una plataforma pensada para estudiantes de primer semestre.
                Conoce las ramas de la ingeniería, su historia, sus agremiaciones
                profesionales y descubre con cuál conectas mejor.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/ramas"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-hero text-white font-semibold shadow-elegant hover:opacity-95 transition"
                >
                  Explorar ramas <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/test"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted transition"
                >
                  Hacer el test de afinidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Explora 8+ ramas",
              text: "Conoce en profundidad las principales disciplinas de la ingeniería moderna.",
            },
            {
              icon: BookOpen,
              title: "Historia interactiva",
              text: "Recorre la evolución de la ingeniería desde la antigüedad hasta hoy.",
            },
            {
              icon: Users,
              title: "Contexto profesional",
              text: "Descubre las agremiaciones y campos laborales en Colombia.",
            },
          ].map((f) => (
            <div key={f.title} className="card-elegant p-6">
              <div className="h-11 w-11 rounded-xl gradient-hero grid place-items-center text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold">Ramas destacadas</h2>
            <p className="text-muted-foreground mt-2">
              Un vistazo rápido a las disciplinas que puedes explorar.
            </p>
          </div>
          <Link
            to="/ramas"
            className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.slice(0, 4).map((b) => (
            <Link
              key={b.slug}
              to="/ramas/$slug"
              params={{ slug: b.slug }}
              className="card-elegant p-6 group hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${b.color} grid place-items-center text-3xl`}>
                {b.icon}
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{b.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {b.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
