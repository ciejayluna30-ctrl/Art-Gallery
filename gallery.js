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
    title: "Lisa Manoban",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/3.7",   // wide landscape frame
    description: "Blackpink Member",
    src: "https://www.4shared.com/img/eo-3ktKjfa/s25/19c69faf788/7_online",
  },
  {
    title: "Chaeyoung",
    artist: "Ciejay Luna",
    year: "2023",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "Twice Member",
    src: "https://www.4shared.com/img/p0L2d8Zxfa/s25/19c6a1b9ee8/28_online",
  },
  {
    title: "Lee Ji-eun (IU)",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/3.7",          // cinematic wide frame
    description: "Korean Singer, songwriter, composer, and actress.",
    src: "https://www.4shared.com/img/6b5U1asKfa/s25/19c6a1c0860/9_online",
  },
  {
    title: "Leonardo DiCaprio",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Jack Dawson from Titanic.",
    src: "https://www.4shared.com/img/DciLMKVGge/s25/19c6a1b7fa8/16_online",
  },
  {
    title: "Clean",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",           // square frame
    description: "Random girl from Pinterest.",
    src: "https://www.4shared.com/img/MsWaRJ2rjq/s25/19c69faf788/6_online",
  },
  {
    title: "Fierce",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "Collab Art Reference",
    src: "https://www.4shared.com/img/pX6osbQRjq/s25/19c6a1b8778/19_online",
  },
  {
    title: "Bored",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Reference for Collab Art.",
    src: "https://www.4shared.com/img/YhqyOBmrjq/s25/19c69faefb8/4_online",
  },
  {
    title: "Arthur Nery",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/4",
    description: "Falsetto King.",
    src: "https://www.4shared.com/img/tW7zJY8_fa/s25/19c69fafb70/8_online",
  },
  {
    title: "Wang Jackson",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "Birthday Collab Art.",
    src: "https://www.4shared.com/img/sf7uxH7Sfa/s25/19c6a1b77d8/14_online",
  },
  {
    title: "Colyn Nunag",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "How Great thou Art.",
    src: "https://www.4shared.com/img/8Zoor2z7ge/s25/19c6a1c0c48/10_online",
  },
  {
    title: "Ghoul",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Collab Art Reference.",
    src: "https://www.4shared.com/img/bur97Q1fku/s25/19c6a1b7fa8/17_online",
  },
  {
    title: "Android",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "Random girl from Pinterest.",
    src: "https://www.4shared.com/img/jkXJ4spfku/s25/19c6a1b77d8/13_online",
  },
  {
    title: "Bright",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "Sunkissed.",
    src: "https://www.4shared.com/img/PGQaoDMQjq/s25/19c6a1b9718/24_online",
  },
  {
    title: "First Palette Created",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "1 Day Process.",
    src: "https://www.4shared.com/img/ancujxBjjq/s25/19c6a1b6c20/11_online",
  },
  {
    title: "Kathryn Bernardo (Jo)",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Filipino Actress.",
    src: "https://www.4shared.com/img/wxK0RFZrfa/s25/19c6a1b7bc0/15_online",
  },
  {
    title: "Niana Guerrero",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Paraluman Art",
    src: "https://www.4shared.com/img/j15Vesc4ge/s25/19c69fae7e8/2_online",
  },
  {
    title: "First clean work",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "IU",
    src: "https://www.4shared.com/img/j2ZxJt8pfa/s25/19c6a1b9718/26_online",
  },
  {
    title: "Ashley Del Mundo",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Paraluman Art.",
    src: "https://www.4shared.com/img/V4ZOLGqGku/s25/19c69faebd0/3_online",
  },
  {
    title: "Nayeon",
    artist: "Ciejay Luna",
    year: "2023",
    category: "vexel",
    ratio: "3/3.7",
    description: "Twice Member.",
    src: "https://www.4shared.com/img/oo1WgDIOge/s25/19c6a81fdf0/29_online",
  },
  {
    title: "Jisoo",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/4",
    description: "Blackpink Member.",
    src: "https://www.4shared.com/img/VihvLHBWjq/s25/19c6a820d90/40_online",
  },
  {
    title: "Tzuyu",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/3.7",
    description: "Twice Member.",
    src: "https://www.4shared.com/img/rvoFydonfa/s25/19c6a8205c0/30_online",
  },
  {
    title: "Lisa Manoban",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "Collab Reference.",
    src: "https://www.4shared.com/img/Gpu6P7urjq/s25/19c6a1b73f0/12_online",
  },
  {
    title: "Alice De Leon",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "MNL48 Member.",
    src: "https://www.4shared.com/img/V0QetD3Rfa/s25/19c6a1b8b60/21_online",
  },
  {
    title: "Gabb Ruedas Skribikin ",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "MNL48 Member.",
    src: "https://www.4shared.com/img/QKwcp42Aku/s25/19c6a1b8f48/22_online",
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