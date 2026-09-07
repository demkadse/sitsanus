import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMediaDashboard } from "@/components/social-media-dashboard";

export const metadata: Metadata = {
  title: "Marketing-Zentrale",
  description: "Interne Demo für die Planung von Social-Media-Inhalten bei SitSanus.",
  robots: { index: false, follow: false },
};

export default function MarketingDashboardPage() {
  return <><Header /><aside className="campaign-entry"><div className="shell"><div><p className="eyebrow">Kampagnenkonzept · Studienprojekt</p><h2>Bewusst weitergedacht.</h2><p>Idee, Zielgruppe, Strategie und Erfolgsmessung unserer geplanten Nachhaltigkeitskampagne.</p></div><Link className="button button-dark" href="/nachhaltigkeitskampagne">Kampagne entdecken →</Link></div></aside><SocialMediaDashboard /><Footer /></>;
}
