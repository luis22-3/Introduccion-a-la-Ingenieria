import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="h-9 w-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground font-bold shrink-0">
            II
          </span>
          <span className="font-display font-bold text-lg truncate">
            Intro a la <span className="gradient-text">Ingeniería</span>
          </span>
        </Link>

        <div className="flex items-center gap-2" ref={menuRef}>
          <Link
            to="/buscar"
            className="h-10 w-10 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted transition"
            aria-label="Buscar contenidos"
          >
            <Search className="h-4 w-4" />
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="h-10 inline-flex items-center gap-2 px-3 rounded-lg border border-border bg-card hover:bg-muted transition text-sm font-semibold uppercase tracking-wide"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-haspopup="menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span>Menú</span>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-popover text-popover-foreground shadow-elegant overflow-hidden animate-in fade-in slide-in-from-top-2"
              >
                <ul className="py-2">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition"
                        activeProps={{
                          className:
                            "block px-4 py-2.5 text-sm font-semibold text-primary bg-primary/10 border-l-2 border-primary",
                        }}
                        activeOptions={{ exact: l.to === "/" }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/50">
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
