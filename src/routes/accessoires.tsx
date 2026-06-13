import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cable,
  Shield,
  Headphones,
  Joystick,
  Battery,
  PackageSearch,
  ArrowRight,
} from "lucide-react";
import accessoriesImg from "@/assets/accessories.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/accessoires")({
  head: () => ({
    meta: [
      { title: "Accessoires high-tech — POP'FIX Saint-François" },
      {
        name: "description",
        content:
          "Câbles, protections d'écran, accessoires audio et produits high-tech disponibles chez POP'FIX à Saint-François.",
      },
      { property: "og:title", content: "Accessoires — POP'FIX" },
      {
        property: "og:description",
        content: "Sélection d'accessoires high-tech en boutique à Saint-François.",
      },
      { property: "og:url", content: "/accessoires" },
    ],
    links: [{ rel: "canonical", href: "/accessoires" }],
  }),
  component: AccessoiresPage,
});

const cats = [
  {
    icon: Cable,
    title: "Câbles & adaptateurs",
    body: "USB-C, Lightning, HDMI renforcés pour durer plus longtemps.",
  },
  {
    icon: Shield,
    title: "Protections d'écran",
    body: "Verres trempés et coques pour smartphones et tablettes.",
  },
  {
    icon: Headphones,
    title: "Audio",
    body: "Casques, écouteurs et enceintes Bluetooth sélectionnés.",
  },
  {
    icon: Joystick,
    title: "Consoles & manettes",
    body: "Accessoires et produits compatibles selon les disponibilités.",
  },
  { icon: Battery, title: "Énergie", body: "Batteries externes et stations de charge." },
  {
    icon: PackageSearch,
    title: "Autres produits high-tech",
    body: "Nouveautés et références disponibles directement en boutique.",
  },
] as const;

function AccessoiresPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pop-black border-b border-white/5">
        <div className="absolute inset-0">
          <img
            src={accessoriesImg}
            alt=""
            aria-hidden
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pop-black via-pop-black/70 to-pop-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
          <SectionHeading
            eyebrow="Boutique"
            title="Accessoires high-tech"
            accent="du quotidien."
            description="Découvrez une sélection de câbles, protections, produits audio et accessoires disponibles directement à l'atelier de Saint-François."
          />
        </div>
      </section>

      <section className="bg-pop-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c) => (
            <div
              key={c.title}
              className="bg-pop-zinc p-7 ring-1 ring-white/5 hover:ring-pop-red/50 transition-all group"
            >
              <c.icon className="size-7 text-pop-red mb-5" />
              <h3 className="font-display font-bold text-xl text-pop-off tracking-tight">
                {c.title}
              </h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pop-zinc border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-pop-off tracking-[-0.03em]">
            Vous cherchez une référence précise ?
          </h2>
          <p className="mt-4 text-zinc-400">
            Les stocks peuvent varier. Contactez la boutique pour connaître les produits
            disponibles.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-pop-red text-white px-7 py-3.5 text-sm font-bold hover:bg-pop-red-deep"
          >
            Nous contacter <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
