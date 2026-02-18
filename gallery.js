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
    src: "images/vexel/7.jpg",
  },
  {
    title: "Chaeyoung",
    artist: "Ciejay Luna",
    year: "2023",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "Twice Member",
    src: "images/vexel/28.jpg",
  },
  {
    title: "Lee Ji-eun (IU)",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/3.7",          // cinematic wide frame
    description: "Korean Singer, songwriter, composer, and actress.",
    src: "images/vexel/9.jpg",
  },
  {
    title: "Leonardo DiCaprio",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Jack Dawson from Titanic.",
    src: "images/vexel/16.jpg",
  },
  {
    title: "Clean",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",           // square frame
    description: "Random girl from Pinterest.",
    src: "images/vexel/6.jpg",
  },
  {
    title: "Fierce",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "Collab Art Reference",
    src: "images/vexel/19.jpg",
  },
  {
    title: "Hotel De Luna",
    artist: "Ciejay Luna",
    year: "2023",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "IU",
    src: "images/vexel/42.jpg",
  },
  {
    title: "Aliah",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "ali.",
    src: "images/vexel/41.jpg",
  },
  {
    title: "Catch this",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",           // tall portrait frame
    description: "Joshua Garcia girl version",
    src: "images/vexel/5.jpg",
  },
  {
    title: "Bored",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Reference for Collab Art.",
    src: "images/vexel/4.jpg",
  },
  {
    title: "Arthur Nery",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/4",
    description: "Falsetto King.",
    src: "images/vexel/8.jpg",
  },
  {
    title: "Wang Jackson",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "Birthday Collab Art.",
    src: "images/vexel/14.jpg",
  },
  {
    title: "Colyn Nunag",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "How Great thou Art.",
    src: "images/vexel/10.jpg",
  },
  {
    title: "Ghoul",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Collab Art Reference.",
    src: "images/vexel/17.jpg",
  },
  {
    title: "Android",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "Random girl from Pinterest.",
    src: "images/vexel/13.jpg",
  },
  {
    title: "Bright",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "Sunkissed.",
    src: "images/vexel/24.jpg",
  },
  {
    title: "First Palette Created",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "1 Day Process.",
    src: "images/vexel/11.jpg",
  },
  {
    title: "Kathryn Bernardo (Jo)",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/3.7",
    description: "Filipino Actress.",
    src: "images/vexel/15.jpg",
  },
  {
    title: "Niana Guerrero",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Paraluman Art",
    src: "images/vexel/2.jpg",
  },
  {
    title: "First clean work",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "IU",
    src: "images/vexel/26.jpg",
  },
  {
    title: "Ashley Del Mundo",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "Paraluman Art.",
    src: "images/vexel/3.jpg",
  },
  {
    title: "Nayeon",
    artist: "Ciejay Luna",
    year: "2023",
    category: "vexel",
    ratio: "3/3.7",
    description: "Twice Member.",
    src: "images/vexel/29.jpg",
  },
  {
    title: "Jisoo",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/4",
    description: "Blackpink Member.",
    src: "images/vexel/40.jpg",
  },
  {
    title: "Tzuyu",
    artist: "Ciejay Luna",
    year: "2022",
    category: "vexel",
    ratio: "3/3.7",
    description: "Twice Member.",
    src: "images/vexel/30.jpg",
  },
  {
    title: "Lisa Manoban",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/4",
    description: "Collab Reference.",
    src: "images/vexel/12.jpg",
  },
  {
    title: "Alice De Leon",
    artist: "Ciejay Luna",
    year: "2020",
    category: "vexel",
    ratio: "3/3.7",
    description: "MNL48 Member.",
    src: "images/vexel/21.jpg",
  },
  {
    title: "Gabb Ruedas Skribikin ",
    artist: "Ciejay Luna",
    year: "2021",
    category: "vexel",
    ratio: "3/4",
    description: "MNL48 Member.",
    src: "images/vexel/22.jpg",
  },
  {
    title: "Site ",
    artist: "Ciejay Luna",
    year: "2024",
    category: "photography",
    ratio: "3/4",
    description: "good life.",
    src: "images/photography/p1.jpg",
  },
  {
    title: "Meow",
    artist: "Ciejay Luna",
    year: "2024",
    category: "photography",
    ratio: "3/3.7",
    description: "Garfield.",
    src: "images/photography/p2.webp",
  },
  {
    title: "the moon is beautiful isn't?",
    artist: "Ciejay Luna",
    year: "2024",
    category: "photography",
    ratio: "3/4",
    description: "there's a light in the moon.",
    src: "images/photography/p3.jpg",
  },
  {
    title: "Ginintuang Tanawin",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Nature.",
    src: "images/photography/p4.jpg",
  },
  {
    title: "Cold",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/4",
    description: "Tagaytay.",
    src: "images/photography/p5.jpg",
  },
  {
    title: "Blue",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Crosswind.",
    src: "images/photography/p6.jpg",
  },
  {
    title: "Take me please",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/4",
    description: "Menu.",
    src: "images/photography/p7.jpg",
  },
  {
    title: "Kisame",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Drink Happiness.",
    src: "images/photography/p8.jpg",
  },
  {
    title: "The Forest",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/4",
    description: "trees.",
    src: "images/photography/p9.jpg",
  },
  {
    title: "Sit on me",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Chill.",
    src: "images/photography/p10.jpg",
  },
  {
    title: "You and Me",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/4",
    description: "Under the umbrella.",
    src: "images/photography/p11.jpg",
  },
  {
    title: "Fountain",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Baguio.",
    src: "images/photography/p12.jpg",
  },
  {
    title: "Comfort food",
    artist: "Ciejay Luna",
    year: "2024",
    category: "photography",
    ratio: "3/3.7",
    description: "Pizza.",
    src: "images/photography/p13.jpg",
  },
  {
    title: "I sea you",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Zambales.",
    src: "images/photography/p15.jpg",
  },
  {
    title: "I want to touch you",
    artist: "Ciejay Luna",
    year: "2023",
    category: "photography",
    ratio: "3/3.7",
    description: "Trees.",
    src: "images/photography/p16.jpg",
  },
  {
    title: "Luna",
    artist: "Ciejay Luna",
    year: "2021",
    category: "photography",
    ratio: "3/3.7",
    description: "Always you.",
    src: "images/photography/p17.jpg",
  },
  {
    title: "Rainbow after the rain",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "Our Lady of Fatima University deck view.",
    src: "images/photography/p18.jpg",
  },
  {
    title: "like you",
    artist: "Ciejay Luna",
    year: "2023",
    category: "photography",
    ratio: "3/3.7",
    description: "Soft.",
    src: "images/photography/p19.jpg",
  },
  {
    title: "Blond",
    artist: "Ciejay Luna",
    year: "2022",
    category: "photography",
    ratio: "3/3.7",
    description: "Terraces.",
    src: "images/photography/p20.jpg",
  },
  {
    title: "The sign of going home",
    artist: "Ciejay Luna",
    year: "2025",
    category: "photography",
    ratio: "3/3.7",
    description: "OLFU.",
    src: "images/photography/p14.jpg",
  },
  {
    title: "Plant",
    artist: "Ciejay Luna",
    year: "2024",
    category: "photography",
    ratio: "3/3.7",
    description: "Baliuag, Bulacan.",
    src: "images/photography/p21.jpg",
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