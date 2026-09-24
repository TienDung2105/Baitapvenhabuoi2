# Pages Folder

Thư mục `pages` chứa toàn bộ các trang của website.

## Nguyên tắc tổ chức
1. Mỗi trang được đặt trong một thư mục riêng
2. Các file (HTML, CSS, JS) liên quan đến trang nào thì đặt trong thư mục của trang đó
3. Các thành phần dùng chung cho nhiều trang được đặt trong thư mục `common`

## Ví dụ một cấu trúc thư mục (bê từ GPT nốt :v)
```
pages/
├── home/
│   ├── index.html
│   ├── main.css
│   ├── responsive.js
│   └── index.js
├── about/
│   ├── index.html
│   ├── main.css
│   ├── responsive.js
│   └── index.js
├── product/
│   ├── index.html
│   ├── main.css
│   ├── responsive.js
│   └── index.js
├── contact/
│   ├── index.html
│   ├── main.css
│   ├── responsive.js
│   └── index.js
└── common/ (Cái này copy paste nhé =>>>)
    ├── components/
    │   ├── header.html
    │   ├── footer.html
    │   └── modal.html
    │
    ├── styles/
    │   ├── reset.css
    │   ├── layout.css
    │   └── variables.css
    │
    └── scripts/
        ├── main.js
        ├── utils.js
        └── auth.js
```
## Quy ước
- Tên thư mục và file dùng chữ thường
- Tên trang rõ nghĩa, không viết tắt
- File HTML chính của mỗi trang nên đặt tên là `index.html`

## Lưu ý
- Không đặt file của nhiều trang chung một thư mục
- Không viết logic của trang này vào file của trang khác
