
const films = [
    { 
        title: "Sakamoto Days", 
        poster: "https://m.media-amazon.com/images/M/MV5BM2MwZDRmYWItNGIzZC00ZWExLWEwNWYtNmM1ZmU3OTA3NmY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: "4.9",
        year: "2025",
        desc: "Sát thủ huyền thoại Taro Sakamoto giờ đã nghỉ hưu, béo lên và làm chủ tiệm tạp hóa, nhưng quá khứ không để anh yên.",
        link: "https://animevsub.app/sakamoto-days/"
    },
    { 
        title: "The Apothecary Diaries – Mùa 2 ", 
        poster: "https://a.storyblok.com/f/178900/750x1061/9af8ea4da6/the-apothecary-diaries-season-2-key-visual.jpg/m/filters:quality(95)format(webp)",
        rating: "4.9",
        year: "2025",
        desc: "Maomao tiếp tục hành trình giải mã những bí ẩn chết người trong hậu cung bằng kiến thức dược lý thiên tài của mình.",
        link: "https://motchillkr.io/phim/duoc-su-tu-su-phan-2/tap-1-sv-0" 
    },
    { 
        title: "One Piece - Khai Màn", 
        poster: "https://dep.com.vn/wp-content/uploads/2019/12/poster-chinh-thuc-phim-one-piece-stampede.jpg",
        rating: "4.8",
        year: "2019",
        desc: "Luffy và băng Mũ Rơm tham gia Lễ hội Hải tặc, đối đầu với Douglas Bullet trong một cuộc chiến sinh tử.",
        link: "https://motchillkr.io/phim/dao-hai-tac-live-action/tap-1-sv-0" 
    },
    { 
        title: "Solo Leveling – Mùa 2", 
        poster: "https://cdn1.epicgames.com/spt-assets/91ab4f5ea1a8415184dd4dcbeaf50fc2/solo-levelingarise-1fhh9.jpg",
        rating: "4.9",
        year: "2025",
        desc: "Sung Jin-Woo tiếp tục hành trình thăng cấp thần tốc, đối mặt với những thực thể quyền năng đe dọa thế giới.",
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JhM1797v9Q_T79t6B4uIu34" 
    },
    { 
        title: "Dr. Stone: Science Future", 
        poster: "https://preview.redd.it/new-key-visual-for-dr-stone-science-future-v0-kurcdtl49s0e1.jpeg?width=640&crop=smart&auto=webp&s=c0cd502f907b0f319e8f5348a8061f7f90c36388",
        rating: "4.7",
        year: "2025",
        desc: "Senku và vương quốc khoa học bắt đầu chuyến hành trình cuối cùng tiến vào không gian để giải mã bí ẩn hóa đá.",
        link: "https://www.youtube.com/playlist?list=PLwLSw1_eDZl1w738m258pWp5_pU2W1V8H"
    },
    { 
        title: "Omniscient Reader ", 
        poster: "https://m.media-amazon.com/images/M/MV5BZjM2MTdjZDgtNTA4Yy00MWQwLWEwYTUtZGI2MDlmNzVhODc4XkEyXkFqcGc@._V1_.jpg",
        rating: "4.9",
        year: "2025",
        desc: "Khi thế giới bỗng dưng biến thành tiểu thuyết mà Kim Dokja vừa đọc xong, anh là người duy nhất biết kết cục.",
        link: "https://www.youtube.com/results?search_query=Omniscient+Reader+Anime+Official"
    },
    { 
        title: "Lazarus ", 
        poster: "https://m.media-amazon.com/images/M/MV5BNTQ1NjU5ZDQtN2RjYi00ZmIwLWI0YWYtOTI3NmJjMjcxNzA2XkEyXkFqcGc@._V1_.jpg",
        rating: "4.8",
        year: "2025",
        desc: "Năm 2052, một loại thuốc chữa bách bệnh bỗng trở thành mầm mống diệt vong, một đội đặc nhiệm phải vào cuộc.",
        link: "https://www.youtube.com/watch?v=R9p56xQ_C4A"
    },
    { 
        title: "Black Clover", 
        poster: "https://m.media-amazon.com/images/M/MV5BMmIxNDZmZTktY2I0Ny00YWY5LTlhYjAtZjQ4MzUxYThjY2QwXkEyXkFqcGc@._V1_.jpg",
        rating: "4.7",
        year: "2023",
        desc: "Asta - cậu bé không có ma pháp trong thế giới đầy phép thuật, nỗ lực trở thành Ma Pháp Vương.",
        link: "https://www.youtube.com/playlist?list=PLwLSw1_eDZl1_h_k0v5_3IpxY_vP5D67K"
    },
    { 
        title: "Honey Lemon Soda", 
        poster: "https://thumbnail.laftel.tv/items/portrait/a421ff22-8e2d-4290-8e54-1ee8713e6387.jpg",
        rating: "4.6",
        year: "2025",
        desc: "Câu chuyện tình cảm ngọt ngào giữa cô nàng nhút nhát Ishimori và chàng trai tóc vàng rực rỡ Miura.",
        link: "https://www.youtube.com/results?search_query=Honey+Lemon+Soda+Anime"
    },
    { 
        title: "My Happy Marriage season 2", 
        poster: "https://a.storyblok.com/f/178900/849x1200/e48df46206/my-happy-marriage-season-2-key-visual.jpg/m/filters:quality(95)format(webp)",
        rating: "4.8",
        year: "2025",
        desc: "Miyo và Kiyoka tiếp tục xây dựng hạnh phúc, nhưng những âm mưu gia tộc mới lại bắt đầu trỗi dậy.",
        link: "https://www.youtube.com/results?search_query=My+Happy+Marriage+Season+2+Trailer"
    },
    { 
        title: "The Beginning After the End", 
        poster: "https://m.media-amazon.com/images/M/MV5BMTIzNDFjY2QtZTY3NC00NzY0LWE5NjQtOGY1NjliMDY0YmE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: "4.9",
        year: "2025",
        desc: "Vua Grey tái sinh ở thế giới ma thuật với danh phận Arthur Leywin, bắt đầu lại hành trình vươn tới đỉnh cao.",
        link: "https://www.youtube.com/watch?v=9L8W5XJ8lS8"
    },
    { 
        title: "Season AHACK OR TITAN", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6e9VkoStcl0UXueGoDz-Ks5hhdNMswuwQ&s",
        rating: "4.9",
        year: "2023",
        desc: "Trận chiến cuối cùng giữa nhân loại và các Titan, nơi mọi bí mật kinh hoàng nhất sẽ được hé lộ.",
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JhM1797v9Q_T79t6B4uIu34"
    },
    { 
        title: "Go Go Loser Ranger season 2 ", 
        poster: "https://a.storyblok.com/f/178900/750x1057/1564c59fc4/go_go_loser_ranger_season2_new_key_art.jpg/m/filters:quality(95)format(webp)",
        rating: "4.5",
        year: "2025",
        desc: "Quái vật D tiếp tục thâm nhập vào hàng ngũ siêu anh hùng giả tạo để thực hiện kế hoạch lật đổ.",
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JjS9I_wTbeXjM1W9I-N5I7S"
    },
    { 
        title: "Fire Force season 3 part 1", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LBfjmoAl8QNzbY35NAUKuGosaw-rHC9u5g&s",
        rating: "4.7",
        year: "2025",
        desc: "Biệt đội cứu hỏa đặc biệt số 8 tiến sâu hơn vào những bí ẩn của hiện tượng tự thiêu và Evangelist.",
        link: "https://www.youtube.com/playlist?list=PLwLSw1_eDZl0n6A7Gv16Vl6W7zT2wV7Sj"
    },
    { 
        title: " Kimetsu No Yaiba Mùa 4", 
        poster: "https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980e76ea1ce783b7b7bfe465da8d1f4abc5d17b8dcdbcbc16230a954de291a56146b389da1a45a1584f6fd365d4db1e85f5714ef85a15986e12ec866c53661a093d/kimetsu-no-yaiba-3-1239.jpg",
        rating: "4.9",
        year: "2024",
        desc: "Khóa huấn luyện khắc nghiệt cùng các Trụ cột để chuẩn bị cho trận chiến cuối cùng với Chúa quỷ Muzan.",
        link: "https://www.youtube.com/playlist?list=PLwLSw1_eDZl3S120z1D1G4M_t_XpM2O5S"
    },
    { 
        title: "Solo Leveling ", 
        poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png",
        rating: "4.8",
        year: "2024",
        desc: "Thợ săn yếu nhất thế giới nhận được một hệ thống bí ẩn giúp anh có khả năng thăng cấp vô hạn.",
        link: "https://www.youtube.com/playlist?list=PLwLSw1_eDZl1-rO28-V4f8k0t3Sj-8uY8"
    },
    { 
        title: "Phù Thuỷ Và Quái Vật", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZEam3ZyTZXrAtChKCBvX_pQDjPx2SX42Eg&s",
        rating: "4.6",
        year: "2024",
        desc: "Một cặp đôi kỳ lạ đi tìm kiếm những phù thủy tà ác để hóa giải lời nguyền và đòi lại công lý.",
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JhM1797v9Q_T79t6B4uIu34"
    },
    { 
        title: "My Hero Academia Season 7", 
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12793542_b_v13_ak.jpg",
        rating: "4.8",
        year: "2024",
        desc: "Cuộc đại chiến giữa các anh hùng và phe phản diện bước vào giai đoạn khốc liệt nhất đe dọa toàn xã hội.",
        link: "https://www.youtube.com/playlist?list=PLxSscENEp7JhM1797v9Q_T79t6B4uIu34"
    }
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
    title: "Thanh Gươm Diệt Quỷ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/z96eha0f_660x946-demonslayer.jpg",
    rating: "4.9",
    year: "2019",
    desc: "Tanjiro bắt đầu hành trình trở thành thợ săn quỷ để cứu em gái Nezuko và trả thù cho gia đình bị sát hại.",
    link: "https://motchillkr.io/phim/thanh-guom-diet-quy-vo-han-thanh-full-a1"
  },
  {
    title: "Black: Huyết Chiến Ngàn Năm",
    poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f0/%C3%81p_ph%C3%ADch_phim_Huy%E1%BA%BFt_chi%E1%BA%BFn_ng%C3%A0n_n%C4%83m.jpg/250px-%C3%81p_ph%C3%ADch_phim_Huy%E1%BA%BFt_chi%E1%BA%BFn_ng%C3%A0n_n%C4%83m.jpg",
    rating: "4.9",
    year: "2022",
    desc: "Cuộc đối đầu định mệnh giữa các Tử thần và đế chế Quincy trỗi dậy sau hàng ngàn năm ẩn nấp.",
    link: "https://motchillk.bz/phim/bleach-huyet-chien-ngan-nam-part-2-chia-biet"
  },
  {
    title: "Kaiju No. 8 - Quái Vật Số 8 Phần 1",
    poster: "https://m.media-amazon.com/images/M/MV5BM2VmNTc3OWQtOTVmMy00MGZlLTk3N2QtM2YwZDE5MWVjZmM5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.8",
    year: "2024",
    desc: "Kafka Hibino bất ngờ có khả năng biến thành Kaiju và dùng sức mạnh đó để bảo vệ nhân loại khỏi chính giống loài quái vật.",
    link: "https://motchillk.bz/phim/kaiju-no-8"
  },
  {
    title: "Solo Leveling Phần 1",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/25t6efo6_660x946-sololeveling-s1.png",
    rating: "4.9",
    year: "2024",
    desc: "Hành trình thăng cấp từ thợ săn yếu nhất thế giới của Sung Jin-Woo thông qua một hệ thống nhiệm vụ kỳ bí."
  },
  {
    title: "Blue Lock(Phần 1)",
    poster: "https://image.lag.vn/upload/news/24/06/26/GO0MrsYaEAA2e1t-724x1024_FTXD.jpg",
    rating: "4.7",
    year: "2022",
    desc: "300 tiền đạo trẻ xuất sắc nhất Nhật Bản bị nhốt trong một cơ sở huấn luyện để tìm ra tiền đạo ích kỷ và tài năng nhất."
  },
  {
    title: "Học Viện Anh Hùng(Phần 1)",
    poster: "https://p16-sg.tiktokcdn.com/obj/tos-alisg-avt-0068/556416ff9da8ceb2a6c6f3db013147c8",
    rating: "4.8",
    year: "2016",
    desc: "Izuku Midoriya, một cậu bé không có siêu năng lực, nỗ lực trở thành siêu anh hùng vĩ đại nhất sau khi gặp thần tượng All Might."
  },
  {
    title: "Đại Chiến Titan Mùa 1",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAC4ccDqE8rNQCHDRWHtJDYa4tt140fqQckg&s",
    rating: "4.9",
    year: "2013",
    desc: "Nhân loại phải sống sau những bức tường khổng lồ để bảo vệ mình khỏi các Titan ăn thịt người tàn bạo."
  },
  {
    title: "Chú Thuật Hồi Chiến ",
    poster: "https://product.hstatic.net/1000376556/product/1_56092b1efc134cb7b7daff7e2cf52e_ef03eadf6a9f4b9ab89c9ad0dfaf9d13_1024x1024.jpg",
    rating: "4.9",
    year: "2020",
    desc: "Yuji Itadori nuốt phải ngón tay bị nguyền rủa của Sukuna và bước vào thế giới nguy hiểm của các Chú thuật sư."
  },
  {
    title: "Attack On Titan",
    poster: "https://cdn.voh.com.vn/voh/Image/2022/05/04/top-anime-hanh-dong-hay-nhat-hinh-2.JPG?t=o",
    rating: "4.9",
    year: "2021",
    desc: "Trận chiến sinh tồn bước sang giai đoạn mới khi những bí ẩn về nguồn gốc Titan và thế giới bên ngoài dần lộ diện."
  },
  {
    title: "Solo Leveling Season 2",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png",
    rating: "4.9",
    year: "2025",
    desc: "Chúa tể bóng tối Sung Jin-Woo tiếp tục đối đầu với những thế lực cổ xưa đang đe dọa sự tồn vong của toàn cầu."
  },
  {
    title: "Black Clover: New Season",
    poster: "https://a.storyblok.com/f/178900/1064x1505/c7e5cdea4b/black-clover-new.png/m/filters:quality(95)format(webp)",
    rating: "4.7",
    year: "2024",
    desc: "Asta và Yuno tiếp tục hành trình cạnh tranh ngôi vị Ma Pháp Vương thông qua những trận chiến phép thuật bùng nổ."
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
    title: "Maou Gakuin no Futekigousha",
    poster: "https://i.ebayimg.com/images/g/vkwAAOSwaj1oKBC~/s-l1200.jpg",
    rating: "4.8",
    year: "2020",
    desc: "Vị Ma Vương huyền thoại Anos Voldigoad tái sinh sau 2000 năm và phải đối mặt với một thế giới đã quên mất sức mạnh thực sự của ông.",
    link: "https://animevietsub.be/phim/hoc-vien-ma-vuong-a3723/tap-01-70019.html"
  },
  {
    title: "Nguyệt Đạo Dị Giới(Phần 1)",
    poster: "https://image.lag.vn/upload/news/23/10/25/anime-nguyet-dao-di-gioi-phan-2-11_YRMH.jpg",
    rating: "4.7",
    year: "2021",
    desc: "Makoto Misumi bị triệu hồi đến thế giới khác làm anh hùng, nhưng lại bị nữ thần xua đuổi vì ngoại hình, bắt đầu hành trình xây dựng đế chế riêng.",
    link: "https://motchilll.is/phim/nguyet-dao-di-gioi-phan-2/tap-1-sv-0"
  },
  {
    title: "The Devil Is a Part-Timer!",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hataraku_Ma%C5%8D-sama%21_light_novel_vol_1.jpg",
    rating: "4.9",
    year: "2013",
    desc: "Chúa tể quỷ Satan lạc đến Tokyo hiện đại, mất hết phép thuật và phải đi làm thêm tại một tiệm bánh burger để chi trả tiền thuê nhà.",
    link : "https://www.youtube.com/watch?v=gTZlKgODr78"
  },
  {
    title: "Học Viện Ma Vương(Phần 1) ",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBcNbL9wWrFcwVg-M50zyt7LhEBUx7L2ySw&s",
    rating: "4.8",
    year: "2020",
    desc: "Kẻ không phù hợp tại học viện Ma Vương chính là vị tổ tiên mạnh nhất, người đang đi tìm lại sự thật về lịch sử bị bóp méo."
  },
  {
    title: "Học Viện Ma Vương(Phần 2) ",
    poster: "https://animehay.ee/public/uploads/hoc-vien-ma-vuong.webp",
    rating: "4.7",
    year: "2023",
    desc: "Tiếp tục cuộc hành trình của Anos khi anh đối đầu với những vị thần và âm mưu mới đe dọa nền hòa bình giữa quỷ và người."
  },
  {
    title: "Frieren: Pháp Sư Tiễn Tảng(Phần 1)",
    poster: "https://dilib.vn/img/news/2024/03/larger/14768-phap-su-tien-tang-sousou-no-frieren-1.jpg?v=1081",
    rating: "4.9",
    year: "2023",
    desc: "Sau khi đánh bại Ma Vương, pháp sư tộc Elf Frieren bắt đầu hành trình mới để thấu hiểu hơn về trái tim con người và những người bạn cũ."
  },
  {
    title: "The Eminence in Shadow",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_.jpg",
    rating: "4.9",
    year: "2022",
    desc: "Cid Kagenou luôn khao khát trở thành 'Chúa tể bóng tối'. Sau khi chuyển sinh, những lời nói dối của anh vô tình trở thành sự thật."
  },
  {
    title: "Welcome to Demon School! Iruma-kun",
    poster: "https://m.media-amazon.com/images/M/MV5BMDE1NzZlNTUtZWJmYi00ZTUwLTg0MDQtOWIzZmI2MzdiOTk2XkEyXkFqcGc@._V1_.jpg",
    rating: "4.8",
    year: "2019",
    desc: "Cậu bé hiền lành Iruma bị cha mẹ bán cho ác quỷ, nhưng cuối cùng lại trở thành cháu trai cưng và đi học tại trường dành cho quỷ."
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
    title: "Phàm Nhân Tu Tiên (Phần 3)",
    poster: "https://hoathinh3d.hot/wp-content/uploads/2022/11/pham-nhan-tu-tien-phan-3-3.jpg",
    rating: "4.9",
    year: "2023",
    desc: "Hành trình tu tiên đầy gian nan của Han Li tại Loạn Tinh Hải, nơi anh phải đối mặt với những tu sĩ cường đại và yêu thú nghìn năm.",
    link: "https://www.motchill46.com/phim/pham-nhan-tu-tien-phan-3"
  },
   {
    title: "Bạch Xà: Duyên Khởi",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/10/31/uf89nyf6_whitesnake_660x946.png",
    rating: "4.8",
    year: "2019",
    desc: "Câu chuyện tình yêu đầy bi kịch và lãng mạn giữa Bạch Xà và chàng thợ săn rắn A Tuyên từ hàng ngàn năm trước.",
    link: "https://motchillk.bz/phim/bach-xa-duyen-khoi/tap-full"
  },
  {
    title: "Nghịch Tiên Tà Thần",
    poster: "https://pic5.iqiyipic.com/image/20251226/8c/f4/a_100543682_m_601_vi_m4_260_360.jpg",
    rating: "4.6",
    year: "2023",
    desc: "Vân Triệt mang theo ký ức và bảo vật từ Thương Vân Đại Lục tái sinh, bắt đầu con đường nghịch thiên cải mệnh, trấn áp quần hùng.",
    link: "https://motchillk.bz/phim/nghich-thien-ta-than/tap-2"
  },
  {
    title: "Ở Rể ( Phần 1)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWjpartGGFj_Bi5K2lssZwBPub0rSOtXaGA&s",
    rating: "4.7",
    year: "2023",
    desc: "Chàng trai hiện đại Ninh Nghị xuyên không về quá khứ làm con rể của Tô gia, dùng kiến thức kinh doanh để thay đổi vận mệnh.",
    link: "https://www.youtube.com/watch?v=pBUldw6scUA&list=PLrkftuxmoqXtrKuY2cvIIcB2rX6PXWBot"
  },
  {
    title: "Phàm Nhân Tu Tiên (Phần 2)",
    poster: "https://p16-sg.tiktokcdn.com/obj/tos-alisg-avt-0068/4bed451e768af8fc689223c9c989a30b",
    rating: "4.9",
    year: "2022",
    desc: "Han Li rời khỏi Yến Gia Bảo, chính thức bước vào thế giới tu tiên tàn khốc của Việt Quốc và gia nhập Hoàng Phong Cốc."
  },
  {
    title: "Tân Thần Bảng: Dương Tiễn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCHGMep03HAVIzRWaXTLGKeT75hnBHwNdMw&s",
    rating: "4.8",
    year: "2022",
    desc: "Sau đại chiến Phong Thần, Dương Tiễn bị mất đi thiên nhãn và sống như một kẻ săn tiền thưởng cho đến khi một nhiệm vụ lạ kỳ xuất hiện."
  },
  {
    title: "Ở Rể ( Phần 2)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw2_k8EdZjqBPgRxJiIh1e1DYvBXWaBfECQ&s",
    rating: "4.7",
    year: "2024",
    desc: "Tiếp nối hành trình của Ninh Nghị khi anh tham gia vào những biến động chính trị và quân sự lớn hơn để bảo vệ gia đình và đất nước."
  },
  {
    title: " Đại Chúa Tể",
    poster: "https://i.pinimg.com/736x/3d/52/5a/3d525a4731aa9ee0bd30fe1a024fd54b.jpg",
    rating: "4.7",
    year: "2023",
    desc: "Thiếu niên Mục Trần bước ra từ Bắc Linh cảnh, trải qua muôn vàn thử thách để trở thành Đại Chúa Tể của vạn giới."
  },
  {
    title: "Thần Lan Kỳ Vực Vô Song Châu",
    poster: "https://media.themoviedb.org/t/p/w116_and_h174_face/wAVJiJutAa8GsO7HEC7twH4C3KN.jpg",
    rating: "4.5",
    year: "2022",
    desc: "Hai thiếu niên đến từ hai quốc gia khác nhau cùng sở hữu Vô Song Châu, buộc phải sát cánh chiến đấu để bảo vệ lục địa."
  },
  {
    title: "Phàm Nhân Tu Tiên (Phần 1)",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLcuDAhLRlmJxdDYivwwSTOKkebE7clEb1A&s",
    rating: "4.9",
    year: "2020",
    desc: "Cậu bé làng chài Han Li vô tình bước chân vào con đường tu tiên sau khi gia nhập một môn phái võ lâm giang hồ."
  },
  {
    title: "Trảm Thần: Phàm Trần Thần Vực",
    poster: "https://static.aircms.xyz/storage/images/tram-than-pham-tran-than-vuc/tram-than-pham-tran-than-vuc-thumb.webp",
    rating: "4.8",
    year: "2024",
    desc: "Thế giới hiện đại xuất hiện những thực thể thần bí, thiếu niên mù Lâm Thất Dạ thức tỉnh sức mạnh để bảo vệ nhân loại khỏi sương mù."
  },
  {
    title: "Thần Võ Thiên Tôn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVwOiG0O1u33fZa7U0W4kiyxOFr4_gCm-OA&s",
    rating: "4.5",
    year: "2021",
    desc: "Thiên tài võ đạo tái sinh vào thân xác một phế vật, dùng kiến thức kiếp trước để đột phá cảnh giới, trở thành Thần Võ Thiên Tôn."
  },
  {
    title: "Nezha Reborn (2021)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/a/a2/Nezha_film_poster.jpg",
    rating: "4.7",
    year: "2021",
    desc: "3000 năm sau trận chiến phong thần, nguyên thần Na Tra tái sinh trong thân xác chàng trai trẻ Lý Vân Tường ở thành phố tương lai."
  },
  {
    title: "Đấu Phá Thương Khung ",
    poster: "https://vidrelax.com/wp-content/uploads/2025/09/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien-5.jpg",
    rating: "4.9",
    year: "2022",
    desc: "Tiêu Viêm từ một thiên tài bị mất hết công lực đã nỗ lực tìm kiếm Dị Hỏa, từng bước trở thành Đấu Đế huyền thoại."
  },
  {
    title: "Mục Thần Ký",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKAmWEJP6qWIZNyIIvXCwREvbM2K9_1-YEQ&s",
    rating: "4.8",
    year: "2024",
    desc: "Tần Mục lớn lên trong tàn lão thôn với những lão nhân kỳ quái, mang theo bí ẩn về thân thế và tiềm năng vô hạn bước vào giang hồ."
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
setupSlider("trendingRowhd", "trendNexthd", "trendPrevhd");
setupSlider("trendingRowpm", "trendNextpm", "trendPrevpm");
setupSlider("trendingRowth", "trendNextth", "trendPrevth");

const HDfilms = [
  {
    title: "Đại Chiến Titan (Phần 4)",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/9ngt53p4_660x946-attackontitan-4.jpg",
    rating: "4.9",
    year: "2020",
    desc: "Phần cuối cùng đầy kịch tính, khi Eren Yeager bắt đầu kế hoạch rung chuyển thế giới để bảo vệ hòn đảo Paradis.",
    link: "https://vieon.vn/dai-chien-titan-4.html?srsltid=AfmBOopezvYLKNiSyyQItG-x9sgnUkNIlarSX41QAiWAEUYpFW1VSlC-"
  },
  {
    title: "Fire Force season 3 part 1",
    poster: "https://a.storyblok.com/f/178900/1064x1596/7394dd442d/fire-force-season-3-key-art.png/m/filters:quality(95)format(webp)",
    rating: "4.7",
    year: "2025",
    desc: "Shinra và Biệt đội 8 tiến vào trung tâm của Adolla để ngăn chặn kế hoạch thiêu rụi trái đất của Evangelist.",
    link: "https://motchillkr.io/phim/biet-doi-linh-cuu-hoa-phan-3/tap-1-sv-0"
  },
  {
    title: "Học Viện Anh Hùng(Phần 3)",
    poster: "https://pic3.iqiyipic.com/image/20210324/be/85/a_100452620_m_601_zh-CN_260_360.jpg",
    rating: "4.8",
    year: "2018",
    desc: "Trận chiến huyền thoại giữa All Might và All For One đánh dấu sự kết thúc của một kỷ nguyên anh hùng.",
    link: "https://motchillkr.io/phim/hoc-vien-anh-hung-3-nhiem-vu-giai-cuu-the-gioi/tap-full-sv-0"
  },
  {
    title: "Bleach: Sứ Giả Thần Chết",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1AKPA5RX8wtUWCOmiETgjOjs37b2yWWBLQ&s",
    rating: "4.8",
    year: "2004",
    desc: "Ichigo Kurosaki vô tình có được sức mạnh Tử thần và bắt đầu hành trình bảo vệ nhân giới khỏi các ác linh Hollow."
  },
  {
    title: "Blue Lock(Phần 2)",
    poster: "https://preview.redd.it/blue-lock-season-2-key-visual-v0-r8y028b0zdjd1.jpeg?auto=webp&s=825688e5fb309187c9a092e27e499f2f19d74ec4",
    rating: "4.7",
    year: "2024",
    desc: "Dự án Blue Lock bước vào giai đoạn khốc liệt nhất khi các tiền đạo phải đối đầu với đội tuyển U20 Nhật Bản."
  },
  {
    title: "Thanh Gươm Diệt Quỷ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/z96eha0f_660x946-demonslayer.jpg",
    rating: "4.9",
    year: "2019",
    desc: "Tanjiro gia nhập Sát Quỷ Đoàn để tìm cách biến em gái Nezuko trở lại thành người sau khi gia đình bị quỷ tàn sát."
  },
  {
    title: "Thanh Gươm Diệt Quỷ ",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/07/05/2y10nd8w_660x946-thanhguomdietquy-kyvientran-demo.jpg",
    rating: "4.9",
    year: "2021",
    desc: "Tanjiro cùng Âm Trụ Uzui Tengen thâm nhập vào phố đèn đỏ Yoshiwara để tiêu diệt Thượng Huyền Lục Daki."
  },
  {
    title: " blue Lock(Phần 2)",
    poster: "https://preview.redd.it/blue-lock-season-2-key-visual-v0-r8y028b0zdjd1.jpeg?auto=webp&s=825688e5fb309187c9a092e27e499f2f19d74ec4",
    rating: "4.7",
    year: "2024",
    desc: "Isagi nỗ lực tìm kiếm 'công thức' chiến thắng của riêng mình để trở thành tiền đạo số 1 thế giới."
  },
  {
    title: "Học Viện Anh Hùng(Phần 3)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/c/c6/HocvienanhhungNhiemvugiaicuuthegioi.jpeg",
    rating: "4.8",
    year: "2021",
    desc: "Các học sinh lớp 1-A đối mặt với một tổ chức tội phạm xuyên quốc gia trong sứ mệnh giải cứu thế giới."
  },
  {
    title: "Học Viện Anh Hùng(Phần 4)",
    poster: "https://pic8.iqiyipic.com/image/20210322/ca/ea/a_100355406_m_601_en_260_360.jpg",
    rating: "4.8",
    year: "2019",
    desc: "Deku tham gia chiến dịch giải cứu cô bé Eri khỏi bàn tay của Overhaul - kẻ đứng đầu tổ chức Yakuza."
  },
  {
    title: "Chú Thuật Hồi Chiến (Phần 1)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/8/82/Jujutsu_Kaisen_vol_1_cover.jpeg",
    rating: "4.9",
    year: "2020",
    desc: "Yuji Itadori nuốt phải ngón tay của Sukuna và phải dấn thân vào thế giới Chú thuật đầy nguy hiểm."
  },
  {
    title: "Thợ Săn Tí Hon",
    poster: "https://animehay.mx/wp-content/uploads/2025/10/tho-san-ti-hon.jpg",
    rating: "4.9",
    year: "2011",
    desc: "Gon Freecss bắt đầu hành trình trở thành Hunter để tìm kiếm người cha mất tích của mình."
  },
  {
    title: "Gia Đình Điệp Viên",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2022/05/20/d4ppmz00_660x946-spyxfamily-demoa2731c005ce704ec40c7ff515b2b1afb.jpg",
    rating: "4.8",
    year: "2022",
    desc: "Một điệp viên, một sát thủ và một cô bé ngoại cảm lập thành một gia đình giả để thực hiện nhiệm vụ hòa bình."
  },
  {
    title: "One Punch Man",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWGpiYDpHeGyaL4W-sUlhbpgL2M-qrhOZpg&s",
    rating: "4.9",
    year: "2015",
    desc: "Saitama - người anh hùng có thể kết thúc mọi đối thủ chỉ bằng một cú đấm, đang đi tìm lại cảm giác phấn khích khi chiến đấu."
  }
];
const rowhd = document.getElementById("trendingRowhd");

rowhd.innerHTML = HDfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");
const PMfilms = [
  {
    title: "Spirited Away",
    poster: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.9",
    year: "2001",
    desc: "Cô bé Chihiro bị lạc vào thế giới linh hồn và phải tìm cách giải cứu cha mẹ đã bị biến thành lợn.",
    link: "https://www.google.com/search?q=%22Spirited+Away++motchill&sca_esv=ec282b0d376459a7&biw=986&bih=893&sxsrf=ANbL-n5N6HMGqi9r4iDQ2IhcOlkZ1MCoZg%3A1771686577755&ei=scqZafzbLZWP2roPw7CvgAg&ved=0ahUKEwi8-Pro7uqSAxWVh1YBHUPYC4AQ4dUDCBM&uact=5&oq=%22Spirited+Away++motchill&gs_lp=Egxnd3Mtd2l6LXNlcnAiGCJTcGlyaXRlZCBBd2F5ICBtb3RjaGlsbEjRDFAAWLULcAB4AJABAJgB4QGgAdMEqgEFMC4xLjK4AQPIAQD4AQL4AQGYAgCgAgCYAwCSBwCgB-kBsgcAuAcAwgcAyAcAgAgA&sclient=gws-wiz-serp"
  },
  {
    title: "Princess Mononoke",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tnh6wRvPlnNCLm5k-3ANJYNnnilF0U353w&s",
    rating: "4.9",
    year: "1997",
    desc: "Cuộc chiến khốc liệt giữa nền văn minh công nghiệp của con người và các vị thần rừng cổ đại.",
    link:"https://motchillkr.io/phim/cong-chua-soi-mononoke/tap-full-sv-0"
  },
   {
    title: "Castle in the Sky",
    poster: "https://m.media-amazon.com/images/I/81bxTPiED1L._AC_UF1000,1000_QL80_.jpg",
    rating: "4.8",
    year: "1986",
    desc: "Hai đứa trẻ cùng nhau tìm kiếm lâu đài bay huyền thoại Laputa giữa những mưu đồ tàn độc của quân đội.",
    link: "https://motchillkr.io/phim/laputa-lau-dai-tren-khong/tap-full-sv-0"
  },
  {
    title: "Nausicaä of the Valley of the Wind",
    poster: "https://m.media-amazon.com/images/M/MV5BODBhMTI3YzMtNTRjYS00OTFkLWJmODUtNjJiNzcwYTVkNDhiXkEyXkFqcGc@._V1_.jpg",
    rating: "4.8",
    year: "1984",
    desc: "Công chúa Nausicaä nỗ lực bảo vệ thung lũng của mình khỏi cuộc chiến tranh tàn khốc giữa các vương quốc."
  },
  {
    title: "Howl's Moving Castle",
    poster: "https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1726506268/Events/2024/1923/WebsitePoster_1000x1480.jpg.jpg",
    rating: "4.9",
    year: "2004",
    desc: "Sophie bị phù thủy nguyền rủa thành một bà lão và bắt đầu hành trình tìm kiếm sự giúp đỡ của pháp sư Howl."
  },
  {
    title: "One Piece: Stampede",
    poster: "https://upload.wikimedia.org/wikipedia/vi/8/8a/One_Piece_Stampede_poster.jpg",
    rating: "4.7",
    year: "2019",
    desc: "Luffy đối đầu với Douglas Bullet - cựu thành viên băng Roger trong lễ hội hải tặc lớn nhất thế giới."
  },
  {
    title: "Your Name",
    poster: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b3/Your_Name_novel.jpg/330px-Your_Name_novel.jpg",
    rating: "4.9",
    year: "2016",
    desc: "Câu chuyện hoán đổi thân xác đầy lãng mạn và kỳ bí giữa hai người trẻ ở hai vùng miền khác nhau của Nhật Bản."
  },
  {
    title: " Jujutsu Kaisen 0",
    poster: "https://vn.japo.news/contents/wp-content/uploads/2021/07/513026.jpg",
    rating: "4.8",
    year: "2021",
    desc: "Yuta Okkotsu phải học cách kiểm soát linh hồn của người bạn quá cố Rika để bảo vệ các bạn học của mình."
  },
  {
    title: "Made in Abyss: Dawn of the Deep Soul",
    poster: "https://play-lh.googleusercontent.com/fYIixTpagv_npo6nUfrjqDBPS3GQ9ghmf5EUDMWqKlnVhFQvY8bqymHVf_61tATQfy7NDkHiUc5TizdPOQE",
    rating: "4.9",
    year: "2020",
    desc: "Riko và Reg dấn thân vào tầng thứ 5 của vực thẳm Abyss để đối đầu với Bondrewd tàn nhẫn."
  },
  {
    title: "Hunter x Hunter: The Last Mission",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsGIFY86xvxFJXxUl-GTf33emxZGNnhsHOw&s",
    rating: "4.5",
    year: "2013",
    desc: "Gon và các bạn phải chiến đấu chống lại tàn dư của 'Bóng tối' để bảo vệ Hiệp hội Hunter."
  },
  {
    title: "Tensei Shitara Slime Datta Ken",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9JlvxWfAi-GB0NjidvfClj-JMWsSzHOBLw&s",
    rating: "4.7",
    year: "2022",
    desc: "Rimuru và đồng đội thâm nhập vào vương quốc Raja để điều tra về một âm mưu liên quan đến đá quý ma thuật."
  },
  {
    title: "Demon Slayer: Mugen Train",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrN2eGF6jvvxXRDrUlzlHKGnld5WqCIYgJMA&s",
    rating: "4.9",
    year: "2020",
    desc: "Tanjiro cùng Viêm Trụ Rengoku thực hiện nhiệm vụ tiêu diệt quỷ trên chuyến tàu vô tận."
  },
  {
    title: "Vinland Saga",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVcbV_gbE1EPu6Wiu0oOpC43vuX61ebvn1A&s",
    rating: "4.9",
    year: "2019",
    desc: "Hành trình báo thù của Thorfinn trong bối cảnh cuộc chiến tranh tàn khốc của người Viking tại châu Âu."
  },
  {
    title: "BC:Sword of the Wizard King ",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/21/Black_Clover_Sword_of_The_Wizard_King.jpg",
    rating: "4.8",
    year: "2023",
    desc: "Asta đối đầu với các Ma Pháp Vương tiền nhiệm được hồi sinh với mục tiêu hủy diệt vương quốc Clover."
  },
  {
    title: "TSDS: Cursed by Light",
    poster: "https://m.media-amazon.com/images/M/MV5BZDM4OWNiYjUtM2QwYy00NTk4LWFmYWUtZjIzNTc3MTVhZjQzXkEyXkFqcGc@._V1_.jpg",
    rating: "4.6",
    year: "2021",
    desc: "Bảy Đại Tội hợp sức để đánh bại kẻ thù mới trong trận chiến cuối cùng để mang lại hòa bình cho Britannia."
  }
];
const rowpm = document.getElementById("trendingRowpm");

rowpm.innerHTML = PMfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");
const THfilms = [
  {
    title: "Magical Warfare",
    poster: "https://m.media-amazon.com/images/M/MV5BMjRjZWM1ZTgtNzczNi00ZDM3LWJiNDktN2FlNjgzYmVjYTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.2",
    year: "2014",
    desc: "Takeshi Nanase vô tình trở thành một pháp sư và bị cuốn vào cuộc chiến giữa thế giới thực và ảo.",
    link: "https://animevietsub.be/phim/mahou-sensou-a1718/tap-04-46210.html"
  },
  {
    title: "Horimiya (Phần 2)",
    poster: "https://a.storyblok.com/f/178900/750x1060/2dd59a00d2/61e35baca6c08ada5ca6a9a08f72ff5c1613247162_main.jpg/m/filters:quality(95)format(webp)",
    rating: "4.8",
    year: "2023",
    desc: "Những câu chuyện chưa kể về nhóm bạn Hori và Miyamura trong suốt những năm tháng trung học đầy màu sắc.",
    link: "https://motchillzr.io/phim/horimiya-1703371431/tap-1"
  },
  {
    title: "Teasing Master Takagi-san",
    poster: "https://m.media-amazon.com/images/M/MV5BNjliYzA2OWQtNTI3Mi00OTc4LWJlZDktNzhmZTc5YjhiZDEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.8",
    year: "2022",
    desc: "Những màn trêu chọc vụng về nhưng đầy tình cảm giữa Nishikata và cô bạn Takagi thông minh.",
    link: "https://motchilll.is/phim/nhat-quy-nhi-ma-thu-ba-takagi-phan-2/tap-1-sv-0" 
  },
  {
    title: "My Teen Romantic Comedy SNAFU",
    poster: "https://a.storyblok.com/f/178900/640x960/22bd012f7f/801543fc3b875a3e40b8f4793297595b1428089612_full.jpg/m/640x960",
    rating: "4.9",
    year: "2013",
    desc: "Hachiman - một học sinh có cái nhìn bi quan về cuộc sống bị ép tham gia CLB tình nguyện để giúp đỡ người khác."
  },
  {
    title: "A Silent Voice",
    poster: "https://cdn.myanimelist.net/r/200x268/images/anime/6/79634.jpg?s=87e8008558e86f46683e03072187a147",
    rating: "4.9",
    year: "2016",
    desc: "Một câu chuyện cảm động về sự chuộc lỗi của Ishida đối với cô bạn khiếm thính Shoko sau những sai lầm thời tiểu học."
  },
  {
    title: "Your Lie in April",
    poster: "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_.jpg",
    rating: "4.9",
    year: "2014",
    desc: "Thần đồng piano Kousei lấy lại được cảm hứng âm nhạc nhờ sự xuất hiện của cô nàng nghệ sĩ vĩ cầm rực rỡ Kaori."
  },
  {
    title: "Relife ",
    poster: "https://m.media-amazon.com/images/M/MV5BOGViMzRkYzctM2IyNi00OWFmLTliMDMtNjk1MmE0M2QyM2I1XkEyXkFqcGc@._V1_.jpg",
    rating: "4.8",
    year: "2016",
    desc: "Arata nhận được cơ hội trẻ lại 10 tuổi để sống lại thời học sinh và thay đổi cuộc đời thất nghiệp của mình."
  },
  {
    title: "Lớp Học Ám Sát (Phần 2)",
    poster: "https://pic2.iqiyipic.com/image/20211112/39/53/a_100484214_m_601_en_m1_260_360.jpg",
    rating: "4.9",
    year: "2016",
    desc: "Hành trình cuối cùng của lớp 3-E để ám sát thầy giáo Koro-sensei và những bí mật đằng sau danh tính của thầy."
  },
  {
    title: "Clannad: After Story)",
    poster: "https://i.pinimg.com/474x/81/7b/3a/817b3a08d8e4c7282e3c1f567836059d.jpg",
    rating: "4.9",
    year: "2008",
    desc: "Phần tiếp theo đầy lấy đi nước mắt về cuộc sống gia đình và những thử thách mà Tomoya và Nagisa phải đối mặt."
  },
  {
    title: "Học Viện Anh Hùng(Phần 4)",
    poster: "https://pic8.iqiyipic.com/image/20210322/ca/ea/a_100355406_m_601_en_260_360.jpg",
    rating: "4.8",
    year: "2019",
    desc: "Mối quan hệ phức tạp giữa các anh hùng thực tập và những gánh nặng trách nhiệm khi đối mặt với cái ác."
  },
  {
    title: "Love, Chunibyo & Other Delusions",
    poster: "https://images-na.ssl-images-amazon.com/images/I/714Hvk-d5mL.jpg",
    rating: "4.7",
    year: "2012",
    desc: "Yuuta nỗ lực thoát khỏi 'hội chứng tuổi dậy thì' nhưng lại gặp phải cô nàng Rikka vẫn đang chìm đắm trong thế giới tưởng tượng."
  },
  {
    title: "We Never Learn",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oCorYobpllQzmpnbDa16ptZNeZykqtP1kQ&s",
    rating: "4.6",
    year: "2019",
    desc: "Nariyuki nhận nhiệm vụ dạy kèm cho 3 nữ thiên tài ở những môn học mà họ tệ nhất để nhận được học bổng."
  },
  {
    title: "Kakegurui",
    poster: "https://images.justwatch.com/poster/298617476/s718/kakegurui-twin.jpg",
    rating: "4.7",
    year: "2017",
    desc: "Tại học viện Hyakkaou, vị thế xã hội được quyết định bằng những ván bài đỏ đen đầy rủi ro."
  },
  {
    title: "Hyouka - Kem Đá",
    poster: "https://bloganchoi.com/wp-content/uploads/2021/01/hyouka-2012.jpg",
    rating: "4.8",
    year: "2012",
    desc: "Oreki và nhóm bạn ở CLB Cổ điển cùng nhau giải mã những bí ẩn nhỏ nhặt diễn ra xung quanh cuộc sống học đường."
  }
];
const rowth = document.getElementById("trendingRowth");

rowth.innerHTML = THfilms.map(f => `
    <div class="film-cardme">
        <div class="film-posterme">
            <img src="${f.poster}" alt="${f.title}">
        </div>
        <div class="film-titleme">${f.title}</div>
    </div>
`).join("");

const filmss = [
  {
    title: "One Push Man",
    sub: "Drama · Music · Mystery",
    poster: "https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_saitama_2_346399b3ee.png",
    bg: "https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_saitama_2_346399b3ee.png",
    link: "https://www.youtube.com/watch?v=pgAcMtQIEwY"
  },
  {
    title: "Tôi Thăng Cấp Một Mình",
    sub: "Action · Fantasy · Solo Leveling",
    poster: "https://thuvienanime.net/wp-content/uploads/2023/06/solo-leveling-chi-minh-toi-thang-cap-thuvienanime-2-min.jpg",
    bg: "https://thuvienanime.net/wp-content/uploads/2023/06/solo-leveling-chi-minh-toi-thang-cap-thuvienanime-2-min.jpg",
    link: "https://www.youtube.com/watch?v=St4W4XBu_wA"
  },
  {
    title: "Thanh Gươm Diệt Quỷ",
    sub: "Action · Hashira Training Arc",
    poster: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165568/Originals/thanh-guom-diet-quy.jpg",
    bg: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165568/Originals/thanh-guom-diet-quy.jpg"
  },
  {
    title: "Quái Vật Số 8",
    sub: "Action · Sci-Fi · Kaiju No. 8",
    poster: "https://static.gamehub.vn/images/2024/06/17/gamehub-kaiju-no8-4.jpg",
    bg: "https://static.gamehub.vn/images/2024/06/17/gamehub-kaiju-no8-4.jpg"
  },
  {
    title: "Pháp Sư Tiễn Biệt Frieren",
    sub: "Adventure · Fantasy · Masterpiece",
    poster: "https://gamelade.vn/wp-content/uploads/2025/03/Frieren-Beyond-Journeys-End-1.webp",
    bg: "https://gamelade.vn/wp-content/uploads/2025/03/Frieren-Beyond-Journeys-End-1.webp"
  },
  {
    title: "Chú Thuật Hồi Chiến",
    sub: "Action · Supernatural · Jujutsu Kaisen",
    poster: "https://cdn-media.sforum.vn/storage/app/media/thaouyen/nhan-vat-chinh-cua-chu-thuat-hoi-chien-thumbnail.jpg",
    bg: "https://cdn-media.sforum.vn/storage/app/media/thaouyen/nhan-vat-chinh-cua-chu-thuat-hoi-chien-thumbnail.jpg"
  },
  {
    title: "Gia Đình Điệp Viên",
    sub: "Comedy · Spy · Spy x Family",
    poster: "https://cdn.shopify.com/s/files/1/0731/6514/4343/files/gia-dinh-diep-vien-1.jpg?v=1744802002",
    bg: "https://cdn.shopify.com/s/files/1/0731/6514/4343/files/gia-dinh-diep-vien-1.jpg?v=1744802002"
  },
  {
    title: "Sakamoto Days",
    sub: "Action · Comedy · Hitman",
    poster: "https://static.beebom.com/wp-content/uploads/2025/03/sakamoto-days-season-1-part-2-poster.jpg?w=1168&quality=75",
    bg: "https://static.beebom.com/wp-content/uploads/2025/03/sakamoto-days-season-1-part-2-poster.jpg?w=1168&quality=75"
  },
  {
    title: "Thợ Săn Quỷ",
    sub: "Action · Horror · Chainsaw Man",
    poster: "https://cmavn.com/wp-content/uploads/1-151.jpg",
    bg: "https://cmavn.com/wp-content/uploads/1-151.jpg"
  },
  {
    title: "Thiếu Niên Và Chim Diệc",
    sub: "Studio Ghibli · Oscar Winner",
    poster: "https://i.ytimg.com/vi/efrw3LuIKJ4/maxresdefault.jpg",
    bg: "https://i.ytimg.com/vi/efrw3LuIKJ4/maxresdefault.jpg"
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
    const container = document.querySelector('.hero-thumbnail-scroll'); 
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

/* thêm */
function renderMovieRow(containerId, movieData, cardClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = movieData.map(f => `
        <div class="${cardClass}" onclick="window.open('${f.link || '#'}', '_blank')" style="cursor: pointer;">
            <div class="${cardClass.replace('card', 'poster')}">
                <img src="${f.poster}" alt="${f.title}">
            </div>
            <div class="${cardClass.replace('card', 'title')}">${f.title}</div>

            <div class="hover-detail">
                <div class="hover-img-wrap">
                    <img src="${f.poster}" alt="${f.title}">
                    <button class="btn-play-hover">▶ Xem ngay</button>
                </div>
                <div class="hover-body">
                    <h4>${f.title}</h4>
                    <div class="hover-meta">⭐ ${f.rating} | Full HD | ${f.year}</div>
                    <p class="hover-desc">${f.desc}</p>
                </div>
            </div>
        </div>
    `).join("");
}
renderMovieRow("trendingRow", films, "film-card");
renderMovieRow("trendingRowac", actionFilms, "film-cardac");
renderMovieRow("trendingRowh", humorousfilms, "film-cardh");
renderMovieRow("trendingRowme", TCfilms, "film-cardme");
renderMovieRow("trendingRowhd", HDfilms, "film-cardme"); 
renderMovieRow("trendingRowpm", PMfilms, "film-cardme"); 
renderMovieRow("trendingRowth", THfilms, "film-cardme"); 
const vplayStyles = document.createElement("style");
vplayStyles.innerHTML = `
    .vplay-search-container {
        display: flex;
        align-items: center;
        position: relative;
        height: 42px;
    }
    .vplay-search-box {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 25px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        width: 42px;
        height: 42px;
        overflow: hidden;
        border: 1px solid transparent;
        flex-direction: row-reverse;
    }
    .vplay-search-box.active {
        width: 280px;
        background: rgba(0, 0, 0, 0.9);
        border-color: #58a618;
        box-shadow: 0 0 10px rgba(88, 166, 24, 0.4);
    }
    #vplayInput {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        color: white;
        padding: 0;
        font-size: 14px;
        width: 0;
        opacity: 0;
        transition: 0.3s;
    }
    .vplay-search-box.active #vplayInput {
        padding: 0 15px;
        width: 100%;
        opacity: 1;
    }
    .vplay-search-trigger {
        width: 42px;
        height: 42px;
        min-width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
        background: none;
        border: none;
        font-size: 16px;
    }
    #vplayOverlay {
        position: fixed;
        top: 80px; 
        left: 0; 
        width: 100%; 
        height: calc(100vh - 80px);
        background: rgba(10, 10, 10, 0.98);
        z-index: 9999;
        display: none;
        padding: 40px 60px;
        overflow-y: auto;
    }
    #vplayOverlay.show { 
        display: block; 
    }
    .vplay-search-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        gap: 30px;
    }
`;
document.head.appendChild(vplayStyles);

document.addEventListener('DOMContentLoaded', () => {
    const allMovies = [
        ...films, ...actionFilms, ...humorousfilms, 
        ...TCfilms, ...HDfilms, ...PMfilms, ...THfilms
    ];
    
    const uniqueMovies = Array.from(new Map(allMovies.map(m => [m.title, m])).values());

    const headerRight = document.querySelector('.header-right');
    if (!headerRight) return;

    const oldBtn = headerRight.querySelector('.icon-btn:not(.avatar)');
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'vplay-search-container';
    searchContainer.innerHTML = `
        <div class="vplay-search-box" id="vplayBox">
            <button class="vplay-search-trigger" id="vplayTrigger">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" id="vplayInput" placeholder="Tìm tên phim...">
        </div>
    `;

    if (oldBtn) {
        oldBtn.replaceWith(searchContainer);
    }

    const overlay = document.createElement('div');
    overlay.id = 'vplayOverlay';
    overlay.innerHTML = `
        <h3 style="margin-bottom:25px; color:#58a618; font-family: sans-serif;">Kết quả tìm kiếm:</h3>
        <div class="vplay-search-grid" id="vplayGrid"></div>
    `;
    document.body.appendChild(overlay);

    const vplayBox = document.getElementById('vplayBox');
    const vplayInput = document.getElementById('vplayInput');
    const vplayTrigger = document.getElementById('vplayTrigger');
    const vplayGrid = document.getElementById('vplayGrid');

    vplayTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        vplayBox.classList.toggle('active');
        if (vplayBox.classList.contains('active')) {
            vplayInput.focus();
        } else {
            closeVplaySearch();
        }
    });

    function removeVietnameseTones(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
    }

    vplayInput.addEventListener('input', function() {
        const val = this.value.trim();
        const cleanVal = removeVietnameseTones(val);

        if (val.length > 0) {
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';

            const filtered = uniqueMovies.filter(m => 
                removeVietnameseTones(m.title).includes(cleanVal)
            );
            renderVplayResults(filtered);
        } else {
            closeVplaySearch();
        }
    });

    function renderVplayResults(data) {
        if (data.length === 0) {
            vplayGrid.innerHTML = `<p style="color:gray; font-family: sans-serif;">Không tìm thấy phim nào...</p>`;
            return;
        }

        vplayGrid.innerHTML = data.map(f => {
            const validLink = f.link && f.link !== "#" ? f.link : "https://www.google.com/search?q=" + encodeURIComponent(f.title);
            
            return `
                <div class="film-cardme" onclick="window.open('${validLink}', '_blank')" style="cursor:pointer">
                    <div class="film-posterme">
                        <img src="${f.poster}" alt="${f.title}">
                    </div>
                    <div class="film-titleme" style="color:white; font-family: sans-serif; margin-top:10px; font-size:14px;">${f.title}</div>
                </div>
            `;
        }).join("");
    }

    function closeVplaySearch() {
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
        vplayBox.classList.remove('active');
        vplayInput.value = '';
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeVplaySearch();
    });

    vplayBox.addEventListener('click', (e) => e.stopPropagation());
});