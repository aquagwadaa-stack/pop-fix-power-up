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
    num: "01",
    icon: Wrench,
    title: "Réparation",
    subtitle: "Électronique",
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
    tone: "red",
  },
  {
    id: "rachat-valorisation",
    num: "02",
    icon: HandCoins,
    title: "Rachat",
    subtitle: "& Valorisation",
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
    tone: "dark",
  },
  {
    id: "relooking-manettes",
    num: "03",
    icon: Paintbrush,
    title: "Relooking",
    subtitle: "Manettes",
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
    tone: "light",
  },
  {
    id: "accessoires",
    num: "04",
    icon: ShoppingBag,
    title: "Accessoires",
    subtitle: "High-Tech",
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
    tone: "light",
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
      {/* HERO EDITORIAL */}
      <section className="bg-pop-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            <div className="md:col-span-8 bg-white text-pop-black p-7 sm:p-10 md:p-12 border-b-[6px] border-pop-red">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-pop-red font-bold">
                ◆ Index des services
              </span>
              <h1 className="mt-5 font-display font-black leading-[0.92] tracking-[-0.035em] text-balance text-[2.4rem] sm:text-6xl lg:text-7xl">
                Ce que POP'FIX
                <br />
                <span className="italic text-pop-red">propose.</span>
              </h1>
              <p className="mt-6 max-w-xl text-pop-warm-1 leading-relaxed">
                Réparation, rachat, valorisation, relooking de manettes et accessoires :
                quatre familles regroupées ici pour garder le site clair et utile.
              </p>
            </div>

            {/* Quick nav bento */}
            <nav className="md:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
              {serviceGroups.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group bg-[#141414] border border-white/10 hover:border-pop-red p-5 flex flex-col justify-between transition-colors min-h-[120px]"
                >
                  <span className="font-mono text-xs text-pop-red font-bold">{s.num}</span>
                  <div>
                    <s.icon className="size-5 text-white/70 group-hover:text-pop-red transition-colors" strokeWidth={1.5} />
                    <span className="block mt-2 font-display text-sm font-bold leading-tight">
                      {s.title}
                      <br />
                      <span className="text-white/60">{s.subtitle}</span>
                    </span>
                  </div>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* DETAIL CARDS */}
      <section className="bg-pop-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-4 sm:space-y-5">
          {serviceGroups.map((service) => {
            const isRed = service.tone === "red";
            const isDark = service.tone === "dark";
            const headerBg = isRed
              ? "bg-pop-red text-white"
              : isDark
                ? "bg-[#141414] text-white"
                : "bg-white text-pop-black border border-pop-black/10";
            const numBorder = isRed
              ? "border-white/35 text-white"
              : isDark
                ? "border-pop-red text-pop-red"
                : "border-pop-black/20 text-pop-black";
            const eyebrowColor = isRed ? "text-white/85" : "text-pop-red";
            const descColor = isRed
              ? "text-white/90"
              : isDark
                ? "text-white/70"
                : "text-pop-warm-1";
            return (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4"
              >
                {/* Title block */}
                <div className={`lg:col-span-5 ${headerBg} p-7 sm:p-9 flex flex-col justify-between min-h-[260px]`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className={`size-12 border-2 ${numBorder} flex items-center justify-center font-mono font-bold`}>
                      {service.num}
                    </div>
                    <service.icon className="size-7 opacity-80" strokeWidth={1.5} />
                  </div>
                  <div className="mt-6">
                    <span className={`text-[10px] font-mono uppercase tracking-[0.25em] font-bold ${eyebrowColor}`}>
                      ◆ Famille {service.num}
                    </span>
                    <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-[-0.03em]">
                      {service.title}
                      <br />
                      <span className={isRed ? "italic" : "italic text-pop-red"}>
                        {service.subtitle}
                      </span>
                    </h2>
                    <p className={`mt-4 text-sm sm:text-base leading-relaxed ${descColor}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Inclus */}
                <div className="lg:col-span-4 bg-white border border-pop-black/10 p-6 sm:p-7">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-pop-red">
                    ◇ Inclus
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border border-pop-black/15 px-3 py-1.5 text-sm text-pop-black"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* À savoir */}
                <div className="lg:col-span-3 bg-pop-paper p-6 sm:p-7">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-pop-red">
                    ◇ À savoir
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((d) => (
                      <li
                        key={d}
                        className="text-sm text-pop-warm-1 flex items-start gap-2"
                      >
                        <span className="mt-2 size-1 bg-pop-red shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="bg-pop-black text-white p-7 sm:p-10 lg:p-12 border-l-[6px] border-pop-red">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-end">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-pop-red">
                  ◆ Besoin d'un avis ?
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-[-0.03em]">
                  Vous ne savez pas
                  <br />
                  <span className="italic text-pop-red">dans quelle catégorie</span>
                  <br />
                  placer votre demande&nbsp;?
                </h2>
                <p className="mt-5 max-w-xl text-white/75">
                  Envoyez le modèle, l'état général et quelques photos si possible. POP'FIX
                  pourra vous indiquer si l'appareil relève d'une réparation, d'un rachat,
                  d'un relooking ou d'un accessoire à prévoir.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-pop-black transition-colors"
                >
                  Demander un avis <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {repairDevices.map((device) => (
                  <span
                    key={device.label}
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[12px] font-mono uppercase tracking-[0.18em] text-white/80"
                  >
                    <device.icon className="size-3.5 text-pop-red" strokeWidth={1.75} />
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
