# CHANGELOG-PROPOSAL.md — Positiv-Consult Website Änderungswünsche

> **Quelle:** `docx-content.txt` (extrahiert aus Home.docx / "Inhalte neu")
> **Status:** Analyse & Dokumentation — keine Code-Änderungen durchgeführt

---

## 1. HOME PAGE (`app/page.tsx`)

### 1.1 Hero Section — Rechter Block: Punkt hinzufügen

**Docx (Zeile 018–019):** "Aktuelle Impulse mit konsequentem Fokus auf die praktische Umsetzung" als vorletzten Punkt im rechten Block.

**Aktuell:** Der rechte Block enthält 5 Punkte. Punkt 4 von 5 lautet bereits: "Aktuelle Impulse mit konsequentem Fokus auf die praktische Umsetzung".

**Änderung:** Keine — bereits als vorletzter Punkt vorhanden.

**Priorität:** — (erledigt)

---

### 1.2 Hero Section — Button 2

**Docx (Zeile 014–016):** "Button 1: Erstgespräch vereinbaren", "Button 2: ok"

**Aktuell:** Button 1 = "Erstgespräch vereinbaren" → /kontakt, Button 2 = "Leistungen ansehen" → /leistungen

**Änderung:** Keine — docx markiert Button 2 mit "ok".

**Priorität:** — (erledigt)

---

### 1.3 "Typische Ausgangslagen" — entfernen

**Docx (Zeile 027):** "Typische Ausganslagen – rausgeben"

**Aktuell:** Auf der Home-Seite wird keine "Typische Ausgangslagen"-Section gerendert. `typicalSituations` existieren in `site-data.ts`, werden aber nicht verwendet.

**Änderung:** Keine — bereits umgesetzt.

**Priorität:** — (erledigt)

---

### 1.4 StatsStrip (dunklerer Block) — Inhalte von Version 2

**Docx (Zeile 022–024):** "Dunklerer Block von Version 1 layouttechnisch, Inhalte von Version 2"

**Aktuell:** `<StatsStrip />` rendert 4 Karten mit `--brand-dark` Hintergrund:
1. "Seit 2004" — Beratungserfahrung in Strategie, Digitalisierung, Vertrieb und Wachstum.
2. "250+ Projekte" — Begleitete Vorhaben in unterschiedlichen Unternehmenssituationen und Branchen.
3. "150+ Kunden" — Langjährige Zusammenarbeit mit KMU, Eigentümer:innen und Entscheidungsteams.
4. "Breite Branchenpraxis" — Erfahrung mit KMU, Handel, Dienstleistung, Bildung, Institutionen, Gastronomie und Start-ups.

**Änderung:** Layout (dunkler Block) entspricht Version 1. Ob die 4 Items exakt den "Version 2"-Inhalten entsprechen, ist aus dem docx nicht explizit ableitbar. Bei Unklarheit mit Heidrun abklären.

**Priorität:** niedrig

---

### 1.5 Erfahrungs-Section — wie Version 1 aber weiter unten

**Docx (Zeile 034):** "Erfahrung (in der Praxis) – wie in Version 1 aber weiter unten"

**Aktuell:** Die Erfahrungs-Section ist in `page.tsx` vollständig auskommentiert (Zeilen ~107–131). Sie würde `testimonials` rendern: 3 Karten (Strategie & Wachstum, E-Commerce & Handel, Förderberatung).

**Änderung erforderlich:**
- Auskommentierung entfernen
- Section weiter unten auf der Seite platzieren (z. B. nach Referenzen, vor CTA)
- `testimonials`-Daten rendern

**Priorität:** hoch

---

### 1.6 Referenzen — Kunden nicht als Button-Design

**Docx (Zeile 041):** "die Aufzählung der Kunden nicht in Button design, sondern in anderem Design"

**Aktuell:** Referenzen-Section rendert `clientCategoriesSelected` in `surface-card`-Karten. Featured-Namen als `text-base font-semibold`, normale Namen als `text-sm font-medium` — keine Buttons, pure Text-Darstellung.

**Änderung:** Keine — bereits umgesetzt.

**Priorität:** — (erledigt)

---

### 1.7 CTA Section — zweiten Button entfernen

