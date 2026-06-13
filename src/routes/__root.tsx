import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { POPFIX } from "@/lib/popfix";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-pop-black text-pop-off flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="max-w-xl text-center relative">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-pop-red mb-6">
          [ ERROR_404 // SIGNAL_LOST ]
        </div>
        <h1 className="font-display font-black text-[8rem] sm:text-[12rem] leading-none tracking-[-0.05em]">
          4<span className="text-pop-red">0</span>4
        </h1>
        <p className="mt-4 text-xl font-display font-bold uppercase">
          Cette page est en panne.
        </p>
        <p className="mt-2 text-zinc-400">
          Mais votre appareil n'a pas à l'être. On s'en occupe à Saint-François.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-pop-red px-6 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-pop-red-deep">
            Retour à l'accueil
          </Link>
          <Link to="/contact" className="border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-widest text-pop-off hover:bg-white/10">
            Demander un diagnostic
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-pop-black px-4 text-pop-off">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-black uppercase tracking-tight">Cette page n'a pas chargé</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Un grain de poussière dans les circuits. On peut réessayer ou rentrer à la base.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-pop-red px-4 py-2 text-sm font-bold uppercase tracking-widest text-white"
          >
            Réessayer
          </button>
          <a href="/" className="border border-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest text-pop-off">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "POP'FIX — Réparation smartphone, console & manette à Saint-François" },
      { name: "description", content: "Atelier POP'FIX à Saint-François (Guadeloupe) : réparation de smartphones, tablettes, consoles et manettes. Diagnostic avant intervention, 4,9/5 sur Google." },
      { name: "author", content: "POP'FIX" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "POP'FIX" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "POP'FIX",
          description: "Réparation de smartphones, tablettes, consoles et manettes à Saint-François, Guadeloupe.",
          telephone: POPFIX.phone,
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${POPFIX.address.line1}, ${POPFIX.address.line2}`,
            addressLocality: "Saint-François",
            postalCode: "97118",
            addressRegion: "Guadeloupe",
            addressCountry: "GP",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: String(POPFIX.rating.count),
          },
          sameAs: [POPFIX.instagram],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:30", closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:30", closes: "14:00",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-pop-cream text-pop-black">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <MobileBar />
        <Toaster position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
