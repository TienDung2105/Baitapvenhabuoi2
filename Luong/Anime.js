
const films = [
    { title: "Ngự Tứ Tiểu Ngỗ Tác (Phần 2)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5ymumanexVA7q73QuDnYBNcBaIg_16HT_Q&s" },
    { title: "SPONGEBOB", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOskdpUWB8i6638ul5TSPIUplFtXmEOi4rw&s" },
    { title: "Dark Hole", poster: "https://dep.com.vn/wp-content/uploads/2021/05/dark-hole.jpeg" },
    { title: "Pháo Đài Homestead (Phần 1)", poster: "https://kilala.vn/data/upload/article/8526/phim-kimetsu-no-yaiba-mugen-ressha-hen.jpg" },
    { title: "The Gues", poster: "https://dep.com.vn/wp-content/uploads/2021/05/Wb2pWf.jpg" },
    { title: "Thám Tửng Nừng Danh Conan", poster: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202507/11835_203_100003.jpg" },
    { title: "Kiểm Toán Viên", poster: "https://thegioidienanh.vn/stores/news_dataimages/hath/092022/26/10/4954_Kiem-toan-vien_poster.jpg?rt=20220926105134" },
    { title: "Không Tặc", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt7vCE0IlYhHYHN5aqlKTdPK_XN36hRgrEw&s" },
    { title: "Hijack", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAuxytyHM4r5kLN4WPAAms4w6MgdPNExtDg&s" },
    { title: "ZotoPia (Phần 2)", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mW0SAfJyYZyIxsyb8mF7XgG1dhliZmMXGg&s" },
    { title: "Time", poster: "https://dep.com.vn/wp-content/uploads/2021/05/0jj4e_4f.jpg" },
    { title: "Season AHACK OR TITAN", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6e9VkoStqcl0UXueGoDz-Ks5hhdNMswuwQ&s" },
    { title: "Chú Thuật Hồi Chiến", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxHftNMUWTn_RN-djq838G4h7XtG6tiCQiVB-t_9L7g&s" },
    { title: "Black (Thần Chết)", poster: "https://dep.com.vn/wp-content/uploads/2021/05/Black_Korean_Drama-P1.jpg" },
    { title: "Doremon Bản Giao Hưởng Địa Cầu", poster: "https://cdn2.tuoitre.vn/471584752817336320/2024/5/23/ban-giao-huong-dia-cau-1716449425924786270172.jpg" },
    { title: "Người Phục Tùng", poster: "https://kilala.vn/data/upload/article/8526/phim-kimetsu-no-yaiba-mugen-ressha-hen.jpg" },
    { title: "Biệt ĐỘi nhà Bên", poster: "https://lifestyle.vnptmedia.vn/file/8a10a0d37084e67d017099082d9f5ca7/8a10a0d36e16e5b3016e3543dafd6aac/112025/image001_20251118102401.jpg" },
    { title: "Cười Xuyên Biên Giới", poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hai_han_quoc_chieu_rap_1_3d4c12b977.jpg" }
];

const row = document.getElementById("trendingRow");

row.innerHTML = films.map(f => `
    <div class="film-card">
        <div class="film-poster">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-title">${f.title}</div>
    </div>
`).join("");


const actionFilms = [
  {
    title: "Weak Hero Class 2 ",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_1_07bb7edcf1.jpg"
  },
  {
    title: "One Punch Man",
    poster: "https://upload.wikimedia.org/wikipedia/vi/e/ea/One_Punch_Man_Vol_1.png"
  },
  {
    title: "Điệp Viên Thanh Xuân",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_2_d25dad2783.jpg"
  },
  {
    title: "The Dark Knight",
    poster: "https://upload.wikimedia.org/wikipedia/vi/2/2d/Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg"
  },
  {
    title: "Không Dung Thứ",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_4_558ba40ec1.jpg"
  },
  {
    title: "Tử Diệt Hồi Du",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_anime_hay_new_1_13bad35f5e.jpg"
  },
  {
    title: "Ma Thuật Và CƠ Bắp",
    poster: "https://cdn.voh.com.vn/voh/Image/2023/07/19/anime-hanh-dong-5.jpg?t=o"
  },
  {
    title: "Mối Liên Kết BÍ Ẩn",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_1_ccbb3f43af.jpg"
  },
  {
    title: "Chánh Thang Tra 1958",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_2_e42ba138f4.jpg"
  },
  {
    title: "Attack On Titan",
    poster: "https://cdn.voh.com.vn/voh/Image/2022/05/04/top-anime-hanh-dong-hay-nhat-hinh-2.JPG?t=o"
  },
  {
    title: "A Shop for Killers (2024)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_4_384304b914.jpg"
  },
  {
    title: "Solo Leveling Season 2",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png"
  },
  {
    title: "Ký Sinh Thú: Vùng Xám - Parasyte",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_5_77baaad209.jpg"
  },
  {
    title: "Stealer: The Treasure Keeper (2023)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_7_c1e4c47450.jpg"
  },
  {
    title: "Black Clover: New Season (2025)",
    poster: "https://a.storyblok.com/f/178900/1064x1505/c7e5cdea4b/black-clover-new.png/m/filters:quality(95)format(webp)"
  }
];
const rowac = document.getElementById("trendingRowac");

rowac.innerHTML = actionFilms.map(f => `
    <div class="film-cardac">
        <div class="film-posterac">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleac">${f.title}</div>
    </div>
`).join("");


const humorousfilms = [
 
  {
    title: "Sát Thủ Vô Cùng Cực Hài",
    poster: "https://cinema.momocdn.net/img/129339922699930699-hitman_2_-_teaser_poster.jpg?size=M"
  },
  {
    title: "Weathering with You (Tenki no Ko)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/0/03/Tenki_no_Ko_poster.jpg"
  },
  {
    title: "Hello Ghost",
    poster: "https://m.media-amazon.com/images/M/MV5BZjkyNjZmMjAtNmY3YS00NzhjLTg3N2ItZDhmNTk2ZmUxMjMyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Lớp Học Ám Sát ",
    poster: "https://i.redd.it/hpyshwrvcrnf1.jpeg"
  },
  {
    title: "Haeundae Lovers",
    poster: "https://i.ebayimg.com/images/g/s40AAOSwWnpmdn8P/s-l1200.jpg"
  },
{
    title: "The Cat Returns ",
    poster: "https://resizing.flixster.com/eNcxbbFFPyfkZXrRCJEgwbVP004=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ3MjYzNGI2LTYxYzItNGM5YS04YjAyLTU5YTRjYWJlYjQwZC5qcGc="
  },
  {
    title: "Welcome to Dongmakgol",
    poster: "https://play-lh.googleusercontent.com/vxvlv0QrrtOBRi5qkHqljMbdAker_wkS1s9hrcZghYfMgKGeQa6XeloIx80Y_DtZ2ZfJ"
  },
  {
    title: "Vùng Đất Linh Hồn",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/s/p/spirited-away---poster-01.jpg"
  },
  {
    title: "My Sassy Girl",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/My_Sassy_Girl_Teaser_Poster.jpg/250px-My_Sassy_Girl_Teaser_Poster.jpg"
  },
  {
    title: "The Way of the Househusband",
    poster: "https://bloganchoi.com/wp-content/uploads/2024/07/phim-anime-hai-hay-nhat-2024-2-696x980.jpg"
  },
  {
    title: "Miracle in Cell No.7",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Miracle_in_Cell_No._7_poster.jpg/250px-Miracle_in_Cell_No._7_poster.jpg"
  },
  {
    title: "Odd Taxi (2021)",
    poster: "https://cdn1.fahasa.com/media/catalog/product/o/d/oddtaxi_tap_1_bia.jpg"
  },
  {
    title: "Scandal Makers",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Scandal_Maker_poster.jpeg"
  },
  {
    title: "Nhân Duyên Tiền Đình",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hai_han_quoc_chieu_rap_9_bfa52d8012.jpg"
  },
  {
    title: "Extreme Job",
    poster: "https://m.media-amazon.com/images/M/MV5BNjkwYmRiY2EtYTAwZi00ZTA1LTk4OTgtNzlhYTVlM2RmOWExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  }
];
const rowh = document.getElementById("trendingRowh");

rowh.innerHTML = humorousfilms.map(f => `
    <div class="film-cardh">
        <div class="film-posterh">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleh">${f.title}</div>
    </div>
`).join("");



const TCfilms = [
  {
    title: "A Moment to Remember",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMzNDM0OTA3N15BMl5BanBnXkFtZTcwNzk0NjEzMQ@@._V1_.jpg"
  },
  {
    title: "The Classic",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavkyWViT-rr0uaxl4lOpjcbulDf7AO9B_yA&s"
  },
  {
    title: "She Would Never Know",
    poster: "https://image.voh.com.vn/voh/Image/2021/12/01/phim-tinh-cam-han-quoc-nam-2021-anh1.jpg?t=o&w=1280&q=85"
  },
  {
    title: "Your Name",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
  },
  {
    title: "Be With You",
    poster: "https://m.media-amazon.com/images/M/MV5BZjU2NDFkNGItYTI0ZC00ZjUxLTllYTMtMmJhYzUxYmM2OWRjXkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Youth of May",
    poster: "https://image.voh.com.vn/voh/Image/2021/12/01/phim-tinh-cam-han-quoc-nam-2021-anh4.jpg?t=o&w=1280&q=85"
  },
  {
    title: "20th Century Girl",
    poster: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2022/10/20th-century-girl-nhu-phien-ban-dien-anh-o-vu-tru-khac-cua-25-21_63577cc98cb3b.jpeg"
  },
  {
    title: " Dáng hình thanh âm",
    poster: "https://upload.wikimedia.org/wikipedia/vi/c/c6/Koe_no_Katachi_Film_Poster.jpg"
  },
  {
    title: "Thiên thần đáng yêu của bố ",
    poster: "https://img.ahaphimz.com/poster/thumb/68747470733a2f2f692e696d6775722e636f6d2f355952334f76732e6a7067.jpg"
  },
  {
    title: "The Beauty Inside",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/The_Beauty_Inside_%28TV_series%29.jpg/250px-The_Beauty_Inside_%28TV_series%29.jpg"
  },
  {
    title: "Crash Landing on You",
    poster: "https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "The Wind Rises - Gió nổi (2013)",
    poster: "https://chiecnon.wordpress.com/wp-content/uploads/2014/10/the-wind-rises-20131.jpg"
  },
  {
    title: "Double Patty (2021)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_tinh_cam_ngan_han_quoc_9_d88df6594d.jpg"
  },
  {
    title: "Past Lives",
    poster: "https://www.mvtimes.com/mvt/uploads/2023/07/Past-Lives.jpg"
  },
  {
    title: "Josee: the Tiger and the Fish",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/j/o/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg"
  }
];
const rowme = document.getElementById("trendingRowme");

rowme.innerHTML = TCfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");

// const CARD_WIDTHME = 190; 
// const GAPME = 18; 
// const SCROLL_COUNTME = 7.2;
//  document.getElementById("trendNextme").onclick = () => 
//   { rowme.scrollLeft += (CARD_WIDTHME + GAPME) * SCROLL_COUNTME; }; 
// document.getElementById("trendPrevme").onclick = () =>
//   { rowme.scrollLeft -= (CARD_WIDTHME + GAPME) * SCROLL_COUNTME; };

function setupSlider(rowId, nextId, prevId) {
    const row = document.getElementById(rowId);
    document.getElementById(nextId).onclick = () => {
        row.scrollLeft += (190 + 18) * 7.2;
    };
    document.getElementById(prevId).onclick = () => {
        row.scrollLeft -= (190 + 18) * 7.2;
    };
}
setupSlider("trendingRow", "trendNext", "trendPrev");
setupSlider("trendingRowac", "trendNextac", "trendPrevac");
setupSlider("trendingRowh", "trendNexth", "trendPrevh");
setupSlider("trendingRowme", "trendNextme", "trendPrevme");

const filmss = [
  {
    title: "Hậu Duệ Mặt Trời",
    sub: "K-Drama · Action · Romance · Descendants of the Sun",
    poster: "https://static2.vieon.vn/vieplay-image/carousel_web_v4_ntc/2021/01/20/0kenhuxj_1920x1080-carousel-hauduemattroi5da40f4828611e6f2dfb3d3722723cc1_1920_1080.jpg",
    bg: "https://static2.vieon.vn/vieplay-image/carousel_web_v4_ntc/2021/01/20/0kenhuxj_1920x1080-carousel-hauduemattroi5da40f4828611e6f2dfb3d3722723cc1_1920_1080.jpg"
  },
  {
    title: "Không Dung Thứ",
    sub: "K-Movie · Action · Crime · Thriller · No Mercy",
    poster: "https://resizing.flixster.com/qTUDW308hvIop6y64NW5Cw5-gPU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30307398_b_h10_aa.jpg",
    bg: "https://resizing.flixster.com/qTUDW308hvIop6y64NW5Cw5-gPU=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30307398_b_h10_aa.jpg"
  },
  {
    title: "Sakamoto Days",
    sub: "Anime · Action · Comedy · Hitman Legend",
    poster: "https://www.accioncine.es/wp-content/uploads/2025/05/Sakamoto-Days.jpg",
    bg: "https://www.accioncine.es/wp-content/uploads/2025/05/Sakamoto-Days.jpg"
  },
  {
    title: "Đội Thiếu Niên Siêu Đẳng",
    sub: "K-Drama · Action · Superpower · Moving",
    poster: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/lich-chieu-moving-2023-1.jpg",
    bg: "https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/lich-chieu-moving-2023-1.jpg"
  },
  {
    title: "Hạ Cánh Nơi Anh",
    sub: "K-Drama · Romance · Action · Crash Landing on You",
    poster: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f4aa053f0c68/022020/hacanhnoianh367531581566262_2020021410111.jpg",
    bg: "https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/4028eaa467f477c80167f4aa053f0c68/022020/hacanhnoianh367531581566262_2020021410111.jpg"
  },
  {
    title: "Vây Hãm: Không Lối Thoát",
    sub: "K-Movie · Action · Crime · The Roundup",
    poster: "https://i.ytimg.com/vi/EVR-f0olO-g/maxresdefault.jpg",
    bg: "https://i.ytimg.com/vi/EVR-f0olO-g/maxresdefault.jpg"
  },
  {
    title: "Solo Leveling",
    sub: "Anime · Action · Fantasy · Shadow Monarch",
    poster: "https://cdn-media.sforum.vn/storage/app/media/huymanh/solo-leveling-arise.jpg",
    bg: "https://cdn-media.sforum.vn/storage/app/media/huymanh/solo-leveling-arise.jpg"
  },
  {
    title: "Cõng Anh Mà Chạy",
    sub: "K-Drama · Romance · Time Travel · Lovely Runner",
    poster: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/phim-cong-anh-ma-chay-2.jpg",
    bg: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/04/phim-cong-anh-ma-chay-2.jpg"
  },
  {
    title: "Weak hero class 2",
    sub: "K-Drama · Action · Youth · Revenge · Weak Hero Class 2",
    poster: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc1TxNDe5I0N-Z3JEsAxUwo40NsEVTXI7se7Ikd2aE9bS0iMyggqH9rd3PMINtfU2c_QWUeNb4FUsQXk-DTslDZNFch0sultFtE6.jpg?r=766",
    bg: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc1TxNDe5I0N-Z3JEsAxUwo40NsEVTXI7se7Ikd2aE9bS0iMyggqH9rd3PMINtfU2c_QWUeNb4FUsQXk-DTslDZNFch0sultFtE6.jpg?r=766"
  },
  {
    title: "Lớp Học Ám Sát",
     sub: "Anime · Action · Comedy · School Life · Assassination Classroom",
    poster: "https://wibu.com.vn/wp-content/uploads/2025/03/Assassination-Classroom.jpg",
    bg: "https://wibu.com.vn/wp-content/uploads/2025/03/Assassination-Classroom.jpg"
  }
];

let activeIdx = 0;
let slideTimer;

const bgNode = document.getElementById('hero-background');
const titleNode = document.getElementById('hero-title');
const subNode = document.getElementById('hero-subtitle');
const trackNode = document.getElementById('hero-thumbnail-track');

function initSlider() {
    trackNode.innerHTML = filmss.map((f, i) => `
        <div class="hero-thumb-item" id="thumb-${i}" onclick="selectThumb(${i})">
            <img src="${f.poster}" alt="">
        </div>
    `).join('');
    
    updateDisplay(0);
    startAutoSlide();
}

function updateDisplay(index) {
    activeIdx = index;
    const film = filmss[index];
    const infoNode = document.querySelector('.hero-info-box');
    infoNode.classList.remove('animate-info');
    void infoNode.offsetWidth; 
    bgNode.style.backgroundImage = `url('${film.bg}')`;
    titleNode.innerText = film.title;
    subNode.innerText = film.sub;
    infoNode.classList.add('animate-info');
    document.querySelectorAll('.hero-thumb-item').forEach(el => el.classList.remove('active'));
    const currentThumb = document.getElementById(`thumb-${index}`);
    currentThumb.classList.add('active');
    const container = document.querySelector('.hero-thumbnail-scroll'); // Class của div bao ngoài thanh cuộn
if (container) {
    const scrollPos = currentThumb.offsetLeft - (container.offsetWidth / 2) + (currentThumb.offsetWidth / 2);
    container.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
    });
}
}

function selectThumb(index) {
    clearInterval(slideTimer);
    updateDisplay(index);
    startAutoSlide();
}

function startAutoSlide() {
    slideTimer = setInterval(() => {
        let next = (activeIdx + 1) % filmss.length;
        updateDisplay(next);
    }, 5000);
}

initSlider();