**Docx (Zeile 044–045):** "Zweiten Button entfernen"

**Aktuell:** `<CtaSection>` wird nur mit `primaryLabel`/`primaryHref` aufgerufen — kein `secondaryLabel`. Nur ein Button wird gerendert.

**Änderung:** Keine — bereits umgesetzt.

**Priorität:** — (erledigt)

---

### 1.8 FAQ Section — entfernen

**Docx (Zeile 048):** "FAQ raus"

**Aktuell:** Keine FAQ-Section auf der Home-Seite. `homeFaqs` existieren in `site-data.ts`, werden aber nicht verwendet.

**Änderung:** Keine — bereits umgesetzt.

**Priorität:** — (erledigt)

---

## 2. KI & DIGITALISIERUNG (`app/ai-consulting/page.tsx` + `app/digitalisierung/page.tsx`)

### 2.1 Zusammenlegung auf eine Seite

**Docx (Zeile 061–062):** "Eine Seite für beides in ok, aber inhaltlich besser getrennt auf einer Seite darstellen"

**Aktuell:** Es gibt zwei separate Seiten:
- `/ai-consulting` — eyebrow: "KI-Beratung", title: "KI mit Substanz statt Hype."
- `/digitalisierung` — eyebrow: "KI CONSULTING UND DIGITALISIERUNG", title: "Künstliche Intelligenz mit Substanz statt Hype."

**Änderung erforderlich:**
- Eine Seite zur Hauptsache machen, die andere als Section integrieren oder löschen/redirecten
- Beide inhaltlichen Bereiche klar auf der einen Seite trennen (z. B. durch eigene Sections mit Zwischenüberschriften)
- Navigation/Footer entsprechend anpassen

**Priorität:** hoch

---

### 2.2 Titel und Subtitel

**Docx (Zeile 064–068):**
- Titel: "KI CONSULTING UND DIGITALISIERUNG"
- Subtitel: "Künstliche Intelligenz mit Substanz statt Hype."

**Aktuell:**
- `digitalisierung/page.tsx`: eyebrow="KI CONSULTING UND DIGITALISIERUNG" ✅, title="Künstliche Intelligenz mit Substanz statt Hype." ��
- `ai-consulting/page.tsx`: eyebrow="KI-Beratung" ❌, title="KI mit Substanz statt Hype." ❌

**Änderung erforderlich:** Bei Zusammenlegung entfällt das Problem. Falls `ai-consulting` bleibt: eyebrow und title anpassen.

**Priorität:** hoch (in Verbindung mit 2.1)

---

### 2.3 Beschreibungstext aktualisieren

**Docx (Zeile 070):** "KI Consulting ist dann sinnvoll, wenn Nutzen, Prozesse und Umsetzung klar zusammenpassen. POSITIVconsult begleitet Unternehmen dabei mit einem nüchternen Blick auf Business-Relevanz und Machbarkeit."

**Aktuell:**
- `digitalisierung/page.tsx`: соответствует docx ✅
- `ai-consulting/page.tsx`: "Wir helfen Unternehmen dabei, KI-Potenziale nüchtern einzuordnen, sinnvolle Use Cases zu finden und daraus Pilotprojekte abzuleiten, die organisatorisch und wirtschaftlich tragfähig sind." ❌

**Änderung erforderlich:** `ai-consulting` description an docx-Text anpassen oder bei Zusammenlegung entfällt das Problem.

**Priorität:** hoch (in Verbindung mit 2.1)

---

### 2.4 4 Blöcke in 2x2 Grid

**Docx (Zeile 072–080):** "Aufzählungen in 2x2 er Blöcken" mit 4 nummerierten Blöcken:
1. "Analyse von Prozessen, Systemen und digitalen Kanälen"
2. "Identifikation von KI- und Digitalisierungs-Use-Cases"
3. "Bewertung von Chancen, Risiken und Prioritäten"
4. "Maßnahmenplan, Pilotierung und Einführung"

Jeder Block hat einen ausführlichen Beschreibungstext im docx.

