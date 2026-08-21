import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  RefreshCw,
  Trophy,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  Code2,
  BarChart3,
  Leaf,
  Ruler,
  Zap,
  FlaskConical,
  Terminal,
  Sigma,
  Atom,
  ClipboardList,
  Binary,
  HardHat,
  Factory,
  Laptop,
  PlugZap,
  Landmark,
  Recycle,
  Rocket,
  Cog,
  Users,
  Gauge,
  Microscope,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "Test de Afinidad | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Cuestionario breve, paso a paso, para descubrir con cuál rama de la ingeniería tienes más afinidad.",
      },
      { property: "og:title", content: "Test de Afinidad" },
      {
        property: "og:description",
        content: "Autoevalúa tu interés por las distintas ramas de la ingeniería.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TestAfinidad,
});

type Slug = (typeof branches)[number]["slug"];

const questions: {
  q: string;
  options: { label: string; icon: LucideIcon; weight: Partial<Record<Slug, number>> }[];
}[] = [
  {
    q: "¿Qué tipo de problema te motiva más resolver?",
    options: [
      { label: "Diseñar un puente o edificio resistente", icon: Building2, weight: { civil: 3, mecanica: 1 } },
      { label: "Programar una app o entrenar un modelo de IA", icon: Code2, weight: { sistemas: 3, electronica: 1 } },
      { label: "Optimizar la producción de una empresa", icon: BarChart3, weight: { industrial: 3 } },
      { label: "Reducir la contaminación de un río", icon: Leaf, weight: { ambiental: 3, quimica: 1 } },
    ],
  },
  {
    q: "¿Con qué herramienta te ves trabajando?",
    options: [
      { label: "Software CAD para diseñar máquinas", icon: Ruler, weight: { mecanica: 3, civil: 1 } },
      { label: "Un osciloscopio o circuito", icon: Zap, weight: { electrica: 3, electronica: 2 } },
      { label: "Un laboratorio químico", icon: FlaskConical, weight: { quimica: 3, ambiental: 1 } },
      { label: "Un editor de código y datos", icon: Terminal, weight: { sistemas: 3 } },
    ],
  },
  {
    q: "¿Qué materia disfrutas más?",
    options: [
      { label: "Matemáticas y física", icon: Sigma, weight: { mecanica: 2, electrica: 2, civil: 1 } },
      { label: "Química y biología", icon: Atom, weight: { quimica: 3, ambiental: 2 } },
      { label: "Estadística y administración", icon: ClipboardList, weight: { industrial: 3 } },
      { label: "Lógica y computación", icon: Binary, weight: { sistemas: 3, electronica: 1 } },
    ],
  },
  {
    q: "¿Dónde te ves trabajando?",
    options: [
      { label: "En obra, al aire libre", icon: HardHat, weight: { civil: 3, ambiental: 1 } },
      { label: "En una fábrica o planta industrial", icon: Factory, weight: { industrial: 2, mecanica: 2, quimica: 1 } },
      { label: "En una oficina de tecnología", icon: Laptop, weight: { sistemas: 3, electronica: 1 } },
      { label: "En una subestación o proyecto energético", icon: PlugZap, weight: { electrica: 3 } },
    ],
  },
  {
    q: "¿Qué impacto quieres generar?",
    options: [
      { label: "Construir infraestructura para comunidades", icon: Landmark, weight: { civil: 3 } },
      { label: "Cuidar el medio ambiente", icon: Recycle, weight: { ambiental: 3, quimica: 1 } },
      { label: "Transformar empresas con tecnología", icon: Rocket, weight: { sistemas: 2, industrial: 2 } },
      { label: "Crear productos y máquinas innovadoras", icon: Cog, weight: { mecanica: 2, electronica: 2 } },
    ],
  },
  {
    q: "¿Cómo prefieres trabajar?",
    options: [
      { label: "En equipo grande y multidisciplinar", icon: Users, weight: { industrial: 2, civil: 2 } },
      { label: "En equipos pequeños y ágiles", icon: Sparkles, weight: { sistemas: 3 } },
      { label: "Con precisión técnica y detalle", icon: Gauge, weight: { electrica: 2, electronica: 2, mecanica: 1 } },
      { label: "En laboratorio o en campo", icon: Microscope, weight: { quimica: 2, ambiental: 3 } },
    ],
  },
];

function affinityLabel(pct: number) {
  if (pct >= 70) return "Afinidad muy alta";
  if (pct >= 55) return "Afinidad alta";
  if (pct >= 40) return "Media-alta";
  if (pct >= 25) return "Media";
  return "Media-baja";
}

