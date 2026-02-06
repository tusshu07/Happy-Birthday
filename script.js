// Shared JavaScript for Rasika & RK website

// List of local photos for gallery and carousel.
// These filenames must match the images in the folder.
// You can add or remove items as you like.
const photoFiles = [
  // Evening bridge & first photos
  "WhatsApp Image 2026-02-06 at 4.17.40 PM.jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.40 PM (1).jpeg",

  // 4.17.41 series
  "WhatsApp Image 2026-02-06 at 4.17.41 PM.jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (1).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (2).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (3).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (4).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (5).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (6).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (7).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (8).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (9).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (10).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (11).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (12).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (13).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (14).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (15).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (16).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (17).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (18).jpeg",
  "WhatsApp Image 2026-02-06 at 4.17.41 PM (19).jpeg",

  // Single 4.21 photo
  "WhatsApp Image 2026-02-06 at 4.21.02 PM.jpeg",

  // 4.27.17 series
  "WhatsApp Image 2026-02-06 at 4.27.17 PM.jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.17 PM (1).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.17 PM (2).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.17 PM (3).jpeg",

  // 4.27.18 series
  "WhatsApp Image 2026-02-06 at 4.27.18 PM.jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.18 PM (1).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.18 PM (2).jpeg",

  // 4.27.19 series (many trip shots)
  "WhatsApp Image 2026-02-06 at 4.27.19 PM.jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (1).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (2).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (3).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (4).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (5).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (6).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (7).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (8).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (9).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (10).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (11).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (12).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (13).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (14).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (15).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (16).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (17).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (18).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (19).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (20).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (21).jpeg",
  "WhatsApp Image 2026-02-06 at 4.27.19 PM (22).jpeg"
];

document.addEventListener("DOMContentLoaded", () => {
  // Add flying hearts on every page
  initFloatingHearts();

  const page = document.body.dataset.page;

  if (page === "home") initHomePage();
  if (page === "memories") initMemoriesPage();
  if (page === "valentine") initValentinePage();
  if (page === "celebration") initCelebrationPage();
});

// Create softly flying hearts in the background
function initFloatingHearts() {
  const bg = document.querySelector(".floating-hearts-bg");
  if (!bg) return;

  const totalHearts = 26;
  for (let i = 0; i < totalHearts; i++) {
    const span = document.createElement("span");
    span.className = "flying-heart";
    span.textContent = "♥";

    const x = Math.random() * 100; // percentage
    const size = 14 + Math.random() * 10;
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 10;

    span.style.setProperty("--x", `${x}%`);
    span.style.setProperty("--size", `${size}px`);
    span.style.setProperty("--duration", `${duration}s`);
    span.style.animationDelay = `${delay}s`;

    bg.appendChild(span);
  }
}

/* ===========================
   HOME PAGE
   =========================== */

function initHomePage() {
  const grid = document.getElementById("gallery-grid");
  const track = document.getElementById("carousel-track");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!grid || !track) return;

  // Build gallery grid
  photoFiles.forEach((file, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    // Random small rotation for playful layout
    const rot = (Math.random() * 6 - 3).toFixed(1);
    item.style.setProperty("--r", rot + "deg");

    const img = document.createElement("img");
    img.src = file;
    img.alt = `Memory photo ${index + 1}`;

    item.appendChild(img);
    grid.appendChild(item);
  });

  // Build carousel
  photoFiles.forEach((file, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const img = document.createElement("img");
    img.src = file;
    img.alt = `Carousel memory ${index + 1}`;

    slide.appendChild(img);
    track.appendChild(slide);
  });

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photoFiles.length) % photoFiles.length;
    updateCarousel();
  });

  nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photoFiles.length;
    updateCarousel();
  });

  // Auto slide every few seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % photoFiles.length;
    updateCarousel();
  }, 4500);
}

/* ===========================
   MEMORIES PAGE
   =========================== */

function initMemoriesPage() {
  // Music toggle
  setupMusicToggle("memories-audio", "memories-music-toggle", {
    playLabel: "♪ Play our song",
    pauseLabel: "❚❚ Pause our song"
  });

  // Add little heart burst on clicking notes
  const notes = document.querySelectorAll("[data-click-heart='true']");
  notes.forEach(note => {
    note.addEventListener("click", event => {
      const rect = note.getBoundingClientRect();
      createBurstHearts(event.clientX - rect.left, event.clientY - rect.top, note);
    });
  });
}

