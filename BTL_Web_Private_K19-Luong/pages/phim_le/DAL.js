
const films = [
    { 
        title: "Ngự Tứ Tiểu Ngỗ Tác (Phần 2)", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5ymumanexVA7q73QuDnYBNcBaIg_16HT_Q&s",
        rating: "4.9",
        year: "2024",
        desc: "Tiếp tục hành trình phá án ly kỳ của ngỗ tác thiên tài Sở Sở và An vương Tiêu Cẩn Du trong chốn quan trường.",
        link: "https://motchillkr.io/phim/ngu-tu-tieu-ngo-tac-phan-2/tap-1-sv-0"
    },
    { 
        title: "SPONGEBOB", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOskdpUWB8i6638ul5TSPIUplFtXmEOi4rw&s",
        rating: "4.7",
        year: "2024",
        desc: "Cuộc phiêu lưu hài hước và đầy sắc màu của bọt biển vàng cùng những người bạn dưới đáy đại dương Bikini Bottom.",
        link: "https://www.youtube.com/watch?v=P81-kM--ax4"
    },
    { 
        title: "Dark Hole", 
        poster: "https://dep.com.vn/wp-content/uploads/2021/05/dark-hole.jpeg",
        rating: "4.6",
        year: "2021",
        desc: "Một nhóm người sống sót phải chiến đấu chống lại những người đột biến hung hãn do hít phải khói đen bí ẩn."
    },
    { 
        title: "Pháo Đài Homestead (Phần 1)", 
        poster: "https://kilala.vn/data/upload/article/8526/phim-kimetsu-no-yaiba-mugen-ressha-hen.jpg",
        rating: "4.5",
        year: "2024",
        desc: "Hành trình bảo vệ pháo đài cuối cùng của nhân loại trước sự xâm lăng của các thế lực thù địch bí ẩn."
    },
    { 
        title: "The Guest", 
        poster: "https://dep.com.vn/wp-content/uploads/2021/05/Wb2pWf.jpg",
        rating: "4.8",
        year: "2018",
        desc: "Sự kết hợp giữa vị linh mục, thám tử và nhà ngoại cảm để tiêu diệt những ác linh tàn bạo đang hoành hành."
    },
    { 
        title: "Thám Tử Lừng Danh Conan", 
        poster: "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202507/11835_203_100003.jpg",
        rating: "4.9",
        year: "2024",
        desc: "Conan đối đầu với tổ chức Áo Đen trong vụ án quy mô toàn cầu liên quan đến công nghệ nhận diện khuôn mặt."
    },
    { 
        title: "Kiểm Toán Viên", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIlgLo7KRv1v2a3GyGmtbA9Lgx_MrQxKCEQ&s",
        rating: "4.7",
        year: "2024",
        desc: "Những chuyên gia kiểm toán tài ba dùng trí tuệ để lật tẩy những âm mưu tham nhũng và gian lận nghìn tỷ."
    },
    { 
        title: "Không Tặc", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt7vCE0IlYhHYHN5aqlKTdPK_XN36hRgrEw&s",
        rating: "4.6",
        year: "2024",
        desc: "Cuộc chiến sinh tử trên bầu trời khi một chuyến bay dân dụng bị chiếm quyền điều khiển bởi bọn khủng bố."
    },
    { 
        title: "Hijack", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAuxytyHM4r5kLN4WPAAms4w6MgdPNExtDg&s",
        rating: "4.6",
        year: "2023",
        desc: "Một chuyên gia đàm phán nỗ lực cứu lấy mạng sống của hàng trăm hành khách trên chuyến bay bị không tặc."
    },
    { 
        title: "ZotoPia (Phần 2)", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mW0SAfJyYZyIxsyb8mF7XgG1dhliZmMXGg&s",
        rating: "4.8",
        year: "2025",
        desc: "Judy Hopps và Nick Wilde trở lại với những vụ án ly kỳ và hài hước hơn tại thành phố động vật hiện đại."
    },
    { 
        title: "Time", 
        poster: "https://dep.com.vn/wp-content/uploads/2021/05/0jj4e_4f.jpg",
        rating: "4.7",
        year: "2018",
        desc: "Một người đàn ông nỗ lực bù đắp những lỗi lầm trong quá khứ khi quỹ thời gian của mình không còn nhiều."
    },
    { 
        title: "Season AHACK OR TITAN", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6e9VkoStqcl0UXueGoDz-Ks5hhdNMswuwQ&s",
        rating: "4.9",
        year: "2023",
        desc: "Eren Yeager bắt đầu kế hoạch Rung chuyển thế giới để bảo vệ hòn đảo Paradis và những người anh yêu thương."
    },
    { 
        title: "Chú Thuật Hồi Chiến", 
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxHftNMUWTn_RN-djq838G4h7XtG6tiCQiVB-t_9L7g&s",
        rating: "4.9",
        year: "2023",
        desc: "Các chú thuật sư đối mặt với thảm họa Shibuya trong trận chiến sinh tử chống lại Gojo bị phong ấn."
    },
    { 
        title: "Black (Thần Chết)", 
        poster: "https://dep.com.vn/wp-content/uploads/2021/05/Black_Korean_Drama-P1.jpg",
        rating: "4.8",
        year: "2017",
        desc: "Một Thần Chết nhập vào cơ thể thám tử và vô tình yêu một cô gái có khả năng nhìn thấy cái chết của người khác."
    },
    { 
        title: "Doremon Bản Giao Hưởng Địa Cầu", 
        poster: "https://cdn2.tuoitre.vn/471584752817336320/2024/5/23/ban-giao-huong-dia-cau-1716449425924786270172.jpg",
        rating: "4.8",
        year: "2024",
        desc: "Doraemon và nhóm bạn sử dụng sức mạnh kỳ diệu của âm nhạc để cứu lấy Trái Đất khỏi nguy cơ diệt vong."
    },
    { 
        title: "Người Phục Tùng", 
        poster: "https://kilala.vn/data/upload/article/8526/phim-kimetsu-no-yaiba-mugen-ressha-hen.jpg",
        rating: "4.5",
        year: "2024",
        desc: "Câu chuyện về lòng trung thành và những âm mưu đen tối đằng sau sự phục tùng tuyệt đối trong giới thượng lưu."
    },
    { 
        title: "Biệt Đội Nhà Bên", 
        poster: "https://lifestyle.vnptmedia.vn/file/8a10a0d37084e67d017099082d9f5ca7/8a10a0d36e16e5b3016e3543dafd6aac/112025/image001_20251118102401.jpg",
        rating: "4.6",
        year: "2024",
        desc: "Những tình huống dở khóc dở cười của biệt đội kỳ lạ chuyên giải quyết rắc rối cho những người hàng xóm."
    },
    { 
        title: "Cười Xuyên Biên Giới", 
        poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hai_han_quoc_chieu_rap_1_3d4c12b977.jpg",
        rating: "4.7",
        year: "2024",
        desc: "Một huấn luyện viên bắn cung rơi vào tình cảnh trớ trêu khi phải dẫn dắt đội tuyển tại vùng rừng rậm Amazon."
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
    title: "Weak Hero Class 2 ",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_1_07bb7edcf1.jpg",
    rating: "4.9",
    year: "2025",
    desc: "Yeon Shi-eun chuyển đến trường mới, tiếp tục cuộc chiến chống lại bạo lực học đường bằng trí thông minh và sự lạnh lùng.",
    link: "https://motchillk.bz/phim/nguoi-hung-yeu-duoi-phan-2/tap-1"
  },
  {
    title: "One Punch Man",
    poster: "https://upload.wikimedia.org/wikipedia/vi/e/ea/One_Punch_Man_Vol_1.png",
    rating: "4.8",
    year: "2015",
    desc: "Saitama - người anh hùng có khả năng kết thúc mọi đối thủ chỉ bằng một cú đấm, đang đi tìm lại cảm giác phấn khích khi chiến đấu.",
    link : "https://motchillkr.io/phim/dam-phat-chet-luon-phan-1/tap-1-sv-0"
  },
  {
    title: "Điệp Viên Thanh Xuân",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_2_d25dad2783.jpg",
    rating: "4.6",
    year: "2024",
    desc: "Những điệp viên trẻ tuổi dấn thân vào các phi vụ nguy hiểm nhưng cũng không kém phần hài hước trong bối cảnh học đường."
  },
  {
    title: "The Dark Knight",
    poster: "https://upload.wikimedia.org/wikipedia/vi/2/2d/Poster_phim_K%E1%BB%B5_s%C4%A9_b%C3%B3ng_%C4%91%C3%AAm_2008.jpg",
    rating: "4.9",
    year: "2008",
    desc: "Batman đối mặt với kẻ thù nguy hiểm nhất - Joker, trong cuộc chiến bảo vệ chính nghĩa và linh hồn của thành phố Gotham."
  },
  {
    title: "Không Dung Thứ",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_4_558ba40ec1.jpg",
    rating: "4.7",
    year: "2024",
    desc: "Một hành trình báo thù tàn khốc của một người đàn ông bị dồn vào đường cùng bởi những kẻ tha hóa trong bộ máy quyền lực."
  },
  {
    title: "Tử Diệt Hồi Du",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_anime_hay_new_1_13bad35f5e.jpg",
    rating: "4.9",
    year: "2024",
    desc: "Trò chơi tử thần quy mô lớn do Kenjaku thiết lập buộc các chú thuật sư phải chiến đấu sinh tồn trong những rào chắn khép kín."
  },
  {
    title: "Ma Thuật Và CƠ Bắp",
    poster: "https://cdn.voh.com.vn/voh/Image/2023/07/19/anime-hanh-dong-5.jpg?t=o",
    rating: "4.7",
    year: "2023",
    desc: "Mash Burnedead - một cậu bé không có phép thuật trong thế giới pháp thuật, dùng cơ bắp để phá vỡ mọi quy tắc tại học viện."
  },
  {
    title: "Mối Liên Kết BÍ Ẩn",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_1_ccbb3f43af.jpg",
    rating: "4.8",
    year: "2024",
    desc: "Một thám tử chống ma túy bất ngờ bị ép dùng chất cấm, từ đó lật tẩy những mối quan hệ mờ ám giữa các thế lực ngầm."
  },
  {
    title: "Chánh Thang Tra 1958",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_2_e42ba138f4.jpg",
    rating: "4.8",
    year: "2024",
    desc: "Tiền truyện của series huyền thoại, theo chân thám tử Park Young-han trong những năm đầu chống lại sự bất công tại Seoul."
  },
  {
    title: "Attack On Titan",
    poster: "https://cdn.voh.com.vn/voh/Image/2022/05/04/top-anime-hanh-dong-hay-nhat-hinh-2.JPG?t=o",
    rating: "4.9",
    year: "2013",
    desc: "Nhân loại phải sống sau những bức tường khổng lồ để bảo vệ mình khỏi các Titan ăn thịt người tàn bạo và bí ẩn."
  },
  {
    title: "A Shop for Killers (2024)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_4_384304b914.jpg",
    rating: "4.8",
    year: "2024",
    desc: "Sau cái chết của chú mình, một cô gái trẻ phát hiện ra sự thật kinh hoàng về cửa hàng trực tuyến chuyên cung cấp vũ khí cho sát thủ."
  },
  {
    title: "Solo Leveling Season 2",
    poster: "https://static2.vieon.vn/vieplay-image/poster_v4/2025/09/26/ehgrj4hj_660x946-chuyensinhthathoangtu-s2.png",
    rating: "4.9",
    year: "2025",
    desc: "Sung Jin-Woo tiếp tục hành trình thăng cấp thần tốc, đối mặt với những thực thể quyền năng đe dọa sự tồn vong của thế giới."
  },
  {
    title: "Ký Sinh Thú: Vùng Xám - Parasyte",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_5_77baaad209.jpg",
    rating: "4.7",
    year: "2024",
    desc: "Những sinh vật ký sinh từ ngoài hành tinh xâm chiếm cơ thể người, ép một cô gái trẻ phải chung sống hòa bình với 'kẻ lạ' bên trong."
  },
  {
    title: "Stealer: The Treasure Keeper (2023)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hanh_dong_han_quoc_7_c1e4c47450.jpg",
    rating: "4.5",
    year: "2023",
    desc: "Một tên trộm di sản văn hóa bí ẩn hợp tác với đội thu hồi tài sản trái phép để đòi lại công lý cho lịch sử quốc gia."
  },
  {
    title: "Black Clover: New Season (2025)",
    poster: "https://a.storyblok.com/f/178900/1064x1505/c7e5cdea4b/black-clover-new.png/m/filters:quality(95)format(webp)",
    rating: "4.7",
    year: "2025",
    desc: "Asta tiếp tục nỗ lực trở thành Ma Pháp Vương trong một thế giới nơi phép thuật là tất cả, dù bản thân cậu không có chút ma pháp nào."
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
    poster: "https://cinema.momocdn.net/img/129339922699930699-hitman_2_-_teaser_poster.jpg?size=M",
    rating: "4.8",
    year: "2020",
    desc: "Một cựu điệp viên hàng đầu giả chết để theo đuổi ước mơ vẽ truyện tranh, nhưng vô tình để lộ bí mật quốc gia qua tác phẩm của mình.",
    link: "https://motchillk.bz/phim/sat-thu-vo-cung-cuc-hai/tap-full"
  },
  {
    title: "Weathering with You (Tenki no Ko)",
    poster: "https://upload.wikimedia.org/wikipedia/vi/0/03/Tenki_no_Ko_poster.jpg",
    rating: "4.8",
    year: "2019",
    desc: "Một nam sinh bỏ nhà lên Tokyo và gặp được cô gái có khả năng điều khiển thời tiết, mở ra một hành trình cảm động giữa bầu trời.",
    link : "https://animehay.mx/dua-con-cua-thoi-tiet/#video-player"
  },
  {
    title: "Hello Ghost",
    poster: "https://m.media-amazon.com/images/M/MV5BZjkyNjZmMjAtNmY3YS00NzhjLTg3N2ItZDhmNTk2ZmUxMjMyXkEyXkFqcGc@._V1_.jpg",
    rating: "4.9",
    year: "2010",
    desc: "Một người đàn ông tuyệt vọng bỗng dưng nhìn thấy bốn con ma đi theo mình, buộc anh phải giúp họ thực hiện những tâm nguyện cuối cùng."
  },
  {
    title: "Lớp Học Ám Sát ",
    poster: "https://i.redd.it/hpyshwrvcrnf1.jpeg",
    rating: "4.9",
    year: "2015",
    desc: "Các học sinh lớp 3-E phải tìm cách ám sát thầy giáo bạch tuộc Koro-sensei siêu năng lực trước khi thầy phá hủy Trái Đất."
  },
  {
    title: "Haeundae Lovers",
    poster: "https://i.ebayimg.com/images/g/s40AAOSwWnpmdn8P/s-l1200.jpg",
    rating: "4.4",
    year: "2012",
    desc: "Một công tố viên bị mất trí nhớ và lạc vào gia đình một trùm xã hội đen cũ, dẫn đến những tình huống yêu đương dở khóc dở cười."
  },
  {
    title: "The Cat Returns ",
    poster: "https://resizing.flixster.com/eNcxbbFFPyfkZXrRCJEgwbVP004=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQ3MjYzNGI2LTYxYzItNGM5YS04YjAyLTU5YTRjYWJlYjQwZC5qcGc=",
    rating: "4.7",
    year: "2002",
    desc: "Sau khi cứu một chú mèo khỏi tai nạn, cô bé Haru bị lôi cuốn vào một thế giới kỳ ảo của vương quốc loài mèo."
  },
  {
    title: "Welcome to Dongmakgol",
    poster: "https://play-lh.googleusercontent.com/vxvlv0QrrtOBRi5qkHqljMbdAker_wkS1s9hrcZghYfMgKGeQa6XeloIx80Y_DtZ2ZfJ",
    rating: "4.8",
    year: "2005",
    desc: "Trong chiến tranh, lính của cả hai miền bỗng dưng lạc vào một ngôi làng biệt lập, nơi họ học cách chung sống hòa bình và yêu thương."
  },
  {
    title: "Vùng Đất Linh Hồn",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/s/p/spirited-away---poster-01.jpg",
    rating: "4.9",
    year: "2001",
    desc: "Cô bé Chihiro bị lạc vào thế giới linh hồn kỳ quái và phải làm việc trong nhà tắm công cộng để giải cứu cha mẹ mình."
  },
  {
    title: "My Sassy Girl",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/My_Sassy_Girl_Teaser_Poster.jpg/250px-My_Sassy_Girl_Teaser_Poster.jpg",
    rating: "4.8",
    year: "2001",
    desc: "Một bộ phim tình cảm hài hước kinh điển về mối quan hệ giữa một chàng sinh viên hiền lành và một cô nàng ngổ ngáo."
  },
  {
    title: "The Way of the Househusband",
    poster: "https://bloganchoi.com/wp-content/uploads/2024/07/phim-anime-hai-hay-nhat-2024-2-696x980.jpg",
    rating: "4.6",
    year: "2021",
    desc: "Một ông trùm Yakuza huyền thoại giải nghệ để trở thành 'ông nội trợ' mẫu mực, chăm lo cho gia đình bằng phong cách sát thủ."
  },
  {
    title: "Miracle in Cell No.7",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Miracle_in_Cell_No._7_poster.jpg/250px-Miracle_in_Cell_No._7_poster.jpg",
    rating: "4.9",
    year: "2013",
    desc: "Câu chuyện cảm động về tình cha con giữa một người cha thiểu năng trí tuệ bị oan sai và con gái mình trong phòng giam số 7."
  },
  {
    title: "Odd Taxi (2021)",
    poster: "https://cdn1.fahasa.com/media/catalog/product/o/d/oddtaxi_tap_1_bia.jpg",
    rating: "4.9",
    year: "2021",
    desc: "Một tài xế taxi trung niên dính líu vào một vụ án mất tích bí ẩn qua những cuộc trò chuyện kỳ lạ với hành khách."
  },
  {
    title: "Scandal Makers",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Scandal_Maker_poster.jpeg",
    rating: "4.7",
    year: "2008",
    desc: "Một DJ nổi tiếng bỗng dưng đối mặt với một cô gái trẻ tự xưng là con gái mình, kéo theo cả một đứa cháu ngoại bất đắc dĩ."
  },
  {
    title: "Nhân Duyên Tiền Đình",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hai_han_quoc_chieu_rap_9_bfa52d8012.jpg",
    rating: "4.6",
    year: "2023",
    desc: "Một nhà phát triển bánh kẹo tài giỏi nhưng vụng về trong giao tiếp tìm thấy tình yêu bất ngờ với một nhân viên trung tâm cuộc gọi lạc quan."
  },
  {
    title: "Extreme Job",
    poster: "https://m.media-amazon.com/images/M/MV5BNjkwYmRiY2EtYTAwZi00ZTA1LTk4OTgtNzlhYTVlM2RmOWExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.8",
    year: "2019",
    desc: "Một biệt đội cảnh sát phòng chống ma túy mở tiệm gà rán để theo dõi tội phạm, nhưng tiệm gà lại trở nên quá nổi tiếng."
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
    poster: "https://m.media-amazon.com/images/M/MV5BMTMzNDM0OTA3N15BMl5BanBnXkFtZTcwNzk0NjEzMQ@@._V1_.jpg",
    rating: "4.9",
    year: "2004",
    desc: "Một câu chuyện tình đầy nước mắt khi người vợ dần mất đi ký ức vì căn bệnh Alzheimer sớm, để lại nỗi đau cho người chồng."
  },
  {
    title: "The Classic",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavkyWViT-rr0uaxl4lOpjcbulDf7AO9B_yA&s",
    rating: "4.8",
    year: "2003",
    desc: "Đan xen giữa quá khứ và hiện tại, bộ phim kể về hai mối tình đẹp nhưng dang dở được kết nối qua những bức thư cũ.",
    link : "https://www.motchill46.com/phim/mot-thoi-de-nho/tap-full"
  },
  {
    title: "She Would Never Know",
    poster: "https://image.voh.com.vn/voh/Image/2021/12/01/phim-tinh-cam-han-quoc-nam-2021-anh1.jpg?t=o&w=1280&q=85",
    rating: "4.5",
    year: "2021",
    desc: "Mối tình công sở lãng mạn giữa một cô nàng cấp trên nghiêm túc và cậu hậu bối kiên trì đeo đuổi tình cảm."
  },
  {
    title: "Your Name",
    poster: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    rating: "4.9",
    year: "2016",
    desc: "Hai thiếu niên xa lạ bỗng nhiên bị hoán đổi thân xác, mở ra một sợi dây liên kết kỳ ảo giữa thời gian và không gian."
  },
  {
    title: "Be With You",
    poster: "https://m.media-amazon.com/images/M/MV5BZjU2NDFkNGItYTI0ZC00ZjUxLTllYTMtMmJhYzUxYmM2OWRjXkEyXkFqcGc@._V1_.jpg",
    rating: "4.8",
    year: "2018",
    desc: "Người vợ đã qua đời bỗng dưng trở lại vào một ngày mưa nhưng không còn ký ức, mang đến phép màu ngắn ngủi cho gia đình nhỏ."
  },
  {
    title: "Youth of May",
    poster: "https://image.voh.com.vn/voh/Image/2021/12/01/phim-tinh-cam-han-quoc-nam-2021-anh4.jpg?t=o&w=1280&q=85",
    rating: "4.8",
    year: "2021",
    desc: "Một chuyện tình buồn lấy bối cảnh cuộc bạo động Gwangju năm 1980, khi số phận chia cắt những trái tim trẻ trung."
  },
  {
    title: "20th Century Girl",
    poster: "https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2022/10/20th-century-girl-nhu-phien-ban-dien-anh-o-vu-tru-khac-cua-25-21_63577cc98cb3b.jpeg",
    rating: "4.7",
    year: "2022",
    desc: "Năm 1999, một nữ sinh trung học nỗ lực tìm hiểu về 'crush' của bạn thân, nhưng cuối cùng chính cô lại tìm thấy mối tình đầu."
  },
  {
    title: " Dáng hình thanh âm",
    poster: "https://upload.wikimedia.org/wikipedia/vi/c/c6/Koe_no_Katachi_Film_Poster.jpg",
    rating: "4.9",
    year: "2016",
    desc: "Câu chuyện cảm động về sự chuộc lỗi của một nam sinh đối với cô bạn khiếm thính mà cậu từng bắt nạt thời thơ ấu."
  },
  {
    title: "Thiên thần đáng yêu của bố ",
    poster: "https://img.ahaphimz.com/poster/thumb/68747470733a2f2f692e696d6775722e636f6d2f355952334f76732e6a7067.jpg",
    rating: "4.7",
    year: "2021",
    desc: "Một người đàn ông sống độc thân bỗng phải chăm sóc một cô bé khuyết tật cả thính giác và thị giác, dần mở lòng mình hơn."
  },
  {
    title: "The Beauty Inside",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/The_Beauty_Inside_%28TV_series%29.jpg/250px-The_Beauty_Inside_%28TV_series%29.jpg",
    rating: "4.8",
    year: "2015",
    desc: "Mỗi sáng thức dậy, anh ta lại mang một diện mạo khác nhau, thử thách tình yêu chân chính không phụ thuộc vào vẻ bề ngoài."
  },
  {
    title: "Crash Landing on You",
    poster: "https://m.media-amazon.com/images/M/MV5BZjM3ZGQ4ZTMtOTNjMS00NmJlLTljMWUtNWExMzJhMGJlMWNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "4.9",
    year: "2019",
    desc: "Một nữ tài phiệt Hàn Quốc gặp tai nạn dù lượn và lạc sang Bắc Triều Tiên, được một sĩ quan quân đội giúp đỡ và yêu thương."
  },
  {
    title: "The Wind Rises - Gió nổi (2013)",
    poster: "https://chiecnon.wordpress.com/wp-content/uploads/2014/10/the-wind-rises-20131.jpg",
    rating: "4.8",
    year: "2013",
    desc: "Hành trình theo đuổi giấc mơ chế tạo máy bay của Jiro Horikoshi đan xen với chuyện tình buồn giữa thời chiến loạn."
  },
  {
    title: "Double Patty (2021)",
    poster: "https://simg.zalopay.com.vn/zlp-website/assets/phim_tinh_cam_ngan_han_quoc_9_d88df6594d.jpg",
    rating: "4.3",
    year: "2021",
    desc: "Mối liên kết giữa hai người trẻ đang vật lộn với ước mơ và cuộc sống thực tại qua những bữa ăn khuya tại tiệm bánh hamburger."
  },
  {
    title: "Past Lives",
    poster: "https://www.mvtimes.com/mvt/uploads/2023/07/Past-Lives.jpg",
    rating: "4.8",
    year: "2023",
    desc: "Hai người bạn thanh mai trúc mã gặp lại nhau tại New York sau nhiều năm xa cách, cùng suy ngẫm về duyên phận và những ngã rẽ cuộc đời."
  },
  {
    title: "Josee: the Tiger and the Fish",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/j/o/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg",
    rating: "4.7",
    year: "2020",
    desc: "Một nữ sinh khuyết tật luôn sống trong thế giới tưởng tượng của riêng mình bắt đầu khám phá thế giới thực nhờ sự giúp đỡ của một chàng sinh viên."
  }
]
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
    poster: "https://toomva.com/images/posts/2025/03/sakamoto-days-season-1.webp",
    bg: "https://static.beebom.com/wp-content/uploads/2025/03/sakamoto-days-season-1-part-2-poster.jpg?w=1168&quality=75"
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