function TestAfinidad() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    const scores: Record<string, number> = {};
    branches.forEach((b) => (scores[b.slug] = 0));
    answers.forEach((a, i) => {
      if (a === null) return;
      const opt = questions[i].options[a];
      Object.entries(opt.weight).forEach(([slug, w]) => {
        scores[slug] = (scores[slug] ?? 0) + (w ?? 0);
      });
    });
    const sorted = branches
      .map((b) => ({ ...b, score: scores[b.slug] ?? 0 }))
      .sort((a, b) => b.score - a.score);
    const max = Math.max(1, sorted[0]?.score ?? 1);
    return sorted.map((r) => ({
      ...r,
      pct: Math.round((r.score / max) * 100),
    }));
  }, [answers]);

  const answeredCount = answers.filter((a) => a !== null).length;
  const allAnswered = answers.every((a) => a !== null);
  const top = results[0];
  const current = questions[step];
  const isLast = step === questions.length - 1;

  function choose(j: number) {
    const next = [...answers];
    next[step] = j;
    setAnswers(next);
  }

  function reset() {
    setAnswers(Array(questions.length).fill(null));
    setStep(0);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        {!submitted ? (
          <>
            <div className="text-center">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Pregunta {step + 1} de {questions.length}
              </span>
              <div
                className="mt-3 h-3 rounded-full bg-muted overflow-hidden"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={questions.length}
                aria-valuenow={step + 1}
              >
                <div
                  className="h-full gradient-hero rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {answeredCount} / {questions.length} respondidas
              </p>
            </div>

            <div key={step} className="animate-fade-in">
              <h1 className="mt-8 text-center text-2xl md:text-3xl font-bold">
                {step + 1}. {current.q}
              </h1>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {current.options.map((opt, j) => {
                  const selected = answers[step] === j;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={j}
                      type="button"
                      onClick={() => choose(j)}
                      aria-pressed={selected}
                      className={`relative text-left p-5 rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                        selected
                          ? "border-primary ring-2 ring-primary/30 bg-primary/5 shadow-elegant"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      {selected && (
                        <span className="absolute top-3 right-3 h-6 w-6 rounded-full gradient-hero grid place-items-center animate-scale-in">
                          <Check className="h-3.5 w-3.5 text-primary-foreground" />
                        </span>
                      )}
                      <span
                        className={`grid place-items-center h-12 w-12 rounded-full border transition-colors ${
                          selected
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-4 block text-sm font-semibold leading-snug">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <ArrowLeft className="h-4 w-4" /> Anterior
              </button>
              {isLast ? (
                <button
                  type="button"
                  onClick={() => allAnswered && setSubmitted(true)}
                  disabled={!allAnswered}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Ver resultado <Trophy className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(questions.length - 1, s + 1))}
                  disabled={answers[step] === null}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Siguiente <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-primary text-sm font-semibold">Resultado</span>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold">
                Tu <span className="gradient-text">resultado</span>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Basado en tus intereses, habilidades y preferencias, esta es tu
                afinidad con las ramas de la ingeniería.
              </p>
            </div>

            <div className="card-elegant p-8">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
                <div className="flex items-start gap-5 flex-wrap">
                  <div
                    className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${top.color} grid place-items-center text-5xl shrink-0`}
                  >
                    {top.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                      Rama con mayor afinidad
                    </span>
                    <h2 className="mt-1 text-2xl md:text-3xl font-bold">{top.name}</h2>
                    <p className="mt-3 text-muted-foreground">{top.definition}</p>
                    <p className="mt-3 text-sm">
                      <Compass className="inline h-4 w-4 mr-1 text-primary" />
                      Recomendación: {top.tagline} Explora sus áreas y prueba la
                      actividad práctica de esta rama para confirmar tu interés.
                    </p>
                  </div>
                </div>
                <div className="md:w-52 rounded-2xl bg-muted/60 p-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                    Afinidad
                  </span>
                  <div className="mt-1 text-5xl font-bold text-primary">
                    {top.pct}
                    <span className="text-2xl">%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-background overflow-hidden">
                    <div className="h-full gradient-hero" style={{ width: `${top.pct}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {affinityLabel(top.pct)}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" /> Afinidad con otras ramas
              </h3>
              <ul className="space-y-4">
                {results.slice(1).map((r) => (
                  <li key={r.slug} className="grid grid-cols-[1fr] sm:grid-cols-[13rem_1fr_4rem_7rem] items-center gap-x-4 gap-y-1">
                    <span className="flex items-center gap-2 font-medium text-sm">
                      <span>{r.icon}</span> {r.name}
                    </span>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-hero transition-all duration-700"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-right">{r.pct}%</span>
                    <span className="text-xs text-muted-foreground">
                      {affinityLabel(r.pct)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted transition"
              >
                <RefreshCw className="h-4 w-4" /> Volver a hacer el test
              </button>
              <Link
                to="/ramas/$slug"
                params={{ slug: top.slug }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-elegant"
              >
                <Compass className="h-4 w-4" /> Explorar esta rama
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/actividades"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted transition"
              >
                <Sparkles className="h-4 w-4" /> Probar actividad de esta rama
              </Link>
            </div>
          </div>
        )}
      </section>
      <SiteFooter />
    </>
  );
}
