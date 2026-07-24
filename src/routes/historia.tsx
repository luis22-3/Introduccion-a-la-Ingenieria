import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { historyMilestones } from "@/lib/engineering-data";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Historia y Evolución de la Ingeniería" },
      {
        name: "description",
        content:
          "Recorrido por la historia de la ingeniería: desde las primeras herramientas hasta la era digital y sostenible.",
      },
      { property: "og:title", content: "Historia de la Ingeniería" },
      {
        property: "og:description",
        content: "Línea de tiempo interactiva de la evolución de la ingeniería.",
      },
    ],
  }),
  component: Historia,
});

function Historia() {
  return (
    <>
      <SiteNav />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-semibold">Módulo</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">
            Historia y <span className="gradient-text">evolución</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            La ingeniería ha acompañado a la humanidad desde sus orígenes,
            transformándose junto con la ciencia, la tecnología y la sociedad.
          </p>
        </div>

        <ol className="mt-14 relative border-l-2 border-border ml-3">
          {historyMilestones.map((m, i) => (
            <li key={m.title} className="mb-10 ml-8">
              <span className="absolute -left-3 h-6 w-6 rounded-full gradient-hero grid place-items-center text-white text-xs font-bold shadow-elegant">
                {i + 1}
              </span>
              <div className="card-elegant p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                  <span className="text-primary">{m.era}</span>
                  <span className="text-muted-foreground">{m.year}</span>
                </div>
                <h2 className="mt-2 font-display font-semibold text-xl">
                  {m.title}
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {m.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-primary to-primary" />
          <h2 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-wide text-primary">
            Multimedia
          </h2>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-primary to-primary" />
        </div>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Complementa el recorrido con este video en español que explica la
          evolución histórica de la ingeniería, desde sus orígenes hasta la
          era digital y sostenible.
        </p>

        <div className="mt-8 card-elegant overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/otB-xjxqHT8"
              title="Historia y evolución de la ingeniería"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
