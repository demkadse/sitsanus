"use client";

import { FormEvent, useState } from "react";

const scheduledPosts = [
  { date: "08", month: "SEP", channel: "Instagram", format: "Karussell", title: "3 Zeichen, dass dein Arbeitsplatz eine Pause braucht", status: "In Prüfung" },
  { date: "10", month: "SEP", channel: "LinkedIn", format: "Beitrag", title: "Warum Ergonomie kein Luxus für Teams ist", status: "Bereit" },
  { date: "12", month: "SEP", channel: "Pinterest", format: "Pin", title: "Schreibtisch-Setup: klar, ruhig, beweglich", status: "Entwurf" },
];

const metrics = [
  ["12.480", "Website-Besuche"],
  ["2,5 %", "Besuch → Anfrage"],
  ["312", "qualifizierte Anfragen"],
  ["78", "neue Kunden"],
];

const sources = [
  { name: "Organische Suche", visits: "5.242", share: 42, leads: "134", rate: "2,6 %" },
  { name: "Instagram", visits: "2.496", share: 20, leads: "58", rate: "2,3 %" },
  { name: "LinkedIn", visits: "1.872", share: 15, leads: "61", rate: "3,3 %" },
  { name: "Direktzugriff", visits: "1.498", share: 12, leads: "37", rate: "2,5 %" },
  { name: "Sonstige Kanäle", visits: "1.372", share: 11, leads: "22", rate: "1,6 %" },
];

const campaigns = [
  { campaign: "Ergonomie-Checkliste", channel: "Instagram", clicks: "1.248", leads: "43", rate: "3,4 %", status: "Läuft" },
  { campaign: "Besser arbeiten im Team", channel: "LinkedIn", clicks: "862", leads: "39", rate: "4,5 %", status: "Läuft" },
  { campaign: "Setup-Inspiration", channel: "Pinterest", clicks: "640", leads: "14", rate: "2,2 %", status: "Auswertung" },
];

