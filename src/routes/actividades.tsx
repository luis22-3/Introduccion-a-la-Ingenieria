import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, RefreshCw, Trophy, Sparkles } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";
import { activities } from "@/lib/activities-data";

export const Route = createFileRoute("/actividades")({
  head: () => ({
    meta: [
      { title: "Actividades por rama | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Dinámicas interactivas para practicar retos propios de cada rama de la ingeniería: lógica, puentes, motores, circuitos y más.",
      },
      { property: "og:title", content: "Actividades interactivas por ingeniería" },
      {
        property: "og:description",
        content:
          "Resuelve retos por rama y construye paso a paso una solución de ingeniería.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ActividadesPage,
});

function ActividadesPage() {
  const available = branches.filter((b) => activities[b.slug]);
  const [selected, setSelected] = useState(available[0].slug);
  const branch = branches.find((b) => b.slug === selected)!;
  const activity = activities[selected];

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Dinámicas
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Actividades por <span className="gradient-text">rama</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige una rama y resuelve un reto propio de esa ingeniería. A
            medida que respondas correctamente, tu solución se irá
            construyendo en pantalla.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {available.map((b) => {
            const active = b.slug === selected;
            return (
              <button
                key={b.slug}
                onClick={() => setSelected(b.slug)}
                className={`px-3 py-2 rounded-xl border text-sm font-medium transition inline-flex items-center gap-2 ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:bg-muted"
                }`}
              >
                <span>{b.icon}</span> {b.name}
              </button>
            );
          })}
        </div>

        <ActivityRunner
          key={selected}
          activityKey={selected}
          title={activity.title}
          intro={activity.intro}
          gradient={branch.color}
        />
      </section>
      <SiteFooter />
    </>
  );
}

function ActivityRunner({
  activityKey,
  title,
  intro,
  gradient,
}: {
  activityKey: string;
  title: string;
  intro: string;
  gradient: string;
}) {
  const activity = activities[activityKey];
  const [stage, setStage] = useState(0); // number of correct answers so far
  const [feedback, setFeedback] = useState<
    | { kind: "ok"; text: string }
    | { kind: "err"; text: string }
    | null
  >(null);
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const done = stage >= activity.steps.length;
  const step = activity.steps[stage];
  const progressPct = useMemo(
    () => Math.round((stage / activity.steps.length) * 100),
    [stage, activity.steps.length],
  );

  function answer(optionIndex: number) {
    if (done) return;
    const opt = step.options[optionIndex];
    setAttempts((a) => a + 1);
    if (opt.correct) {
      setCorrectCount((c) => c + 1);
      setStage((s) => s + 1);
      setFeedback({ kind: "ok", text: `¡Correcto! Se agregó: ${step.builds}.` });
    } else {
      setFeedback({
        kind: "err",
        text: opt.hint ?? "No es la mejor opción. Intenta de nuevo.",
      });
    }
  }

  function reset() {
    setStage(0);
    setFeedback(null);
    setAttempts(0);
    setCorrectCount(0);
  }

  const accuracy = attempts === 0 ? 0 : Math.round((correctCount / attempts) * 100);

  return (
    <div className="mt-10 grid lg:grid-cols-2 gap-6">
      <div className="card-elegant p-6">
        <h2 className="font-display font-semibold text-xl">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{intro}</p>

        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Progreso</span>
            <span>
              {stage} / {activity.steps.length}
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full gradient-hero transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {!done ? (
          <div className="mt-6">
            <div className="font-medium">
              Paso {stage + 1}. {step.prompt}
            </div>
            <div className="mt-4 grid gap-2">
              {step.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  className="text-left px-4 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition text-sm"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {feedback && (
              <div
                className={`mt-4 flex items-start gap-2 text-sm rounded-lg px-3 py-2 ${
                  feedback.kind === "ok"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                    : "bg-red-500/10 text-red-700 dark:text-red-300"
                }`}
              >
                {feedback.kind === "ok" ? (
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
                )}
                <span>{feedback.text}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Trophy className="h-5 w-5" />
              <span className="font-semibold">¡Reto completado!</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Terminaste el desafío con {correctCount} aciertos en {attempts}{" "}
              intentos ({accuracy}% de precisión).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card font-semibold hover:bg-muted text-sm"
              >
                <RefreshCw className="h-4 w-4" /> Reintentar
              </button>
              <Link
                to="/ramas/$slug"
                params={{ slug: activityKey }}
                className="inline-flex items-center px-4 py-2 rounded-xl gradient-hero text-white font-semibold text-sm"
              >
                Ver la rama en detalle
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="card-elegant p-6">
        <h3 className="font-display font-semibold text-lg mb-4">
          Tu construcción
        </h3>
        <div
          className={`rounded-2xl p-6 min-h-[280px] bg-gradient-to-br ${gradient} text-white shadow-elegant flex items-center justify-center`}
        >
          <pre className="whitespace-pre-wrap text-center font-mono text-base md:text-lg leading-relaxed">
            {activity.stages[Math.min(stage, activity.stages.length - 1)]}
          </pre>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Cada respuesta correcta agrega un elemento a la escena hasta
          completar la solución.
        </p>
      </div>
    </div>
  );
}
