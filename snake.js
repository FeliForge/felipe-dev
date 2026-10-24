const SNAKE_COPY = {
  es: { play: "Jugar la víbora", title: "VÍBORA", over: "GAME OVER", win: "COMPLETA", again: "Otra vez", close: "Cerrar", hint: "Flechas o WASD", score: "PUNTOS", best: "MEJOR" },
  pt: { play: "Jogar a cobra", title: "COBRA", over: "GAME OVER", win: "COMPLETA", again: "De novo", close: "Fechar", hint: "Setas ou WASD", score: "PONTOS", best: "MELHOR" },
  en: { play: "Play Snake", title: "SNAKE", over: "GAME OVER", win: "CLEAR", again: "Again", close: "Close", hint: "Arrows or WASD", score: "SCORE", best: "BEST" },
};

const COLS = 18;
const ROWS = 18;
const DIRS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const modal = document.getElementById("snakeModal");
const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const overEl = document.getElementById("snakeOver");
const headImg = new Image();
headImg.src = "assets/feliforge-mark.png";

let snake = [];
let direction = DIRS.right;
let queue = [];
let food = { x: 12, y: 8 };
let score = 0;
let best = Number(localStorage.getItem("felipe-snake-best") || 0);
let alive = true;
let won = false;
let running = false;
let acc = 0;
let lastTime = 0;
let raf = 0;

function snakeLang() {
  const stored = localStorage.getItem("felipe-lang") || document.documentElement.lang || "es";
  return SNAKE_COPY[stored] ? stored : "es";
}

function applySnakeCopy() {
  const t = SNAKE_COPY[snakeLang()];
  const open = document.getElementById("openSnake");
  if (open) open.setAttribute("aria-label", t.play);
  document.getElementById("snakeTitle").textContent = t.title;
  document.getElementById("snakeScoreLabel").textContent = t.score;
  document.getElementById("snakeBestLabel").textContent = t.best;
  document.getElementById("snakeHint").textContent = t.hint;
  document.getElementById("snakeClose").textContent = t.close;
  document.getElementById("snakeRestart").textContent = t.again;
  document.getElementById("snakeBest").textContent = String(best).padStart(3, "0");
}

function resetGame() {
  snake = [
    { x: 6, y: 9 },
    { x: 5, y: 9 },
    { x: 4, y: 9 },
  ];
  direction = DIRS.right;
  queue = [];
  score = 0;
  alive = true;
  won = false;
  acc = 0;
  overEl.hidden = true;
  spawnFood();
  paintScore();
}

function paintScore() {
  document.getElementById("snakeScore").textContent = String(score).padStart(3, "0");
  if (score > best) {
    best = score;
    localStorage.setItem("felipe-snake-best", String(best));
  }
  document.getElementById("snakeBest").textContent = String(best).padStart(3, "0");
}

function spawnFood() {
  const free = [];
  for (let y = 0; y < ROWS; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      if (!snake.some((part) => part.x === x && part.y === y)) free.push({ x, y });
    }
  }
  if (!free.length) {
    won = true;
    alive = false;
    finish();
    return;
  }
  food = free[Math.floor(Math.random() * free.length)];
}

function stepMs() {
  return Math.max(72, 168 - score * 6);
}

function setDir(next) {
  if (!alive || !running) return;
  const last = queue.length ? queue[queue.length - 1] : direction;
  if (next.x === last.x && next.y === last.y) return;
  if (next.x === -last.x && next.y === -last.y) return;
  if (queue.length < 3) queue.push(next);
}

function step() {
  if (!alive) return;
  const next = queue.shift();
  if (next) direction = next;
  const head = snake[0];
  const nx = head.x + direction.x;
  const ny = head.y + direction.y;
  if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) {
    alive = false;
    finish();
    return;
  }
  const eating = food && nx === food.x && ny === food.y;
  if (!eating) snake.pop();
  if (snake.some((part) => part.x === nx && part.y === ny)) {
    alive = false;
    finish();
    return;
  }
  snake.unshift({ x: nx, y: ny });
  if (eating) {
    score += 1;
    paintScore();
    spawnFood();
  }
}

function finish() {
  const t = SNAKE_COPY[snakeLang()];
  document.getElementById("snakeOverTitle").textContent = won ? t.win : t.over;
  document.getElementById("snakeFinal").textContent = `${t.score} ${String(score).padStart(3, "0")}`;
  overEl.hidden = false;
}

function cellSize() {
  return canvas.width / COLS;
}

