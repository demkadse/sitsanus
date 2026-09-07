import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMediaDashboard } from "@/components/social-media-dashboard";

export const metadata: Metadata = {
  title: "Marketing-Zentrale",
  description: "Projektbereich für kaufmännische Kampagnenplanung und eine Marketing-Demo im E-Commerce-Projekt SitSanus.",
  robots: { index: false, follow: false },
};

export default function MarketingDashboardPage() {
  return <><Header /><aside className="campaign-entry"><div className="shell"><div><p className="eyebrow">Nachhaltigkeitskampagne</p><h2>Bewusst weitergedacht.</h2><p>Acht Wochen, ein Kanal, 30 Beratungsanfragen. Strategie und Maßnahmen für bewusste Arbeitsplatzentscheidungen.</p></div><Link className="button button-dark" href="/marketing-zentrale/nachhaltigkeitskampagne">Kampagnenplanung öffnen →</Link></div></aside><SocialMediaDashboard /><Footer /></>;
}
