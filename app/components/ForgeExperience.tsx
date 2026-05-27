@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --black: #000000;
  --bg: #000000;
  --bg-card: #161617;
  --bg-card-hover: #1d1d1f;
  --bg-panel: #121212;
  --accent-blue: #2997ff;
  --accent-blue-hover: #0071e3;
  --accent-purple: #862e9c;
  --white: #f5f5f7;
  --white-pure: #ffffff;
  --gray: #86868b;
  --gray-dark: #1d1d1f;
  --gray-light: #f5f5f7;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.16);
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
  --r-sm: 8px;
  --r-md: 14px;
  --r-lg: 24px;
}

html {
  background: var(--black);
  scroll-behavior: auto;
  -webkit-text-size-adjust: 100%;
  color-scheme: dark;
}

body {
  font-family: var(--font-body);
  color: var(--white);
  background: var(--black);
  font-size: 16px;
  line-height: 1.5;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button, input, select, textarea {
  font: inherit;
  color: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s var(--ease-apple);
}

/* ── APPLE GLASS NAVBAR ── */
.forge-nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1.5rem, 8vw, 12rem);
  height: 48px;
  background: rgba(22, 22, 23, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border);
  transform: translateY(-100%);
  animation: navSlide 0.8s var(--ease-apple) forwards;
}

@keyframes navSlide {
  to { transform: translateY(0); }
}

.forge-nav.scrolled {
  background: rgba(0, 0, 0, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.forge-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  color: var(--white-pure);
}

.forge-logo-icon {
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background: linear-gradient(135deg, #3a3a3c, #1c1c1e);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.7rem;
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.forge-nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.forge-nav-links a {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: rgba(245, 245, 247, 0.8);
}

.forge-nav-links a:hover {
  color: var(--white-pure);
}

.forge-nav-cta {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  background: var(--accent-blue);
  color: var(--white-pure);
  transition: background 0.2s;
}

.forge-nav-cta:hover {
  background: var(--accent-blue-hover);
}

/* ── APPLE MINIMAL LOADER ── */
.forge-loader {
  position: fixed;
  inset: 0;
  z-index: 100000;
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: opacity 0.8s var(--ease-apple), visibility 0.8s;
}

.forge-loader.done {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.forge-loader-title {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--white-pure);
  display: flex;
  gap: 1px;
}

.forge-loader-title span {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  animation: appleLogoReveal 0.8s var(--ease-apple) forwards;
}

@keyframes appleLogoReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.forge-loader-bar-wrap {
  width: 140px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  overflow: hidden;
}

.forge-loader-bar {
  height: 100%;
  width: 0;
  background: var(--white-pure);
  border-radius: 2px;
  transition: width 0.05s linear;
}

.forge-loader-label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--gray);
  letter-spacing: -0.01em;
}

/* ── HERO SECTION ── */
.forge-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--black);
  overflow: hidden;
  padding: 6rem 2rem 4rem;
}

.forge-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.forge-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}

.forge-hero-content {
  position: relative;
  z-index: 5;
  max-width: 800px;
  margin: 0 auto;
  pointer-events: none; /* Allows pointer clicks to pass to canvas */
}

/* Enable pointer events selectively on links/buttons inside hero */
.forge-hero-actions, .forge-hero-actions a {
  pointer-events: auto;
}

.forge-hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 1.2rem;
  opacity: 0;
  transform: translateY(20px);
}

.forge-hero-title {
  font-size: clamp(3rem, 7.5vw, 6.2rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--white-pure);
  margin-bottom: 1.2rem;
}

.forge-hero-title span.char {
  opacity: 0;
  display: inline-block;
  transform: translateY(30px);
}

.forge-hero-sub-title {
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--white);
  margin-bottom: 2.2rem;
  opacity: 0;
  transform: translateY(20px);
  background: linear-gradient(135deg, #ffffff 40%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.forge-hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
}

.btn-forge {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.75rem 1.6rem;
  border-radius: 9999px;
  background: var(--white-pure);
  color: var(--black);
  border: 1px solid var(--white-pure);
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

.btn-forge:hover {
  background: transparent;
  color: var(--white-pure);
}

.btn-forge-ghost {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.75rem 1.6rem;
  border-radius: 9999px;
  background: transparent;
  color: var(--accent-blue);
  border: 1px solid transparent;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.btn-forge-ghost:hover {
  color: var(--white-pure);
}

.forge-hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--gray);
  opacity: 0;
  transition: opacity 0.8s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.forge-hero-scroll::after {
  content: '';
  width: 1px;
  height: 30px;
  background: linear-gradient(var(--gray), transparent);
  animation: appleScrollAnim 2s infinite;
}

@keyframes appleScrollAnim {
  0% { transform: scaleY(0.1); transform-origin: top; opacity: 0.3; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(0.1); transform-origin: bottom; opacity: 0.3; }
}

/* ── SECTION BASES ── */
.forge-section {
  position: relative;
  padding: clamp(6rem, 12vh, 10rem) clamp(1.5rem, 8vw, 12rem);
  background: var(--black);
}

.forge-section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-blue);
  margin-bottom: 0.8rem;
}

