import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gamepad2,
  HandCoins,
  Laptop,
  Monitor,
  ShoppingBag,
  Smartphone,
  Tablet,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/reparations")({
  head: () => ({
    meta: [
      { title: "Réparations et services — POP'FIX Saint-François" },
      {
        name: "description",
        content:
          "Smartphones, tablettes, ordinateurs, écrans, consoles, manettes, rachat et valorisation pris en charge par POP'FIX à Saint-François.",
      },
      { property: "og:title", content: "Réparations — POP'FIX Saint-François" },
      {
        property: "og:description",
        content:
          "Découvrez les appareils, services et problèmes pris en charge par l'atelier POP'FIX.",
      },
      { property: "og:url", content: "/reparations" },
    ],
    links: [{ rel: "canonical", href: "/reparations" }],
  }),
  component: ReparationsPage,
});

const categories = [
  {
    id: "smartphones",
    icon: Smartphone,
    title: "Smartphones",
    description: "Les pannes courantes sur les téléphones utilisés au quotidien.",
    items: ["Écran ou vitre", "Batterie", "Port de charge", "Boutons", "Micro et haut-parleur"],
  },
  {
    id: "tablettes",
    icon: Tablet,
    title: "Tablettes",
    description: "Diagnostic et intervention selon le modèle et la panne constatée.",
    items: ["Vitre tactile", "Batterie", "Connecteur de charge", "Boutons", "Problèmes logiciels"],
  },
  {
    id: "ordinateurs",
    icon: Laptop,
    title: "Ordinateurs",
    description: "Recherche de panne, entretien et problèmes matériels courants.",
    items: ["Démarrage et lenteurs", "Nettoyage", "Ventilation", "Alimentation", "Connectique"],
  },
  {
    id: "ecrans",
    icon: Monitor,
    title: "Écrans",
    description: "Examen des problèmes d'affichage, de connexion ou d'alimentation.",
    items: ["Absence d'image", "Connectique", "Alimentation", "Faux contacts", "Diagnostic"],
  },
  {
    id: "consoles-manettes",
    icon: Gamepad2,
    title: "Consoles & manettes",
    description: "Entretien et réparation des commandes et composants les plus sollicités.",
    items: [
      "Drift de joystick",
      "Boutons et gâchettes",
      "Nettoyage",
      "Surchauffe",
      "Ports HDMI et USB",
      "Relooking de manettes",
    ],
  },
  {
    id: "rachat-relooking",
    icon: HandCoins,
    title: "Rachat & valorisation",
    description:
      "Estimation en boutique de consoles, manettes, téléphones et tablettes, même défectueux selon l'état et les pièces récupérables.",
    items: [
      "Consoles récentes",
      "Manettes officielles",
      "Téléphones et tablettes",
      "Appareils fonctionnels ou HS",
      "Personnalisation sur demande",
    ],
  },
  {
    id: "accessoires",
    icon: ShoppingBag,
    title: "Accessoires",
    description: "Une sélection de produits utiles, disponible selon le stock en boutique.",
    items: [
      "Câbles",
      "Protections d'écran",
      "Casques et écouteurs",
      "Batteries externes",
      "Adaptateurs",
    ],
  },
] as const;

function ReparationsPage() {
  return (
    <>
      <section className="bg-pop-black text-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <SectionHeading
            eyebrow="Réparations et services"
            title="Les appareils pris en charge"
            description="La faisabilité dépend du modèle, de la panne constatée, de l'état de l'appareil et de la disponibilité des pièces."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-pop-cream py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <article
              id={category.id}
              key={category.id}
              className="scroll-mt-24 rounded-2xl border border-black/10 bg-white p-7 sm:p-9"
            >
              <category.icon className="size-7 text-pop-red" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-2xl sm:text-3xl font-semibold text-pop-black">
                {category.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-pop-warm-2">
                {category.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-black/10 bg-pop-paper px-3 py-2 text-sm text-pop-warm-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-pop-paper py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-pop-black">
            Votre panne n'apparaît pas dans la liste ?
          </h2>
          <p className="mt-4 text-pop-warm-2">
            Indiquez le modèle de votre appareil, l'état général et le problème rencontré.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-pop-red px-6 py-3 text-sm font-semibold text-white hover:bg-pop-red-deep"
          >
            Demander un diagnostic <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
