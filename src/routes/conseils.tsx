import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MascotTip } from "@/components/MascotTip";

export const Route = createFileRoute("/conseils")({
  head: () => ({
    meta: [
      { title: "Conseils & astuces réparation — Blog POP'FIX" },
      { name: "description", content: "Conseils d'expert pour entretenir vos smartphones, consoles et manettes en Guadeloupe. Drift, batterie, poussière, écran fissuré : tout ce qu'il faut savoir." },
      { property: "og:title", content: "Conseils POP'FIX" },
      { property: "og:description", content: "Le blog conseils de POP'FIX : entretien, réparation, astuces pour vos appareils." },
      { property: "og:url", content: "/conseils" },
    ],
    links: [{ rel: "canonical", href: "/conseils" }],
  }),
  component: ConseilsPage,
});

const posts = [
  { cat: "Consoles", title: "Pourquoi la poussière fait-elle chauffer votre console ?", time: "5 min", date: "Juin 2026" },
  { cat: "Smartphones", title: "Comment reconnaître une batterie de téléphone en fin de vie ?", time: "4 min", date: "Mai 2026" },
  { cat: "Manettes", title: "Drift de manette : d'où vient le problème ?", time: "6 min", date: "Mai 2026" },
  { cat: "Sécurité", title: "Que faire après avoir mouillé son smartphone ?", time: "3 min", date: "Avril 2026" },
  { cat: "Smartphones", title: "Peut-on continuer à utiliser un écran fissuré ?", time: "4 min", date: "Avril 2026" },
  { cat: "Entretien", title: "Comment nettoyer correctement le port de charge d'un téléphone ?", time: "3 min", date: "Mars 2026" },
  { cat: "Astuces", title: "Réparer ou remplacer son appareil : comment décider ?", time: "7 min", date: "Mars 2026" },
  { cat: "Entretien", title: "Comment protéger sa console de la chaleur en Guadeloupe ?", time: "5 min", date: "Février 2026" },
] as const;

const categories = ["Tous", "Smartphones", "Consoles", "Manettes", "Entretien", "Sécurité", "Astuces"] as const;

function ConseilsPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Conseils & astuces"
            title="On répare —"
            accent="on partage aussi."
            description="Les bonnes habitudes pour faire durer votre matériel sous climat tropical. Articles courts, droits au but, rédigés par l'atelier."
          />
        </div>
      </section>

      <section className="bg-pop-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest border transition-colors ${i === 0 ? "bg-pop-red text-white border-pop-red" : "border-white/10 text-zinc-400 hover:text-pop-off hover:border-white/30"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p, i) => (
              <article key={p.title} className={`group bg-pop-zinc ring-1 ring-white/5 p-6 hover:ring-pop-red/50 transition-all ${i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-pop-red text-white ring-0 hover:ring-0" : ""}`}>
                <div className={`flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest font-bold ${i === 0 ? "text-white/80" : "text-pop-red"}`}>
                  <span>{p.cat}</span>
                  <span className={i === 0 ? "text-white/40" : "text-zinc-600"}>·</span>
                  <span className={i === 0 ? "text-white/70" : "text-zinc-500"}>{p.date}</span>
                </div>
                <h3 className={`mt-4 font-display font-black uppercase tracking-[-0.02em] leading-[1] ${i === 0 ? "text-4xl sm:text-5xl lg:text-6xl text-white" : "text-2xl text-pop-off"}`}>
                  {p.title}
                </h3>
                <div className={`mt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest ${i === 0 ? "text-white" : "text-zinc-500 group-hover:text-pop-red"}`}>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="size-3.5" /> {p.time} de lecture
                  </span>
                  <ArrowRight className="size-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MascotTip
        title="Une question avant de venir ?"
        body="Vous hésitez entre réparer ou remplacer ? Vous voulez savoir si votre panne est traitable à Saint-François ? Décrivez-nous l'appareil, on vous oriente honnêtement."
        ctaLabel="Poser ma question"
        ctaTo="/contact"
      />
    </>
  );
}