.forge-section-title {
  font-size: clamp(2rem, 5.5vw, 4.4rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--white-pure);
  margin-bottom: 1.5rem;
}

.forge-section-sub {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: var(--gray);
  line-height: 1.5;
  max-width: 600px;
  margin-bottom: 3rem;
}

.apple-link {
  color: var(--accent-blue);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.95rem;
}

.apple-link:hover {
  text-decoration: underline;
}

/* ── APPLE BENTO GRID (SERVICES) ── */
.forge-services {
  background: var(--black);
  padding-bottom: 6rem;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bento-card {
  background: var(--bg-card);
  border-radius: var(--r-lg);
  border: 1px solid var(--border);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s var(--ease-apple), border-color 0.4s, background 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bento-card:hover {
  transform: scale(1.015);
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
}

/* Bento Sizing options */
.bento-card.col-3 { grid-column: span 3; }
.bento-card.col-4 { grid-column: span 4; }
.bento-card.col-2 { grid-column: span 2; }
.bento-card.row-2 { grid-row: span 2; min-height: 420px; }

.bento-header {
  margin-bottom: 2rem;
}

.bento-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
  margin-bottom: 0.4rem;
}

.bento-card h3 {
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--white-pure);
  line-height: 1.2;
}

.bento-card p {
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.5;
  max-width: 320px;
}

.bento-visual {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  min-height: 150px;
}

/* Custom visual styles for Bento */
.bento-glow-sphere {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(162,89,255,0.8) 0%, rgba(0,240,255,0.2) 60%, transparent 100%);
  filter: blur(10px);
  animation: pulseSphere 4s ease-in-out infinite alternate;
}

@keyframes pulseSphere {
  0% { transform: scale(0.9); opacity: 0.7; }
  100% { transform: scale(1.1); opacity: 1; }
}

.bento-code-box {
  width: 100%;
  background: rgba(0,0,0,0.4);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-blue);
  text-align: left;
  overflow: hidden;
}

.bento-nodes-box {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.bento-node {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--black);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--white);
}

.bento-node.active {
  border-color: var(--accent-blue);
  box-shadow: 0 0 10px rgba(41, 151, 255, 0.3);
}

/* ── TECH STACK ── */
.forge-tech {
  background: #000;
  border-top: 1px solid var(--border);
}

.tech-grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.forge-stack-list {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.forge-stack-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  padding-bottom: 1rem;
}

.forge-stack-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.forge-stack-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--white-pure);
}

.forge-stack-pct {
  font-size: 0.85rem;
  color: var(--gray);
}

.forge-stack-track {
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.forge-stack-fill {
  height: 100%;
  background: var(--white-pure);
  width: 0;
  transition: width 1.5s var(--ease-apple);
}

.tech-pills-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tech-pills-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.forge-tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.forge-tech-pill {
  font-size: 0.72rem;
  font-weight: 450;
  color: var(--white);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  transition: border-color 0.3s, background 0.3s;
}

.forge-tech-pill:hover {
  border-color: var(--white-pure);
  background: var(--bg-card-hover);
}

/* ── DEVELOPMENT PROCESS (TABBED DECK) ── */
.forge-process {
  background: var(--black);
  border-top: 1px solid var(--border);
}

.process-deck {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 3rem auto 0;
  align-items: start;
}

.process-nav {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: sticky;
  top: 100px;
}

.process-btn {
  background: transparent;
  border: none;
  text-align: left;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  display: flex;
  gap: 1.5rem;
  align-items: baseline;
  transition: opacity 0.3s;
  opacity: 0.4;
}

.process-btn.active {
  opacity: 1;
  border-bottom-color: var(--white-pure);
}

.process-btn-num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-blue);
}

.process-btn-title {
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--white-pure);
}

