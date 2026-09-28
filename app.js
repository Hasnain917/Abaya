/**
 * Z-ABAYA — Haute Couture Minimal Luxury Atelier
 * Interactive Application Core & E-Commerce Logic
 */

// ==========================================
// 1. DATA SOURCE & PRODUCT CATALOG
// ==========================================
const PRODUCTS = [
  {
    id: "za-01",
    title: "The Monolith Architectural Drape",
    category: "noir-atelier",
    price: 490,
    edition: "Edition 01 / Alabaster to Noir",
    fabric: "Haute Couture Signature Drape",
    primaryImg: "Embroided-back-front-white.jpg",
    secondaryImg: "Embroided-back-front-black.jpg",
    bgTone: "#F7F5F0",
    colorways: [{ name: "Alabaster White", color: "#F5F3ED" }, { name: "Obsidian Noir", color: "#1A1A1A" }],
    description: "An architectural masterpiece defined by sharp linear drapes and fluid sleeve volume. Tailored for an immaculate silhouette that stays crisp from dusk till dawn.",
    tags: ["Signature", "Dual Palette"],
    sizes: [52, 54, 56, 58, 60]
  },
  {
    id: "za-02",
    title: "Sovereign Minimalist Column",
    category: "sculptural",
    price: 460,
    edition: "Edition 02 / Pure Monolith",
    fabric: "Architectural Symmetry Weave",
    primaryImg: "Simple1.jpg",
    secondaryImg: "Simple2.jpg",
    bgTone: "#F4F1EC",
    colorways: [{ name: "Ivory Pearl", color: "#EDE9E1" }, { name: "Onyx Noir", color: "#1E1E1E" }],
    description: "Pristine minimalist lines and balanced drape proportions. Moves fluidly with the body for an effortless modern presence.",
    tags: ["Core Essential"],
    sizes: [52, 54, 56, 58]
  },
  {
    id: "za-03",
    title: "The Sculptural Artisan Silhouette",
    category: "sculptural",
    price: 520,
    edition: "Edition 03 / Mineral Slate",
    fabric: "Structured Atelier Cut",
    primaryImg: "Embroided-back-front-gray.jpg",
    secondaryImg: "Embroided-back-front-white.jpg",
    bgTone: "#EDECE8",
    colorways: [{ name: "Mineral Slate", color: "#9E9E9E" }, { name: "Alabaster White", color: "#F5F3ED" }],
    description: "Features precision hand-finished embroidery along sleeves and collar against a structured minimal cut. A timeless collector statement.",
    tags: ["Atelier Highlight"],
    sizes: [54, 56, 58, 60]
  },
  {
    id: "za-04",
    title: "Nocturne Embellished Obsidian Kimono",
    category: "occasion",
    price: 790,
    edition: "Haute Couture Limited",
    fabric: "Hand-Embellished Jet Accents",
    primaryImg: "Gemini_Generated_Image_9jx0u59jx0u59jx0.jpg",
    secondaryImg: "Gemini_Generated_Image_a1rg62a1rg62a1rg.jpg",
    bgTone: "#E8E6E1",
    colorways: [{ name: "Jet Obsidian", color: "#141414" }, { name: "Midnight Charcoal", color: "#2B2B2B" }],
    description: "Hand-finished with tone-on-tone jet black glass beading along the collar and hemline. Designed for gala evenings and high-society gatherings.",
    tags: ["1 of 50 Pieces"],
    sizes: [52, 54, 56, 58]
  },
  {
    id: "za-05",
    title: "Desert Dune Minimalist Overlay",
    category: "sculptural",
    price: 480,
    edition: "Edition 05 / Sand Taupe",
    fabric: "Lightweight Breathable Weave",
    primaryImg: "Simple3.jpg",
    secondaryImg: "Simple1.jpg",
    bgTone: "#F3EDE5",
    colorways: [{ name: "Desert Taupe", color: "#C4B6A6" }, { name: "Ivory Pearl", color: "#EDE9E1" }],
    description: "Inspired by serene desert horizons. A soft neutral drape that layers gracefully over both monochrome and tailored ensembles.",
    tags: ["New Neutral"],
    sizes: [52, 54, 56, 58, 60]
  },
  {
    id: "za-06",
    title: "Sovereign Pleated Column Silhouette",
    category: "noir-atelier",
    price: 640,
    edition: "Edition 06 / Noir",
    fabric: "Permanent Micro-Pleat Architecture",
    primaryImg: "Gemini_Generated_Image_cq4m53cq4m53cq4m.jpg",
    secondaryImg: "Gemini_Generated_Image_d1swqzd1swqzd1sw.jpg",
    bgTone: "#ECE9E3",
    colorways: [{ name: "Noir Pleat", color: "#191919" }, { name: "Deep Charcoal", color: "#2D2D2D" }],
    description: "Permanent micro-pleats create a majestic elongated silhouette that contours gracefully with movement. Includes an optional tailored belt.",
    tags: ["Trending"],
    sizes: [54, 56, 58]
  },
  {
    id: "za-07",
    title: "L'Atelier Midnight Embroidered Robe",
    category: "occasion",
    price: 590,
    edition: "Edition 07 / Obsidian",
    fabric: "Artisanal Silk-Thread Embroidery",
    primaryImg: "Embroided-back-front-black.jpg",
    secondaryImg: "Embroided-back-front-gray.jpg",
    bgTone: "#E8E7E4",
    colorways: [{ name: "Obsidian Noir", color: "#181818" }, { name: "Mineral Slate", color: "#9E9E9E" }],
    description: "Dense midnight noir with delicate hand-stitched tone-on-tone embroidery across the back and cuffs. Effortless high-elegance.",
    tags: ["Exclusive"],
    sizes: [52, 54, 56, 58]
  },
  {
    id: "za-08",
    title: "Kyoto Tailored Wrap Abaya",
    category: "sculptural",
    price: 490,
    edition: "Edition 08 / Atelier",
    fabric: "Minimalist Kimono Construction",
    primaryImg: "Gemini_Generated_Image_ghxun0ghxun0ghxu.jpg",
    secondaryImg: "Gemini_Generated_Image_fb5np2fb5np2fb5n.jpg",
    bgTone: "#F1EBE4",
    colorways: [{ name: "Oatmeal Stone", color: "#D7CFC7" }, { name: "Noir Pure", color: "#1A1A1A" }],
    description: "Inspired by traditional Japanese obi wrapping techniques, with wide kimono sleeves and minimalist geometric lapels. Perfectly breathable and elegant.",
    tags: ["Sustainable"],
    sizes: [54, 56, 58, 60]
  },
  {
    id: "za-09",
    title: "Onyx Modernist Minimalist Abaya",
    category: "noir-atelier",
    price: 470,
    edition: "Edition 09 / Noir to Taupe",
    fabric: "Pristine Everyday Architecture",
    primaryImg: "Simple2.jpg",
    secondaryImg: "Simple3.jpg",
    bgTone: "#EAE7E1",
    colorways: [{ name: "Onyx Noir", color: "#181818" }, { name: "Desert Taupe", color: "#C4B6A6" }],
    description: "Clean silhouette featuring hidden placket fastening and seamless underarm gussets for supreme comfort and elevated modesty.",
    tags: ["Daily Luxury"],
    sizes: [52, 54, 56, 58]
  },
  {
    id: "za-10",
    title: "Aura Minimalist Flared Trench Abaya",
    category: "noir-atelier",
    price: 540,
    edition: "Edition 10 / Essential",
    fabric: "Sculptural Outerwear Cut",
    primaryImg: "Gemini_Generated_Image_mxp0gnmxp0gnmxp0.jpg",
    secondaryImg: "Gemini_Generated_Image_p7j29jp7j29jp7j2.jpg",
    bgTone: "#EDE8E1",
    colorways: [{ name: "Deep Obsidian", color: "#1C1C1C" }, { name: "Storm Slate", color: "#363636" }],
    description: "An urban trench-inspired abaya with storm flap detailing, concealed closures, and wide cuffs for effortless day-to-night styling.",
    tags: ["Atelier Daily"],
    sizes: [52, 54, 56, 58, 60]
  },
  {
    id: "za-11",
    title: "Onyx Fluid Waterfall Abaya",
    category: "silk-chiffon",
    price: 580,
    edition: "Edition 11 / Fluid Motion",
    fabric: "Liquid Noir Fluid Motion",
    primaryImg: "Gemini_Generated_Image_v5irezv5irezv5ir.jpg",
    secondaryImg: "Gemini_Generated_Image_wzzcdxwzzcdxwzzc.jpg",
    bgTone: "#EFECE6",
    colorways: [{ name: "Liquid Noir", color: "#151515" }, { name: "Shadow Onyx", color: "#2B2B2B" }],
    description: "Cascading tailored silhouette with subtle geometric sleeve gathers. Moves with the elegance of liquid obsidian. Unlined for ethereal breathability.",
    tags: ["Best Seller"],
    sizes: [52, 54, 56, 58]
  },
  {
    id: "za-12",
    title: "L'Ombre Sculpted Batwing",
    category: "sculptural",
    price: 520,
    edition: "Edition 12 / Minimal",
    fabric: "Structured Atelier Cut",
    primaryImg: "Gemini_Generated_Image_7sy5a77sy5a77sy5.jpg",
    secondaryImg: "Gemini_Generated_Image_q2kva5q2kva5q2kv.jpg",
    bgTone: "#F3EFE9",
    colorways: [{ name: "Pure Sand", color: "#D9CFC4" }, { name: "Noir Accent", color: "#1E1E1E" }],
    description: "Features a modern structured batwing cut with tapered wrist cuffs and hidden magnetic closures along the front seam. A minimal staple for the contemporary collector.",
    tags: ["Runway Selection"],
    sizes: [54, 56, 58, 60]
  }
];

