import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Tablet, Gamepad2, Joystick, Headphones, ArrowRight } from "lucide-react";
import smartphoneImg from "@/assets/repair-smartphone.jpg";
import tabletImg from "@/assets/repair-tablet.jpg";
import consoleImg from "@/assets/hero-controller.jpg";
import controllerImg from "@/assets/repair-controller.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { MascotTip } from "@/components/MascotTip";

export const Route = createFileRoute("/reparations")({
  head: () => ({
    meta: [
      { title: "Réparations smartphone, tablette, console — POP'FIX Saint-François" },
      {
        name: "description",
        content:
          "Réparation d'écran, batterie, joystick, port de charge à Saint-François. Diagnostic avant intervention sur smartphone, tablette, console et manette.",
      },
      { property: "og:title", content: "Réparations — POP'FIX Saint-François" },
      {
        property: "og:description",
        content:
          "Diagnostic et réparation de smartphones, tablettes, consoles et manettes à Saint-François, Guadeloupe.",
      },
      { property: "og:url", content: "/reparations" },
    ],
    links: [{ rel: "canonical", href: "/reparations" }],
  }),
  component: ReparationsPage,
});

const categories = [
  {
    icon: Smartphone,
    title: "Smartphones",
    img: smartphoneImg,
    items: [
      "Écran cassé / fissuré",
      "Batterie fatiguée",
      "Port de charge",
      "Bouton volume / power",
      "Haut-parleur / micro",
      "Caméra arrière / avant",
    ],
  },
  {
    icon: Tablet,
    title: "Tablettes",
    img: tabletImg,
    items: [
      "Vitre tactile",
      "Connecteur de charge",
      "Batterie",
      "Wi-Fi / Bluetooth",
      "Bouton home",
      "Restauration logicielle",
    ],
  },
  {
    icon: Gamepad2,
    title: "Consoles",
    img: consoleImg,
    items: [
      "Nettoyage anti-poussière",
      "Surchauffe / ventilation",
      "Lecteur disque",
      "Port HDMI",
      "Alimentation",
      "Disque dur / stockage",
    ],
  },
  {
    icon: Joystick,
    title: "Manettes",
    img: controllerImg,
    items: [
      "Drift de joystick",
      "Remplacement de sticks",
      "Boutons capricieux",
      "Gâchettes L1/L2/R1/R2",
      "Vibration",
      "Connectique USB",
    ],
  },
  {
    icon: Headphones,
    title: "Accessoires & High-tech",
    img: accessoriesImg,
    items: [
      "Casques audio",
      "Câbles & adaptateurs",
      "Stations de charge",
      "Montres connectées",
      "Enceintes Bluetooth",
      "Nettoyage & entretien",
    ],
  },
] as const;

function ReparationsPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Réparations"
            title="Tout ce qu'on"
            accent="remet en route."
            description="Smartphones, tablettes, consoles, manettes et accessoires. Chaque appareil passe par un diagnostic avant la moindre intervention."
          />
        </div>
      </section>

      <section className="bg-pop-black pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-px bg-white/5">
          {categories.map((cat, i) => (
            <article
              key={cat.title}
              className={`bg-pop-black grid md:grid-cols-2 gap-8 lg:gap-14 p-8 lg:p-14 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden ring-1 ring-white/10">
                  <img
                    src={cat.img}
                    alt={`Réparation ${cat.title}`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-pop-red font-bold">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display font-black uppercase text-4xl lg:text-5xl text-pop-off tracking-[-0.03em] leading-none flex items-center gap-4">
                  <cat.icon className="size-9 text-pop-red shrink-0" />
                  <span className="truncate">{cat.title}</span>
                </h2>
                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-zinc-300 text-sm leading-snug"
                    >
                      <span className="size-1.5 bg-pop-red mt-2 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 bg-pop-red text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-pop-red-deep"
                >
                  Demander un diagnostic <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MascotTip
        title="On ne touche jamais à un appareil sans vous prévenir."
        body="Chez POP'FIX, le diagnostic est une étape à part entière. Vous savez ce qui ne va pas et quelle intervention est proposée avant toute réparation."
        ctaLabel="Demander un diagnostic"
        ctaTo="/contact"
      />
    </>
  );
}
