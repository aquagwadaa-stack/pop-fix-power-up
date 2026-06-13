import { createFileRoute } from "@tanstack/react-router";
import { POPFIX } from "@/lib/popfix";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales & confidentialité — POP'FIX" },
      {
        name: "description",
        content:
          "Mentions légales et politique de confidentialité du site POP'FIX, Saint-François.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <section className="bg-pop-black py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Légal" title="Mentions" accent="légales." tone="light" />

        <div className="mt-12 space-y-10 text-zinc-300 leading-relaxed text-[15px]">
          <div>
            <h2 className="font-display font-bold uppercase text-xl text-pop-off mb-3">Éditeur</h2>
            <p>
              POP'FIX — {POPFIX.address.line1}, {POPFIX.address.line2}, {POPFIX.address.city},{" "}
              {POPFIX.address.region}.<br />
              Téléphone :{" "}
              <a className="text-pop-red" href={POPFIX.phoneHref}>
                {POPFIX.phone}
              </a>
              <br />
              Instagram :{" "}
              <a className="text-pop-red" href={POPFIX.instagram}>
                {POPFIX.instagramHandle}
              </a>
            </p>
            <p className="mt-3 text-zinc-500 text-sm">
              Les informations légales complètes (raison sociale, SIRET, directeur de publication,
              hébergeur) seront ajoutées par l'exploitant avant publication officielle.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold uppercase text-xl text-pop-off mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des éléments présents sur ce site (textes, illustrations, photographies,
              logo POP'FIX, mascotte) est protégé. Toute reproduction sans autorisation est
              interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold uppercase text-xl text-pop-off mb-3">
              Données personnelles
            </h2>
            <p>
              Les informations transmises via le formulaire de diagnostic (nom, téléphone,
              description de panne) sont utilisées uniquement pour vous recontacter et traiter votre
              demande. Elles ne sont jamais revendues. Vous disposez d'un droit d'accès, de
              rectification et de suppression — il suffit de nous écrire à l'adresse de l'atelier ou
              par téléphone.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold uppercase text-xl text-pop-off mb-3">
              Cookies & mesure d'audience
            </h2>
            <p>
              Le site n'utilise aucun cookie publicitaire. Une mesure d'audience anonyme peut être
              mise en place pour comprendre la fréquentation des pages (Google Analytics ou
              équivalent), conformément aux recommandations de la CNIL.
            </p>
          </div>

          <div>
            <h2 className="font-display font-bold uppercase text-xl text-pop-off mb-3">
              Limitation de responsabilité
            </h2>
            <p>
              Les conseils publiés sur le blog POP'FIX sont donnés à titre informatif. Pour toute
              intervention sur votre appareil, un diagnostic en atelier reste recommandé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
