import { assetPath } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = { title: "So funktioniert's", description: "Von der Beratung bis zur fachgerechten Einrichtung deines Büros." };

const steps = [
  ["01", "Zusammenstellen", "Du wählst, was zu deinem Alltag passt – vom ergonomischen Stuhl bis zum kompletten Arbeitsplatz."],
  ["02", "Beraten lassen", "Auf Wunsch unterstützen wir dich persönlich bei Auswahl, Maßen und einer ergonomisch sinnvollen Zusammenstellung."],
  ["03", "Liefern & einrichten", "Unsere Fachkräfte bringen alles zu dir, bauen auf und richten dein Büro vor Ort passend ein."],
];

export default function HowItWorksPage() { return <><Header /><main className="how-it-works"><section className="how-hero"><div className="shell how-hero-grid"><div><p className="eyebrow">So funktioniert&apos;s</p><h1>Dein Weg zum<br /><em>perfekten Büro.</em></h1><p className="lead">Von der ersten Idee bis zum fertig eingerichteten Arbeitsplatz begleiten wir dich persönlich und ohne Umwege.</p><Link className="button button-dark" href="/shop">Arbeitsplatz zusammenstellen <span>→</span></Link></div><div className="how-hero-image"><Image src={assetPath("/images/lieferung-einrichtung.webp")} alt="SitSanus Lieferung wird beim Kunden persönlich übergeben" fill sizes="(max-width: 760px) 100vw, 48vw" priority /></div></div></section><section className="how-steps"><div className="shell narrow"><p className="eyebrow">In drei Schritten</p>{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section><section className="how-note"><div className="shell narrow"><p className="eyebrow">Immer persönlich</p><h2>Du entscheidest, wie viel Unterstützung du brauchst.</h2><p>Ob einzelne Ergänzung oder vollständiger Arbeitsplatz: Wir machen die nächsten Schritte verständlich, planbar und passend für dich.</p><Link className="button button-light" href="/leitfaden">Erst im Leitfaden orientieren <span>→</span></Link></div></section></main><Footer /></>; }
