import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/popfix";
import { PopFixLogo } from "@/components/PopFixLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-pop-black/70 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <PopFixLogo className="text-xl" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-tight text-zinc-300">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-pop-off transition-colors"
              activeProps={{ className: "text-pop-red" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center bg-pop-red text-white text-xs font-bold px-4 py-2.5 hover:bg-pop-red-deep transition-colors"
          >
            Demander un diagnostic
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="lg:hidden p-2 text-pop-off"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full min-h-[calc(100vh-4rem)] bg-pop-black border-t border-white/5 overflow-y-auto">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-6 py-5 text-2xl font-display font-bold tracking-tight border-b border-white/5 text-pop-off hover:text-pop-red"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="m-6 bg-pop-red text-white text-center py-4 font-bold uppercase tracking-widest text-sm"
            >
              Demander un diagnostic
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
