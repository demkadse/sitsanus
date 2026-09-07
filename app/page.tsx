import { assetPath } from "@/lib/site";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/components/data";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const Tick = () => <span className="tick" aria-hidden>✓</span>;
const socialChannels = ["Instagram", "TikTok", "LinkedIn", "YouTube", "Facebook", "Pinterest", "X"];

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", name: "SitSanus", url: "https://www.sitsanus.de", description: "Ergonomische Ausstattung und verständliches Wissen für deinen Arbeitsplatz.", email: "hallo@sitsanus.de", address: { "@type": "PostalAddress", addressLocality: "Frankfurt am Main", addressCountry: "DE" } };

  return <><Header /><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="hero"><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow reveal">Ergonomie, die man versteht</p><h1 className="reveal">Dein Arbeitsplatz.<br /><em>Gut für dich.</em></h1><p className="hero-text reveal">Nicht mehr Produkte. Sondern die richtigen Entscheidungen für einen Arbeitsplatz, an dem du konzentriert und mit gutem Gefühl arbeiten kannst.</p><div className="hero-actions reveal"><Link className="button button-dark" href="/leitfaden">Zum kostenlosen Leitfaden <span>→</span></Link><a className="text-link" href="#arbeitsplatz">Arbeitsplatz entdecken <span>↓</span></a></div><p className="hero-note"><Tick /> Ohne Vorwissen · In deinem Tempo</p></div><div className="hero-image reveal"><img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=85" alt="Person arbeitet an einem aufgeräumten, hellen Arbeitsplatz" /><div className="hero-card"><span>07:45</span><p>Ein guter Tag beginnt mit einem guten Platz.</p></div></div></div></section>

    <section className="intro section flow-top"><div className="shell narrow"><p className="eyebrow">Du bist nicht das Problem</p><h2>Wenn der Körper sich meldet, lohnt es sich hinzuschauen.</h2><p className="lead">Viele von uns verbringen Stunden am Bildschirm. Ein verspannter Nacken, müde Schultern oder das Gefühl, nie richtig bequem zu sitzen, sind dabei keine Schwäche. Sie sind Hinweise.</p><div className="three-facts"><p><strong>7–9 Stunden</strong><span>verbringt Laura an vielen Tagen am Schreibtisch.</span></p><p><strong>1 Arbeitsplatz</strong><span>kann ihren Alltag spürbar leichter machen.</span></p><p><strong>0 leere Versprechen</strong><span>findest du bei SitSanus.</span></p></div></div></section>

    <section className="desk-moment"><div className="shell"><img src={assetPath("/images/ergonomic-desk-detail.webp")} alt="Ergonomische Maus, Tastatur und Laptopständer auf einem aufgeräumten Arbeitsplatz" /><p>Die kleinen Dinge am richtigen Platz machen den Unterschied.</p></div></section>
    <section id="arbeitsplatz" className="categories section"><div className="shell"><div className="section-head"><div><p className="eyebrow">Für deinen Arbeitsplatz</p><h2>Gut eingerichtet,<br /><em>Schritt für Schritt.</em></h2></div><Link className="text-link" href="/shop">Alles ansehen <span>→</span></Link></div><div className="category-grid">{categories.map((item, index) => <CategoryCard key={item.title} {...item} featured={index === 0} />)}</div></div></section>

    <section className="guidance section"><div className="shell guidance-grid"><div className="guide-photo"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="Zwei Menschen besprechen sich an einem Tisch in heller Umgebung" /></div><div className="guide-copy"><p className="eyebrow">Erst verstehen</p><h2>Dein Ergonomie-Leitfaden.</h2><p className="lead">Die wichtigsten Grundlagen für einen Arbeitsplatz, der sich besser anfühlt – klar erklärt und kostenlos.</p><Link className="button button-light" href="/leitfaden">Leitfaden entdecken <span>→</span></Link></div></div></section>

    <section className="social-teaser section"><div className="shell social-teaser-grid"><div><p className="eyebrow">Wissen für zwischendurch</p><h2>Mehr gute Ideen<br /><em>für deinen Arbeitsplatz.</em></h2></div><div><p className="lead">Kurze Einrichtungs-Tipps, echte Einblicke und praktische Routinen: Unsere Kanäle sind schon mitgedacht und folgen in Kürze.</p><div className="social-channel-list" aria-label="Geplante Social-Media-Kanäle">{socialChannels.map((channel) => <button className="social-button social-button-large" type="button" disabled key={channel}>{channel}<span aria-hidden>↗</span></button>)}</div><p className="social-note">Die Buttons sind bewusst noch nicht verlinkt.</p></div></div></section>

    <section className="closing"><div className="shell closing-inner"><p className="eyebrow">Dein nächster Schritt</p><h2>Finde, was<br /><em>zu dir passt.</em></h2><p>Entdecke ausgewählte Ausstattung für deinen Arbeitsplatz.</p><Link className="button button-cream" href="/shop">Zum Shop <span>→</span></Link></div></section>
  </main><Footer /></>;
}
