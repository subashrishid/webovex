"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FormEvent, useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  deliveryProcess,
  forgeServices,
  projectShowcase,
  technicalBlueprint,
  technologies,
} from "../data/forgeContent";
import ForgeScene from "./ForgeScene";
import { ForgeLoader, ForgeScrollBar } from "./TechAnimations";

function useAppleScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.82,
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });

    const revealContext = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 42, autoAlpha: 0, filter: "blur(12px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".scroll-card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotateX: 10, y: 70, scale: 0.96, autoAlpha: 0 },
          {
            rotateX: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 48%",
              scrub: true,
            },
          },
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 180);

    return () => {
      window.clearTimeout(refresh);
      revealContext.revert();
      trigger.kill();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return progress;
}

function ContactPanel() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3400);
    event.currentTarget.reset();
  };

  return (
    <form className="forge-contact-form reveal" onSubmit={submit}>
      <div className="forge-form-row">
        <label className="forge-field">
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label className="forge-field">
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label className="forge-field">
        <span>Project</span>
        <textarea name="message" required placeholder="Tell Webovex what you want to build." />
      </label>
      <button className="btn-ignite" type="submit">
        Start a project
      </button>
      {sent && <p className="forge-success">Message captured. Webovex will follow up soon.</p>}
    </form>
  );
}