function createBurstHearts(x, y, container) {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = "♥";
    span.style.position = "absolute";
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.fontSize = "12px";
    span.style.color = i % 2 === 0 ? "#ff4fa3" : "#4ecbff";
    span.style.pointerEvents = "none";
    span.style.transition = "transform 0.9s ease, opacity 0.9s ease";

    const angle = (Math.PI * 2 * i) / count;
    const distance = 40 + Math.random() * 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      span.style.transform = `translate(${dx}px, ${dy}px) scale(1.4)`;
      span.style.opacity = "0";
    });

    container.appendChild(span);

    setTimeout(() => span.remove(), 950);
  }
}

/* ===========================
   VALENTINE PAGE
   =========================== */

function initValentinePage() {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const messageEl = document.getElementById("valentine-message");
  const container = document.getElementById("valentine-buttons");

  if (!yesBtn || !noBtn || !messageEl || !container) return;

  const messages = [
    "Heyy 😤 please say YES!",
    "Try again RK 😜",
    "Come on… you know the answer 😏",
    "U and Me vs Anything… remember? 🥺",
    "Okay last chance… PLEASE 🖤"
  ];
  let noClicks = 0;

  yesBtn.addEventListener("mouseenter", () => {
    yesBtn.style.transform = "scale(1.05)";
  });

  yesBtn.addEventListener("mouseleave", () => {
    yesBtn.style.transform = "scale(1)";
  });

  yesBtn.addEventListener("click", () => {
    // Tiny heart burst for fun
    createBurstHearts(yesBtn.offsetWidth / 2, yesBtn.offsetHeight / 2, yesBtn);
    setTimeout(() => {
      window.location.href = "celebration.html";
    }, 420);
  });

  noBtn.addEventListener("click", () => {
    const msgIndex = noClicks % messages.length;
    messageEl.textContent = messages[msgIndex];
    noClicks++;

    // Make NO button run away
    const bounds = container.getBoundingClientRect();
    const maxX = bounds.width - noBtn.offsetWidth;
    const maxY = bounds.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });

  noBtn.addEventListener("mouseenter", () => {
    // On hover (even without click), gently move it away
    const bounds = container.getBoundingClientRect();
    const maxX = bounds.width - noBtn.offsetWidth;
    const maxY = bounds.height - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });
}

/* ===========================
   CELEBRATION PAGE
   =========================== */

function initCelebrationPage() {
  setupMusicToggle("celebration-audio", "celebration-music-toggle", {
    playLabel: "♪ Let the song play",
    pauseLabel: "❚❚ Pause the song"
  });

  createConfetti();
  createHeartRain();

  // Try to auto-play softly (browser may block; that's okay)
  const audio = document.getElementById("celebration-audio");
  if (audio) {
    audio
      .play()
      .then(() => {
        const toggle = document.getElementById("celebration-music-toggle");
        if (toggle) toggle.textContent = "❚❚ Pause the song";
      })
      .catch(() => {
        // Auto-play blocked; user can press the button.
      });
  }
}

function createConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;

  const colors = ["#ff7ac4", "#4ecbff", "#b794ff", "#ffcf6b", "#ffffff"];
  const pieces = 80;

  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const color = colors[i % colors.length];
    const x = Math.random() * window.innerWidth;
    const duration = 4 + Math.random() * 3;
    const delay = Math.random() * 2;

    piece.style.backgroundColor = color;
    piece.style.left = `${x}px`;
    piece.style.setProperty("--x", `${x}px`);
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;

    container.appendChild(piece);
  }
}

function createHeartRain() {
  const container = document.getElementById("heart-rain-container");
  if (!container) return;

  const hearts = 40;
  for (let i = 0; i < hearts; i++) {
    const span = document.createElement("span");
    span.className = "heart-drop";
    span.textContent = "♥";
    const x = Math.random() * window.innerWidth;
    const duration = 5 + Math.random() * 4;
    const delay = Math.random() * 3;
    const size = 16 + Math.random() * 10;

    span.style.left = `${x}px`;
    span.style.setProperty("--x", `${x}px`);
    span.style.animationDuration = `${duration}s`;
    span.style.animationDelay = `${delay}s`;
    span.style.fontSize = `${size}px`;
    span.style.color = i % 2 === 0 ? "#ff7ac4" : "#4ecbff";

    container.appendChild(span);
  }
}

/* ===========================
   MUSIC TOGGLE (shared)
   =========================== */

function setupMusicToggle(audioId, buttonId, labels) {
  const audio = document.getElementById(audioId);
  const button = document.getElementById(buttonId);
  if (!audio || !button) return;

  const playLabel = labels?.playLabel ?? "Play";
  const pauseLabel = labels?.pauseLabel ?? "Pause";

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          button.textContent = pauseLabel;
        })
        .catch(() => {
          // If autoplay fails due to browser policies, we just ignore.
        });
    } else {
      audio.pause();
      button.textContent = playLabel;
    }
  });
}

