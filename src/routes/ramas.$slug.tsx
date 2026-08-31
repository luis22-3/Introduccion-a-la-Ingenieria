import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  GraduationCap,
  
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
  Wrench,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";
import { branchDetails } from "@/lib/branch-details";

export const Route = createFileRoute("/ramas/$slug")({
  loader: ({ params }) => {
    const branch = branches.find((b) => b.slug === params.slug);
    if (!branch) throw notFound();
    return { branch, detail: branchDetails[branch.slug] };
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
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
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

function SectionTitle({
  kicker,
  title,
  note,
}: {
  kicker?: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        {kicker ? (
          <span className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
            {kicker}
          </span>
        ) : null}
        <h2 className={`text-2xl md:text-3xl font-bold ${kicker ? "mt-1" : ""}`}>{title}</h2>
      </div>
      {note ? (
        <p className="text-sm text-muted-foreground max-w-sm">{note}</p>
      ) : null}
    </div>
  );
}

function Sparkline({ pct }: { pct: number }) {
  // curva simple generada a partir del indicador de demanda
  const pts = [8, 22, 16, 34, 30, 48, 44, 62, pct].map((v, i, a) => {
    const x = (i / (a.length - 1)) * 100;
    const y = 40 - (v / 100) * 36;
    return `${x},${y}`;
  });
  return (
    <svg viewBox="0 0 100 40" className="mt-3 h-12 w-full" aria-hidden="true">
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BranchDetail() {
  const { branch, detail } = Route.useLoaderData();

  const lists: { icon: typeof Compass; title: string; items: string[] }[] = [
    { icon: Compass, title: "Áreas de aplicación", items: branch.areas },
    { icon: GraduationCap, title: "Perfil profesional", items: branch.profile },
    { icon: Briefcase, title: "Campos laborales", items: branch.jobs },
  ];

  const related = (detail?.related ?? [])
    .map((s) => branches.find((b) => b.slug === s))
    .filter(Boolean) as typeof branches;

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <Link
            to="/ramas"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Todas las ramas
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05]">
                {branch.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-primary-foreground/95">
                {branch.tagline}
              </p>
              <p className="mt-3 max-w-xl text-primary-foreground/80 leading-relaxed">
                {detail?.intro ?? branch.definition}
              </p>

              {detail ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    { icon: Calendar, big: detail.semesters, small: "Duración" },
                    { icon: TrendingUp, big: detail.demand, small: "Demanda laboral" },
                    { icon: Star, big: detail.satisfaction, small: "Satisfacción" },
                  ].map((c) => (
                    <div
                      key={c.small}
                      className="flex items-center gap-3 rounded-xl bg-background/10 border border-background/20 px-4 py-2.5 backdrop-blur-sm"
                    >
                      <c.icon className="h-4 w-4 text-primary-foreground/80" />
                      <div className="leading-tight">
                        <div className="font-display font-bold text-sm">{c.big}</div>
                        <div className="text-[11px] text-primary-foreground/70">{c.small}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/actividades"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-background text-foreground font-semibold shadow-elegant hover:opacity-90"
                >
                  Probar la actividad de esta rama <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/test"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-background/40 font-semibold hover:bg-background/10"
                >
                  Hacer el test de afinidad
                </Link>
              </div>
            </div>

            {/* tarjeta tipo "ficha de cuaderno" */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-background/10 rotate-2" />
              <div className="relative rounded-3xl bg-card text-card-foreground p-6 shadow-elegant -rotate-1">
                <div className="flex items-center justify-between">
                  <span className="text-6xl">{branch.icon}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Ficha de rama
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {branch.definition}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {branch.areas.slice(0, 4).map((a) => (
                    <span
                      key={a}
                      className="text-[11px] rounded-full border border-border px-2.5 py-1 text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {detail ? (
        <>
          {/* MÉTRICAS */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card-elegant p-5">
                <div className="text-xs text-muted-foreground">Demanda laboral</div>
                <div className="mt-1 text-3xl font-display font-bold">
                  {detail.demandPct}%
                </div>
                <Sparkline pct={detail.demandPct} />
              </div>
              <div className="card-elegant p-5">
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <Wallet className="h-3.5 w-3.5" /> Salario aproximado
                </div>
                <div className="mt-1 text-2xl font-display font-bold text-primary">
                  {detail.salaryRange}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Rango mensual en Colombia (junior → senior)
                </p>
              </div>
              <div className="card-elegant p-5">
                <div className="text-xs text-muted-foreground">Exigencia académica</div>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i <= detail.difficulty
                          ? "fill-primary text-primary"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {detail.difficultyNote}
                </p>
              </div>
              <div className="card-elegant p-5">
                <div className="text-xs text-muted-foreground">Modalidad</div>
                <div className="mt-1 text-lg font-display font-bold text-primary">
                  {detail.modality}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {detail.semesters} · matrícula COPNIA al graduarse
                </p>
              </div>
            </div>
          </section>

          {/* QUÉ HACE */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <SectionTitle
              kicker="En la práctica"
              title={`¿Qué hace un profesional de ${branch.name}?`}
              note="Lo que revisamos en clase y contrastamos con ofertas de empleo reales."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {lists.map((s, idx) => (
                <div
                  key={s.title}
                  className={`card-elegant p-6 ${idx === 1 ? "md:-mt-3" : ""}`}
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-lg">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* RUTA + LÍNEA DE TIEMPO */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card-elegant p-6">
                <h3 className="font-display font-semibold text-xl">
                  Ruta de aprendizaje
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cómo suele organizarse el plan de estudios.
                </p>
                <ol className="mt-6 relative border-l border-border/70 ml-4">
                  {detail.path.map((p) => (
                    <li key={p.label} className="ml-6 pb-6 last:pb-0">
                      <span className="absolute -left-[15px] h-7 w-7 rounded-full gradient-hero text-primary-foreground text-[11px] font-bold grid place-items-center">
                        {p.label}
                      </span>
                      <div className="font-semibold text-primary">{p.title}</div>
                      <p className="text-sm text-muted-foreground">{p.items}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-elegant p-6">
                <h3 className="font-display font-semibold text-xl">
                  Línea de tiempo profesional
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cargos típicos y rango salarial estimado.
                </p>
                <ul className="mt-6 space-y-3">
                  {detail.timeline.map((r, i) => (
                    <li
                      key={r.role}
                      className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/40 px-4 py-3"
                    >
                      <span className="h-8 w-8 shrink-0 rounded-lg bg-primary/10 text-primary grid place-items-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm font-medium">{r.role}</span>
                      <span className="text-sm font-display font-bold text-primary whitespace-nowrap">
                        {r.salary}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] text-muted-foreground">
                  Cifras aproximadas 2025, recopiladas de portales de empleo. Varían
                  por ciudad, empresa y sector.
                </p>
              </div>
            </div>
          </section>

          {/* HERRAMIENTAS + EMPRESAS */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card-elegant p-6">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h3 className="font-display font-semibold text-xl">
                    Herramientas que vas a usar
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {detail.tools.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-lg border border-border bg-background/50 px-3 py-2 text-sm font-medium ${
                        i % 3 === 0 ? "rotate-[-1deg]" : i % 3 === 1 ? "rotate-[1deg]" : ""
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-elegant p-6">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h3 className="font-display font-semibold text-xl">
                    Dónde podrías trabajar
                  </h3>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {detail.employers.map((e) => (
                    <div
                      key={e}
                      className="rounded-xl border border-border bg-background/40 px-3 py-3 text-sm text-center font-medium"
                    >
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
            <div className="grid gap-6">
              <div className="card-elegant p-6">

                <h3 className="font-display font-semibold text-xl">
                  Preguntas frecuentes
                </h3>
                <div className="mt-4 divide-y divide-border/70">
                  {detail.faqs.map((f) => (
                    <details key={f.q} className="group py-3">
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm font-medium">
                        {f.q}
                        <span className="text-primary transition-transform group-open:rotate-45 text-lg leading-none">
                          +
                        </span>
                      </summary>
                      <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* RELACIONADAS */}
          {related.length > 0 ? (
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
              <SectionTitle
                title="Ramas relacionadas"
                note="Comparten materias, herramientas o campos de trabajo."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/ramas/$slug"
                    params={{ slug: r.slug }}
                    className="card-elegant p-5 transition hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div
                      className={`h-11 w-11 rounded-xl bg-gradient-to-br ${r.color} grid place-items-center text-xl`}
                    >
                      {r.icon}
                    </div>
                    <div className="mt-3 font-display font-semibold">{r.name}</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {r.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="card-elegant p-8">
            <p className="text-lg text-muted-foreground">{branch.definition}</p>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="card-elegant p-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-display font-semibold text-lg">
                ¿Es esta tu rama?
              </h3>
              <p className="text-sm text-muted-foreground">
                Haz el test de afinidad o prueba el reto interactivo de la rama.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/test"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-elegant"
            >
              Hacer el test
            </Link>
            <Link
              to="/agremiaciones"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted"
            >
              Ver agremiaciones
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