function roundRect(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function headAngle() {
  if (direction.x === 1) return Math.PI / 2;
  if (direction.x === -1) return -Math.PI / 2;
  if (direction.y === 1) return Math.PI;
  return 0;
}

function draw() {
  const size = cellSize();
  ctx.fillStyle = "#9bbc0f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(15,56,15,0.16)";
  ctx.lineWidth = Math.max(1, size * 0.04);
  ctx.beginPath();
  for (let i = 1; i < COLS; i += 1) {
    ctx.moveTo(i * size, 0);
    ctx.lineTo(i * size, canvas.height);
  }
  for (let i = 1; i < ROWS; i += 1) {
    ctx.moveTo(0, i * size);
    ctx.lineTo(canvas.width, i * size);
  }
  ctx.stroke();

  if (food && alive) {
    const pad = size * 0.22;
    ctx.fillStyle = "#ff5a1f";
    roundRect(food.x * size + pad, food.y * size + pad, size - pad * 2, size - pad * 2, size * 0.12);
    ctx.fill();
    ctx.fillStyle = "#fff4ea";
    ctx.fillRect(food.x * size + size * 0.42, food.y * size + size * 0.42, size * 0.16, size * 0.16);
  }

  snake.forEach((part, index) => {
    if (index === 0) return;
    const inset = size * (index === snake.length - 1 ? 0.22 : 0.14);
    ctx.fillStyle = "#0f380f";
    roundRect(part.x * size + inset, part.y * size + inset, size - inset * 2, size - inset * 2, size * 0.18);
    ctx.fill();
  });

  const head = snake[0];
  ctx.save();
  ctx.translate(head.x * size + size / 2, head.y * size + size / 2);
  ctx.rotate(headAngle());
  const mark = size * 1.72;
  if (headImg.complete && headImg.naturalWidth) {
    ctx.drawImage(headImg, -mark / 2, -mark / 2, mark, mark);
  } else {
    ctx.fillStyle = "#f4f1ea";
    roundRect(-size * 0.42, -size * 0.42, size * 0.84, size * 0.84, size * 0.16);
    ctx.fill();
  }
  ctx.restore();
}

function frame(now) {
  if (!running) return;
  if (!lastTime) lastTime = now;
  const dt = Math.min(80, now - lastTime);
  lastTime = now;
  if (alive) {
    acc += dt;
    const pace = stepMs();
    while (acc >= pace && alive) {
      acc -= pace;
      step();
    }
  }
  draw();
  raf = requestAnimationFrame(frame);
}

function fitCanvas() {
  const lcd = canvas.parentElement;
  const size = Math.min(lcd.clientWidth - 16, 440);
  const px = Math.max(240, Math.floor(size));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = `${px}px`;
  canvas.style.height = `${px}px`;
  canvas.width = Math.floor(px * dpr);
  canvas.height = Math.floor(px * dpr);
  draw();
}

function openSnake() {
  applySnakeCopy();
  resetGame();
  modal.hidden = false;
  document.body.classList.add("snake-lock");
  running = true;
  lastTime = 0;
  cancelAnimationFrame(raf);
  fitCanvas();
  raf = requestAnimationFrame(frame);
}

function closeSnake() {
  running = false;
  cancelAnimationFrame(raf);
  modal.hidden = true;
  document.body.classList.remove("snake-lock");
}

document.getElementById("openSnake").addEventListener("click", openSnake);
document.getElementById("snakeClose").addEventListener("click", closeSnake);
document.getElementById("snakeRestart").addEventListener("click", () => {
  resetGame();
  lastTime = 0;
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeSnake();
});

document.querySelectorAll(".dpad button").forEach((button) => {
  const go = (event) => {
    event.preventDefault();
    setDir(DIRS[button.dataset.dir]);
  };
  button.addEventListener("pointerdown", go);
});

const KEYS = {
  ArrowUp: DIRS.up,
  ArrowDown: DIRS.down,
  ArrowLeft: DIRS.left,
  ArrowRight: DIRS.right,
  w: DIRS.up,
  W: DIRS.up,
  s: DIRS.down,
  S: DIRS.down,
  a: DIRS.left,
  A: DIRS.left,
  d: DIRS.right,
  D: DIRS.right,
};

window.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") {
    closeSnake();
    return;
  }
  const next = KEYS[event.key];
  if (!next) return;
  event.preventDefault();
  if (!alive) return;
  setDir(next);
});

let swipeX = 0;
let swipeY = 0;
canvas.addEventListener("pointerdown", (event) => {
  swipeX = event.clientX;
  swipeY = event.clientY;
});
canvas.addEventListener("pointerup", (event) => {
  const dx = event.clientX - swipeX;
  const dy = event.clientY - swipeY;
  if (Math.hypot(dx, dy) < 24) return;
  if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? DIRS.right : DIRS.left);
  else setDir(dy > 0 ? DIRS.down : DIRS.up);
});

window.addEventListener("resize", () => {
  if (!modal.hidden) fitCanvas();
});

const langBar = document.getElementById("langs");
if (langBar) langBar.addEventListener("click", () => setTimeout(applySnakeCopy, 0));

applySnakeCopy();
headImg.addEventListener("load", () => {
  if (!modal.hidden) draw();
});
