import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  HandCoins,
  Instagram,
  MapPin,
  Paintbrush,
  Phone,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";
import { POPFIX } from "@/lib/popfix";
import { MascotTip } from "@/components/MascotTip";

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
    id: "reparation",
    num: "01",
    icon: Wrench,
    title: "Réparation",
    subtitle: "Électronique",
    text: "Smartphones, tablettes, ordinateurs, écrans, consoles et manettes.",
    tone: "red",
  },
  {
    id: "rachat-valorisation",
    num: "02",
    icon: HandCoins,
    title: "Rachat",
    subtitle: "& Valorisation",
    text: "Estimation de consoles, manettes, téléphones et tablettes selon l'état.",
    tone: "dark",
  },
  {
    id: "relooking-manettes",
    num: "03",
    icon: Paintbrush,
    title: "Relooking",
    subtitle: "Manettes",
    text: "Personnalisation, nettoyage et remise en valeur de manettes.",
    tone: "light",
  },
] as const;

function HomePage() {
  return (
    <>
      {/* HERO BENTO */}
      <section className="bg-pop-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 pb-8 sm:pt-32 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Hero header */}
            <div className="md:col-span-8 bg-white text-pop-black p-7 sm:p-10 md:p-12 flex flex-col justify-between min-h-[420px] border-b-[6px] border-pop-red fade-up">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-pop-black/70">
                  <MapPin className="size-3.5 text-pop-red" />
                  Atelier · Saint-François
                </span>
                <span className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.25em] text-pop-black/40">
                  EST. Guadeloupe
                </span>
              </div>

              <div className="mt-8">
                <h1 className="font-display font-black leading-[0.92] tracking-[-0.035em] text-balance text-[2.6rem] sm:text-6xl lg:text-7xl">
                  Réparer,<br />
                  rallumer,<br />
                  <span className="text-pop-red italic">faire durer.</span>
                </h1>
                <p className="mt-6 max-w-md text-sm sm:text-base text-pop-warm-1 leading-relaxed">
                  Smartphones, tablettes, ordinateurs, écrans, consoles et manettes —
                  POP'FIX répare, rachète et valorise vos appareils du quotidien.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-pop-red text-white px-5 sm:px-6 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-pop-black transition-colors"
                  >
                    Demander un diagnostic <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={POPFIX.phoneHref}
                    className="inline-flex items-center gap-2 border-2 border-pop-black text-pop-black px-5 sm:px-6 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-pop-black hover:text-white transition-colors"
                  >
                    <Phone className="size-4" /> Appeler
                  </a>
                </div>
              </div>
            </div>

            {/* Atelier photo block */}
            <Link
              to="/a-propos"
              className="md:col-span-4 relative overflow-hidden min-h-[260px] md:min-h-[420px] group fade-up-2"
            >
              <img
                src={workshopImg}
                alt="L'atelier POP'FIX à Saint-François"
                className="absolute inset-0 size-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pop-black via-pop-black/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 text-white">
                <span className="self-start bg-pop-red text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1">
                  Le lieu
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-pop-red">
                    L'établi
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
                    L'atelier.
                  </h2>
                  <p className="text-white/75 text-sm mt-2 max-w-[18ch]">
                    Outils de précision, lampe de travail, ordre méthodique.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                    Visiter <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Service cards 01–03 */}
            {services.map((s, i) => {
              const isRed = s.tone === "red";
              const isDark = s.tone === "dark";
              const bg = isRed
                ? "bg-pop-red text-white"
                : isDark
                  ? "bg-[#141414] text-white border border-white/10 hover:border-pop-red"
                  : "bg-white text-pop-black";
              const numBorder = isRed
                ? "border-white/35 text-white"
                : isDark
                  ? "border-pop-red text-pop-red"
                  : "border-pop-black/20 text-pop-black";
              return (
                <Link
                  key={s.id}
                  to="/services"
                  hash={s.id}
                  className={`md:col-span-4 group ${bg} p-7 sm:p-8 min-h-[260px] flex flex-col justify-between transition-colors fade-up-${i + 1 > 3 ? 3 : i + 1}`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`size-11 border-2 ${numBorder} flex items-center justify-center font-mono font-bold text-sm`}
                    >
                      {s.num}
                    </div>
                    <s.icon className="size-6 opacity-80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-[1.7rem] font-black uppercase leading-[0.95] tracking-tight">
                      {s.title}
                      <br />
                      <span className={isRed ? "" : "text-pop-red"}>{s.subtitle}</span>
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${isRed ? "text-white/85" : isDark ? "text-white/65" : "text-pop-warm-2"}`}
                    >
                      {s.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                      Détail <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Service 04 — accessoires, full width strip */}
            <Link
              to="/services"
              hash="accessoires"
              className="md:col-span-12 bg-white text-pop-black p-5 sm:p-6 flex flex-wrap items-center justify-between gap-5 border-l-[6px] border-pop-red hover:bg-pop-paper transition-colors"
            >
              <div className="flex items-center gap-5 sm:gap-7">
                <span className="font-mono font-bold text-sm text-pop-black/40">04</span>
                <ShoppingBag className="size-5 text-pop-red" strokeWidth={1.75} />
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">
                  Accessoires <span className="text-pop-red">high-tech</span>
                </h3>
              </div>
              <span className="hidden md:block text-[10px] font-mono uppercase tracking-[0.25em] text-pop-black/40">
                Sélection disponible à l'atelier
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-pop-red">
                Voir <ArrowRight className="size-3.5" />
              </span>
            </Link>

            {/* Info strip: horaires + adresse */}
            <div className="md:col-span-12 bg-[#141414] text-white p-5 sm:p-6 flex flex-wrap items-center gap-6 text-[11px] font-mono uppercase tracking-[0.22em]">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-pop-red animate-pulse" />
                Atelier ouvert
              </span>
              <span className="flex items-center gap-2 text-white/70">
                <Clock className="size-3.5" /> Lun–Ven · 9h30–17h
              </span>
              <span className="flex items-center gap-2 text-white/70">
                <MapPin className="size-3.5" /> {POPFIX.address.line1}, Saint-François
              </span>
              <a
                href={POPFIX.phoneHref}
                className="md:ml-auto inline-flex items-center gap-2 text-pop-red hover:text-white"
              >
                <Phone className="size-3.5" /> {POPFIX.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI / ATELIER */}
      <section className="bg-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-pop-red text-[11px] uppercase tracking-[0.22em] font-bold font-mono">
              ◆ Pourquoi POP'FIX
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.03em] text-pop-black">
              Un atelier de proximité,
              <br />
              <span className="italic text-pop-red">avec le goût</span> du
              <br />
              travail bien fait.
            </h2>
            <p className="mt-6 max-w-xl text-pop-warm-1 leading-relaxed">
              POP'FIX met son savoir-faire au service de vos appareils du quotidien. Chaque
              demande est étudiée avec attention afin de proposer une intervention adaptée à la
              panne et au modèle confié.
            </p>
            <Link
              to="/a-propos"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-pop-black pb-1 text-sm font-bold uppercase tracking-[0.2em] text-pop-black hover:border-pop-red hover:text-pop-red transition-colors"
            >
              Découvrir l'atelier <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={workshopImg}
              alt="Atelier de réparation POP'FIX"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-pop-red text-white px-4 py-3 text-[10px] font-mono uppercase tracking-[0.22em] font-bold">
              Saint-François · Guadeloupe
            </div>
          </div>
        </div>
      </section>

      <MascotTip />

      {/* CTA */}
      <section className="bg-pop-red text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70">
              ◆ Une question ?
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-[-0.025em]">
              Une question sur
              <br />
              <span className="italic">votre appareil ?</span>
            </h2>
            <p className="mt-4 text-white/85 max-w-md">
              Contactez l'atelier ou retrouvez les actualités de POP'FIX sur Instagram.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-3">
            <a
              href={POPFIX.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10"
            >
              <Instagram className="size-4" /> {POPFIX.instagramHandle}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-pop-black px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-pop-black transition-colors"
            >
              Contacter POP'FIX <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
