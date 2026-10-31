"use client";

import { useEffect, useState } from "react";
import { CopyrightYear } from "@/components/CopyrightYear";
import { ThemeToggle } from "@/components/ThemeToggle";

type IconName =
  | "arrow"
  | "spark"
  | "code"
  | "gamepad"
  | "smartphone"
  | "layers"
  | "compass"
  | "heart"
  | "mail"
  | "menu"
  | "close"
  | "chevron-up";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "spark":
      return <svg {...common}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></svg>;
    case "code":
      return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg>;
    case "gamepad":
      return <svg {...common}><path d="M6.5 10h11a4.5 4.5 0 0 1 4.4 5.5l-.5 2a2.5 2.5 0 0 1-4.1 1.2l-2.1-1.8h-6.4l-2.1 1.8a2.5 2.5 0 0 1-4.1-1.2l-.5-2A4.5 4.5 0 0 1 6.5 10Z" /><path d="M8 13v4M6 15h4M16 14h.01M19 16h.01" /></svg>;
    case "smartphone":
      return <svg {...common}><rect x="6.5" y="2.5" width="11" height="19" rx="2" /><path d="M10 5h4M11 18.5h2" /></svg>;
    case "layers":
      return <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" /></svg>;
    case "heart":
      return <svg {...common}><path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close":
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    case "chevron-up":
      return <svg {...common}><path d="m6 14 6-6 6 6" /></svg>;
    case "arrow":
    default:
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  }
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span /><span /><span /><span />
    </span>
  );
}

const values = [
  {
    number: "01",
    icon: "compass" as const,
    title: "Stay curious",
    description: "Good ideas start with questions. We keep exploring, learning, and looking at familiar problems from a different angle.",
  },
  {
    number: "02",
    icon: "code" as const,
    title: "Care about the craft",
    description: "From clean architecture to the smallest interaction, details matter. We build with intention, not just to ship something.",
  },
  {
    number: "03",
    icon: "heart" as const,
    title: "Make things with meaning",
    description: "Useful tools and memorable experiences have one thing in common: they make someone's day a little better.",
  },
];