// Lookbook Curated Stories
const LOOKBOOK_ITEMS = [
  {
    tag: "Look 01 — SS26 Runway",
    title: "The Sculptural Obelisk",
    image: "Gemini_Generated_Image_uyqcsyuyqcsyuyqc.jpg",
    desc: "Rigid architectural structure meets effortless fluid movement.",
    price: "$540"
  },
  {
    tag: "Look 02 — Editorial Dubai",
    title: "Onyx Waterfall Silhouette",
    image: "Gemini_Generated_Image_v5irezv5irezv5ir.jpg",
    desc: "Signature fluid silhouette tailored for high-profile evenings.",
    price: "$680"
  },
  {
    tag: "Look 03 — Paris Salon",
    title: "Nocturne High-Collar Ensemble",
    image: "Gemini_Generated_Image_wzzcdxwzzcdxwzzc.jpg",
    desc: "Clean architectural lapels with hidden magnetic closures.",
    price: "$620"
  },
  {
    tag: "Look 04 — Private Client Fitting",
    title: "Architectural Column Silhouette",
    image: "Gemini_Generated_Image_d1swqzd1swqzd1sw.jpg",
    desc: "Ethereal proportions paired with sharp tailored cuffs and majestic presence.",
    price: "$790"
  },
  {
    tag: "Look 05 — Contemporary Modesty",
    title: "Minimalist Trench Silhouette",
    image: "Gemini_Generated_Image_xmnwsxmnwsxmnwsx.jpg",
    desc: "Everyday luxury redefined through pristine geometric cut.",
    price: "$490"
  },
  {
    tag: "Look 06 — Gala Edition",
    title: "The Velvet Lapel Sovereign",
    image: "Gemini_Generated_Image_lqhp8hlqhp8hlqhp.jpg",
    desc: "Hand-finished ceremonial trims for majestic poise and presence.",
    price: "$850"
  }
];

