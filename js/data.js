const PORTFOLIO_DATA = {
  skills: [
    // Programming Languages
    { name: "JavaScript (ES6+)", category: "languages", catLabel: "Language", level: "Advanced", percent: 92, icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", category: "languages", catLabel: "Language", level: "Advanced", percent: 88, icon: "devicon-typescript-plain colored" },
    { name: "Python", category: "languages", catLabel: "Language", level: "Intermediate+", percent: 82, icon: "devicon-python-plain colored" },
    { name: "Go (Golang)", category: "languages", catLabel: "Language", level: "Intermediate", percent: 75, icon: "devicon-go-original-wordmark colored" },
    { name: "PHP", category: "languages", catLabel: "Language", level: "Intermediate+", percent: 80, icon: "devicon-php-plain colored" },
    { name: "SQL", category: "languages", catLabel: "Query Lang", level: "Advanced", percent: 86, icon: "fa-solid fa-database text-cyan" },

    // Frontend Development
    { name: "HTML5 & Semantic Web", category: "frontend", catLabel: "Frontend", level: "Expert", percent: 96, icon: "devicon-html5-plain colored" },
    { name: "CSS3 & Responsive Grid", category: "frontend", catLabel: "Frontend", level: "Advanced", percent: 94, icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", category: "frontend", catLabel: "Frontend", level: "Advanced", percent: 91, icon: "devicon-tailwindcss-plain colored" },

    // Frameworks & Libraries
    { name: "React.js", category: "frameworks", catLabel: "Framework/Lib", level: "Advanced", percent: 90, icon: "devicon-react-original colored" },
    { name: "Next.js", category: "frameworks", catLabel: "Framework", level: "Advanced", percent: 87, icon: "devicon-nextjs-original" },
    { name: "Node.js & Express", category: "backend", catLabel: "Backend", level: "Advanced", percent: 90, icon: "devicon-nodejs-plain colored" },
    { name: "NestJS", category: "backend", catLabel: "Backend", level: "Intermediate+", percent: 80, icon: "devicon-nestjs-plain colored" },
    { name: "FastAPI", category: "backend", catLabel: "Backend", level: "Intermediate+", percent: 82, icon: "devicon-fastapi-plain colored" },
    { name: "Laravel", category: "frameworks", catLabel: "Framework", level: "Intermediate+", percent: 80, icon: "devicon-laravel-plain colored" },

    // Database Management
    { name: "PostgreSQL", category: "database", catLabel: "Database", level: "Advanced", percent: 86, icon: "devicon-postgresql-plain colored" },
    { name: "MySQL", category: "database", catLabel: "Database", level: "Advanced", percent: 88, icon: "devicon-mysql-plain colored" },
    { name: "MongoDB", category: "database", catLabel: "NoSQL DB", level: "Intermediate+", percent: 80, icon: "devicon-mongodb-plain colored" },
    { name: "Redis", category: "database", catLabel: "In-Memory DB", level: "Intermediate", percent: 76, icon: "devicon-redis-plain colored" },

    // Tools & Development Environment
    { name: "Git & GitHub", category: "tools", catLabel: "Version Control", level: "Advanced", percent: 92, icon: "devicon-git-plain colored" },
    { name: "Docker", category: "tools", catLabel: "Container", level: "Intermediate+", percent: 78, icon: "devicon-docker-plain colored" },
    { name: "Linux CLI & Bash", category: "tools", catLabel: "Environment", level: "Intermediate+", percent: 82, icon: "devicon-linux-plain" },
    { name: "VS Code & Postman", category: "tools", catLabel: "Dev Tools", level: "Expert", percent: 95, icon: "devicon-vscode-plain colored" }
  ],

  featuredProjects: [
    {
      title: "Katalog Tani",
      category: "web",
      kind: "Aplikasi Web",
      image: "assets/images/project-katalog-tani.jpg",
      imageAlt: "Lahan perkebunan teh yang digunakan sebagai gambar beranda Katalog Tani.",
      description: "Aplikasi katalog pertanian berbasis Laravel untuk menjelajahi informasi tanaman, pupuk, kategori, dan panduan pemupukan, dengan dashboard admin untuk mengelola konten.",
      highlights: ["Laravel", "PHP", "MySQL", "Katalog tanaman & pupuk"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "TRAYA — Travel App UI",
      category: "mobile",
      kind: "Antarmuka Mobile",
      gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.24), rgba(15, 23, 42, 0.92))",
      image: "assets/images/project-traya-travel.png",
      imageAlt: "Tampilan ponsel aplikasi TRAYA dengan layanan tiket wisata, hotel, rute, dan pilihan destinasi.",
      imageFit: "contain",
      description: "Desain aplikasi travel mobile yang merangkum pencarian layanan wisata, tiket dan hotel, rute, mobil, jasa titip, kuliner, serta pilihan destinasi populer.",
      highlights: ["Tiket & hotel", "Rute wisata", "Mobil & kuliner"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "Saku — Personal Finance Dashboard",
      category: "web",
      kind: "Demo Konsep · Dashboard Web",
      isConcept: true,
      previewLayout: "finance",
      gradient: "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(30, 41, 59, 0.96))",
      description: "Eksplorasi UI dashboard finansial untuk merangkum anggaran, transaksi, dan target tabungan dalam satu tampilan.",
      highlights: ["Ringkasan anggaran", "Riwayat transaksi", "Target tabungan"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "Pustaka — Book Discovery App",
      category: "mobile",
      kind: "Demo Konsep · Aplikasi Mobile",
      isConcept: true,
      previewLayout: "books",
      gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.22), rgba(30, 27, 55, 0.96))",
      description: "Konsep antarmuka katalog buku mobile dengan eksplorasi koleksi, kategori bacaan, dan daftar simpan.",
      highlights: ["Koleksi buku", "Kategori bacaan", "Daftar simpan"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "KebunKita — Plant Care Companion",
      category: "mobile",
      kind: "Demo Konsep · Aplikasi Mobile",
      isConcept: true,
      previewLayout: "plants",
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 42, 38, 0.96))",
      description: "Eksplorasi desain aplikasi pendamping tanaman untuk menyusun jadwal perawatan, catatan, dan koleksi pribadi.",
      highlights: ["Jadwal perawatan", "Catatan tanaman", "Koleksi pribadi"],
      demoUrl: "",
      githubUrl: ""
    },
    {
      title: "RuteKota — Transit Planner",
      category: "web",
      kind: "Demo Konsep · Web App",
      isConcept: true,
      previewLayout: "transit",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(40, 35, 28, 0.96))",
      description: "Konsep web app perencana perjalanan perkotaan dengan pencarian tujuan, ringkasan transit, dan rute tersimpan.",
      highlights: ["Pencarian tujuan", "Ringkasan transit", "Rute tersimpan"],
      demoUrl: "",
      githubUrl: ""
    }
  ],

  caseStudies: [
    {
      id: "cs-nexus",
      tabTitle: "01. NexusCloud ERP",
      projectTitle: "NexusCloud ERP — Arsitektur Multi-Tenant & Real-Time Analytics",
      role: "Lead Full-Stack Engineer",
      problem: "Banyak pelaku usaha menengah masih mencatat stok gudang dan laporan keuangan secara terpisah menggunakan spreadsheet manual, menyebabkan selisih data stok hingga 14% dan keterlambatan rekap laporan bulanan.",
      goal: "Membangun satu platform web terpusat yang mampu menyinkronkan transaksi kasir, mutasi gudang, dan laporan laba-rugi secara real-time dengan waktu respons di bawah 200ms.",
      process: [
        "Merancang skema relasional PostgreSQL dengan isolasi data berbasis tenant_id dan indexing komposit.",
        "Membangun REST API modular menggunakan Node.js & TypeScript dengan validasi skema ketat.",
        "Mengimplementasikan Redis caching untuk query laporan berat serta WebSocket untuk notifikasi stok menipis."
      ],
      architecture: "Client (Next.js App Router) -> Nginx Reverse Proxy -> Node.js API Cluster -> Redis Cache -> PostgreSQL Primary DB.",
      result: "Memangkas waktu rekapitulasi laporan keuangan dari 3 hari menjadi instan (real-time) dan menekan selisih pencatatan inventaris hingga < 0.5%."
    },
    {
      id: "cs-velocity",
      tabTitle: "02. Velocity API Gateway",
      projectTitle: "Velocity API Gateway — Proteksi Trafik & Rate Limiting Terdistribusi",
      role: "Backend & System Architect",
      problem: "Lonjakan permintaan API otomatis (bot scraping dan burst traffic) kerap membebani layanan utama dan meningkatkan waktu tunggu pengguna sah.",
      goal: "Menciptakan lapisan gateway berkinerja tinggi yang dapat membatasi kuota permintaan per pengguna secara akurat tanpa menambah latensi signifikan.",
      process: [
        "Mengimplementasikan algoritma Token Bucket menggunakan Lua script atomik di dalam Redis.",
        "Memanfaatkan goroutines pada Go untuk menangani ribuan koneksi konkuren secara efisien.",
        "Menyediakan endpoint metrik real-time untuk memantau rasio request sukses dan terblokir."
      ],
      architecture: "Incoming HTTP/S -> Go Reverse Proxy & Rate-Limiter Middleware -> Redis Atomic Counter -> Upstream Microservices.",
      result: "Mampu memproses 12.000+ request/detik pada container 1 vCPU dengan overhead latensi rata-rata hanya 2.4ms."
    }
  ],

  journey: [
    {
      type: "Freelance & Independent",
      date: "2025 — Sekarang",
      title: "Full-Stack Software Developer",
      org: "Independent / Remote Clients",
      desc: "Merancang dan membangun aplikasi web kustom, dashboard analitik, sistem manajemen operasional, serta integrasi API pihak ketiga untuk klien bisnis dan startup.",
      visual: {
        src: "assets/images/journey-freelance-illustration.svg?v=2",
        alt: "Ilustrasi workspace proyek digital dengan dashboard, kartu analitik, dan panel manajemen.",
        label: "ILUSTRASI VISUAL · PROYEK INDEPENDEN"
      }
    },
    {
      type: "Open Source & R&D",
      date: "2024 — 2025",
      title: "Backend & System Architecture Contributor",
      org: "Developer Community & Personal Lab",
      desc: "Mengembangkan berbagai boilerplates API, autentikasi JWT/OAuth2, optimasi query database, dan containerization berbasis Docker.",
      visual: {
        src: "assets/images/journey-opensource-illustration.svg?v=2",
        alt: "Ilustrasi editor kode, terminal, dan diagram modul yang terhubung.",
        label: "ILUSTRASI VISUAL · EKSPERIMEN TEKNIS"
      }
    },
    {
      type: "Organisasi & Komunitas",
      date: "2023 — 2024",
      title: "Divisi Teknologi & Pengembangan Web",
      org: "Komunitas Pemrograman & Teknologi Informasi",
      desc: "Berperan aktif dalam pengelolaan portal informasi kegiatan, mengadakan sesi berbagi kode (code sharing), dan membantu anggota baru memahami dasar pengembangan web.",
      visual: {
        src: "assets/images/journey-organization-illustration.svg",
        alt: "Ilustrasi anggota komunitas berbagi kode dan belajar pengembangan web bersama.",
        label: "ILUSTRASI VISUAL · CODE SHARING KOMUNITAS"
      }
    },
    {
      type: "Awal Perjalanan",
      date: "2022 — 2023",
      title: "Fondasi Algoritma & Web Development",
      org: "Self-Paced Intensive Learning",
      desc: "Memulai perjalanan menulis kode secara konsisten—mempelajari struktur data, logika pemrograman, HTML, CSS, JavaScript, dan membangun proyek portofolio pertama.",
      visual: {
        src: "assets/images/journey-learning-illustration.svg?v=2",
        alt: "Ilustrasi jalur belajar pengembangan web dengan modul HTML, CSS, JavaScript, dan proyek.",
        label: "ILUSTRASI VISUAL · PERJALANAN BELAJAR"
      }
    }
  ],

  education: [
    {
      category: "PENDIDIKAN",
      icon: "fa-solid fa-graduation-cap",
      title: "Rekayasa Perangkat Lunak / Ilmu Komputer",
      issuer: "Jalur Pendidikan & Pengembangan Akademik",
      desc: "Fokus pada algoritma, struktur data, rekayasa perangkat lunak, jaringan komputer, dan manajemen basis data."
    },
    {
      category: "BOOTCAMP INTENSIF",
      icon: "fa-solid fa-laptop-code",
      title: "Full-Stack JavaScript & Modern Web Engineering",
      issuer: "Program Pelatihan Programming Intensif",
      desc: "Menyelesaikan kurikulum pengembangan aplikasi full-stack dengan React, Node.js, REST API, dan deployment cloud."
    },
    {
      category: "SERTIFIKASI KURSUS",
      icon: "fa-solid fa-certificate",
      title: "Backend Architecture, REST API & Relational Database",
      issuer: "Sertifikasi Kompetensi Developer",
      desc: "Penguasaan desain skema PostgreSQL/MySQL, keamanan autentikasi, serta optimasi performa server."
    },
    {
      category: "PRESTASI & PENGHARGAAN",
      icon: "fa-solid fa-trophy",
      title: "Top Project Showcase & Hackathon Finalist",
      issuer: "Kompetisi Pengembangan Aplikasi Web",
      desc: "Meraih apresiasi atas rancangan arsitektur bersih, kecepatan aplikasi, dan pengalaman antarmuka pengguna."
    }
  ],

  services: [
    {
      icon: "fa-solid fa-globe",
      title: "Website Development",
      desc: "Pembuatan website profesional end-to-end mulai dari perancangan struktur, desain responsif, hingga deployment siap produksi.",
      deliverables: ["Company Profile & Landing Page", "Custom Web Application", "SEO & Performance Optimization"]
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Frontend Development",
      desc: "Transformasi desain UI/UX menjadi kode antarmuka interaktif, cepat, aksesibel, dan kaya mikro-animasi elegan.",
      deliverables: ["React / Next.js SPA & SSR", "Interactive Animations & 3D UI", "Cross-Device Responsive Layout"]
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend Development",
      desc: "Pengembangan arsitektur server yang tangguh, aman, dan mudah diskalakan untuk mendukung logika bisnis kompleks.",
      deliverables: ["RESTful & WebSocket API", "JWT / OAuth2 Authentication", "Payment Gateway & 3rd-Party Integration"]
    },
    {
      icon: "fa-solid fa-database",
      title: "Database Development",
      desc: "Perancangan skema basis data yang terstruktur, normalisasi data, indexing, serta optimasi kecepatan query.",
      deliverables: ["PostgreSQL / MySQL / MongoDB", "Data Migration & Backup Strategy", "Query Tuning & Redis Caching"]
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Website Maintenance",
      desc: "Pemeliharaan berkala untuk memastikan website tetap aman, bebas bug, mutakhir, dan memiliki uptime maksimal.",
      deliverables: ["Bug Fixing & Security Patching", "Server & Docker Monitoring", "Feature Upgrades & Refactoring"]
    }
  ],

  testimonials: [
    {
      quote: "Khudaifi memiliki kemampuan analisis masalah yang sangat cepat. Sistem dashboard yang ia bangun berjalan jauh lebih ringan dan rapi dari ekspektasi tim kami.",
      author: "Rizky Pratama",
      role: "Product Lead — Klien Proyek Web"
    },
    {
      quote: "Kolaborasi yang sangat menyenangkan. Struktur kode backend-nya bersih, terdokumentasi dengan jelas, dan komunikasi selama pengerjaan selalu transparan.",
      author: "Dimas Saputra",
      role: "Rekan Tim Frontend Developer"
    },
    {
      quote: "Sebagai developer muda, Khudaifi menunjukkan etos belajar yang luar biasa. Ia tidak hanya membuat fitur berjalan, tetapi memikirkan skalabilitas jangka panjang.",
      author: "Andi Wijaya",
      role: "Senior Software Engineer & Mentor"
    }
  ]
};
