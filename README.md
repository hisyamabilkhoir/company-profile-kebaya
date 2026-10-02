# SVASTI Kebaya Rental - Landing Page & Company Profile

Landing page company profile modern & mewah untuk **SVASTI Kebaya Rental**, dirancang dengan estetika 3D rounded, glassmorphism, soft shadow, dan transisi halus interaktif. Dibangun menggunakan **HTML5, CSS3 murni (Vanilla CSS), dan JavaScript murni** agar siap langsung di-*deploy* ke **GitHub Pages**.

---

## ✨ Fitur Utama

1. **Hero Banner Interaktif (Carousel 3D & Micro-interactions)**:
   - Slider kebaya dengan transisi *smooth cross-fade*.
   - Thumbnail vertikal di sisi kanan (01/04, 02/04, dst) yang dapat diklik untuk berganti model & gaun.
   - Tombol navigasi panah atas/bawah & samping (prev/next).
   - *Floating 3D Frosted Glass Card* yang mengupdate nama kebaya, koleksi, swatch warna, deskripsi, harga, dan tombol detail secara *real-time*.
   - **Bottom Moments Pill Dock** (*Semua, Akad, Lamaran, Wisuda, Bridesmaid, Kondangan, Kebaya Modern, Kebaya Tradisional*) yang menyaring koleksi saat diklik.

2. **Koleksi Unggulan**:
   - Kartu kebaya 3D dengan efek hover lift dan *zoom preview*.
   - Status badge (*Baru, Populer, Favorit, Pilihan*), tag kategori, dan swatch warna.
   - Tombol *Wishlist* interaktif yang tersinkronisasi dengan counter badge di navbar.

3. **Tentang Kami ("Lebih dari Sekadar Kebaya, Ini tentang Cerita")**:
   - Desain asimetris dengan aksen bola emas 3D dan floating card *Behind The Story*.
   - Modal lightbox video profil pembuatan kebaya.
   - 3 Kartu statistik 3D (*100+ Koleksi, 5+ Tahun Pengalaman, 1.000+ Pelanggan Puas*).

4. **Lookbook ("Inspirasi Gayamu")**:
   - 4 Kartu galeri *widescreen*: Akad, Lamaran, Wisuda, dan Event.

5. **Layanan yang Ditawarkan**:
   - 4 Kartu layanan 3D: *Kebaya Rental*, *Fitting*, *Styling*, dan *Accessories*.

6. **Cara Sewa (5 Langkah Simpel)**:
   - Alur proses sewa interaktif dengan ikon 3D (*01 Pilih Kebaya, 02 Cek Ketersediaan, 03 Booking & DP, 04 Fitting & Pickup, 05 Return*).

7. **Testimoni Pelanggan**:
   - Kartu ulasan dengan rating 5 bintang, foto pelanggan, dan peran acara (*Akad, Wisuda, Kondangan*).

8. **Katalog Lengkap & Filter Interaktif (Sesuai Mockup 3)**:
   - Pencarian model kebaya *real-time*.
   - Filter Kategori (*Akad, Lamaran, Wisuda, Bridesmaid, Kondangan, Modern, Tradisional*).
   - Filter Warna (*Semua Warna, Putih, Cream, Dusty Pink, Maroon, Sage, Navy, Hitam*).
   - Filter Ukuran (*XS, S, M, L, XL, XXL*).
   - *Dual range price slider* (Rp 200.000 s/d Rp 1.000.000).
   - Pengurutan: *Terbaru, Paling Populer, Harga Terendah, Harga Tertinggi*.
   - Tombol *Reset Filter*.

9. **Modal 3D Detail & Booking Langsung via WhatsApp**:
   - Menampilkan detail kebaya lengkap.
   - Pemilihan ukuran, tanggal acara/fitting, dan durasi sewa.
   - Tombol **"Hubungi via WhatsApp"** otomatis menghasilkan pesan terformat rapi sesuai pilihan user.

10. **Responsif & Mobile First**:
    - Tampilan optimal di desktop, tablet, dan smartphone (iPhone/Android).
    - Mobile navigation drawer dengan animasi halus.
    - Tombol WhatsApp melayang (*floating action button*) di sudut kanan bawah.

---

## 📁 Struktur Folder

```text
company-profile-kebaya/
├── index.html              # Halaman utama landing page & katalog
├── README.md               # Dokumentasi proyek
├── css/
│   └── style.css           # Design system 3D, CSS variables & responsive layout
├── js/
│   └── app.js              # Interaktivitas hero slider, filter, wishlist & modal
└── assets/
    └── images/             # Asset gambar AI high-res, foto kebaya, & icon 3D
```

---

## 🚀 Cara Upload ke GitHub Pages

1. **Inisialisasi Git di folder ini**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page Svasti Kebaya Rental"
   ```

2. **Hubungkan ke repository GitHub Anda**:
   ```bash
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**:
   - Buka repository di GitHub.
   - Masuk ke tab **Settings** > **Pages** (di sidebar kiri).
   - Pada bagian **Build and deployment > Source**, pilih **Deploy from a branch**.
   - Di dropdown **Branch**, pilih `main` dan folder `/(root)`, lalu klik **Save**.
   - Tunggu 1-2 menit, landing page akan aktif di: `https://USERNAME.github.io/REPO_NAME/`.

---

© 2026 Svasti Kebaya Rental. All rights reserved.
