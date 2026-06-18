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
  { value: "25", label: "Jahre Berufserfahrung" },
  { value: "250", label: "begleitete Projekte" },
  { value: "150", label: "Kunden und Auftraggeber" },
  { value: "7", label: "Länder Projekterfahrung" },
];

export const coreServices: ServiceItem[] = [
  {
    title: "Strategie & Wachstum",
    description:
      "Positionierung, Strategie und Wachstumslogik für Unternehmen, die neue Märkte, Zielgruppen, Produkte oder Entwicklungsschritte fundiert angehen wollen.",
    href: "/leistungen",
    points: ["Positionierung", "Strategieentwicklung", "Wachstumsfelder"],
  },
  {
    title: "Kampagnen & Marktansprache",
    description:
      "Marketing- und Kommunikationsmaßnahmen werden an die Realität digitaler Märkte angepasst und entlang klarer Ziele ausgerichtet.",
    href: "/leistungen",
    points: ["Kampagnen", "Digitale Kommunikation", "Content & Reichweite"],
  },
  {
    title: "Vertrieb",
    description:
      "Vertriebsstruktur, Verkaufsaktivitäten und Marktbearbeitung werden so aufgesetzt, dass sie effizienter, klarer und skalierbarer werden.",
    href: "/leistungen",
    points: ["Vertriebsstruktur", "Verkaufsaktivitäten", "Optimierung im Alltag"],
  },
  {
    title: "Online Marketing & E-Commerce",
    description:
      "Website, Content Marketing, Social Media und E-Commerce werden aus unternehmerischer Perspektive betrachtet und weiterentwickelt.",
    href: "/leistungen",
    points: ["Website", "Social Media", "E-Commerce"],
  },
  {
    title: "Digitalisierung & AI",
    description:
      "Digitale Transformation und KI werden nicht als Selbstzweck verstanden, sondern als Hebel für bessere Prozesse, Kommunikation und Wachstum.",
    href: "/digitalisierung",
    points: ["Digitale Transformation", "AI Consulting", "Umsetzungsbegleitung"],
  },
  {
    title: "Ausschreibungen, Startups & Internationales",
    description:
      "Von Lieferantenauswahl über Investor-Pitches bis zum Markteintritt in ausgewählte Länder: Projekte werden strukturiert vorbereitet und begleitet.",
    href: "/leistungen",
    points: ["Ausschreibungen", "Startup-Beratung", "Markteintritt"],
  },
];

export const expertiseAreas = [
  "Unternehmensberatung aus Wien mit Fokus auf Digitalisierung, Marketing und Vertrieb",
  "Wachstum durch Strategie, Marktarbeit und umsetzbare Konzepte",
  "Arbeit direkt mit Eigentümer:innen, Geschäftsführung und Entscheidern",
  "National und international tätig, mit Projekterfahrung in 7 Ländern",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Für welche Unternehmen ist POSITIVconsult die richtige Beratung?",
    answer:
      "Die Altwebsite nennt nationale und internationale Konzerne ebenso wie Startups sowie kleine und mittlere Unternehmen in Österreich und im Ausland. Die Beratung richtet sich vor allem an Eigentümer:innen und Geschäftsführung.",
  },
  {
    question: "Welche Themen stehen typischerweise am Anfang eines Projekts?",
    answer:
      "Typische Themen sind Positionierung, Strategie, neue Märkte und Zielgruppen, Produkteinführungen, Vertriebsstruktur, digitale Kommunikation, E-Commerce oder die Prüfung von Fördermöglichkeiten.",
  },
  {
    question: "Wie arbeitet POSITIVconsult?",
    answer:
      "Laut bestehender Website werden Konzepte gemeinsam entwickelt und auf Wunsch auch umgesetzt. Das Beratungsverständnis verbindet Analyse, Strategie und operative Begleitung.",
  },
  {
    question: "Kann Förderberatung mit Digitalisierungs- oder AI-Projekten verbunden werden?",
    answer:
      "Ja. Die bestehende Website nennt Förderberatung seit 2017 sowie Beraterpool-Zugehörigkeiten bei WKW, WK Niederösterreich und KMU.DIGITAL. Fördermöglichkeiten müssen jedoch stets projektbezogen geprüft werden.",
  },
];

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export const testimonials = [
  {
    title: "Mehrere hundert begleitete Projekte",
    text: "Die bestehende Website spricht von mehreren hundert Projekten sowie von 250 Projekten als Kennzahl. Diese Erfahrung bildet die Basis für strategische und operative Beratung.",
  },
  {
    title: "Erfahrung im digitalen Umfeld",
    text: "Die Altwebsite nennt 25 Jahre Berufserfahrung im digitalen Umfeld und betont laufendes Trendscouting in digitaler Kommunikation und E-Commerce.",
  },
  {
    title: "Zusammenarbeit direkt mit Entscheidern",
    text: "POSITIVconsult arbeitet laut bestehender Website meistens direkt für Eigentümer oder Geschäftsführung und begleitet Kunden häufig über mehrere Jahre.",
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
  "Dr. Heidrun Unterweger und Mag. Marc Isop werden auf der Altwebsite als Teil des Beraterpools der Wirtschaftskammer Wien genannt.",
  "Dr. Heidrun Unterweger wird dort als incite zertifizierte Digital Consultant (CDC) sowie eCommerce & Social Media Consultant im KMU.DIGITAL-Umfeld genannt.",
  "Dr. Heidrun Unterweger wird außerdem als Teil des Beraterpools der Wirtschaftskammer Niederösterreich angeführt.",
];

export const teamContacts = [
  {
    name: "Dr. Heidrun Unterweger",
    phone: contactPhone,
    email: contactEmail,
  },
  {
    name: "Mag. Marc Isop",
    phone: secondaryContactPhone,
    email: secondaryContactEmail,
  },
];

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

export const sourceNotes = {
  website:
    "Öffentlich auslesbare Inhalte von www.positiv-consult.at, Hauptseite sowie Impressum und Datenschutz, abgerufen am 18.06.2026.",
  privacy:
    "Die bestehende Datenschutzerklärung wirkt generatorbasiert und enthält allgemeine Standardbausteine. Vor Livegang der neuen Website ist eine rechtliche und technische Prüfung erforderlich.",
};
