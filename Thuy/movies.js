const movieData = [
    {
        title: "Phim bộ Việt Nam đặc sắc",
        movies: [
            {
                "name": "Thời Tới Cản Không Kịp",
                "img": "https://img-ali1.tv360.vn/image1/2023/11/10/16/1699608416440/0eaadc5ec4e1_360_540.jpg",
                "rating": 4.8,
                "year": 2024,
                "duration": "10 tập",
                "country": "Việt Nam",
                "desc": "Câu chuyện hài hước về những tình huống dở khóc dở cười khi vận may bất ngờ ập đến với một gia đình."
            },
            {
                "name": "Kẻ Thủ Ác",
                "img": "https://images.fptplay53.net/media/photo/OTT/2025/12/22/ke-thu-ac-fpt-play-1745397832054landscape_1766372422434.webp?w=400",
                "rating": 4.2,
                "year": 2023,
                "duration": "12 tập",
                "country": "Việt Nam",
                "desc": "Hành trình truy đuổi tên sát nhân biến thái đầy kịch tính và những bí mật kinh hoàng dần được hé lộ."
            },
            {
                "name": "Xét Nghiệm",
                "img": "https://htv.mediacdn.vn/155334506109014016/2025/9/8/1-1757310319765373584674.png",
                "rating": 4.5,
                "year": 2025,
                "duration": "7 tập",
                "country": "Việt Nam",
                "desc": "Đứng trước nguy cơ mù lòa do di truyền, Minh bắt đầu hành trình tìm cha ruột và tìm thấy giá trị đích thực của cuộc sống."
            },
            {
                "name": "Tôi Là Diệp Chi Mai",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglsnMgYPYodx9QLLQE1UoCcsHr0Qwmp5rlg&s",
                "rating": 4.6,
                "year": 2024,
                "duration": "20 tập",
                "country": "Việt Nam",
                "desc": "Hành trình vượt qua định kiến và sóng gió gia đình để khẳng định bản thân của cô gái trẻ Diệp Chi Mai."
            },
            {
                "name": "Nhà Mình Lạ Lắm!",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/12/30/nha-minh-la-lam-fpt-play-1767059511487_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.7,
                "year": 2023,
                "duration": "12 tập",
                "country": "Việt Nam",
                "desc": "Một gia đình 'giả' được lập ra để giúp một cô bé hồi phục trí nhớ, tạo nên những tình huống dở khóc dở cười."
            },
            {
                "name": "Tam Thái Tử",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/07/29/tam-thai-tu-fpt-play-1722226576556_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.4,
                "year": 2024,
                "duration": "6 tập",
                "country": "Việt Nam",
                "desc": "Câu chuyện xoay quanh ba người con trai của một gia đình giàu có với những tham vọng và mâu thuẫn chồng chéo."
            },
            {
                "name": "Ngược Dòng Sóng Bạc (Phần 2)",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/04/24/nguoc-dong-song-bac-phan-2-fpt-play-1745489930136_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.3,
                "year": 2024,
                "duration": "15 tập",
                "country": "Việt Nam",
                "desc": "Tiếp nối hành trình đầy gian nan trong giới thượng lưu, nơi lòng người còn khó đoán hơn cả những con sóng dữ."
            },
            {
                "name": "Những Ngôi Nhà Trong Hẻm",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/11/04/nhung-ngoi-nha-trong-hem-fpt-play-1762235204832_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.1,
                "year": 2023,
                "duration": "30 tập",
                "country": "Việt Nam",
                "desc": "Bức tranh chân thực về cuộc sống của người dân lao động trong những con hẻm nhỏ tại thành phố hiện đại."
            }
        ]
    },

    {
        title: "Phim tiên hiệp, huyền huyễn",
        movies: [
            {
                "name": "Thập Nhị Đàm",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/03/15/thap-nhi-dam-fpt-play-1710498032892_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.1,
                "year": 2021,
                "duration": "32 tập",
                "country": "Trung Quốc",
                "desc": "Câu chuyện tình xuyên thế kỷ giữa một vị thần đá và yêu tinh Dạ Minh trong thế giới kỳ ảo nửa thần nửa yêu."
            },
            {
                "name": "Tiêu Dao",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/12/30/tieu-dao-fpt-play-1767080137562_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.5,
                "year": 2025,
                "duration": "40 tập",
                "country": "Trung Quốc",
                "desc": "Hành trình tiên hiệp đầy kịch tính với kịch bản ngược tâm hấp dẫn và kỹ xảo mãn nhãn."
            },
            {
                "name": "Liệt Diễm Chi Vũ Canh Kỷ",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/03/27/liet-diem-chi-vu-canh-ky-fpt-play-1711523782731_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.2,
                "year": 2024,
                "duration": "40 tập",
                "country": "Trung Quốc",
                "desc": "Hoàng tử nhân tộc Ngũ Canh sau khi mất đi gia đình đã dẫn dắt đại quân chống lại Thần tộc để giải phóng nô lệ."
            },
            {
                "name": "Tân Long Môn Khách Sạn",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/06/24/tan-long-mon-khach-san-fpt-play-1750763331370_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 3.8,
                "year": 2024,
                "duration": "95 phút",
                "country": "Trung Quốc",
                "desc": "Cuộc đối đầu kinh điển giữa các thế lực chính tà tại một khách điếm vùng sa mạc quan ngoại."
            },
            {
                "name": "Kỳ Kim Triêu",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/01/25/tien-kiem-ky-hiep-6-ky-kim-trieu-fpt-play-1706175472110_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.4,
                "year": 2024,
                "duration": "36 tập",
                "country": "Trung Quốc",
                "desc": "Chuyến hành trình của đôi bạn thanh mai trúc mã đi tìm lại ký ức đã mất trong thế giới Tiên Kiếm."
            },
            {
                "name": "Đại Mộng Quy Ly",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/10/08/dai-mong-quy-ly-fpt-play-1728387774481_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.6,
                "year": 2024,
                "duration": "34 tập",
                "country": "Trung Quốc",
                "desc": "Đại yêu Chu Yếm dẫn dắt một nhóm thợ săn yêu quái giải quyết các vụ án kỳ bí, bảo vệ hòa bình giữa hai giới."
            },
            {
                "name": "Hiến Ngư",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/08/25/hien-ngu-fpt-play-1756084866394_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.5,
                "year": 2025,
                "duration": "33 tập",
                "country": "Trung Quốc",
                "desc": "Mối nhân duyên trớ trêu giữa một đại ma vương lạnh lùng và cô gái hiện đại xuyên không với triết lý sống 'cá mặn'."
            },
            {
                "name": "Lâm Giang Tiên",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/06/02/lam-giang-tien-fpt-play-1748860146373_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.3,
                "year": 2025,
                "duration": "32 tập",
                "country": "Trung Quốc",
                "desc": "Câu chuyện tình xuyên kiếp đầy bi kịch và hận thù giữa hai vị tiên nhân bị cuốn vào vòng lặp 'kết hôn - sát phu - tái sinh'."
            }
        ]
    },

    {
        title: "Tình yêu chốn công sở",
        movies: [
            {
                "name": "Chàng Thư Ký Hoàn Hảo",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/12/27/chang-thu-ky-hoan-hao-fpt-play-1735269436731_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.5,
                "year": 2024,
                "duration": "24 tập",
                "country": "Trung Quốc",
                "desc": "Câu chuyện tình yêu công sở đầy thú vị giữa một giám đốc lạnh lùng và anh chàng thư ký toàn năng, luôn giải quyết mọi rắc rối."
            },
            {
                "name": "25 Giờ Yêu Đương",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2023/12/11/25-gio-yeu-duong-fpt-play-1702258877007_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.3,
                "year": 2023,
                "duration": "24 tập",
                "country": "Trung Quốc",
                "desc": "Mối tình chị em ngọt ngào giữa một nữ cường nhân bận rộn và chàng diễn viên lồng tiếng trẻ tuổi, ấm áp."
            },
            {
                "name": "Nhân Viên Tài Năng Đổng Đổng Ân",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/11/25/nhan-vien-tai-nang-dong-dong-an-fpt-play-1732512166369_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.2,
                "year": 2023,
                "duration": "24 tập",
                "country": "Trung Quốc",
                "desc": "Cuộc đối đầu 'oan gia ngõ hẹp' giữa cô nhân viên phụ trách khách hàng lanh lợi và vị khách hàng khó tính bậc nhất."
            },
            {
                "name": "Bên Anh Sống Ở Cạnh Nhà Tôi",
                "img": "https://images.fptplay53.net/media//VOD/Chinese/2021/11/PartyAWhoLivesBesideMe_2021_CN_B_24T/PartyAWhoLivesBesideMe_2021_CN_B_24T185154_Slider_LandScape_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.1,
                "year": 2021,
                "duration": "24 tập",
                "country": "Trung Quốc",
                "desc": "Mối nhân duyên tình cờ giữa hai người hàng xóm cùng làm chung ngành thiết kế, từ xa lạ trở nên gắn bó sâu sắc."
            },
            {
                "name": "Thế Giới Cool Ngầu",
                "img": "https://images.fptplay53.net/media//VOD/Chinese/2021/08/TheWorldIsCool_2021_CN_B_40T/TheWorldIsCool_2021_CN_B_40T175348_Slider_LandScape_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.0,
                "year": 2021,
                "duration": "40 tập",
                "country": "Trung Quốc",
                "desc": "Hành trình khởi nghiệp và tìm kiếm tình yêu của những thanh niên trẻ tuổi trong thời đại truyền thông số đầy biến động."
            },
            {
                "name": "Không Chỉ Là Yêu",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2025/02/06/khong-chi-la-yeu-fpt-play-1738835244494_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.4,
                "year": 2023,
                "duration": "24 tập",
                "country": "Trung Quốc",
                "desc": "Câu chuyện yêu thầm suốt nhiều năm giữa một nhà biên kịch trẻ và vị giám đốc sản xuất phim tài ba."
            },
            {
                "name": "Dừng Lại Đại Tiểu Thư",
                "img": "https://images.fptplay53.net/media//VOD/Chinese/2021/07/StopMissHua_2021_CN_B_24T/StopMissHua_2021_CN_B_24T95049_Slider_LandScape_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 3.9,
                "year": 2023,
                "duration": "20 tập",
                "country": "Trung Quốc",
                "desc": "Vở kịch hôn nhân hợp đồng giữa nàng tiểu thư mạnh mẽ và chàng vệ sĩ bí ẩn mang trong mình những âm mưu riêng."
            },
            {
                "name": "Thư Ký Kim Sao Thế",
                "img": "https://images.fptplay53.net/media/OTT/VOD/2024/06/26/thu-ky-kim-sao-the-fpt-play-1719379250661_Background_origin.jpg?h=214&w=380&c=0&fmt=webp",
                "rating": 4.9,
                "year": 2018,
                "duration": "16 tập",
                "country": "Hàn Quốc",
                "desc": "Chuyện tình hài hước khi vị phó chủ tịch tự luyến tìm mọi cách giữ chân cô thư ký hoàn hảo sau khi cô nộp đơn thôi việc."
            }
        ]
    }
]

console.log("Dữ liệu đã sẵn sàng trong movie.js:", movieData);