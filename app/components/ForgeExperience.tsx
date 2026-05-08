"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import ForgeScene from "./ForgeScene";
import { deliveryProcess, forgeMetrics, forgeServices, projectShowcase, technicalBlueprint, technologies } from "../data/forgeContent";

function useCinematicScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.86,
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => setProgress(self.progress),
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 160);

    return () => {
      window.clearTimeout(refresh);
      trigger.kill();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return progress;
}

function useForgeReveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".forge-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 42, autoAlpha: 0, filter: "blur(10px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 36, rotateX: 8, autoAlpha: 0 },
          {
            y: 0,
            rotateX: 0,
            autoAlpha: 1,
            duration: 0.72,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);
}

function useForgeBoot() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooted(true), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return booted;
}

function MagneticAnchor({
  children,
  href,
  variant = "primary",
}: {
  children: string;
  href: string;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    node.style.setProperty("--mx", `${x}px`);
    node.style.setProperty("--my", `${y}px`);
    gsap.to(node, {
      x: (x - rect.width / 2) * 0.12,
      y: (y - rect.height / 2) * 0.18,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.38)" });
  };

  return (
    <a className={`magnetic-link ${variant}`} href={href} ref={ref} onMouseMove={move} onMouseLeave={leave}>
      <span>{children}</span>
    </a>
  );
}

function BootScreen({ booted }: { booted: boolean }) {
  return (
    <div className={`boot-screen ${booted ? "is-booted" : ""}`}>
      <div className="boot-shell">
        <span>WEBOVEX FORGE // ONLINE</span>
        <strong>WEBOVEX</strong>
        <div className="boot-bars">
          {Array.from({ length: 16 }, (_, index) => (
            <i key={index} style={{ animationDelay: `${index * 0.045}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: (typeof forgeServices)[number]; index: number }) {
  return (
    <article className="service-card forge-reveal">
      <div className="card-index">0{index + 1}</div>
      <span>{service.eyebrow}</span>
      <h3>{service.title}</h3>
      <p>{service.copy}</p>
    </article>
  );
}

function ContactPanel() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3600);
    event.currentTarget.reset();
  };

  return (
    <form className="contact-panel forge-reveal" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required placeholder="you@company.com" />
      </label>
      <label className="wide">
        <span>Build Signal</span>
        <textarea name="message" required placeholder="Tell WEBOVEX what you want forged." />
      </label>
      <button type="submit">Ignite Project</button>
      {sent && <strong className="signal-received">Signal received. Forge team standing by.</strong>}
    </form>
  );
}

export default function ForgeExperience() {
  const progress = useCinematicScroll();
  const booted = useForgeBoot();
  useForgeReveals();

  return (
    <>
      <BootScreen booted={booted} />
      <ForgeScene progress={progress} />
      <div className="atmosphere-overlay" aria-hidden="true" />

      <nav className="topbar">
        <a className="brand-mark" href="#hero" aria-label="WEBOVEX home">
          <span>WX</span>
          <strong>WEBOVEX</strong>
        </a>
        <div className="nav-links">
          <a href="#forge">Forge</a>
          <a href="#tech">Tech</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <span className="eyebrow">WEBOVEX // DIGITAL FORGE STUDIO</span>
            <p className="brand-kicker">WEBOVEX</p>
            <h1>WE FORGE DIGITAL EMPIRES</h1>
            <p className="hero-subheadline">Webovex builds scalable digital products, modern web applications, and enterprise IT systems.</p>
            <div className="hero-actions">
              <MagneticAnchor href="#forge">Enter The Forge</MagneticAnchor>
              <MagneticAnchor href="#contact" variant="ghost">Ready to Forge?</MagneticAnchor>
            </div>
          </div>
          <aside className="hero-diagnostics" aria-label="WEBOVEX forge diagnostics">
            <span>FORGE TEMP</span>
            <strong>{Math.round(820 + progress * 180)}C</strong>
            <i />
            <span>CAMERA DOLLY</span>
            <strong>{Math.round(progress * 100).toString().padStart(2, "0")}%</strong>
          </aside>
        </section>

        <section className="intro-band forge-reveal" aria-label="WEBOVEX tagline">
          <span>MAIN TAGLINE</span>
          <strong>We Forge Digital Empires</strong>
        </section>

        <section className="content-section split" id="forge">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">WHAT WE FORGE</span>
            <h2>Industrial-grade digital systems with cinematic presence.</h2>
            <p>WEBOVEX combines scalable engineering with immersive interface craft, turning products into operational infrastructure with a premium visual signature.</p>
          </div>
          <div className="service-grid">
            {forgeServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </section>

        <section className="content-section tech-section" id="tech">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">TECHNOLOGIES</span>
            <h2>Core stack for high-performance builds.</h2>
            <p>WEBOVEX ships production-ready systems across frontend experiences, backend services, cloud deployment, and AI-enabled product workflows.</p>
          </div>
          <div className="tech-rack">
            {technologies.map((tech, index) => (
              <span className="forge-reveal" key={tech} style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}>
                <i />
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section blueprint-section" id="blueprint">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">TECHNICAL BLUEPRINT</span>
            <h2>Architecture depth behind the cinematic surface.</h2>
            <p>Every build is designed as a real product system: typed frontend, dependable APIs, structured data, secure access, deployment discipline, and room for AI automation.</p>
          </div>
          <div className="blueprint-grid">
            {technicalBlueprint.map((item) => (
              <article className="blueprint-card forge-reveal" key={item.title}>
                <span>{item.stack}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="delivery-rail forge-reveal">
            {deliveryProcess.map((step, index) => (
              <span key={step}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {step}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">ABOUT</span>
            <h2>Built in the pressure chamber between design, code, and systems architecture.</h2>
            <p>Webovex is a modern development studio focused on building high-performance web platforms and scalable digital solutions.</p>
          </div>
          <div className="metric-grid forge-reveal">
            {forgeMetrics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="project-section" id="projects">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">PROJECT SHOWCASE</span>
            <h2>Future systems staged like artifacts from the forge floor.</h2>
          </div>
          <div className="project-grid">
            {projectShowcase.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span />
                  <i />
                  <b />
                </div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <em>0{index + 1}</em>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading forge-reveal">
            <span className="eyebrow">CONTACT</span>
            <h2>Ready to Forge?</h2>
            <p>Bring WEBOVEX the product, platform, motion story, or enterprise system that needs heat, structure, and scale.</p>
            <a className="direct-link" href="mailto:subashrishid@gmail.com">subashrishid@gmail.com</a>
          </div>
          <ContactPanel />
        </section>
      </main>

      <footer className="site-footer">
        <strong>WEBOVEX</strong>
        <span>We Forge Digital Empires</span>
        <span>Premium digital products, modern web applications, and enterprise IT systems.</span>
      </footer>
    </>
  );
}
