import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gamepad2,
  Headphones,
  MapPin,
  MessageSquareText,
  Phone,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Star,
  Tablet,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/repair-smartphone.jpg";
import smartphoneImg from "@/assets/repair-smartphone.jpg";
import consoleImg from "@/assets/hero-controller.jpg";
import controllerImg from "@/assets/repair-controller.jpg";
import tabletImg from "@/assets/repair-tablet.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import { POPFIX } from "@/lib/popfix";
import { TrustBar } from "@/components/TrustBar";
import { MascotTip } from "@/components/MascotTip";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POP'FIX — Réparation téléphone et électronique à Saint-François" },
      {
        name: "description",
        content:
          "Réparation de smartphones, tablettes, consoles et manettes à Saint-François en Guadeloupe. Diagnostic avant intervention. 4,9/5 sur Google.",
      },
      { property: "og:title", content: "POP'FIX — Votre réparateur à Saint-François" },
      {
        property: "og:description",
        content:
          "Un atelier local pour diagnostiquer et réparer smartphones, tablettes, consoles et manettes.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Smartphone,
    title: "Smartphones",
    img: smartphoneImg,
    items: ["Écran cassé", "Batterie", "Port de charge", "Boutons et connectique"],
  },
  {
    icon: Tablet,
    title: "Tablettes",
    img: tabletImg,
    items: ["Vitre tactile", "Batterie", "Connecteur", "Problème logiciel"],
  },
  {
    icon: Gamepad2,
    title: "Consoles & manettes",
    img: controllerImg,
    items: ["Joystick et drift", "Surchauffe", "Boutons", "Connectique"],
  },
  {
    icon: Headphones,
    title: "Accessoires",
    img: accessoriesImg,
    items: ["Audio", "Câbles", "Protections", "High-tech"],
  },
] as const;

