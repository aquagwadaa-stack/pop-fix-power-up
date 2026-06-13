import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gamepad2, Joystick, Plug, Wind } from "lucide-react";
import controllerImg from "@/assets/repair-controller.jpg";
import consoleImg from "@/assets/hero-controller.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { MascotTip } from "@/components/MascotTip";

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      {
        title: "Réparation console et manette à Saint-François — POP'FIX",
      },
      {
        name: "description",
        content:
          "Joystick défectueux, surchauffe, nettoyage interne ou problème de connectique : diagnostic de consoles et manettes chez POP'FIX à Saint-François.",
      },
      { property: "og:title", content: "Consoles & manettes — POP'FIX" },
      {
        property: "og:description",
        content: "Diagnostic, réparation et entretien de consoles et manettes à Saint-François.",
      },
      { property: "og:url", content: "/gaming" },
    ],
    links: [{ rel: "canonical", href: "/gaming" }],
  }),
  component: GamingPage,
});

const services = [
  {
    icon: Joystick,
    title: "Joysticks et sticks",
    body: "Diagnostic du drift, de la perte de précision et des commandes qui répondent mal.",
  },
  {
    icon: Wind,
    title: "Nettoyage et surchauffe",
    body: "Examen de la ventilation et nettoyage interne lorsque l'appareil chauffe ou devient bruyant.",
  },
  {
    icon: Plug,
    title: "Ports et connectique",
    body: "Diagnostic des ports HDMI, USB, de charge ou des prises audio selon l'appareil.",
  },
  {
    icon: Gamepad2,
    title: "Boutons et gâchettes",
    body: "Contrôle des boutons, gâchettes, croix directionnelles et autres commandes défectueuses.",
  },
] as const;

function GamingPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-pop-red text-xs font-bold uppercase tracking-[0.16em]">
              Consoles & manettes
            </span>
            <h1 className="mt-5 font-display font-black text-5xl sm:text-6xl lg:text-7xl text-pop-off tracking-[-0.045em] leading-[0.94] text-balance">
              Diagnostic et réparation de votre matériel.
            </h1>
            <p className="mt-6 text-zinc-300 max-w-2xl text-lg leading-relaxed">
              Manette qui dérive, boutons défectueux, console qui chauffe ou problème de connectique
              : POP'FIX examine votre équipement à Saint-François et vous présente la solution
              adaptée.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3.5 text-sm font-bold hover:bg-pop-red-deep"
            >
              Demander un diagnostic <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={controllerImg}
              alt="Diagnostic et réparation d'une manette"
              width={900}
              height={900}
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src={consoleImg}
              alt="Entretien interne d'une console"
              width={900}
              height={900}
              className="w-full aspect-[4/5] object-cover mt-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-pop-black py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Interventions"
            title="Les problèmes les plus fréquents"
            description="La possibilité de réparation dépend du modèle, de la panne constatée et de la disponibilité des pièces."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-pop-zinc p-7 border border-white/5 hover:border-pop-red/50 transition-colors"
              >
                <service.icon className="size-6 text-pop-red" />
                <h2 className="mt-6 font-display font-bold text-xl text-pop-off">
                  {service.title}
                </h2>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pop-off text-pop-black py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-[-0.035em] leading-[0.96]">
              Votre modèle ou votre panne n'apparaît pas dans la liste ?
            </h2>
            <p className="mt-4 text-zinc-700 leading-relaxed max-w-2xl">
              Contactez l'atelier avec la référence de votre console ou de votre manette. POP'FIX
              pourra vous indiquer si un diagnostic est possible.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-pop-black text-white px-6 py-3.5 text-sm font-bold hover:bg-pop-zinc"
          >
            Contacter l'atelier <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <MascotTip
        title="Une console qui chauffe ou devient très bruyante mérite d'être examinée."
        body="La poussière et une ventilation insuffisante peuvent perturber son fonctionnement. Évitez de démonter l'appareil sans matériel adapté et demandez conseil à l'atelier."
      />
    </>
  );
}
