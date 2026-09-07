import { siteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: { default: "SitSanus | Dein Arbeitsplatz. Gut für dich.", template: "%s | SitSanus" },
  description: "Ergonomische Ausstattung und verständliches Wissen für einen Arbeitsplatz, der zu dir passt.",
  keywords: ["Ergonomie", "ergonomischer Arbeitsplatz", "Büroeinrichtung", "ergonomischer Bürostuhl", "höhenverstellbarer Schreibtisch", "Frankfurt"],
  alternates: { canonical: "/" },
  openGraph: { title: "SitSanus | Dein Arbeitsplatz. Gut für dich.", description: "Ergonomie, die man versteht – für konzentriertes Arbeiten und ein gutes Gefühl.", url: "/", siteName: "SitSanus", locale: "de_DE", type: "website", images: [{ url: `${siteUrl}/images/ergonomic-desk-detail.webp`, width: 1200, height: 630, alt: "Ergonomisch eingerichteter Arbeitsplatz von SitSanus" }] },
  twitter: { card: "summary_large_image", title: "SitSanus | Dein Arbeitsplatz. Gut für dich.", description: "Ergonomie, die man versteht – für konzentriertes Arbeiten und ein gutes Gefühl.", images: [`${siteUrl}/images/ergonomic-desk-detail.webp`] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f5f3ee", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