// Instagram / Social Editorial Gallery (Clean, crisp studio & runway looks)
const INSTA_GALLERY = [
  "Embroided-back-front-white.jpg",
  "Gemini_Generated_Image_fb5np2fb5np2fb5n.jpg",
  "Gemini_Generated_Image_7sy5a77sy5a77sy5.jpg",
  "Gemini_Generated_Image_9jx0u59jx0u59jx0.jpg",
  "Embroided-back-front-gray.jpg",
  "Gemini_Generated_Image_cq4m53cq4m53cq4m.jpg"
];

// ==========================================
// 2. STATE MANAGEMENT (Cart, Wishlist, Filter)
// ==========================================
let cart = JSON.parse(localStorage.getItem("z_abaya_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("z_abaya_wishlist") || "[]");
let currentCategory = "all";
let activeQuickViewProduct = null;

// ==========================================
// 3. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderLookbook();
  renderInstagramGallery();
  updateCartUI();
  updateWishlistBadges();
  setupEventListeners();
  setupHeroSlider();
  setupHeaderScroll();
  setupVideoControls();
});

// ==========================================
// 3.0 HEADER BLURMORHPISM SCROLL HANDLER
// ==========================================
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

// ==========================================
// 3.1 HERO SLIDER MANAGEMENT
// ==========================================
let currentHeroSlide = 0;
let heroSlideInterval = null;

