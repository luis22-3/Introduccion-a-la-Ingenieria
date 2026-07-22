import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { RefreshCw, Trophy } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { branches } from "@/lib/engineering-data";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "Test de Afinidad | Introducción a la Ingeniería" },
      {
        name: "description",
        content:
          "Cuestionario breve para descubrir con cuál rama de la ingeniería tienes más afinidad.",
      },
      { property: "og:title", content: "Test de Afinidad" },
      {
        property: "og:description",
        content: "Autoevalúa tu interés por las distintas ramas de la ingeniería.",
      },
    ],
  }),
  component: TestAfinidad,
});

type Slug = (typeof branches)[number]["slug"];

const questions: {
  q: string;
  options: { label: string; weight: Partial<Record<Slug, number>> }[];
}[] = [
  {
    q: "¿Qué tipo de problema te motiva más resolver?",
    options: [
      { label: "Diseñar un puente o edificio resistente", weight: { civil: 3, mecanica: 1 } },
      { label: "Programar una app o entrenar un modelo de IA", weight: { sistemas: 3, electronica: 1 } },
      { label: "Optimizar la producción de una empresa", weight: { industrial: 3 } },
      { label: "Reducir la contaminación de un río", weight: { ambiental: 3, quimica: 1 } },
    ],
  },
  {
    q: "¿Con qué herramienta te ves trabajando?",
    options: [
      { label: "Software CAD para diseñar máquinas", weight: { mecanica: 3, civil: 1 } },
      { label: "Un osciloscopio o circuito", weight: { electrica: 3, electronica: 2 } },
      { label: "Un laboratorio químico", weight: { quimica: 3, ambiental: 1 } },
      { label: "Un editor de código y datos", weight: { sistemas: 3 } },
    ],
  },
  {
    q: "¿Qué materia disfrutas más?",
    options: [
      { label: "Matemáticas y física", weight: { mecanica: 2, electrica: 2, civil: 1 } },
      { label: "Química y biología", weight: { quimica: 3, ambiental: 2 } },
      { label: "Estadística y administración", weight: { industrial: 3 } },
      { label: "Lógica y computación", weight: { sistemas: 3, electronica: 1 } },
    ],
  },
  {
    q: "¿Dónde te ves trabajando?",
    options: [
      { label: "En obra, al aire libre", weight: { civil: 3, ambiental: 1 } },
      { label: "En una fábrica o planta industrial", weight: { industrial: 2, mecanica: 2, quimica: 1 } },
      { label: "En una oficina de tecnología", weight: { sistemas: 3, electronica: 1 } },
      { label: "En una subestación o proyecto energético", weight: { electrica: 3 } },
    ],
  },
  {
    q: "¿Qué impacto quieres generar?",
    options: [
      { label: "Construir infraestructura para comunidades", weight: { civil: 3 } },
      { label: "Cuidar el medio ambiente", weight: { ambiental: 3, quimica: 1 } },
      { label: "Transformar empresas con tecnología", weight: { sistemas: 2, industrial: 2 } },
      { label: "Crear productos y máquinas innovadoras", weight: { mecanica: 2, electronica: 2 } },
    ],
  },
  {
    q: "¿Cómo prefieres trabajar?",
    options: [
      { label: "En equipo grande y multidisciplinar", weight: { industrial: 2, civil: 2 } },
      { label: "En equipos pequeños y ágiles", weight: { sistemas: 3 } },
      { label: "Con precisión técnica y detalle", weight: { electrica: 2, electronica: 2, mecanica: 1 } },
      { label: "En laboratorio o en campo", weight: { quimica: 2, ambiental: 3 } },
    ],
  },
];

function TestAfinidad() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
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
    return branches
      .map((b) => ({ ...b, score: scores[b.slug] ?? 0 }))
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const allAnswered = answers.every((a) => a !== null);
  const top = results[0];
  const maxScore = Math.max(1, top?.score ?? 1);

  function reset() {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Autoevaluación</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Test de <span className="gradient-text">afinidad</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Responde estas 6 preguntas para descubrir con cuál rama de la
            ingeniería tienes mayor afinidad. Los resultados son orientativos.
          </p>
        </div>

        {!submitted ? (
          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (allAnswered) setSubmitted(true);
            }}
          >
            {questions.map((q, i) => (
              <fieldset key={i} className="card-elegant p-6">
                <legend className="font-display font-semibold text-lg">
                  {i + 1}. {q.q}
                </legend>
                <div className="mt-4 grid gap-2">
                  {q.options.map((opt, j) => {
                    const id = `q${i}-o${j}`;
                    const selected = answers[i] === j;
                    return (
                      <label
                        key={id}
                        htmlFor={id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-muted"
                        }`}
                      >
                        <input
                          id={id}
                          type="radio"
                          name={`q${i}`}
                          checked={selected}
                          onChange={() => {
                            const next = [...answers];
                            next[i] = j;
                            setAnswers(next);
                          }}
                          className="h-4 w-4 accent-primary"
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={!allAnswered}
                className="px-6 py-3 rounded-xl gradient-hero text-white font-semibold shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ver resultado
              </button>
              <span className="text-sm text-muted-foreground">
                {answers.filter((a) => a !== null).length} / {questions.length} respondidas
              </span>
            </div>
          </form>
        ) : (
          <div className="mt-10 space-y-6">
            <div className="card-elegant p-8">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-accent" />
                <h2 className="font-display font-semibold text-xl">
                  Tu mayor afinidad
                </h2>
              </div>
              <div className="mt-6 flex items-start gap-5 flex-wrap">
                <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${top.color} grid place-items-center text-5xl shrink-0`}>
                  {top.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-bold">{top.name}</h3>
                  <p className="mt-2 text-muted-foreground">{top.definition}</p>
                  <Link
                    to="/ramas/$slug"
                    params={{ slug: top.slug }}
                    className="mt-4 inline-flex px-4 py-2 rounded-xl gradient-hero text-white text-sm font-semibold"
                  >
                    Explorar {top.name}
                  </Link>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-display font-semibold text-lg mb-4">
                Ranking completo
              </h3>
              <ul className="space-y-3">
                {results.map((r) => (
                  <li key={r.slug}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="flex items-center gap-2 font-medium">
                        <span>{r.icon}</span> {r.name}
                      </span>
                      <span className="text-muted-foreground">{r.score} pts</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-hero"
                        style={{ width: `${(r.score / maxScore) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card font-semibold hover:bg-muted"
            >
              <RefreshCw className="h-4 w-4" /> Volver a hacer el test
            </button>
          </div>
        )}
      </section>
      <SiteFooter />
    </>
  );
}
