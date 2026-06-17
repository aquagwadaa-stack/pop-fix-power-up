import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, POPFIX } from "@/lib/popfix";
import logoAsset from "@/assets/popfix-logo.png.asset.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        solid
          ? "bg-pop-cream/90 backdrop-blur-xl border-b border-black/10"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="bg-white rounded-lg px-2 py-1.5 shadow-sm">
            <img
              src={logoAsset.url}
              alt="POP'FIX"
              className="h-9 w-auto"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`transition-colors ${
                solid ? "text-pop-warm-1 hover:text-pop-black" : "text-white/85 hover:text-white"
              }`}
              activeProps={{ className: "text-pop-red" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={POPFIX.phoneHref}
            aria-label="Appeler POP'FIX"
            className={`hidden sm:inline-flex items-center justify-center size-10 rounded-full border transition-colors ${
              solid
                ? "border-black/15 text-pop-black hover:bg-black/5"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Phone className="size-4" />
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center bg-pop-red text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-pop-red-deep transition-colors"
          >
            Demander un diagnostic
          </Link>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`lg:hidden p-2 ${solid ? "text-pop-black" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full min-h-[calc(100vh-4rem)] bg-pop-cream border-t border-black/10 overflow-y-auto">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-6 py-5 text-2xl font-display font-semibold border-b border-black/5 text-pop-black hover:text-pop-red"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="m-6 bg-pop-red text-white text-center py-4 font-semibold rounded-full"
            >
              Demander un diagnostic
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
