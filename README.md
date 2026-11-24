# Khudaifi — Immersive 12-Section Developer Portfolio (v2)

Portofolio developer lengkap dengan 12 bagian terstruktur, latar belakang animasi multi-layer (*Aurora Mesh + Architectural Grid + Interactive Constellation Canvas*), dan kode terpisah per file agar mudah dikustomisasi di VS Code.

## Live Portfolio

Buka website portofolio: [https://khudaifi937.github.io/khudaifi-portfolio/](https://khudaifi937.github.io/khudaifi-portfolio/)

## Struktur Folder
```text
khudaifi-portfolio-v2/
├── index.html                  # Struktur 12 section utama
├── README.md                   # Panduan kustomisasi
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # Foto profil lama
│   │   ├── khudaifi-profile.jpeg
│   │   ├── khudaifi-profile-hero.jpeg # Foto utama pada kartu hero
│   │   ├── khudaifi-about.jpeg # Foto untuk bagian About
│   │   ├── khudaifi-outdoors.jpeg
│   │   ├── khudaifi-outdoors-night.jpeg # Foto untuk kartu Di Luar Dunia Kode
│   │   ├── project-katalog-tani.jpg # Gambar beranda untuk kartu proyek Katalog Tani
│   │   └── project-traya-travel.png # Tampilan aplikasi travel TRAYA
│   └── docs/
│       └── CV-Khudaifi.png     # CV untuk tombol Download CV
├── api/
│   ├── contact.php             # Endpoint opsional untuk penyimpanan kontak ke MySQL
│   └── database.php            # Koneksi PDO ke MySQL
└── database/
    └── schema.sql             # Database dan tabel formulir kontak
├── css/
│   ├── style.css               # Tata letak 12 section, glassmorphism, & background layers
│   └── animations.css          # Keyframes aurora, orbit rings, 3D tilt, & scroll reveal
└── js/
    ├── data.js                 # Semua data: Skills, Projects, Case Studies, Journey, Edu, Services, Testimonials
    ├── canvas.js               # Animasi latar belakang partikel konstelasi & meteor interaktif
    ├── github.js               # Heatmap kontribusi & integrasi GitHub Public API
    └── main.js                 # Logika interaksi, filter, tab case study, 3D tilt, & form
```

## Cara Kustomisasi Cepat di VS Code
1. **Foto & CV:** Tambahkan foto proyek ke `assets/images/` dan simpan CV di `assets/docs/` (lalu perbarui atribut `href` tombol Download CV di `index.html`).
2. **Konten Portofolio:** Edit `js/data.js` untuk mengubah daftar skill, proyek, studi kasus, pengalaman, pendidikan/sertifikat, layanan, dan testimoni nyata Anda.
3. **Sinkronisasi GitHub Real-Time:** `js/github.js` terhubung ke akun `khudaifi937`; ganti `GITHUB_USERNAME` hanya jika username akun berubah.
4. **Featured Projects:** Tambahkan visual proyek pada `featuredProjects` di `js/data.js`. Konsep UI memakai `isConcept: true` dan `previewLayout` (`finance`, `books`, `plants`, atau `transit`) untuk menampilkan mockup layar; label demo membedakannya dari aplikasi yang sudah live.
5. **Dokumentasi Journey:** Simpan foto kegiatan di `assets/images/` lalu tambahkan daftar `photos` pada entri terkait di `journey` dalam `js/data.js`; galeri mendukung autoplay, tombol navigasi, dan thumbnail. Jika foto dokumentasi tidak tersedia, gunakan aset ilustrasi yang diberi label jelas sebagai ilustrasi.
6. **Kanal Kontak:** Perbarui alamat email dan tautan sosial pada bagian Contact serta footer di `index.html`; username GitHub untuk data profil diatur pada `js/github.js`.

## Menjalankan dengan Laragon
1. Letakkan folder ini di `C:\laragon\www\khudaifi-portfolio-v2`.
2. Jalankan **Apache** dari Laragon, lalu buka `http://localhost/khudaifi-portfolio-v2/`. Form kontak aktif mengarahkan pengunjung ke WhatsApp.
3. Database tidak diperlukan untuk form WhatsApp. Jika ingin menggunakan kembali endpoint PHP opsional, impor `database/schema.sql` lewat HeidiSQL atau phpMyAdmin Laragon.
4. Pengaturan bawaan koneksi adalah host `127.0.0.1`, port `3306`, database `khudaifi_portfolio`, user `root`, dan password kosong. Jika pengaturan MySQL Anda berbeda, atur environment variable `PORTFOLIO_DB_HOST`, `PORTFOLIO_DB_PORT`, `PORTFOLIO_DB_NAME`, `PORTFOLIO_DB_USER`, dan `PORTFOLIO_DB_PASSWORD`. Pesan yang masuk dapat dilihat pada tabel `contact_messages`.

Formulir kontak menyiapkan pesan dan membuka chat WhatsApp pada nomor yang diatur lewat atribut `data-whatsapp-number` di `index.html`. Pengunjung harus menekan tombol Kirim di WhatsApp; pesan tidak otomatis terkirim atau disimpan ke MySQL. Endpoint PHP/MySQL tetap tersedia secara opsional.

## Sebelum dipublikasikan
Ganti tautan demo `https://example.com`, email contoh, tautan GitHub/LinkedIn/Instagram, username GitHub, statistik, dan konten testimoni/riwayat yang masih berupa contoh dengan data serta tautan Anda yang benar.