function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.getElementById("heroPrevSlide");
  const nextBtn = document.getElementById("heroNextSlide");

  if (!slides || slides.length <= 1) return;

  function showSlide(index) {
    slides.forEach((s, idx) => {
      s.classList.toggle("active", idx === index);
    });
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === index);
    });
    currentHeroSlide = index;
  }

  function nextSlide() {
    let next = (currentHeroSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentHeroSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function resetAutoSlide() {
    if (heroSlideInterval) clearInterval(heroSlideInterval);
    heroSlideInterval = setInterval(nextSlide, 7000);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.dataset.slideIndex, 10);
      showSlide(idx);
      resetAutoSlide();
    });
  });

  resetAutoSlide();
}

// ==========================================
// 4. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Category Filter Tabs
  document.querySelectorAll(".cat-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      currentCategory = e.currentTarget.dataset.category;
      renderProducts();
    });
  });

  // Cart Drawer Triggers
  const cartBtn = document.getElementById("cartToggleBtn");
  const cartOverlay = document.getElementById("cartDrawerOverlay");
  const cartDrawer = document.getElementById("cartDrawer");
  const closeCartBtn = document.getElementById("closeCartBtn");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Search Modal Triggers
  const searchBtn = document.getElementById("searchToggleBtn");
  const searchModal = document.getElementById("searchModal");
  const closeSearchBtn = document.getElementById("closeSearchBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn) searchBtn.addEventListener("click", () => openModal("searchModal"));
  if (closeSearchBtn) closeSearchBtn.addEventListener("click", () => closeModal("searchModal"));
  if (searchInput) {
    searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
  }

  // Size Guide Modal Trigger
  const sizeGuideBtn = document.getElementById("sizeGuideTriggerBtn");
  const sizeModal = document.getElementById("sizeModal");
  const closeSizeModal = document.getElementById("closeSizeModal");
  const heightSlider = document.getElementById("heightSlider");

  if (sizeGuideBtn) sizeGuideBtn.addEventListener("click", () => openModal("sizeModal"));
  if (closeSizeModal) closeSizeModal.addEventListener("click", () => closeModal("sizeModal"));
  if (heightSlider) {
    heightSlider.addEventListener("input", handleHeightSlider);
  }

  // Appointment Modal Triggers
  const bookBtns = document.querySelectorAll(".book-appointment-trigger");
  const appointModal = document.getElementById("appointmentModal");
  const closeAppointModal = document.getElementById("closeAppointModal");
  const appointmentForm = document.getElementById("appointmentForm");

  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => openModal("appointmentModal"));
  });
  if (closeAppointModal) closeAppointModal.addEventListener("click", () => closeModal("appointmentModal"));
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", handleAppointmentSubmit);
  }

  // Quick View Modal Close
  const closeQuickView = document.getElementById("closeQuickView");
  if (closeQuickView) closeQuickView.addEventListener("click", () => closeModal("quickViewModal"));

  // Lookbook Navigation Arrows
  const prevLookBtn = document.getElementById("lookbookPrev");
  const nextLookBtn = document.getElementById("lookbookNext");
  const lookbookTrack = document.getElementById("lookbookSlider");

  if (prevLookBtn && lookbookTrack) {
    prevLookBtn.addEventListener("click", () => {
      lookbookTrack.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }
  if (nextLookBtn && lookbookTrack) {
    nextLookBtn.addEventListener("click", () => {
      lookbookTrack.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("newsletterInput");
      if (input && input.value) {
        showToast(`Thank you for joining the Z-ABAYA Inner Circle.`);
        input.value = "";
      }
    });
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.querySelector(".nav-links");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "100%";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.background = "#FFFFFF";
        navMenu.style.padding = "24px";
        navMenu.style.borderBottom = "1px solid #ECECEC";
        navMenu.style.zIndex = "100";
      }
    });
  }
}

