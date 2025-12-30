document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "Action RPG Web 3D (Diablo-like) — Prototype",
    desc: "Prototype web 3D : vagues d’ennemis, spawn intelligent, UI HUD, optimisation mobile/desktop.",
    tags: ["React", "Three.js / R3F", "TypeScript", "UI", "Perf"],
	thumb: "assets/projects/torg-rpg.jpg",
    links: [
      { label: "VOIR", href: "https://www.torg-aube-des-possibles.fr/game/" },
      // { label: "Démo", href: "https://..." },
      // { label: "Code", href: "https://github.com/..." },
    ],
  },
  {
    title: "Poker MTT — Interface & logique de table",
    desc: "Interface de table (6 joueurs), gestion des stacks, dealer, actions (check/call/raise/all-in).",
    tags: ["React", "TypeScript", "WebSocket", "UI"],
		thumb: "assets/projects/poker.jpg",

    links: [
      { label: "VOIR", href: "https://hibbs59.itch.io/pokerroom" },
    ],
  },
  {
    title: "Design System — Figma → Front",
    desc: "Tokens, composants, variantes, règles d’usage. Handoff propre pour intégration front.",
    tags: ["Figma", "Design System", "UI/UX"],
		thumb: "assets/projects/web.jpg",
    links: [
      { label: "VOIR", href: "https://www.figma.com/proto/bZzqJ1SDgGdkNS070lH1SL/Site-Web---Clair---Net?t=eSancAR0ZNtHFcMG-1&node-id=25-19" },
    ],
  },
  {
    title: "Sites WordPress — UI + intégration",
    desc: "Création / refonte de sites : conception UI, intégration responsive, contenus, cohérence graphique.",
    tags: ["WordPress", "HTML", "CSS", "UI"],
	   thumb: "assets/projects/dg.jpg",
    links: [
         { label: "VOIR", href: "https://www.douceurs-gourmandes.fr/" },
    ],
  },
  {
    title: "DEV Web Front-end- UI/UX — DAWAN",
    desc: "Refonte du site au sein d'une équipe en mode Agile",
    tags: ["UI/UX", "Pédagogie", "Produit"],
		   thumb: "assets/projects/dawan.png",

    links: [
     { label: "VOIR", href: "https://www.dawan.tv/" },
    ],
  },
  {
    title: "Wargame / Cartes & interfaces",
    desc: "Conception d’interfaces et supports : cartes, grilles, UI lisible pour outils de jeu / prototypes.",
    tags: ["UI", "Design", "Systèmes", "Docs"],
		thumb: "assets/projects/wargame.jfif",

    links: [
      { label: "VOIR", href: "https://fauquembergues926ad.netlify.app/" },
    ],
  },
];

function projectCard(p) {
  const links = (p.links || [])
    .map((l) => `<a href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`)
    .join("");

  const tags = (p.tags || []).map((t) => `<li>${t}</li>`).join("");

  const thumb = p.thumb
    ? `<img class="project__img" src="${p.thumb}" alt="Aperçu du projet : ${p.title}" loading="lazy" />`
    : `<div class="project__thumb"></div>`;

  return `
    <article class="project card">
      ${thumb}
      <h3>${p.title}</h3>
      <p class="muted">${p.desc}</p>
      <ul class="chips chips--small">${tags}</ul>
      <div class="project__links">${links || ""}</div>
    </article>
  `;
}


const root = document.getElementById("projects");
root.innerHTML = projects.map(projectCard).join("");
