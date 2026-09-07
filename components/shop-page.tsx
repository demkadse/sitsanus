import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = { title: string; intro: string; eyebrow?: string };
export function ShopPage({ title, intro, eyebrow = "SitSanus Shop" }: Props) { return <><Header /><main className="simple-page shop-page"><div className="shell narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p><p>Diese Kategorie ist als Shop-Platzhalter angelegt. Die Auswahl wird mit sorgfältig kuratierten Produkten und verständlichen Entscheidungshilfen ergänzt.</p><Link className="button button-dark" href="/leitfaden">Erst den Leitfaden lesen <span>→</span></Link></div></main><Footer /></>; }
