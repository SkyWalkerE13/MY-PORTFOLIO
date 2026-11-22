/**
 * ============================================================================
 * FUTURISTIC CYBERPUNK DEVELOPER PORTFOLIO - CORE ENGINE
 * Operator: Erzhan Ikramov / Ержан Икрамов
 * Pure Vanilla JavaScript (ES6+)
 * Integrated with CyberToast, OrbitMenu, and Cyberpunk 2077 Glitch Button
 * ============================================================================
 */

'use strict';

/* ============================================================================
   1. USER CONFIGURATION OBJECT (Single Source of Truth)
   Edit personal details, professional titles, and social channels here.
   ============================================================================ */
const CONFIG = {
  profile: {
    name: "Erzhan Ikramov",
    nameNative: "Ержан Икрамов",
    handle: "YE.DEV",
    role: "Full Stack Developer | AI Automation Engineer",
    location: "Astana, Kazakhstan",
    email: "erzhan.ikramov@gmail.com",
    availability: "Open to Opportunities / Contract",
    statusText: "SYS.STATUS: ONLINE // 99.9% UPTIME"
  },

  // Professional titles cycled by the animated typewriter (Default EN)
  typewriterTitles: [
    "Full Stack Developer",
    "AI Automation Engineer",
    "Systems & Cloud Architect",
    "LLM Workflow Specialist",
    "Creative Interface Technologist"
  ],

  // Dedicated social media links (Editable from this single object)
  socialLinks: {
    whatsapp: "https://wa.me/77000249905",
    instagram: "https://instagram.com/edgerunner_013",
    x: "https://x.com/SkywalkerIZER",
    telegram: "https://t.me/VCR_2077",
    github: "https://github.com/SkyWalkerE13"
  },

  // Terminal boot lines displayed during initial load
  bootSequence: [
    { text: ">> INITIALIZING NEURAL INTERFACE PROTOCOL...", delay: 200, status: "ok" },
    { text: ">> OPERATOR VERIFIED: ERZHAN IKRAMOV (Ержан Икрамов)...", delay: 450, status: "highlight" },
    { text: ">> SYNCHRONIZING CYBERNETIC SUBSYSTEMS...", delay: 750, status: "ok" },
    { text: ">> ESTABLISHING SECURE RELAY [ASTANA_NODE : 8080]...", delay: 450, status: "ok" },
    { text: ">> MOUNTING i18n NEURAL DICTIONARY [EN, RU, KZ, DE, JA]...", delay: 750, status: "ok" },
    { text: ">> ALL CORE MODULES ONLINE. ACCESS GRANTED.", delay: 1000, status: "success" }
  ]
};

// Global CyberToaster instance
window.cyberToaster = null;

/* ============================================================================
   2. DOM READY & INITIALIZATION CONTROLLER
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize CyberToast notifications
  initCyberToaster();

  // Initialize i18n
  if (window.I18N) {
    window.I18N.init();
  }

  // Initialize Orbit Language Dial
  initOrbitMenu();

  // Core Features
  initTerminalLoader();
  initBackgroundCanvas();
  initCyberCursor();
  initNavigation();
  initTypewriter();
  initParallaxHero();
  init3DCardTilt();
  initScrollAnimations();
  initSkillFilters();
  initTimelineTabs();
  initContactForm();
  initCommsCopy();
  initFooterAndSocials();
});

/* ============================================================================
   3. CYBERTOAST NOTIFICATION ENGINE
   ============================================================================ */
function initCyberToaster() {
  if (typeof CyberToast !== 'undefined') {
    try {
      window.cyberToaster = new CyberToast({
        position: 'top-right',
        duration: 4500,
        typingSpeed: 25
      });
    } catch (e) {
      console.warn('CyberToast initialization error:', e);
    }
  }
}

/* ============================================================================
   4. ORBIT MENU CONTROLLER (Radial Language Switcher)
   ============================================================================ */
