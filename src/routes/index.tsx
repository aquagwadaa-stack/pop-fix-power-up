import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gamepad2,
  HandCoins,
  Instagram,
  Laptop,
  MapPin,
  Monitor,
  Phone,
  ShoppingBag,
  Smartphone,
  Tablet,
} from "lucide-react";
import heroImg from "@/assets/repair-smartphone.jpg";
import workshopImg from "@/assets/workshop.jpg";
import { POPFIX } from "@/lib/popfix";
import { MascotTip } from "@/components/MascotTip";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POP'FIX — Réparation électronique à Saint-François" },
      {
        name: "description",
        content:
          "Réparation, rachat et valorisation de smartphones, tablettes, ordinateurs, écrans, consoles et manettes à Saint-François en Guadeloupe.",
      },
      { property: "og:title", content: "POP'FIX — Votre réparateur à Saint-François" },
      {
        property: "og:description",
        content:
          "Un atelier local pour diagnostiquer, réparer, racheter et valoriser vos appareils.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    id: "smartphones",
    icon: Smartphone,
    title: "Smartphones",
    text: "Écrans, batteries, charge et connectique.",
  },
  {
    id: "tablettes",
    icon: Tablet,
    title: "Tablettes",
    text: "Vitres tactiles, batteries et problèmes de charge.",
  },
  {
    id: "ordinateurs",
    icon: Laptop,
    title: "Ordinateurs",
    text: "Diagnostic, entretien, alimentation et connectique.",
  },
  {
    id: "ecrans",
    icon: Monitor,
    title: "Écrans",
    text: "Problèmes d'affichage, d'alimentation et de connexion.",
  },
  {
    id: "consoles-manettes",
    icon: Gamepad2,
    title: "Consoles & manettes",
    text: "Joysticks, boutons, nettoyage, surchauffe et personnalisation.",
  },
  {
    id: "rachat-relooking",
    icon: HandCoins,
    title: "Rachat & valorisation",
    text: "Estimation de consoles, manettes, téléphones et tablettes selon l'état.",
  },
  {
    id: "accessoires",
    icon: ShoppingBag,
    title: "Accessoires",
    text: "Câbles, protections, audio et batteries externes.",
  },
] as const;

function HomePage() {
  return (
    <>
      <section className="relative bg-pop-black text-pop-cream">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Réparation d'un smartphone à l'atelier POP'FIX"
            className="size-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pop-black/70 via-pop-black/55 to-pop-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-3 py-1.5 text-[11px] text-white/85">
              <MapPin className="size-3.5 text-pop-red" />
              Atelier à Saint-François
            </div>

            <h1 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-balance text-4xl sm:text-5xl lg:text-6xl">
              Votre réparateur électronique à <span className="text-pop-red">Saint-François.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Smartphones, tablettes, ordinateurs, écrans, consoles et manettes : POP'FIX répare,
              rachète et valorise vos appareils dans son atelier.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/reparations"
                className="inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-pop-red-deep"
              >
                Voir les réparations <ArrowRight className="size-4" />
              </Link>
              <a
                href={POPFIX.phoneHref}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur"
              >
                <Phone className="size-4" /> Appeler l'atelier
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pop-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <img
            src={workshopImg}
            alt="Atelier de réparation POP'FIX"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover rounded-3xl"
          />
          <div>
            <span className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
              Pourquoi POP'FIX ?
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-pop-black">
              Un atelier de proximité, avec le goût du travail bien fait.
            </h2>
            <p className="mt-5 max-w-2xl text-pop-warm-1 leading-relaxed">
              POP'FIX met son savoir-faire au service de vos appareils du quotidien. Chaque demande
              est étudiée avec attention afin de proposer une intervention adaptée à la panne et au
              modèle confié.
            </p>
            <Link
              to="/a-propos"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              Découvrir l'atelier <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="Ce que POP'FIX prend en charge"
              description="Les principales catégories d'appareils, services et produits proposés à l'atelier."
            />
            <Link
              to="/reparations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              Voir le détail <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/reparations"
                hash={service.id}
                className="group min-h-48 rounded-2xl border border-black/10 bg-white p-6 sm:p-7 hover:border-pop-red hover:-translate-y-0.5 transition-all"
              >
                <service.icon className="size-6 text-pop-red" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-xl font-semibold text-pop-black">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pop-warm-2">{service.text}</p>
                <ArrowRight className="mt-5 size-4 text-pop-warm-3 transition-transform group-hover:translate-x-1 group-hover:text-pop-red" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MascotTip />

      <section className="bg-pop-red text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Une question sur votre appareil ?
            </h2>
            <p className="mt-2 text-white/80">
              Contactez l'atelier ou retrouvez les actualités de POP'FIX sur Instagram.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3">
            <a
              href={POPFIX.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 rounded-full px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              <Instagram className="size-4" /> {POPFIX.instagramHandle}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-pop-black rounded-full px-5 py-3 text-sm font-semibold text-white hover:bg-pop-ink"
            >
              Contacter POP'FIX <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
