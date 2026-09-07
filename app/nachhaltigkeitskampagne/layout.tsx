import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CampaignNav } from "@/components/campaign-nav";
import { assetPath } from "@/lib/site";
import "./campaign.css";

export const metadata: Metadata = {
  title: "Nachhaltigkeitskampagne",
  description: "Das SitSanus-Kampagnenkonzept: bewusst weiterdenken, vorhandene Ausstattung prüfen und gezielt ergänzen.",
  robots: { index: false, follow: true },
};

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="campaign"><header className="campaign-hero"><div className="shell"><p className="eyebrow">Kampagnenkonzept · Studienprojekt</p><h1>Dein Arbeitsplatz.<br /><em>Bewusst weitergedacht.</em></h1><p className="lead">Erst verstehen, was bleiben kann. Dann entscheiden, was wirklich fehlt. Eine Kampagne für bewusste Arbeitsplatzentscheidungen.</p><div className="campaign-facts"><span>8 Wochen Pilot</span><span>Instagram im Fokus</span><span>Beratung vor Neukauf</span></div><p className="campaign-disclaimer">Theoretische Planung: Persona, Budget und Zielwerte sind Annahmen. Neue Leistungen und Nachhaltigkeitsmerkmale müssen vor dem Start geprüft werden.</p></div></header><div className="shell campaign-body"><CampaignNav /><div className="campaign-content">{children}</div><aside className="campaign-resources"><div><strong>Das Konzept zum Mitnehmen</strong><p>Alle sieben Aufgabenpunkte, Hintergründe und Quellen in einem Dokument.</p></div><a className="text-link" href={assetPath("/downloads/SitSanus_Nachhaltige_Kampagne.md")} download>Konzept herunterladen ↓</a><Link className="text-link" href="/marketing-zentrale">Zur Marketing-Zentrale →</Link></aside></div></main><Footer /></>;
}
