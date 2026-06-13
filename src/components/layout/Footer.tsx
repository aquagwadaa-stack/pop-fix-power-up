import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import { POPFIX, NAV_LINKS } from "@/lib/popfix";
import { PopFixLogo } from "@/components/PopFixLogo";

export function Footer() {
  return (
    <footer className="bg-pop-black border-t border-white/5 pt-20 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <PopFixLogo className="text-4xl" />
          <p className="mt-6 text-zinc-400 max-w-sm text-sm leading-relaxed">
            Atelier de réparation électronique à Saint-François. Smartphones, tablettes, consoles et manettes — diagnostic, réparation et conseils.
          </p>
          <a
            href={POPFIX.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-pop-red transition-colors"
          >
            <Instagram className="size-4" /> {POPFIX.instagramHandle}
          </a>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-mono text-[10px] uppercase text-pop-red tracking-widest font-bold mb-5">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-zinc-400 hover:text-pop-off transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/mentions-legales" className="text-zinc-500 hover:text-pop-off transition-colors">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-mono text-[10px] uppercase text-pop-red tracking-widest font-bold mb-5">
            Atelier
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-zinc-300">
              <MapPin className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <span>
                {POPFIX.address.line1}<br />
                {POPFIX.address.line2}<br />
                {POPFIX.address.city}, {POPFIX.address.region}
              </span>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <Phone className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <a href={POPFIX.phoneHref} className="hover:text-pop-off">{POPFIX.phone}</a>
            </li>
            <li className="flex gap-3 text-zinc-300">
              <Clock className="size-4 mt-0.5 shrink-0 text-pop-red" />
              <span className="text-xs leading-relaxed">
                {POPFIX.hours.map((h) => (
                  <span key={h.day} className="block">
                    <span className="text-pop-off font-bold">{h.day}</span> — {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
        <p>© {new Date().getFullYear()} POP'FIX — Saint-François, Guadeloupe</p>
        <p>On diagnostique. On explique. On répare.</p>
      </div>
    </footer>
  );
}
