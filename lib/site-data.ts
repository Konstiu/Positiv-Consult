export type NavItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  points: string[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  year: string;
  title: string;
};

export type ClientCategory = {
  category: string;
  names: string[];
};

export type TeamContact = {
  name: string;
  role: string;
  email: string;
  phone: string;
  photoUrl?: string;
};

export type TrustItem = {
  title: string;
  text: string;
};

export type ProofTeaser = {
  title: string;
  text: string;
};

export type OfferModule = {
  title: string;
  text: string;
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (basePath
    ? `https://konstiu.github.io${basePath}`
    : "https://positiv-consult.unterweger.tech");

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function toAbsoluteSiteUrl(path: string) {
  const normalizedPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function toAbsoluteAssetUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const companyName = "POSITIVconsult";
export const contactEmail = "h.unterweger@positiv-consult.at";
export const secondaryContactEmail = "m.isop@positiv-consult.at";
export const contactPhone = "+43 676 941 44 27";
export const secondaryContactPhone = "+43 676 941 31 44";
export const addressLines = ["Mariahilfer Straße 101", "1060 Wien", "Österreich"];
export const toTelHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

export const navItems: NavItem[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/digitalisierung", label: "KI & Digitalisierung" },
  { href: "/foerderungen", label: "Förderungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kunden-erfahrung", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
];

export const stats: StatItem[] = [
  { value: "30+", label: "Jahre Berufserfahrung" },
  { value: "250+", label: "Projekte" },
  { value: "150+", label: "Kunden" },
  { value: "7", label: "Länder" },
];

export const coreServices: ServiceItem[] = [
  {
    title: "Strategie & Wachstum",
    description:
      "Wir unterstützen Geschäftsführungen dabei, Marktchancen, Zielgruppen, Angebote und Ressourcen realistisch einzuordnen und daraus belastbare Prioritäten für Wachstum, Vertrieb und Investitionen abzuleiten.",
    href: "/leistungen",
    points: ["Positionierung", "Zielgruppen", "Prioritäten"],
  },
  {
    title: "Marketing & Kampagnen",
    description:
      "Wir entwickeln strategisch fundierte Kommunikations- und Kampagnenansätze, die zur Zielgruppe, zum Marktumfeld und zu relevanten digitalen Kanälen passen.",
    href: "/leistungen",
    points: ["Kommunikationsstrategie", "Kampagnen-Setup", "Digitale Kanäle"],
  },
  {
    title: "Vertrieb & Marktbearbeitung",
    description:
      "Wir analysieren Vertriebsprozesse, Rollen und Marktbearbeitung und schaffen eine Struktur, mit der Teams Chancen konsequenter verfolgen und Aktivitäten nachvollziehbar steuern können.",
    href: "/leistungen",
    points: ["Vertriebsstruktur", "Marktbearbeitung", "Verkaufsaktivitäten"],
  },
  {
    title: "Digitalisierung & E-Commerce",
    description:
      "Wir analysieren bestehende Prozesse, Websites und E-Commerce-Strukturen, identifizieren Engpässe und priorisieren Maßnahmen nach Aufwand, Wirkung und Umsetzbarkeit.",
    href: "/leistungen",
    points: ["Prozessanalyse", "Website & E-Commerce", "Systemprioritäten"],
  },
  {
    title: "KI-Beratung",
    description:
      "Wir finden KI-Anwendungsfälle, die tatsächlich Zeit sparen, Qualität erhöhen oder Entscheidungen verbessern, und testen sie in klar abgegrenzten Pilotprojekten.",
    href: "/ai-consulting",
    points: ["Potenzialanalyse", "Use Cases", "Pilotprojekte"],
  },
  {
    title: "Förderberatung",
    description:
      "Wir unterstützen bei der Einordnung von Förderfähigkeit, Projektlogik und nächsten Schritten, wenn ein Vorhaben mit Digitalisierung, Innovation oder Wachstum verbunden ist.",
    href: "/foerderungen",
    points: ["Förderfähigkeit", "Projektlogik", "Nächste Schritte"],
  },
];

export const expertiseAreas = [
  "Unternehmensberatung mit zwei erfahrenen Ansprechpartner:innen",
  "Strategie, Marketing, Vertrieb und digitale Transformation aus einer Hand",
  "Direkte Zusammenarbeit mit Eigentümer:innen, Geschäftsführung und Entscheidungsteams",
  "Persönlich, pragmatisch und mit Fokus auf klare Entscheidungsgrundlagen",
];

export const homepageTrustItems: TrustItem[] = [
  {
    title: "Seit 2004",
    text: "Beratungserfahrung in Strategie, Digitalisierung, Vertrieb und Wachstum.",
  },
  {
    title: "250+ Projekte",
    text: "Begleitete Vorhaben in unterschiedlichen Unternehmenssituationen und Branchen.",
  },
  {
    title: "150+ Kunden",
    text: "Langjährige Zusammenarbeit mit KMU, Eigentümer:innen und Entscheidungsteams.",
  },
  {
    title: "Breite Branchenpraxis",
    text: "Erfahrung mit KMU, Handel, Dienstleistung, Bildung, Institutionen, Gastronomie und Start-ups.",
  },
];

export const typicalSituations = [
  "Wir haben viele digitale Baustellen, aber keine klare Priorität.",
  "Wir wollen KI nutzen, wissen aber nicht, welche Use Cases wirklich sinnvoll sind.",
  "Marketing und Vertrieb brauchen mehr Struktur und bessere Entscheidungsgrundlagen.",
  "Wir planen ein Projekt und möchten prüfen, ob eine Förderung möglich ist.",
  "Wir wachsen, aber Strategie, Prozesse und Kommunikation müssen mitziehen.",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Für welche Unternehmen ist POSITIVconsult die richtige Beratung?",
    answer:
      "POSITIVconsult arbeitet mit EPU, KMU und etablierten Unternehmen. Besonders wertvoll ist die Zusammenarbeit dort, wo Eigentümer:innen, Geschäftsführung oder Entscheidungsteams priorisierte Maßnahmen, klare Entscheidungsgrundlagen und einen konkreten nächsten Umsetzungsschritt brauchen.",
  },
  {
    question: "Welche Themen stehen typischerweise am Anfang eines Projekts?",
    answer:
      "Typische Themen sind Positionierung, Strategie, neue Märkte und Zielgruppen, Produkteinführungen, Vertriebsstruktur, digitale Kommunikation, E-Commerce oder die Einordnung von Fördermöglichkeiten.",
  },
  {
    question: "Wie arbeitet POSITIVconsult?",
    answer:
      "Die Zusammenarbeit verbindet Analyse, Priorisierung und konkrete Umsetzung. Ziel sind klare Entscheidungsgrundlagen, abgestimmte Maßnahmen und Fortschritte, die operativ anschlussfähig bleiben.",
  },
  {
    question: "Kann Förderberatung mit Digitalisierungs- oder KI-Projekten verbunden werden?",
    answer:
      "Ja. Förderthemen können sinnvoll sein, wenn sie zu einem realen Vorhaben passen. Entscheidend ist immer der fachliche Projektbezug und nicht die Förderung als Selbstzweck.",
  },
];

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export const testimonials = [
  {
    title: "Strategie & Wachstum",
    text: "Strukturierung von Marktchancen, Zielgruppen, Angeboten und internen Ressourcen.",
  },
  {
    title: "E-Commerce & Handel",
    text: "Priorisierung digitaler Maßnahmen für Sortiment, Website, Vertrieb und Kundenerlebnis.",
  },
  {
    title: "Förderberatung",
    text: "Einordnung von Förderfähigkeit, Projektlogik und nächsten Schritten vor Antragstellung.",
  },
];

export const proofTeasers: ProofTeaser[] = [
  {
    title: "E-Commerce & Handel",
    text: "Priorisierung digitaler Maßnahmen für Sortiment, Website, Vertrieb und Kundenerlebnis.",
  },
  {
    title: "Förderberatung",
    text: "Einordnung von Förderfähigkeit, Projektlogik und nächsten Schritten vor Antragstellung.",
  },
  {
    title: "KI in Marketing & Vertrieb",
    text: "Auswahl sinnvoller Use Cases, Pilotierung und Einführung mit realistischem Aufwand.",
  },
  {
    title: "Strategie & Wachstum",
    text: "Strukturierung von Marktchancen, Zielgruppen, Angeboten und internen Ressourcen.",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Ausgangslage präzisieren",
    text: "Geschäftsmodell, Markt, Organisation und prioritäre Hebel werden so verdichtet, dass klare Entscheidungsgrundlagen entstehen.",
  },
  {
    step: "02",
    title: "Strategie übersetzen",
    text: "Ziele werden in priorisierte Maßnahmen, Verantwortlichkeiten und eine realistische Umsetzungslogik überführt.",
  },
  {
    step: "03",
    title: "Konkrete nächste Schritte",
    text: "Begleitung erfolgt dort, wo Entscheidungen in strukturierte Vertriebsprozesse, Kampagnenlogik, Roadmaps oder Pilotvorhaben übergehen.",
  },
];

export const companyStory: TimelineItem[] = [
  { year: "2004", title: "Gründung POSITIVconsult Unternehmensberatung" },
  { year: "2008", title: "Gründung POSITIVconsult Werbeagentur" },
  { year: "2009", title: "Erweiterung um E-Commerce Consulting" },
  { year: "2014", title: "Erweiterung um Digital Consulting" },
  { year: "2017", title: "Förderberatung für EPU und KMU" },
  { year: "2019", title: "Vorträge zu digitaler Kommunikation und KI" },
  { year: "2021", title: "Advisor im Doctor of Business Administration Umfeld" },
  { year: "2024", title: "KI-Beratung als eigener Schwerpunkt" },
];

export const fundingFacts = [
  "Beraterpool der Wirtschaftskammer Wien",
  "incite zertifizierte Digital Consultant (CDC) sowie eCommerce & Social Media Consultant im KMU.DIGITAL-Umfeld",
  "Beraterpool der Wirtschaftskammer Niederösterreich",
];

export const aiOfferModules: OfferModule[] = [
  {
    title: "KI-Potenzialanalyse",
    text: "Wir prüfen, wo KI im Unternehmen Zeit sparen, Qualität erhöhen oder Entscheidungsprozesse verbessern kann.",
  },
  {
    title: "Use-Case-Workshop",
    text: "Mögliche Einsatzfelder werden gemeinsam mit Fachbereichen, Geschäftsführung und Verantwortlichen konkretisiert.",
  },
  {
    title: "Priorisierung",
    text: "Use Cases werden nach Aufwand, Nutzen, Risiko und organisatorischer Passung bewertet.",
  },
  {
    title: "Pilotprojekt-Konzept",
    text: "Für ausgewählte Themen definieren wir einen klar abgegrenzten Test mit Zielbild, Rollen und Erfolgskriterien.",
  },
  {
    title: "Einführung in Teams & Prozesse",
    text: "Damit KI nicht isoliert bleibt, begleiten wir die Verankerung in Abläufen, Verantwortlichkeiten und Zusammenarbeit.",
  },
];

export const digitalOfferModules: OfferModule[] = [
  {
    title: "Prozessanalyse",
    text: "Wir prüfen, wo historisch gewachsene Abläufe Reibung erzeugen und welche Arbeitsschritte digital sauber unterstützt werden können.",
  },
  {
    title: "Website- & E-Commerce-Einordnung",
    text: "Websites, Shops und digitale Touchpoints werden nach Nutzen, Engpässen und Weiterentwicklungsbedarf bewertet.",
  },
  {
    title: "Tool- & Systempriorisierung",
    text: "Wir ordnen bestehende Tools, Schnittstellen und Datenflüsse und priorisieren, was zuerst gelöst werden sollte.",
  },
  {
    title: "Maßnahmenplan",
    text: "Sie erhalten einen nachvollziehbaren Maßnahmenplan mit sinnvollen Etappen statt einer überladenen Wunschliste.",
  },
  {
    title: "Umsetzungsbegleitung",
    text: "Bei Bedarf begleiten wir die nächsten Schritte in Richtung Einführung, Abstimmung mit Partnern oder operativer Umsetzung.",
  },
];

export const teamContacts = [
  {
    name: "Dr. Heidrun Unterweger",
    role: "POSITIVconsult",
    phone: contactPhone,
    email: contactEmail,
    photoUrl: withBasePath("/team/heidrun-unterweger.png"),
  },
  {
    name: "Mag. Marc Isop",
    role: "POSITIVconsult",
    phone: secondaryContactPhone,
    email: secondaryContactEmail,
    photoUrl: withBasePath("/team/marc-isop.png"),
  },
] as TeamContact[];

export const clientCategories: ClientCategory[] = [
  {
    category: "Handel & E-Commerce",
    names: [
      "B-Dressed",
      "BIPA",
      "Bikestore",
      "Burggasse 24",
      "Depot",
      "Dorotheum",
      "Gissinger",
      "Herbanima",
      "Intersport Alpensport",
      "Lobmeyr",
      "Morawa",
      "Weingut Polz",
    ],
  },
  {
    category: "Dienstleistung & KMU",
    names: [
      "ArtforArt",
      "Kager Knapp Hausverwaltung",
      "Klimabündnis Oberösterreich",
      "Onlim GmbH",
      "SOL4 IT-Consulting GmbH",
      "smec smarter-ecommerce",
      "Oceanum Salzgrotte",
      "Wallner & Partner",
      "Wine & Partners",
    ],
  },
  {
    category: "Bildung & Institutionen",
    names: [
      "KMU Akademie und Management AG",
      "Medizinische Universität Wien",
      "New Design University",
      "WIFI Wien",
      "Wirtschaftskammer Wien",
      "Wirtschaftskammer Niederösterreich",
      "WKO",
      "WK Wien",
    ],
  },
  {
    category: "Gastronomie & Lifestyle",
    names: [
      "Bellaria",
      "Cafe Burggasse 24",
      "Cafe Kriemhild",
      "Mochi GmbH",
      "Restaurant Zsom",
    ],
  },
  {
    category: "Öffentliche & wirtschaftsnahe Organisationen",
    names: [
      "Klimabündnis Oberösterreich",
      "KMU Digital",
      "Wirtschaftskammer Wien",
      "Wirtschaftskammer Niederösterreich",
      "WKO",
    ],
  },
];
