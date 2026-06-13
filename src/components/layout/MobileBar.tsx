import { Link } from "@tanstack/react-router";
import { Phone, Wrench, MapPin } from "lucide-react";
import { POPFIX } from "@/lib/popfix";

export function MobileBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-pop-black/95 backdrop-blur-xl border-t border-pop-red/40 grid grid-cols-3"
    >
      <a
        href={POPFIX.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-3 text-pop-off text-[10px] font-bold uppercase tracking-widest"
      >
        <Phone className="size-4 text-pop-red" /> Appeler
      </a>
      <Link
        to="/contact"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-pop-red text-white text-[10px] font-bold uppercase tracking-widest"
      >
        <Wrench className="size-4" /> Diagnostic
      </Link>
      <a
        href={POPFIX.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 text-pop-off text-[10px] font-bold uppercase tracking-widest"
      >
        <MapPin className="size-4 text-pop-red" /> Itinéraire
      </a>
    </nav>
  );
}