**Aktuell:**
- `digitalisierung/page.tsx` rendert `digitalOfferModules` (5 Module) in `lg:grid-cols-2 xl:grid-cols-3`
- `ai-consulting/page.tsx` rendert `aiOfferModules` (5 Module) in `lg:grid-cols-2 xl:grid-cols-3`

**Änderung erforderlich:**
- 4 neue Blöcke mit den docx-Texten erstellen (in `site-data.ts` oder direkt in der Seite)
- Grid auf `grid-cols-1 md:grid-cols-2` ändern (2x2-Layout)
- Bestehende 5-Modul-Arrays durch die 4 neuen Blöcke ersetzen

**Priorität:** hoch

---

### 2.5 "Typische digitale Baustellen" — Option 1 (LANG) oder Option 2 (KURZ)

**Docx (Zeile 083–127):** Zwei Optionen werden angeboten:

- **Option 1 LANG (Zeile 084–121):** Detailliert mit Sub-Sections: "Typische digitale Baustellen", "Worauf wir schauen", "Prozessanalyse", "Website- & E-Commerce-Einordnung", "Tool- & Systempriorisierung", "KI- und Digitalisierungspotenziale", "Maßnahmenplan", "Umsetzungsbegleitung"
- **Option 2 KURZ (Zeile 122–127):** Kompakter Text "Digitale Baustellen erkennen, priorisieren und wirksam lösen" mit 3 Absätzen.

**Aktuell:** `digitalisierung/page.tsx` hat eine vereinfachte Version: 4 `painPoints` in einer Karte + kurzer Text "Worauf wir schauen" in einer zweiten Karte. Keine der beiden docx-Optionen wird vollständig abgebildet.

**Änderung erforderlich:**
- Entscheidung für Option 1 (lang) oder Option 2 (kurz) — Entscheidung Heidrun nötig
- Bei Option 1: Alle Sub-Sections als separate Karten rendern
- Bei Option 2: Den 3-Absatz-Text übernehmen
- Aktuelle `painPoints` durch docx-Inhalte ersetzen

**Priorität:** mittel

---

### 2.6 Kontaktblock mit Zusatztext Digitalisierung

**Docx (Zeile 129):** "KONTAKTBLOCK wie in Version 1, aber mit Zusatztext DIGITALISIERUNG"

**Aktuell:** `digitalisierung/page.tsx` hat `<CtaSection>` mit primaryLabel "Erstgespräch vereinbaren", secondaryLabel "KI-Beratung ansehen". Kein zusätzlicher Digitalisierungs-Zusatztext.

**Änderung erforderlich:**
- Zusatztext zum Thema Digitalisierung im Kontaktblock ergänzen
- CtaSection-Component ggf. erweitern oder separaten Block darunter setzen

**Priorität:** mittel

---

## 3. FÖRDERUNGEN (`app/foerderungen/page.tsx`)

### 3.1 Titel

**Docx (Zeile 135–136):** "Titel ok 1 und 2", "Titel: Version 1"

**Aktuell:** title="Förderthemen sachlich prüfen, ohne das Projekt aus den Augen zu verlieren."

**Änderung:** Keine — docx bestätigt Titel als ok.

**Priorität:** — (erledigt)

---

### 3.2 Text aktualisieren

**Docx (Zeile 137–139):** "Förderberatung ist dann sinnvoll, wenn sie zu einem klaren Vorhaben passt. POSITIVconsult unterstützt dabei, Förderfähigkeit einzuordnen und das Thema mit Strategie, Digitalisierung oder Innovation sinnvoll zu verbinden. Genau dort setzen wir an – ohne Förderversprechen und ohne künstliche Aufblähung."

**Aktuell:** description="Förderberatung ist dann sinnvoll, wenn ein Vorhaben inhaltlich schlüssig ist und die Projektlogik trägt. Genau dort setzen wir an – ohne Föfderversprechen und ohne künstliche Aufblähung."

**Änderung erforderlich:** Description an docx-Version anpassen.

**Priorität:** hoch

---

### 3.3 3er Block wie Version 2

**Docx (Zeile 140):** "3er Block wie in Version 2"

**Aktuell:** 3 Karten in `lg:grid-cols-3`: "Förderfähigkeit einordnen", "Projektlogik schärfen", "Nächste Schritte ableiten".

