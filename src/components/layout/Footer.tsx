import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { POPFIX, NAV_LINKS } from "@/lib/popfix";
import { PopFixLogo } from "@/components/PopFixLogo";

export function Footer() {
  return (
    <footer className="bg-pop-black text-pop-cream pt-20 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <PopFixLogo className="text-3xl" solid={false} />
          <p className="mt-5 text-white/65 max-w-sm text-sm leading-relaxed">
            Atelier de réparation électronique à Saint-François. Smartphones, tablettes,
            ordinateurs, écrans, consoles, manettes, rachat et valorisation.
          </p>
          <a
            href={POPFIX.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-pop-red transition-colors"
          >
            <Instagram className="size-4" /> {POPFIX.instagramHandle}
          </a>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-pop-red mb-5">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-pop-cream transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/mentions-legales"
                className="text-white/50 hover:text-pop-cream transition-colors"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-pop-red mb-5">
            Atelier
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-white/80">
              <MapPin className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <span>
                {POPFIX.address.line1}
                <br />
                {POPFIX.address.line2}
                <br />
                {POPFIX.address.city}, {POPFIX.address.region}
              </span>
            </li>
            <li className="flex gap-3 text-white/80">
              <Phone className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <a href={POPFIX.phoneHref} className="hover:text-pop-cream">
                {POPFIX.phone}
              </a>
            </li>
            <li className="flex gap-3 text-white/80">
              <Clock className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <span className="text-xs leading-relaxed">
                {POPFIX.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-pop-cream font-semibold">{h.day}</span> — {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/45">
        <p>© {new Date().getFullYear()} POP'FIX — Saint-François, Guadeloupe</p>
        <p>On diagnostique. On explique. On répare. On valorise.</p>
      </div>
    </footer>
  );
}
