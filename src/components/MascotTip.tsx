import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mascot from "@/assets/mascot-popfix.png";

export function MascotTip({
  title = "La poussière est l'ennemie silencieuse de votre console.",
  body = "Plus elle s'accumule, plus votre appareil chauffe. Plus il chauffe, plus les composants s'usent prématurément. Un nettoyage interne régulier peut doubler la durée de vie de votre PS5, Xbox ou Switch.",
  ctaLabel = "Découvrir tous les conseils",
  ctaTo = "/conseils",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaTo?: "/conseils" | "/contact" | "/reparations";
}) {
  return (
    <section className="bg-pop-zinc border-y border-pop-red/30 relative overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-20 grid md:grid-cols-[auto_1fr] gap-10 items-center relative">
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src={mascot}
            alt="Mascotte POP'FIX — réparateur à dreadlocks"
            width={220}
            height={220}
            loading="lazy"
            className="size-48 md:size-56 object-contain drop-shadow-[0_0_30px_rgba(225,29,72,0.25)]"
          />
        </div>
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pop-black/60 border border-pop-cyan/30 text-pop-cyan text-[10px] font-mono uppercase tracking-[0.25em] font-bold mb-5">
            Le saviez-vous ?
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase leading-tight tracking-tight text-pop-off text-balance">
            {title}
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed text-pretty max-w-2xl">{body}</p>
          <Link
            to={ctaTo}
            className="mt-7 group inline-flex items-center gap-4 text-pop-off text-xs font-bold uppercase tracking-widest"
          >
            {ctaLabel}
            <span className="size-9 bg-pop-red flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
