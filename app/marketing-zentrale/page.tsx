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
  return <><Header /><SocialMediaDashboard /><Footer /></>;
}
