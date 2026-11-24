(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, nodes, meteors;
  const pointer = { x: null, y: null, radius: 170 };

  window.addEventListener("mousemove", (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    pointer.x = null;
    pointer.y = null;
  });

  function setup() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    const count = Math.min(Math.floor((width * height) / 14500), 95);
    nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.8 + 0.7,
        pulse: Math.random() * Math.PI * 2
      });
    }

    meteors = [];
  }

  function spawnMeteor() {
    if (meteors.length < 3 && Math.random() < 0.015) {
      meteors.push({
        x: Math.random() * width,
        y: -20,
        vx: -2.8 - Math.random() * 2,
        vy: 3.5 + Math.random() * 2.5,
        len: 75 + Math.random() * 60,
        alpha: 0.7
      });
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Subtle shooting streaks
    spawnMeteor();
    for (let m = meteors.length - 1; m >= 0; m--) {
      const met = meteors[m];
      met.x += met.vx;
      met.y += met.vy;
      met.alpha -= 0.006;

      const grad = ctx.createLinearGradient(met.x, met.y, met.x - met.vx * 12, met.y - met.vy * 12);
      grad.addColorStop(0, `rgba(56, 189, 248, ${Math.max(0, met.alpha)})`);
      grad.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.moveTo(met.x, met.y);
      ctx.lineTo(met.x - met.vx * 12, met.y - met.vy * 12);
      ctx.stroke();

      if (met.alpha <= 0 || met.y > height + 50) {
        meteors.splice(m, 1);
      }
    }

    // Constellation network
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.03;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      const dynamicAlpha = 0.35 + Math.sin(n.pulse) * 0.2;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${dynamicAlpha})`;
      ctx.fill();

      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
        if (dist < 135) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.11 * (1 - dist / 135)})`;
          ctx.lineWidth = 0.75;
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }

      if (pointer.x !== null && pointer.y !== null) {
        const distP = Math.hypot(n.x - pointer.x, n.y - pointer.y);
        if (distP < pointer.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(129, 140, 248, ${0.32 * (1 - distP / pointer.radius)})`;
          ctx.lineWidth = 1.05;
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  window.addEventListener("resize", setup);
  setup();
  render();
})();