const steps = [
  {
    icon: MessageSquareText,
    title: "Vous décrivez la panne",
    body: "Par téléphone, Instagram, via le formulaire ou directement en boutique.",
  },
  {
    icon: ScanSearch,
    title: "L'appareil est examiné",
    body: "Le diagnostic permet d'identifier l'origine du problème avant toute intervention.",
  },
  {
    icon: ClipboardCheck,
    title: "La solution est expliquée",
    body: "Vous connaissez l'intervention proposée et son tarif avant de décider.",
  },
  {
    icon: Wrench,
    title: "La réparation est réalisée",
    body: "POP'FIX intervient uniquement après votre accord.",
  },
] as const;

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pop-black pt-16">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-pop-red text-xs font-bold uppercase tracking-[0.16em]">
                <MapPin className="size-4" />
                Atelier à Saint-François
              </div>

              <h1 className="mt-6 font-display font-black tracking-[-0.045em] leading-[0.94] text-5xl sm:text-6xl lg:text-7xl text-pop-off text-balance">
                Réparation de smartphones, tablettes et consoles.
              </h1>

              <p className="mt-7 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                Écran cassé, batterie fatiguée, problème de charge ou manette défectueuse : POP'FIX
                diagnostique votre appareil et vous explique la solution avant d'intervenir.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="bg-pop-red text-white px-6 py-3.5 text-sm font-bold hover:bg-pop-red-deep transition-colors inline-flex items-center gap-2"
                >
                  Demander un diagnostic <ArrowRight className="size-4" />
                </Link>
                <a
                  href={POPFIX.phoneHref}
                  className="bg-pop-off text-pop-black px-6 py-3.5 text-sm font-bold hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="size-4" /> Appeler POP'FIX
                </a>
                <a
                  href={POPFIX.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/15 text-pop-off px-6 py-3.5 text-sm font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="size-4" /> Itinéraire
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-pop-red" aria-label="Note de 4,9 sur 5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-pop-red" />
                    ))}
                  </div>
                  <strong className="text-pop-off">{POPFIX.rating.score}</strong>
                  <span>{POPFIX.rating.count} avis Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-pop-red" />
                  Diagnostic avant intervention
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-pop-zinc">
                <img
                  src={heroImg}
                  alt="Diagnostic d'un smartphone à l'atelier"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pop-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                    Une solution locale, claire et accessible
                  </p>
                  <p className="mt-2 font-display font-bold text-xl sm:text-2xl text-white">
                    Plus besoin d'aller jusqu'à Jarry pour trouver un réparateur.
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 size-16 border-t-2 border-r-2 border-pop-red" />
              <div className="absolute -left-3 -bottom-3 size-16 border-b-2 border-l-2 border-pop-red" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-20 lg:py-28 bg-pop-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <SectionHeading
              eyebrow="Services"
              title="Les appareils pris en charge"
              description="Du téléphone utilisé chaque jour au matériel de jeu, chaque appareil est examiné avant qu'une solution vous soit proposée."
            />
            <Link
              to="/reparations"
              className="inline-flex items-center gap-2 text-sm font-bold text-pop-off hover:text-pop-red transition-colors"
            >
              Voir toutes les réparations <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-pop-zinc border border-white/5 overflow-hidden hover:border-pop-red/50 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={`Service de réparation : ${service.title}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pop-zinc via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <service.icon className="size-5 text-pop-red" />
                    <h2 className="font-display font-bold text-xl text-pop-off">{service.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle2 className="size-3.5 text-pop-red shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-pop-off hover:text-pop-red transition-colors"
                  >
                    Demander un diagnostic <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pop-off text-pop-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={consoleImg}
              alt="Entretien d'une console"
              width={900}
              height={900}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src={controllerImg}
              alt="Réparation d'une manette"
              width={900}
              height={900}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover mt-8"
            />
          </div>
          <div>
            <span className="text-pop-red text-xs font-bold uppercase tracking-[0.16em]">
              Consoles et manettes
            </span>
            <h2 className="mt-5 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] leading-[0.95] text-balance">
              Une expertise technique, au même titre que les autres appareils.
            </h2>
            <p className="mt-6 text-zinc-700 text-lg leading-relaxed">
              Drift de joystick, boutons défectueux, surchauffe, poussière ou problème de
              connectique : POP'FIX examine également les consoles et les manettes.
            </p>
            <ul className="mt-7 grid sm:grid-cols-2 gap-3 text-sm font-medium">
              {[
                "Joysticks et boutons",
                "Nettoyage interne",
                "Ventilation et surchauffe",
                "Ports et connectique",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-pop-red" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/gaming"
              className="mt-9 inline-flex items-center gap-2 bg-pop-black text-white px-6 py-3.5 text-sm font-bold hover:bg-pop-zinc transition-colors"
            >
              Découvrir ce service <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-pop-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Une démarche transparente"
            title="Comment se passe une réparation ?"
            description="Quatre étapes simples pour comprendre le problème et décider en connaissance de cause."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-pop-zinc border border-white/5 p-7">
                <div className="flex items-center justify-between">
                  <step.icon className="size-6 text-pop-red" />
                  <span className="text-xs font-bold text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 font-display font-bold text-xl text-pop-off">{step.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MascotTip
        title="Un entretien régulier aide à éviter les pannes liées à la poussière et à la surchauffe."
        body="Retrouvez les conseils de POP'FIX pour mieux protéger vos téléphones, tablettes, consoles et accessoires au quotidien."
      />

      <section className="bg-pop-black py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-black tracking-[-0.035em] text-4xl sm:text-6xl text-pop-off text-balance leading-[0.95]">
            Un appareil en panne ? <span className="text-pop-red">Parlons-en.</span>
          </h2>
          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            Décrivez le problème ou passez directement à l'atelier de Saint-François.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-pop-red text-white px-7 py-3.5 text-sm font-bold hover:bg-pop-red-deep"
            >
              Demander un diagnostic
            </Link>
            <a
              href={POPFIX.phoneHref}
              className="border border-white/15 text-pop-off px-7 py-3.5 text-sm font-bold hover:bg-white/10 inline-flex items-center gap-2"
            >
              <Phone className="size-4" /> {POPFIX.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
