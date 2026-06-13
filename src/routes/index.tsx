import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Gamepad2,
  Instagram,
  MapPin,
  Phone,
  ScanSearch,
  Smartphone,
  Star,
  Tablet,
  Joystick,
} from "lucide-react";
import heroImg from "@/assets/repair-smartphone.jpg";
import smartphoneImg from "@/assets/repair-smartphone.jpg";
import consoleImg from "@/assets/hero-controller.jpg";
import controllerImg from "@/assets/repair-controller.jpg";
import tabletImg from "@/assets/repair-tablet.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import workshopImg from "@/assets/workshop.jpg";
import { POPFIX } from "@/lib/popfix";
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

const needs = [
  { icon: Smartphone, label: "Smartphone", to: "/reparations" },
  { icon: Tablet, label: "Tablette", to: "/reparations" },
  { icon: Gamepad2, label: "Console", to: "/gaming" },
  { icon: Joystick, label: "Manette", to: "/gaming" },
] as const;

const gallery = [
  { src: workshopImg, alt: "L'atelier POP'FIX à Saint-François", span: "row-span-2" },
  { src: controllerImg, alt: "Intérieur d'une manette en cours de réparation", span: "" },
  { src: consoleImg, alt: "Console en cours de nettoyage", span: "" },
  { src: tabletImg, alt: "Tablette en diagnostic", span: "" },
  { src: accessoriesImg, alt: "Accessoires disponibles à l'atelier", span: "" },
] as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-pop-black text-pop-cream">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Réparation d'un smartphone à l'atelier POP'FIX"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pop-black/70 via-pop-black/55 to-pop-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-3 py-1.5 text-[11px] tracking-wide text-white/85">
              <span className="size-1.5 rounded-full bg-pop-red animate-pulse" />
              Atelier ouvert à Saint-François
            </div>

            <h1 className="mt-6 font-display font-semibold leading-[1.05] tracking-[-0.025em] text-balance text-3xl sm:text-5xl lg:text-6xl text-pop-cream">
              Votre réparateur électronique à{" "}
              <span className="text-pop-red">Saint-François.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Smartphones, tablettes, consoles et manettes : POP'FIX diagnostique la panne et vous
              explique la solution avant toute intervention.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-pop-red-deep transition-colors"
              >
                Demander un diagnostic <ArrowRight className="size-4" />
              </Link>
              <a
                href={POPFIX.phoneHref}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur"
              >
                <Phone className="size-4" /> Appeler l'atelier
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 text-sm text-white/75 max-w-2xl">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 text-pop-red shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs">Adresse</dt>
                  <dd className="text-white">
                    {POPFIX.address.line1}
                    <br />
                    {POPFIX.address.city}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="size-4 mt-0.5 text-pop-red shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs">Aujourd'hui</dt>
                  <dd className="text-white">9h30 — 13h · 14h — 17h</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Star className="size-4 mt-0.5 text-pop-red fill-pop-red shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs">Avis Google</dt>
                  <dd className="text-white">
                    {POPFIX.rating.score} · {POPFIX.rating.count} avis
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* NEED SELECTOR */}
      <section className="bg-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-pop-black max-w-xl leading-tight">
              Quel appareil souhaitez-vous faire réparer ?
            </h2>
            <p className="text-pop-warm-2 text-sm sm:text-base max-w-md">
              Choisissez votre appareil pour voir les pannes prises en charge à l'atelier.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {needs.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="group relative bg-white border border-black/10 rounded-2xl p-6 sm:p-8 hover:border-pop-red hover:-translate-y-0.5 transition-all duration-300"
              >
                <n.icon
                  className="size-7 sm:size-8 text-pop-warm-1 group-hover:text-pop-red transition-colors"
                  strokeWidth={1.5}
                />
                <div className="mt-8 flex items-end justify-between">
                  <span className="font-display text-lg sm:text-xl text-pop-black">{n.label}</span>
                  <ArrowUpRight className="size-4 text-pop-warm-2 group-hover:text-pop-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI — editorial */}
      <section className="bg-pop-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
              Pourquoi POP'FIX
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-pop-black leading-[1.05] tracking-[-0.02em] text-balance">
              Un atelier de proximité, un travail expliqué.
            </h2>
            <p className="mt-6 text-pop-warm-1 leading-relaxed">
              POP'FIX, c'est un réparateur installé à Saint-François qui prend le temps d'examiner
              chaque appareil et de présenter une solution claire avant d'intervenir.
            </p>
            <Link
              to="/a-propos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              En savoir plus sur l'atelier <ArrowRight className="size-4" />
            </Link>
          </div>

          <ol className="lg:col-span-7 space-y-8">
            {[
              {
                k: "01",
                title: "Un atelier à Saint-François",
                body: "Plus besoin de descendre jusqu'à Jarry : votre appareil est pris en charge localement, dans une vraie boutique.",
              },
              {
                k: "02",
                title: "Un diagnostic expliqué clairement",
                body: "L'origine de la panne vous est présentée avec des mots simples, ainsi que les options de réparation.",
              },
              {
                k: "03",
                title: "Une intervention réalisée avec votre accord",
                body: "Rien n'est démarré sans votre validation. Vous décidez en connaissance de cause.",
              },
            ].map((arg) => (
              <li
                key={arg.k}
                className="grid grid-cols-[auto_1fr] gap-6 pb-8 border-b border-black/10 last:border-0"
              >
                <span className="font-display text-pop-red text-xl">{arg.k}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-pop-black">{arg.title}</h3>
                  <p className="mt-2 text-pop-warm-2 leading-relaxed">{arg.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES — varied sizes */}
      <section className="bg-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Services"
              title="Ce que POP'FIX prend en charge"
              description="Le smartphone reste la prestation principale. L'atelier intervient aussi sur les tablettes, consoles, manettes et propose une sélection d'accessoires."
            />
            <Link
              to="/reparations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              Toutes les réparations <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 auto-rows-[minmax(0,1fr)] gap-4">
            {/* Smartphone — featured */}
            <Link
              to="/reparations"
              className="group relative lg:col-span-4 lg:row-span-2 rounded-3xl overflow-hidden bg-pop-black text-white min-h-[420px]"
            >
              <img
                src={smartphoneImg}
                alt="Réparation de smartphone à l'atelier"
                className="absolute inset-0 size-full object-cover opacity-70 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative h-full p-8 sm:p-10 flex flex-col justify-end">
                <span className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
                  Prestation principale
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] max-w-xl">
                  Smartphones : écran, batterie, charge, boutons.
                </h3>
                <p className="mt-4 text-white/75 max-w-lg">
                  Diagnostic complet et réparation des pannes les plus courantes sur la plupart des
                  modèles.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Voir les détails <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            {/* Tablette */}
            <Link
              to="/reparations"
              className="group relative lg:col-span-2 rounded-3xl overflow-hidden bg-pop-paper border border-black/10 p-6 flex flex-col"
            >
              <div className="aspect-[5/3] rounded-xl overflow-hidden bg-white">
                <img
                  src={tabletImg}
                  alt="Réparation de tablette"
                  className="size-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-pop-black">Tablettes</h3>
              <p className="text-sm text-pop-warm-2 mt-1">
                Vitre tactile, batterie, connecteur de charge.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pop-black group-hover:text-pop-red">
                Découvrir <ArrowRight className="size-4" />
              </span>
            </Link>

            {/* Consoles */}
            <Link
              to="/gaming"
              className="group relative lg:col-span-2 rounded-3xl overflow-hidden bg-pop-black text-white p-6 flex flex-col"
            >
              <div className="aspect-[5/3] rounded-xl overflow-hidden">
                <img
                  src={consoleImg}
                  alt="Réparation de console"
                  className="size-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <h3 className="mt-5 font-display text-xl">Consoles & manettes</h3>
              <p className="text-sm text-white/65 mt-1">Drift de joystick, boutons, nettoyage.</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-pop-red">
                Découvrir <ArrowRight className="size-4" />
              </span>
            </Link>

            {/* Accessoires */}
            <Link
              to="/accessoires"
              className="group relative lg:col-span-3 rounded-3xl overflow-hidden bg-white border border-black/10 p-6 flex gap-5"
            >
              <div className="size-28 sm:size-32 rounded-xl overflow-hidden shrink-0">
                <img
                  src={accessoriesImg}
                  alt="Accessoires disponibles"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-xl text-pop-black">Accessoires</h3>
                <p className="text-sm text-pop-warm-2 mt-1">
                  Câbles, protections, audio et petit high-tech.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-pop-black group-hover:text-pop-red">
                  Voir la sélection <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            {/* Diagnostic CTA */}
            <Link
              to="/contact"
              className="group relative lg:col-span-3 rounded-3xl overflow-hidden bg-pop-red text-white p-6 flex flex-col justify-between"
            >
              <ScanSearch className="size-7" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-2xl leading-tight">
                  Une panne précise ? Décrivez-la.
                </h3>
                <p className="text-sm text-white/85 mt-2">
                  Quelques lignes suffisent pour préparer le diagnostic.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Demander un diagnostic <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* VIE DE L'ATELIER */}
      <section className="bg-pop-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
                Au quotidien
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-pop-black leading-tight max-w-xl">
                En ce moment à l'atelier
              </h2>
            </div>
            <a
              href={POPFIX.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              <Instagram className="size-4" /> Suivre {POPFIX.instagramHandle}
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 sm:gap-4 lg:h-[520px]">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-2xl bg-white ${g.span} ${
                  i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="size-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNEMENT — 3 étapes horizontales */}
      <section className="bg-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-24">
          <SectionHeading
            eyebrow="Fonctionnement"
            title="Trois étapes, sans surprise."
            description="Un déroulé simple, du dépôt de l'appareil à la décision de réparer."
          />

          <ol className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8 relative">
            <div
              className="hidden md:block absolute left-0 right-0 top-6 h-px bg-black/10"
              aria-hidden
            />
            {[
              {
                k: "01",
                title: "Vous présentez l'appareil",
                body: "En boutique, par téléphone, sur Instagram ou via le formulaire.",
              },
              {
                k: "02",
                title: "POP'FIX réalise le diagnostic",
                body: "L'origine de la panne est identifiée, la solution vous est expliquée.",
              },
              {
                k: "03",
                title: "Vous décidez avant l'intervention",
                body: "Aucune réparation n'est lancée sans votre accord préalable.",
              },
            ].map((s) => (
              <li key={s.k} className="relative bg-pop-cream pt-0 md:pt-2 md:pr-6">
                <span className="relative inline-flex items-center justify-center size-12 rounded-full bg-pop-black text-pop-cream font-display text-sm">
                  {s.k}
                </span>
                <h3 className="mt-5 font-display text-xl text-pop-black">{s.title}</h3>
                <p className="mt-2 text-pop-warm-2 leading-relaxed text-sm">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONSEILS preview */}
      <section className="bg-pop-cream pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Conseils"
              title="Petits gestes, longue durée de vie."
            />
            <Link
              to="/conseils"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pop-black hover:text-pop-red"
            >
              Tous les conseils <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tag: "Batterie",
                title: "Protéger la batterie de son smartphone",
                body: "Quelques habitudes simples permettent de préserver l'autonomie de votre téléphone au quotidien.",
              },
              {
                tag: "Surchauffe",
                title: "Éviter la surchauffe en pleine journée",
                body: "En Guadeloupe, la chaleur et le sel sollicitent particulièrement les appareils électroniques.",
              },
              {
                tag: "Gaming",
                title: "Entretenir sa console et ses manettes",
                body: "Poussière, joysticks, ventilation : ce qu'il faut surveiller pour éviter les pannes.",
              },
            ].map((c) => (
              <Link
                key={c.title}
                to="/conseils"
                className="group block bg-white border border-black/10 rounded-2xl p-6 hover:border-pop-red transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-pop-red">
                  {c.tag}
                </span>
                <h3 className="mt-3 font-display text-xl text-pop-black leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-pop-warm-2 leading-relaxed">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-pop-black group-hover:text-pop-red">
                  Lire le conseil <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MascotTip />

      {/* LOCALISATION */}
      <section className="bg-pop-black text-pop-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <span className="text-pop-red text-[11px] uppercase tracking-[0.18em] font-semibold">
              Localisation
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]">
              Passez à l'atelier, on est juste là.
            </h2>

            <dl className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="size-5 text-pop-red mt-0.5 shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs uppercase tracking-wider">Adresse</dt>
                  <dd className="text-white mt-1">
                    {POPFIX.address.line1}
                    <br />
                    {POPFIX.address.line2}
                    <br />
                    {POPFIX.address.city}, {POPFIX.address.region}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="size-5 text-pop-red mt-0.5 shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs uppercase tracking-wider">Horaires</dt>
                  <dd className="text-white mt-1 space-y-0.5">
                    {POPFIX.hours.map((h) => (
                      <div key={h.day}>
                        <span className="text-white/75">{h.day}</span> — {h.time}
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="size-5 text-pop-red mt-0.5 shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs uppercase tracking-wider">Téléphone</dt>
                  <dd className="text-white mt-1">
                    <a href={POPFIX.phoneHref} className="hover:text-pop-red">
                      {POPFIX.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="size-5 text-pop-red mt-0.5 shrink-0" />
                <div>
                  <dt className="text-white/55 text-xs uppercase tracking-wider">Instagram</dt>
                  <dd className="text-white mt-1">
                    <a
                      href={POPFIX.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pop-red"
                    >
                      {POPFIX.instagramHandle}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={POPFIX.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-pop-red-deep"
              >
                <MapPin className="size-4" /> Obtenir l'itinéraire
              </a>
              <a
                href={POPFIX.phoneHref}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10"
              >
                <Phone className="size-4" /> Appeler
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-pop-ink min-h-[360px]">
            <iframe
              title="Plan — POP'FIX Saint-François"
              src="https://www.google.com/maps?q=Les+Comptoirs+de+Saint-Fran%C3%A7ois%2C+rue+de+la+R%C3%A9publique%2C+97118+Saint-Fran%C3%A7ois&output=embed"
              loading="lazy"
              className="absolute inset-0 size-full grayscale-[0.4] contrast-110"
            />
          </div>
        </div>
      </section>
    </>
  );
}
