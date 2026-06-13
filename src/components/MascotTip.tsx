import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mascot from "@/assets/mascot-popfix.png";

export function MascotTip({
  title = "La poussière peut favoriser la surchauffe de vos appareils.",
  body = "Quelques gestes simples permettent de mieux protéger vos équipements. Retrouvez les conseils pratiques de POP'FIX et demandez un diagnostic en cas de doute.",
  ctaLabel = "Découvrir tous les conseils",
  ctaTo = "/conseils",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaTo?: "/conseils" | "/contact" | "/reparations";
}) {
  return (
    <section className="bg-pop-zinc border-y border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16 grid md:grid-cols-[150px_1fr] gap-8 items-center relative">
        <div className="shrink-0 mx-auto md:mx-0">
          <img
            src={mascot}
            alt="Mascotte POP'FIX — réparateur à dreadlocks"
            width={150}
            height={150}
            loading="lazy"
            className="size-32 md:size-36 object-cover object-top bg-white border-4 border-white"
          />
        </div>
        <div className="min-w-0">
          <div className="text-pop-red text-xs uppercase tracking-[0.16em] font-bold mb-4">
            Le conseil de l'atelier
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-tight tracking-tight text-pop-off text-balance">
            {title}
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed text-pretty max-w-2xl">{body}</p>
          <Link
            to={ctaTo}
            className="mt-7 group inline-flex items-center gap-3 text-pop-off text-sm font-bold"
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
