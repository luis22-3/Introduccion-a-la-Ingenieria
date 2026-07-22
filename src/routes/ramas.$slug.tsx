import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, Compass, GraduationCap, Target } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";

export const Route = createFileRoute("/ramas/$slug")({
  loader: ({ params }) => {
    const branch = branches.find((b) => b.slug === params.slug);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Rama no encontrada" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { branch } = loaderData;
    return {
      meta: [
        { title: `${branch.name} | Introducción a la Ingeniería` },
        { name: "description", content: branch.definition },
        { property: "og:title", content: branch.name },
        { property: "og:description", content: branch.definition },
      ],
    };
  },
  component: BranchDetail,
  notFoundComponent: () => (
    <>
      <SiteNav />
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Rama no encontrada</h1>
        <p className="mt-2 text-muted-foreground">
          La rama solicitada no existe.
        </p>
        <Link to="/ramas" className="mt-6 inline-block text-primary font-semibold">
          ← Volver a ramas
        </Link>
      </div>
      <SiteFooter />
    </>
  ),
});

function BranchDetail() {
  const { branch } = Route.useLoaderData();

  const sections = [
    { icon: Compass, title: "Áreas de aplicación", items: branch.areas },
    { icon: GraduationCap, title: "Perfil profesional", items: branch.profile },
    { icon: Briefcase, title: "Campos laborales", items: branch.jobs },
  ];

  return (
    <>
      <SiteNav />

      <section className={`bg-gradient-to-br ${branch.color} text-white`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/ramas"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Todas las ramas
          </Link>
          <div className="flex items-start gap-6 flex-wrap">
            <div className="text-7xl">{branch.icon}</div>
            <div className="min-w-0 flex-1">
              <h1 className="text-4xl md:text-5xl font-bold">{branch.name}</h1>
              <p className="mt-3 text-lg text-white/90 max-w-2xl">
                {branch.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="card-elegant p-8">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-xl">Definición</h2>
          </div>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {branch.definition}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <div key={s.title} className="card-elegant p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/test"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-hero text-white font-semibold shadow-elegant"
          >
            ¿Es esta tu rama? Haz el test
          </Link>
          <Link
            to="/agremiaciones"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted"
          >
            Ver agremiaciones
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
