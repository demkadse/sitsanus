import Link from "next/link";
export const metadata = { title: "Kampagne: Marke & Strategie", alternates: { canonical: "/marketing-zentrale/nachhaltigkeitskampagne/strategie/" } };
const swot = [
  ["S", "Stärken", "Intern", "Klare Ergonomie-Positionierung, verständliche Beratung, kostenloser Leitfaden und persönliche Gründergeschichte.", "Beratung und Orientierung als Einstieg nutzen."],
  ["W", "Schwächen", "Intern", "Shop noch im Aufbau, Nachhaltigkeitsmerkmale nicht belegt, Social-Media-Kanäle und belastbare Kampagnendaten fehlen.", "Mit einem kleinen Pilot beginnen und Nachweise vor dem Start prüfen."],
  ["O", "Chancen", "Extern", "Nachhaltigkeitsbewusste Käufer suchen Orientierung. Social Media ermöglicht direkten Austausch und anschauliche Beratung.", "Bestand, Pflege und gezielte Ergänzung zum Thema machen."],
  ["T", "Risiken", "Extern", "Skepsis gegenüber Umweltversprechen, Konkurrenz um Aufmerksamkeit und schwankende organische Reichweite.", "Belege zeigen, Kritik beantworten und ein begrenztes Testbudget einsetzen."],
];
const mix = [
  ["Product", "Produkt", "Ergonomische Ausstattung plus Beratung. Der Check beginnt beim Bestand. Material-, Haltbarkeits- und Reparaturaussagen nur mit Nachweisen."],
  ["Price", "Preis", "Kostenloser Check ohne Kaufpflicht. Preise und Servicekosten transparent nennen; auf künstlichen Zeitdruck verzichten."],
  ["Place", "Distribution", "Instagram führt zur Website und zum Anfrageweg. Pilotregion Frankfurt/Rhein-Main; Liefer- und Beratungsgebiet vorher bestätigen."],
  ["Promotion", "Kommunikation", "Reels, Carousels, Stories, Anzeigen und eine Fragerunde schaffen Orientierung und führen zur Beratung."],
  ["People", "Menschen", "Fachkundige Beratung und erreichbare Ansprechpartner. Das Team kennt belegte Eigenschaften und offene Fragen."],
  ["Process", "Prozesse", "Besuch → Anfrage → Bestandsaufnahme → Empfehlung → optionaler Kauf. Weiterverwendbare Elemente werden ausdrücklich festgehalten."],
  ["Physical Evidence", "Sichtbare Belege", "Nachprüfbare Materialangaben, tatsächliche Servicebedingungen und echte Erfahrungsberichte. "],
];
export default function StrategyPage() {
  return <><section className="campaign-intro"><p className="eyebrow">SWOT-Analyse</p><h2>Stärken nutzen.<br /><em>Vertrauen aufbauen.</em></h2><p>SitSanus verbindet Ergonomie mit verständlicher Beratung. Für die Kampagne stehen der kostenlose Leitfaden und persönliche Unterstützung im Mittelpunkt.</p></section><div className="campaign-grid">{swot.map(([letter, title, scope, text, action]) => <article className="campaign-card" key={letter}><div className="campaign-card-heading"><span className="campaign-letter">{letter}</span><span className="campaign-tag">{scope}</span></div><h3>{title}</h3><p>{text}</p><p className="campaign-action"><strong>Konsequenz:</strong> {action}</p></article>)}</div><aside className="campaign-note"><strong>Differenzierung</strong><p>Beratung beginnt beim vorhandenen Arbeitsplatz. SitSanus empfiehlt nur passende Ergänzungen und unterstützt die Weiterverwendung brauchbarer Ausstattung – auch ohne anschließenden Kauf.</p></aside><section className="campaign-section"><p className="eyebrow">Der Kampagnenmix</p><h2>Die sieben Ps.</h2><dl className="campaign-mix">{mix.map(([name, label, text], i) => <div key={name}><dt><span>0{i + 1}</span><strong>{name}</strong><small>{label}</small></dt><dd>{text}</dd></div>)}</dl></section><Link className="text-link campaign-next" href="/marketing-zentrale/nachhaltigkeitskampagne/umsetzung">Weiter: Umsetzung →</Link></>;
}