**Änderung:** 3er-Block vorhanden. Ob Inhalte exakt "Version 2" entsprechen, nicht explizit aus docx ableitbar. Bei Unklarheit mit Heidrun abklären.

**Priorität:** niedrig

---

### 3.4 Logos von KMU Digital und WKO einbauen

**Docx (Zeile 143):** "Logos von KMU Digital und WKO einbauen"

**Aktuell:** "Förderberatung im Überblick"-Section rendert `fundingFacts` als Text-Blocks. Keine Logos, nur Text.

**Änderung erforderlich:**
- Logo-Bilder für KMU Digital und WKO besorgen
- Logo-Section einbauen (im Überblick-Block oder als eigene Section)
- `<Image>`-Komponenten für die Logos hinzufügen

**Priorität:** hoch

---

### 3.5 Buttonstyle ändern

**Docx (Zeile 145):** "Buttonstyle layouttechnisch ändern"

**Aktuell:** CTA-Button mit `button-primary`-Klasse (`rounded-full`).

**Änderung erforderlich:** Button-Styling anpassen — docx sagt "layouttechnisch ändern", aber nicht worauf. Mit Heidrun konkretisieren.

**Priorität:** mittel

---

### 3.6 Dunkler Block wie Version 1

**Docx (Zeile 147):** "Dunkler Block wie in Version 1"

**Aktuell:** Auf der Förderungen-Seite gibt es keinen separaten dunklen Inhaltsblock. Die CTA-Section hat `bg-[var(--brand-dark)]`, aber das ist die Standard-CTA. Ein eigener dunkler Inhaltsblock (wie StatsStrip auf Home) fehlt.

**Änderung erforderlich:**
- Dunklen Inhaltsblock mit `--brand-dark` Hintergrund hinzufügen
- Inhalte für diesen Block definieren — abklären mit Heidrun

**Priorität:** mittel

---

### 3.7 Abstand zum Footer optimieren

**Docx (Zeile 148):** "Abstand zum Footer optimieren"

**Aktuell:** Seite endet mit `<CtaSection>` (Padding `pb-10 pt-10`), dann kommt direkt der Footer.

**Änderung erforderlich:** Padding/Margin zwischen letzter Section und Footer anpassen. Konkret: zusätzliches `mb-*` oder `pb-*` auf der letzten Section oder ein Spacer-Div.

**Priorität:** niedrig

---

## 4. ÜBER UNS (`app/ueber-uns/page.tsx`)

**Docx (Zeile 152):** "ÜBER UNS wie Version 2"

**Aktuell:** Die Seite enthält PageHeader, StatsStrip, 2 Text-Blocks (Beratung für Eigentümer:innen, Erfahrung in Breite und Tiefe), Entwicklungs-Schritte (`companyStory`) und Kontaktkarten (`teamContacts`).

**Änderung:** Docx sagt "wie Version 2" — die aktuelle Seite scheint dies bereits abzubilden. Bei Unklarheit mit Heidrun abklären.

**Priorität:** — (wahrscheinlich erledigt)

---

## 5. REFERENZEN (`app/kunden-erfahrung/page.tsx`)

### 5.1 Texte aktualisieren

**Docx (Zeile 158–165):**
- "Erfahrung aus unterschiedlichen Branchen und Unternehmensrealitäten."
- "POSITIVconsult arbeitet mit KMU, Start-ups, Institutionen und wirtschaftsnahen Organisationen. Die Referenzen zeigen keine dekorativen Behauptungen, sondern echte Branchenbreite und typische Themenfelder."
- "Kunden & Branchen"
- "Ein Auszug aus Unternehmen und Organisationen, mit denen POSITIVconsult gearbeitet hat."
- "Die Auswahl zeigt die Bandbreite der Branchen und Aufgabenfeldfelder von Handel über Dienstleistung bis zu Bildung und Institutionen."

