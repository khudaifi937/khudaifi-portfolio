document.addEventListener("DOMContentLoaded", () => {
  // 1. Preloader
  const preloader = document.getElementById("preloader");
  const progress = document.getElementById("loader-progress");
  const percent = document.getElementById("loader-percent");
  let loadVal = 0;

  const loaderTimer = setInterval(() => {
    loadVal += Math.floor(Math.random() * 20) + 14;
    if (loadVal >= 100) {
      loadVal = 100;
      clearInterval(loaderTimer);
      setTimeout(() => preloader?.classList.add("hidden"), 250);
    }
    if (progress) progress.style.width = `${loadVal}%`;
    if (percent) percent.textContent = `${loadVal}%`;
  }, 55);

  // 2. Scroll Progress & Navbar
  const scrollBar = document.getElementById("scroll-progress-bar");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollBar && docHeight > 0) {
      scrollBar.style.width = `${(scrollTop / docHeight) * 100}%`;
    }
    if (scrollTop > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  menuToggle?.addEventListener("click", () => navLinks?.classList.toggle("open"));
  document.querySelectorAll(".nav-link, .nav-cta").forEach((el) => {
    el.addEventListener("click", () => navLinks?.classList.remove("open"));
  });

  // 3. Custom Cursor & Magnetic Buttons
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");

  window.addEventListener("mousemove", (e) => {
    if (cursorDot && cursorOutline) {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      cursorOutline.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 320, fill: "forwards" }
      );
    }
  });

  function bindCursorHover() {
    document.querySelectorAll("a, button, input, select, textarea, .glass-panel").forEach((el) => {
      el.addEventListener("mouseenter", () => cursorOutline?.classList.add("hovering"));
      el.addEventListener("mouseleave", () => cursorOutline?.classList.remove("hovering"));
    });
  }

  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
    });
  });

  // 4. Hero Typing Tagline
  const typingEl = document.getElementById("typing-text");
  const taglines = [
    "Scalable Full-Stack Applications.",
    "High-Performance Backend APIs.",
    "Elegant & Interactive Interfaces.",
    "Clean Software Architectures."
  ];
  let tIdx = 0;
  let cIdx = 0;
  let deleting = false;

  function runTyping() {
    if (!typingEl) return;
    const word = taglines[tIdx];
    if (deleting) {
      typingEl.textContent = word.substring(0, cIdx - 1);
      cIdx--;
    } else {
      typingEl.textContent = word.substring(0, cIdx + 1);
      cIdx++;
    }

    let delay = deleting ? 38 : 80;
    if (!deleting && cIdx === word.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % taglines.length;
      delay = 320;
    }
    setTimeout(runTyping, delay);
  }
  runTyping();

  // 5. 3D Tilt on Hero Card
  const heroCard = document.getElementById("hero-tilt-card");
  if (heroCard) {
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const rx = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -12;
      const ry = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 12;
      heroCard.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // 6. Scroll Reveal & Hero Metric Counters
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

  document.querySelectorAll(".metric-val").forEach((el) => {
    const target = Number(el.dataset.target || 0);
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = cur;
      }
    }, 35);
  });

  // =========================================================
  // DYNAMIC SECTION RENDERERS FROM PORTFOLIO_DATA
  // =========================================================
  if (typeof PORTFOLIO_DATA !== "undefined") {
    // Section 03: Technical Skills
    const skillsMatrix = document.getElementById("skills-matrix");
    const skillTabs = document.querySelectorAll(".skill-tab");

    function renderSkills(cat = "all") {
      if (!skillsMatrix) return;
      const items =
        cat === "all"
          ? PORTFOLIO_DATA.skills
          : PORTFOLIO_DATA.skills.filter((s) => s.category === cat);

      skillsMatrix.innerHTML = items
        .map(
          (s) => `
        <div class="skill-item-card glass-panel">
          <div class="skill-item-top">
            <div class="skill-identity">
              <i class="${s.icon}"></i>
              <div>
                <h4>${s.name}</h4>
                <span class="skill-cat-badge font-mono">${s.catLabel}</span>
              </div>
            </div>
            <span class="skill-level-pill">${s.level} (${s.percent}%)</span>
          </div>
          <div class="proficiency-track">
            <div class="proficiency-fill" style="width: ${s.percent}%"></div>
          </div>
        </div>
      `
        )
        .join("");
      bindCursorHover();
    }

    skillTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        skillTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderSkills(tab.dataset.category);
      });
    });
    renderSkills("all");

    // Section 04: Featured Projects
    const projectsGrid = document.getElementById("featured-projects-grid");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const visibleProjects = PORTFOLIO_DATA.featuredProjects.filter((project) => project.image || project.isConcept);

    function renderConceptPreview(project) {
      const screens = {
        finance: `
          <div class="concept-screen finance-screen">
            <aside class="finance-sidebar">
              <span class="finance-logo">S</span>
              <i class="fa-solid fa-chart-pie is-current"></i>
              <i class="fa-solid fa-arrow-right-arrow-left"></i>
              <i class="fa-solid fa-bullseye"></i>
              <i class="fa-solid fa-gear"></i>
            </aside>
            <div class="finance-main">
              <header class="finance-toolbar">
                <div><small>RINGKASAN HARIAN</small><strong>Keuanganmu, lebih teratur</strong></div>
                <span class="finance-avatar">N</span>
              </header>
              <div class="finance-stats">
                <div class="finance-balance"><small>Total saldo</small><strong>Rp 12.840.000</strong><span><i class="fa-solid fa-arrow-trend-up"></i> 8,4% bulan ini</span></div>
                <div class="finance-stat"><small>Pengeluaran</small><strong>Rp 3.240.000</strong><span>Bulan ini</span></div>
              </div>
              <div class="finance-lower">
                <div class="finance-chart-card"><strong>Arus kas</strong><small>Pengeluaran mingguan</small><div class="finance-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="finance-week"><span>Sen</span><span>Rab</span><span>Jum</span><span>Min</span></div></div>
                <div class="finance-activity"><strong>Transaksi terbaru</strong><span><i class="fa-solid fa-bag-shopping"></i> Belanja <b>-Rp 245 rb</b></span><span><i class="fa-solid fa-wallet"></i> Gaji <b>+Rp 4,5 jt</b></span></div>
              </div>
            </div>
          </div>`,
        books: `
          <div class="mobile-stage">
            <div class="mobile-concept-frame books-frame">
              <div class="mobile-status"><span>9:41</span><span><i class="fa-solid fa-signal"></i> <i class="fa-solid fa-battery-three-quarters"></i></span></div>
              <div class="mobile-heading"><small>JELAJAHI PUSTAKA</small><strong>Temukan bacaanmu</strong></div>
              <div class="mobile-search"><i class="fa-solid fa-magnifying-glass"></i> Cari judul atau penulis</div>
              <div class="book-feature"><div class="book-cover book-cover-feature"><small>THE<br>QUIET<br>GARDEN</small></div><div><small>PILIHAN MINGGU INI</small><strong>The Quiet Garden</strong><span>Fiksi · 4.8 ★</span><b>Mulai membaca <i class="fa-solid fa-arrow-right"></i></b></div></div>
              <div class="book-row-title"><strong>Populer</strong><span>Lihat semua</span></div>
              <div class="book-mini-row"><div class="book-cover book-cover-one"><small>ATLAS<br>OF US</small></div><div class="book-cover book-cover-two"><small>SMALL<br>HABITS</small></div><div class="book-cover book-cover-three"><small>BLUE<br>HOUR</small></div></div>
              <div class="mobile-tab-bar"><span class="active"><i class="fa-solid fa-compass"></i>Jelajah</span><span><i class="fa-solid fa-bookmark"></i>Tersimpan</span><span><i class="fa-solid fa-user"></i>Profil</span></div>
            </div>
          </div>`,
        plants: `
          <div class="mobile-stage">
            <div class="mobile-concept-frame plants-frame">
              <div class="mobile-status"><span>9:41</span><span><i class="fa-solid fa-signal"></i> <i class="fa-solid fa-battery-three-quarters"></i></span></div>
              <div class="plant-welcome"><div><small>SELAMAT PAGI</small><strong>Kebun kecilmu</strong></div><span class="plant-avatar"><i class="fa-solid fa-seedling"></i></span></div>
              <div class="plant-task-card"><span class="plant-task-icon"><i class="fa-solid fa-droplet"></i></span><div><small>TUGAS HARI INI</small><strong>2 tanaman perlu disiram</strong></div><i class="fa-solid fa-chevron-right"></i></div>
              <div class="plant-section-title"><strong>Tanaman saya</strong><span>+ Tambah</span></div>
              <div class="plant-cards">
                <div class="plant-card"><span class="plant-art monstera"><i class="fa-solid fa-leaf"></i></span><strong>Monstera</strong><small>Disiram 2 hari lalu</small><span class="plant-moisture"><i></i> Perlu air</span></div>
                <div class="plant-card"><span class="plant-art cactus"><i class="fa-solid fa-spa"></i></span><strong>Kaktus mini</strong><small>Disiram 6 hari lalu</small><span class="plant-moisture is-good"><i></i> Sehat</span></div>
              </div>
              <div class="mobile-tab-bar"><span class="active"><i class="fa-solid fa-house"></i>Kebun</span><span><i class="fa-regular fa-calendar"></i>Jadwal</span><span><i class="fa-solid fa-book-open"></i>Panduan</span></div>
            </div>
          </div>`,
        transit: `
          <div class="transit-screen">
            <header class="transit-toolbar"><span class="transit-brand"><i class="fa-solid fa-route"></i> RUTEKOTA</span><span>Jelajahi kota</span><span class="transit-avatar">K</span></header>
            <div class="transit-workspace">
              <aside class="transit-route-panel">
                <small>PERJALANANMU</small><strong>Ke mana hari ini?</strong>
                <div class="route-field"><i class="fa-solid fa-circle-dot"></i><span><small>DARI</small><b>Stasiun Gambir</b></span></div>
                <div class="route-field"><i class="fa-solid fa-location-dot"></i><span><small>MENUJU</small><b>Monas, Jakarta</b></span></div>
                <div class="route-summary"><span><i class="fa-solid fa-train-subway"></i> TransJakarta</span><b>24 menit</b><small>2 transit · Rp 3.500</small></div>
                <div class="route-summary secondary"><span><i class="fa-solid fa-person-walking"></i> Jalan kaki</span><b>18 menit</b><small>Rute alternatif</small></div>
              </aside>
              <div class="transit-map">
                <div class="map-grid"></div>
                <svg viewBox="0 0 420 210" preserveAspectRatio="none" aria-hidden="true"><path class="map-route-outline" d="M56 178 L116 143 L153 153 L201 98 L254 111 L299 68 L365 49"/><path class="map-route-line" d="M56 178 L116 143 L153 153 L201 98 L254 111 L299 68 L365 49"/></svg>
                <span class="map-place map-place-start"><i class="fa-solid fa-circle"></i> Gambir</span><span class="map-place map-place-end"><i class="fa-solid fa-location-dot"></i> Monas</span><span class="map-transit-stop"></span><span class="map-transit-stop second"></span>
                <div class="map-zoom"><span>+</span><span>−</span></div>
              </div>
            </div>
          </div>`
      };
      const screen = screens[project.previewLayout];
      if (!screen) {
        return '<div class="concept-preview-missing">Preview UI konsep belum tersedia.</div>';
      }
      return `<div class="concept-preview concept-preview--${project.previewLayout}" aria-hidden="true">
        <div class="concept-preview-head"><span class="concept-preview-label">KONSEP UI · DEMO</span><span class="concept-preview-name">${project.title.split(" — ")[0]}</span></div>
        ${screen}
      </div>`;
    }

    function renderFeaturedProjects(filter = "all") {
      if (!projectsGrid) return;
      const items =
        filter === "all"
          ? visibleProjects
          : filter === "concept"
            ? visibleProjects.filter((p) => p.isConcept)
            : visibleProjects.filter((p) => p.category === filter);

      if (items.length === 0) {
        projectsGrid.innerHTML =
          '<p class="projects-empty-state" role="status">Belum ada proyek dengan visual pendukung pada kategori ini.</p>';
        return;
      }

      projectsGrid.innerHTML = items
        .map(
          (p) => `
        <article class="feat-project-card glass-panel${p.isConcept ? " is-concept-project" : ""}">
          <div class="project-preview-box" style="background: ${p.gradient || "var(--bg-surface)"}">
            ${
              p.image
                ? `<img class="project-preview-image${p.imageFit === "contain" ? " is-contained" : ""}" src="${p.image}" alt="${p.imageAlt}" loading="lazy">`
                : renderConceptPreview(p)
            }
          </div>
          <div class="feat-project-body">
            <div>
              <span class="project-kind">${p.kind}</span>
              <h3>${p.title}</h3>
              <p>${p.description}</p>
              <div class="project-highlight-list" aria-label="Sorotan proyek">
                ${p.highlights.map((highlight) => `<span>${highlight}</span>`).join("")}
              </div>
            </div>
            ${
              p.demoUrl || p.githubUrl
                ? `<div class="project-action-links">
              ${
                p.demoUrl
                  ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="link-demo">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>`
                  : ""
              }
              ${
                p.githubUrl
                  ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="link-repo">
                <i class="fa-brands fa-github"></i> GitHub Repo
              </a>`
                  : ""
              }
            </div>`
                : ""
            }
          </div>
        </article>
      `
        )
        .join("");
      bindCursorHover();
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderFeaturedProjects(btn.dataset.filter);
      });
    });
    renderFeaturedProjects("all");

    // Section 05: Project Case Studies
    const csSelector = document.getElementById("case-study-selector");
    const csViewer = document.getElementById("case-study-viewer");

    function renderCaseStudy(idx = 0) {
      const cs = PORTFOLIO_DATA.caseStudies[idx];
      if (!cs || !csViewer) return;

      csViewer.innerHTML = `
        <div class="cs-header">
          <div>
            <span class="section-num font-mono">// DEEP-DIVE CASE STUDY</span>
            <h3>${cs.projectTitle}</h3>
          </div>
          <span class="cs-role-badge">Peran: ${cs.role}</span>
        </div>

        <div class="cs-grid">
          <div class="cs-block">
            <h4>01. LATAR BELAKANG MASALAH</h4>
            <p>${cs.problem}</p>
          </div>
          <div class="cs-block">
            <h4>02. TUJUAN PROJECT</h4>
            <p>${cs.goal}</p>
          </div>
          <div class="cs-block">
            <h4>03. PROSES PENGEMBANGAN</h4>
            <ul>
              ${cs.process.map((step) => `<li>${step}</li>`).join("")}
            </ul>
          </div>
          <div class="cs-block">
            <h4>04. TEKNOLOGI & ARSITEKTUR</h4>
            <p class="font-mono" style="font-size:0.84rem; color: var(--text-main);">${cs.architecture}</p>
          </div>
        </div>

        <div class="cs-result-highlight">
          <strong class="font-mono" style="color: var(--emerald); display:block; margin-bottom:4px;">05. HASIL AKHIR & DAMPAK:</strong>
          <span>${cs.result}</span>
        </div>
      `;
    }

    if (csSelector) {
      csSelector.innerHTML = PORTFOLIO_DATA.caseStudies
        .map(
          (cs, i) =>
            `<button class="cs-tab-btn ${i === 0 ? "active" : ""}" data-idx="${i}">${cs.tabTitle}</button>`
        )
        .join("");

      csSelector.querySelectorAll(".cs-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          csSelector.querySelectorAll(".cs-tab-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderCaseStudy(Number(btn.dataset.idx));
        });
      });
      renderCaseStudy(0);
    }

    // Section 06: Experience & Journey
    const journeyEl = document.getElementById("journey-timeline");
    if (journeyEl) {
      journeyEl.innerHTML = PORTFOLIO_DATA.journey
        .map(
          (j) => {
            const photos = Array.isArray(j.photos) ? j.photos : [];
            const galleryMarkup = photos.length
              ? `
          <div class="journey-gallery reveal-up" data-journey-gallery role="region" aria-label="Dokumentasi kegiatan organisasi" aria-roledescription="carousel">
            <div class="journey-gallery-stage">
              ${photos
                .map(
                  (photo, index) => `
                <figure class="journey-gallery-slide${index === 0 ? " is-active" : ""}" data-gallery-slide role="group" aria-roledescription="slide" aria-label="Foto ${index + 1} dari ${photos.length}" aria-hidden="${index !== 0}">
                  <img src="${photo.src}" alt="${photo.alt}" loading="${index === 0 ? "eager" : "lazy"}">
                </figure>
              `
                )
                .join("")}
              <div class="journey-gallery-shade"></div>
              <div class="journey-gallery-caption">
                <span>KEGIATAN ORGANISASI & KOMUNITAS</span>
                <strong data-gallery-count aria-live="polite">01 / ${String(photos.length).padStart(2, "0")}</strong>
              </div>
              <div class="journey-gallery-controls">
                <button type="button" data-gallery-prev aria-label="Tampilkan foto sebelumnya"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
                <button type="button" data-gallery-next aria-label="Tampilkan foto berikutnya"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
              </div>
            </div>
            <div class="journey-gallery-thumbnails" role="group" aria-label="Pilih foto kegiatan">
              ${photos
                .map(
                  (photo, index) => `
                <button type="button" class="journey-gallery-thumb${index === 0 ? " is-active" : ""}" data-gallery-thumb data-index="${index}" aria-label="Tampilkan foto ${index + 1}" aria-pressed="${index === 0}">
                  <img src="${photo.src}" alt="" loading="lazy">
                </button>
              `
                )
                .join("")}
            </div>
          </div>`
              : "";
            const visualMarkup =
              !photos.length && j.visual
                ? `
          <figure class="journey-visual reveal-up">
            <img src="${j.visual.src}" alt="${j.visual.alt}" loading="lazy">
            <figcaption class="journey-visual-label"><i class="fa-regular fa-image" aria-hidden="true"></i>${j.visual.label}</figcaption>
          </figure>`
                : "";

            return `
        <article class="journey-card glass-panel reveal-up">
          <div class="journey-node"></div>
          <div class="journey-meta">
            <span class="journey-type">${j.type}</span>
            <span class="journey-date">${j.date}</span>
          </div>
          <h3>${j.title}</h3>
          <div class="journey-org">${j.org}</div>
          <p>${j.desc}</p>
          ${galleryMarkup}
          ${visualMarkup}
        </article>`;
          }
        )
        .join("");
      journeyEl.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

      journeyEl.querySelectorAll("[data-journey-gallery]").forEach((gallery) => {
        const slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
        const thumbnails = Array.from(gallery.querySelectorAll("[data-gallery-thumb]"));
        const counter = gallery.querySelector("[data-gallery-count]");
        let currentIndex = 0;
        let autoplayTimer;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        function showSlide(index) {
          currentIndex = (index + slides.length) % slides.length;
          slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
          });
          thumbnails.forEach((thumbnail, thumbnailIndex) => {
            const isActive = thumbnailIndex === currentIndex;
            thumbnail.classList.toggle("is-active", isActive);
            thumbnail.setAttribute("aria-pressed", String(isActive));
          });
          if (counter) {
            counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
          }
        }

        function stopAutoplay() {
          window.clearInterval(autoplayTimer);
        }

        function startAutoplay() {
          stopAutoplay();
          if (!reducedMotion) {
            autoplayTimer = window.setInterval(() => showSlide(currentIndex + 1), 6000);
          }
        }

        gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => {
          showSlide(currentIndex - 1);
        });
        gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => {
          showSlide(currentIndex + 1);
        });
        thumbnails.forEach((thumbnail) => {
          thumbnail.addEventListener("click", () => showSlide(Number(thumbnail.dataset.index)));
        });
        gallery.addEventListener("mouseenter", stopAutoplay);
        gallery.addEventListener("mouseleave", startAutoplay);
        gallery.addEventListener("focusin", stopAutoplay);
        gallery.addEventListener("focusout", (event) => {
          if (!gallery.contains(event.relatedTarget)) startAutoplay();
        });
        startAutoplay();
      });
    }

    // Section 07: Education & Certifications
    const eduGrid = document.getElementById("edu-cert-grid");
    if (eduGrid) {
      eduGrid.innerHTML = PORTFOLIO_DATA.education
        .map(
          (e) => `
        <div class="edu-card glass-panel reveal-up">
          <div class="edu-icon"><i class="${e.icon}"></i></div>
          <div>
            <span class="edu-cat">${e.category}</span>
            <h3>${e.title}</h3>
            <div class="edu-issuer">${e.issuer}</div>
            <p class="edu-desc">${e.desc}</p>
          </div>
        </div>
      `
        )
        .join("");
      eduGrid.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    }

    // Section 08: Services
    const servicesGrid = document.getElementById("services-grid");
    if (servicesGrid) {
      servicesGrid.innerHTML = PORTFOLIO_DATA.services
        .map(
          (sv) => `
        <div class="service-card glass-panel reveal-up">
          <div>
            <div class="service-icon"><i class="${sv.icon}"></i></div>
            <h3>${sv.title}</h3>
            <p>${sv.desc}</p>
          </div>
          <ul class="service-deliverables">
            ${sv.deliverables.map((d) => `<li><i class="fa-solid fa-check"></i> ${d}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("");
      servicesGrid.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    }

    // Section 11: Testimonials
    const testGrid = document.getElementById("testimonials-grid");
    if (testGrid) {
      testGrid.innerHTML = PORTFOLIO_DATA.testimonials
        .map(
          (t) => `
        <div class="testimonial-card glass-panel reveal-up">
          <div>
            <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
            <p class="testimonial-text">"${t.quote}"</p>
          </div>
          <div class="testimonial-author">
            <h4>${t.author}</h4>
            <span>${t.role}</span>
          </div>
        </div>
      `
        )
        .join("");
      testGrid.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    }
  }

  // 7. Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const whatsappNumber = contactForm.dataset.whatsappNumber || "";
    if (!/^\d{8,15}$/.test(whatsappNumber)) {
      if (formStatus) {
        formStatus.classList.add("is-error");
        formStatus.textContent = "Nomor WhatsApp belum diatur dengan benar.";
      }
      return;
    }

    const formData = new FormData(contactForm);
    const message = [
      "Halo Khudaifi, saya ingin berdiskusi melalui portofolio.",
      `Nama: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Topik: ${formData.get("topic")}`,
      "Pesan:",
      formData.get("message")
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
      if (formStatus) {
        formStatus.classList.remove("is-error");
        formStatus.textContent = "Draf pesan terbuka di WhatsApp. Periksa isinya lalu tekan Kirim di WhatsApp.";
      }
      return;
    }

    if (formStatus) {
      const fallbackLink = document.createElement("a");
      fallbackLink.href = whatsappUrl;
      fallbackLink.target = "_blank";
      fallbackLink.rel = "noopener noreferrer";
      fallbackLink.textContent = "buka WhatsApp";
      formStatus.classList.add("is-error");
      formStatus.replaceChildren(
        document.createTextNode("Pop-up diblokir. Klik "),
        fallbackLink,
        document.createTextNode(" untuk melanjutkan.")
      );
    }
  });

  bindCursorHover();
});
