// ===== PROJECT DATA =====
const projects = [
{
  id: 1,
  title: "Campanha Copa do Mundo — Interouro + Watch",
  category: "social",
  categoryLabel: "Social Media",
  description: "Campanha para redes sociais focada em posicionar a Interouro como a melhor opção para assistir aos jogos sem travamentos. A comunicação destaca velocidade, estabilidade e acesso aos canais oficiais, com visual imersivo e CTAs diretos voltados para conversão.",
  client: "Interouro Provedor de Internet",
  year: "2026",
  platform: "Instagram (Feed e Ads)",
  colorClass: "p1",
  images: [
    {src: "images/copa1.webp", label: "Post Feed — Awareness (conceito geral da campanha)" },
    {src: "images/copa2.webp", label: "Post Feed — Performance (sem travamentos / velocidade)" },
    {src: "images/copa3.webp", label: "Post Feed — Oferta (plano + canais inclusos)" },
    {src: "images/copa4.webp", label: "Post Feed — Multiplataforma (assistir em qualquer tela)" },
    {src: "images/copa6.webp", label: "Post Feed — Experiência (imersão estilo estádio em casa)" },
    {src: "videos/outdoor-copav2.mov", label: "Outdoor Digital", type: "video" }
  ]
},
{
  id: 2,
  title: "InterOuro — Social Media",
  category: "social",
  categoryLabel: "Social Media",
  description: "Posts focados em utilidade e prova social, combinando conteúdo educativo com gatilhos de confiança.",
  client: "InterOuro",
  year: "2026",
  platform: "Instagram",
  colorClass: "p7",
  images: [
    {src: "images/prova-social.webp", label: "Post Feed — Prova social" },
    {src: "images/ja-reiniciou.webp", label: "Post Feed — Conteúdo educativo" },
    {src: "images/watch.webp", label: "Post Feed — Watch" }
  ]
},
{
  id: 3,
  title: "InterOuro — Ofertas Diretas",
  category: "ads",
  categoryLabel: "Tráfego Pago",
  description: "Peças focadas em conversão com destaque para oferta, preço e urgência. Layout direto e escaneável para maximizar cliques.",
  client: "InterOuro",
  year: "2026",
  platform: "Instagram / Google Ads",
  colorClass: "p8",
  images: [
    {src: "images/planos.webp", label: "Post Feed — Oferta" },
    {src: "images/planos-comemorativos.webp", label: "Post Feed — Campanha Promocional" },
    {src: "images/black.webp", label: "Post Feed — Campanha Black November" }
  ]
},
{
  id: 4,
  title: "InterOuro — Programa de Indicação",
  category: "social",
  categoryLabel: "Social Media",
  description: "Carrossel com storytelling guiado para explicar o programa de indicação e incentivar ação com recompensa clara.",
  client: "InterOuro",
  year: "2026",
  platform: "Instagram",
  colorClass: "p1",
  images: [
    {src: "images/indicacao_01.webp", label: "Carrossel — Hook inicial" },
    {src: "images/indicacao_02.webp", label: "Carrossel — Explicação do processo" },
    {src: "images/indicacao_03.webp", label: "Carrossel — Etapa de ativação" },
    {src: "images/indicacao_04.webp", label: "Carrossel — Benefício e CTA" }
  ]
},
{
  id: 5,
  title: "InterOuro — Mito ou Verdade",
  category: "social",
  categoryLabel: "Social Media",
  description: "Carrossel educativo criado para quebrar objeções comuns sobre internet, utilizando o formato 'mito ou verdade' para engajar, informar e fortalecer a autoridade da marca.",
  client: "InterOuro",
  year: "2025",
  platform: "Instagram",
  colorClass: "p8",
  images: [
    {src: "images/mito-ou-verdade_01.webp", label: "Capa do carrossel" },
    {src: "images/mito-ou-verdade_02.webp", label: "Explicação do mito" },
    {src: "images/mito-ou-verdade_03.webp", label: "Solução + CTA" }
  ]
},
{
  id: 6,
  title: "InterOuro — Datas Comemorativas",
  category: "social",
  categoryLabel: "Social Media",
  description: "Posts institucionais desenvolvidos para datas comemorativas, reforçando o posicionamento da marca através de mensagens emocionais e consistência visual.",
  client: "InterOuro",
  year: "2025",
  platform: "Instagram",
  colorClass: "p8",
  images: [
    {src: "images/dia-trabalhador.webp", label: "Dia do Trabalhador" },
    {src: "images/dia-mulher.webp", label: "Dia da Mulher" },
    {src: "images/dia-das-maes.webp", label: "Dia das Mães" }
  ]
},
{
  id: 7,
  title: "Interouro — Panfleto Promocional",
  category: "branding",
  categoryLabel: "Design Gráfico",
  description: "Panfleto institucional e promocional desenvolvido para captação de novos clientes. O material combina oferta comercial, apresentação de benefícios e elementos visuais modernos para gerar atenção e conversão tanto no digital quanto no impresso.",
  client: "Interouro Telecom",
  year: "2025",
  platform: "Impressão / Divulgação Local",
  colorClass: "p8",
  images: [
    { src: "images/panfleto-interouro.webp", label: "Panfleto promocional" },
    { src: "images/panfleto-interouro2.webp", label: "Verso" },
  ]
},
{
  id: 8,
  title: "Interouro — Identidade para Frota",
  category: "branding",
  categoryLabel: "Design Gráfico",
  description: "Proposta de plotagem para os veículos da frota, desenvolvida para fortalecer a presença da marca nas ruas e aumentar o reconhecimento local. O design combina elementos institucionais com grafismos modernos, garantindo alta visibilidade, leitura rápida e consistência visual em diferentes ângulos e aplicações.",
  client: "Interouro Telecom",
  year: "2026",
  platform: "Frota / Mídia Offline",
  colorClass: "p8",
  images: [
    { src: "images/modelo2-mock2.webp", label: "Aplicação em mockup" },
    { src: "images/modelo2.webp", label: "Estudo de layout da plotagem" }
  ]
},
{
  id: 9,
  title: "Interouro — Motion & Animação",
  category: "ads",
  categoryLabel: "Motion Design",
  description: "Peças animadas desenvolvidas para diferentes mídias e momentos da Interouro, incluindo outdoor digital, campanhas de tráfego pago e Reels. Cada vídeo foi criado com linguagem visual adaptada ao canal, combinando movimento, tipografia e identidade da marca para maximizar impacto e retenção.",
  client: "Interouro Telecom",
  year: "2025",
  platform: "Outdoor Digital / Tráfego Pago / Reels",
  colorClass: "p1",
  images: [
    {src: "videos/reel-copa.mov", label: "Reel — Campanha Copa do Mundo", type: "video" },
    { src: "videos/black-animado.mp4", label: "Campanha Black — Animação", type: "video" },
    { src: "videos/ad-animado-mp4.mp4", label: "Ad Animado — Tráfego Pago", type: "video" },
    { src: "videos/outdoor-10anos-cabanas.mov", label: "Outdoor Digital — 10 Anos Cabanas", type: "video" },
    { src: "videos/outdoor-cabanas.mov", label: "Outdoor Digital — Cabanas", type: "video" }
  ]
},
{
  id: 10,
  title: "Interouro — Campanha de Aniversário",
  category: "ads",
  categoryLabel: "Anúncios",
  description: "Carrossel desenvolvido pra gerar identificação usando a nostalgia dos clientes que acompanharam a evolução da internet ao longo dos anos.",
  client: "Interouro Telecom",
  year: "2026",
  platform: "Social Media",
  colorClass: "p1",
  images: [
    { src: "images/nostalgia_01.jpg (1).webp", label: "Carrossel-nostalgia" },
    { src: "images/nostalgia_02.jpg (1).webp", label: "Carrossel-nostalgia" },
    { src: "images/nostalgia_03.jpg (1).webp", label: "Carrossel-nostalgia" },
    { src: "images/nostalgia_04.jpg (1).webp", label: "Carrossel-nostalgia" }
  ]
},
];

