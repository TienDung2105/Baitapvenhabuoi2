# Assets Folder

Đây là thư mục chứa toàn bộ tài nguyên (assets) dùng cho website.

## Nguyên tắc tổ chức
1. Tài nguyên được phân loại theo từng nhóm (ảnh, phông chữ, icon, video, ...)
2. Trong mỗi nhóm tài nguyên, tiếp tục phân theo từng trang (page) hoặc chức năng sử dụng
3. Mỗi loại tài nguyên được đặt trong thư mục riêng của nó

## Một ví dụ cấu trúc thư mục (copy từ GPT :v)
```
assets/
├── images/
│   ├── home/
│   ├── about/
│   ├── product/
│   └── common/
│
├── icons/
│   ├── header/
│   ├── footer/
│   └── common/
│
├── fonts/
│   ├── roboto/
│   └── poppins/
│
├── videos/
│   ├── home/
│   └── ads/
│
└── audios/
    └── notification/
```
## Quy ước đặt tên
- Tên file dùng chữ thường
- Các từ ngăn cách bằng dấu gạch ngang (-)
- Không dùng dấu tiếng Việt

Ví dụ:
- banner-home.png
- icon-search.svg
- bg-product-detail.jpg

## Lưu ý
- Không để tài nguyên không rõ nguồn gốc
- Không để file không sử dụng
- Khi thêm tài nguyên mới, hãy đặt đúng thư mục theo quy định
