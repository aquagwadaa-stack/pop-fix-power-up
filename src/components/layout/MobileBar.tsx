import { Link } from "@tanstack/react-router";
import { Phone, Wrench } from "lucide-react";
import { POPFIX } from "@/lib/popfix";

export function MobileBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="lg:hidden fixed bottom-4 inset-x-4 z-40 grid grid-cols-2 gap-2 rounded-full bg-pop-black/95 backdrop-blur-xl p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
    >
      <a
        href={POPFIX.phoneHref}
        className="flex items-center justify-center gap-2 py-3 text-white text-xs font-semibold rounded-full hover:bg-white/10"
      >
        <Phone className="size-4" /> Appeler
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-3 bg-pop-red text-white text-xs font-semibold rounded-full"
      >
        <Wrench className="size-4" /> Diagnostic
      </Link>
    </nav>
  );
}
