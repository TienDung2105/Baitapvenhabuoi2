const API_BASE = "https://ophim1.com/v1/api";
const IMG_BASE = "https://img.ophim.live/uploads/movies/";

/* ===== SET CHỐNG TRÙNG PHIM TOÀN SITE ===== */
const usedMovies = new Set();

/* ================== LOAD PHIM ================== */
async function loadCategory(rowId, slug, limit = 15) {
  const row = document.getElementById(rowId);
  if (!row) return;

  row.innerHTML = "";
  row.dataset.index = 0;

  let page = 1;
  let count = 0;

  try {
    while (count < limit) {
      const res = await fetch(`${API_BASE}/danh-sach/${slug}?page=${page}`);
      const data = await res.json();
      const movies = data.data.items;

      if (!movies || movies.length === 0) break;

      for (const movie of movies) {
        if (count >= limit) break;

        // ❌ TRÙNG PHIM → BỎ
        if (usedMovies.has(movie.slug)) continue;

        usedMovies.add(movie.slug);
        count++;

        const img = movie.poster_url?.startsWith("http")
          ? movie.poster_url
          : IMG_BASE + movie.poster_url;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${img}" alt="${movie.name}">
          <div class="title">${movie.name}</div>
        `;

        row.appendChild(card);
      }

      page++;
    }
  } catch (e) {
    console.error("Lỗi API:", e);
  }
}

/* ================== SLIDER ================== */
function scrollRow(rowId, dir) {
  const row = document.getElementById(rowId);
  const cards = row.querySelectorAll(".card");
  if (!cards.length) return;

  const visible = 9;
  const total = cards.length;

  let index = Number(row.dataset.index || 0);
  index += dir * visible;

  if (index < 0) index = 0;
  if (index > total - visible) index = total - visible;

  const cardWidth = cards[0].offsetWidth + 16; // gap = 16
  row.style.transform = `translateX(-${index * cardWidth}px)`;
  row.dataset.index = index;
}

/* ================== LOAD TỪNG THỂ LOẠI ================== */
loadCategory("trending", "phim-moi-cap-nhat", 15);
loadCategory("anime", "phim-le", 15);
loadCategory("psychology", "tam-ly", 15);
loadCategory("romance", "tinh-cam", 15);
loadCategory("action", "hanh-dong", 15);
loadCategory("comedy", "hai-huoc", 15);
loadCategory("horror", "kinh-di", 15);
loadCategory("scifi", "khoa-hoc-vien-tuong", 15);

/* ============ HERO SLIDER (GIỮ NGUYÊN) ============ */
let heroIndex = 0;
let heroTimer;

function showHero(index) {
  const slides = document.querySelectorAll(".hero-slide");
  slides.forEach(s => s.classList.remove("active"));
  heroIndex = index;
  slides[heroIndex].classList.add("active");
}

function goHero(index) {
  clearInterval(heroTimer);
  showHero(index);
  autoHero();
}

function autoHero() {
  heroTimer = setInterval(() => {
    heroIndex++;
    if (heroIndex >= document.querySelectorAll(".hero-slide").length) {
      heroIndex = 0;
    }
    showHero(heroIndex);
  }, 6000);
}

autoHero();
