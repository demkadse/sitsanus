import Link from "next/link";

type Props = { title: string; text: string; href: string; image: string; alt: string; featured?: boolean };
export function CategoryCard({ title, text, href, image, alt, featured }: Props) { return <article className={featured ? "category-card featured" : "category-card"}><img src={image} alt={alt} loading="lazy" /><div><p className="eyebrow">{featured ? "Der Anfang" : "Kategorie"}</p><h3>{title}</h3><p>{text}</p><Link href={href}>Entdecken <span aria-hidden>→</span></Link></div></article>; }