const explorations = [
  {
    number: "01",
    icon: "layers" as const,
    category: "SAAS & WEB APPS",
    title: "Useful by design.",
    description: "Thoughtful digital tools that make everyday work simpler, clearer, and more enjoyable.",
    status: "ON THE WORKBENCH",
    visual: "saas",
  },
  {
    number: "02",
    icon: "smartphone" as const,
    category: "MOBILE APPLICATIONS",
    title: "Small screens. Big ideas.",
    description: "Focused mobile experiences built around real needs, intuitive flows, and delightful details.",
    status: "IN EXPLORATION",
    visual: "mobile",
  },
  {
    number: "03",
    icon: "gamepad" as const,
    category: "INDIE GAMES",
    title: "Made for the joy of play.",
    description: "Independent game experiments shaped by curiosity, playful mechanics, and a little adventure.",
    status: "IN EXPLORATION",
    visual: "game",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home">
      <header className="site-header">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="Hardventure Studio home" onClick={closeMenu}>
            <BrandMark />
            <span className="brand-wordmark">HARDVENTURE<span>®</span><small>INDEPENDENT STUDIO</small></span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={21} />
          </button>

          <nav id="primary-navigation" className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#contact" className="mobile-contact-link" onClick={closeMenu}>Contact <Icon name="arrow" size={15} /></a>
          </nav>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get in touch <Icon name="arrow" size={16} />
          </a>

          <ThemeToggle />
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-panel">
            <div className="hero-grid-pattern" aria-hidden="true" />
            <div className="hero-glow hero-glow-one" aria-hidden="true" />
            <div className="hero-glow hero-glow-two" aria-hidden="true" />

            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> INDEPENDENT PRODUCT STUDIO</div>
              <h1 id="hero-title">Ideas worth exploring.<br />Things worth <span>building.</span></h1>
              <p className="hero-tagline">Where curiosity becomes creation.</p>
              <p className="hero-description">Hardventure Studio is an independent playground for ideas—building useful software, thoughtful apps, and indie games shaped by curiosity and a love of making.</p>
              <div className="hero-actions">
                <a href="#products" className="button button-primary">Explore our products <Icon name="arrow" size={17} /></a>
                <a href="#about" className="button button-ghost">Meet the studio <span className="button-down">↓</span></a>
              </div>
              <div className="hero-footnote"><span className="footnote-line" /> SOFTWARE · APPS · INDIE GAMES</div>
            </div>

            <div className="hero-art" aria-label="Abstract showcase of software and indie game concepts">
              <div className="art-orbit orbit-a" />
              <div className="art-orbit orbit-b" />
              <div className="floating-chip chip-top"><span className="chip-pulse" /> STUDIO STATUS <strong>Always creating</strong></div>

              <div className="showcase-board">
                <div className="showcase-topbar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>HARDVENTURE <b>/</b> PLAYGROUND</span>
                  <span className="showcase-avatar">H</span>
                </div>
                <div className="showcase-content">
                  <div className="showcase-heading"><div><small>THE PRODUCT SPACE</small><h3>Ideas in motion<span>.</span></h3></div><span className="showcase-live"><i /> EXPLORING</span></div>
                  <div className="showcase-feature">
                    <div className="feature-copy"><span className="feature-label">01 / DIGITAL PRODUCTS</span><strong>Make useful<br />things happen.</strong><span className="feature-link">SOFTWARE & APPS <b>↗</b></span></div>
                    <div className="feature-art" aria-hidden="true"><div className="feature-window"><i /><i /><i /><div className="feature-window-line" /><div className="feature-window-bars"><b /><b /><b /></div><div className="feature-window-chart" /></div><span className="feature-orbit" /></div>
                  </div>
                  <div className="showcase-bottom">
                    <div className="showcase-mini-card"><span className="mini-icon mini-code"><Icon name="code" size={17} /></span><span><b>Build</b><small>With intention</small></span><span className="mini-arrow">↗</span></div>
                    <div className="showcase-mini-card"><span className="mini-icon mini-game"><Icon name="gamepad" size={17} /></span><span><b>Play</b><small>With imagination</small></span><span className="mini-arrow">↗</span></div>
                  </div>
                </div>
              </div>

              <div className="floating-chip chip-bottom"><span className="chip-icon">✳</span><span>Built from curiosity<strong>Made to be explored</strong></span></div>
              <div className="art-caption">A SPACE FOR IDEAS TO TAKE SHAPE <span>✳</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-section" aria-label="Studio focus">
        <div className="container signal-inner">
          <p>INDEPENDENT BY NATURE<br />BUILT TO EXPLORE.</p>
          <div className="signal-items"><span>SOFTWARE</span><i /> <span>APPLICATIONS</span><i /> <span>INTERACTIVE WORLDS</span><i /> <span>ENDLESS CURIOSITY</span></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-heading">
              <div className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT US</div>
              <h2>A studio for ideas that refuse to stay <span>ideas.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">Hardventure Studio is an independent product studio exploring the space between useful software and playful experiences.</p>
              <p>We create our own SaaS products, mobile apps, and indie games—from the first sketch to something people can use, enjoy, and remember. Every project is a chance to learn something new and turn imagination into a real experience.</p>
              <a href="#products" className="text-link">See what we&apos;re exploring <Icon name="arrow" size={17} /></a>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <div className="value-card-top"><span className="value-icon"><Icon name={value.icon} size={22} /></span><span className="value-number">/{value.number}</span></div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><div className="eyebrow"><span className="eyebrow-dot" /> THE THINGS WE MAKE</div><h2>Ideas taking<br /><span>shape.</span></h2></div>
            <p className="section-lead">A growing collection of products, experiments, and little adventures. This is where our ideas become real—and where new releases will find their home.</p>
          </div>

          <div className="product-grid">
            {explorations.map((item) => (
              <article className="product-card" key={item.number}>
                <div className={`product-visual product-visual-${item.visual}`}>
                  <span className="product-visual-index">HV / {item.number}</span>
                  {item.visual === "saas" && (
                    <div className="saas-mockup" aria-hidden="true"><div className="saas-sidebar"><b /><i /><i /><i /><i /></div><div className="saas-main"><div className="saas-topline" /><div className="saas-titleline" /><div className="saas-stat-row"><i /><i /><i /></div><div className="saas-chart"><b /><b /><b /><b /><b /><b /><b /></div></div></div>
                  )}
                  {item.visual === "mobile" && (
                    <div className="mobile-mockup" aria-hidden="true"><div className="mobile-speaker" /><div className="mobile-screen-label">A BETTER EVERYDAY</div><div className="mobile-screen-shape"><span /><span /><span /></div><div className="mobile-screen-lines"><i /><i /><i /></div><div className="mobile-screen-button" /></div>
                  )}
                  {item.visual === "game" && (
                    <div className="game-mockup" aria-hidden="true"><div className="game-sun" /><div className="game-moon" /><div className="game-cloud game-cloud-one" /><div className="game-cloud game-cloud-two" /><div className="game-hill game-hill-back" /><div className="game-hill game-hill-front" /><div className="game-player"><i /></div><div className="game-ground" /></div>
                  )}
                  <span className="product-visual-mark">H<span>✳</span></span>
                </div>
                <div className="product-card-content">
                  <div className="product-meta"><span>{item.category}</span><span className="product-number">{item.number}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="product-status"><span className="status-dot" /> {item.status}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="products-note"><Icon name="spark" size={16} /> The work is in progress. Product details and launch links will appear here as they take shape.</p>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="container manifesto-inner">
          <div className="manifesto-symbol"><BrandMark /></div>
          <div className="manifesto-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> THE HARDVENTURE SPIRIT</div>
            <h2>Stay curious.<br />Keep making <span>meaningful things.</span></h2>
            <p>Not every idea needs to become a business. Not every experiment needs to be perfect. Some things are worth building simply because they might make life more useful, more interesting, or more fun.</p>
          </div>
          <div className="manifesto-aside"><span>01 — IMAGINE</span><span>02 — EXPLORE</span><span>03 — CREATE</span><span>04 — REPEAT</span></div>
          <div className="manifesto-glow" aria-hidden="true" />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div className="contact-pattern" aria-hidden="true" />
            <div className="contact-content">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> OPEN TO GOOD CONVERSATIONS</div>
              <h2>Have an idea?<br />Let&apos;s <span>connect.</span></h2>
              <p>Feedback, creative conversations, collaboration, or just want to say hello? There&apos;s always room for a good connection.</p>
              <a className="button button-primary contact-button" href="mailto:hello@yourdomain.com">Say hello <Icon name="arrow" size={17} /></a>
            </div>
            <div className="contact-aside"><span className="contact-aside-mark"><BrandMark /></span><span>INDEPENDENT THINKING.<br />ENDLESS POSSIBILITIES.</span><div className="contact-aside-line" /></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#home" className="brand footer-brand"><BrandMark /><span className="brand-wordmark">HARDVENTURE<span>®</span><small>INDEPENDENT STUDIO</small></span></a>
          <p>Where curiosity becomes creation.<br />Made with intention.</p>
          <div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#products">Products</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© <CopyrightYear /> HARDVENTURE STUDIO. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO THE BEGINNING <b>↑</b></a></div>
      </footer>

      <button
        type="button"
        className={`back-to-top${showBackToTop ? " is-visible" : ""}`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="chevron-up" size={21} />
      </button>
    </main>
  );
}
