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
    {src: "images/copa1.png", label: "Post Feed — Awareness (conceito geral da campanha)" },
    {src: "images/copa2.png", label: "Post Feed — Performance (sem travamentos / velocidade)" },
    {src: "images/copa3.png", label: "Post Feed — Oferta (plano + canais inclusos)" },
    {src: "images/copa4.png", label: "Post Feed — Multiplataforma (assistir em qualquer tela)" },
    {src: "images/copa6.png", label: "Post Feed — Experiência (imersão estilo estádio em casa)" }
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
    {src: "images/prova-social.png", label: "Post Feed — Prova social" },
    {src: "images/ja-reiniciou.png", label: "Post Feed — Conteúdo educativo" },
    {src: "images/watch.jpg", label: "Post Feed — Watch" }
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
    {src: "images/planos.jpg", label: "Post Feed — Oferta" },
    {src: "images/planos-comemorativos.png", label: "Post Feed — Campanha Promocional" },
    {src: "images/black.png", label: "Post Feed — Campanha Black November" }
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
    {src: "images/indicacao_01.jpg", label: "Carrossel — Hook inicial" },
    {src: "images/indicacao_02.jpg", label: "Carrossel — Explicação do processo" },
    {src: "images/indicacao_03.jpg", label: "Carrossel — Etapa de ativação" },
    {src: "images/indicacao_04.jpg", label: "Carrossel — Benefício e CTA" }
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
    {src: "images/mito-ou-verdade_01.jpg", label: "Capa do carrossel" },
    {src: "images/mito-ou-verdade_02.jpg", label: "Explicação do mito" },
    {src: "images/mito-ou-verdade_03.jpg", label: "Solução + CTA" }
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
    {src: "images/dia-trabalhador.png", label: "Dia do Trabalhador" },
    {src: "images/dia-mulher.png", label: "Dia da Mulher" },
    {src: "images/dia-das-maes.png", label: "Dia das Mães" }
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
    { src: "images/panfleto-interouro.png", label: "Panfleto promocional" }
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
    { src: "images/modelo2-mock2.png", label: "Aplicação em mockup" },
    { src: "images/modelo2.png", label: "Estudo de layout da plotagem" }
  ]
},
{
  id: 9,
  title: "Interouro — Website Institucional",
  category: "branding",
  categoryLabel: "Web Design & Desenvolvimento",
  description: "Desenvolvimento completo do novo site da Interouro, desde o design até a programação. Projeto focado em conversão, com estrutura estratégica direcionando o usuário para contato via WhatsApp. Interface moderna, responsiva e otimizada para destacar planos, facilitar a navegação e gerar leads qualificados.",
  client: "Interouro Telecom",
  year: "2026",
  platform: "Website",
  colorClass: "p9",
  images: [
    {src: "images/site1.png", label: "Hero e proposta de valor" },
    {src: "images/site2.png", label: "Seção de planos e conversão" },
    {src: "images/site3.png", label: "Verificação de viabilidade" },
    {src: "images/site4.png", label: "Prova social e diferenciais" },
    {src: "images/site5.png", label: "FAQ e fechamento de conversão" }
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

// ===== RENDER PLACEHOLDER IMAGE =====
function renderImageOrPlaceholder(imageObj, minHeight = '180px') {
  if (imageObj.src) {
    // Se for lightbox, adiciona classe lb-img
    const isLightbox = minHeight === '420px';
    return `<img src="${imageObj.src}" alt="${imageObj.label}" class="${isLightbox ? 'lb-img' : ''}" style="min-height:${minHeight};width:100%;${isLightbox ? '' : 'object-fit:cover;'}border-radius:var(--radius-lg);">`;
  } else {
    return `
      <div class="img-placeholder ${imageObj.color || ''}" style="min-height:${minHeight}">
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

// ===== RENDER PROJECTS =====
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = p.id;
    card.dataset.category = p.category;

    const hasMultiple = p.images.length > 1;
    const firstImg = p.images[0];
    const minH = i === 0 ? '360px' : '180px';

    card.innerHTML = `
      ${renderImageOrPlaceholder(firstImg, minH)}
      ${hasMultiple ? `<div class="project-multi-badge" title="${p.images.length} imagens">⊕</div>` : ''}
      <div class="project-cat-badge">${p.categoryLabel}</div>
      <div class="project-overlay">
        <div class="overlay-title">${p.title}</div>
        <div class="overlay-desc">${p.description.substring(0, 80)}...</div>
        <span class="overlay-cta">Ver projeto →</span>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(p.id));
    grid.appendChild(card);
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
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const p = currentProject;
  const slide = p.images[currentSlide];
  const total = p.images.length;

  document.getElementById('lbCat').textContent = p.categoryLabel;
  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbDesc').textContent = p.description;
  document.getElementById('lbCounter').textContent = `${currentSlide + 1} / ${total}`;

  // Meta
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

  // Image
  const wrapper = document.getElementById('lbImgWrapper');
  wrapper.innerHTML = `
    ${renderImageOrPlaceholder(slide, '420px')}
  `;

  // Nav buttons
  document.getElementById('lbPrev').disabled = currentSlide === 0;
  document.getElementById('lbNext').disabled = currentSlide === total - 1;

  // Hide nav if single image
  document.querySelector('.lb-nav').style.display = total > 1 ? 'flex' : 'none';
  document.getElementById('lbCounter').style.display = total > 1 ? 'block' : 'none';

  // Dots
  const dotsEl = document.getElementById('lbDots');
  dotsEl.innerHTML = '';
  if (total > 1) {
    p.images.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'lb-dot' + (i === currentSlide ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => { currentSlide = i; updateLightbox(); });
      dotsEl.appendChild(dot);
    });
  }
}

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

// ===== RENDER CLIENTS =====
function renderClients() {
  const grid = document.getElementById('clientsGrid');
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

// Re-observe after dynamic render
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}, 100);