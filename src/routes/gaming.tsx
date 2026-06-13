import { createFileRoute, Link } from "@tanstack/react-router";
import { Gamepad2, Joystick, Wind, Plug, Sparkles, ArrowRight } from "lucide-react";
import controllerImg from "@/assets/repair-controller.jpg";
import consoleImg from "@/assets/repair-console.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { MascotTip } from "@/components/MascotTip";

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      { title: "Réparation console & manette PS5, Switch, Xbox — POP'FIX Saint-François" },
      { name: "description", content: "Drift de joystick, surchauffe, nettoyage interne, port HDMI : POP'FIX répare vos consoles et manettes à Saint-François, Guadeloupe." },
      { property: "og:title", content: "Gaming — POP'FIX" },
      { property: "og:description", content: "Réparation et entretien gaming : consoles, manettes, joysticks, nettoyage poussière." },
      { property: "og:url", content: "/gaming" },
    ],
    links: [{ rel: "canonical", href: "/gaming" }],
  }),
  component: GamingPage,
});

const blocs = [
  { icon: Joystick, tag: "[DRIFT_FIX]", title: "Joystick & sticks", body: "Remplacement de modules pour stopper le drift et retrouver la précision d'origine." },
  { icon: Wind, tag: "[HEAT_CTRL]", title: "Nettoyage anti-poussière", body: "Démontage, nettoyage interne et changement de pâte thermique pour faire respirer votre console." },
  { icon: Plug, tag: "[CONN_OK]", title: "Connectique & ports", body: "Port HDMI, USB, jack manette : on remet le contact." },
  { icon: Gamepad2, tag: "[BUTTON_OK]", title: "Boutons & gâchettes", body: "L1/L2/R1/R2, croix directionnelle, gâchettes adaptatives — diagnostic et remplacement." },
] as const;

function GamingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pop-red py-24 lg:py-32 border-b border-pop-black/30">
        <div className="absolute -top-10 right-0 select-none pointer-events-none opacity-10">
          <span className="font-display font-black text-[200px] lg:text-[320px] leading-none text-white tracking-[-0.06em]">GAME</span>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 font-bold">[ Univers gaming ]</span>
          <h1 className="mt-5 font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl text-white tracking-[-0.04em] leading-[0.88] text-balance max-w-5xl">
            Remettez votre matériel<br />dans la partie.
          </h1>
          <p className="mt-6 text-white/90 max-w-2xl text-lg">
            PS5, PS4, Switch, Xbox, manettes pro : POP'FIX diagnostique et répare votre setup gaming à Saint-François.
          </p>
        </div>
      </section>

      <section className="bg-pop-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading
              eyebrow="Nos interventions gaming"
              title="Diagnostic"
              accent="de précision."
              description="Drift, joystick fatigué, boutons capricieux, console qui chauffe ou s'éteint ? On démonte proprement, on identifie, on propose."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {blocs.map((b) => (
                <div key={b.title} className="bg-pop-zinc p-6 ring-1 ring-white/5 hover:ring-pop-red/50 transition">
                  <div className="flex items-center gap-2 text-pop-red text-[10px] font-mono uppercase tracking-widest mb-3">
                    <b.icon className="size-3.5" /> {b.tag}
                  </div>
                  <div className="font-display font-bold text-lg uppercase text-pop-off tracking-tight">{b.title}</div>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img src={controllerImg} alt="Réparation de manette gaming" width={900} height={900} loading="lazy" className="w-full aspect-square object-cover ring-1 ring-white/10" />
            <img src={consoleImg} alt="Nettoyage interne de console" width={900} height={900} loading="lazy" className="w-full aspect-square object-cover ring-1 ring-white/10 mt-10" />
          </div>
        </div>
      </section>

      <section className="bg-pop-zinc py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Bonus"
              title="Personnalisation"
              accent="de manettes."
              description="Coques graphiques, finitions premium, sticks personnalisés — donnez à votre manette une identité unique."
            />
            <span className="text-pop-red font-mono text-[10px] uppercase tracking-widest">
              [ Sur demande — nous consulter ]
            </span>
          </div>
          <div className="bg-pop-black p-8 ring-1 ring-white/10 flex flex-col md:flex-row items-start gap-8">
            <Sparkles className="size-10 text-pop-cyan shrink-0" />
            <div>
              <h3 className="font-display font-bold text-2xl uppercase text-pop-off">Une manette à votre image</h3>
              <p className="text-zinc-400 mt-3 leading-relaxed max-w-2xl">
                Cette prestation est proposée sur demande. Contactez-nous avec votre modèle de manette et vos envies : on étudie le projet et on vous propose un devis personnalisé.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-pop-red-deep">
                En parler avec POP'FIX <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MascotTip
        title="Votre appareil mérite une seconde partie."
        body="Une console bien entretenue dure plus longtemps qu'une console neuve mal traitée. En Guadeloupe, l'humidité et la poussière travaillent contre vous — POP'FIX travaille pour vous."
      />
    </>
  );
}
