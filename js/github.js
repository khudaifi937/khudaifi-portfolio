(function () {
  // Ganti username di bawah ini dengan username GitHub asli Anda untuk sinkronisasi otomatis via GitHub Public API
  const GITHUB_USERNAME = "khudaifi937";

  const heatmapGrid = document.getElementById("gh-heatmap-grid");
  const pinnedContainer = document.getElementById("gh-pinned-repos");

  // 1. Render Contribution Heatmap (36 weeks x 7 days)
  if (heatmapGrid) {
    const pattern = [0, 1, 2, 1, 3, 2, 4, 1, 0, 2, 3, 4, 2, 1, 3, 2, 4, 3, 1, 2, 0, 3, 4, 2, 1, 2, 3, 4, 2, 3, 1, 2, 4, 3, 2, 4];
    let html = "";
    for (let col = 0; col < 36; col++) {
      html += `<div class="hm-col">`;
      for (let row = 0; row < 7; row++) {
        const lvl = (pattern[(col + row) % pattern.length] + ((col * row) % 2)) % 5;
        html += `<span class="hm-cell lvl-${lvl}" title="Contributions level ${lvl}"></span>`;
      }
      html += `</div>`;
    }
    heatmapGrid.innerHTML = html;
  }

  // 2. Default Featured Repositories (Fallback or before username is set)
  const fallbackRepos = [
    {
      name: "nexuscloud-erp-suite",
      desc: "Full-stack multi-tenant ERP & real-time financial analytics platform.",
      lang: "TypeScript",
      stars: 18,
      url: "https://github.com"
    },
    {
      name: "velocity-api-gateway",
      desc: "High-throughput distributed rate-limiter & API gateway built with Go & Redis.",
      lang: "Go",
      stars: 14,
      url: "https://github.com"
    },
    {
      name: "aether-motion-ui",
      desc: "Modular glassmorphism UI component kit with 60fps micro-animations.",
      lang: "JavaScript",
      stars: 9,
      url: "https://github.com"
    },
    {
      name: "devpulse-ci-monitor",
      desc: "Real-time Docker & GitHub webhook deployment tracker with WebSocket logs.",
      lang: "Python",
      stars: 11,
      url: "https://github.com"
    }
  ];

  function renderPinned(repos) {
    if (!pinnedContainer) return;
    pinnedContainer.innerHTML = repos
      .slice(0, 4)
      .map(
        (r) => `
      <a href="${r.url}" target="_blank" rel="noopener" class="pinned-repo-card">
        <h5><i class="fa-regular fa-bookmark"></i> ${r.name}</h5>
        <p>${r.desc || "No description provided."}</p>
        <div class="pinned-meta">
          <span><i class="fa-solid fa-code"></i> ${r.lang || "Code"}</span>
          <span><i class="fa-regular fa-star"></i> ${r.stars}</span>
        </div>
      </a>
    `
      )
      .join("");
  }

  renderPinned(fallbackRepos);

  // 3. Optional Live GitHub API Integration when GITHUB_USERNAME is filled
  if (GITHUB_USERNAME) {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((user) => {
        if (!user) return;
        const nameEl = document.getElementById("gh-name");
        const bioEl = document.getElementById("gh-bio");
        const reposEl = document.getElementById("gh-repos-count");
        const followersEl = document.getElementById("gh-followers-count");
        const linkEl = document.getElementById("gh-profile-link");

        if (nameEl) nameEl.textContent = `${user.name || GITHUB_USERNAME} (@${user.login})`;
        if (bioEl && user.bio) bioEl.textContent = user.bio;
        if (reposEl) reposEl.textContent = user.public_repos;
        if (followersEl) followersEl.textContent = user.followers;
        if (linkEl) linkEl.href = user.html_url;
      })
      .catch(() => {});

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`)
      .then((res) => (res.ok ? res.json() : null))
      .then((repos) => {
        if (!Array.isArray(repos) || repos.length === 0) return;
        renderPinned(
          repos.map((r) => ({
            name: r.name,
            desc: r.description,
            lang: r.language,
            stars: r.stargazers_count,
            url: r.html_url
          }))
        );
      })
      .catch(() => {});
  }
})();
