import { MapPin, ShieldCheck, Star } from "lucide-react";
import { POPFIX } from "@/lib/popfix";

export function TrustBar() {
  return (
    <div className="bg-pop-zinc border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 grid sm:grid-cols-3 gap-4 sm:gap-8">
        <div className="flex items-center gap-3 text-sm text-zinc-300">
          <Star className="size-5 text-pop-red fill-pop-red shrink-0" />
          <span>
            <strong className="text-pop-off">{POPFIX.rating.score}</strong> sur Google,{" "}
            {POPFIX.rating.count} avis
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-300">
          <MapPin className="size-5 text-pop-red shrink-0" />
          <span>
            Atelier situé à <strong className="text-pop-off">Saint-François</strong>
          </span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-300">
          <ShieldCheck className="size-5 text-pop-red shrink-0" />
          <span>
            Diagnostic expliqué <strong className="text-pop-off">avant intervention</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
