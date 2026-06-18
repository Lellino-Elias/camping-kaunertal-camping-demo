import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-kaunertal";

const campingKaunertal: CampsiteConfig = {
  name: "Camping Kaunertal",
  shortName: "Kaunertal",
  slug: "camping-kaunertal",
  ort: "Kaunertal",
  region: "Tirol",
  brandKind: "Sommer-Camping",
  regionLong: "Kaunertal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Ruhig campen zwischen Wiesen und Waldrand",
  claimEmphasis: "Wiesen und Waldrand",
  emailDetail: "euer kleiner Campingplatz gleich neben dem 4-Sterne-Hotel",
  intro:
    "Hier campst du beschaulich zwischen unverbauten Wiesen und Waldrand: 45 Stellplätze auf Rasenboden für Familien, Paare und Individualisten — und das 4-Sterne-Hotel Weisseespitze liegt gleich nebenan.",

  statement: {
    text: "Hier hört der Trubel auf und der Wald beginnt gleich hinter dem Vorzelt.",
    emphasis: "gleich hinter dem Vorzelt",
  },

  pillars: [
    {
      title: "Ankommen und durchatmen",
      text: "Ruhig zwischen unverbauten Wiesen und Waldrand — ein Platz für Familien, Paare und Individualisten.",
      image: { src: `${IMG}/gallery-9b55bfa2fd.webp`, alt: "Gäste genießen die Bergkulisse am Camping Kaunertal" },
    },
    {
      title: "Wandern & Radeln ab Platz",
      text: "Wege und Touren beginnen direkt am Platz, E-Bikes gibt es an der Rezeption des Hotels nebenan.",
      image: { src: `${IMG}/gallery-f492344f54.webp`, alt: "Weg durchs Kaunertal mit Blick auf das Hotel Weisseespitze" },
    },
    {
      title: "Mitten im Kaunertal",
      text: "Rundherum die Tiroler Bergwelt — Kaunertaler Gletscher und Naturpark Kaunergrat liegen vor der Tür.",
      image: { src: `${IMG}/gallery-5f025d7f0d.webp`, alt: "Talstraße durchs Kaunertal vor der Tiroler Bergkulisse" },
    },
  ],

  usps: [
    "45 Stellplätze auf Rasen",
    "Strom inklusive",
    "Großer Kinderspielplatz",
    "Haustiere erlaubt",
    "4-Sterne-Hotel nebenan",
    "Hotelküche zubuchbar",
  ],

  trust: {
    heading: "Klein, ruhig und gut umsorgt",
    headingEmphasis: "gut umsorgt",
    intro:
      "Der Platz gehört zum 4-Sterne-Hotel Weisseespitze der Familie Hafele: schlicht ausgestattet am Stellplatz, mit Hotelküche und Wellness eine Tür weiter, wann immer du magst.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-82f663bef6.webp`, alt: "Stellplätze des Camping Kaunertal in den Wiesen vor den Bergen" },
  },

  breather: {
    image: { src: `${IMG}/hero-a6e13eb3ce.webp`, alt: "Blick über Wiesen und Wald im Kaunertal" },
    line: "Hier endet der Tag zwischen Wald und Bergen.",
  },

  camping: {
    heading: "Schlicht am Platz, verwöhnt im Hotel",
    intro:
      "Die Ausstattung am Campingplatz ist bewusst einfach — alles Weitere findest du im 4-Sterne-Hotel gleich nebenan.",
    features: [
      {
        title: "45 Stellplätze auf Rasenboden",
        text: "Ebene Stellplätze auf Rasen mit internationalen Stromanschlüssen — der Strom ist im Stellplatzpreis inklusive.",
        image: { src: `${IMG}/gallery-96d63d6cde.webp`, alt: "Luftbild der Stellplätze des Camping Kaunertal neben dem Hotel" },
      },
      {
        title: "Hotelküche zum Zubuchen",
        text: "Auf Wunsch ein Frühstücksbuffet am Morgen und ein Abendmenü im Hotel — ganz ohne selbst zu kochen.",
        image: { src: `${IMG}/gallery-4aecd3c87f.webp`, alt: "Frühstück mit Bergblick im Hotel Weisseespitze" },
      },
      {
        title: "Genießerpauschale",
        text: "Als Paket auf Anfrage: Frühstück, ein Menü am Abend und der Wellnessbereich des Hotels.",
        image: { src: `${IMG}/hero-2cc9687e8d.webp`, alt: "Genussmoment in der Lounge des Hotels Weisseespitze" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Kaunertal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Inntalautobahn A12 bis Landeck/Prutz, dann ins Kaunertal nach Platz — der Campingplatz liegt direkt beim Hotel Weisseespitze.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Landeck-Zams an der Arlbergbahn; von dort weiter mit Bus oder Transfer ins Kaunertal.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Innsbruck liegt rund eineinhalb Autostunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Sommer im Kaunertal",
    headingEmphasis: "Sommer",
    intro: "Ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Mai bis Oktober",
    images: [],
  },

  booking: {
    heading: "Frag deinen Stellplatz an",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Ein Aufenthalt ist nur mit schriftlicher Reservierung möglich — nenn uns Zeitraum und Personenzahl, das Rezeptionsteam meldet sich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz Nebensaison ab € 14 (Hauptsaison € 16) · zzgl. € 12,10 pro Erwachsenem und € 7,50 pro Kind (4–14 J.) · Ortstaxe € 3,50 ab 15 J. · Strom inklusive",
    highlight: {
      title: "Strom inklusive",
      text: "Auf dem ganzen Platz ist der Stromanschluss im Stellplatzpreis enthalten.",
    },
    categories: [
      { id: "nebensaison", label: "Stellplatz Nebensaison", perNight: 14, perExtraGuest: 12.1 },
      { id: "hauptsaison", label: "Stellplatz Hauptsaison", perNight: 16, perExtraGuest: 12.1 },
    ],
  },

  kontakt: {
    coords: { lat: 47.052905, lng: 10.749788 },
    tel: "+43 5475 316",
    telHref: "tel:+435475316",
    mail: "info@weisseespitze.com",
    facebook: "https://www.facebook.com/weisseespitze/",
    adresse: "Platz 30 · 6524 Kaunertal · Tirol",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Der Platz", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingKaunertal;