**Aktuell:**
- title="Erfahrung aus unterschiedlichen Branchen und Unternehmensrealitäten." ✅
- description="POSITIVconsult arbeitet mit KMU, Start-ups, Institutionen und wirtschaftsnahen Organisationen. Die Referenzen zeigen keine dekorativen Behauptungen, sondern echte Branchenbreite und typische Themenfelder." ✅
- Section "Kunden & Branchen": "Ein Auszug aus Unternehmen und Organisationen, mit denen POSITIVconsult gearbeitet hat." ✅
- Sub-Text: "Ohne fremde Logos und ohne erfundene Cases: Die folgenden Namen zeigen die Bandbreite der Branchen und Aufgaben, in denen Erfahrung vorhanden ist." — docx sagt: "Die Auswahl zeigt die Bandbreite der Branchen und Aufgabenfelder von Handel über Dienstleistung bis zu Bildung und Institutionen." ❌

**Änderung erforderlich:** Sub-Text unter "Kunden & Branchen" an docx-Version anpassen.

**Priorität:** mittel

---

### 5.2 Blöcke wie Version 2, aber nicht mit Buttons bei Namen

**Docx (Zeile 167):** "Blöcke wie in Version 2, aber nicht mit Buttons bei Namen"

**Aktuell:** Die `clientCategories` werden als `surface-card`-Karten gerendert. Die Namen sind als `rounded-full border border-black/10 bg-white px-4 py-2` gestaltet — das sieht aus wie Pill-Badges/Buttons.

**Änderung erforderlich:**
- Pill-Badge-Styling der Namen durch eine andere Darstellung ersetzen (z. B. reine Text-Liste, verschiedene Schriftgrößen, oder Tag-Cloud-ähnlich)
- Auf der Home-Seite werden die `clientCategoriesSelected` bereits ohne Button-Styling gezeigt — ähnlichen Stil hier übernehmen

**Priorität:** mittel

---

## 6. KONTAKT (`app/kontakt/page.tsx`)

**Docx (Zeile 172–174):** "Version 2 ok"

**Aktuell:** Seite mit PageHeader, Standort-Card und 2 Kontaktkarten (Heidrun Unterweger, Mag. Marc Isop).

**Änderung:** Keine — docx bestätigt als ok.

**Priorität:** — (erledigt)

---

## 7. IMPRESSUM (`app/impressum/page.tsx`)

**Docx (Zeile 177):** "Fokus auf Heidrun aber ok"

**Aktuell:** Impressum listet "Heidrun Unterweger, POSITIVconsult, Mariahilfer Straße 101, 1060 Wien". Nur Heidrun wird genannt — kein zweiter Partner.

**Änderung:** Keine — docx bestätigt als ok.

**Priorität:** — (erledigt)

---

## 8. DATENSCHUTZ (`app/datenschutz/page.tsx`)

**Docx (Zeile 179):** "Datenschutz ok"

**Aktuell:** Dat Datenschutzerklärung mit Verantwortlicher Stelle, Allgemeinen Hinweisen, Zugriff, Kontaktaufnahme, Datensicherheit, Rechte.

**Änderung:** Keine — docx bestätigt als ok.

**Priorität:** — (erledigt)

---

## ZUSAMMENFASSUNG

| Seite | Änderungen offen | Priorität |
|-------|-----------------|-----------|
| Home | Erfahrungs-Section einkommentieren & platzieren | hoch |
| KI & Digitalisierung | Zusammenlegung, 4 Blöcke 2x2, Beschreibungstext | hoch |
| KI & Digitalisierung | Baustellen Option 1/2, Kontaktblock-Zusatztext | mittel |
| Förderungen | Text aktualisieren, Logos einbauen | hoch |
| Förderungen | Buttonstyle, dunkler Block, Abstand Footer | mittel/niedrig |
| Referenzen | Sub-Text aktualisieren, Pill-Badges entfernen | mittel |
| Über uns | — | — |
| Kontakt | — | — |
| Impressum | — | — |
| Datenschutz | — | — |

### Offene Entscheidungen (Heidrun):
1. KI & Digitalisierung: Welche Seite wird zur Hauptsache? (ai-consulting oder digitalisierung?)
2. KI & Digitalisierung: Option 1 (LANG) oder Option 2 (KURZ) für "Typische digitale Baustellen"?
3. Förderungen: Wie genau soll der Buttonstyle geändert werden?
4. Förderungen: Welche Inhalte sollen in den dunklen Block?
5. Referenzen: Welches Design statt Pill-Badges?
