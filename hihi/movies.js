
const movieData = [
  {
    type: "top10",
    title: "🔥 Top 10 phim lẻ",
    movies: [
      {
        name: "Bố Già",
        img: "https://baoquocte.vn/stores/news_dataimages/kimchung/032021/13/15/phim-bo-gia-cua-tran-thanh-hay-nhung-chua-phai-tuyet-tac.jpg",
        rating: 4.5,
        year: 2021,
        duration: "2 giờ 8 phút",
        country: "Việt Nam",
        desc: "Câu chuyện gia đình xúc động về tình cha con."
      },
      {
        name: "Mai",
        img: "https://www.elle.vn/wp-content/uploads/2023/12/06/560540/poster-Mai-scaled.jpg",
        rating: 4.6,
        year: 2024,
        duration: "2 giờ 11 phút",
        country: "Việt Nam",
        desc: "Chuyện tình nhẹ nhàng nhưng sâu lắng."
      },
      {
        name: "Nhà Bà Nữ",
        img: "https://cinema.momocdn.net/img/90230048152521353-kOvKHespgDEfzbYpq1cas2i8EZn.jpg",
        rating: 4.2,
        year: 2023,
        duration: "1 giờ 58 phút",
        country: "Việt Nam",
        desc: "Xung đột gia đình giữa các thế hệ."
      },
      {
        name: "Cô Dâu Hào Môn",
        img: "https://tse2.mm.bing.net/th/id/OIP.Zp1YLyuFh3sr0HYHAgkh0QHaJQ",
        rating: 3.7,
        year: 2024,
        duration: "1 giờ 52 phút",
        country: "Việt Nam",
        desc: "Cuộc sống xa hoa và những bí mật phía sau hào môn."
      }
    ]
  },

  {
    type: "dub",
    title: "🎙️ Phim lẻ thuyết minh - lồng tiếng",
    movies: [
      {
        name: "Mối Tình Giáng Sinh",
        img: "https://picsum.photos/300/450?1",
        rating: 4.0,
        year: 2022,
        duration: "1 giờ 45 phút",
        country: "Mỹ",
        desc: "Chuyện tình lãng mạn trong mùa Giáng Sinh."
      },
      {
        name: "Gọi Hồn Quỷ Dữ",
        img: "https://picsum.photos/300/450?2",
        rating: 3.9,
        year: 2023,
        duration: "1 giờ 38 phút",
        country: "Mỹ",
        desc: "Phim kinh dị với nghi lễ triệu hồi quỷ."
      },
      {
        name: "Tiếng Chuông Tình Yêu",
        img: "https://picsum.photos/300/450?3",
        rating: 4.3,
        year: 2019,
        duration: "1 giờ 55 phút",
        country: "Hàn Quốc",
        desc: "Lãng mạn – nhẹ nhàng – đầy cảm xúc."
      }
    ]
  }
];

const container = document.getElementById("movieContainer");

movieData.forEach((section, index) => {
  const div = document.createElement("div");
  div.className = `movie-section ${section.type}`;

  div.innerHTML = `
    <div class="section-header">
      <h2>${section.title}</h2>
      <div class="nav-btn">
        <button onclick="scrollLeft(${index})">◀</button>
        <button onclick="scrollRight(${index})">▶</button>
      </div>
    </div>

    <div class="movie-row" id="row-${index}">
      ${section.movies.map(movie => `
        <div class="movie-card">
          ${section.type === "top10" ? `<span class="badge-top">TOP</span>` : ""}
          ${section.type === "dub" ? `<span class="badge-dub">TM</span>` : ""}

          <img src="${movie.img}">

          <div class="movie-hover">
            <button class="play">▶ Xem ngay</button>
            <p class="hover-title">${movie.name}</p>
            <p class="hover-meta">⭐ ${movie.rating} • ${movie.year}</p>
            <p class="hover-meta">⏱ ${movie.duration} • 🌍 ${movie.country}</p>
            <p class="hover-desc">${movie.desc}</p>
          </div>

          <p class="movie-name">${movie.name}</p>
        </div>
      `).join("")}
    </div>
  `;

  container.appendChild(div);
});

function scrollRight(i) {
  document.getElementById(`row-${i}`).scrollLeft += 900;
}
function scrollLeft(i) {
  document.getElementById(`row-${i}`).scrollLeft -= 900;
}
