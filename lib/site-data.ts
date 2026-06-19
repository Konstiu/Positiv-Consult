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

export const companyName = "POSITIVconsult";
export const siteUrl = "https://www.positiv-consult.at";
export const contactEmail = "h.unterweger@positiv-consult.at";
export const secondaryContactEmail = "m.isop@positiv-consult.at";
export const contactPhone = "+43 676 941 44 27";
export const secondaryContactPhone = "+43 676 941 31 44";
export const addressLines = ["Mariahilfer Straße 101", "1060 Wien", "Österreich"];

export const navItems: NavItem[] = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ai-consulting", label: "AI Consulting" },
  { href: "/digitalisierung", label: "Digitalisierung" },
  { href: "/foerderungen", label: "Förderungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kunden-erfahrung", label: "Kunden / Erfahrung" },
  { href: "/kontakt", label: "Kontakt" },
];

export const stats: StatItem[] = [
  { value: "25+", label: "Jahre Berufserfahrung" },
  { value: "250+", label: "Projekte" },
  { value: "150+", label: "Kunden" },
  { value: "7", label: "Länder" },
];

export const coreServices: ServiceItem[] = [
  {
    title: "Strategie & Wachstum",
    description:
      "Wir schärfen Positionierung, Zielgruppen, Marktchancen und Wachstumslogik — als Grundlage für bessere Entscheidungen.",
    href: "/leistungen",
    points: ["Positionierung", "Zielgruppen", "Wachstumslogik"],
  },
  {
    title: "Marketing & Kampagnen",
    description:
      "Wir entwickeln Kommunikations- und Kampagnenansätze, die zur Zielgruppe, zum Markt und zu digitalen Kanälen passen.",
    href: "/leistungen",
    points: ["Kommunikation", "Kampagnen", "Digitale Kanäle"],
  },
  {
    title: "Vertrieb & Marktbearbeitung",
    description:
      "Wir unterstützen beim Aufbau effizienter Vertriebsstrukturen und bei der Optimierung laufender Verkaufsaktivitäten.",
    href: "/leistungen",
    points: ["Vertriebsstruktur", "Marktbearbeitung", "Verkaufsaktivitäten"],
  },
  {
    title: "Digitalisierung & E-Commerce",
    description:
      "Wir helfen, digitale Prozesse, Online-Marketing, Websites und E-Commerce strategisch sinnvoll weiterzuentwickeln.",
    href: "/leistungen",
    points: ["Digitale Prozesse", "Websites", "E-Commerce"],
  },
  {
    title: "AI Consulting",
    description:
      "Wir identifizieren sinnvolle KI-Anwendungsfälle, priorisieren Use Cases und begleiten Pilotierung und Einführung mit klarem Business-Fokus.",
    href: "/ai-consulting",
    points: ["Use Cases", "Pilotierung", "Einführung"],
  },
  {
    title: "Förderberatung",
    description:
      "Wir prüfen, ob Fördermöglichkeiten zu Strategie-, Digitalisierungs- oder Innovationsvorhaben passen.",
    href: "/foerderungen",
    points: ["Einordnung", "Passung", "Projektbezug"],
  },
];