// ==========================================
// 5. PRODUCT RENDERING & CARD GENERATION
// ==========================================
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const filtered = currentCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === currentCategory);

  container.innerHTML = filtered.map((p, index) => {
    const isWishlisted = wishlist.includes(p.id);
    return `
      <div class="product-card reveal-item" data-id="${p.id}" style="--item-index: ${index % 4}">
        <div class="product-image-container" style="background-color: ${p.bgTone || '#F6F4F0'};">
          <img src="${p.primaryImg}" alt="${p.title}" class="product-img product-img-primary" loading="lazy" decoding="async" />
          <img src="${p.secondaryImg}" alt="${p.title} alternate colorway" class="product-img-secondary" loading="lazy" decoding="async" />
          
          <div class="product-badges">
            ${p.tags.map(t => `<span class="badge badge-noir">${t}</span>`).join('')}
          </div>

          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" title="Save to Wishlist" aria-label="Save to Wishlist">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" fill="none">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div class="product-actions-hover">
            <button class="btn-quick-add" onclick="quickAddToCart('${p.id}', 56, event)">
              + Quick Add
            </button>
            <button class="btn-quick-view" onclick="openQuickView('${p.id}', event)" title="Quick View" aria-label="Quick View">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-palette-swatches">
            ${p.colorways ? p.colorways.map(c => `<span class="palette-swatch" style="background-color: ${c.color};" title="${c.name}"></span>`).join('') : ''}
            <span class="product-palette-hint">Hover to preview colorway</span>
          </div>
          <span class="product-edition">${p.edition}</span>
          <h3 class="product-title" onclick="openQuickView('${p.id}', event)">${p.title}</h3>
          <div class="product-price-row">
            <span class="product-price">$${p.price}</span>
            <span class="product-sizes-hint">Sizes: ${p.sizes.join(', ')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe freshly rendered product cards
  observeElements();
}

// ==========================================
// 6. LOOKBOOK & INSTAGRAM RENDERING
// ==========================================
function renderLookbook() {
  const container = document.getElementById("lookbookTrack");
  if (!container) return;

  container.innerHTML = LOOKBOOK_ITEMS.map(item => `
    <div class="lookbook-card">
      <div class="lookbook-img-box">
        <img src="${item.image}" alt="${item.title}" class="lookbook-img" loading="lazy" decoding="async" />
      </div>
      <div class="lookbook-info">
        <span class="lookbook-look-tag">${item.tag}</span>
        <h4 class="lookbook-look-name">${item.title}</h4>
        <p style="font-size:0.82rem; color:var(--color-charcoal); line-height:1.5;">${item.desc}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; padding-top:10px; border-top:1px solid var(--color-hairline);">
          <span style="font-family:var(--font-serif); font-size:1.15rem; font-weight:500;">${item.price}</span>
          <button class="btn-link" onclick="openModal('appointmentModal')">Inquire Atelier &rarr;</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderInstagramGallery() {
  const container = document.getElementById("instagramGrid");
  if (!container) return;

  container.innerHTML = INSTA_GALLERY.map(img => `
    <div class="instagram-item">
      <img src="${img}" alt="Z-ABAYA Editorial Silhouette" loading="lazy" decoding="async" />
      <div class="instagram-overlay">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 7. CART & CHECKOUT MANAGEMENT
// ==========================================
function quickAddToCart(productId, size = 56, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      fabric: product.fabric,
      image: product.primaryImg,
      size: size,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`Added "${product.title}" (Size ${size}) to Bag.`);
}

function updateCartItemQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removed = cart.splice(index, 1);
  saveCart();
  updateCartUI();
  if (removed[0]) {
    showToast(`Removed "${removed[0].title}" from Bag.`);
  }
}

function saveCart() {
  localStorage.setItem("z_abaya_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById("cartBadgeCount");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const itemsContainer = document.getElementById("cartItemsContainer");
  const fillBar = document.getElementById("freeShippingFill");
  const shippingText = document.getElementById("freeShippingText");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countEl) countEl.innerText = totalCount;
  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString()}`;
  if (totalEl) totalEl.innerText = `$${subtotal.toLocaleString()}`;

  // Free shipping threshold: $300
  if (fillBar && shippingText) {
    const threshold = 300;
    if (subtotal >= threshold) {
      fillBar.style.width = "100%";
      shippingText.innerHTML = `<strong>Complimentary Global Courier</strong> unlocked for this order.`;
    } else {
      const remaining = threshold - subtotal;
      const pct = Math.min(100, Math.max(0, (subtotal / threshold) * 100));
      fillBar.style.width = `${pct}%`;
      shippingText.innerHTML = `Add <strong>$${remaining}</strong> more for complimentary global express shipping.`;
    }
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--color-subtle)" stroke-width="1" fill="none">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-6z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-family:var(--font-serif); font-size:1.2rem; color:var(--color-noir);">Your Shopping Bag is empty</p>
        <p style="font-size:0.8rem; color:var(--color-muted);">Discover our latest high-fashion silhouettes and handcrafted Noir creations.</p>
        <button class="btn btn-noir" style="margin-top:12px;" onclick="closeCart()">Explore Anthology</button>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-meta">Size: ${item.size} | Noir</span>
          <div class="cart-item-qty">
            <span class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</span>
            <span style="font-size:0.8rem; font-weight:600;">${item.qty}</span>
            <span class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; justify-content:space-between;">
          <span class="cart-item-price">$${(item.price * item.qty).toLocaleString()}</span>
          <span class="cart-remove-btn" onclick="removeCartItem(${idx})">Remove</span>
        </div>
      </div>
    `).join('');
  }
}

function openCart() {
  document.getElementById("cartDrawerOverlay")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawerOverlay")?.classList.remove("active");
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeQuickViewProduct = product;
  let selectedSize = product.sizes[0] || 56;

  const content = document.getElementById("quickViewContent");
  if (!content) return;

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-gallery">
        <div style="background-color: ${product.bgTone || '#F6F4F0'}; border:1px solid var(--color-hairline); padding:0; overflow:hidden;">
          <img id="qvMainImg" src="${product.primaryImg}" alt="${product.title}" class="quick-view-main-img" />
        </div>
        <div class="quick-view-thumbnails">
          <img src="${product.primaryImg}" alt="${product.title} Primary View" class="quick-view-thumb active" onclick="switchQvImg('${product.primaryImg}', this)" />
          <img src="${product.secondaryImg}" alt="${product.title} Alternate Colorway" class="quick-view-thumb" onclick="switchQvImg('${product.secondaryImg}', this)" />
        </div>
      </div>

      <div class="quick-view-details">
        <div>
          <span class="eyebrow">${product.edition}</span>
          <h2 style="font-family:var(--font-serif); font-size:2rem; font-weight:300; line-height:1.2; margin-bottom:8px;">${product.title}</h2>
          <span style="font-family:var(--font-serif); font-size:1.6rem; font-weight:500;">$${product.price} USD</span>
        </div>

        <p style="font-size:0.9rem; color:var(--color-charcoal); line-height:1.7;">${product.description}</p>

        ${product.colorways ? `
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.18em; font-weight:600; color:var(--color-noir);">Available Colorways</span>
          <div style="display:flex; gap:10px; margin-top:8px;">
            <button class="size-pill active" onclick="switchQvImg('${product.primaryImg}', document.querySelectorAll('.quick-view-thumb')[0]); document.querySelectorAll('.qv-color-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="display:flex; align-items:center; gap:6px;">
              <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${product.colorways[0].color}; border:1px solid rgba(0,0,0,0.2);"></span>
              ${product.colorways[0].name}
            </button>
            <button class="size-pill" onclick="switchQvImg('${product.secondaryImg}', document.querySelectorAll('.quick-view-thumb')[1]); document.querySelectorAll('.qv-color-btn').forEach(b => b.classList.remove('active')); this.classList.add('active');" style="display:flex; align-items:center; gap:6px;">
              <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${product.colorways[1].color}; border:1px solid rgba(0,0,0,0.2);"></span>
              ${product.colorways[1].name}
            </button>
          </div>
        </div>
        ` : ''}

        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.18em; font-weight:600; color:var(--color-noir);">Atelier Craftsmanship</span>
          <p style="font-size:0.85rem; color:var(--color-muted); margin-top:4px;">Bespoke silhouette tailoring with fine French seams and hand-finished drapery. Dry clean only. Handcrafted by master artisans in Dubai.</p>
        </div>

        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.18em; font-weight:600;">Select Length / Size</span>
            <button class="btn-link" style="font-size:0.7rem;" onclick="openModal('sizeModal')">Size & Height Guide &rarr;</button>
          </div>
          <div class="quick-view-sizes" id="qvSizesContainer">
            ${product.sizes.map((s, idx) => `
              <div class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectQvSize(${s}, this)">${s}</div>
            `).join('')}
          </div>
        </div>

        <div style="display:flex; gap:12px; margin-top:12px;">
          <button class="btn btn-noir" style="flex:1;" onclick="quickAddToCart('${product.id}', ${selectedSize}); closeModal('quickViewModal');">
            Add to Bag &bull; $${product.price}
          </button>
          <button class="product-wishlist-btn" style="position:static; width:48px; height:48px;" onclick="toggleWishlist('${product.id}', event)">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="1.5" fill="${wishlist.includes(product.id) ? 'var(--color-noir)' : 'none'}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div style="font-size:0.72rem; color:var(--color-muted); display:flex; flex-direction:column; gap:6px; padding-top:12px; border-top:1px solid var(--color-hairline);">
          <span>&bull; Complimentary Express Worldwide Shipping</span>
          <span>&bull; 14-Day Private Returns & White-Glove Concierge Exchanges</span>
          <span>&bull; Delivered in Signature Z-ABAYA Silk-Lined Hard Box</span>
        </div>
      </div>
    </div>
  `;

  openModal("quickViewModal");
}

function switchQvImg(src, thumbEl) {
  const main = document.getElementById("qvMainImg");
  if (main) main.src = src;
  document.querySelectorAll(".quick-view-thumb").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function selectQvSize(size, el) {
  document.querySelectorAll("#qvSizesContainer .size-pill").forEach(p => p.classList.remove("active"));
  if (el) el.classList.add("active");
}

// ==========================================
// 9. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from your Saved Silhouettes.");
  } else {
    wishlist.push(productId);
    showToast("Saved to your Personal Wishlist.");
  }

  localStorage.setItem("z_abaya_wishlist", JSON.stringify(wishlist));
  updateWishlistBadges();
  renderProducts();
}

function updateWishlistBadges() {
  const badge = document.getElementById("wishlistBadgeCount");
  if (badge) badge.innerText = wishlist.length;
}

// ==========================================
// 10. SEARCH & REAL-TIME FILTER
// ==========================================
function handleSearch(query) {
  const resultsContainer = document.getElementById("searchResultsGrid");
  if (!resultsContainer) return;

  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) {
    resultsContainer.innerHTML = `<p style="grid-column:1/-1; color:var(--color-muted); text-align:center; padding:20px;">Type keywords such as "Noir", "Trench", "Pleated", "Embellished", "Kimono"...</p>`;
    return;
  }

  const results = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(cleanQuery) ||
    p.description.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery) ||
    p.edition.toLowerCase().includes(cleanQuery)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `<p style="grid-column:1/-1; color:var(--color-muted); text-align:center; padding:20px;">No silhouettes found matching "${query}".</p>`;
    return;
  }

  resultsContainer.innerHTML = results.map(p => `
    <div style="display:flex; gap:12px; cursor:pointer; padding:10px; border:1px solid var(--color-hairline);" onclick="openQuickView('${p.id}'); closeModal('searchModal');">
      <img src="${p.primaryImg}" alt="${p.title}" style="width:60px; aspect-ratio:3/4; object-fit:cover;" />
      <div style="display:flex; flex-direction:column; justify-content:center;">
        <h5 style="font-family:var(--font-serif); font-size:1.05rem; font-weight:400; color:var(--color-noir);">${p.title}</h5>
        <span style="font-size:0.75rem; color:var(--color-muted);">${p.edition}</span>
        <span style="font-family:var(--font-serif); font-size:1.1rem; font-weight:500; margin-top:4px;">$${p.price}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 11. SIZE & HEIGHT CALCULATOR
// ==========================================
function handleHeightSlider(e) {
  const heightCm = parseInt(e.target.value, 10);
  const valLabel = document.getElementById("heightValLabel");
  const sizeOutput = document.getElementById("calcRecommendedSize");
  const noteOutput = document.getElementById("calcSizeNotes");

  const feet = Math.floor(heightCm / 30.48);
  const inches = Math.round((heightCm % 30.48) / 2.54);

  if (valLabel) {
    valLabel.innerText = `${heightCm} cm (${feet}'${inches}")`;
  }

  let recommended = "54";
  let note = "Ideal for heel height 2-3 inches, falling precisely at ankle length.";

  if (heightCm < 155) {
    recommended = "50 / 52";
    note = "Petite silhouette length. Designed for heights 5'0\" to 5'2\".";
  } else if (heightCm >= 155 && heightCm < 162) {
    recommended = "52";
    note = "Standard ankle drape for heights 5'2\" to 5'4\".";
  } else if (heightCm >= 162 && heightCm < 168) {
    recommended = "54";
    note = "Tailored standard for heights 5'4\" to 5'6\". Fits gracefully with heels.";
  } else if (heightCm >= 168 && heightCm < 174) {
    recommended = "56";
    note = "Elongated drape for heights 5'6\" to 5'8\".";
  } else if (heightCm >= 174 && heightCm < 180) {
    recommended = "58";
    note = "Tall silhouette architecture for heights 5'8\" to 5'10\".";
  } else {
    recommended = "60";
    note = "Statuesque full-length runway drape for heights 5'10\" and above.";
  }

  if (sizeOutput) sizeOutput.innerText = recommended;
  if (noteOutput) noteOutput.innerText = note;
}