export function SocialMediaDashboard() {
  const [ideas, setIdeas] = useState(["Vorher–nachher: Monitorhöhe richtig einstellen", "30-Sekunden-Routine für entspannte Schultern", "Ein Blick in unser Frankfurter Studio"]);
  const [idea, setIdea] = useState("");
  const [notice, setNotice] = useState("");
  const [activeSection, setActiveSection] = useState("overview");
  const navigation = [["overview", "Übersicht"], ["performance", "Performance"], ["campaigns", "Kampagnen"], ["content", "Content-Kalender"], ["ideas", "Ideen-Inbox"], ["channels", "Kanäle"], ["settings", "Einstellungen"]] as const;

  function addIdea(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedIdea = idea.trim();
    if (!trimmedIdea) return;
    setIdeas((currentIdeas) => [trimmedIdea, ...currentIdeas]);
    setIdea("");
    setNotice("Idee wurde in dieser Demo-Inbox ergänzt.");
  }

  return <main className="marketing-page"><section className="marketing-hero"><div className="shell"><p className="eyebrow">Interne Demo · Social Media Marketing</p><h1>Marketing-<em>Zentrale.</em></h1><p className="lead">Ein Beispiel dafür, wie SitSanus Themen, Beiträge, Besucherquellen und Conversion Rates an einem Ort organisieren könnte.</p><p className="demo-notice">Demo-Modus: Alle Kennzahlen sind Beispieldaten. Es gibt noch keine Verbindung zu Social-Media-Konten, Analyse-Tools oder Kundendaten.</p></div></section>
    <section className="marketing-content"><div className="shell dashboard-frame"><aside className="dashboard-nav" aria-label="Navigation Marketing-Zentrale"><div className="dashboard-nav-brand"><span className="brand-mark">S</span><div><strong>SitSanus</strong><span>Marketing</span></div></div><nav>{navigation.map(([id, label]) => <button className={activeSection === id ? "active" : ""} type="button" key={id} onClick={() => setActiveSection(id)}>{label}</button>)}</nav><div className="dashboard-nav-footer"><span>Demo-Modus</span><button type="button" onClick={() => setActiveSection("settings")}>Einstellungen</button></div></aside><div className="dashboard-main" data-active={activeSection}><section className="dashboard-view dashboard-overview" data-view="overview"><div className="metric-grid">{metrics.map(([number, label]) => <article key={label}><strong>{number}</strong><span>{label}</span></article>)}</div><section className="overview-intro"><p className="eyebrow">Marketing auf einen Blick</p><h2>Was ist gerade<br /><em>wichtig?</em></h2><p>Die Demo zeigt den sinnvollsten Startpunkt: Besucherquellen verstehen, gute Inhalte planen und die Wirkung jeder Kampagne nachvollziehbar machen.</p></section></section>
      <section className="dashboard-view performance-section" data-view="performance"><div className="section-label"><div><p className="eyebrow">Marketing-Leistung · letzte 30 Tage</p><h2>Vom ersten Klick<br /><em>bis zum Kunden.</em></h2></div><p>Diese Übersicht macht sichtbar, welcher Kanal Menschen auf die Website bringt und welche davon zu Anfragen und Kunden werden.</p></div><div className="funnel-grid"><article className="marketing-panel funnel-card"><p className="eyebrow">Conversion-Funnel</p><h3>12.480 Besuche</h3><div className="funnel-step funnel-visit"><span>Website-Besuche</span><strong>12.480</strong></div><div className="funnel-step funnel-view"><span>Produktseiten angesehen</span><strong>4.115 <small>33,0 %</small></strong></div><div className="funnel-step funnel-lead"><span>Anfragen</span><strong>312 <small>2,5 %</small></strong></div><div className="funnel-step funnel-customer"><span>Kunden</span><strong>78 <small>0,6 %</small></strong></div><p className="funnel-caption">Gesamt-Conversion: 0,6 % von Website-Besuch zu Neukunde.</p></article><article className="marketing-panel source-card"><div className="panel-heading"><div><p className="eyebrow">Besucherquellen</p><h3>Woher kommen die Anfragen?</h3></div><span className="week-label">30 Tage</span></div><div className="source-list">{sources.map((source) => <article key={source.name}><div className="source-label"><strong>{source.name}</strong><span>{source.visits} Besuche · {source.leads} Anfragen · {source.rate}</span></div><div className="source-bar" aria-label={`${source.name}: ${source.share} Prozent`}><span style={{ width: `${source.share}%` }}></span></div><b>{source.share} %</b></article>)}</div></article></div></section>
      <section className="dashboard-view marketing-panel campaign-panel" data-view="campaigns"><div className="panel-heading"><div><p className="eyebrow">UTM-Kampagnen</p><h2>Was funktioniert?</h2></div><span className="week-label">Demo-Auswertung</span></div><div className="campaign-table" role="table" aria-label="Kampagnen-Leistung"><div className="campaign-head" role="row"><span>Campaign</span><span>Kanal</span><span>Klicks</span><span>Anfragen</span><span>Conversion</span><span>Status</span></div>{campaigns.map((campaign) => <div className="campaign-row" role="row" key={campaign.campaign}><strong>{campaign.campaign}</strong><span>{campaign.channel}</span><span>{campaign.clicks}</span><span>{campaign.leads}</span><span>{campaign.rate}</span><span className="campaign-status">{campaign.status}</span></div>)}</div><p className="campaign-note">Später generiert jede Kampagne automatisch einen UTM-Link. So lassen sich Beiträge, Anzeigen und Newsletter eindeutig zuordnen.</p></section>
      <section className="dashboard-view marketing-panel content-calendar" data-view="content"><div className="panel-heading"><div><p className="eyebrow">Diese Woche</p><h2>Content-Kalender</h2></div><span className="week-label">8.–14. September</span></div><div className="post-list">{scheduledPosts.map((post) => <article className="post-row" key={post.title}><time><strong>{post.date}</strong><span>{post.month}</span></time><div><p className="post-meta">{post.channel} · {post.format}</p><h3>{post.title}</h3></div><span className={`post-status status-${post.status.toLowerCase().replace(" ", "-")}`}>{post.status}</span></article>)}</div></section>
      <aside className="dashboard-view marketing-panel idea-inbox" data-view="ideas"><p className="eyebrow">Sammeln statt vergessen</p><h2>Ideen-Inbox</h2><p className="panel-intro">Kleine Beobachtungen, Fragen aus dem Alltag und neue Formate kommen hier zuerst hinein.</p><form onSubmit={addIdea}><label className="sr-only" htmlFor="social-idea">Neue Content-Idee</label><input id="social-idea" value={idea} onChange={(event) => setIdea(event.target.value)} placeholder="Neue Content-Idee …" /><button className="idea-submit" type="submit">Hinzufügen <span aria-hidden>→</span></button></form>{notice && <p className="form-notice" role="status">{notice}</p>}<ul>{ideas.map((entry) => <li key={entry}>{entry}</li>)}</ul></aside>
      <section className="dashboard-view marketing-panel channel-panel" data-view="channels"><div><p className="eyebrow">Kanal-Fokus</p><h2>Ein Thema, passend erzählt.</h2></div><div className="channel-grid"><article><span>Instagram</span><strong>Alltagsnah & visuell</strong><p>Karussells, kurze Routinen und echte Arbeitsplatz-Momente.</p></article><article><span>TikTok</span><strong>Schnell & nahbar</strong><p>Kurze Aha-Momente, einfache Setups und Mythenchecks.</p></article><article><span>LinkedIn</span><strong>Wissen für Teams</strong><p>Ergonomie, Konzentration und besseres Arbeiten im Büro.</p></article><article><span>YouTube</span><strong>Ruhig erklärt</strong><p>Kurze Anleitungen für Sitzhöhe, Bildschirm und Bewegung.</p></article><article><span>Facebook</span><strong>Im Gespräch bleiben</strong><p>Neuigkeiten, Angebote und Beiträge für die Community.</p></article><article><span>Pinterest</span><strong>Inspiration zum Speichern</strong><p>Setups, Checklisten und klare Einrichtungs-Ideen.</p></article><article><span>X</span><strong>Kurz eingeordnet</strong><p>Knackige Gedanken, Links und aktuelle Fachimpulse.</p></article></div></section>
      <section className="dashboard-view marketing-next" data-view="settings"><p className="eyebrow">Sinnvoller nächster Ausbauschritt</p><h2>Erst planen. Dann messen.</h2><p>Später könnte diese Zentrale einen Freigabeprozess, UTM-Links und echte Kanal-Kennzahlen erhalten – erst wenn die Social-Media-Kanäle stehen.</p></section></div></div></section></main>;
}
