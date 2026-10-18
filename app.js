const PIX_KEY = "018.249.148-06";

const PROJECTS = [
  { kind: "game", url: "https://14yearoldcoding.neocities.org/", host: "neocities.org", tags: ["HTML", "JS", "Arcade"], name: { es: "Supra Meirro", pt: "Supra Meirro", en: "Supra Meirro" }, blurb: { es: "Arcade de plataformas clásico. Primeros niveles publicados en Neocities.", pt: "Arcade de plataformas clássico. Primeiros níveis publicados no Neocities.", en: "Classic platform arcade. Early levels published on Neocities." } },
  { kind: "game", url: "https://the6warriors.netlify.app/", host: "netlify.app", tags: ["HTML", "JS", "Survival"], name: { es: "The 6 Warriors", pt: "The 6 Warriors", en: "The 6 Warriors" }, blurb: { es: "Supervivencia con seis guerreros, oleadas, bosses, XP y habilidades.", pt: "Sobrevivência com seis guerreiros, ondas, chefes, XP e habilidades.", en: "Survival with six warriors, waves, bosses, XP and abilities." } },
  { kind: "game", url: "https://goofyboxies.netlify.app/", host: "netlify.app", tags: ["HTML", "JS", "Collector"], name: { es: "Goofy Boxes", pt: "Goofy Boxes", en: "Goofy Boxes" }, blurb: { es: "Abre cajas, colecciona fandoms, sube de nivel y desbloquea logros.", pt: "Abra caixas, colecione fandoms, suba de nível e desbloqueie conquistas.", en: "Open boxes, collect fandoms, level up and unlock achievements." } },
  { kind: "game", url: "https://customclicker4u.netlify.app/", host: "netlify.app", tags: ["HTML", "JS", "Idle"], name: { es: "Custom Clicker", pt: "Custom Clicker", en: "Custom Clicker" }, blurb: { es: "Clicker con empleados, producción pasiva y tienda de mejoras.", pt: "Clicker com funcionários, produção passiva e loja de melhorias.", en: "Clicker with staff, idle production and an upgrade shop." } },
  { kind: "site", url: "https://2024tccchanel.my.canva.site/comite", host: "canva.site", tags: ["Canva", "Web"], name: { es: "Comitê Oficial", pt: "Comitê Oficial", en: "Official Committee" }, blurb: { es: "Sitio del comité escolar: información, identidad y anuncios.", pt: "Site do comitê escolar: informações, identidade e avisos.", en: "School committee site: info, identity and announcements." } },
  { kind: "game", url: "https://tomatosmash.netlify.app/", host: "netlify.app", tags: ["HTML", "JS", "Arcade"], name: { es: "Tomato Smash", pt: "Tomato Smash", en: "Tomato Smash" }, blurb: { es: "Arcade rápido: aplasta tomates, encadena combos, evita fallos.", pt: "Arcade rápido: esmague tomates, encadeie combos, evite erros.", en: "Fast arcade: smash tomatoes, chain combos, don't miss." } },
  { kind: "game", url: "https://vitalsmash.netlify.app", host: "netlify.app", tags: ["HTML", "Canvas", "ODS 3"], name: { es: "Vital Smash", pt: "Vital Smash", en: "Vital Smash" }, blurb: { es: "ODS 3 Salud: aplasta fruta fresca y evita la comida prohibida.", pt: "ODS 3 Saúde: esmague fruta fresca e evite a comida proibida.", en: "SDG 3 Health: smash fresh fruit, skip the junk food." } },
  { kind: "game", url: "https://vitalsmash.netlify.app", host: "netlify.app", tags: ["HTML", "Canvas", "Multi"], name: { es: "Vital Smash 4P", pt: "Vital Smash 4P", en: "Vital Smash 4P" }, blurb: { es: "Vital Smash para hasta cuatro jugadores en la misma partida.", pt: "Vital Smash para até quatro jogadores na mesma partida.", en: "Vital Smash for up to four players in one session." } },
  { kind: "game", url: "https://mostra9c2026.netlify.app/", host: "netlify.app", tags: ["HTML", "Canvas", "Sports"], name: { es: "Resenha Fut 9C", pt: "Resenha Fut 9C", en: "Resenha Fut 9C" }, blurb: { es: "Fútbol arcade caótico: vs IA, cooperativo local e ítems locos.", pt: "Futebol arcade caótico: vs IA, cooperativo local e itens malucos.", en: "Chaotic arcade football: vs AI, local co-op and wild items." } },
  { kind: "game", url: "https://felipecostudios.github.io/NeonBossRush/", host: "github.io", tags: ["Three.js", "JS", "3D"], name: { es: "Neon Boss Rush", pt: "Neon Boss Rush", en: "Neon Boss Rush" }, blurb: { es: "Boss rush 3D con Three.js: cinco jefes, cuatro héroes y power-ups.", pt: "Boss rush 3D com Three.js: cinco chefes, quatro heróis e power-ups.", en: "3D boss rush with Three.js: five bosses, four heroes, power-ups." } },
  { kind: "code", url: "https://github.com/FeliForge", host: "github.com", tags: ["Git", "Open source"], name: { es: "FeliForge Studios", pt: "FeliForge Studios", en: "FeliForge Studios" }, blurb: { es: "Perfil de GitHub con el código abierto de los juegos y sitios.", pt: "Perfil no GitHub com o código aberto dos jogos e sites.", en: "GitHub profile with the open source for the games and sites." } },
  { kind: "site", url: "https://github.com/FeliForge/FeliForge-Studios", host: "github.com", tags: ["HTML", "CSS", "JS"], name: { es: "FeliForge Studios", pt: "FeliForge Studios", en: "FeliForge Studios" }, blurb: { es: "Este portfolio: editor, 12 proyectos, donaciones PIX y sin anuncios.", pt: "Este portfólio: editor, 12 projetos, doações PIX e sem anúncios.", en: "This portfolio: editor UI, 12 projects, PIX tips, no ads." } },
];

