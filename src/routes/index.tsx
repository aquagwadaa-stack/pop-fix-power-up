import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Star, Smartphone, Tablet, Gamepad2, Joystick, Headphones, Wrench, ScanLine, ClipboardList, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-controller.jpg";
import smartphoneImg from "@/assets/repair-smartphone.jpg";
import consoleImg from "@/assets/repair-console.jpg";
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
      { title: "POP'FIX — Réparation téléphone, console & manette à Saint-François" },
      { name: "description", content: "Réparateur à Saint-François en Guadeloupe : écran, batterie, joystick, console. Diagnostic avant intervention. 4,9/5 sur Google." },
      { property: "og:title", content: "POP'FIX — On remet votre appareil dans le game." },
      { property: "og:description", content: "Atelier de réparation électronique à Saint-François : smartphones, tablettes, consoles, manettes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Smartphone, title: "Smartphones", n: "01", img: smartphoneImg, items: ["Écran cassé", "Batterie fatiguée", "Port de charge", "Bouton & connectique"] },
  { icon: Tablet, title: "Tablettes", n: "02", img: tabletImg, items: ["Vitre tactile", "Batterie", "Connecteur", "Problème logiciel"] },
  { icon: Gamepad2, title: "Consoles", n: "03", img: consoleImg, items: ["Surchauffe / poussière", "Lecteur disque", "Port HDMI", "Ventilation"] },
  { icon: Joystick, title: "Manettes", n: "04", img: controllerImg, items: ["Drift joystick", "Sticks remplacés", "Boutons capricieux", "Gâchettes"] },
  { icon: Headphones, title: "Accessoires", n: "05", img: accessoriesImg, items: ["Audio & casques", "Câbles renforcés", "Protections", "Personnalisation"] },
] as const;