export const expertiseAreas = [
  "Unternehmensberatung aus Wien mit zwei erfahrenen Ansprechpartner:innen",
  "Strategie, Marketing, Vertrieb und digitale Transformation aus einer Hand",
  "Direkte Zusammenarbeit mit Eigentümer:innen, Geschäftsführung und Entscheidungsteams",
  "Persönlich, pragmatisch und mit Blick auf messbare Wirkung",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Für welche Unternehmen ist POSITIVconsult die richtige Beratung?",
    answer:
      "POSITIVconsult arbeitet mit EPU, KMU und etablierten Unternehmen. Besonders wertvoll ist die Zusammenarbeit dort, wo Eigentümer:innen, Geschäftsführung oder Entscheidungsteams Klarheit, Struktur und Umsetzungsstärke brauchen.",
  },
  {
    question: "Welche Themen stehen typischerweise am Anfang eines Projekts?",
    answer:
      "Typische Themen sind Positionierung, Strategie, neue Märkte und Zielgruppen, Produkteinführungen, Vertriebsstruktur, digitale Kommunikation, E-Commerce oder die Prüfung von Fördermöglichkeiten.",
  },
  {
    question: "Wie arbeitet POSITIVconsult?",
    answer:
      "Die Zusammenarbeit verbindet Analyse, strategische Klarheit und konkrete Umsetzung. Ziel ist nicht mehr Komplexität, sondern bessere Entscheidungen und spürbare Fortschritte im Alltag.",
  },
  {
    question: "Kann Förderberatung mit Digitalisierungs- oder AI-Projekten verbunden werden?",
    answer:
      "Ja. Förderthemen können sinnvoll sein, wenn sie zu einem realen Vorhaben passen. Entscheidend ist immer die inhaltliche Passung zum Projekt und nicht die Förderung als Selbstzweck.",
  },
];

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export const testimonials = [
  {
    title: "Langjährige Projekterfahrung",
    text: "Seit vielen Jahren begleitet POSITIVconsult Unternehmen in Strategie, Marktbearbeitung, Digitalisierung und Wachstum.",
  },
  {
    title: "Digitale Kompetenz mit Business-Fokus",
    text: "Digitalisierung, E-Commerce und AI Consulting werden aus unternehmerischer Sicht gedacht und in realistische Umsetzung übersetzt.",
  },
  {
    title: "Direkte Zusammenarbeit mit Entscheidern",
    text: "Die Beratung erfolgt persönlich, direkt und mit kurzen Wegen zwischen Analyse, Entscheidung und Umsetzung.",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Ausgangslage präzisieren",
    text: "Geschäftsmodell, Markt, Organisation und prioritäre Hebel werden auf Entscheidungsreife gebracht.",
  },
  {
    step: "02",
    title: "Strategie übersetzen",
    text: "Ziele werden in Maßnahmen, Verantwortlichkeiten und realistische Umsetzungslogik überführt.",
  },
  {
    step: "03",
    title: "Wirksam umsetzen",
    text: "Begleitung erfolgt dort, wo Wirkung entsteht: in Entscheidungen, Prozessen, Marktbearbeitung und digitaler Praxis.",
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
  { year: "2024", title: "AI Consulting als eigener Schwerpunkt" },
];

export const fundingFacts = [
  "Beraterpool der Wirtschaftskammer Wien",
  "incite zertifizierte Digital Consultant (CDC) sowie eCommerce & Social Media Consultant im KMU.DIGITAL-Umfeld",
  "Beraterpool der Wirtschaftskammer Niederösterreich",
];

export const teamContacts = [
  {
    name: "Dr. Heidrun Unterweger",
    role: "POSITIVconsult",
    phone: contactPhone,
    email: contactEmail,
    photoUrl: "/team/heidrun-unterweger.png",
  },
  {
    name: "Mag. Marc Isop",
    role: "POSITIVconsult",
    phone: secondaryContactPhone,
    email: secondaryContactEmail,
    photoUrl: "/team/marc-isop.png",
  },
] as TeamContact[];

export const clientCategories: ClientCategory[] = [
  {
    category: "Handel",
    names: ["BIPA", "Dorotheum", "Morawa", "Lobmeyr", "Depot", "Bikestore"],
  },
  {
    category: "Dienstleister",
    names: ["ArtforArt", "Onlim GmbH", "SOL4 IT-Consulting GmbH", "Wallner & Partner", "Klimabündnis Oberösterreich"],
  },
  {
    category: "Bildung & Institutionen",
    names: ["Medizinische Universität Wien", "KMU Akademie und Management AG", "WKO", "WIFI Wien", "WK Wien"],
  },
  {
    category: "Gastronomie",
    names: ["Mochi GmbH", "Cafe Burggasse 24", "Cafe Kriemhild", "Restaurant Zsom"],
  },
];