const SKILLS = [
  { mod: "HTML5", level: 4, comment: { es: "estructura y semántica", pt: "estrutura e semântica", en: "structure and semantics" } },
  { mod: "CSS", level: 3, comment: { es: "diseño y estilos", pt: "design e estilos", en: "layout and style" } },
  { mod: "JavaScript", level: 4, comment: { es: "interactividad, DOM, lógica", pt: "interatividade, DOM, lógica", en: "interactivity, DOM, logic" } },
  { mod: "Git", level: 2, comment: { es: "control de versiones", pt: "controle de versão", en: "version control" } },
  { mod: "UX-UI", level: 3, comment: { es: "experiencia sin anuncios ni ruido", pt: "experiência sem anúncios nem ruído", en: "experience without ads or noise" } },
];

const COPY = {
  es: {
    comment: "perfil de desarrollador",
    tagline: 'Tengo 14 años y aprendo a programar sitios y aplicaciones web con <strong>HTML</strong> y <strong>JavaScript</strong>. Mi meta es construir proyectos <strong>sin anuncios</strong> que se sostengan solos y, con el tiempo, convertirme en un desarrollador de apps reconocido.',
    ctaP: "Ver proyectos", ctaD: "Donar",
    sitios: "sitios", sobre: "sobre-mi", skills: "habilidades", goals: "objetivos", donate: "donaciones",
    filters: { all: "todos", game: "juegos", site: "sitios", code: "código" },
    about: [
      "Empecé a programar por curiosidad: quería entender cómo funcionaban las páginas que usaba todos los días. Ahora paso mi tiempo libre escribiendo HTML y JavaScript, armando interfaces, probando ideas y aprendiendo de cada error.",
      "Me interesa especialmente el front-end: cómo se ve, cómo se siente y cómo responde un sitio cuando alguien lo usa. Cada proyecto nuevo es una excusa para aprender algo que todavía no sé.",
      "No me gustan los sitios llenos de anuncios que interrumpen la experiencia. Por eso busco formas honestas de monetizar — donaciones, funciones premium, colaboraciones — sin llenar mis páginas de banners.",
    ],
    quoteLead: "console.log(objetivo);",
    quote: "Construir productos que la gente quiera usar, no que tenga que soportar.",
    roadmap: [
      { stage: "Ahora", title: "Aprender construyendo", body: "Practicar HTML y JavaScript todos los días, publicar sitios propios y aprender de cada proyecto terminado.", active: true },
      { stage: "Siguiente", title: "Monetizar sin anuncios", body: "Encontrar formas honestas de ganar dinero con mis sitios — donaciones, funciones premium, colaboraciones — sin banners que arruinen la experiencia." },
      { stage: "Meta", title: "Ser un desarrollador de apps reconocido", body: "Crear aplicaciones que la gente use y recomiende, y construir una carrera como desarrollador respetado en la comunidad." },
    ],
    pixTitle: "Apóyame con PIX", pixHint: "Elige un monto, escanea el QR o copia la clave.", pixCopy: "Copiar clave PIX", pixCopied: "PIX copiado",
    footer: "hecho por Felipe · sin anuncios, por elección",
  },
  pt: {
    comment: "perfil de desenvolvedor",
    tagline: 'Tenho 14 anos e estou aprendendo a programar sites e aplicativos web com <strong>HTML</strong> e <strong>JavaScript</strong>. Minha meta é construir projetos <strong>sem anúncios</strong> que se sustentem sozinhos e, com o tempo, me tornar um desenvolvedor de apps reconhecido.',
    ctaP: "Ver projetos", ctaD: "Doar",
    sitios: "projetos", sobre: "sobre-mim", skills: "habilidades", goals: "objetivos", donate: "doacoes",
    filters: { all: "todos", game: "jogos", site: "sites", code: "código" },
    about: [
      "Comecei a programar por curiosidade: queria entender como funcionavam as páginas que eu usava todo dia. Agora passo meu tempo livre escrevendo HTML e JavaScript, montando interfaces, testando ideias e aprendendo com cada erro.",
      "Me interessa especialmente o front-end: como um site aparece, como se sente e como responde quando alguém usa. Cada projeto novo é uma desculpa para aprender o que eu ainda não sei.",
      "Não gosto de sites cheios de anúncios que interrompem a experiência. Por isso busco formas honestas de monetizar — doações, funções premium, colaborações — sem encher as páginas de banners.",
    ],
    quoteLead: "console.log(objetivo);",
    quote: "Construir produtos que as pessoas queiram usar, não que tenham de aguentar.",
    roadmap: [
      { stage: "Agora", title: "Aprender construindo", body: "Praticar HTML e JavaScript todos os dias, publicar sites próprios e aprender com cada projeto terminado.", active: true },
      { stage: "Seguinte", title: "Monetizar sem anúncios", body: "Encontrar formas honestas de ganhar com os sites — doações, funções premium, colaborações — sem banners que arruínem a experiência." },
      { stage: "Meta", title: "Ser um desenvolvedor de apps reconhecido", body: "Criar aplicativos que as pessoas usem e recomendem, e construir uma carreira como desenvolvedor respeitado." },
    ],
    pixTitle: "Me apoie com PIX", pixHint: "Escolha um valor, escaneie o QR ou copie a chave.", pixCopy: "Copiar chave PIX", pixCopied: "PIX copiado",
    footer: "feito por Felipe · sem anúncios, por escolha",
  },
  en: {
    comment: "developer profile",
    tagline: "I'm 14 and I'm learning to build websites and web apps with <strong>HTML</strong> and <strong>JavaScript</strong>. My goal is to ship <strong>ad-free</strong> projects that can stand on their own — and, in time, become a recognized app developer.",
    ctaP: "See projects", ctaD: "Donate",
    sitios: "sites", sobre: "about", skills: "skills", goals: "goals", donate: "donate",
    filters: { all: "all", game: "games", site: "sites", code: "code" },
    about: [
      "I started coding out of curiosity: I wanted to understand how the pages I used every day actually worked. Now I spend free time writing HTML and JavaScript, building interfaces, trying ideas, and learning from every mistake.",
      "I'm especially drawn to front-end: how a site looks, how it feels, and how it responds when someone uses it. Each new project is an excuse to learn something I don't know yet.",
      "I don't like sites stuffed with ads that interrupt the experience. That's why I'm looking for honest ways to monetize — donations, premium features, collabs — without filling pages with banners.",
    ],
    quoteLead: "console.log(goal);",
    quote: "Build products people want to use, not ones they have to put up with.",
    roadmap: [
      { stage: "Now", title: "Learn by shipping", body: "Practice HTML and JavaScript every day, publish my own sites, and learn from every finished project.", active: true },
      { stage: "Next", title: "Monetize without ads", body: "Find honest ways to earn from my sites — donations, premium features, collabs — without banners that ruin the experience." },
      { stage: "Goal", title: "Become a recognized app developer", body: "Create apps people use and recommend, and build a career as a respected developer in the community." },
    ],
    pixTitle: "Support with PIX", pixHint: "Pick an amount, scan the QR, or copy the key.", pixCopy: "Copy PIX key", pixCopied: "PIX copied",
    footer: "made by Felipe · ad-free, on purpose",
  },
};

