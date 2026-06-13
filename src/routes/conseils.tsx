import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Cable, Droplets, Gamepad2, ShieldAlert, Wind } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MascotTip } from "@/components/MascotTip";

export const Route = createFileRoute("/conseils")({
  head: () => ({
    meta: [
      { title: "Conseils entretien smartphone et console — POP'FIX" },
      {
        name: "description",
        content:
          "Conseils pratiques de POP'FIX pour protéger vos smartphones, consoles et manettes en Guadeloupe : batterie, poussière, humidité et écran.",
      },
      { property: "og:title", content: "Conseils POP'FIX" },
      {
        property: "og:description",
        content:
          "Des conseils simples pour entretenir vos appareils et reconnaître les signes d'une panne.",
      },
      { property: "og:url", content: "/conseils" },
    ],
    links: [{ rel: "canonical", href: "/conseils" }],
  }),
  component: ConseilsPage,
});

const tips = [
  {
    icon: Wind,
    category: "Consoles",
    title: "Limiter la poussière et la surchauffe",
    summary:
      "Laissez de l'espace autour des aérations, évitez les meubles fermés et retirez régulièrement la poussière extérieure sans démonter l'appareil.",
  },
  {
    icon: BatteryCharging,
    category: "Smartphones",
    title: "Reconnaître une batterie fatiguée",
    summary:
      "Une autonomie en forte baisse, des extinctions soudaines ou une chauffe inhabituelle peuvent justifier un diagnostic.",
  },
  {
    icon: Gamepad2,
    category: "Manettes",
    title: "Comprendre le drift d'un joystick",
    summary:
      "Lorsque le personnage ou le curseur se déplace seul, le module du joystick peut être usé ou encrassé.",
  },
  {
    icon: Droplets,
    category: "Réflexe utile",
    title: "Après un contact avec de l'eau",
    summary:
      "Éteignez l'appareil, ne le rechargez pas et évitez le sèche-cheveux. Un examen rapide limite le risque de corrosion.",
  },
  {
    icon: ShieldAlert,
    category: "Écrans",
    title: "Ne pas ignorer une fissure",
    summary:
      "Une fissure peut s'étendre, laisser entrer l'humidité ou exposer les doigts à des éclats. Faites vérifier l'état de l'écran.",
  },
  {
    icon: Cable,
    category: "Connectique",
    title: "Préserver le port de charge",
    summary:
      "N'introduisez pas d'objet métallique dans le connecteur. En cas de faux contact persistant, demandez un diagnostic.",
  },
] as const;

function ConseilsPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
          <SectionHeading
            eyebrow="Conseils pratiques"
            title="Mieux comprendre et protéger vos appareils"
            description="Des repères simples pour adopter les bons gestes et savoir quand demander l'avis d'un réparateur."
          />
        </div>
      </section>

      <section className="bg-pop-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <article
              key={tip.title}
              className="bg-pop-zinc border border-white/5 p-7 hover:border-pop-red/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <tip.icon className="size-6 text-pop-red" />
                <span className="text-xs uppercase tracking-[0.14em] font-bold text-zinc-500">
                  {tip.category}
                </span>
              </div>
              <h2 className="mt-7 font-display font-bold text-2xl text-pop-off tracking-tight">
                {tip.title}
              </h2>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">{tip.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <MascotTip
        title="Un conseil en ligne ne remplace pas l'examen de l'appareil."
        body="Si le problème persiste, contactez POP'FIX avec le modèle de votre appareil et une description précise des symptômes."
        ctaLabel="Demander l'avis de l'atelier"
        ctaTo="/contact"
      />
    </>
  );
}