// ==========================================
// 12. APPOINTMENT FORM SUBMIT
// ==========================================
function handleAppointmentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("appointName")?.value;
  const city = document.getElementById("appointCity")?.value;
  const date = document.getElementById("appointDate")?.value;

  closeModal("appointmentModal");
  showToast(`Private fitting confirmed for ${name} in ${city} on ${date}. Our Concierge will reach out shortly.`);
}

// ==========================================
// 13. VIDEO CONTROLS & CINEMATICS (OPTIMIZED)
// ==========================================
function setupVideoControls() {
  const heroVideo = document.getElementById("heroVideo");
  const heroSoundBtn = document.getElementById("heroSoundBtn");

  if (heroVideo) {
    // Ensure smooth, hardware-accelerated playback
    heroVideo.playbackRate = 1.0;
    heroVideo.defaultMuted = true;
    heroVideo.muted = true;
    
    // Smooth play promise handling
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback: user interaction will trigger
        document.addEventListener("click", () => {
          heroVideo.play();
        }, { once: true });
      });
    }

    // Seamless loop without hitch
    heroVideo.addEventListener("ended", () => {
      heroVideo.currentTime = 0;
      heroVideo.play();
    });
  }

  if (heroSoundBtn && heroVideo) {
    heroSoundBtn.addEventListener("click", () => {
      heroVideo.muted = !heroVideo.muted;
      heroSoundBtn.innerHTML = heroVideo.muted ? `
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        Sound Off
      ` : `
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        Sound On
      `;
    });
  }

  const featureVideo = document.getElementById("featureVideo");
  const featurePlayBtn = document.getElementById("featureVideoPlayBtn");

  if (featurePlayBtn && featureVideo) {
    featureVideo.muted = true;
    featurePlayBtn.addEventListener("click", () => {
      if (featureVideo.paused) {
        featureVideo.play();
        featurePlayBtn.innerText = "Pause Film";
      } else {
        featureVideo.pause();
        featurePlayBtn.innerText = "Play Film";
      }
    });
  }

  // Smooth Scroll Reveal Observer
  setupScrollReveals();
}

// ==========================================
// 14. LUXURY SCROLL ANIMATIONS SYSTEM
// ==========================================
let globalScrollObserver = null;

function setupScrollReveals() {
  if (!('IntersectionObserver' in window)) return;

  globalScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        globalScrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  observeElements();
}

function observeElements() {
  if (!globalScrollObserver) return;

  const selector = [
    'section',
    '.section-header-group',
    '.manifesto-grid',
    '.stat-item',
    '.pillar-card',
    '.product-card',
    '.craft-card',
    '.lookbook-card',
    '.bespoke-grid',
    '.journal-card',
    '.press-quote-item',
    '.instagram-item',
    '.hero-cover-content'
  ].join(', ');

  const elements = document.querySelectorAll(selector);
  elements.forEach((el, idx) => {
    if (!el.classList.contains('is-revealed')) {
      el.classList.add('reveal-on-scroll');
      globalScrollObserver.observe(el);
    }
  });
}

// ==========================================
// 15. MODAL UTILITIES & TOAST ALERTS
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