let lang = localStorage.getItem("felipe-lang") || "es";
let filter = "all";

function setHead(id, title, ext) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `${title}<span class="ext">.${ext}</span>`;
}

function render(langId) {
  lang = langId;
  localStorage.setItem("felipe-lang", lang);
  document.documentElement.lang = lang === "pt" ? "pt" : lang;
  const t = COPY[lang];

  document.getElementById("heroComment").textContent = `<!-- ${t.comment} -->`;
  document.getElementById("heroTagline").innerHTML = t.tagline;
  document.getElementById("ctaProjects").textContent = t.ctaP;
  document.getElementById("ctaDonate").textContent = t.ctaD;
  setHead("secSitios", t.sitios, "json");
  setHead("secSobre", t.sobre, "js");
  setHead("secSkills", t.skills, "css");
  setHead("secGoals", t.goals, "md");
  setHead("secDonate", t.donate, "json");
  document.getElementById("aboutCopy").innerHTML = t.about.map((p) => `<p>${p}</p>`).join("");
  document.getElementById("quoteLead").textContent = t.quoteLead;
  document.getElementById("quoteBody").textContent = `“${t.quote}”`;
  document.getElementById("pixTitle").textContent = t.pixTitle;
  document.getElementById("pixHint").textContent = t.pixHint;
  document.getElementById("copyPix").textContent = t.pixCopy;
  document.getElementById("footer").textContent = t.footer;

  document.getElementById("filters").innerHTML = ["all", "game", "site", "code"]
    .map((k) => `<button class="chip${filter === k ? " active" : ""}" data-filter="${k}">${t.filters[k]}</button>`)
    .join("");

  document.getElementById("skills").innerHTML = SKILLS.map((s) => {
    const bars = Array.from({ length: 5 }, (_, i) => `<span class="${i < s.level ? "on" : ""}"></span>`).join("");
    return `<div class="imp"><span class="kw">import</span> <span class="str">${s.mod}</span> <span class="from">// ${s.comment[lang]}</span><div class="lvl">${bars}</div></div>`;
  }).join("");

  document.getElementById("roadmap").innerHTML = t.roadmap.map((step) => `
    <div class="rm-step${step.active ? " active" : ""}">
      <div class="stage">${step.stage}</div>
      <h3>${step.title}</h3>
      <p>${step.body}</p>
    </div>`).join("");

  renderProjects();
  document.querySelectorAll(".langs button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
}

function renderProjects() {
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.kind === filter);
  document.getElementById("sitesGrid").innerHTML = list.map((p) => {
    const i = String(PROJECTS.indexOf(p) + 1).padStart(2, "0");
    const tags = p.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    return `<a class="site-link" href="${p.url}" target="_blank" rel="noopener">
      <span class="sl-index">${i}</span>
      <div>
        <div class="sl-name">${p.name[lang]} <span class="sl-arrow">↗</span></div>
        <div class="sl-blurb">${p.blurb[lang]}</div>
        <div class="sl-meta">${tags}<span class="sl-host">${p.host}</span></div>
      </div>
    </a>`;
  }).join("");
}