const steps = [
  { n: "01", icon: ClipboardList, title: "Vous expliquez", body: "Vous nous décrivez la panne par téléphone, Instagram ou en boutique." },
  { n: "02", icon: ScanLine, title: "On examine", body: "Diagnostic complet de l'appareil pour identifier la vraie cause." },
  { n: "03", icon: Wrench, title: "On propose", body: "Solution claire, étapes, prix juste — sans engagement." },
  { n: "04", icon: CheckCircle2, title: "On répare", body: "Après votre accord, intervention propre et appareil prêt à reprendre la partie." },
] as const;

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Manette de console démontée sur un établi POP'FIX" width={1920} height={1080} className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-pop-black via-pop-black/40 to-pop-black/70" />
          <div className="absolute inset-0 scanlines opacity-40" />
        </div>

        {/* Technical HUD annotations */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden md:block" aria-hidden>
          <div className="absolute top-[28%] left-[8%] flex flex-col items-start">
            <div className="h-px w-20 bg-pop-cyan/60" />
            <span className="text-[10px] font-mono text-pop-cyan mt-1 uppercase tracking-tighter bg-pop-black/70 px-2 py-0.5">[L3 STICK ASSEMBLY]</span>
          </div>
          <div className="absolute bottom-[30%] right-[10%] flex flex-col items-end">
            <div className="h-px w-24 bg-pop-red/70" />
            <span className="text-[10px] font-mono text-pop-red mt-1 uppercase tracking-tighter bg-pop-black/70 px-2 py-0.5">[FLEX CABLE_01]</span>
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pop-red/10 border border-pop-red/40 mb-6">
              <span className="size-1.5 bg-pop-red animate-pulse-dot" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-pop-red uppercase tracking-[0.25em]">
                Atelier ouvert · Saint-François
              </span>
            </div>

            <h1 className="font-display font-black uppercase tracking-[-0.04em] leading-[0.88] text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-pop-off text-balance">
              Votre appareil est <span className="text-pop-red">en panne ?</span><br />
              On le remet dans le game.
            </h1>

            <p className="mt-7 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl text-pretty leading-relaxed">
              Smartphones, tablettes, consoles et manettes : POP'FIX diagnostique et répare vos appareils à Saint-François.
              <span className="text-pop-red font-bold"> Pas besoin d'aller au Moule ni à Jarry.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="bg-pop-red text-white px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-pop-red-deep transition-colors clip-arrow pr-10">
                Demander un diagnostic
              </Link>
              <a href={POPFIX.phoneHref} className="bg-pop-off text-pop-black px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2">
                <Phone className="size-4" /> Appeler
              </a>
              <a href={POPFIX.maps} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-pop-off px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <MapPin className="size-4" /> Itinéraire
              </a>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-pop-black/85 backdrop-blur-md border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-pop-red">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-pop-red" />)}
              </div>
              <span className="font-display font-bold text-pop-off">{POPFIX.rating.score}</span>
              <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{POPFIX.rating.count} avis Google</span>
            </div>
            <span className="hidden sm:inline h-4 w-px bg-white/10" />
            <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Diagnostic avant intervention</span>
            <span className="hidden sm:inline h-4 w-px bg-white/10" />
            <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Smartphones · Tablettes · Consoles · Manettes</span>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-pop-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <SectionHeading
              eyebrow="Nos expertises"
              title="Qu'est-ce qu'on"
              accent="répare ?"
              description="On démonte, on diagnostique, on répare. Du smartphone du quotidien à la console qui chauffe — tout passe par l'établi."
            />
            <span className="text-pop-red font-mono text-[10px] uppercase tracking-widest hidden lg:block">
              [ 05 catégories / scroll ↓ ]
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative bg-pop-zinc ring-1 ring-white/5 overflow-hidden hover:ring-pop-red/60 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={`Réparation ${s.title}`} width={800} height={600} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pop-zinc via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] text-pop-red bg-pop-black/70 px-2 py-1 uppercase tracking-widest">#{s.n}</span>
                  <s.icon className="absolute top-3 right-3 size-5 text-pop-off/70" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-black text-2xl uppercase text-pop-off mb-3 tracking-tight">{s.title}</h3>
                  <ul className="space-y-1.5 mb-5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-xs text-zinc-400 uppercase tracking-tight font-medium">
                        <span className="size-1 bg-pop-red shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between pt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border-t border-white/5 group-hover:text-pop-red transition-colors"
                  >
                    Demander un diagnostic <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GAMING SECTION */}
      <section className="bg-pop-red relative overflow-hidden">
        <div className="absolute -top-10 right-0 select-none pointer-events-none opacity-10">
          <span className="font-display font-black text-[200px] lg:text-[280px] leading-none text-white tracking-[-0.06em]">GAME</span>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 font-bold">[ Univers gaming ]</span>
            <h2 className="mt-5 font-display font-black text-5xl lg:text-7xl text-white uppercase leading-[0.9] tracking-[-0.03em] text-balance">
              Remettez votre matériel<br />dans la partie.
            </h2>
            <p className="mt-6 text-white/90 text-lg max-w-xl leading-relaxed">
              Drift, joystick fatigué, boutons capricieux ou console qui chauffe ? Confiez votre équipement à POP'FIX pour un diagnostic de précision.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                { tag: "[DRIFT_FIX]", title: "Remplacement de sticks" },
                { tag: "[HEAT_CTRL]", title: "Nettoyage anti-poussière" },
                { tag: "[BUTTON_OK]", title: "Boutons & gâchettes" },
                { tag: "[HDMI_OUT]", title: "Connectique console" },
              ].map((b) => (
                <div key={b.title} className="bg-pop-black p-5">
                  <div className="text-pop-red text-[10px] font-mono uppercase tracking-widest mb-2">{b.tag}</div>
                  <div className="text-white font-display font-bold text-sm uppercase tracking-tight">{b.title}</div>
                </div>
              ))}
            </div>
            <Link to="/gaming" className="mt-10 inline-flex items-center gap-3 bg-pop-black text-white px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-pop-zinc transition-colors">
              Voir tout le gaming <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-pop-black p-2 ring-1 ring-white/10">
              <img src={controllerImg} alt="Réparation de manette gaming POP'FIX" width={900} height={900} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-pop-off text-pop-black px-5 py-3 -rotate-3 shadow-2xl hidden sm:block">
              <span className="font-display font-black text-xl uppercase tracking-tight italic">POP'FIX GAMING UNIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-24 lg:py-32 bg-pop-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Fonctionnement"
            title="Du diagnostic"
            accent="au retour dans le game."
            description="Quatre étapes simples. Vous gardez la main à chaque niveau."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {steps.map((s) => (
              <div key={s.n} className="bg-pop-black p-8 hover:bg-pop-zinc transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display font-black text-5xl text-pop-red leading-none">{s.n}</span>
                  <s.icon className="size-6 text-pop-off/60" />
                </div>
                <h4 className="font-display font-bold uppercase text-pop-off text-xl tracking-tight mb-2">{s.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MascotTip />

      {/* FINAL CTA */}
      <section className="bg-pop-black py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-black uppercase tracking-[-0.03em] text-4xl sm:text-6xl text-pop-off text-balance leading-[0.9]">
            Un problème technique ? <span className="text-pop-red">Parlons-en.</span>
          </h2>
          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            Votre réparateur est déjà à Saint-François. Décrivez-nous la panne, on revient vers vous.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-pop-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-pop-red-deep">
              Demander un diagnostic
            </Link>
            <a href={POPFIX.phoneHref} className="border border-white/20 text-pop-off px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 inline-flex items-center gap-2">
              <Phone className="size-4" /> {POPFIX.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
