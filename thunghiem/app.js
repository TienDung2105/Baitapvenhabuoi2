const API_BASE = "https://ophim1.com/v1/api";
const IMG_BASE = "https://img.ophim.live/uploads/movies/";

/* ================== LOAD PHIM ================== */
async function loadCategory(rowId, slug, page = 1) {
  try {
    const res = await fetch(`${API_BASE}/danh-sach/${slug}?page=${page}`);
    const data = await res.json();
    renderMovies(rowId, data.data.items);
  } catch (e) {
    console.error("Lỗi API:", e);
  }
}

function renderMovies(rowId, movies) {
  const row = document.getElementById(rowId);
  row.innerHTML = "";
  row.dataset.index = 0;

  movies.forEach(movie => {
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
  });
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

  const cardWidth = cards[0].offsetWidth + 16; // 16 = gap
  row.style.transform = `translateX(-${index * cardWidth}px)`;
  row.dataset.index = index;
}

/* ================== GỌI PHIM ================== */
// Thịnh hành
loadCategory("trending", "phim-moi-cap-nhat");

// Phim lẻ
loadCategory("anime", "phim-le");

// Tâm lý
loadCategory("psychology", "tam-ly");

// Tình cảm
loadCategory("romance", "tinh-cam");
// Hành động
loadCategory("action", "hanh-dong");

// Hài hước
loadCategory("comedy", "hai-huoc");

// Kinh dị
loadCategory("horror", "kinh-di");

// Khoa học viễn tưởng
loadCategory("scifi", "khoa-hoc-vien-tuong");