function initOrbitMenu() {
  // Check if OrbitMenu UMD or function is available
  if (typeof OrbitMenu !== 'undefined') {
    try {
      OrbitMenu.attachOrbitMenus();
      OrbitMenu.addOrbitActions('orbit-lang-menu', {
        setLangEN: () => switchLanguage('en'),
        setLangRU: () => switchLanguage('ru'),
        setLangKZ: () => switchLanguage('kz'),
        setLangDE: () => switchLanguage('de'),
        setLangJA: () => switchLanguage('ja')
      });
    } catch (err) {
      console.warn('OrbitMenu error:', err);
    }
  } else {
    // Custom resilient fallback for Orbit Menu if script loads deferred
    const menu = document.getElementById('orbit-lang-menu');
    if (menu) {
      const items = Array.from(menu.children).slice(1);
      const trigger = menu.children[0];

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = items.some(el => el.classList.contains('show'));
        const radius = 70;
        const total = items.length;
        const angleStep = Math.PI / (total - 1); // 180 degree fan
        const baseAngle = Math.PI / 2; // Fan out downwards / leftwards

        items.forEach((item, idx) => {
          if (isOpen) {
            item.classList.remove('show');
            item.style.transform = 'translate(-50%, -50%) translate(0, 0)';
          } else {
            item.classList.add('show');
            const angle = baseAngle + (idx * (Math.PI / 3)) - (Math.PI / 3);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
          }
        });
      });

      document.addEventListener('click', () => {
        items.forEach(item => {
          item.classList.remove('show');
          item.style.transform = 'translate(-50%, -50%) translate(0, 0)';
        });
      });

      items.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = item.getAttribute('data-lang');
          if (lang) switchLanguage(lang);
          items.forEach(el => {
            el.classList.remove('show');
            el.style.transform = 'translate(-50%, -50%) translate(0, 0)';
          });
        });
      });
    }
  }

  // Also bind mobile language buttons in the drawer
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        switchLanguage(lang);
        document.querySelectorAll('.mobile-lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}

function switchLanguage(lang) {
  if (window.I18N) {
    window.I18N.setLanguage(lang, true);
  }
}

/* ============================================================================
   5. TERMINAL BOOT INTRO LOADER
   ============================================================================ */
function initTerminalLoader() {
  const loader = document.getElementById('terminal-loader');
  const terminalLogs = document.getElementById('terminal-logs');
  const loaderBar = document.getElementById('loader-bar');
  const skipBtn = document.getElementById('skip-boot-btn');

  if (!loader || !terminalLogs || !loaderBar) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    loader.classList.add('hidden');
    return;
  }

  let isDismissed = false;

  const dismissLoader = () => {
    if (isDismissed) return;
    isDismissed = true;
    loader.classList.add('hidden');

    // Show initial greeting toast after boot sequence completes
    setTimeout(() => {
      if (window.cyberToaster && window.I18N) {
        const t = window.I18N.translations[window.I18N.currentLang];
        window.cyberToaster.show(t.toasts.boot, 'success');
      }
    }, 600);
  };

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissLoader);
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Escape') {
      dismissLoader();
    }
  });

  let currentProgress = 0;
  const totalDuration = 1800;
  const intervalTime = 50;
  const step = 100 / (totalDuration / intervalTime);

  const progressInterval = setInterval(() => {
    currentProgress = Math.min(100, currentProgress + step);
    loaderBar.style.width = `${currentProgress}%`;
    if (currentProgress >= 100) {
      clearInterval(progressInterval);
      setTimeout(dismissLoader, 350);
    }
  }, intervalTime);

  CONFIG.bootSequence.forEach((line) => {
    setTimeout(() => {
      if (isDismissed) return;
      const p = document.createElement('div');
      p.className = `terminal-line ${line.status || ''}`;
      p.textContent = line.text;
      terminalLogs.appendChild(p);
      terminalLogs.scrollTop = terminalLogs.scrollHeight;
    }, line.delay);
  });
}

/* ============================================================================
   6. FLOATING PARTICLES & CONSTELLATION CANVAS
   ============================================================================ */
function initBackgroundCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(55, Math.floor(width / 26));
  const particles = [];
  const colors = ['#00f0ff', '#ff007f', '#9d4edd', '#fcee0a'];

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.7;
      this.speedY = (Math.random() - 0.5) * 0.7;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].color;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < 120) {
        ctx.save();
        ctx.globalAlpha = (1 - mDist / 120) * 0.25;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ============================================================================
   7. CUSTOM CYBER CURSOR (FINE POINTERS ONLY)
   ============================================================================ */
function initCyberCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  if (!glow || !dot) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateCursor() {
    glowX += (mouseX - glowX) * 0.18;
    glowY += (mouseY - glowY) * 0.18;
    glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverElements = document.querySelectorAll('a, button, input, textarea, .filter-btn, .tab-btn, .project-card, .skill-chip, .info-card, .cybr-btn, .orbit-lang-item');
  hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => glow.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => glow.classList.remove('cursor-hover'));
  });
}

/* ============================================================================
   8. NAVIGATION, MOBILE HAMBURGER & SCROLL PROGRESS
   ============================================================================ */
function initNavigation() {
  const nav = document.getElementById('cyber-nav');
  const progressBar = document.getElementById('scroll-progress');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (nav) {
      if (scrollTop > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      mobileOverlay.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileOverlay.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* ============================================================================
   9. DYNAMIC ANIMATED TYPEWRITER EFFECT
   ============================================================================ */
let activeTypewriterTitles = [...CONFIG.typewriterTitles];

window.updateTypewriterTitles = function (newTitles) {
  if (Array.isArray(newTitles) && newTitles.length) {
    activeTypewriterTitles = newTitles;
  }
};

function initTypewriter() {
  const textElem = document.getElementById('typing-text');
  if (!textElem) return;

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 1800;

  function type() {
    const titles = activeTypewriterTitles;
    if (titleIndex >= titles.length) titleIndex = 0;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      charIndex--;
      textElem.textContent = currentTitle.substring(0, charIndex);
    } else {
      charIndex++;
      textElem.textContent = currentTitle.substring(0, charIndex);
    }

    let nextDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentTitle.length) {
      nextDelay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      nextDelay = 400;
    }

    setTimeout(type, nextDelay);
  }

  setTimeout(type, 800);
}

/* ============================================================================
   10. PARALLAX EFFECT IN HERO SECTION
   ============================================================================ */
function initParallaxHero() {
  const heroSection = document.getElementById('hero');
  const bannerImg = document.querySelector('.hero-banner-img');
  const hudCard = document.querySelector('.profile-hud-card');

  if (!heroSection || !bannerImg) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      bannerImg.style.transform = `scale(1.05) translateY(${scrolled * 0.22}px)`;
    }
  }, { passive: true });

  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xRatio = (clientX / window.innerWidth - 0.5) * 18;
    const yRatio = (clientY / window.innerHeight - 0.5) * 18;

    if (hudCard) {
      hudCard.style.transform = `perspective(1000px) rotateY(${xRatio * 0.6}deg) rotateX(${-yRatio * 0.6}deg)`;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    if (hudCard) {
      hudCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
  });
}

