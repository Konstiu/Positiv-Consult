import {PageHeader} from "@/components/page-header";
import Link from "next/link";
import {createMetadata} from "@/lib/metadata";

export const metadata = createMetadata({
    title: "Datenschutz",
    description:
        "Datenschutzerklärung von POSITIVconsult: Hinweise zur Verarbeitung personenbezogener Daten.",
    path: "/datenschutz",
});

export default function DatenschutzPage() {
    return (
        <>
            <div
                className="fixed inset-0 -z-10 bg-white"
                style={{pointerEvents: 'none'}}
                aria-hidden="true"
            />
            <PageHeader
                eyebrow="Datenschutz"
                title="Datenschutzerklärung."
                description="Hinweise zur Verarbeitung personenbezogener Daten auf den Seiten von POSITIVconsult."
            />

            <section className="mx-auto w-full max-w-3xl px-5 py-18 md:px-8 md:py-24">


                <div
                    className="text-[15px] leading-7 text-[var(--ink)] [&_h1]:mb-8 [&_h1]:font-serif [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-[var(--brand-blue)] md:[&_h1]:text-5xl [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-[var(--brand-blue)]/15 [&_h2]:pt-6 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[var(--brand-blue)] md:[&_h2]:text-[2rem] [&_p]:mt-4 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:pl-1 [&_b]:font-semibold"
                >
                    <h1>Datenschutzerkl&auml;rung</h1>
                    <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>
                    <p><b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website besuchen, und bedanken uns f&uuml;r Ihr Interesse. Im Folgenden informieren wir Sie &uuml;ber den Umgang mit Ihren personenbezogenen Daten bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.</p>
                    <p><b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Heidrun Unterweger, POSITIVconsult, Mariahilfer Stra&szlig;e, 101, 1060 Wien, &Ouml;sterreich, Tel.: 06769414427, E-Mail: h.unterweger@positiv-consult.at. Der f&uuml;r die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
                    <h2>2) Datenerfassung beim Besuch unserer Website</h2>
                    <p><b>2.1</b>&nbsp;Bei der blo&szlig; informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen &uuml;bermitteln, erheben wir nur solche Daten, die Ihr Browser an den Seitenserver &uuml;bermittelt (sog. &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die f&uuml;r uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:</p>
                    <ul>
                        <li>Unsere besuchte Website</li>
                        <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                        <li>Menge der gesendeten Daten in Byte</li>
                        <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                        <li>Verwendeter Browser</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                    </ul>
                    <p>Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilit&auml;t und Funktionalit&auml;t unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachtr&auml;glich zu &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.</p>
                    <p><b>2.2</b>&nbsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen eine verschl&uuml;sselte Verbindung an der Zeichenfolge &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer Browserzeile erkennen.</p>
                    <h2>3) Kontaktaufnahme</h2>
                    <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden &ndash; ausschlie&szlig;lich zum Zweck der Bearbeitung und Beantwortung Ihres Anliegens und nur im daf&uuml;r erforderlichen Umfang &ndash; personenbezogene Daten verarbeitet.</p>
                    <p>Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf einen Vertrag ab, so ist zus&auml;tzliche Rechtsgrundlage f&uuml;r die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gel&ouml;scht, wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass der betroffene Sachverhalt abschlie&szlig;end gekl&auml;rt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                    <h2>4) Datenverarbeitung zur Bestellabwicklung</h2>
                    <p>Soweit f&uuml;r die Vertragsabwicklung zu Liefer- und Zahlungszwecken erforderlich, werden die von uns erhobenen personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen und das beauftragte Kreditinstitut weitergegeben.</p>
                    <p>Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages Aktualisierungen f&uuml;r Waren mit digitalen Elementen oder f&uuml;r digitale Produkte schulden, verarbeiten wir die von Ihnen bei der Bestellung &uuml;bermittelten Kontaktdaten, um Sie im Rahmen unserer gesetzlichen Informationspflichten gem&auml;&szlig; Art. 6 Abs. 1 lit. c DSGVO pers&ouml;nlich zu informieren. Ihre Kontaktdaten werden hierbei streng zweckgebunden f&uuml;r Mitteilungen &uuml;ber von uns geschuldete Aktualisierungen verwendet und zu diesem Zweck durch uns nur insoweit verarbeitet, wie dies f&uuml;r die jeweilige Information erforderlich ist.</p>
                    <p>Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem / den nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei der Durchf&uuml;hrung geschlossener Vertr&auml;ge unterst&uuml;tzen. An diese Dienstleister werden nach Ma&szlig;gabe der folgenden Informationen gewisse personenbezogene Daten &uuml;bermittelt.</p>
                    <h2>5) Rechte des Betroffenen</h2>
                    <p><b>5.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen gegen&uuml;ber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei f&uuml;r die jeweiligen Aus&uuml;bungsvoraussetzungen auf die angef&uuml;hrte Rechtsgrundlage verwiesen wird:</p>
                    <ul>
                        <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
                        <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;</li>
                        <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;</li>
                        <li>Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18 DSGVO;</li>
                        <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;</li>
                        <li>Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO;</li>
                        <li>Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7 Abs. 3 DSGVO;</li>
                        <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.</li>
                    </ul>
                    <p><b>5.2</b>&nbsp;WIDERSPRUCHSRECHT</p>
                    <p>WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.</p>
                    <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN DIENT.</p>
                    <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUS&Uuml;BEN.</p>
                    <p>MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.</p>
                    <h2>6) Dauer der Speicherung personenbezogener Daten</h2>
                    <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und &ndash; sofern einschl&auml;gig &ndash; zus&auml;tzlich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).</p>
                    <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer ausdr&uuml;cklichen Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre Einwilligung widerrufen.</p>
                    <p>Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten, die im Rahmen rechtsgesch&auml;ftlicher bzw. rechtsgesch&auml;fts&auml;hnlicher Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen routinem&auml;&szlig;ig gel&ouml;scht, sofern sie nicht mehr zur Vertragserf&uuml;llung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.</p>
                    <p>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten &uuml;berwiegen, oder die Verarbeitung dient der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen.</p>
                    <p>Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO aus&uuml;ben.</p>
                    <p>Sofern sich aus den sonstigen Informationen dieser Erkl&auml;rung &uuml;ber spezifische Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im &Uuml;brigen dann gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.</p>
                </div>
                <div
                    id="itkanzlei_txt_copyright"
                    style={{fontSize: '12px', marginTop: '8em'}}
                >
                    <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                        <a
                            href="https://www.it-recht-kanzlei.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.it-recht-kanzlei.de/logo/Copyright-Logo_Datenschutzerklaerung.png?i=3ad55-214d7-39c8-907e-1"
                                id="itkanzlei_img_copyright"
                                alt="© IT-Recht Kanzlei"
                                title="© IT-Recht Kanzlei"
                                style={{marginTop: '-20px', borderStyle: 'none', maxWidth: '100%'}}
                            />
                        </a>
                    </div>
                    <div
                        style={{
                            display: 'inline-block',
                            verticalAlign: 'top',
                            marginLeft: '5px',
                            float: 'right',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Stand: 14.07.2026, 14:20:00
                    </div>
                    <div style={{clear: 'right'}} />
                </div>

                <div className="space-y-8 text-sm leading-7 text-[var(--ink)] pt-10">


                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                            Verantwortliche Stelle
                        </h2>
                        <p className="mt-4">
                            Heidrun Unterweger
                            <br/>
                            POSITIVconsult
                            <br/>
                            Mariahilfer Straße 101
                            <br/>
                            1060 Wien
                            <br/>
                            Österreich
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-[var(--brand-blue)]">
                            Kontakt
                        </h2>
                        <p className="mt-4">
                            E-Mail:{' '}
                            <Link href="mailto:h.unterweger@positiv-consult.at" className="text-link">
                                h.unterweger@positiv-consult.at
                            </Link>
                            <br/>
                            Telefon: +43 676 941 44 27
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
