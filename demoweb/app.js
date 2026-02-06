const ITEMS_PER_ROW = 9;
const CARD_WIDTH = 164;

const movieData = {
  trending: [
    { title: "Bố Già", image: "https://baoquocte.vn/stores/news_dataimages/kimchung/032021/13/15/phim-bo-gia-cua-tran-thanh-hay-nhung-chua-phai-tuyet-tac.jpg" },
    { title: "Cô Dâu Hào Môn", image: "https://tse2.mm.bing.net/th/id/OIP.Zp1YLyuFh3sr0HYHAgkh0QHaJQ" },
    { title: "Mai", image: "https://www.elle.vn/wp-content/uploads/2023/12/06/560540/poster-Mai-scaled.jpg" },
    { title: "Nhà Bà Nữ", image: "https://cinema.momocdn.net/img/90230048152521353-kOvKHespgDEfzbYpq1cas2i8EZn.jpg" },
    { title: "Mắt Biếc", image: "https://tse1.mm.bing.net/th/id/OIP.p_1L_x9k9-fJt53vIOyFKQHaKl" },
    { title: "Tiệc Trăng Máu", image: "https://i.ibb.co/p4qnJJd/tiec-trang-mau-1-4449-1603284060.jpg" },
    { title: "Mối Tình Giáng Sinh", image: "https://rophimz.io/wp-content/uploads/2025/11/moi-tinh-giang-sinh-1602-thumb.webp" },
    { title: "Những Kẻ Lạc Loài", image: "https://thegioiblu-ray.com/resources/200ceb26807d6bf99fd6f4f0d1ca54d4/1%202D25G/B5050N.JPG" },
    { title: "Những Cô Gái Khi Yêu", image: "https://static2.vieon.vn/vieplay-image/thumbnail_big_v4/2025/10/31/ca9z5g8e_lovebully_1920x10805715e22ec3cc4118109dfdc7cad16390_1267_712.webp" },
    { title: "Gấu Béo Tung Chưởng", image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/_/g_u_b_o_tung_ch_ng_payoff_poster_kt_facebook__kc_26.04.2024_1.jpg" },
    { title: "Hai Muối", image: "https://rophimz.io/wp-content/uploads/2025/11/hai-muoi-19103-thumb.webp" },
    { title: "Ngôi Nhà Bươm Bướm", image: "https://channel.mediacdn.vn/2019/11/30/photo-1-15750501360741597119292.jpg" },
    { title: "Mặt Trời, Con Ở Đâu?", image: "https://static.vieon.vn/vieplay-image/poster_v4/2021/02/02/wmoineen_660x946-mattroiconodau.jpg" },
    { title: "Tiếng Chuông Tình Yêu", image: "https://www.elle.vn/wp-content/uploads/2021/03/18/427625/phim-han-quoc-love-alarm.jpg" },
    { title: "Gọi Hồn Quỷ Dữ", image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/p/o/poster_payoff_ghqd_1.jpg" }
  ],
  anime: [
  {
    title: "Làm Giàu Với Ma: Cuộc Chiến Hột Xoàn",
    image: "https://rophimz.io/wp-content/uploads/2025/12/lam-giau-voi-ma-2-cuoc-chien-hot-xoan-21390-thumb.webp"
  },
  {
    title: "Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ",
    image: "https://upload.wikimedia.org/wikipedia/vi/9/98/Hobbs_and_Shaw_VN_poster.jpg"
  },
  {
    title: "Quá Nhanh Quá Nguy Hiểm 6",
    image: "https://upload.wikimedia.org/wikipedia/vi/9/98/Hobbs_and_Shaw_VN_poster.jpg"
  },
  {
    title: "Truy Sát",
    image: "https://rophimz.io/wp-content/uploads/2025/11/truy-sat-18727-thumb.webp"
  },
  {
    title: "Đại Chiến Quái Thú: Thiên Hà Ultra",
    image: "https://rophimz.io/wp-content/uploads/2025/12/ultraman-blazar-dai-chien-quai-thu-tokyo-23901-thumb.webp"
  },
  {
    title: "Kẻ Cắp Mặt Trăng 3",
    image: "https://rophimz.io/wp-content/uploads/2025/11/ke-trom-mat-trang-4-7817-thumb.webp"
  },
  {
    title: "Thám Tử Kiên: Kỳ Án Không Đầu",
    image: "https://rophimz.io/wp-content/uploads/2025/11/tham-tu-kien-ky-an-khong-dau-1750-thumb.webp"
  },
  {
    title: "Bộ Tứ Báo Thủ",
    image: "https://rophimz.io/wp-content/uploads/2025/11/bo-tu-bao-thu-15846-thumb.webp"
  },
  {
    title: "Địa Đạo",
    image: "https://media.vov.vn/sites/default/files/styles/large/public/2025-04/492450066_122200528646246595_4682928495513805502_n.jpg"
  },
  {
    title: "Nhà Gia Tiên",
    image: "https://rophimz.io/wp-content/uploads/2025/11/nha-gia-tien-13528-thumb.webp"
  },
  {
    title: "Mưa Trên Cánh Bướm",
    image: "https://rophimz.io/wp-content/uploads/2025/11/mua-tren-canh-buom-10122-thumb.webp"
  },
  {
    title: "Yêu Nhầm Bạn Thân",
    image: "https://rophimz.io/wp-content/uploads/2025/11/yeu-nham-ban-than-10943-thumb.webp"
  },
  {
    title: "Bố Già",
    image: "https://baoquocte.vn/stores/news_dataimages/kimchung/032021/13/15/phim-bo-gia-cua-tran-thanh-hay-nhung-chua-phai-tuyet-tac.jpg"
  },
  {
    title: "Cưới Ma Giải Hạn",
    image: "https://rophimz.io/wp-content/uploads/2025/11/cuoi-ma-giai-han-4852-thumb.webp"
  },
  {
    title: "Âm Dương Lộ",
    image: "https://rophimz.io/wp-content/uploads/2025/11/am-duong-lo-16911-thumb.webp"
  }
],
psychology: [
  {
    title: "Những Người Khốn Khổ",
    image: "https://rophimz.io/wp-content/uploads/2025/11/nhung-nguoi-khon-kho-3199-thumb.webp"
  },
  {
    title: "Nữ Hoàng Elizabeth: Thời Đại Hoàng Kim",
    image: "http://upload.wikimedia.org/wikipedia/en/c/c5/Elizabeth_golden_poster.jpg"
  },
  {
    title: "Downton Abbey",
    image: "https://rophimz.io/wp-content/uploads/2025/11/dinh-thu-downton-hoi-ket-huy-hoang-1299-thumb.webp"
  },
  {
    title: "Thảm Họa Đỉnh Everest",
    image: "https://i1-giaitri.vnecdn.net/2015/06/05/Int-OV-Everest-Mountain-5405-1433476578.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=dHbv4fA9XemG3uH9kwk6Ew"
  },
  {
    title: "Thám Tử Kiên: Kỳ Án Không Đầu",
    image: "https://rophimz.io/wp-content/uploads/2025/11/tham-tu-kien-ky-an-khong-dau-1750-thumb.webp"
  },
  {
    title: "Mộng Du",
    image: "https://rophimz.io/wp-content/uploads/2025/11/mong-du-19643-thumb.webp"
  },
  {
    title: "Ác Quỷ Lúc Nửa Đêm",
    image: "https://cdn.moveek.com/storage/media/cache/short/c90a73584ce233f270b5e9a624a797a3694bd7fb.jpg"
  },
  {
    title: "Exhuma: Quật Mộ Trùng Ma",
    image: "https://rophimz.io/wp-content/uploads/2025/11/quat-mo-trung-ma-16007-thumb.webp"
  },
  {
    title: "Quả Tim Máu",
    image: "https://upload.wikimedia.org/wikipedia/vi/c/c9/QuatimmauPoster.jpg"
  },
  {
    title: "Hàm Tử Thần",
    image: "https://rophimz.io/wp-content/uploads/2025/11/ham-tu-than-18207-thumb.webp"
  },
  {
  title: "Cô Dâu Đại Chiến",
  image: "https://rophimz.io/wp-content/uploads/2025/11/co-dau-dai-chien-phim-ngan-21241-thumb.webp"
},
{
  title: "100 Ngày Bên Em",
  image: "https://upload.wikimedia.org/wikipedia/vi/7/77/100_ng%C3%A0y_b%C3%AAn_em.jpg"
},
{
  title: "Chàng Trai Năm Ấy",
  image: "https://upload.wikimedia.org/wikipedia/vi/4/4f/%C3%81p_ph%C3%ADch_phim_Ch%C3%A0ng_trai_n%C4%83m_%E1%BA%A5y.jpg"
},
{
  title: "Nụ Hôn Thần Chết",
  image: "https://upload.wikimedia.org/wikipedia/vi/f/f6/Nhtc11.jpg"
},
{
  title: "Yêu Là Phải Xài Chiêu",
  image: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/11/13/18fdbfgk_yeulaphaixaichieu_660x946.jpg"
},
{
  title: "Yêu Em Bất Chấp",
  image: "https://cdn2.tuoitre.vn/thumb_w/730/2018/4/7/photo-1-1523093260873278661021.jpg"
}

],
romance: [
  {
    title: "Cô Dâu Đại Chiến",
    image: "https://rophimz.io/wp-content/uploads/2025/11/co-dau-dai-chien-phim-ngan-21241-thumb.webp"
  },
  {
    title: "100 Ngày Bên Em",
    image: "https://upload.wikimedia.org/wikipedia/vi/7/77/100_ng%C3%A0y_b%C3%AAn_em.jpg"
  },
  {
    title: "Chàng Trai Năm Ấy",
    image: "https://upload.wikimedia.org/wikipedia/vi/4/4f/%C3%81p_ph%C3%ADch_phim_Ch%C3%A0ng_trai_n%C4%83m_%E1%BA%A5y.jpg"
  },
  {
    title: "Nụ Hôn Thần Chết",
    image: "https://upload.wikimedia.org/wikipedia/vi/f/f6/Nhtc11.jpg"
  },
  {
    title: "Yêu Là Phải Xài Chiêu",
    image: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/11/13/18fdbfgk_yeulaphaixaichieu_660x946.jpg"
  },
  {
    title: "Yêu Em Bất Chấp",
    image: "https://cdn2.tuoitre.vn/thumb_w/730/2018/4/7/photo-1-1523093260873278661021.jpg"
  },
  {
    title: "Em Là Bà Nội Của Anh",
    image: "https://kenh14cdn.com/2016/bano02-1455686658737-1456131275914.jpg"
  },
  {
    title: "Tháng Năm Rực Rỡ",
    image: "https://kenh14cdn.com/2018/3/3/04-15200449393371820644383.png"
  },
  {
    title: "Anh Thầy Ngôi Sao",
    image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/a/mainposter_at_2.jpg"
  },
  {
    title: "Có Căn Nhà Nằm Nghe Nắng Mưa",
    image: "https://i.ytimg.com/vi/PlCcaw3ds-Y/maxresdefault.jpg"
  },
  {
    title: "Sài Gòn Trong Cơn Mưa",
    image: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/04/08/q95z2g1u_660x946-saigontrongconmua.jpg"
  },
  {
    title: "Em Gái Mưa: The Movie",
    image: "https://kenh14cdn.com/2017/2366892414144008919911585014874377125811873o-1511190700020.jpg"
  },
  {
    title: "Mùa Hè Đẹp Nhất",
    image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-mhdn.jpg"
  },
  {
    title: "Cô Gái Đến Từ Hôm Qua",
    image: "https://www.nxbtre.com.vn/Images/Read/nxbtre_co-gai-den-tu-hom-qua-truyen-dai-ban-dac-biet.pdf_page-1.png"
  },
  {
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    image: "https://upload.wikimedia.org/wikipedia/vi/f/f8/Toithayhoavangtrencoxanh.jpg"
  }
]
};

function renderRow(id) {
  const row = document.getElementById(id);
  const data = movieData[id];

  if (!row || !data) return;

  row.dataset.index = 0;
  row.innerHTML = "";

  data.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="title">${movie.title}</div>
    `;
    row.appendChild(card);
  });
}

const rowState = {};

function scrollRow(rowId, direction) {
  const row = document.getElementById(rowId);
  const wrapper = row.parentElement;

  const rowWidth = row.scrollWidth;          // tổng chiều dài phim
  const wrapperWidth = wrapper.clientWidth;  // màn hình đang thấy
  const maxScroll = rowWidth - wrapperWidth; // giới hạn thực

  if (!rowState[rowId]) rowState[rowId] = 0;

  const step = wrapperWidth * 0.9; // mỗi lần bấm trượt gần 1 màn hình

  rowState[rowId] += direction * step;

  // chặn biên
  if (rowState[rowId] < 0) rowState[rowId] = 0;
  if (rowState[rowId] > maxScroll) rowState[rowId] = maxScroll;

  row.style.transform = `translateX(-${rowState[rowId]}px)`;
}


renderRow("trending");
renderRow("anime");
renderRow('psychology');
renderRow('comedy');
renderRow('romance');
