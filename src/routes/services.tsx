import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gamepad2,
  HandCoins,
  Laptop,
  Monitor,
  Paintbrush,
  ShoppingBag,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — POP'FIX Saint-François" },
      {
        name: "description",
        content:
          "Réparation, rachat, valorisation, relooking de manettes et accessoires high-tech proposés par POP'FIX à Saint-François.",
      },
      { property: "og:title", content: "Services — POP'FIX Saint-François" },
      {
        property: "og:description",
        content:
          "Découvrez les services proposés par l'atelier POP'FIX : réparation, rachat, relooking et accessoires.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const serviceGroups = [
  {
    id: "reparation",
    icon: Wrench,
    title: "Réparation électronique",
    description:
      "Diagnostic et intervention selon le modèle, la panne constatée et la disponibilité des pièces.",
    items: ["Smartphones", "Tablettes", "Ordinateurs", "Écrans", "Consoles", "Manettes"],
    details: [
      "Écrans et vitres",
      "Batteries",
      "Ports de charge",
      "Boutons et gâchettes",
      "Nettoyage",
      "Surchauffe",
      "Connectique",
    ],
  },
  {
    id: "rachat-valorisation",
    icon: HandCoins,
    title: "Rachat & valorisation",
    description:
      "Estimation en boutique de consoles, manettes, téléphones et tablettes, y compris certains appareils défectueux selon leur état.",
    items: [
      "Consoles récentes",
      "Manettes officielles",
      "Téléphones",
      "Tablettes",
      "Appareils fonctionnels ou HS",
    ],
    details: [
      "Estimation selon l'état",
      "Pièces récupérables",
      "Revente ou recyclage",
      "Réponse en boutique",
    ],
  },
  {
    id: "relooking-manettes",
    icon: Paintbrush,
    title: "Relooking de manettes",
    description:
      "Personnalisation et remise en valeur de manettes selon compatibilité, pièces disponibles et demande du client.",
    items: [
      "Manettes PS5",
      "Coques et éléments visuels",
      "Sticks",
      "Boutons",
      "Nettoyage esthétique",
    ],
    details: [
      "Personnalisation sur demande",
      "Conseil sur le rendu",
      "Contrôle avant restitution",
      "Tarif à confirmer en boutique",
    ],
  },
  {
    id: "accessoires",
    icon: ShoppingBag,
    title: "Accessoires high-tech",
    description:
      "Produits utiles disponibles selon le stock en boutique pour protéger, charger ou compléter vos appareils.",
    items: [
      "Protections d'écran",
      "Câbles",
      "Adaptateurs",
      "Casques et écouteurs",
      "Batteries externes",
    ],
    details: ["Disponibilité variable", "Conseil en boutique", "Produits du quotidien"],
  },
] as const;

const repairDevices = [
  { icon: Smartphone, label: "Smartphones" },
  { icon: Tablet, label: "Tablettes" },
  { icon: Laptop, label: "Ordinateurs" },
  { icon: Monitor, label: "Écrans" },
  { icon: Gamepad2, label: "Consoles & manettes" },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pop-black text-pop-cream">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-pop-red/15 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            eyebrow="Services"
            title="Ce que POP'FIX propose"
            description="Réparation, rachat, valorisation, relooking de manettes et accessoires : les services sont regroupés ici pour garder le site clair et utile."
            tone="light"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-pop-cream py-14 lg:py-20 paper-grain">
        <div className="absolute -left-24 top-28 hidden size-72 rounded-full bg-black/5 blur-3xl lg:block" />
        <div className="absolute -right-24 bottom-40 hidden size-72 rounded-full bg-pop-red/8 blur-3xl lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {serviceGroups.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/90 p-5 shadow-[0_16px_40px_rgba(11,11,11,0.045)] hover:border-pop-red/50 hover:bg-white transition-colors"
              >
                <span className="absolute right-5 top-5 font-mono text-[11px] text-pop-warm-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex size-11 items-center justify-center rounded-full bg-pop-red/10">
                  <service.icon className="size-5 text-pop-red" strokeWidth={1.5} />
                </div>
                <span className="mt-5 block font-display text-lg font-semibold text-pop-black">
                  {service.title}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {serviceGroups.map((service) => (
              <article
                id={service.id}
                key={service.id}
                className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-7 sm:p-9 shadow-[0_18px_50px_rgba(11,11,11,0.055)]"
              >
                <span className="absolute inset-y-8 left-0 w-1 rounded-r-full bg-pop-red/80" />
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-full bg-pop-red/10">
                      <service.icon className="size-6 text-pop-red" strokeWidth={1.5} />
                    </div>
                    <h2 className="mt-6 font-display text-3xl sm:text-4xl font-semibold text-pop-black">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-pop-warm-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-pop-red">
                        Inclus
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-black/10 bg-pop-paper px-3 py-2 text-sm text-pop-warm-1"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-pop-red">
                        À savoir
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="rounded-full border border-black/10 bg-pop-paper px-3 py-2 text-sm text-pop-warm-1"
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pop-paper py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-pop-black text-pop-cream p-7 sm:p-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">
              Vous ne savez pas dans quelle catégorie placer votre demande ?
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Envoyez le modèle, l'état général et quelques photos si possible. POP'FIX pourra vous
              indiquer si l'appareil relève d'une réparation, d'un rachat, d'un relooking ou d'un
              accessoire à prévoir.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-pop-red px-6 py-3 text-sm font-semibold text-white hover:bg-pop-red-deep"
              >
                Demander un diagnostic <ArrowRight className="size-4" />
              </Link>
              <div className="flex flex-wrap gap-2">
                {repairDevices.map((device) => (
                  <span
                    key={device.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm text-white/75"
                  >
                    <device.icon className="size-4 text-pop-red" strokeWidth={1.5} />
                    {device.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
