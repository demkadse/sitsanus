"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="brand" href="/" onClick={close} aria-label="SitSanus Startseite"><span className="brand-mark">S</span><span>SitSanus</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span className="sr-only">Menü {open ? "schließen" : "öffnen"}</span><i></i><i></i></button>
    <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Hauptnavigation">
      <Link href="/" onClick={close}>Startseite</Link><Link href="/leitfaden" onClick={close}>Ergonomie-Leitfaden</Link><Link href="/shop" onClick={close}>Shop</Link><Link href="/ueber-uns" onClick={close}>Über uns</Link><Link href="/so-funktionierts" onClick={close}>So funktioniert&apos;s</Link><Link href="/nachhaltigkeitskampagne" onClick={close}>Nachhaltigkeitskampagne</Link><Link className="nav-cta" href="/leitfaden" onClick={close}>Kostenlos starten <span aria-hidden>→</span></Link>
    </nav>
  </div></header>;
}
