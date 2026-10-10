const slides = document.querySelectorAll(".hero__slide");
const dots = document.querySelectorAll(".hero__dots button");
const prevButton = document.querySelector(".hero__arrow--prev");
const nextButton = document.querySelector(".hero__next");
const menuButton = document.querySelector(".nav__menu-button");
const mobileMenu = document.querySelector("#mobileMenu");
const heroCopy = document.querySelector("#heroCopy");
const heroEyebrow = document.querySelector("#heroEyebrow");
const heroTitle = document.querySelector("#heroTitle");
const heroCaption = document.querySelector("#heroCaption");
const desktopQuery = window.matchMedia("(min-width: 1025px)");

const slideContent = [
  {
    copyClass: "hero__copy--left",
    eyebrow: "Bảo Tàng Văn Học Việt Nam",
    lines: ["Văn Chương", "Ký Ức", "Việt Nam"],
    caption:
      "Trước trụ sở Hội Văn Nghệ Việt Nam tại huyện Đại Từ, Thái Nguyên - 1949.<br />Từ trái sang phải: Ngô Tất Tố, Nguyễn Xuân Sanh, Tô Hữu, Xuân Diệu, Thế Lữ, Nguyễn Huy Tưởng, Nguyễn Tuân"
  },
  {
    copyClass: "hero__copy--bottom-left",
    eyebrow: "Không Gian",
    lines: ["Bảo Tàng", "Văn Học Việt Nam", ""],
    caption:
      "Không gian trưng bày tư liệu, hiện vật và chân dung các tác giả tiêu biểu của văn học Việt Nam."
  },
  {
    copyClass: "hero__copy--bottom-right",
    eyebrow: "Tài Liệu",
    lines: ["Những Tác Phẩm", "Văn Học Cổ", ""],
    caption:
      "Những bản in, sổ tay và tư liệu quý lưu giữ dấu ấn của các giai đoạn văn học Việt Nam."
  }
];

let currentSlide = 0;

function renderSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const content = slideContent[currentSlide];

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentSlide);
  });

  heroCopy.className = `hero__copy ${content.copyClass}`;
  heroEyebrow.textContent = content.eyebrow;
  heroTitle.innerHTML = content.lines
    .filter(Boolean)
    .map((line) => `<span>${line}</span>`)
    .join("<br />");
  heroCaption.innerHTML = content.caption;
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

prevButton.addEventListener("click", () => {
  renderSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  renderSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    renderSlide(index);
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

desktopQuery.addEventListener("change", (event) => {
  if (event.matches) {
    closeMobileMenu();
  }
});

renderSlide(0);
