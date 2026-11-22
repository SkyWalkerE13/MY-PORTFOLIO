# FUTURISTIC CYBERPUNK DEVELOPER PORTFOLIO

> **OPERATOR**: Erzhan Ikramov / Ержан Икрамов  
> A high-performance, visually immersive Cyberpunk 2077-inspired personal developer portfolio for Full Stack Developers, Software Engineers, and AI Automation Specialists.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript** (Zero bloated frontend frameworks).

---

## ⚡ Integrated Cyberpunk Libraries & Modules

This portfolio integrates and adapts the following specialized open-source cyberpunk modules:

1. **👾 CyberToast.js** (`assets/vendor/cyber-toast/CyberToast.js`):
   - Zero-dependency retro-terminal notification engine with character-by-character typewriter effect, CRT scanline sweep, neon pulse, glitch entry/exit, countdown progress bar, and pause-on-hover.
   - Triggers on system boot, language switching, clipboard copying, and contact transmissions.

2. **🔘 Cyberpunk 2077 Glitch Button** (`css/style.css` - `.cybr-btn`):
   - The authentic Cyberpunk 2077 button with polygon cutout (`--clip`), stepped `@keyframes cybrGlitch` clip-path chromatic aberration, and technical serial tags (`V77`, `R25`, `0x7E3`, `SEND_`).
   - Styled with signature Cyberpunk 2077 Yellow, Neon Cyan, and Magenta colorways.

3. **🪐 Orbit Menu** (`assets/vendor/orbit-menu/orbit-menu.umd.js` & `orbit-menu.css`):
   - Dependency-free radial/orbital menu widget utilized as the high-tech Language Protocol Selector (`🌐 SYS.LANG`).
   - Fans out interactive orbital cyber badges for all 5 languages with radial geometry.

4. **🔤 Cyberpunk-CSS** (`assets/fonts/` & `css/style.css`):
   - Authentic embedded cyberpunk fonts: `BlenderPro`, `Oxanium`, and `Cyberpunk.otf`.
   - Razor edge cuts (`.cyber-razor-bottom`, `.cyber-razor-top`) and HUD telemetry containers.

---

## 🌐 5-Language Internationalization (i18n)

The entire portfolio supports seamless, real-time language switching without page reloads across 5 languages:

1. **English (EN)** — Default global technical lingua franca.
2. **Russian (RU / Русский)** — Full translation with localized terminology.
3. **Kazakh (KZ / Қазақша)** — Authentic Kazakh technological translation.
4. **German (DE / Deutsch)** — Precision German software engineering translation.
5. **Japanese (JA / 日本語)** — Cyberpunk & tech-focused Japanese localization.

### Language Features
- Switches instantly via the radial **Orbit Menu** (`🌐`) in the header or the mobile drawer selector.
- Automatically saves and restores your preferred language via `localStorage`.
- Translates navigation links, hero typewriter titles, narrative about paragraphs, telemetry HUD cards, skills matrix, project descriptions, chronology, and terminal form feedback.

---

## 📂 Project Structure

```
Portfolio web/
├── index.html                   # Semantic HTML5 architecture & SEO meta tags
├── css/
│   └── style.css                # Custom cyberpunk styling, variables & keyframe animations
├── js/
│   ├── i18n.js                  # 5-Language dictionary engine (EN, RU, KZ, DE, JA)
│   └── script.js                # Core JS engine, OrbitMenu bindings & CyberToast integration
├── assets/
│   ├── fonts/                   # Embedded Cyberpunk fonts
│   │   ├── BlenderProBook.woff2
│   │   ├── Cyberpunk.otf
│   │   └── Oxanium.woff2
│   ├── vendor/                  # Cyberpunk open-source modules
│   │   ├── cyber-toast/
│   │   │   └── CyberToast.js
│   │   └── orbit-menu/
│   │       ├── orbit-menu.css
│   │       └── orbit-menu.umd.js
│   ├── images/
│   │   ├── hero-banner.jpg      # Replaceable Hero background banner (1920x1080)
│   │   ├── profile.jpg          # Replaceable Profile avatar (800x800)
│   │   └── projects/
│   │       ├── project-01.jpg   # Cobot Management CRM preview
│   │       ├── project-02.jpg   # Open Hype E-Commerce preview
│   │       ├── project-03.jpg   # AI Automation System preview
│   │       └── project-04.jpg   # Personal Software Project preview
│   └── icons/
│       └── favicon.svg          # Neon hexagon HUD favicon
└── README.md                    # Documentation & deployment guide
```

