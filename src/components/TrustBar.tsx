import { Star } from "lucide-react";
import { POPFIX } from "@/lib/popfix";

const items = [
  `${POPFIX.rating.score} sur Google`,
  `${POPFIX.rating.count} avis clients`,
  "Atelier à Saint-François",
  "Diagnostic avant intervention",
  "Smartphones · Tablettes · Consoles · Manettes",
];

export function TrustBar() {
  return (
    <div className="bg-pop-red overflow-hidden border-y border-pop-black/40">
      <div className="flex whitespace-nowrap animate-marquee gap-12 py-3">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-display font-bold uppercase tracking-tight text-white text-sm"
          >
            <Star className="size-3.5 fill-white" /> {t}
            <span className="size-1.5 bg-white/60 rounded-full ml-6" />
          </span>
        ))}
      </div>
    </div>
  );
}
