export const POPFIX = {
  name: "POP'FIX",
  tagline: "Réparation électronique — Saint-François, Guadeloupe",
  phone: "+590 590 55 55 61",
  phoneHref: "tel:+590590555561",
  instagram: "https://www.instagram.com/pop.fix971",
  instagramHandle: "@pop.fix971",
  address: {
    line1: "Les Comptoirs de Saint-François",
    line2: "2 lot RDC, rue de la République",
    city: "97118 Saint-François",
    region: "Guadeloupe",
    full: "Les Comptoirs de Saint-François, 2 lot RDC, rue de la République, 97118 Saint-François, Guadeloupe",
  },
  maps: "https://www.google.com/maps/dir/?api=1&destination=Les+Comptoirs+de+Saint-Fran%C3%A7ois%2C+rue+de+la+R%C3%A9publique%2C+97118+Saint-Fran%C3%A7ois%2C+Guadeloupe",
  rating: { score: "4,9/5", count: 18 },
  hours: [
    { day: "Lundi — Vendredi", time: "9h30 — 13h / 14h — 17h" },
    { day: "Samedi", time: "9h30 — 14h" },
    { day: "Dimanche", time: "Fermé" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/reparations", label: "Réparations" },
  { to: "/gaming", label: "Gaming" },
  { to: "/accessoires", label: "Accessoires" },
  { to: "/conseils", label: "Conseils" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;
