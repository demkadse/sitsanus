import type { Metadata } from "next";
import Link from "next/link";
import { CampaignNav } from "@/components/campaign-nav";
import { assetPath } from "@/lib/site";
import "./campaign.css";

export const metadata: Metadata = {
  title: "Projektarbeit: Nachhaltigkeitskampagne",
  description: "Kaufmännische Planung einer Nachhaltigkeitskampagne für das E-Commerce-Projekt SitSanus: Analyse, Entscheidungen, Ressourcen und Erfolgskontrolle.",
  robots: { index: false, follow: false },
};

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return <><header className="project-header"><div className="shell"><Link href="/marketing-zentrale">← Marketing-Zentrale</Link><span>SitSanus · Projektbereich</span><Link href="/">Zur Kundenwebsite ↗</Link></div></header><main className="campaign"><header className="campaign-hero"><div className="shell"><p className="eyebrow">Projektdokumentation · Kaufmann im E-Commerce</p><h1>Nachhaltigkeits-<br /><em>kampagne planen.</em></h1><p className="lead">Meine kaufmännische Ausarbeitung für das Projekt SitSanus: von der Markenanalyse über die Kampagnenplanung bis zur messbaren Erfolgskontrolle.</p><div className="campaign-facts"><span>7 Aufgabenpunkte</span><span>4 Arbeitsbereiche</span><span>Theoretisches Konzept</span></div><p className="campaign-disclaimer">Arbeitsgrundlage: Die Zielgruppe achtet laut Aufgabenstellung stark auf Nachhaltigkeit. Persona, Budget und Zielwerte sind Planungsannahmen. Unternehmensleistungen und Nachhaltigkeitsaussagen sind vor einer realen Umsetzung zu prüfen.</p></div></header><div className="shell campaign-body"><CampaignNav /><div className="campaign-content">{children}</div><aside className="campaign-resources"><div><strong>Vollständige Projektausarbeitung</strong><p>Alle sieben Aufgabenpunkte, Herleitungen und Quellen als Markdown-Datei.</p></div><a className="text-link" href={assetPath("/downloads/SitSanus_Nachhaltige_Kampagne.md")} download>Ausarbeitung herunterladen ↓</a><Link className="text-link" href="/marketing-zentrale">Zur Marketing-Zentrale →</Link></aside><p className="campaign-caption">Öffentliche Projektdokumentation ohne Zugangsschutz. Die Kennzahlen sind Zielwerte, keine tatsächlich erzielten Ergebnisse.</p></div></main></>;
}
