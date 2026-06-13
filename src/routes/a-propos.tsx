import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Wrench, Heart, MessageCircle } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";
import mascot from "@/assets/mascot-popfix.png";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — POP'FIX, atelier de réparation à Saint-François" },
      {
        name: "description",
        content:
          "Découvrez POP'FIX : un atelier de réparation électronique passionné, local et accessible, ancré à Saint-François en Guadeloupe.",
      },
      { property: "og:title", content: "À propos de POP'FIX" },
      {
        property: "og:description",
        content: "L'histoire et la mission de POP'FIX, atelier de réparation à Saint-François.",
      },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Wrench,
    title: "Savoir-faire",
    body: "Chaque appareil est examiné avec méthode afin d'identifier précisément l'origine de la panne.",
  },
  {
    icon: Heart,
    title: "Honnêteté",
    body: "On vous dit ce qu'on peut faire, ce qu'on ne peut pas faire, et quand un remplacement vaut mieux qu'une réparation.",
  },
  {
    icon: MapPin,
    title: "Local",
    body: "Un atelier installé à Saint-François, au plus près de ses clients.",
  },
  {
    icon: MessageCircle,
    title: "Clarté",
    body: "La panne et la solution proposée sont expliquées simplement avant toute intervention.",
  },
] as const;

function AboutPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="À propos"
              title="Un atelier"
              accent="local et spécialisé."
              description="POP'FIX est un atelier de réparation électronique installé à Saint-François. Sa priorité : examiner chaque appareil avec soin, expliquer clairement le problème et proposer une solution adaptée."
              tone="light"
            />
          </div>
          <div className="relative">
            <img
              src={workshopImg}
              alt="Atelier POP'FIX"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 -left-5 bg-pop-red text-white px-5 py-3 -rotate-2 font-display font-black uppercase tracking-tight text-sm">
              Saint-François · Guadeloupe
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pop-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-pop-zinc p-7 ring-1 ring-white/5">
              <v.icon className="size-7 text-pop-red mb-5" />
              <h3 className="font-display font-bold text-xl uppercase text-pop-off">{v.title}</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pop-zinc border-y border-white/5 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <img
            src={mascot}
            alt="Mascotte POP'FIX"
            width={260}
            height={260}
            loading="lazy"
            className="size-48 md:size-60 object-contain mx-auto md:mx-0"
          />
          <div>
            <h2 className="font-display font-black uppercase text-3xl sm:text-5xl text-pop-off tracking-[-0.03em] leading-[0.95] text-balance">
              On diagnostique. On explique. <span className="text-pop-red">On répare.</span>
            </h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              Notre approche tient en trois étapes. L'appareil est d'abord examiné, le problème vous
              est expliqué clairement, puis l'intervention est réalisée uniquement avec votre
              accord.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-pop-red text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-pop-red-deep"
            >
              Venir nous rencontrer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