export default function ForgeExperience() {
  const progress = useAppleScroll();
  const [loaded, setLoaded] = useState(false);
  const progressStyle = useMemo(
    () => ({ "--scroll-progress": progress.toFixed(4) }) as CSSProperties,
    [progress],
  );

  return (
    <div className="forge-page" style={progressStyle}>
      {!loaded && <ForgeLoader onDone={() => setLoaded(true)} />}
      <ForgeScrollBar />

      <div className="scene-shell">
        <ForgeScene progress={progress} />
      </div>

      <nav className="forge-nav">
        <a className="forge-logo" href="#home" aria-label="Webovex home">
          <span className="forge-logo-icon">W</span>
          <span>Webovex</span>
        </a>
        <div className="forge-nav-links">
          <a href="#services">Services</a>
          <a href="#stack">Stack</a>
          <a href="#process">Process</a>
          <a href="#projects">Work</a>
        </div>
        <a className="forge-nav-cta" href="#contact">
          Contact
        </a>
      </nav>

      <main className="page-layers">
        <section className="forge-hero" id="home">
          <div className="hero-panel">
            <span className="forge-hero-eyebrow">Apple inspired digital studio</span>
            <h1 className="forge-hero-title">
              Webovex builds premium 3D websites and scalable business systems.
            </h1>
            <p className="forge-hero-sub-title">
              Smooth product-story scrolling, precise interfaces, cloud-ready engineering, and cinematic
              WebGL presence for brands that need to feel expensive from the first second.
            </p>
            <div className="forge-hero-actions">
              <a className="btn-forge" href="#services">
                Explore services
              </a>
              <a className="btn-forge-ghost" href="#contact">
                Build with Webovex
              </a>
            </div>
          </div>

          <div className="hero-device" aria-hidden="true">
            <div className="device-glass">
              <span>WEBOVEX OS</span>
              <strong>{Math.round(progress * 100).toString().padStart(2, "0")}%</strong>
              <i />
            </div>
          </div>

          <span className="forge-hero-scroll">Scroll for 3D story</span>
        </section>

        <section className="statement-band reveal">
          <span>Complete redesign</span>
          <strong>Black glass, titanium depth, blue light, and a scroll-driven 3D core.</strong>
        </section>

        <section className="forge-section forge-services" id="services">
          <div className="section-shell">
            <div className="section-intro reveal">
              <span className="forge-section-label">What Webovex makes</span>
              <h2 className="forge-section-title">Services presented like Apple product cards.</h2>
              <p className="forge-section-sub">
                Clean, fast, premium pages for website launches, apps, ecommerce, dashboards, deployment,
                networking support, and AI-enabled workflows.
              </p>
            </div>

            <div className="bento-grid">
              {forgeServices.map((service, index) => (
                <article
                  className={`bento-card scroll-card ${index === 0 || index === 3 ? "col-3" : "col-2"}`}
                  key={service.title}
                >
                  <div className="bento-header">
                    <span className="bento-eyebrow">{service.eyebrow}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.copy}</p>
                  <div className="bento-visual" aria-hidden="true">
                    <span className="bento-orbit" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="forge-section forge-tech" id="stack">
          <div className="tech-grid-layout">
            <div className="section-intro reveal">
              <span className="forge-section-label">Technology stack</span>
              <h2 className="forge-section-title">Built for speed, depth, and production launch.</h2>
              <p className="forge-section-sub">
                Webovex pairs polished frontend motion with dependable backend systems and deployment
                discipline, so the site feels premium and still works under real traffic.
              </p>
            </div>

            <div className="forge-stack-list reveal">
              {technicalBlueprint.slice(0, 4).map((item, index) => (
                <article className="forge-stack-item" key={item.title}>
                  <div className="forge-stack-header">
                    <strong className="forge-stack-name">{item.title}</strong>
                    <span className="forge-stack-pct">{92 - index * 4}%</span>
                  </div>
                  <div className="forge-stack-track">
                    <span className="forge-stack-fill" style={{ width: `${92 - index * 4}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <div className="tech-pills-wrap reveal">
              <span className="tech-pills-title">Platforms and tools</span>
              <div className="forge-tech-pills">
                {technologies.map((tech) => (
                  <span className="forge-tech-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="forge-section forge-process" id="process">
          <div className="section-shell">
            <div className="section-intro reveal">
              <span className="forge-section-label">Scroll workflow</span>
              <h2 className="forge-section-title">From idea to live website with a clean launch path.</h2>
            </div>

            <div className="process-deck">
              {deliveryProcess.map((step, index) => (
                <article className="process-content-card scroll-card" key={step}>
                  <span className="process-display-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="process-display-title">{step}</h3>
                  <p className="process-display-desc">
                    Each phase is designed around clarity, fast feedback, performance checks, and a
                    deployable output that can move to GitHub Pages without drama.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="forge-section" id="projects">
          <div className="section-shell">
            <div className="section-intro reveal">
              <span className="forge-section-label">Selected work</span>
              <h2 className="forge-section-title">Project stories with product-grade polish.</h2>
            </div>

            <div className="projects-container">
              {projectShowcase.map((project, index) => (
                <article className="forge-project-card scroll-card" key={project.title}>
                  <div className="forge-project-card-bg" aria-hidden="true">
                    <span />
                    <i />
                  </div>
                  <div className="forge-project-overlay">
                    <span className="forge-project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.copy}</p>
                    {"link" in project ? (
                      <a className="forge-project-cta" href={project.link} target="_blank" rel="noreferrer">
                        Open profile
                      </a>
                    ) : (
                      <span className="forge-project-cta">Case study {String(index + 1).padStart(2, "0")}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="forge-section forge-contact" id="contact">
          <div className="forge-contact-grid">
            <div className="section-intro reveal">
              <span className="forge-section-label">Contact</span>
              <h2 className="forge-section-title">Bring Webovex your next live build.</h2>
              <p className="forge-section-sub">
                Websites, dashboards, ecommerce systems, cloud deployment, AI features, and premium 3D
                storytelling can all start here.
              </p>
              <a className="forge-contact-email" href="mailto:subashrishid@gmail.com">
                subashrishid@gmail.com
              </a>
            </div>
            <ContactPanel />
          </div>
        </section>
      </main>

      <footer className="forge-footer">
        <div className="forge-footer-inner">
          <div className="forge-footer-top">
            <div>
              <strong className="forge-footer-brand">Webovex</strong>
              <p className="forge-footer-tagline">We Forge Digital Empires</p>
            </div>
            <div className="forge-footer-links">
              <a href="#services">Services</a>
              <a href="#stack">Stack</a>
              <a href="#projects">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="forge-footer-bottom">
            <span className="forge-footer-copy">Premium 3D website and product systems studio.</span>
            <span className="forge-footer-copy">Built for GitHub Pages.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
