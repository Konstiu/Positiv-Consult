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

export const companyName = "POSITIVconsult";
export const siteUrl = "https://www.positiv-consult.at";
export const contactEmail = "office@positiv-consult.at";
export const contactPhone = "+43 (0)1 / [Platzhalter]";

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
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "250", label: "begleitete Projekte" },
  { value: "150", label: "Kunden und Auftraggeber" },
  { value: "7", label: "Länder Projekterfahrung" },
];

export const coreServices: ServiceItem[] = [
  {
    title: "Strategie & Wachstum",
    description:
      "Klarere Positionierung, bessere Prioritäten und belastbare Entscheidungen für Eigentümer, Geschäftsführung und Führungsteams.",
    href: "/leistungen",
    points: ["Strategieentwicklung", "Wachstumsfelder", "Umsetzungsplanung"],
  },
  {
    title: "Marketing & Vertrieb",
    description:
      "Schärfung von Angebot, Marktansprache und Vertriebsprozessen mit Fokus auf Wirkung, Effizienz und Conversion.",
    href: "/leistungen",
    points: ["Go-to-Market", "Lead-Generierung", "Vertriebsoptimierung"],
  },
  {
    title: "Digitalisierung",
    description:
      "Digitale Prozesse, bessere Datenflüsse und moderne Arbeitsweisen, die nicht nur geplant, sondern im Alltag tragfähig umgesetzt werden.",
    href: "/digitalisierung",
    points: ["Prozessdesign", "Systemlandschaft", "Einführung & Rollout"],
  },
  {
    title: "AI Consulting",
    description:
      "Pragmatischer Einsatz von KI für Effizienz, Entscheidungsqualität und neue digitale Leistungen mit realistischem Business-Fokus.",
    href: "/ai-consulting",
    points: ["Use Cases", "Pilotprojekte", "Governance & Adoption"],
  },
  {
    title: "E-Commerce",
    description:
      "Vom digitalen Geschäftsmodell bis zur operativen Skalierung von Plattformen, Sortimenten und Kundenerlebnissen.",
    href: "/leistungen",
    points: ["Shop-Strategie", "Performance", "Kundenreise"],
  },
  {
    title: "Förderberatung",
    description:
      "Orientierung bei passenden Fördermöglichkeiten für Digitalisierung, Wachstum und Transformationsvorhaben.",
    href: "/foerderungen",
    points: ["Förderfähigkeit", "Einordnung", "Projektvorbereitung"],
  },
];

export const expertiseAreas = [
  "Unternehmensberatung Wien für EPU, KMU und Unternehmen",
  "Beratung an der Schnittstelle von Strategie und Umsetzung",
  "Zusammenarbeit mit Eigentümern, Geschäftsführung und Entscheidern",
  "Fokus auf Wachstum, Transformation und messbare Resultate",
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Für welche Unternehmen ist POSITIVconsult die richtige Beratung?",
    answer:
      "Die Zusammenarbeit ist besonders relevant für EPU, KMU und etablierte Unternehmen, die Wachstum strukturieren, digitale Vorhaben umsetzen oder strategische Entscheidungen fundierter vorbereiten wollen.",
  },
  {
    question: "Welche Themen stehen typischerweise am Anfang eines Projekts?",
    answer:
      "Häufig geht es zunächst um Zielbild, Prioritäten, Marktpositionierung, Vertriebswirksamkeit, Digitalisierungshebel oder die Einordnung konkreter KI- und Förderthemen.",
  },
  {
    question: "Wie arbeitet POSITIVconsult?",
    answer:
      "Der Ansatz ist pragmatisch, strukturiert und umsetzungsnah. Nicht die maximale Anzahl an Folien steht im Vordergrund, sondern Entscheidungen, die real im Unternehmen wirken.",
  },
  {
    question: "Kann Förderberatung mit Digitalisierungs- oder AI-Projekten verbunden werden?",
    answer:
      "Ja. Förderthemen werden dort eingebunden, wo sie sinnvoll zu Transformations-, Innovations- oder Investitionsvorhaben passen und die Umsetzung wirtschaftlich verbessern.",
  },
];

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export const testimonials = [
  {
    title: "Breite Projekterfahrung statt Behauptungen",
    text: "Mehr als 250 Projekte in unterschiedlichen Branchen und Unternehmensgrößen schaffen Substanz für strategische und operative Beratung.",
  },
  {
    title: "Internationales Verständnis",
    text: "Projekterfahrung in 7 Ländern erweitert den Blick auf Märkte, Prozesse und Skalierungsfragen über lokale Perspektiven hinaus.",
  },
  {
    title: "Entscheidungsorientierte Zusammenarbeit",
    text: "Der Fokus liegt auf Eigentümern, Geschäftsführung und verantwortlichen Entscheidern, die Tempo, Klarheit und Umsetzbarkeit brauchen.",
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
