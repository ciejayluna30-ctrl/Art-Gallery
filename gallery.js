/* ============================================================
   gallery.js — The Gallery
   ============================================================

   TABLE OF CONTENTS
   1. Artwork Data  ← Edit here to add / change paintings
   2. Render Gallery
   3. Filter Logic
   4. Lightbox
   5. Mobile Hamburger Menu
   6. Init
   ============================================================ */


/* ── 1. Artwork Data ──────────────────────────────────────────
   To add a painting, copy one object and fill in:
     title       — artwork name
     artist      — creator's name
     year        — year or period (e.g. "c. 1665")
     category    — "landscape" | "portrait" | "abstract" | "still-life"
     description — short sentence for the lightbox
     src         — URL or local path (e.g. "images/myart.jpg")
     ratio       — (OPTIONAL) frame shape for THIS image only, e.g:
                     "4/3"  = landscape (default if not set)
                     "3/4"  = portrait / tall
                     "1/1"  = square
                     "16/9" = wide cinematic
   ──────────────────────────────────────────────────────────── */
const artworks = [
  {
    title: "d",
    artist: "Caspar David Friedrich",
    year: "1818",
    category: "landscape",
    ratio: "3/3.7",           // wide landscape frame
    description: "A solitary figure stands atop a rocky precipice, gazing into a turbulent sea of fog below.",
    src: "https://www.4shared.com/img/eo-3ktKjfa/s25/19c69faf788/7_online",
  },
  {
    title: "d",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    category: "portrait",
    ratio: "3/4",           // tall portrait frame
    description: "Often called the 'Mona Lisa of the North', this work captures an enigmatic glance over a shoulder.",
    src: "https://www.4shared.com/img/p0L2d8Zxfa/s25/19c6a1b9ee8/28_online",
  },
  {
    title: "d",
    artist: "Claude Monet",
    year: "1906",
    category: "landscape",
    ratio: "3/3.7",          // cinematic wide frame
    description: "One of a celebrated series depicting Monet's flower garden at Giverny in diffused light.",
    src: "https://www.4shared.com/img/6b5U1asKfa/s25/19c6a1c0860/9_online",
  },
  {
    title: "d",
    artist: "Vincent van Gogh",
    year: "1889",
    category: "landscape",
    ratio: "3/4",
    description: "Swirling skies over Saint-Rémy-de-Provence, painted from his asylum room window before sunrise.",
    src: "https://www.4shared.com/img/DciLMKVGge/s25/19c6a1b7fa8/16_online",
  },
  {
    title: "d",
    artist: "Wassily Kandinsky",
    year: "1923",
    category: "abstract",
    ratio: "3/3.7",           // square frame
    description: "Geometric shapes and bold lines compose a visual symphony of abstracted emotion.",
    src: "https://www.4shared.com/img/MsWaRJ2rjq/s25/19c69faf788/6_online",
  },
  {
    title: "d",
    artist: "Vincent van Gogh",
    year: "1888",
    category: "still-life",
    ratio: "3/4",           // tall portrait frame
    description: "Radiant yellows and ochres animate a simple vase of sunflowers in this iconic still life.",
    src: "https://www.4shared.com/img/pX6osbQRjq/s25/19c6a1b8778/19_online",
  },
  {
    title: "d",
    artist: "Rembrandt van Rijn",
    year: "1659",
    category: "portrait",
    ratio: "3/3.7",
    description: "One of Rembrandt's late self-portraits, marked by unflinching honesty and deep chiaroscuro.",
    src: "https://www.4shared.com/img/YhqyOBmrjq/s25/19c69faefb8/4_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/3.7",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/sf7uxH7Sfa/s25/19c6a1b77d8/14_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/8Zoor2z7ge/s25/19c6a1c0c48/10_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/3.7",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/bur97Q1fku/s25/19c6a1b7fa8/17_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/jkXJ4spfku/s25/19c6a1b77d8/13_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/3.7",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/PGQaoDMQjq/s25/19c6a1b9718/24_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/ancujxBjjq/s25/19c6a1b6c20/11_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/3.7",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/wxK0RFZrfa/s25/19c6a1b7bc0/15_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/j15Vesc4ge/s25/19c69fae7e8/2_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/3.7",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/j2ZxJt8pfa/s25/19c6a1b9718/26_online",
  },
  {
    title: "d",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/V4ZOLGqGku/s25/19c69faebd0/3_online",
  },
  {
    title: "Flowers in a Vase",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "Flowers in a Vase",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "Flowers in a Vase",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "Flowers in a Vase",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "Flowers in a Vase",
    artist: "Jan van Huysum",
    year: "1722",
    category: "still-life",
    ratio: "3/4",
    description: "A baroque masterwork of trompe l'œil floral painting, teeming with symbolic meaning.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
];


/* ── 2. Render Gallery ── */
const grid = document.getElementById('gallery');

function renderGallery(filter = 'all') {
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? artworks
    : artworks.filter(a => a.category === filter);

  filtered.forEach((art, i) => {
    const piece = document.createElement('div');
    piece.className = 'art-piece';
    piece.dataset.index = artworks.indexOf(art);

    // Use per-image ratio if set, otherwise fall back to default
    const ratio = art.ratio || '4/3';

    piece.innerHTML = `
      <div class="frame-outer">
        <span class="corner-br">✦</span>
        <span class="corner-bl">✦</span>
        <div class="frame-mid">
          <div class="frame-inner" style="aspect-ratio: ${ratio};">
            <img src="${art.src}" alt="${art.title}" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="label-plate">
        <h3>${art.title}</h3>
        <div class="meta">
          <span class="artist">${art.artist}</span>
          <span class="year">${art.year}</span>
        </div>
      </div>
    `;

    grid.appendChild(piece);

    // Staggered fade-in
    requestAnimationFrame(() => {
      setTimeout(() => piece.classList.add('visible'), i * 80);
    });
  });

  // Click → lightbox
  grid.querySelectorAll('.art-piece').forEach(el => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.index)));
  });
}


/* ── 3. Filter Logic ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});


/* ── 4. Lightbox ── */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbTitle  = document.getElementById('lbTitle');
const lbMeta   = document.getElementById('lbMeta');
const lbDesc   = document.getElementById('lbDesc');
const closeBtn = document.getElementById('closeBtn');

function openLightbox(index) {
  const art = artworks[index];
  lbImg.src           = art.src;
  lbImg.alt           = art.title;
  lbTitle.textContent = art.title;
  lbMeta.textContent  = `${art.artist}  ·  ${art.year}`;
  lbDesc.textContent  = art.description;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 350);
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});


/* ── 5. Mobile Hamburger Menu ── */
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');

function closeMobileNav() {
  menuToggle.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close if user taps outside the nav links
mobileNav.addEventListener('click', e => {
  if (e.target === mobileNav) closeMobileNav();
});


/* ── 6. Init ── */
renderGallery();