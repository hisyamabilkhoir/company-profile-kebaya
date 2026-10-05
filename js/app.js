/**
 * SVASTI KEBAYA RENTAL - CORE APPLICATION LOGIC
 * High-end interactions, Hero carousel, Dynamic 3D Card, Live Filtering, Wishlist, WhatsApp Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. DATA DEFINITIONS (MATCHING MOCKUP & ASSETS)
  // =========================================================================
  const heroSlides = [
    {
      id: 1,
      name: "Kebaya Kirana",
      collection: "Kondangan & Gala Collection",
      tag: "Kondangan",
      desc: "Kebaya brokat hitam emas glamor dengan potongan slim fit mewah untuk pesta malam.",
      originalPrice: "Rp 375.000",
      discount: "20% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/banner-4-fix.png",
      colors: ["#1F1F1F", "#D4AF37", "#431422", "#1D2D44"],
      colorNames: ["Midnight Black", "Antique Gold", "Burgundy", "Navy"]
    },
    {
      id: 2,
      name: "Kebaya Maheswari",
      collection: "Akad Bridal Collection",
      tag: "Akad",
      desc: "Kebaya pengantin putih gading bertabur kristal swarovski dengan veil renda prancis mewah.",
      originalPrice: "Rp 420.000",
      discount: "15% OFF",
      price: "Rp 350.000",
      priceNum: 350000,
      image: "assets/images/banner-2-fix.png",
      colors: ["#FFFFFF", "#F4F0EA", "#E8D8C8", "#DFBF8E"],
      colorNames: ["Pure White", "Ivory", "Pearl Cream", "Gold Accents"]
    },
    {
      id: 3,
      name: "Kebaya Ayodhya",
      collection: "Lamaran Collection",
      tag: "Lamaran",
      desc: "Kebaya modern dengan detail bordir bunga dan mutiara yang elegan dan menawan.",
      originalPrice: "Rp 360.000",
      discount: "15% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/hero_banner_ai_1.jpg",
      colors: ["#D8A4B8", "#B56576", "#D5C5B5", "#8A9A86"],
      colorNames: ["Dusty Pink", "Mauve", "Champagne", "Sage Green"]
    },
    {
      id: 4,
      name: "Kebaya Nirmala",
      collection: "Wisuda Collection",
      tag: "Wisuda",
      desc: "Kebaya kutubaru modern dengan warna sage green segar, ringan dan nyaman untuk prosesi wisuda.",
      originalPrice: "Rp 310.000",
      discount: "20% OFF",
      price: "Rp 250.000",
      priceNum: 250000,
      image: "assets/images/hero_kebaya_rose_ai.jpg",
      colors: ["#8A9A86", "#6B705C", "#A5A58D", "#DDBEA9"],
      colorNames: ["Sage Green", "Olive", "Mint Khaki", "Nude"]
    }
  ];

  const kebayaCatalog = [
    {
      id: 1,
      name: "Kebaya Maheswari",
      category: "Akad",
      collection: "Akad Collection",
      status: "Baru",
      crown: false,
      originalPrice: "Rp 420.000",
      discount: "15% OFF",
      price: "Rp 350.000",
      priceNum: 350000,
      image: "assets/images/card_maheswari.png",
      colors: ["#FFFFFF", "#F5EFE6", "#D4AF37", "#B56576", "#431422"],
      colorNames: ["Putih", "Cream", "Gold", "Dusty Pink", "Maroon"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 98
    },
    {
      id: 2,
      name: "Kebaya Ayodhya",
      category: "Lamaran",
      collection: "Lamaran Collection",
      status: "Populer",
      crown: true,
      originalPrice: "Rp 360.000",
      discount: "15% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/card_ayodhya.png",
      colors: ["#D8A4B8", "#B56576", "#D5C5B5", "#8A9A86"],
      colorNames: ["Dusty Pink", "Mauve", "Champagne", "Sage"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      popularity: 99
    },
    {
      id: 3,
      name: "Kebaya Nirmala",
      category: "Wisuda",
      collection: "Wisuda Collection",
      status: "Favorit",
      crown: true,
      originalPrice: "Rp 310.000",
      discount: "20% OFF",
      price: "Rp 250.000",
      priceNum: 250000,
      image: "assets/images/card_nirmala.png",
      colors: ["#8A9A86", "#B56576", "#5A1F30", "#1D2D44"],
      colorNames: ["Sage", "Mauve", "Burgundy", "Navy"],
      sizes: ["S", "M", "L"],
      popularity: 92
    },
    {
      id: 4,
      name: "Kebaya Kirana",
      category: "Kondangan",
      collection: "Kondangan Collection",
      status: "Pilihan",
      crown: false,
      originalPrice: "Rp 375.000",
      discount: "20% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/card_kirana.png",
      colors: ["#F5EFE6", "#D4AF37", "#431422", "#1F1F1F"],
      colorNames: ["Cream", "Gold", "Maroon", "Hitam"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 95
    },
    {
      id: 5,
      name: "Kebaya Anindita",
      category: "Bridesmaid",
      collection: "Bridesmaid Collection",
      status: "Baru",
      originalPrice: "Rp 340.000",
      discount: "20% OFF",
      price: "Rp 275.000",
      priceNum: 275000,
      image: "assets/images/card_anindita.png",
      colors: ["#E8C5C8", "#D8A4B8", "#8A9A86"],
      colorNames: ["Blush", "Dusty Pink", "Sage"],
      sizes: ["XS", "S", "M", "L", "XL"],
      popularity: 88
    },
    {
      id: 6,
      name: "Kebaya Laksmi",
      category: "Kebaya Modern",
      collection: "Kebaya Modern Collection",
      status: "Populer",
      originalPrice: "Rp 390.000",
      discount: "18% OFF",
      price: "Rp 320.000",
      priceNum: 320000,
      image: "assets/images/card_laksmi.png",
      colors: ["#DFBF8E", "#D8A4B8", "#B56576"],
      colorNames: ["Cream", "Dusty Pink", "Mauve"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      popularity: 96
    },
    {
      id: 7,
      name: "Kebaya Cendrawasih",
      category: "Kondangan",
      collection: "Kondangan Collection",
      status: "Eksklusif",
      originalPrice: "Rp 375.000",
      discount: "20% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/card_cendrawasih.png",
      colors: ["#5A1F30", "#1F1F1F", "#D4AF37"],
      colorNames: ["Maroon", "Hitam", "Gold"],
      sizes: ["M", "L", "XL"],
      popularity: 94
    },
    {
      id: 8,
      name: "Kebaya Arunika",
      category: "Kebaya Tradisional",
      collection: "Kebaya Tradisional Collection",
      status: "Klasik",
      originalPrice: "Rp 350.000",
      discount: "20% OFF",
      price: "Rp 280.000",
      priceNum: 280000,
      image: "assets/images/card_arunika.png",
      colors: ["#FAF0E6", "#5A1F30", "#1F1F1F"],
      colorNames: ["Putih", "Maroon", "Hitam"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 90
    },
    {
      id: 9,
      name: "Kebaya Gayatri",
      category: "Akad",
      collection: "Akad Bridal Gold Collection",
      status: "Eksklusif",
      crown: true,
      originalPrice: "Rp 450.000",
      discount: "15% OFF",
      price: "Rp 380.000",
      priceNum: 380000,
      image: "assets/images/lookbook_akad.png",
      colors: ["#FFFFFF", "#F5EFE6", "#D4AF37", "#DFBF8E"],
      colorNames: ["Putih", "Cream", "Gold", "Champagne"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 97,
      desc: "Kebaya akad eksklusif bertabur kristal swarovski gold dan mutiara air tawar dengan veil renda prancis mewah, memancarkan aura sakral nan anggun."
    },
    {
      id: 10,
      name: "Kebaya Renjana",
      category: "Lamaran",
      collection: "Lamaran Blush Peach Collection",
      status: "Baru",
      crown: false,
      originalPrice: "Rp 350.000",
      discount: "15% OFF",
      price: "Rp 295.000",
      priceNum: 295000,
      image: "assets/images/lookbook_lamaran.png",
      colors: ["#E8C5C8", "#D8A4B8", "#FAF0E6", "#DFBF8E"],
      colorNames: ["Blush", "Dusty Pink", "Cream", "Champagne"],
      sizes: ["XS", "S", "M", "L", "XL"],
      popularity: 93,
      desc: "Kebaya lamaran bernuansa blush peach dengan detail bordir bunga timbul dan payet mutiara yang manis, memberikan kesan feminin dan mempesona."
    },
    {
      id: 11,
      name: "Kebaya Danastri",
      category: "Wisuda",
      collection: "Wisuda Kutubaru Chic Collection",
      status: "Populer",
      crown: true,
      originalPrice: "Rp 330.000",
      discount: "20% OFF",
      price: "Rp 265.000",
      priceNum: 265000,
      image: "assets/images/lookbook_wisuda.png",
      colors: ["#8A9A86", "#6B705C", "#DFBF8E", "#D8A4B8"],
      colorNames: ["Sage", "Olive", "Cream", "Dusty Pink"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 95,
      desc: "Kebaya wisuda kutubaru modern dengan warna sage green lembut dan bahan furing katun adem yang ringan dan nyaman untuk prosesi wisuda seharian."
    },
    {
      id: 12,
      name: "Kebaya Kalila",
      category: "Kebaya Modern",
      collection: "Modern Velvet Elegance Collection",
      status: "Pilihan",
      crown: false,
      originalPrice: "Rp 380.000",
      discount: "20% OFF",
      price: "Rp 305.000",
      priceNum: 305000,
      image: "assets/images/lookbook_event.png",
      colors: ["#5A1F30", "#1F1F1F", "#D4AF37", "#1D2D44"],
      colorNames: ["Maroon", "Hitam", "Gold", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      popularity: 94,
      desc: "Kebaya modern siluet kontemporer dengan perpaduan lace kristal mewah dan aksen selendang menjuntai elegan, sangat pas untuk acara pesta maupun gala dinner."
    }
  ];

  // =========================================================================
  // 2. HERO SLIDER INTERACTION (Thumbnail clicks, Arrows, Counter, Floating card)
  // =========================================================================
  let currentSlideIndex = 0;
  let heroAutoPlayInterval = null;

  const heroSlidesElements = document.querySelectorAll('.hero-slide');
  const heroThumbItems = document.querySelectorAll('.hero-thumb-item');
  const heroCounterCurrent = document.getElementById('heroCounterCurrent');
  const floatingCardTitle = document.getElementById('floatingCardTitle');
  const floatingCardTag = document.getElementById('floatingCardTag');
  const floatingCardDesc = document.getElementById('floatingCardDesc');
  const floatingCardPrice = document.getElementById('floatingCardPrice');
  const floatingCardSwatches = document.getElementById('floatingCardSwatches');
  const floatingCardWishlist = document.getElementById('floatingCardWishlist');
  const floatingCardBtn = document.getElementById('floatingCardBtn');

  function updateHeroSlide(index) {
    if (index < 0) index = heroSlides.length - 1;
    if (index >= heroSlides.length) index = 0;
    currentSlideIndex = index;

    const data = heroSlides[currentSlideIndex];

    // 1. Update background slide visibility with cross-fade
    heroSlidesElements.forEach((slide, idx) => {
      if (idx === currentSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 2. Update thumbnails active state
    heroThumbItems.forEach((thumb, idx) => {
      if (idx === currentSlideIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });

    // 3. Update counter (e.g. 01, 02)
    if (heroCounterCurrent) {
      heroCounterCurrent.textContent = `0${currentSlideIndex + 1}`;
    }

    // 4. Update Floating 3D card info
    if (floatingCardTitle) floatingCardTitle.textContent = data.name;
    if (floatingCardTag) floatingCardTag.textContent = data.collection;
    if (floatingCardDesc) floatingCardDesc.textContent = data.desc;
    if (floatingCardPrice) floatingCardPrice.textContent = `${data.price}`;
    const floatingCardOriginalPrice = document.getElementById('floatingCardOriginalPrice');
    const floatingCardDiscount = document.getElementById('floatingCardDiscount');
    if (floatingCardOriginalPrice) floatingCardOriginalPrice.textContent = data.originalPrice || 'Rp 360.000';
    if (floatingCardDiscount) floatingCardDiscount.textContent = data.discount || '15% OFF';

    // Update floating card color swatches
    if (floatingCardSwatches) {
      floatingCardSwatches.innerHTML = '';
      data.colors.forEach((col, cIdx) => {
        const dot = document.createElement('span');
        dot.className = 'color-dot';
        dot.style.backgroundColor = col;
        dot.title = data.colorNames[cIdx] || 'Warna';
        floatingCardSwatches.appendChild(dot);
      });
    }

    // Update floating card detail button
    if (floatingCardBtn) {
      floatingCardBtn.onclick = () => openKebayaDetail(data.name);
    }

    // Update floating card wishlist state for the active kebaya
    updateFloatingCardWishlist();
  }

  // Thumbnails click handler
  heroThumbItems.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      updateHeroSlide(idx);
      resetHeroAutoPlay();
    });
  });

  // Up & Down navigation arrows
  const heroThumbUp = document.getElementById('heroThumbUp');
  const heroThumbDown = document.getElementById('heroThumbDown');
  if (heroThumbUp) {
    heroThumbUp.addEventListener('click', () => {
      updateHeroSlide(currentSlideIndex - 1);
      resetHeroAutoPlay();
    });
  }
  if (heroThumbDown) {
    heroThumbDown.addEventListener('click', () => {
      updateHeroSlide(currentSlideIndex + 1);
      resetHeroAutoPlay();
    });
  }

  // Left & Right edge buttons
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      updateHeroSlide(currentSlideIndex - 1);
      resetHeroAutoPlay();
    });
  }
  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      updateHeroSlide(currentSlideIndex + 1);
      resetHeroAutoPlay();
    });
  }

  // Auto-play timer
  function startHeroAutoPlay() {
    heroAutoPlayInterval = setInterval(() => {
      updateHeroSlide(currentSlideIndex + 1);
    }, 6000);
  }

  function resetHeroAutoPlay() {
    clearInterval(heroAutoPlayInterval);
    startHeroAutoPlay();
  }

  startHeroAutoPlay();

  // Mobile Touch Swipe Gesture Support
  const heroBannerCard = document.querySelector('.hero-banner-card');
  if (heroBannerCard) {
    let touchStartX = 0;
    let touchEndX = 0;

    heroBannerCard.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroBannerCard.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) {
          updateHeroSlide(currentSlideIndex + 1);
        } else {
          updateHeroSlide(currentSlideIndex - 1);
        }
        resetHeroAutoPlay();
      }
    }, { passive: true });
  }

  // =========================================================================
  // 3. BOTTOM MOMENTS DOCK FILTER
  // =========================================================================
  const dockItemBtns = document.querySelectorAll('.dock-item-btn');
  dockItemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dockItemBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-moment');
      
      // Also sync with the catalog section filter
      syncCategoryFilter(selectedCategory);

      // Smooth scroll to collection section if clicked
      const collectionSection = document.getElementById('koleksi');
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function syncCategoryFilter(category) {
    const categoryCheckboxes = document.querySelectorAll('.cat-checkbox');
    categoryCheckboxes.forEach(cb => {
      if (category === 'Semua') {
        cb.checked = (cb.value === 'Semua');
      } else {
        cb.checked = (cb.value.toLowerCase() === category.toLowerCase());
      }
    });
    applyCatalogFilters();
  }

  // =========================================================================
  // 4. WISHLIST SYSTEM (localStorage & Heart animation)
  // =========================================================================
  let wishlist = JSON.parse(localStorage.getItem('svasti_wishlist') || '[]');
  const wishlistBadge = document.getElementById('wishlistBadge');

  function updateWishlistBadge() {
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlist.length;
      wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'flex';
      wishlistBadge.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.4)' },
        { transform: 'scale(1)' }
      ], { duration: 300 });
    }
  }

  function updateFloatingCardWishlist() {
    if (!floatingCardWishlist) return;
    const currentItem = heroSlides[currentSlideIndex];
    if (!currentItem) return;

    const isWishlisted = wishlist.includes(currentItem.name);
    const svg = floatingCardWishlist.querySelector('svg');

    if (isWishlisted) {
      floatingCardWishlist.classList.add('active');
      floatingCardWishlist.title = 'Hapus dari Wishlist';
      if (svg) {
        svg.setAttribute('fill', '#E63946');
        svg.setAttribute('stroke', '#E63946');
      }
    } else {
      floatingCardWishlist.classList.remove('active');
      floatingCardWishlist.title = 'Simpan ke Wishlist';
      if (svg) {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
      }
    }

    // Set the click handler to toggle this specific current kebaya
    floatingCardWishlist.onclick = (e) => {
      toggleWishlist(currentItem.name, e);
    };
  }

  updateWishlistBadge();
  updateFloatingCardWishlist();

  // Wishlist Drawer DOM Elements
  const wishlistOverlay = document.getElementById('wishlistOverlay');
  const wishlistBody = document.getElementById('wishlistBody');
  const wishlistDrawerCount = document.getElementById('wishlistDrawerCount');
  const wishlistFooter = document.getElementById('wishlistFooter');
  const wishlistConsultBtn = document.getElementById('wishlistConsultBtn');

  window.openWishlistDrawer = function() {
    renderWishlistDrawer();
    if (wishlistOverlay) wishlistOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeWishlistDrawer = function() {
    if (wishlistOverlay) wishlistOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  function renderWishlistDrawer() {
    if (!wishlistBody) return;

    if (wishlistDrawerCount) {
      wishlistDrawerCount.textContent = `${wishlist.length} Kebaya`;
    }

    if (wishlist.length === 0) {
      wishlistBody.innerHTML = `
        <div class="wishlist-empty-state">
          <div class="wishlist-empty-icon">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h4 class="wishlist-empty-title">Wishlist Masih Kosong</h4>
          <p class="wishlist-empty-desc">
            Simpan kebaya impianmu dengan menekan ikon hati pada koleksi kebaya agar tersimpan otomatis di perangkat ini.
          </p>
          <button type="button" class="btn-pill btn-primary" onclick="closeWishlistDrawer(); document.getElementById('koleksi').scrollIntoView({behavior:'smooth'});">
            Jelajahi Koleksi
          </button>
        </div>
      `;
      if (wishlistFooter) wishlistFooter.style.display = 'none';
      return;
    }

    if (wishlistFooter) wishlistFooter.style.display = 'block';

    let subtotal = 0;
    const itemsData = wishlist.map(name => {
      const item = kebayaCatalog.find(k => k.name === name) || heroSlides.find(s => s.name === name) || {
        name: name,
        category: 'Koleksi',
        price: 'Rp 300.000',
        originalPrice: 'Rp 360.000',
        discount: '15% OFF',
        priceNum: 300000,
        image: 'assets/images/card_ayodhya.png'
      };
      subtotal += (item.priceNum || 300000);
      return item;
    });

    // Calculation: Subtotal, Discount & Total
    const discountPercent = wishlist.length >= 2 ? 10 : 5;
    const discountAmount = Math.round(subtotal * (discountPercent / 100));
    const totalAmount = subtotal - discountAmount;
    const formatRupiah = (num) => 'Rp ' + Number(num).toLocaleString('id-ID');

    const itemsHTML = itemsData.map(item => {
      const priceNum = item.priceNum || 300000;
      const itemDiscount = Math.round(priceNum * (discountPercent / 100));
      const discountedPrice = priceNum - itemDiscount;

      return `
        <div class="wishlist-item">
          <div class="wishlist-thumb" onclick="closeWishlistDrawer(); openKebayaDetail('${item.name}')">
            <img src="${item.image}" alt="${item.name}">
            <span class="wishlist-thumb-discount">-${discountPercent}%</span>
          </div>
          <div class="wishlist-info">
            <h4 class="wishlist-item-title" onclick="closeWishlistDrawer(); openKebayaDetail('${item.name}')">${item.name}</h4>
            <div style="display:flex;align-items:center;gap:6px;margin:2px 0 5px;">
              <span class="wishlist-item-tag">${item.category || item.tag || 'Koleksi'}</span>
              <span class="wishlist-item-discount-badge">${discountPercent}% OFF</span>
            </div>
            <div class="wishlist-item-price-row">
              <span class="wishlist-item-original-price">${item.price}</span>
              <span class="wishlist-item-discounted-price">${formatRupiah(discountedPrice)}</span>
              <small style="font-size:0.75rem;font-weight:400;color:var(--text-muted)">/ sewa</small>
            </div>
          </div>
          <button type="button" class="wishlist-remove-btn" onclick="removeFromWishlist('${item.name}')" title="Hapus dari Wishlist" aria-label="Hapus">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      `;
    }).join('');

    wishlistBody.innerHTML = itemsHTML;

    const wishlistSubtotalEl = document.getElementById('wishlistSubtotal');
    const wishlistDiscountEl = document.getElementById('wishlistDiscount');
    const wishlistDiscountBadge = document.getElementById('wishlistDiscountBadge');
    const wishlistTotalEl = document.getElementById('wishlistTotal');

    if (wishlistSubtotalEl) wishlistSubtotalEl.textContent = formatRupiah(subtotal);
    if (wishlistDiscountBadge) wishlistDiscountBadge.textContent = `${discountPercent}% OFF`;
    if (wishlistDiscountEl) wishlistDiscountEl.textContent = `- ${formatRupiah(discountAmount)}`;
    if (wishlistTotalEl) wishlistTotalEl.textContent = formatRupiah(totalAmount);

    // Update WhatsApp link with all wishlist items and breakdown
    if (wishlistConsultBtn) {
      const listText = itemsData.map((item, idx) => {
        const cat = item.category || item.tag || 'Koleksi';
        const priceNum = item.priceNum || 300000;
        const itemDiscount = Math.round(priceNum * (discountPercent / 100));
        const discountedPrice = priceNum - itemDiscount;

        return `${idx + 1}. *${item.name}* (${cat})
   • Harga Normal: ${item.price || formatRupiah(priceNum)}
   • Harga Promo (${discountPercent}% OFF): ${formatRupiah(discountedPrice)} / sewa`;
      }).join('\n');

      const message = 
`Halo Svasti Kebaya Rental ✨
Saya tertarik untuk konsultasi dan menyewa koleksi kebaya dari Wishlist saya:

📋 *DAFTAR KEBAYA PILIHAN:*
${listText}

💰 *RINCIAN ESTIMASI BIAYA:*
• Subtotal Sewa: ${formatRupiah(subtotal)}
• Diskon Promo (${discountPercent}%): -${formatRupiah(discountAmount)}
• *Total Estimasi: ${formatRupiah(totalAmount)}*

Apakah kebaya-kebaya tersebut masih tersedia untuk tanggal acara saya? Saya ingin konsultasi jadwal fitting. Terima kasih!`;

      const encodedMsg = encodeURIComponent(message);
      const phone = "6285973729267";
      wishlistConsultBtn.href = `https://wa.me/${phone}?text=${encodedMsg}`;
    }
  }

  window.removeFromWishlist = function(name) {
    const idx = wishlist.indexOf(name);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      localStorage.setItem('svasti_wishlist', JSON.stringify(wishlist));
      updateWishlistBadge();
      updateFloatingCardWishlist();
      renderCatalogCards();
      renderFeaturedCards();
      renderWishlistDrawer();
    }
  };

  window.clearAllWishlist = function() {
    if (confirm('Apakah Anda yakin ingin menghapus semua kebaya dari wishlist?')) {
      wishlist = [];
      localStorage.setItem('svasti_wishlist', JSON.stringify(wishlist));
      updateWishlistBadge();
      updateFloatingCardWishlist();
      renderCatalogCards();
      renderFeaturedCards();
      renderWishlistDrawer();
    }
  };

  if (wishlistOverlay) {
    wishlistOverlay.addEventListener('click', (e) => {
      if (e.target === wishlistOverlay) closeWishlistDrawer();
    });
  }

  window.toggleWishlist = function(kebayaName, event) {
    if (event) event.stopPropagation();
    const index = wishlist.indexOf(kebayaName);
    if (index > -1) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(kebayaName);
    }
    localStorage.setItem('svasti_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    updateFloatingCardWishlist();
    renderCatalogCards();
    renderFeaturedCards();
    renderWishlistDrawer();
  };

  // =========================================================================
  // 5. RENDER FEATURED & CATALOG CARDS (High fidelity & 3D styling)
  // =========================================================================
  const featuredGrid = document.getElementById('featuredKebayaGrid');
  const catalogGrid = document.getElementById('catalogProductsGrid');
  const catalogResultsCount = document.getElementById('catalogResultsCount');

  function createCardHTML(item) {
    const isWishlisted = wishlist.includes(item.name);
    const swatchesHTML = (item.colors || []).slice(0, 4).map((c, i) => 
      `<span class="color-dot" style="background-color: ${c}" title="${item.colorNames ? item.colorNames[i] || '' : ''}"></span>`
    ).join('');

    const statusText = item.status ? item.status.toUpperCase() : 'BARU';

    return `
      <div class="kebaya-card" onclick="openKebayaDetail('${item.name}')">
        <div class="kebaya-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <div class="kebaya-badges-top-left">
            <span class="kebaya-status-badge">${statusText}</span>
            <span class="kebaya-discount-badge">${item.discount || '15% OFF'}</span>
          </div>
          <button class="kebaya-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${item.name}', event)" 
                  title="Simpan ke Wishlist" aria-label="Simpan ke Wishlist">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#E63946" stroke="#E63946" stroke-width="1.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="kebaya-card-body">
          <h4 class="kebaya-card-title">${item.name}</h4>
          <div class="kebaya-card-category-row">
            <span class="kebaya-spark-symbol">+</span>
            <span class="kebaya-card-collection">${item.collection || item.category + ' Collection'}</span>
          </div>
          <div class="kebaya-card-swatches">
            ${swatchesHTML}
          </div>
          <div class="kebaya-card-footer">
            <div class="kebaya-price-block">
              <div class="kebaya-price-original-row">
                <span class="kebaya-original-price">${item.originalPrice || 'Rp 360.000'}</span>
                <span class="kebaya-discount-pill">${item.discount || '15% OFF'}</span>
              </div>
              <div class="kebaya-card-price-main">
                <strong class="kebaya-card-price">${item.price}</strong>
                <span class="kebaya-price-suffix"> / sewa</span>
              </div>
            </div>
            <button class="kebaya-card-cart-btn" onclick="openKebayaDetail('${item.name}'); event.stopPropagation();" title="Sewa ${item.name}" aria-label="Sewa ${item.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Curated 4-items sets for every category tab in Koleksi Unggulan
  const featuredCategoryItems = {
    'Semua': [
      kebayaCatalog[0], // Maheswari
      kebayaCatalog[1], // Ayodhya
      kebayaCatalog[2], // Nirmala
      kebayaCatalog[3]  // Kirana
    ],
    'Akad': [
      {
        ...kebayaCatalog[0],
        collection: 'Akad Royal White',
        status: 'Baru',
        discount: '15% OFF'
      },
      kebayaCatalog[8], // Kebaya Gayatri
      {
        ...kebayaCatalog[1],
        name: 'Kebaya Puspa Kencana',
        collection: 'Akad Solo Putri',
        status: 'Favorit',
        discount: '20% OFF',
        price: 'Rp 340.000',
        originalPrice: 'Rp 420.000'
      },
      {
        ...kebayaCatalog[3],
        name: 'Kebaya Shinta Ayu',
        collection: 'Akad Sunda Siger',
        status: 'Pilihan',
        discount: '20% OFF',
        price: 'Rp 330.000',
        originalPrice: 'Rp 410.000'
      }
    ],
    'Lamaran': [
      {
        ...kebayaCatalog[1],
        collection: 'Lamaran Collection',
        status: 'Populer 👑',
        discount: '15% OFF'
      },
      kebayaCatalog[9], // Kebaya Renjana
      {
        ...kebayaCatalog[5],
        name: 'Kebaya Danastri',
        collection: 'Lamaran Sage Elegance',
        status: 'Favorit 👑',
        discount: '20% OFF',
        price: 'Rp 310.000',
        originalPrice: 'Rp 380.000'
      },
      {
        ...kebayaCatalog[6],
        name: 'Kebaya Kalila',
        collection: 'Lamaran Royal Maroon',
        status: 'Pilihan',
        discount: '20% OFF',
        price: 'Rp 320.000',
        originalPrice: 'Rp 400.000'
      }
    ],
    'Wisuda': [
      {
        ...kebayaCatalog[2],
        collection: 'Wisuda Collection',
        status: 'Favorit 👑',
        discount: '20% OFF'
      },
      kebayaCatalog[10], // Kebaya Danastri
      {
        ...kebayaCatalog[5],
        name: 'Kebaya Laksmi',
        collection: 'Wisuda Kutubaru Chic',
        status: 'Populer',
        discount: '18% OFF'
      },
      {
        ...kebayaCatalog[4],
        name: 'Kebaya Anindita',
        collection: 'Wisuda Modern Lilac',
        status: 'Baru',
        discount: '20% OFF'
      }
    ],
    'Bridesmaid': [
      {
        ...kebayaCatalog[4],
        collection: 'Bridesmaid Collection',
        status: 'Baru 👑',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[1],
        name: 'Kebaya Ayodhya',
        collection: 'Bridesmaid Rose Mauve',
        status: 'Populer',
        discount: '15% OFF'
      },
      {
        ...kebayaCatalog[2],
        name: 'Kebaya Nirmala',
        collection: 'Bridesmaid Sage Blossom',
        status: 'Favorit',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[5],
        name: 'Kebaya Laksmi',
        collection: 'Bridesmaid Champagne',
        status: 'Pilihan',
        discount: '18% OFF'
      }
    ],
    'Kondangan': [
      {
        ...kebayaCatalog[3],
        collection: 'Kondangan Collection',
        status: 'Pilihan 👑',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[6],
        collection: 'Kondangan Royal Maroon',
        status: 'Eksklusif',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[5],
        name: 'Kebaya Laksmi',
        collection: 'Kondangan Modern Silk',
        status: 'Populer',
        discount: '18% OFF'
      },
      {
        ...kebayaCatalog[2],
        name: 'Kebaya Nirmala',
        collection: 'Kondangan Emerald Sage',
        status: 'Favorit',
        discount: '20% OFF'
      }
    ],
    'Kebaya Modern': [
      {
        ...kebayaCatalog[5],
        collection: 'Modern Asymmetric Cut',
        status: 'Populer 👑',
        discount: '18% OFF'
      },
      kebayaCatalog[11], // Kebaya Kalila
      {
        ...kebayaCatalog[2],
        name: 'Kebaya Nirmala',
        collection: 'Modern Kutubaru Chic',
        status: 'Favorit',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[1],
        name: 'Kebaya Ayodhya',
        collection: 'Modern Floral Brocade',
        status: 'Baru',
        discount: '15% OFF'
      }
    ],
    'Kebaya Tradisional': [
      {
        ...kebayaCatalog[7],
        collection: 'Tradisional Jawa Klasik',
        status: 'Klasik 👑',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[0],
        name: 'Kebaya Maheswari',
        collection: 'Tradisional Keraton Ageng',
        status: 'Eksklusif',
        discount: '15% OFF'
      },
      {
        ...kebayaCatalog[3],
        name: 'Kebaya Kirana',
        collection: 'Tradisional Encim Batik',
        status: 'Favorit',
        discount: '20% OFF'
      },
      {
        ...kebayaCatalog[6],
        name: 'Kebaya Cendrawasih',
        collection: 'Tradisional Beludru Emas',
        status: 'Pilihan',
        discount: '20% OFF'
      }
    ]
  };

  let isFeaturedAnimating = false;
  function renderFeaturedCards(filterCategory = 'Semua') {
    if (!featuredGrid) return;
    let items = featuredCategoryItems[filterCategory];
    if (!items || items.length === 0) {
      items = featuredCategoryItems['Semua'];
    }

    featuredGrid.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    featuredGrid.style.opacity = '0.3';
    featuredGrid.style.transform = 'translateY(4px)';

    setTimeout(() => {
      featuredGrid.innerHTML = items.map(createCardHTML).join('');
      featuredGrid.style.opacity = '1';
      featuredGrid.style.transform = 'translateY(0)';
    }, 150);
  }

  // Category filter pills in Featured section
  const featuredCatPills = Array.from(document.querySelectorAll('.featured-cat-pill'));
  const featuredPillsContainer = document.getElementById('featuredCategoryPills');

  function switchFeaturedTab(targetIndex) {
    if (!featuredCatPills || featuredCatPills.length === 0) return;

    let nextIndex = targetIndex;
    if (nextIndex < 0) nextIndex = featuredCatPills.length - 1;
    if (nextIndex >= featuredCatPills.length) nextIndex = 0;

    featuredCatPills.forEach((p, idx) => {
      if (idx === nextIndex) {
        p.classList.add('active');
        if (featuredPillsContainer) {
          const containerRect = featuredPillsContainer.getBoundingClientRect();
          const pillRect = p.getBoundingClientRect();
          const scrollTarget = p.offsetLeft - (featuredPillsContainer.clientWidth / 2) + (p.clientWidth / 2);
          featuredPillsContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });
        }
      } else {
        p.classList.remove('active');
      }
    });

    const activePill = featuredCatPills[nextIndex];
    const cat = activePill ? activePill.getAttribute('data-category') : 'Semua';
    renderFeaturedCards(cat);
  }

  featuredCatPills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      switchFeaturedTab(idx);
    });
  });

  // Featured arrows: click prev/next to switch category tab
  const featuredPrevBtn = document.getElementById('featuredPrevBtn');
  const featuredNextBtn = document.getElementById('featuredNextBtn');

  if (featuredPrevBtn) {
    featuredPrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentIndex = featuredCatPills.findIndex(p => p.classList.contains('active'));
      const activeIdx = currentIndex >= 0 ? currentIndex : 0;
      switchFeaturedTab(activeIdx - 1);
    });
  }

  if (featuredNextBtn) {
    featuredNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentIndex = featuredCatPills.findIndex(p => p.classList.contains('active'));
      const activeIdx = currentIndex >= 0 ? currentIndex : 0;
      switchFeaturedTab(activeIdx + 1);
    });
  }

  // =========================================================================
  // 6. CATALOG FILTERS & SORTING (Sidebar & Range slider)
  // =========================================================================
  // 6. CATALOG FILTERS, PAGINATION & SORTING
  // =========================================================================
  const paginationContainer = document.getElementById('catalogPagination');
  const perPageSelect = document.getElementById('catalogPerPageSelect');

  let activeFilters = {
    category: 'Semua',
    color: 'Semua',
    size: 'Semua',
    maxPrice: 1000000,
    search: '',
    sortBy: 'terbaru',
    perPage: 5,
    currentPage: 1
  };

  function renderPaginationControls(totalPages, currentPage) {
    if (!paginationContainer) return;

    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      paginationContainer.style.display = 'none';
      return;
    }

    paginationContainer.style.display = 'flex';

    let html = '';

    // Prev Button
    const isPrevDisabled = currentPage <= 1;
    html += `
      <button type="button" class="pagination-btn ${isPrevDisabled ? 'disabled' : ''}" 
              ${isPrevDisabled ? 'disabled' : ''} 
              onclick="goToPage(${currentPage - 1})" 
              aria-label="Halaman Sebelumnya" title="Sebelumnya">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
    `;

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      html += `
        <button type="button" class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                onclick="goToPage(${i})" 
                aria-label="Halaman ${i}" title="Halaman ${i}">
          ${i}
        </button>
      `;
    }

    // Next Button
    const isNextDisabled = currentPage >= totalPages;
    html += `
      <button type="button" class="pagination-btn ${isNextDisabled ? 'disabled' : ''}" 
              ${isNextDisabled ? 'disabled' : ''} 
              onclick="goToPage(${currentPage + 1})" 
              aria-label="Halaman Berikutnya" title="Berikutnya">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;

    paginationContainer.innerHTML = html;
  }

  window.goToPage = function(pageNumber) {
    activeFilters.currentPage = pageNumber;
    applyCatalogFilters();

    const catalogSection = document.getElementById('koleksi');
    if (catalogSection) {
      const topOffset = catalogSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  function applyCatalogFilters() {
    if (!catalogGrid) return;

    let filtered = kebayaCatalog.filter(item => {
      // Category filter
      if (activeFilters.category !== 'Semua') {
        if (item.category.toLowerCase() !== activeFilters.category.toLowerCase()) {
          return false;
        }
      }

      // Color filter
      if (activeFilters.color !== 'Semua') {
        const matchesColor = (item.colorNames || []).some(cn => 
          cn.toLowerCase().includes(activeFilters.color.toLowerCase())
        );
        if (!matchesColor) return false;
      }

      // Size filter
      if (activeFilters.size !== 'Semua') {
        if (!(item.sizes || []).includes(activeFilters.size)) return false;
      }

      // Price filter
      if (item.priceNum > activeFilters.maxPrice) {
        return false;
      }

      // Search filter
      if (activeFilters.search) {
        const q = activeFilters.search.toLowerCase();
        const matchesQuery = item.name.toLowerCase().includes(q) || 
                             item.category.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    });

    // Sorting
    if (activeFilters.sortBy === 'harga-rendah') {
      filtered.sort((a, b) => a.priceNum - b.priceNum);
    } else if (activeFilters.sortBy === 'harga-tinggi') {
      filtered.sort((a, b) => b.priceNum - a.priceNum);
    } else if (activeFilters.sortBy === 'populer') {
      filtered.sort((a, b) => b.popularity - a.popularity);
    }

    // Pagination Calculation
    const totalItems = filtered.length;
    const perPageVal = activeFilters.perPage === 'all' ? totalItems : parseInt(activeFilters.perPage, 10);
    const perPage = (isNaN(perPageVal) || perPageVal <= 0) ? (totalItems || 1) : perPageVal;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

    if (activeFilters.currentPage > totalPages) {
      activeFilters.currentPage = totalPages;
    }
    if (activeFilters.currentPage < 1) {
      activeFilters.currentPage = 1;
    }

    const startIndex = (activeFilters.currentPage - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalItems);
    const paginatedItems = (activeFilters.perPage === 'all') ? filtered : filtered.slice(startIndex, endIndex);

    if (catalogResultsCount) {
      if (totalItems === 0) {
        catalogResultsCount.textContent = '0 Koleksi Ditemukan';
      } else if (activeFilters.perPage === 'all' || totalItems <= perPage) {
        catalogResultsCount.textContent = `Menampilkan ${totalItems} dari ${totalItems} Koleksi`;
      } else {
        catalogResultsCount.textContent = `Menampilkan ${startIndex + 1}–${endIndex} dari ${totalItems} Koleksi`;
      }
    }

    if (totalItems === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 20px;">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 12px;">Tidak ada kebaya yang sesuai dengan filter yang dipilih.</p>
          <button class="btn-pill btn-primary" onclick="resetFilters()">Reset Filter</button>
        </div>
      `;
    } else {
      catalogGrid.innerHTML = paginatedItems.map(createCardHTML).join('');
    }

    renderPaginationControls(totalPages, activeFilters.currentPage);
  }

  function renderCatalogCards() {
    applyCatalogFilters();
  }

  // Per Page Select Event
  if (perPageSelect) {
    perPageSelect.addEventListener('change', (e) => {
      activeFilters.perPage = e.target.value;
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  }

  // Category Checkboxes Event
  const catCheckboxes = document.querySelectorAll('.cat-checkbox');
  catCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        catCheckboxes.forEach(other => {
          if (other !== cb) other.checked = false;
        });
        activeFilters.category = cb.value;
      } else {
        activeFilters.category = 'Semua';
      }
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  });

  // Color Filter Rows
  const colorFilterRows = document.querySelectorAll('.color-filter-row');
  colorFilterRows.forEach(row => {
    row.addEventListener('click', () => {
      colorFilterRows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
      activeFilters.color = row.getAttribute('data-color');
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  });

  // Size Filter Pills
  const sizePills = document.querySelectorAll('.size-pill-btn');
  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      if (pill.classList.contains('active')) {
        pill.classList.remove('active');
        activeFilters.size = 'Semua';
      } else {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilters.size = pill.getAttribute('data-size');
      }
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  });

  // Price Range Slider
  const priceSlider = document.getElementById('priceRangeSlider');
  const priceMaxLabel = document.getElementById('priceMaxLabel');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      activeFilters.maxPrice = val;
      if (priceMaxLabel) {
        priceMaxLabel.textContent = `Rp ${val.toLocaleString('id-ID')}`;
      }
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeFilters.sortBy = e.target.value;
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  }

  // Search Input
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value;
      activeFilters.currentPage = 1;
      applyCatalogFilters();
    });
  }

  // Reset Filters Function
  window.resetFilters = function() {
    activeFilters = {
      category: 'Semua',
      color: 'Semua',
      size: 'Semua',
      maxPrice: 1000000,
      search: '',
      sortBy: 'terbaru',
      perPage: 5,
      currentPage: 1
    };

    if (perPageSelect) perPageSelect.value = '5';

    catCheckboxes.forEach(cb => {
      cb.checked = (cb.value === 'Semua');
    });

    colorFilterRows.forEach((r, idx) => {
      r.classList.toggle('active', idx === 0);
    });

    sizePills.forEach(p => p.classList.remove('active'));

    if (priceSlider) {
      priceSlider.value = 1000000;
      if (priceMaxLabel) priceMaxLabel.textContent = 'Rp 1.000.000';
    }

    if (sortSelect) sortSelect.value = 'terbaru';
    if (catalogSearchInput) catalogSearchInput.value = '';

    applyCatalogFilters();
  };

  const filterResetBtn = document.getElementById('filterResetBtn');
  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', resetFilters);
  }

  // Initial Renders
  renderFeaturedCards();
  renderCatalogCards();

  // =========================================================================
  // 7. DETAIL & DIRECT WHATSAPP BOOKING MODAL
  // =========================================================================
  const detailModal = document.getElementById('detailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSizesContainer = document.getElementById('modalSizesContainer');
  const modalEventDate = document.getElementById('modalEventDate');
  const modalDuration = document.getElementById('modalDuration');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  let selectedKebaya = null;
  let selectedSize = 'M';

  window.openKebayaDetail = function(name) {
    const item = kebayaCatalog.find(k => k.name === name) || heroSlides.find(s => s.name === name);
    if (!item) return;

    selectedKebaya = item;
    selectedSize = (item.sizes && item.sizes.length > 0) ? item.sizes[1] || item.sizes[0] : 'M';

    if (modalImage) modalImage.src = item.image;
    if (modalTag) modalTag.textContent = item.category || item.tag;
    if (modalTitle) modalTitle.textContent = item.name;
    if (modalPrice) modalPrice.textContent = item.price;
    const modalOriginalPrice = document.getElementById('modalOriginalPrice');
    const modalDiscount = document.getElementById('modalDiscount');
    if (modalOriginalPrice) modalOriginalPrice.textContent = item.originalPrice || 'Rp 360.000';
    if (modalDiscount) modalDiscount.textContent = item.discount || '15% OFF';
    if (modalDesc) {
      modalDesc.textContent = item.desc || 
        `${item.name} adalah koleksi kebaya mewah dengan sentuhan tradisional berpadu siluet modern kontemporer. Menggunakan bahan lace prancis lembut dengan payet kristal handmade yang berkilau anggun.`;
    }

    // Render sizes
    if (modalSizesContainer) {
      const sizes = item.sizes || ["S", "M", "L", "XL"];
      modalSizesContainer.innerHTML = sizes.map(s => 
        `<button type="button" class="modal-size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>`
      ).join('');
    }

    // Default rental date: 3 days from now
    if (modalEventDate) {
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 3);
      modalEventDate.value = defaultDate.toISOString().split('T')[0];
    }

    updateWhatsappLink();
    if (detailModal) detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.selectModalSize = function(size, btn) {
    selectedSize = size;
    document.querySelectorAll('.modal-size-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    updateWhatsappLink();
  };

  function updateWhatsappLink() {
    if (!selectedKebaya || !modalWhatsappBtn) return;
    const dateVal = modalEventDate ? modalEventDate.value : 'Sesuai jadwal';
    const durationVal = modalDuration ? modalDuration.value : '3 Hari';
    
    const message = 
`Halo Svasti Kebaya Rental ✨
Saya ingin konsultasi & booking kebaya berikut:

✨ *DETAIL KEBAYA:*
• Koleksi: *${selectedKebaya.name}* (${selectedKebaya.category || selectedKebaya.tag || 'Koleksi'})
• Pilihan Ukuran: *${selectedSize}*
• Rencana Tanggal Acara: *${dateVal}*
• Durasi Sewa: *${durationVal}*
• Harga Normal: ${selectedKebaya.originalPrice || 'Rp 360.000'}
• Harga Promo (${selectedKebaya.discount || '15% OFF'}): *${selectedKebaya.price}* / sewa

Apakah model kebaya ini masih tersedia untuk tanggal tersebut? Saya ingin jadwalkan fitting & booking. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    // WhatsApp official customer service
    const phone = "6285973729267";
    modalWhatsappBtn.href = `https://wa.me/${phone}?text=${encodedMsg}`;
  }

  if (modalEventDate) modalEventDate.addEventListener('change', updateWhatsappLink);
  if (modalDuration) modalDuration.addEventListener('change', updateWhatsappLink);

  window.closeDetailModal = function() {
    if (detailModal) detailModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetailModal);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal();
    });
  }

  // =========================================================================
  // 8. VIDEO STORY MODAL (Behind The Story)
  // =========================================================================
  const videoModal = document.getElementById('videoModal');
  const videoCloseBtn = document.getElementById('videoCloseBtn');
  const aboutVideoTrigger = document.getElementById('aboutVideoTrigger');
  const aboutPlayBtn = document.getElementById('aboutPlayBtn');

  function openVideoModal() {
    if (videoModal) videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (videoModal) videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (aboutVideoTrigger) aboutVideoTrigger.addEventListener('click', openVideoModal);
  if (aboutPlayBtn) aboutPlayBtn.addEventListener('click', openVideoModal);
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // =========================================================================
  // 9. LOOKBOOK LIGHTBOX MODAL
  // =========================================================================
  const lookbookCards = document.querySelectorAll('.lookbook-card');
  lookbookCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-lookbook-title') || 'Inspirasi Kebaya';
      if (title === 'Akad') {
        openKebayaDetail('Kebaya Gayatri');
      } else if (title === 'Wisuda') {
        openKebayaDetail('Kebaya Danastri');
      } else if (title === 'Event') {
        openKebayaDetail('Kebaya Kalila');
      } else {
        openKebayaDetail('Kebaya Renjana');
      }
    });
  });

  // =========================================================================
  // 10. MOBILE NAVIGATION DRAWER
  // =========================================================================
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');

  window.openMobileDrawer = function() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('active');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeMobileDrawer = function() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileDrawer();
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileDrawer);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
  }

  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // =========================================================================
  // 11. NAVBAR SCROLL EFFECT & ACTIVE LINK SCROLLSPY
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const desktopNavLinks = document.querySelectorAll('.nav-dock .nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer-link');

  const trackedSections = [
    { elId: 'kontak', navHref: '#kontak' },
    { elId: 'testimoni', navHref: '#koleksi' },
    { elId: 'koleksi', navHref: '#koleksi' },
    { elId: 'layanan', navHref: '#layanan' },
    { elId: 'galeri', navHref: '#galeri' },
    { elId: 'tentang-kami', navHref: '#tentang-kami' },
    { elId: 'koleksi-unggulan', navHref: '#koleksi' },
    { elId: 'beranda', navHref: '#beranda' }
  ];

  function setActiveNav(targetHref) {
    desktopNavLinks.forEach(link => {
      if (link.getAttribute('href') === targetHref) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach(link => {
      if (link.getAttribute('href') === targetHref) {
        link.style.color = 'var(--primary-maroon)';
        link.style.fontWeight = '700';
      } else {
        link.style.color = '';
        link.style.fontWeight = '';
      }
    });
  }

  function onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // 1. Transparent at top banner vs frosted cream/white glass when scrolled
    if (siteHeader) {
      if (scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // 2. Active Scrollspy
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    // 3. Back to Top Button visibility (shows when scrolled down > 350px)
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // If near bottom of the page, activate Kontak
    if (scrollY + winHeight >= docHeight - 100) {
      setActiveNav('#kontak');
      return;
    }

    // Check which section matches current scroll
    const checkPoint = scrollY + 180;
    for (const sec of trackedSections) {
      const element = document.getElementById(sec.elId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (checkPoint >= top && checkPoint < top + height) {
          setActiveNav(sec.navHref);
          return;
        }
      }
    }

    // Default to beranda if at very top
    if (scrollY < 300) {
      setActiveNav('#beranda');
    }
  }

  window.addEventListener('scroll', onWindowScroll, { passive: true });
  onWindowScroll(); // Trigger immediately on load

  // Immediate active class update on link click
  desktopNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href');
      setActiveNav(href);
    });
  });

  // =========================================================================
  // 12. BACK TO TOP BUTTON LOGIC
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 13. SVASTI VIRTUAL STYLIST - INTERACTIVE AI CHATBOT SYSTEM
  // =========================================================================
  const chatbotToggleBtn = document.getElementById('chatbotToggleBtn');
  const chatbotWidget = document.getElementById('chatbotWidget');
  const chatbotCloseBtn = document.getElementById('chatbotCloseBtn');
  const chatbotResetBtn = document.getElementById('chatbotResetBtn');
  const chatbotToast = document.getElementById('chatbotToast');
  const chatbotBody = document.getElementById('chatbotBody');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotTyping = document.getElementById('chatbotTyping');
  const chatbotChipsBar = document.getElementById('chatbotChipsBar');
  const chatbotChipsPrev = document.getElementById('chatbotChipsPrev');
  const chatbotChipsNext = document.getElementById('chatbotChipsNext');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotBadgeUnread = document.getElementById('chatbotBadgeUnread');

  // Sound chime synthesizer via Web Audio API (zero audio file dependencies)
  function playChatSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.12); // B5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.23);
    } catch (e) {
      // AudioContext policy suppression fallback
    }
  }

  function getFormattedTime() {
    const d = new Date();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${mins}`;
  }

  // Default initial greeting
  const initialBotGreeting = {
    sender: 'bot',
    text: `Halo Kak! ✨ Selamat datang di **Svasti Kebaya Rental**.\n\nSaya **Svasti Virtual Stylist**, asisten AI cerdas yang siap membantu Kakak menemukan kebaya impian untuk **Wisuda, Akad, Lamaran, atau Kondangan**, cek harga sewa, panduan ukuran, hingga reservasi.\n\nAda yang bisa saya bantu hari ini?`,
    actions: [
      { text: '🎓 Rekomendasi Wisuda', action: 'send-query', query: 'Rekomendasi Wisuda' },
      { text: '💍 Kebaya Akad', action: 'send-query', query: 'Koleksi Kebaya Akad' },
      { text: '💰 Harga & Diskon', action: 'send-query', query: 'Berapa harga sewa dan diskon?' },
      { text: '📏 Panduan Ukuran', action: 'send-query', query: 'Panduan ukuran dan size chart' }
    ],
    time: getFormattedTime()
  };

  let chatHistory = [];
  try {
    const saved = sessionStorage.getItem('svasti_chat_history');
    if (saved) {
      chatHistory = JSON.parse(saved);
    }
  } catch (e) {
    chatHistory = [];
  }

  if (!chatHistory || chatHistory.length === 0) {
    chatHistory = [initialBotGreeting];
  }

  function saveChatHistory() {
    try {
      sessionStorage.setItem('svasti_chat_history', JSON.stringify(chatHistory));
    } catch (e) {}
  }

  function formatTextMarkup(rawText) {
    if (!rawText) return '';
    // Escape HTML special characters
    let escaped = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    // Bold **text**
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Newlines to <br>
    escaped = escaped.replace(/\n/g, '<br>');
    return escaped;
  }

  function renderMessageItem(msg) {
    const isBot = msg.sender === 'bot';
    const row = document.createElement('div');
    row.className = `chat-msg-row ${isBot ? 'bot' : 'user'}`;

    if (isBot) {
      let actionsHTML = '';
      if (msg.actions && msg.actions.length > 0) {
        actionsHTML = `
          <div class="chat-action-pills">
            ${msg.actions.map(act => {
              if (act.action === 'send-query') {
                return `<button type="button" class="chat-action-btn" data-action="send-query" data-query="${act.query}">${act.text}</button>`;
              } else if (act.action === 'filter-cat') {
                return `<button type="button" class="chat-action-btn" data-action="filter-cat" data-category="${act.category}">${act.text}</button>`;
              } else if (act.action === 'open-detail') {
                return `<button type="button" class="chat-action-btn" data-action="open-detail" data-kebaya="${act.kebaya}">${act.text}</button>`;
              } else if (act.action === 'open-wishlist') {
                return `<button type="button" class="chat-action-btn" data-action="open-wishlist">${act.text}</button>`;
              } else if (act.action === 'scroll-to') {
                return `<button type="button" class="chat-action-btn" data-action="scroll-to" data-target="${act.target}">${act.text}</button>`;
              } else if (act.action === 'open-wa') {
                return `<a href="https://wa.me/6285973729267?text=${encodeURIComponent(act.msg || 'Halo Svasti Kebaya')}" target="_blank" class="chat-action-btn" data-action="open-wa">${act.text}</a>`;
              }
              return '';
            }).join('')}
          </div>
        `;
      }

      row.innerHTML = `
        <div class="bot-msg-container">
          <div class="bot-avatar-sm" title="Svasti AI">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8.01" y2="16" stroke-width="2.5"></line>
              <line x1="16" y1="16" x2="16.01" y2="16" stroke-width="2.5"></line>
            </svg>
          </div>
          <div>
            <div class="chat-bubble-bot">
              ${formatTextMarkup(msg.text)}
              ${actionsHTML}
            </div>
            <div class="chat-msg-time">${msg.time || getFormattedTime()}</div>
          </div>
        </div>
      `;
    } else {
      row.innerHTML = `
        <div class="chat-bubble-user">
          ${formatTextMarkup(msg.text)}
        </div>
        <div class="chat-msg-time">${msg.time || getFormattedTime()}</div>
      `;
    }

    return row;
  }

  function renderAllChatMessages() {
    if (!chatbotMessages) return;
    chatbotMessages.innerHTML = '';
    chatHistory.forEach(msg => {
      chatbotMessages.appendChild(renderMessageItem(msg));
    });
    scrollChatToBottom();
  }

  function scrollChatToBottom() {
    if (chatbotBody) {
      setTimeout(() => {
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
      }, 30);
    }
  }

  // Open & Close Chatbot
  window.openChatbot = function() {
    if (!chatbotWidget) return;
    chatbotWidget.classList.add('active');
    if (chatbotToggleBtn) {
      chatbotToggleBtn.classList.add('active');
      const openIcon = chatbotToggleBtn.querySelector('.chatbot-icon-open');
      const closeIcon = chatbotToggleBtn.querySelector('.chatbot-icon-close');
      if (openIcon) openIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'block';
    }
    if (chatbotBadgeUnread) {
      chatbotBadgeUnread.classList.add('hidden');
    }
    scrollChatToBottom();
    setTimeout(updateChipsNavVisibility, 100);
    // Focus input on non-touch devices
    if (window.innerWidth > 600 && chatbotInput) {
      setTimeout(() => chatbotInput.focus(), 250);
    }
  };

  window.closeChatbot = function() {
    if (!chatbotWidget) return;
    chatbotWidget.classList.remove('active');
    if (chatbotToggleBtn) {
      chatbotToggleBtn.classList.remove('active');
      const openIcon = chatbotToggleBtn.querySelector('.chatbot-icon-open');
      const closeIcon = chatbotToggleBtn.querySelector('.chatbot-icon-close');
      if (openIcon) openIcon.style.display = 'block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  };

  if (chatbotToggleBtn) {
    chatbotToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (chatbotWidget && chatbotWidget.classList.contains('active')) {
        closeChatbot();
      } else {
        openChatbot();
      }
    });
  }

  if (chatbotCloseBtn) {
    chatbotCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeChatbot();
    });
  }

  // Reset conversation button with smooth visual animation & toast feedback
  if (chatbotResetBtn) {
    chatbotResetBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // 1. Spin the reset icon
      const icon = chatbotResetBtn.querySelector('.reset-icon');
      if (icon) {
        icon.classList.remove('rotating');
        void icon.offsetWidth; // trigger reflow
        icon.classList.add('rotating');
        setTimeout(() => icon.classList.remove('rotating'), 650);
      }

      // 2. Show toast feedback
      if (chatbotToast) {
        chatbotToast.classList.remove('show');
        void chatbotToast.offsetWidth;
        chatbotToast.classList.add('show');
        setTimeout(() => chatbotToast.classList.remove('show'), 2200);
      }

      // 3. Reset history to initial greeting
      chatHistory = [
        {
          ...initialBotGreeting,
          time: getFormattedTime()
        }
      ];
      saveChatHistory();
      renderAllChatMessages();

      // 4. Reset input & chip scroll position
      if (chatbotInput) chatbotInput.value = '';
      if (chatbotChipsBar) {
        chatbotChipsBar.scrollLeft = 0;
        updateChipsNavVisibility();
      }
    });
  }

  // Category Filter Helper
  window.filterCatalogByCategory = function(categoryName) {
    const cb = Array.from(document.querySelectorAll('.cat-checkbox')).find(c => 
      c.value.toLowerCase() === categoryName.toLowerCase()
    );
    if (cb) {
      cb.checked = true;
      cb.dispatchEvent(new Event('change'));
    } else {
      activeFilters.category = categoryName;
      applyCatalogFilters();
    }
    const catSection = document.getElementById('koleksi');
    if (catSection) {
      catSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Delegated handler for interactive action buttons inside bot bubbles
  if (chatbotBody) {
    chatbotBody.addEventListener('click', (e) => {
      const btn = e.target.closest('.chat-action-btn');
      if (!btn) return;
      const act = btn.dataset.action;
      if (act === 'send-query') {
        const query = btn.dataset.query;
        if (query) handleUserSubmit(query);
      } else if (act === 'filter-cat') {
        const cat = btn.dataset.category;
        window.filterCatalogByCategory(cat);
      } else if (act === 'open-detail') {
        const kebaya = btn.dataset.kebaya;
        if (typeof window.openKebayaDetail === 'function') {
          window.openKebayaDetail(kebaya);
        }
      } else if (act === 'open-wishlist') {
        if (typeof window.openWishlistDrawer === 'function') {
          window.openWishlistDrawer();
        }
      } else if (act === 'scroll-to') {
        const target = btn.dataset.target;
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // CHATBOT CHIPS HORIZONTAL DRAG, WHEEL & BUTTON SCROLL LOGIC
  // =========================================================================
  let isChipsDragging = false;
  let chipsMouseDown = false;
  let chipsStartX = 0;
  let chipsScrollLeft = 0;

  function updateChipsNavVisibility() {
    if (!chatbotChipsBar) return;
    const sLeft = chatbotChipsBar.scrollLeft;
    const maxScroll = chatbotChipsBar.scrollWidth - chatbotChipsBar.clientWidth;

    if (chatbotChipsPrev) {
      if (sLeft > 8) {
        chatbotChipsPrev.classList.remove('hidden');
      } else {
        chatbotChipsPrev.classList.add('hidden');
      }
    }

    if (chatbotChipsNext) {
      if (maxScroll > 6 && sLeft < maxScroll - 8) {
        chatbotChipsNext.classList.remove('hidden');
      } else {
        chatbotChipsNext.classList.add('hidden');
      }
    }
  }

  if (chatbotChipsBar) {
    // 1. Mouse Drag-to-Scroll (Klik dan Geser)
    chatbotChipsBar.addEventListener('mousedown', (e) => {
      chipsMouseDown = true;
      isChipsDragging = false;
      chipsStartX = e.pageX - chatbotChipsBar.offsetLeft;
      chipsScrollLeft = chatbotChipsBar.scrollLeft;
      chatbotChipsBar.classList.add('is-dragging');
    });

    window.addEventListener('mouseup', () => {
      if (chipsMouseDown) {
        chipsMouseDown = false;
        chatbotChipsBar.classList.remove('is-dragging');
        setTimeout(() => {
          isChipsDragging = false;
        }, 50);
      }
    });

    chatbotChipsBar.addEventListener('mousemove', (e) => {
      if (!chipsMouseDown) return;
      const x = e.pageX - chatbotChipsBar.offsetLeft;
      const walk = (x - chipsStartX) * 1.5;
      if (Math.abs(x - chipsStartX) > 4) {
        isChipsDragging = true;
      }
      chatbotChipsBar.scrollLeft = chipsScrollLeft - walk;
      updateChipsNavVisibility();
    });

    // 2. Mouse Wheel Horizontal Scroll
    chatbotChipsBar.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        chatbotChipsBar.scrollLeft += e.deltaY;
        updateChipsNavVisibility();
      }
    }, { passive: false });

    // 3. Scroll update
    chatbotChipsBar.addEventListener('scroll', updateChipsNavVisibility, { passive: true });

    // 4. Click delegation on chips (ignoring clicks when user dragged/geser)
    chatbotChipsBar.addEventListener('click', (e) => {
      if (isChipsDragging) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const chip = e.target.closest('.chatbot-chip');
      if (!chip) return;
      const query = chip.dataset.query;
      if (query) handleUserSubmit(query);
    });
  }

  // 5. Arrow button clicks
  if (chatbotChipsPrev) {
    chatbotChipsPrev.addEventListener('click', (e) => {
      e.preventDefault();
      if (chatbotChipsBar) {
        chatbotChipsBar.scrollBy({ left: -140, behavior: 'smooth' });
      }
    });
  }

  if (chatbotChipsNext) {
    chatbotChipsNext.addEventListener('click', (e) => {
      e.preventDefault();
      if (chatbotChipsBar) {
        chatbotChipsBar.scrollBy({ left: 140, behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // INTELLIGENT KNOWLEDGE BASE & INTENT ANALYZER
  // =========================================================================
  function generateBotResponse(rawQuery) {
    const q = rawQuery.toLowerCase();

    // 1. Wisuda / Graduation
    if (q.includes('wisuda') || q.includes('graduation') || q.includes('toga') || q.includes('sidang') || q.includes('kuliah') || q.includes('kampus')) {
      return {
        text: `Untuk momen **Wisuda & Graduation** yang berkesan dan anggun, kami merekomendasikan:\n\n• **Kebaya Nirmala (Sage Green)** - Model Kutubaru modern dengan warna sage segar, brokat ringan & sangat adem seharian. (Rp 250.000 / Diskon 20%)\n• **Kebaya Saraswati (Lilac / Soft Blue)** - Desain youthful & anggun, sangat fotogenik dipadukan topi toga. (Rp 260.000)\n• **Kebaya Ayodhya (Dusty Pink)** - Aksen payet mutiara mewah dan lembut. (Rp 300.000)\n\n✨ Semua paket wisuda sudah include: kebaya, rok jarik plisket, obi belt, dan **free fitting/vermak ringan**!`,
        actions: [
          { text: '👗 Lihat Katalog Wisuda', action: 'filter-cat', category: 'Wisuda' },
          { text: '✨ Detail Kebaya Nirmala', action: 'open-detail', kebaya: 'Kebaya Nirmala' },
          { text: '💬 Tanya Stok via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya tertarik dengan kebaya wisuda.' }
        ]
      };
    }

    // 2. Akad / Pernikahan / Bridal / Wedding
    if (q.includes('akad') || q.includes('nikah') || q.includes('pengantin') || q.includes('wedding') || q.includes('bridal') || q.includes('ijab') || q.includes('resepsi')) {
      return {
        text: `Selamat atas persiapan hari bahagia Kakak! 🤍 Untuk **Akad & Bridal Wedding**, Svasti menghadirkan koleksi mahakarya eksklusif:\n\n• **Kebaya Maheswari (Pure White & Ivory)** - Bertabur kristal swarovski dengan veil renda Prancis mewah, siluet anggun memukau. (Rp 350.000 / Diskon 15%)\n• **Kebaya Gayatri (Champagne & Rose Gold)** - Sentuhan royal bridal mewah dengan detail bordir emas dan train ekor menjuntai. (Rp 380.000)\n\n✨ Sudah termasuk veil pengantin, kain bawahan premium, roncean melati sintetis mewah, dan gratis fitting langsung di butik kami.`,
        actions: [
          { text: '💍 Lihat Koleksi Akad', action: 'filter-cat', category: 'Akad' },
          { text: '✨ Detail Kebaya Maheswari', action: 'open-detail', kebaya: 'Kebaya Maheswari' },
          { text: '💬 Konsultasi Bridal di WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin konsultasi sewa kebaya untuk akad nikah.' }
        ]
      };
    }

    // 3. Lamaran / Tunangan / Engagement
    if (q.includes('lamaran') || q.includes('tunangan') || q.includes('engagement') || q.includes('tunang')) {
      return {
        text: `Untuk prosesi **Lamaran & Engagement** yang sakral dan manis:\n\n• **Kebaya Ayodhya (Dusty Pink & Mauve)** - Detail bordir bunga 3D dan payet mutiara yang paling dicari calon mempelai. (Rp 300.000 / Diskon 15%)\n• **Kebaya Cempaka (Terracotta & Rose Gold)** - Nuansa earth tone hangat dengan detail kancing bungkus modern kontemporer. (Rp 320.000)\n\n✨ Tersedia juga **Beskap Pria Couple** senada untuk pasangan Kakak!`,
        actions: [
          { text: '🌸 Lihat Koleksi Lamaran', action: 'filter-cat', category: 'Lamaran' },
          { text: '✨ Detail Kebaya Ayodhya', action: 'open-detail', kebaya: 'Kebaya Ayodhya' },
          { text: '💬 Tanya Paket Couple WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya mau tanya paket kebaya lamaran & beskap couple.' }
        ]
      };
    }

    // 4. Kondangan / Pesta / Gala Dinner / Hitam / Mewah
    if (q.includes('kondangan') || q.includes('pesta') || q.includes('gala') || q.includes('dinner') || q.includes('party') || q.includes('mewah') || q.includes('glamor') || q.includes('hitam') || q.includes('black')) {
      return {
        text: `Tampil memikat dan percaya diri di pesta malam & acara keluarga:\n\n• **Kebaya Kirana (Midnight Black & Gold)** - Brokat hitam berpadu bordir emas antik glamor, potongan slim-fit mewah. (Rp 300.000 / Diskon 20%)\n• **Kebaya Danastri (Emerald Green & Navy)** - Bahan velvet beludru halus beraksen payet berkilau saat terkena sorot lampu pesta. (Rp 280.000)\n\n✨ Sangat pas untuk gala dinner, resepsi malam, maupun seragam keluarga.`,
        actions: [
          { text: '👗 Lihat Koleksi Kondangan', action: 'filter-cat', category: 'Kondangan' },
          { text: '✨ Detail Kebaya Kirana', action: 'open-detail', kebaya: 'Kebaya Kirana' },
          { text: '💬 Booking Cepat via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin sewa kebaya pesta/kondangan.' }
        ]
      };
    }

    // 5. Harga / Biaya / Tarif / Diskon / Promo / Durasi
    if (q.includes('harga') || q.includes('biaya') || q.includes('sewa') || q.includes('tarif') || q.includes('ongkos') || q.includes('pricelist') || q.includes('price') || q.includes('diskon') || q.includes('promo') || q.includes('durasi') || q.includes('hari') || q.includes('ekstensi')) {
      return {
        text: `💰 **Daftar Harga & Ketentuan Sewa Svasti Kebaya:**\n\n• **Kisaran Harga:** Rp 250.000 - Rp 380.000 per set lengkap (ada promo diskon 15% - 20%).\n• **Paket Termasuk:** Kebaya atasan + rok bawahan batik/plisket + kemben/manset + obi belt + laundry higienis.\n• **Durasi Standar:** 3 Hari (H-1 pengambilan/kirim, Hari H pemakaian, H+1 pengembalian).\n• **Perpanjangan Durasi:** 5 hari (+30%) atau 7 hari (+50%).\n• **Bebas Repot Cuci:** Kakak **TIDAK PERLU mencuci** kebaya saat mengembalikan! Dry clean sudah ditanggung tim kami.`,
        actions: [
          { text: '🏷️ Buka Katalog & Diskon', action: 'scroll-to', target: '#koleksi' },
          { text: '💖 Buka Wishlist Saya', action: 'open-wishlist' },
          { text: '💬 Cek Total Biaya via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin menanyakan rincian harga sewa.' }
        ]
      };
    }

    // 6. Ukuran (Size) / Fitting / LD / Lingkar Dada / Custom
    if (q.includes('ukuran') || q.includes('size') || q.includes('fitting') || q.includes('ld') || q.includes('lingkar dada') || q.includes('muat') || q.includes('gemuk') || q.includes('kurus') || q.includes('jumbo') || q.includes('vermak') || q.includes('pas') || q.includes('panjang')) {
      return {
        text: `📏 **Panduan Ukuran (Size Chart) Svasti:**\n\n• **XS:** Lingkar Dada 80 - 84 cm\n• **S:** Lingkar Dada 86 - 88 cm\n• **M:** Lingkar Dada 90 - 94 cm\n• **L:** Lingkar Dada 96 - 100 cm\n• **XL:** Lingkar Dada 102 - 106 cm\n• **XXL:** Lingkar Dada 108 - 114 cm\n\n✨ **Fasilitas Fitting Svasti:**\n• Gratis fitting langsung di butik galeri kami.\n• Free penyesuaian kancing/peniti ringan agar pas di badan Kakak.\n• Untuk pesanan online, tim kami memandu cara ukur praktis via WhatsApp.`,
        actions: [
          { text: '📍 Info Lokasi Butik', action: 'send-query', query: 'Lokasi galeri dan jam operasional' },
          { text: '💬 Panduan Ukur via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin konsultasi ukuran & fitting kebaya.' }
        ]
      };
    }

    // 7. Lokasi / Alamat / Jam Buka / Galeri / Butik
    if (q.includes('lokasi') || q.includes('alamat') || q.includes('dimana') || q.includes('tempat') || q.includes('toko') || q.includes('butik') || q.includes('galeri') || q.includes('buka') || q.includes('jam') || q.includes('operasional') || q.includes('kapan')) {
      return {
        text: `📍 **Lokasi Galeri Svasti Kebaya Rental:**\nJl. Kebaya Indah No. 88, Kebayoran Baru, Jakarta Selatan (Akses mudah & parkir luas).\n\n⏰ **Jam Operasional Butik:**\n• Buka setiap hari: **09.00 - 20.00 WIB** (Senin s/d Minggu tetap buka).\n\nKakak dipersilakan datang langsung untuk melihat ratusan koleksi cantik & mencoba ruang fitting eksklusif kami!`,
        actions: [
          { text: '🗺️ Buka Kontak & Peta', action: 'scroll-to', target: '#kontak' },
          { text: '💬 Buat Janji Fitting WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin menjadwalkan kunjungan fitting ke butik.' }
        ]
      };
    }

    // 8. Cara Sewa / Alur Booking / Alur Pemesanan
    if (q.includes('cara') || q.includes('alur') || q.includes('booking') || q.includes('pesan') || q.includes('order') || q.includes('gimana') || q.includes('langkah') || q.includes('prosedur')) {
      return {
        text: `✨ **Alur Pemesanan Sewa Mudah di Svasti:**\n\n1. **Pilih Kebaya:** Cari kebaya impian di katalog & simpan ke Wishlist.\n2. **Tentukan Tanggal:** Pilih tanggal acara & cek ketersediaan size.\n3. **Booking DP:** Pembayaran DP 50% untuk mengunci tanggal pemakaian.\n4. **Fitting & Ambil:** Ambil di butik H-1 acara atau dikirim via kurir instan/ekspedisi.\n5. **Kembalikan:** Pengembalian H+1 setelah acara (tidak perlu dicuci).`,
        actions: [
          { text: '👗 Buka Katalog Sekarang', action: 'scroll-to', target: '#koleksi' },
          { text: '💖 Cek Wishlist Saya', action: 'open-wishlist' },
          { text: '💬 Hubungi Admin via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin booking sewa kebaya.' }
        ]
      };
    }

    // 9. Cuci / Laundry / Kebersihan
    if (q.includes('cuci') || q.includes('laundry') || q.includes('dicuci') || q.includes('kotor') || q.includes('bersih') || q.includes('higienis')) {
      return {
        text: `Kakak tidak perlu khawatir soal kebersihan! ✨\n\n• Semua kebaya di Svasti melewati proses **dry clean uap higienis & sterilisasi UV** sebelum diserahkan.\n• Setelah acara selesai, Kakak **TIDAK PERLU mencuci** kebayanya, cukup kembalikan ke butik dan kami yang urus seluruh perawatannya tanpa biaya tambahan!`,
        actions: [
          { text: '👗 Lihat Katalog Kebaya', action: 'scroll-to', target: '#koleksi' },
          { text: '💬 Konsultasi via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin tanya seputar perawatan kebaya.' }
        ]
      };
    }

    // 10. Pasangan / Pria / Beskap / Couple
    if (q.includes('pria') || q.includes('cowok') || q.includes('laki') || q.includes('beskap') || q.includes('jas') || q.includes('pasangan') || q.includes('couple')) {
      return {
        text: `Kami juga menyediakan **Beskap Pria & Setelan Couple** senada untuk acara Akad, Lamaran, dan Pesta! 🤵👰\n\nSetiap beskap sudah dilengkapi kain bawahan motif kembar dan blangkon premium. Silakan tanyakan ketersediaan size dan warna ke Admin kami.`,
        actions: [
          { text: '💬 Tanya Paket Couple WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin tanya ketersediaan beskap pria couple.' },
          { text: '🌸 Koleksi Lamaran', action: 'filter-cat', category: 'Lamaran' }
        ]
      };
    }

    // 11. Wishlist
    if (q.includes('wishlist') || q.includes('keranjang') || q.includes('simpan') || q.includes('disimpan') || q.includes('favorit')) {
      return {
        text: `Kakak bisa menyimpan kebaya favorit dengan menekan tombol **Hati (🤍)** pada setiap kebaya di katalog.\n\nSemua kebaya yang disimpan akan terkumpul di drawer Wishlist beserta ringkasan diskon dan tombol sewa otomatis!`,
        actions: [
          { text: '💖 Buka Wishlist Sekarang', action: 'open-wishlist' },
          { text: '👗 Jelajahi Koleksi', action: 'scroll-to', target: '#koleksi' }
        ]
      };
    }

    // 12. Kontak / Admin / WhatsApp CS
    if (q.includes('admin') || q.includes('cs') || q.includes('whatsapp') || q.includes('wa') || q.includes('kontak') || q.includes('hubungi') || q.includes('telepon') || q.includes('nomor')) {
      return {
        text: `Tim customer service Svasti siap melayani Kakak dengan ramah dan responsif! 🌸\n\n📱 **WhatsApp Official:** 0859-7372-9267\n📧 **Email:** info@svastikebaya.id\n📍 **Galeri:** Kebayoran Baru, Jakarta Selatan\n\nKlik tombol di bawah untuk langsung terhubung ke WhatsApp Admin kami:`,
        actions: [
          { text: '💬 Hubungi WhatsApp Admin', action: 'open-wa', msg: 'Halo Admin Svasti Kebaya, saya ingin bertanya seputar sewa kebaya.' }
        ]
      };
    }

    // 13. Greetings / Salam
    if (q.includes('halo') || q.includes('hai') || q.includes('hello') || q.includes('hi') || q.includes('pagi') || q.includes('siang') || q.includes('sore') || q.includes('malam') || q.includes('assalamualaikum') || q.includes('permisi')) {
      return {
        text: `Halo Kak! Senang sekali bisa menyapa Kakak. ✨ Ada kebutuhan acara apa yang sedang dipersiapkan? Saya siap memberikan rekomendasi kebaya terbaik yang pas dengan gaya dan budget Kakak.`,
        actions: [
          { text: '🎓 Rekomendasi Wisuda', action: 'send-query', query: 'Rekomendasi Wisuda' },
          { text: '💍 Kebaya Akad Nikah', action: 'send-query', query: 'Koleksi Kebaya Akad' },
          { text: '🌸 Kebaya Lamaran', action: 'send-query', query: 'Kebaya Lamaran' },
          { text: '👗 Kondangan / Pesta', action: 'send-query', query: 'Kondangan & Pesta' }
        ]
      };
    }

    // 14. Terima kasih & Pujian
    if (q.includes('terima kasih') || q.includes('makasih') || q.includes('thanks') || q.includes('keren') || q.includes('bagus') || q.includes('ok') || q.includes('oke') || q.includes('siap') || q.includes('mantap')) {
      return {
        text: `Sama-sama Kak! Senang sekali bisa membantu Kakak. 🌸 Jangan ragu bertanya lagi jika butuh rekomendasi model atau fitting. Semoga momen spesial Kakak berjalan lancar dan memukau bersama Svasti Kebaya! ✨`,
        actions: [
          { text: '👗 Jelajahi Koleksi', action: 'scroll-to', target: '#koleksi' },
          { text: '💬 Hubungi Admin via WA', action: 'open-wa', msg: 'Halo Svasti Kebaya, saya ingin reservasi kebaya.' }
        ]
      };
    }

    // 15. Default / Fallback Response
    return {
      text: `Terima kasih pertanyaannya Kak! Sebagai asisten virtual Svasti Kebaya, saya dapat membantu memberikan info seputar:\n\n• **Rekomendasi Kebaya** (Wisuda, Akad, Lamaran, Kondangan)\n• **Harga Sewa & Promo Diskon** (Mulai Rp 250.000 / 3 hari)\n• **Panduan Ukuran & Fitting** (XS hingga XXL)\n• **Lokasi Butik Galeri & Jam Buka** (09.00 - 20.00 WIB)\n\nAtau Kakak bisa langsung ngobrol dengan Admin kami via WhatsApp untuk konsultasi khusus!`,
      actions: [
        { text: '🎓 Rekomendasi Wisuda', action: 'send-query', query: 'Rekomendasi Wisuda' },
        { text: '💍 Koleksi Akad', action: 'send-query', query: 'Koleksi Kebaya Akad' },
        { text: '💰 Harga & Diskon', action: 'send-query', query: 'Berapa harga sewa dan diskon?' },
        { text: '💬 Chat WhatsApp Admin', action: 'open-wa', msg: 'Halo Admin Svasti Kebaya, saya ingin konsultasi sewa kebaya.' }
      ]
    };
  }

  function handleUserSubmit(queryText) {
    const text = (queryText || '').trim();
    if (!text) return;

    // 1. Add user message
    const userMsg = {
      sender: 'user',
      text: text,
      time: getFormattedTime()
    };
    chatHistory.push(userMsg);
    saveChatHistory();
    if (chatbotMessages) {
      chatbotMessages.appendChild(renderMessageItem(userMsg));
    }
    scrollChatToBottom();

    // Clear input
    if (chatbotInput) chatbotInput.value = '';

    // Show typing indicator
    if (chatbotTyping) {
      chatbotTyping.style.display = 'inline-flex';
      scrollChatToBottom();
    }

    // Realistic delay for bot response
    const delay = Math.min(800, Math.max(450, text.length * 15));
    setTimeout(() => {
      if (chatbotTyping) {
        chatbotTyping.style.display = 'none';
      }

      const botReply = generateBotResponse(text);
      const botMsg = {
        sender: 'bot',
        text: botReply.text,
        actions: botReply.actions,
        time: getFormattedTime()
      };

      chatHistory.push(botMsg);
      saveChatHistory();

      if (chatbotMessages) {
        chatbotMessages.appendChild(renderMessageItem(botMsg));
      }
      playChatSound();
      scrollChatToBottom();
    }, delay);
  }

  if (chatbotForm) {
    chatbotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (chatbotInput) {
        handleUserSubmit(chatbotInput.value);
      }
    });
  }

  // Initial render of chat messages
  renderAllChatMessages();

  // Keyboard accessibility (ESC to close modals and chatbot)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeVideoModal();
      closeWishlistDrawer();
      closeChatbot();
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    }
  });

  // =========================================================================
  // TESTIMONIALS SLIDER & PROGRESS BAR (MOCKUP INTERACTION)
  // =========================================================================
  function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsSliderTrack');
    const prevBtn = document.getElementById('testiPrevBtn');
    const nextBtn = document.getElementById('testiNextBtn');
    const progressFill = document.getElementById('testiProgressFill');
    const progressTrack = document.getElementById('testiProgressTrack');
    const dots = document.querySelectorAll('.testi-dot');
    
    if (!track) return;
    const cards = track.querySelectorAll('.testi-card-mockup');
    if (!cards.length) return;

    function getCardStep() {
      if (cards.length > 1) {
        return cards[1].offsetLeft - cards[0].offsetLeft;
      }
      return cards[0].offsetWidth + 22;
    }

    function updateProgress() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const scrollLeft = track.scrollLeft;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollLeft / maxScroll)) : 0;
      
      if (progressFill) {
        const minPct = 100 / cards.length;
        const currentPct = minPct + progress * (100 - minPct);
        progressFill.style.width = currentPct + '%';
      }

      // Calculate active card index based on center of view
      const viewCenter = scrollLeft + (track.clientWidth / 2);
      let activeIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft - track.offsetLeft + (card.offsetWidth / 2);
        const distance = Math.abs(cardCenter - viewCenter);
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = idx;
        }
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    }

    function scrollToIndex(idx) {
      if (idx >= 0 && idx < cards.length) {
        const targetLeft = cards[idx].offsetLeft - track.offsetLeft;
        track.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }

    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.preventDefault();
        const step = getCardStep();
        track.scrollBy({ left: -step, behavior: 'smooth' });
      };
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.preventDefault();
        const step = getCardStep();
        track.scrollBy({ left: step, behavior: 'smooth' });
      };
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        scrollToIndex(idx);
      });
    });

    if (progressTrack) {
      progressTrack.addEventListener('click', (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const clickRatio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        const targetIndex = Math.min(cards.length - 1, Math.round(clickRatio * (cards.length - 1)));
        scrollToIndex(targetIndex);
      });
    }

    // Scroll listener with requestAnimationFrame
    let ticking = false;
    track.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Desktop Mouse Drag to Slide
    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let hasMoved = false;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      hasMoved = false;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      startScroll = track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        track.classList.remove('is-dragging');
      }
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      if (Math.abs(walk) > 4) hasMoved = true;
      track.scrollLeft = startScroll - walk;
    });

    // Prevent clicking on action buttons if dragged
    track.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', (e) => {
        if (hasMoved) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });

    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  initTestimonialsSlider();

  console.log("Svasti Kebaya Rental initialized successfully with luxury 3D aesthetics, Back to Top, and AI Chatbot!");
});
