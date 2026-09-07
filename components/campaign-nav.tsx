"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  ["/nachhaltigkeitskampagne", "01", "Idee & Zielgruppe"],
  ["/nachhaltigkeitskampagne/strategie", "02", "Marke & Strategie"],
  ["/nachhaltigkeitskampagne/umsetzung", "03", "Umsetzung"],
  ["/nachhaltigkeitskampagne/auswertung", "04", "Ziele & Auswertung"],
];

export function CampaignNav() {
  const pathname = usePathname().replace(/\/$/, "");
  return <nav className="campaign-tabs" aria-label="Kampagnenbereiche">{tabs.map(([href, number, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}><span>{number}</span>{label}</Link>)}</nav>;
}
