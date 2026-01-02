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
    title: "Site E-commerce --BETA--",
    desc: "Angular + Node.js (Express) sur un VPS OVH Ubuntu, servi par Nginx, paiement PayPal, livraison numérique sécurisée.",
    tags: ["Angular", "Node.js", "Ubuntu", "Nginx"],
		thumb: "assets/projects/bille.png",

    links: [
      { label: "VOIR", href: "https://billeetpapier.art" },
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
    title: "Isostar",
    desc: "Conception et intégration",
    tags: ["UI", "Design", "Prestashop", "Front-end"],
		thumb: "assets/projects/isostar.jpg",

    links: [
      { label: "VOIR", href: "https://www.isostar.fr/" },
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
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

function closeNav(){
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Ferme le menu quand on clique un lien
nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeNav);
});

// Ferme si clic en dehors
document.addEventListener("click", (e) => {
  if (!nav.classList.contains("is-open")) return;
  const target = e.target;
  if (target instanceof Element) {
    if (!nav.contains(target) && target !== navToggle) closeNav();
  }
});

// Ferme avec Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});