---

## 🚀 Complete Feature & Animation Matrix

The project incorporates all 15 custom cyberpunk animations:

1. **Glitch Text Effect**: Multi-layered RGB displacement on the hero name heading (`.glitch-text`).
2. **Cyberpunk 2077 Glitch Buttons**: Authentic `.cybr-btn` polygon clip-paths, stepped chromatic jitter, and technical badges.
3. **Animated Gradient Borders**: Glowing borders and hover halos on cards and navigation.
4. **Floating Background Particles**: Interactive HTML5 Canvas particle system with constellation lines and mouse proximity response.
5. **Digital Grid Background**: Perspective cyber grid with radial mask transparency.
6. **Smooth Scroll Reveal**: Lightweight `IntersectionObserver` fading elements in as you scroll.
7. **Typewriter Effect**: Dynamic typing cycling through professional roles in the active language.
8. **Image Hover Zoom**: Smooth scale transition on project cards and profile images with laser scanning.
9. **3D Card Tilt Effect**: Realistic 3D tilt perspective responding to cursor position on desktop.
10. **Animated Cyber Cursor Glow**: Dual-layer follower cursor with neon ring and trail (fine pointer only).
11. **Subtle Scanline Overlay**: CRT-style scanline overlay across the screen.
12. **Terminal Boot Loader**: Futuristic startup sequence with system diagnostics and a skip button (`[SPACE]`).
13. **Navigation Underline Animation**: Dynamic gradient underline following active links.
14. **Scroll Progress Indicator**: Real-time progress bar along the top edge of the browser viewport.
15. **Hero Parallax Movement**: Subtle depth movement on the hero banner and profile card.

> **Accessibility**: Fully respects `prefers-reduced-motion: reduce`, automatically disabling intense canvas and glitch animations for users who prefer reduced motion.

---

## 🛠️ How to Customize Your Information

### 1. Configure Personal Details & Social Links in `js/script.js`

Open `js/script.js` and locate the `CONFIG` object:

```javascript
const CONFIG = {
  profile: {
    name: "Erzhan Ikramov",
    nameNative: "Ержан Икрамов",
    handle: "ERZHAN.DEV",
    role: "Full Stack Developer | AI Automation Engineer",
    location: "Astana, Kazakhstan",
    email: "erzhan.ikramov.dev@example.com",
    availability: "Open to Opportunities / Contract",
    statusText: "SYS.STATUS: ONLINE // 99.9% UPTIME"
  },
  socialLinks: {
    whatsapp: "https://wa.me/YOUR_NUMBER",
    instagram: "https://instagram.com/YOUR_USERNAME",
    x: "https://x.com/YOUR_USERNAME",
    telegram: "https://t.me/YOUR_USERNAME",
    github: "https://github.com/YOUR_USERNAME"
  }
};
```

### 2. Editing Translations in `js/i18n.js`

All text strings for English, Russian, Kazakh, German, and Japanese are organized by section in `js/i18n.js` (`I18N.translations`). You can freely edit bio text, project descriptions, or add new keys.

### 3. Replace Photographs

Simply overwrite the files in `assets/images/`:
- `assets/images/hero-banner.jpg` (Recommended size: 1920×1080px)
- `assets/images/profile.jpg` (Recommended size: 800×800px)
- `assets/images/projects/project-01.jpg` through `project-04.jpg` (Recommended size: 800×500px)

---

## 🌐 Deployment Instructions

Because this site is built purely with vanilla HTML, CSS, and JavaScript, it can be deployed for free in seconds.

### Deploying to GitHub Pages
1. Push your repository to GitHub.
2. In your repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/`!

### Deploying to Netlify
- Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) dashboard, or connect your GitHub repository with build command left empty and publish directory set to `.`.

### Deploying to Vercel
- Import your repository in [Vercel](https://vercel.com) as an **Other** framework project with zero build configuration.

---

## 📄 License

MIT License. Free to use, modify, and distribute for personal and commercial developer portfolios.