const clients = [
  { name: "TechStore", init: "TS" },
  { name: "NutriGlow", init: "NG" },
  { name: "FitLife", init: "FL" },
  { name: "ModaOnline", init: "MO" },
  { name: "Brand Essence", init: "BE" },
  { name: "GrowBrand", init: "GB" },
  { name: "Premium Imóveis", init: "PI" },
  { name: "Sabor & Arte", init: "SA" },
];

// ===== RENDER IMAGE / VIDEO / PLACEHOLDER =====
// context: 'card' | 'lightbox'
function renderImageOrPlaceholder(imageObj, context) {
  const isLightbox = context === 'lightbox';
  const isVideo = imageObj.type === 'video';

  if (imageObj.src && isVideo) {
    if (isLightbox) {
      return `<video
        src="${imageObj.src}"
        class="lb-img"
        style="background:#000;"
        controls
        preload="metadata"
        playsinline
        webkit-playsinline
      ></video>`;
    } else {
      return `<video
        src="${imageObj.src}"
        style="width:100%;height:100%;object-fit:cover;min-height:180px;background:#111;display:block;"
        preload="metadata"
        playsinline
        muted
      ></video>`;
    }
  } else if (imageObj.src) {
    if (isLightbox) {
      return `<img src="${imageObj.src}" alt="${imageObj.label}" class="lb-img" loading="lazy" decoding="async">`;
    } else {
      return `<img
        src="${imageObj.src}"
        alt="${imageObj.label}"
        loading="lazy"
        decoding="async"
        style="width:100%;height:100%;object-fit:cover;min-height:180px;display:block;"
      >`;
    }
  } else {
    return `
      <div class="img-placeholder ${imageObj.color || ''}" style="${isLightbox ? 'min-height:320px;' : 'min-height:180px;'}">
        <div class="img-placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>${imageObj.label}</span>
        </div>
      </div>
    `;
  }
}

