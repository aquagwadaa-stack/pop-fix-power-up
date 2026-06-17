import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Clock, ExternalLink } from "lucide-react";
import { POPFIX } from "@/lib/popfix";
import { DiagnosticForm } from "@/components/DiagnosticForm";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & diagnostic — POP'FIX Saint-François" },
      {
        name: "description",
        content:
          "Contactez POP'FIX à Saint-François : téléphone, Instagram, formulaire de diagnostic. Adresse, horaires et itinéraire Google Maps.",
      },
      { property: "og:title", content: "Contact — POP'FIX" },
      {
        property: "og:description",
        content: "Demandez un diagnostic ou passez à l'atelier POP'FIX, Saint-François.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-pop-black border-b border-white/5 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Contact"
            title="Contactez"
            accent="l'atelier."
            description="Décrivez votre panne, appelez POP'FIX ou passez directement à la boutique de Saint-François."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-pop-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="space-y-6">
            <div className="bg-pop-zinc p-7 ring-1 ring-white/5">
              <span className="text-xs uppercase tracking-[0.16em] text-pop-red font-bold">
                Téléphone
              </span>
              <a
                href={POPFIX.phoneHref}
                className="mt-3 flex items-center gap-3 font-display font-black text-3xl sm:text-4xl text-pop-off hover:text-pop-red transition-colors"
              >
                <Phone className="size-7 text-pop-red" /> {POPFIX.phone}
              </a>
              <p className="mt-2 text-sm text-zinc-500">
                Du lundi au samedi, pendant les heures d'ouverture.
              </p>
            </div>

            <div className="bg-pop-zinc p-7 ring-1 ring-white/5">
              <span className="text-xs uppercase tracking-[0.16em] text-pop-red font-bold">
                Boutique
              </span>
              <div className="mt-3 flex items-start gap-3 text-pop-off">
                <MapPin className="size-6 text-pop-red shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-lg">{POPFIX.address.line1}</div>
                  <div className="text-sm text-zinc-400 mt-1">
                    {POPFIX.address.line2}
                    <br />
                    {POPFIX.address.city}, {POPFIX.address.region}
                  </div>
                </div>
              </div>
              <a
                href={POPFIX.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-pop-red text-white px-5 py-3 text-sm font-bold hover:bg-pop-red-deep"
              >
                Itinéraire Google Maps <ExternalLink className="size-3.5" />
              </a>
            </div>

            <div className="bg-pop-zinc p-7 ring-1 ring-white/5">
              <span className="text-xs uppercase tracking-[0.16em] text-pop-red font-bold">
                Horaires
              </span>
              <ul className="mt-3 space-y-2">
                {POPFIX.hours.map((h) => (
                  <li key={h.day} className="flex items-start gap-3 text-pop-off">
                    <Clock className="size-4 text-pop-red mt-1 shrink-0" />
                    <div className="flex-1 flex flex-wrap justify-between gap-2 text-sm">
                      <span className="font-bold tracking-tight">{h.day}</span>
                      <span className="text-zinc-400">{h.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={POPFIX.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-pop-red text-white p-7 hover:bg-pop-red-deep transition-colors"
            >
              <div className="flex items-center gap-3">
                <Instagram className="size-7" />
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] font-bold opacity-80">
                    Instagram
                  </div>
                  <div className="font-display font-black text-2xl tracking-tight">
                    {POPFIX.instagramHandle}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm opacity-90">
                Retrouvez les actualités de POP'FIX et contactez la boutique.
              </p>
            </a>
          </div>

          {/* Form */}
          <div className="bg-pop-zinc p-7 ring-1 ring-white/5 h-fit">
            <span className="text-xs uppercase tracking-[0.16em] text-pop-red font-bold">
              Demande de diagnostic
            </span>
            <h2 className="mt-3 font-display font-black text-3xl text-pop-off tracking-[-0.02em] mb-6">
              Décrivez le problème rencontré.
            </h2>
            <DiagnosticForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-pop-black pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="aspect-[16/8] ring-1 ring-white/10 overflow-hidden bg-pop-zinc">
            <iframe
              title="Carte POP'FIX Saint-François"
              src="https://www.google.com/maps?q=Les+Comptoirs+de+Saint-Fran%C3%A7ois%2C+rue+de+la+R%C3%A9publique%2C+97118+Saint-Fran%C3%A7ois%2C+Guadeloupe&output=embed"
              loading="lazy"
              className="w-full h-full grayscale contrast-110"
            />
          </div>
        </div>
      </section>
    </>
  );
}
