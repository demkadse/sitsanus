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
  return <><Header /><aside className="campaign-entry"><div className="shell"><div><p className="eyebrow">Projektarbeit · Kaufmann im E-Commerce</p><h2>Nachhaltigkeitskampagne planen.</h2><p>Meine Ausarbeitung zur Aufgabenstellung: SWOT, Kampagnenidee, SMART-Ziel, Persona, Umsetzung, 7 Ps und Erfolgsmessung für SitSanus.</p></div><Link className="button button-dark" href="/marketing-zentrale/nachhaltigkeitskampagne">Projektdokumentation öffnen →</Link></div></aside><SocialMediaDashboard /><Footer /></>;
}
