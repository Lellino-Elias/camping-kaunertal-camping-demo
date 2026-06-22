import type { CampsiteConfig } from "../types";

/**
 * Camping Kaunertal — beschaulicher Sommer-Campingplatz (45 Plätze) am Waldrand,
 * gehört zum 4-Sterne-Hotel Weisseespitze (Fam. Paul Hafele), 6524 Kaunertal/Tirol.
 * Alle Inhalte aus der eigenen Quelle (raw/digest/pages/01.md + contact.json).
 * Quelle nennt KEINEN See → kein `see`. Preise real aus 01.md ("Preise 2026").
 * Nur 2 echte Camping-Fotos (Hero-Wiese + Luftbild) → beide prominent; übrige Bilder
 * sind Hotel/Region derselben Lead-Seite, ehrlich als "im Hotel"/Region gerahmt.
 */
const IMG = "/campsites/camping-kaunertal";

const campingKaunertal: CampsiteConfig = {
  name: "Camping Kaunertal",
  shortName: "Kaunertal",
  slug: "camping-kaunertal",
  ort: "Kaunertal",
  region: "Tirol",
  brandKind: "Camping",
  regionLong: "Kaunertal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Beschaulich campen mitten im Kaunertal",
  claimEmphasis: "mitten im Kaunertal",
  emailDetail: "euer 4-Sterne-Hotel direkt neben dem Campingplatz",
  intro:
    "Ebene Rasenstellplätze zwischen unverbauten Wiesen und dem Waldrand, ein großer Spielplatz für die Kinder und das 4-Sterne-Hotel mit Küche und Wellness gleich nebenan — ankommen, durchatmen, bleiben.",

  statement: {
    text: "Nur 45 Plätze auf der Wiese — und ein 4-Sterne-Hotel gleich nebenan.",
    emphasis: "gleich nebenan",
  },

  pillars: [
    {
      title: "Im Naturpark Kaunergrat",
      text: "Wander- und Radwege starten direkt am Platz, ringsum nur Wiesen, Wald und stille Berge.",
      image: { src: `${IMG}/gallery-f492344f54.webp`, alt: "Weg durchs Kaunertal mit Blick auf Wald und Berge" },
    },
    {
      title: "Auf zum Kaunertaler Gletscher",
      text: "Die Kaunertaler Gletscherstraße und der Gletscher sind nur eine kurze Talfahrt entfernt.",
      image: { src: `${IMG}/gallery-5f025d7f0d.webp`, alt: "Panoramastraße durchs Kaunertal Richtung Gletscher" },
    },
    {
      title: "Genuss im Hotel nebenan",
      text: "Mit der Genießerpauschale stehen dir die Küche und der Wellnessbereich des Hotels offen.",
      image: { src: `${IMG}/hero-2cc9687e8d.webp`, alt: "Genuss bei einem Glas Sekt im Hotel Weisseespitze" },
    },
  ],

  usps: [
    "45 Plätze auf der Wiese",
    "Strom inklusive",
    "Großer Kinderspielplatz",
    "Hunde willkommen",
    "Frühstück im Hotel",
    "Wellness zubuchbar",
  ],

  trust: {
    heading: "Klein, ruhig und mittendrin in den Bergen",
    headingEmphasis: "mittendrin in den Bergen",
    intro:
      "Nur 45 Plätze, kein Trubel: ein beschaulicher Campingplatz am Waldrand, der zum Hotel Weisseespitze gehört — mit dessen Frühstück, Küche und Wellness direkt im Rücken.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-82f663bef6.webp`, alt: "Campingplatz Kaunertal auf der Sommerwiese — Stellplätze zwischen Waldrand und Tiroler Bergpanorama" },
  },

  camping: {
    heading: "Mehr als nur ein Stellplatz",
    intro:
      "45 ebene Rasenstellplätze am Waldrand — und das 4-Sterne-Hotel Weisseespitze gleich nebenan, dessen Frühstück, Küche und Wellness dir als Campinggast offenstehen.",
    features: [
      {
        title: "Stellplätze auf der Wiese",
        text: "45 ebene Rasenstellplätze liegen ruhig zwischen unverbauten Wiesen und dem Waldrand — Strom ist inklusive.",
        image: { src: `${IMG}/gallery-9b55bfa2fd.webp`, alt: "Sommer auf dem Campinggelände beim Hotel Weisseespitze — unverbaute Wiesen und Waldrand vor dem Bergpanorama" },
      },
      {
        title: "Frühstück & Abendessen im Hotel",
        text: "Frühstücksbuffet und ein 4-Gang-Wahlmenü am Abend sind im Hotel auf Anfrage zubuchbar.",
        image: { src: `${IMG}/gallery-4aecd3c87f.webp`, alt: "Frühstück in der Stube des Hotels Weisseespitze" },
      },
      {
        title: "Wellnessbereich im Hotel",
        text: "Den Wellness- und Badebereich des Hotels kannst du als Campinggast bequem dazubuchen.",
        image: { src: `${IMG}/activity-646f351ab3.webp`, alt: "Außenpool mit Bergblick im Hotel Weisseespitze" },
      },
    ],
  },

  breather: {
    image: { src: `${IMG}/hero-a6e13eb3ce.webp`, alt: "Ausblick vom Balkon des Hotel Weisseespitze auf Wald und Wiesen im Kaunertal" },
    line: "Ringsum nur Wiesen, Wald und Berge.",
  },

  anreise: {
    heading: "Anfahrt durchs Kaunertal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Inntalautobahn A12 bis Landeck, dann auf der Kaunertalstraße taleinwärts bis zur Adresse Platz 30 beim Hotel Weisseespitze.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Landeck-Zams an der Arlbergbahn, von dort weiter mit dem Postbus ins Kaunertal.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Innsbruck liegt rund eine Autostunde entfernt — ein Mietwagen empfiehlt sich.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke aus dem Kaunertal",
    headingEmphasis: "Kaunertal",
    intro: "Wiese, Wald und Bergluft rund um den Platz.",
    tag: "Mai bis Oktober",
    images: [],
  },

  booking: {
    heading: "Stell dein Vorzelt ins Kaunertal",
    headingEmphasis: "ins Kaunertal",
    intro:
      "Der Platz wird nur auf schriftliche Reservierung vergeben — sag uns Zeitraum und Personenzahl, wir bestätigen dir deinen Stellplatz persönlich.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreis für 2 Erwachsene: Stellplatz € 14 (Nebensaison) bzw. € 16 (Hauptsaison 26.07.–23.08.) plus € 12,10 je Erwachsener — zzgl. Ortstaxe € 3,50 p. P./Tag, Kind 4–14 € 7,50, Strom inklusive.",
    highlight: {
      title: "Strom inklusive",
      text: "Der Stromanschluss ist auf dem ganzen Platz schon im Preis enthalten.",
    },
    categories: [
      { id: "stellplatz-neben", label: "Stellplatz Nebensaison", perNight: 38, perExtraGuest: 12 },
      { id: "stellplatz-haupt", label: "Stellplatz Hauptsaison", perNight: 40, perExtraGuest: 12 },
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
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Hotel & Wellness", href: "#camping" },
      ],
    },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default campingKaunertal;
