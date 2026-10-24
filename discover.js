/**
 * DISCOVER SYSTEM
 * Everything here is generated from GAMES in games-config.js.
 */
const DISCOVER_COPY = {
  es: { subtitle: "Encuentra tu próximo juego favorito.", gameOfDay: "GAME OF THE DAY", playNow: "PLAY NOW", play: "PLAY", difficulty: "Dificultad", updated: "UPDATED", newReleases: "NEW RELEASES", allGames: "ALL GAMES", search: "Search games...", noGamesFound: "No games found" },
  pt: { subtitle: "Encontre seu próximo jogo favorito.", gameOfDay: "JOGO DO DIA", playNow: "JOGAR AGORA", play: "JOGAR", difficulty: "Dificuldade", updated: "ATUALIZADO", newReleases: "LANÇAMENTOS", allGames: "TODOS OS JOGOS", search: "Procurar jogos...", noGamesFound: "Nenhum jogo encontrado" },
  en: { subtitle: "Find your next favorite game.", gameOfDay: "GAME OF THE DAY", playNow: "PLAY NOW", play: "PLAY", difficulty: "Difficulty", updated: "UPDATED", newReleases: "NEW RELEASES", allGames: "ALL GAMES", search: "Search games...", noGamesFound: "No games found" }
};

let discoverLang = localStorage.getItem("felipe-lang") || "es";
let discoverFilter = "all";
let discoverSearch = "";
const DISCOVER_CATEGORIES = ["all", "action", "fighting", "racing", "strategy", "adventure", "arcade", "sports", "casual", "other"];
const KNOWN_CATEGORIES = ["action", "fighting", "racing", "strategy", "adventure", "arcade", "sports", "casual", "defense", "story"];

function textFor(game, lang) { return game[lang] || game.en || game.es || ""; }
function categoryMatch(game, category) {
  if (category === "all") return true;
  const values = [String(game.genre || ""), ...(game.tags || [])].map(v => v.toLowerCase());
  if (category === "other") return !values.some(v => KNOWN_CATEGORIES.includes(v));
  return values.includes(category);
}
function gameMatchesSearch(game, query, lang) {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  return [textFor(game.name, lang), textFor(game.description, lang), game.genre, game.keywords, ...(game.tags || [])]
    .join(" ").toLowerCase().includes(q);
}
function getDiscoverGames() {
  return GAMES.filter(g => categoryMatch(g, discoverFilter) && gameMatchesSearch(g, discoverSearch, discoverLang));
}
function gameCard(game, lang) {
  const t = DISCOVER_COPY[lang];
  const stars = "★".repeat(Math.max(0, Math.min(5, game.difficulty || 1))) + "☆".repeat(5 - Math.max(0, Math.min(5, game.difficulty || 1)));
  return `<article class="game-card">
    <a class="game-image-link" href="${getGameUrl(game.id)}" aria-label="${textFor(game.name, lang)}">
      <div class="game-image-container"><img src="${game.image}" alt="Preview of ${textFor(game.name, lang)}" class="game-image" loading="lazy">${game.updated ? `<span class="game-updated-badge">${t.updated}</span>` : ""}</div>
    </a>
    <div class="game-info">
      <div class="game-card-title"><h3 class="game-name">${textFor(game.name, lang)}</h3>${game.updated ? `<span class="game-mini-updated">${t.updated}</span>` : ""}</div>
      <p class="game-genre">${game.genre}</p>
      <p class="game-description">${textFor(game.description, lang)}</p>
      <div class="game-meta"><span class="difficulty-badge" title="${t.difficulty}">${stars}</span></div>
      <div class="game-tags">${(game.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      <a href="${getGameUrl(game.id)}" class="btn game-play-btn">${t.play}</a>
    </div>
  </article>`;
}
function featuredCard(lang) {
  const t = DISCOVER_COPY[lang];
  const game = getFeaturedGame();
  if (!game) return "";
  return `<div class="featured-game"><div class="featured-content"><h2 class="featured-title">${t.gameOfDay}</h2><div class="featured-body">
    <img src="${game.image}" alt="Preview of ${textFor(game.name, lang)}" class="featured-image">
    <div class="featured-text"><div class="featured-header"><h3 class="featured-name">${textFor(game.name, lang)}</h3>${game.updated ? `<span class="badge-updated">${t.updated}</span>` : ""}</div>
    <p class="featured-genre">${game.genre} · ${(game.tags || []).slice(0,2).join(" · ")}</p><p class="featured-description">${textFor(game.description, lang)}</p>
    <div class="featured-tags">${(game.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    <a href="${getGameUrl(game.id)}" class="btn btn-large">${t.playNow}</a></div></div></div></div>`;
}
function newReleaseCards(lang) {
  return [...GAMES].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,6).map(g => gameCard(g,lang)).join("");
}
function renderDiscover() {
  const t = DISCOVER_COPY[discoverLang];
  const featured = document.getElementById("discoverFeatured");
  const games = document.getElementById("discoverGames");
  const releases = document.getElementById("newReleasesGames");
  const filters = document.getElementById("discoverFilters");
  const search = document.getElementById("gameSearch");
  if (!featured) return;
  document.getElementById("discoverSubtitle").textContent = t.subtitle;
  document.getElementById("newReleasesTitle").textContent = t.newReleases;
  document.getElementById("allGamesTitle").textContent = t.allGames;
  featured.innerHTML = featuredCard(discoverLang);
  filters.innerHTML = DISCOVER_CATEGORIES.map(cat => `<button class="chip${discoverFilter === cat ? " active" : ""}" data-discover-category="${cat}">${cat === "all" ? "ALL" : cat.toUpperCase()}</button>`).join("");
  if (search) search.placeholder = t.search;
  const visible = getDiscoverGames();
  games.innerHTML = visible.length ? visible.map(g => gameCard(g, discoverLang)).join("") : `<div class="no-results">${t.noGamesFound}</div>`;
  releases.innerHTML = newReleaseCards(discoverLang);
}

function updateDiscoverLanguage(lang) {
  discoverLang = DISCOVER_COPY[lang] ? lang : "es";
  localStorage.setItem("felipe-lang", discoverLang);
  renderDiscover();
}

function initDiscover() {
  if (!document.getElementById("discover")) return;
  const filters = document.getElementById("discoverFilters");
  const search = document.getElementById("gameSearch");
  filters.addEventListener("click", e => {
    const button = e.target.closest("[data-discover-category]");
    if (!button) return;
    discoverFilter = button.dataset.discoverCategory;
    renderDiscover();
  });
  search.addEventListener("input", e => { discoverSearch = e.target.value; renderDiscover(); });
  const langs = document.getElementById("langs");
  if (langs) langs.addEventListener("click", e => {
    const button = e.target.closest("[data-lang]");
    if (button) setTimeout(() => updateDiscoverLanguage(button.dataset.lang), 0);
  });
  renderDiscover();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDiscover);
else initDiscover();
