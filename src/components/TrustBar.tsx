import { MapPin, ShieldCheck, Star } from "lucide-react";
import { POPFIX } from "@/lib/popfix";

export function TrustBar() {
  return (
    <div className="bg-pop-cream border-y border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 grid sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="flex items-center gap-3 text-sm text-pop-warm-1">
          <Star className="size-4 text-pop-red fill-pop-red shrink-0" />
          <span>
            <strong className="text-pop-black">{POPFIX.rating.score}</strong> sur Google ·{" "}
            {POPFIX.rating.count} avis
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-pop-warm-1">
          <MapPin className="size-4 text-pop-red shrink-0" />
          <span>
            Atelier à <strong className="text-pop-black">Saint-François</strong>
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-pop-warm-1">
          <ShieldCheck className="size-4 text-pop-red shrink-0" />
          <span>
            Diagnostic <strong className="text-pop-black">avant intervention</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
