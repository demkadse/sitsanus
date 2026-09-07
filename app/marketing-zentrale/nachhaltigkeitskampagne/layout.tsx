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
  return <><header className="project-header"><div className="shell"><Link href="/marketing-zentrale">← Marketing-Zentrale</Link><span>SitSanus · Projektbereich</span><Link href="/">Zur Kundenwebsite ↗</Link></div></header><main className="campaign"><header className="campaign-hero"><div className="shell"><p className="eyebrow">SitSanus · Nachhaltigkeitskampagne</p><h1>Bewusst<br /><em>weitergedacht.</em></h1><p className="lead">Ergonomie und bewusster Konsum: vorhandene Ausstattung besser nutzen, gezielt ergänzen und durch Beratung Vertrauen gewinnen.</p><div className="campaign-facts"><span>8 Wochen</span><span>Instagram</span><span>Planbudget: 600 €</span></div></div></header><div className="shell campaign-body"><CampaignNav /><div className="campaign-content">{children}</div><aside className="campaign-resources"><div><strong>Kampagnenkonzept</strong><p>Strategie, Maßnahmen und Kennzahlen kompakt zusammengefasst.</p></div><a className="text-link" href={assetPath("/downloads/SitSanus_Nachhaltige_Kampagne.md")} download>Konzept herunterladen ↓</a><Link className="text-link" href="/marketing-zentrale">Zur Marketing-Zentrale →</Link></aside></div></main></>;
}