document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  filter = btn.dataset.filter;
  render(lang);
});

document.getElementById("langs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-lang]");
  if (btn) render(btn.dataset.lang);
});

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(tab.dataset.target).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const sections = [...tabs].map((t) => document.querySelector(t.dataset.target));
const setActive = () => {
  let current = sections[0];
  const pos = window.scrollY + 100;
  sections.forEach((sec) => { if (sec && sec.offsetTop <= pos) current = sec; });
  tabs.forEach((t) => t.classList.toggle("active", document.querySelector(t.dataset.target) === current));
};
document.addEventListener("scroll", setActive, { passive: true });

const nameEl = document.getElementById("typedName");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && nameEl) {
  const full = "Felipe";
  nameEl.textContent = "";
  nameEl.classList.add("typed");
  let i = 0;
  const type = () => {
    if (i <= full.length) {
      nameEl.textContent = full.slice(0, i);
      i += 1;
      setTimeout(type, 90);
    } else nameEl.classList.add("done");
  };
  setTimeout(type, 300);
}

document.querySelectorAll(".pix-amount").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pix-amount").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("pixImage").src = btn.dataset.src;
  });
});

document.getElementById("copyPix").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PIX_KEY);
    const t = COPY[lang];
    const btn = document.getElementById("copyPix");
    btn.textContent = t.pixCopied;
    setTimeout(() => { btn.textContent = t.pixCopy; }, 1800);
  } catch (_) {}
});

render(lang);
setActive();