/* ============================================================================
   11. 3D CARD TILT ON DESKTOP
   ============================================================================ */
function init3DCardTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const tiltCards = document.querySelectorAll('.project-card, .skill-category-card, .about-bio-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ============================================================================
   12. SCROLL REVEAL ANIMATIONS
   ============================================================================ */
function initScrollAnimations() {
  const revealItems = document.querySelectorAll('.reveal-item');
  if (!revealItems.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  });

  revealItems.forEach((item) => observer.observe(item));
}

/* ============================================================================
   13. TECHNICAL SKILLS CATEGORY FILTER
   ============================================================================ */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryCards = document.querySelectorAll('.skill-category-card');

  if (!filterBtns.length || !categoryCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      categoryCards.forEach((card) => {
        const cat = card.getAttribute('data-cat');
        if (filterValue === 'all' || cat === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ============================================================================
   14. TIMELINE TABS (EXPERIENCE / EDUCATION)
   ============================================================================ */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const views = document.querySelectorAll('.timeline-view');

  if (!tabBtns.length || !views.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      views.forEach((v) => v.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetView = document.getElementById(targetId);
      if (targetView) {
        targetView.classList.add('active');
      }
    });
  });
}

/* ============================================================================
   15. CONTACT FORM VALIDATION & CYBERTOAST FEEDBACK
   ============================================================================ */
function initContactForm() {
  const form = document.getElementById('cyber-contact-form');
  const banner = document.getElementById('form-status-banner');

  if (!form || !banner) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    let isValid = true;
    const currentI18n = window.I18N ? window.I18N.translations[window.I18N.currentLang] : null;

    form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('has-error'));
    banner.className = 'form-status-banner';
    banner.style.display = 'none';

    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      subjectInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      banner.className = 'form-status-banner error';
      banner.textContent = currentI18n ? currentI18n.contact.errGeneral : '>> TRANSMISSION ABORTED: Please correct highlighted fields.';
      banner.style.display = 'block';

      if (window.cyberToaster) {
        window.cyberToaster.show('>> TRANSMISSION ABORTED: Invalid payload', 'error');
      }
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="cybr-btn__content">${currentI18n ? currentI18n.contact.btnSubmitting : 'TRANSMITTING...'}</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      banner.className = 'form-status-banner success';
      banner.innerHTML = `
        <strong>${currentI18n ? currentI18n.contact.successTitle : '[✓] TRANSMISSION PACKET VALIDATED & BUFFERED'}</strong><br>
        <span style="opacity: 0.9;">${currentI18n ? currentI18n.contact.successNotice : 'Notice: Frontend template mode active.'}</span>
      `;
      banner.style.display = 'block';

      if (window.cyberToaster && currentI18n) {
        window.cyberToaster.show(currentI18n.toasts.packetSent, 'success');
      }

      form.reset();
    }, 1200);
  });
}

/* ============================================================================
   16. CLICK-TO-COPY COMMS CHANNELS
   ============================================================================ */
function initCommsCopy() {
  const emailVal = document.getElementById('channel-email-val');
  if (emailVal) {
    emailVal.style.cursor = 'pointer';
    emailVal.setAttribute('title', 'Click to copy transmission address');
    emailVal.addEventListener('click', () => {
      const text = emailVal.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        if (window.cyberToaster && window.I18N) {
          const t = window.I18N.translations[window.I18N.currentLang];
          window.cyberToaster.show(t.toasts.addressCopied, 'success');
        }
      });
    });
  }
}

/* ============================================================================
   17. FOOTER, SOCIAL LINKS CONFIG & DYNAMIC YEAR
   ============================================================================ */
function initFooterAndSocials() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const backToTop = document.getElementById('back-to-top-btn');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const socialMap = {
    'social-whatsapp': CONFIG.socialLinks.whatsapp,
    'social-instagram': CONFIG.socialLinks.instagram,
    'social-x': CONFIG.socialLinks.x,
    'social-telegram': CONFIG.socialLinks.telegram,
    'social-github': CONFIG.socialLinks.github
  };

  Object.entries(socialMap).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute('href', url);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
