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
      status: "Baru",
      originalPrice: "Rp 420.000",
      discount: "15% OFF",
      price: "Rp 350.000",
      priceNum: 350000,
      image: "assets/images/card_maheswari.png",
      colors: ["#FFFFFF", "#F5EFE6", "#D4AF37"],
      colorNames: ["Putih", "Cream", "Gold"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 98
    },
    {
      id: 2,
      name: "Kebaya Ayodhya",
      category: "Lamaran",
      status: "Populer",
      originalPrice: "Rp 360.000",
      discount: "15% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/card_ayodhya.png",
      colors: ["#D8A4B8", "#B56576", "#8A9A86"],
      colorNames: ["Dusty Pink", "Mauve", "Sage"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      popularity: 99
    },
    {
      id: 3,
      name: "Kebaya Nirmala",
      category: "Wisuda",
      status: "Favorit",
      originalPrice: "Rp 310.000",
      discount: "20% OFF",
      price: "Rp 250.000",
      priceNum: 250000,
      image: "assets/images/card_nirmala.png",
      colors: ["#8A9A86", "#B56576", "#4A4E69"],
      colorNames: ["Sage", "Mauve", "Navy"],
      sizes: ["S", "M", "L"],
      popularity: 92
    },
    {
      id: 4,
      name: "Kebaya Kirana",
      category: "Kondangan",
      status: "Pilihan",
      originalPrice: "Rp 375.000",
      discount: "20% OFF",
      price: "Rp 300.000",
      priceNum: 300000,
      image: "assets/images/card_kirana.png",
      colors: ["#F5EFE6", "#5A1F30", "#1F1F1F"],
      colorNames: ["Cream", "Maroon", "Hitam"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 95
    },
    {
      id: 5,
      name: "Kebaya Anindita",
      category: "Bridesmaid",
      status: "Baru",
      originalPrice: "Rp 340.000",
      discount: "20% OFF",
      price: "Rp 275.000",
      priceNum: 275000,
      image: "assets/images/card_anindita.png",
      colors: ["#E8C5C8", "#5A1F30", "#8A9A86"],
      colorNames: ["Dusty Pink", "Maroon", "Sage"],
      sizes: ["XS", "S", "M", "L", "XL"],
      popularity: 88
    },
    {
      id: 6,
      name: "Kebaya Laksmi",
      category: "Kebaya Modern",
      status: "Populer",
      originalPrice: "Rp 390.000",
      discount: "18% OFF",
      price: "Rp 320.000",
      priceNum: 320000,
      image: "assets/images/card_laksmi.png",
      colors: ["#DFBF8E", "#D8A4B8", "#6B705C"],
      colorNames: ["Cream", "Dusty Pink", "Sage"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      popularity: 96
    },
    {
      id: 7,
      name: "Kebaya Cendrawasih",
      category: "Kondangan",
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
      status: "Klasik",
      originalPrice: "Rp 350.000",
      discount: "20% OFF",
      price: "Rp 280.000",
      priceNum: 280000,
      image: "assets/images/card_arunika.png",
      colors: ["#FAF0E6", "#5A1F30", "#2B2D42"],
      colorNames: ["Putih", "Maroon", "Hitam"],
      sizes: ["S", "M", "L", "XL"],
      popularity: 90
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
    const swatchesHTML = item.colors.map((c, i) => 
      `<span class="color-dot" style="background-color: ${c}" title="${item.colorNames[i] || ''}"></span>`
    ).join('');

    return `
      <div class="kebaya-card" onclick="openKebayaDetail('${item.name}')">
        <div class="kebaya-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="kebaya-tag-badge">${item.category}</span>
          <div class="kebaya-badges-top-left">
            ${item.status ? `<span class="kebaya-status-badge">${item.status}</span>` : ''}
            <span class="kebaya-discount-badge">${item.discount || '15% OFF'}</span>
          </div>
          <button class="kebaya-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${item.name}', event)" 
                  title="Simpan ke Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#E63946' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="kebaya-card-body">
          <h4 class="kebaya-card-title">${item.name}</h4>
          <div class="kebaya-card-swatches">
            ${swatchesHTML}
          </div>
          <div class="kebaya-card-footer">
            <div class="kebaya-price-block">
              <div class="kebaya-price-original-row">
                <span class="kebaya-original-price">${item.originalPrice || 'Rp 360.000'}</span>
                <span class="kebaya-discount-pill">${item.discount || '15% OFF'}</span>
              </div>
              <span class="kebaya-card-price">${item.price} <small style="font-size:0.75rem;font-weight:400;color:var(--text-muted)">/ sewa</small></span>
            </div>
            <button class="kebaya-card-action-btn" title="Lihat Detail & Sewa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderFeaturedCards() {
    if (!featuredGrid) return;
    const featuredItems = kebayaCatalog.slice(0, 4);
    featuredGrid.innerHTML = featuredItems.map(createCardHTML).join('');
  }

  // =========================================================================
  // 6. CATALOG FILTERS & SORTING (Sidebar & Range slider)
  // =========================================================================
  let activeFilters = {
    category: 'Semua',
    color: 'Semua',
    size: 'Semua',
    maxPrice: 1000000,
    search: '',
    sortBy: 'terbaru'
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
        const matchesColor = item.colorNames.some(cn => 
          cn.toLowerCase().includes(activeFilters.color.toLowerCase())
        );
        if (!matchesColor) return false;
      }

      // Size filter
      if (activeFilters.size !== 'Semua') {
        if (!item.sizes.includes(activeFilters.size)) return false;
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

    if (catalogResultsCount) {
      catalogResultsCount.textContent = `${filtered.length} Koleksi Ditemukan`;
    }

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 20px;">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 12px;">Tidak ada kebaya yang sesuai dengan filter yang dipilih.</p>
          <button class="btn-pill btn-primary" onclick="resetFilters()">Reset Filter</button>
        </div>
      `;
    } else {
      catalogGrid.innerHTML = filtered.map(createCardHTML).join('');
    }
  }

  function renderCatalogCards() {
    applyCatalogFilters();
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
      applyCatalogFilters();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeFilters.sortBy = e.target.value;
      applyCatalogFilters();
    });
  }

  // Search Input
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value;
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
      sortBy: 'terbaru'
    };

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
      openKebayaDetail(title === 'Akad' ? 'Kebaya Maheswari' : (title === 'Wisuda' ? 'Kebaya Nirmala' : 'Kebaya Ayodhya'));
    });
  });

  // =========================================================================
  // 10. MOBILE NAVIGATION DRAWER
  // =========================================================================
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');

  if (mobileNavToggle && mobileNavDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('active');
    });
  }

  if (mobileNavClose && mobileNavDrawer) {
    mobileNavClose.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('active');
    });
  }

  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    });
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

  // Keyboard accessibility (ESC to close modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeVideoModal();
      closeWishlistDrawer();
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
    }
  });

  console.log("Svasti Kebaya Rental initialized successfully with luxury 3D aesthetics!");
});