const style = document.createElement('style');
style.innerHTML = `
    .vplay-search-box {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 25px;
        transition: all 0.4s ease;
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
        box-shadow: 0 0 10px rgba(88, 166, 24, 0.5);
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
    .search-btn-trigger {
        width: 42px; height: 42px; min-width: 42px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; color: white; background: none; border: none;
    }
`;
document.head.appendChild(style);
const searchDataAll = [...films, ...actionFilms, ...humorousfilms, ...TCfilms];

document.addEventListener('DOMContentLoaded', () => {
    const headerRight = document.querySelector('.header-right');
    const oldBtn = headerRight ? headerRight.querySelector('.icon-btn:not(.avatar)') : null;

    if (!oldBtn) return;

    const searchBox = document.createElement('div');
    searchBox.className = 'vplay-search-box';
    searchBox.id = 'vplaySearchBox';
    searchBox.innerHTML = `
        <button class="search-btn-trigger" id="vplayTrigger">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" id="vplayInput" placeholder="Tìm tên phim...">
    `;
    oldBtn.replaceWith(searchBox);
    const overlay = document.createElement('div');
    overlay.id = 'vplaySearchOverlay';
    overlay.style.cssText = "position:fixed; top:80px; left:0; width:100%; height:100vh; background:rgba(10,10,10,0.98); z-index:9999; display:none; padding:40px 60px; overflow-y:auto;";
    overlay.innerHTML = `
        <h3 style="color:#58a618; margin-bottom:20px; font-family:sans-serif;">Kết quả tìm kiếm cho: <span id="searchKey" style="color:#fff"></span></h3>
        <div id="vplayResults" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:25px;"></div>
    `;
    document.body.appendChild(overlay);

    const vplayInput = document.getElementById('vplayInput');
    const vplayTrigger = document.getElementById('vplayTrigger');
    const vplayResults = document.getElementById('vplayResults');
    const searchKeyDisplay = document.getElementById('searchKey');
    vplayTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            vplayInput.focus();
        } else {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    vplayInput.addEventListener('input', function() {
        const val = this.value.trim().toLowerCase();
        if (val.length > 0) {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            searchKeyDisplay.innerText = this.value;

            const filtered = searchDataAll.filter(m => m.title.toLowerCase().includes(val));
            
            if (filtered.length === 0) {
                vplayResults.innerHTML = `<p style="color:gray;">Không tìm thấy phim phù hợp...</p>`;
            } else {
                vplayResults.innerHTML = filtered.map(f => `
                    <div class="film-cardme" onclick="window.open('${f.link || '#'}', '_blank')" style="cursor:pointer">
                        <img src="${f.poster}" style="width:100%; border-radius:10px;">
                        <p style="color:white; margin-top:10px; font-size:14px; text-align:center;">${f.title}</p>
                    </div>
                `).join("");
            }
        } else {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            vplayInput.value = '';
        }
    });
});