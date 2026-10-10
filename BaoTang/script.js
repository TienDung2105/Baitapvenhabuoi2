import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function initDateLabel() {
  const label = $("#todayLabel");
  if (!label) return;

  const formatter = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  label.textContent = formatter.format(new Date());
}

function initMobileMenu() {
  const toggle = $(".menu-toggle");
  const menu = $("#mainMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initSearchModal() {
  const modal = $("#searchModal");
  const openButtons = $$("[data-open-search]");
  const closeButtons = $$("[data-close-search]");
  if (!modal) return;

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    $("input", modal)?.focus();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  $(".search-form", modal)?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("input", modal)?.value.trim();
    if (query) {
      alert(`Từ khóa tìm kiếm: ${query}`);
      closeModal();
    }
  });
}

function initHeroSlider() {
  const slider = $("#heroSlider");
  if (!slider) return;

  const slides = $$(".hero-slide", slider);
  const prev = $(".hero-control--prev", slider);
  const next = $(".hero-control--next", slider);
  const dotsHost = $(".hero-dots", slider);
  let index = 0;
  let timerId;

  const dots = slides.map((_, dotIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Chuyển đến tin ${dotIndex + 1}`);
    button.addEventListener("click", () => showSlide(dotIndex, true));
    dotsHost.appendChild(button);
    return button;
  });

  function showSlide(nextIndex, shouldResetTimer = false) {
    slides[index].classList.remove("is-active");
    dots[index].classList.remove("is-active");
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dots[index].classList.add("is-active");

    if (shouldResetTimer) restartTimer();
  }

  function restartTimer() {
    window.clearInterval(timerId);
    timerId = window.setInterval(() => showSlide(index + 1), 6500);
  }

  prev?.addEventListener("click", () => showSlide(index - 1, true));
  next?.addEventListener("click", () => showSlide(index + 1, true));

  dots[0]?.classList.add("is-active");
  restartTimer();
}

function initTabs() {
  const buttons = $$(".tab");
  const panels = $$(".tab-content");
  if (!buttons.length || !panels.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.tabPanel === target);
      });
    });
  });
}

function initArtifactViewer() {
  const canvas = $("#artifactCanvas");
  if (!canvas) return;

  const artifactData = {
    stele: {
      name: "Bia đá chiến công",
      era: "Thế kỷ XX",
      material: "Đá sa thạch",
      size: "1.8m x 0.8m",
      description: "Mô phỏng bia ghi dấu chiến công, đặt trên bệ trưng bày với ánh sáng bảo tàng."
    },
    vase: {
      name: "Bình gốm lưu niệm",
      era: "Thời kỳ kháng chiến",
      material: "Gốm men nâu",
      size: "0.62m x 0.34m",
      description: "Mẫu bình gốm cách điệu, gợi liên tưởng tới hiện vật lưu giữ trong các bộ sưu tập hậu phương."
    },
    medal: {
      name: "Huân chương chiến công",
      era: "Hiện đại",
      material: "Hợp kim mạ đồng",
      size: "18cm x 18cm",
      description: "Mô hình huân chương đặt trong khung trưng bày, tôn vinh đóng góp của các thế hệ chiến sĩ."
    }
  };

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x17110f);
  scene.fog = new THREE.Fog(0x17110f, 8, 18);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(3.4, 2.4, 5.3);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.1;
  controls.target.set(0, 1, 0);
  controls.minDistance = 2.8;
  controls.maxDistance = 9;

  const ambient = new THREE.AmbientLight(0xffe6b0, 0.72);
  scene.add(ambient);

  const keyLight = new THREE.SpotLight(0xfff0cc, 2.6, 16, Math.PI / 5, 0.35, 1);
  keyLight.position.set(2.8, 6.2, 3.2);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xd4af37, 1.2);
  rimLight.position.set(-3, 3.2, -2);
  scene.add(rimLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(4.8, 96),
    new THREE.MeshStandardMaterial({ color: 0x241716, roughness: 0.78, metalness: 0.08 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const pedestal = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.55, 1.85, 0.46, 64),
    new THREE.MeshStandardMaterial({ color: 0x7d0000, roughness: 0.5, metalness: 0.18 })
  );
  base.position.y = 0.23;
  base.castShadow = true;
  base.receiveShadow = true;

  const top = new THREE.Mesh(
    new THREE.CylinderGeometry(1.28, 1.36, 0.28, 64),
    new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.36, metalness: 0.45 })
  );
  top.position.y = 0.61;
  top.castShadow = true;
  pedestal.add(base, top);
  scene.add(pedestal);

  let artifactGroup = new THREE.Group();
  scene.add(artifactGroup);

  function disposeObject(root) {
    const geometries = new Set();
    const materials = new Set();
    const textures = new Set();
    root.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      const entries = Array.isArray(object.material) ? object.material : [object.material];
      entries.filter(Boolean).forEach((material) => {
        materials.add(material);
        Object.values(material).forEach((value) => {
          if (value?.isTexture) textures.add(value);
        });
      });
    });
    textures.forEach((texture) => texture.dispose());
    materials.forEach((material) => material.dispose());
    geometries.forEach((geometry) => geometry.dispose());
  }

  const makeGoldMaterial = () => new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.34,
    metalness: 0.72
  });

  const makeStoneMaterial = () => new THREE.MeshStandardMaterial({
    color: 0x8b8170,
    roughness: 0.92,
    metalness: 0.02
  });

  function clearArtifact() {
    disposeObject(artifactGroup);
    scene.remove(artifactGroup);
    artifactGroup = new THREE.Group();
    scene.add(artifactGroup);
  }

  function addStele() {
    const stone = makeStoneMaterial();
    const slab = new THREE.Mesh(new THREE.BoxGeometry(1.02, 2.05, 0.28), stone);
    slab.position.y = 1.85;
    slab.castShadow = true;
    slab.receiveShadow = true;

    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.51, 0.51, 0.28, 48, 1, false, 0, Math.PI), stone);
    cap.rotation.z = Math.PI / 2;
    cap.position.y = 2.88;
    cap.castShadow = true;

    const inscription = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 1.24, 0.018),
      new THREE.MeshStandardMaterial({ color: 0x5e554b, roughness: 0.86 })
    );
    inscription.position.set(0, 1.88, 0.151);

    const star = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 0), makeGoldMaterial());
    star.position.set(0, 2.42, 0.19);
    star.castShadow = true;

    artifactGroup.add(slab, cap, inscription, star);
  }

  function addVase() {
    const material = new THREE.MeshStandardMaterial({ color: 0x7c3c22, roughness: 0.52, metalness: 0.05 });
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.72, 48, 32), material);
    belly.scale.set(0.82, 1.05, 0.82);
    belly.position.y = 1.45;
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.38, 0.9, 48), material);
    neck.position.y = 2.22;
    const lip = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.055, 16, 48), makeGoldMaterial());
    lip.position.y = 2.69;
    lip.rotation.x = Math.PI / 2;
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.028, 16, 64), makeGoldMaterial());
    band.position.y = 1.62;
    band.rotation.x = Math.PI / 2;
    [belly, neck, lip, band].forEach((mesh) => {
      mesh.castShadow = true;
      artifactGroup.add(mesh);
    });
  }

  function addMedal() {
    const medal = new THREE.Group();
    const gold = makeGoldMaterial();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.12, 72), gold);
    disc.position.y = 1.74;
    disc.rotation.x = Math.PI / 2;
    disc.castShadow = true;

    const star = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), new THREE.MeshStandardMaterial({
      color: 0xa80000,
      roughness: 0.42,
      metalness: 0.25
    }));
    star.position.set(0, 1.74, 0.1);
    star.castShadow = true;

    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.84, 0.04, 16, 72), gold);
    frame.position.y = 1.74;
    frame.rotation.x = Math.PI / 2;

    const ribbon = new THREE.Mesh(
      new THREE.BoxGeometry(0.52, 0.92, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x990000, roughness: 0.58 })
    );
    ribbon.position.y = 2.58;
    ribbon.castShadow = true;

    medal.add(ribbon, disc, star, frame);
    artifactGroup.add(medal);
  }

  function updateInfo(key) {
    const info = artifactData[key];
    const host = $("#artifactInfo");
    if (!host || !info) return;

    host.innerHTML = `
      <span>Hiện vật 3D</span>
      <h3>${info.name}</h3>
      <dl>
        <div><dt>Niên đại</dt><dd>${info.era}</dd></div>
        <div><dt>Chất liệu</dt><dd>${info.material}</dd></div>
        <div><dt>Kích thước</dt><dd>${info.size}</dd></div>
      </dl>
      <p>${info.description}</p>
    `;
  }

  function loadArtifact(key) {
    clearArtifact();
    $("#artifactStatus").hidden = true;
    if (key === "vase") addVase();
    else if (key === "medal") addMedal();
    else addStele();
    updateInfo(key);
  }

  $$(".artifact-select").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".artifact-select").forEach((item) => item.classList.toggle("is-active", item === button));
      loadArtifact(button.dataset.artifact);
    });
  });

  $("#autoRotate")?.addEventListener("click", (event) => {
    controls.autoRotate = !controls.autoRotate;
    event.currentTarget.classList.toggle("is-active", controls.autoRotate);
  });

  function resize() {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  loadArtifact("stele");
  resize();
  window.addEventListener("resize", resize);
  animate();
}

async function initPhuongStudio() {
  const canvas = $("#phuongCanvas");
  const status = $("#phuongStatus");
  if (!canvas) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (error) {
    status.textContent = "Trình duyệt chưa hỗ trợ hiển thị 3D.";
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f6fc);
  const environment = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(environment).texture;
  environment.dispose();
  pmrem.dispose();
  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const key = new THREE.DirectionalLight(0xfff3dc, 3);
  key.position.set(-3, 5, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5 });
  key.shadow.normalBias = 0.025;
  scene.add(key);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0xf2f6fc, roughness: 0.9 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotateSpeed = 0.7;
  controls.maxPolarAngle = Math.PI / 2;
  let modelSize;
  function resetView() {
    if (!modelSize) return;
    const fov = THREE.MathUtils.degToRad(camera.fov);
    const distance = Math.max(modelSize.x / (2 * Math.tan(fov / 2) * camera.aspect), modelSize.y / (2 * Math.tan(fov / 2))) * 1.4;
    controls.target.set(0, modelSize.y / 2, 0);
    camera.position.set(distance * 0.15, modelSize.y / 2 + distance * 0.13, distance);
    controls.minDistance = Math.max(0.5, distance * 0.25);
    controls.maxDistance = distance * 3;
    camera.far = Math.max(100, distance * 5);
    camera.updateProjectionMatrix();
    controls.update();
  }
  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    resetView();
  }
  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();
  let visible = false;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(canvas);
  renderer.setAnimationLoop(() => {
    if (!visible || document.hidden) return;
    controls.update();
    renderer.render(scene, camera);
  });
  $("#phuongRotate").addEventListener("click", (event) => {
    controls.autoRotate = !controls.autoRotate;
    event.currentTarget.setAttribute("aria-pressed", String(controls.autoRotate));
  });
  $("#phuongReset").addEventListener("click", resetView);
  try {
    const { scene: model } = await new GLTFLoader().loadAsync(new URL("./assets/phuong.glb", import.meta.url).href);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    if (!Number.isFinite(size.x) || size.x <= 0) throw new Error("Invalid model bounds");
    model.scale.multiplyScalar(5 / size.x);
    model.updateMatrixWorld(true);
    bounds.setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    model.position.add(new THREE.Vector3(-center.x, 0.01 - bounds.min.y, -center.z));
    model.traverse((object) => {
      if (object.isMesh) { object.castShadow = true; object.receiveShadow = true; }
    });
    modelSize = bounds.getSize(new THREE.Vector3());
    scene.add(model);
    resetView();
    status.hidden = true;
  } catch (error) {
    status.textContent = "Không tải được mô hình Phương. Vui lòng tải lại trang.";
    console.error(error);
  }
}

initDateLabel();
initMobileMenu();
initSearchModal();
initHeroSlider();
initTabs();
initArtifactViewer();
initPhuongStudio();
