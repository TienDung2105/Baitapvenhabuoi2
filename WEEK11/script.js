const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    category: "Điện thoại",
    price: 34990000,
    img: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Điện thoại",
    price: 31990000,
    img: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg"
  },
  {
    id: 3,
    name: "MacBook Air M2 13 inch",
    category: "Laptop",
    price: 26990000,
    img: "https://apple.ngocnguyen.vn/cdn/images/202311/goods_img/macbook-air-13-inch-2022-m2-chinh-hang-G15523-1699870885486.jpg"
  },
  {
    id: 4,
    name: "iPad Air 5 M1 WiFi 64GB",
    category: "Tablet",
    price: 14990000,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5GZtiYrwH1MUxNMj4yUvxI9-3Ms8EfW9UPg9oSQBObI7zDwpB_MtgTixqadDEPLKMJQgyNMuLxjE7xZirEFUo5F3ftQic9Q2BxuBXZq2uzEJDDZj6dpB0WSGYSRFM3XIQIylXxw&usqp=CAc"
  },
  {
    id: 5,
    name: "Tai nghe AirPods Pro 2",
    category: "Phụ kiện",
    price: 5990000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHHilYftBfqkY5URHgsp3rmIaopGhypO0PQ&s"
  },
  {
    id: 6,
    name: "Loa Bluetooth JBL Flip 6",
    category: "Âm thanh",
    price: 2990000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMba8cyiQ5zQPaiSf4fS7lobIBLsb7cLRPcA&s"
  },
  {
    id: 7,
    name: "Ghế Gaming Xpanse", 
    category: "Ghế",
    price: 3990000,
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmShhkGbmvfeKhPionXZ8l48X1yEoZUApZJKuIxtH6N_24Et9Wq6X5VF4M2Y3nZBEq_IpdllunrkxJ479nPRTBvqg4rkYTVqhMoUWGYIJwUujbRRpBLqiMhLcZ6xrj-kajioIQ7w&usqp=CAc"
  },
  {
    id: 8,
    name: "Màn Hình LED Samsung 24 inch",
    category: "Màn Hình",
    price: 3990000,
    img: "https://images.samsung.com/is/image/samsung/p6pim/vn/ls24f350fhexxv/gallery/vn-led-sf350-ls24f350fhexxv-538629749?$Q90_1248_936_F_PNG$"
  },
  {
    id: 9,
    name: "Bàn phím cơ Aula F80",
    category: "Bàn Phím",
    price: 2990000,
    img: "https://phucanhcdn.com/media/product/55673_ban_phim_co_aula_3_mode_aula_f87_pro_black_gradient_5.jpg"
  }
];

let cart = [];

/* HELPER */
const formatMoney = (money) => {
  return money.toLocaleString("vi-VN") + " ₫";
};

/* RENDER PRODUCTS */
const renderProducts = () => {
  const list = document.getElementById("product-list");
  if (!list) return;

  list.innerHTML = products.map(p => `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatMoney(p.price)}</p>
      <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
    </div>
  `).join("");
};

/* RENDER CART */
const renderCart = () => {
  const cartList = document.getElementById("cart-list");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (!cartList || !cartCount || !cartTotal) return;

  if (cart.length === 0) {
    cartList.innerHTML = "Giỏ hàng trống";
    cartCount.innerText = 0;
    cartTotal.innerText = "";
    return;
  }

  let total = 0;
  let qty = 0;

  cartList.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    qty += item.quantity;

    return `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h4>${item.name}</h4>
          <p>${formatMoney(item.price)}</p>
          <div class="qty">
            <button onclick="updateQty(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${item.id}, 1)">+</button>
            <button class="remove" onclick="removeItem(${item.id})">x</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  cartCount.innerText = qty;
  cartTotal.innerText = "Tổng tiền: " + formatMoney(total);
};

/* LOGIC */
const addToCart = (id) => {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
};

const updateQty = (id, change) => {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity < 1) {
    removeItem(id);
    return;
  }

  renderCart();
};

const removeItem = (id) => {
  if (confirm("Xóa sản phẩm này?")) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
  }
};

const checkout = () => {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  alert("Thanh toán thành công 🎉");
  cart = [];
  renderCart();
};

/* INIT */
renderProducts();
renderCart();
