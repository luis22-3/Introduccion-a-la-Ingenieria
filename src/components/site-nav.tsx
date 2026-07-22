import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/ramas", label: "Ramas" },
  { to: "/historia", label: "Historia" },
  { to: "/temas", label: "Temas" },
  { to: "/agremiaciones", label: "Agremiaciones" },
  { to: "/test", label: "Test de afinidad" },
  { to: "/actividades", label: "Actividades" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="h-9 w-9 rounded-xl gradient-hero grid place-items-center text-white font-bold shrink-0">
            II
          </span>
          <span className="font-display font-bold text-lg truncate">
            Intro a la <span className="gradient-text">Ingeniería</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
              activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/buscar"
            className="ml-2 h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-muted transition"
            aria-label="Buscar contenidos"
          >
            <Search className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-border"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/buscar"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-muted"
            >
              <Search className="h-4 w-4" /> Buscar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display font-bold text-base mb-2">
            Introducción a la Ingeniería
          </div>
          <p className="text-muted-foreground">
            Plataforma educativa para estudiantes de primer semestre. Explora
            ramas, historia y contexto profesional de la ingeniería.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Explora</div>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link to="/ramas" className="hover:text-foreground">Ramas de la ingeniería</Link></li>
            <li><Link to="/historia" className="hover:text-foreground">Historia y evolución</Link></li>
            <li><Link to="/agremiaciones" className="hover:text-foreground">Agremiaciones</Link></li>
            <li><Link to="/test" className="hover:text-foreground">Test de afinidad</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Materia</div>
          <p className="text-muted-foreground">
            Recurso académico desarrollado para la asignatura Introducción a la
            Ingeniería.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Introducción a la Ingeniería
      </div>
    </footer>
  );
}