.process-content-card {
  background: var(--bg-card);
  border-radius: var(--r-lg);
  border: 1px solid var(--border);
  padding: 3rem;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.process-display-num {
  font-size: 5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.02);
  position: absolute;
  top: 1.5rem;
  right: 2.5rem;
  line-height: 1;
}

.process-display-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--white-pure);
  margin-bottom: 1.2rem;
  letter-spacing: -0.01em;
}

.process-display-desc {
  font-size: 1rem;
  color: var(--gray);
  line-height: 1.6;
}

/* ── PROJECTS GRID ── */
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.forge-project-card {
  position: relative;
  aspect-ratio: 16/10;
  border-radius: var(--r-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition: transform 0.5s var(--ease-apple), border-color 0.5s;
}

.forge-project-card:hover {
  transform: scale(1.01);
  border-color: var(--border-hover);
}

.forge-project-card-bg {
  position: absolute;
  inset: 0;
  transition: transform 0.8s var(--ease-apple);
  z-index: 1;
}

.forge-project-card:hover .forge-project-card-bg {
  transform: scale(1.04);
}

.forge-project-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.85) 80%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
}

.forge-project-type {
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent-blue);
  margin-bottom: 0.5rem;
}

.forge-project-card h3 {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.018em;
  color: var(--white-pure);
  margin-bottom: 0.6rem;
  line-height: 1.2;
}

.forge-project-card p {
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  max-width: 460px;
}

.forge-project-cta {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--accent-blue);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.forge-project-cta:hover {
  text-decoration: underline;
}

/* ── CONTACT FORM (APPLE FORM LANGUAGE) ── */
.forge-contact {
  background: var(--black);
  border-top: 1px solid var(--border);
}

.forge-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.forge-contact-email {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--accent-blue);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 2rem;
}

.forge-contact-email:hover {
  text-decoration: underline;
}

.forge-contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.forge-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.forge-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.forge-field label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.forge-field input, .forge-field textarea {
  padding: 0.8rem 1rem;
  background: var(--black);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--white-pure);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.forge-field input:focus, .forge-field textarea:focus {
  border-color: var(--accent-blue);
  box-shadow: 0 0 0 4px rgba(41, 151, 255, 0.15);
}

.forge-field textarea {
  min-height: 120px;
  resize: vertical;
}

.btn-ignite {
  background: var(--accent-blue);
  color: var(--white-pure);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.85rem 1.8rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  align-self: flex-start;
}

.btn-ignite:hover {
  background: var(--accent-blue-hover);
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
}

.forge-success {
  padding: 0.8rem 1rem;
  border-radius: var(--r-sm);
  background: rgba(41, 151, 255, 0.1);
  border: 1px solid rgba(41, 151, 255, 0.2);
  color: var(--accent-blue);
  font-size: 0.85rem;
  font-weight: 500;
}

/* ── APPLE STYLE FOOTER ── */
.forge-footer {
  background: var(--black);
  border-top: 1px solid var(--border);
  padding: 4rem clamp(1.5rem, 8vw, 12rem) 3rem;
}

.forge-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.forge-footer-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 2rem;
}

.forge-footer-brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white-pure);
}

.forge-footer-tagline {
  font-size: 0.8rem;
  color: var(--gray);
  margin-top: 0.25rem;
}

.forge-footer-links {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.forge-footer-links a {
  font-size: 0.78rem;
  color: var(--gray);
}

.forge-footer-links a:hover {
  color: var(--white-pure);
}

.forge-footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.forge-footer-copy {
  font-size: 0.72rem;
  color: var(--gray);
}

/* ── ANIMATIONS AND LINT HELPERS ── */
.g-hidden {
  opacity: 0;
  transform: translateY(30px);
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--accent-blue);
  margin-left: 2px;
  animation: cursorBlink 1s step-end infinite;
  vertical-align: middle;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Remove default cursors since we don't need custom canvas cursor */
.forge-cursor, .forge-cursor-dot {
  display: none !important;
}
html, body {
  cursor: auto !important;
}

/* ── RESPONSIVE DESIGN ── */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .bento-card.col-3, .bento-card.col-4 {
    grid-column: span 4;
  }
  .bento-card.col-2 {
    grid-column: span 2;
  }
  .projects-container {
    grid-template-columns: 1fr;
  }
  .forge-contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .tech-grid-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .process-deck {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .process-nav {
    position: static;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  .process-btn {
    padding: 0.5rem 1rem;
    flex-shrink: 0;
  }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .bento-card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    min-height: auto !important;
  }
  .forge-form-row {
    grid-template-columns: 1fr;
  }
  .forge-nav-links {
    display: none;
  }
}
