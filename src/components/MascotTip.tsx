import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mascot from "@/assets/mascot-popfix.png";

export function MascotTip({
  title = "Quelques gestes simples prolongent la vie de vos appareils.",
  body = "POP'FIX partage régulièrement des conseils pratiques pour entretenir vos téléphones, tablettes, consoles et manettes.",
  ctaLabel = "Voir les conseils",
  ctaTo = "/conseils",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaTo?: "/conseils" | "/contact" | "/reparations";
}) {
  return (
    <section className="bg-pop-paper">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 lg:py-14 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <img
          src={mascot}
          alt="Mascotte POP'FIX"
          width={120}
          height={120}
          loading="lazy"
          className="size-20 sm:size-24 object-cover object-top rounded-full bg-pop-cream ring-1 ring-black/10 shrink-0"
        />
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <p className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold mb-2">
            Le mot de l'atelier
          </p>
          <h3 className="font-display text-xl sm:text-2xl text-pop-black leading-snug text-balance">
            {title}
          </h3>
          <p className="mt-2 text-pop-warm-2 text-sm leading-relaxed max-w-xl">{body}</p>
        </div>
        <Link
          to={ctaTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red transition-colors whitespace-nowrap"
        >
          {ctaLabel} <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