// ===== PRELOAD LIGHTBOX SLIDES =====
// Ao abrir o lightbox, pré-carrega todas as imagens do projeto em background.
// Com webp em tamanho razoável, isso garante troca de slide instantânea.
function preloadAllSlides(project) {
  project.images.forEach(img => {
    if (img.type === 'video' || !img.src) return;
    const el = new Image();
    el.src = img.src;
  });
}

// Fallback: pré-carrega apenas os vizinhos (anterior e próximo).
// Chamado em cada updateLightbox() como reforço caso preloadAllSlides
// ainda não tenha terminado de baixar todas as imagens.
function preloadNeighbors(project, currentIndex) {
  [-1, 1].forEach(offset => {
    const neighbor = project.images[currentIndex + offset];
    if (!neighbor || neighbor.type === 'video' || !neighbor.src) return;
    const el = new Image();
    el.src = neighbor.src;
  });
}

// ===== LAZY CARD OBSERVER =====
const lazyCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const card = entry.target;
    const id = parseInt(card.dataset.pendingId, 10);
    if (!id) return;

    const p = projects.find(x => x.id === id);
    if (!p) return;

    const firstImg = p.images[0];

    card.innerHTML = `
      ${renderImageOrPlaceholder(firstImg, 'card')}
      ${firstImg.type === 'video' ? '<div class="project-video-badge">▶ Vídeo</div>' : ''}
      <div class="project-overlay">
        <div class="overlay-title">${p.title}</div>
        <div class="overlay-desc">${p.description.substring(0, 80)}...</div>
        <span class="overlay-cta">Ver projeto →</span>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(p.id));
    lazyCardObserver.unobserve(card);
  });
}, {
  rootMargin: '300px 0px',
  threshold: 0
});

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  filtered.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = p.id;
    card.dataset.category = p.category;
    card.dataset.pendingId = p.id;

    card.innerHTML = `<div class="card-skeleton"></div>`;

    grid.appendChild(card);
    lazyCardObserver.observe(card);
  });
}

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    const grid = document.getElementById('projectsGrid');
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(8px)';
    setTimeout(() => {
      renderProjects(filter);
      grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    }, 200);
  });
});

// ===== LIGHTBOX =====
let currentProject = null;
let currentSlide = 0;

function openLightbox(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  currentProject = project;
  currentSlide = 0;

  // ✅ CORREÇÃO: pré-carrega todas as imagens do projeto ao abrir o lightbox
  preloadAllSlides(project);

  updateLightbox();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const existingVideo = document.querySelector('#lbImgWrapper video');
  if (existingVideo) existingVideo.pause();

  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const existingVideo = document.querySelector('#lbImgWrapper video');
  if (existingVideo) existingVideo.pause();

  const p = currentProject;
  const slide = p.images[currentSlide];
  const total = p.images.length;

  document.getElementById('lbCat').textContent = p.categoryLabel;
  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbDesc').textContent = p.description;
  document.getElementById('lbCounter').textContent = `${currentSlide + 1} / ${total}`;

  document.getElementById('lbMeta').innerHTML = `
    <div class="lb-meta-item">
      <span class="lb-meta-key">Cliente</span>
      <span class="lb-meta-val">${p.client}</span>
    </div>
    <div class="lb-meta-item">
      <span class="lb-meta-key">Ano</span>
      <span class="lb-meta-val">${p.year}</span>
    </div>
    <div class="lb-meta-item">
      <span class="lb-meta-key">Plataforma</span>
      <span class="lb-meta-val">${p.platform}</span>
    </div>
  `;

  const wrapper = document.getElementById('lbImgWrapper');
  wrapper.innerHTML = renderImageOrPlaceholder(slide, 'lightbox');

  const lb = document.getElementById('lightbox');
  lb.scrollTop = 0;

  document.getElementById('lbPrev').disabled = currentSlide === 0;
  document.getElementById('lbNext').disabled = currentSlide === total - 1;

  document.querySelector('.lb-nav').style.display = total > 1 ? 'flex' : 'none';
  document.getElementById('lbCounter').style.display = total > 1 ? 'block' : 'none';

  const dotsEl = document.getElementById('lbDots');
  dotsEl.innerHTML = '';
  if (total > 1) {
    p.images.forEach((img, i) => {
      const dot = document.createElement('button');
      dot.className = 'lb-dot' + (i === currentSlide ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      if (img.type === 'video') dot.setAttribute('title', '▶ Vídeo');
      dot.addEventListener('click', () => { currentSlide = i; updateLightbox(); });
      dotsEl.appendChild(dot);
    });
  }

  // ✅ CORREÇÃO: reforça o preload dos vizinhos a cada troca de slide
  preloadNeighbors(p, currentSlide);
}

// ===== LIGHTBOX EVENTS =====
document.getElementById('lbClose').addEventListener('click', closeLightbox);

document.getElementById('lbPrev').addEventListener('click', () => {
  if (currentSlide > 0) { currentSlide--; updateLightbox(); }
});

document.getElementById('lbNext').addEventListener('click', () => {
  if (currentSlide < currentProject.images.length - 1) { currentSlide++; updateLightbox(); }
});

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft' && currentSlide > 0) { currentSlide--; updateLightbox(); }
  if (e.key === 'ArrowRight' && currentSlide < currentProject.images.length - 1) { currentSlide++; updateLightbox(); }
});

// ===== TOUCH SWIPE for lightbox =====
(function() {
  let touchStartX = 0;
  let touchStartY = 0;
  const lb = document.getElementById('lightbox');

  lb.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lb.addEventListener('touchend', (e) => {
    if (!currentProject) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0 && currentSlide < currentProject.images.length - 1) {
        currentSlide++;
        updateLightbox();
      } else if (dx > 0 && currentSlide > 0) {
        currentSlide--;
        updateLightbox();
      }
    }
  }, { passive: true });
})();

// ===== RENDER CLIENTS =====
function renderClients() {
  const grid = document.getElementById('clientsGrid');
  if (!grid) return;
  clients.forEach(c => {
    const item = document.createElement('div');
    item.className = 'client-item';
    item.innerHTML = `
      <div class="client-logo-placeholder">
        <div class="client-logo-box">${c.init}</div>
        <span class="client-name">${c.name}</span>
      </div>
    `;
    grid.appendChild(item);
  });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  if (isOpen) {
    mobileMenu.classList.add('open');
    mobileMenu.style.display = 'block';
    requestAnimationFrame(() => {
      mobileMenu.style.opacity = '1';
      mobileMenu.style.transform = 'translateY(0)';
    });
  } else {
    closeMobile();
  }
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.style.opacity = '0';
  mobileMenu.style.transform = 'translateY(-10px)';
  setTimeout(() => { mobileMenu.classList.remove('open'); mobileMenu.style.display = 'none'; }, 250);
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== INIT =====
renderProjects();
renderClients();

setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}, 100);