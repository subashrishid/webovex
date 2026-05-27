"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormEvent, useEffect, useState } from "react";
import {
  deliveryProcess,
  forgeServices,
  projectShowcase,
  technicalBlueprint,
  technologies,
} from "../data/forgeContent";

const imageCards = [
  {
    src: "/technical-dashboard.svg",
    title: "Live business dashboard",
    copy: "Analytics, admin tools, roles, workflow actions, and reporting screens designed for daily use.",
  },
  {
    src: "/technical-architecture.svg",
    title: "Scalable architecture",
    copy: "Frontend, APIs, databases, cloud services, AI modules, and deployment flow mapped before build.",
  },
  {
    src: "/technical-deployment.svg",
    title: "Production launch system",
    copy: "GitHub Actions, static export, DNS, SSL, monitoring, backups, and performance tuning.",
  },
] as const;

const clientMedia = [
  {
    src: "/client-workspace.jpg",
    title: "Premium client workspace",
    copy: "Bright business imagery that makes the brand feel trustworthy, active, and ready for serious clients.",
  },
  {
    src: "/developer-review.jpg",
    title: "Project review clarity",
    copy: "Code, planning, and delivery visuals that show Webovex understands technical work end to end.",
  },
  {
    src: "/team-coding.jpg",
    title: "Build team confidence",
    copy: "Collaborative software visuals help visitors imagine a real team improving their business systems.",
  },
  {
    src: "/software-engineer.jpg",
    title: "Engineer-led delivery",
    copy: "Focused development imagery gives the site more proof, warmth, and professional energy.",
  },
] as const;

const videoStories = [
  {
    src: "/client-growth-laptop.mp4",
    poster: "/developer-review.jpg",
    title: "Client growth in motion",
    copy: "A short business-tech loop for the first impression: planning, dashboards, and growth decisions.",
  },
  {
    src: "/client-meeting.mp4",
    poster: "/client-workspace.jpg",
    title: "Consultation confidence",
    copy: "Meeting footage gives the page a polished agency feel and supports stronger client enquiries.",
  },
] as const;

function useLightReveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 38, autoAlpha: 0, filter: "blur(10px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);
}

function ContactPanel() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
    event.currentTarget.reset();
  };

  return (
    <form className="contact-card reveal" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label>
        <span>Project details</span>
        <textarea name="message" required placeholder="Website, app, dashboard, ecommerce, or automation need." />
      </label>
      <button type="submit">Start project</button>
      {sent && <p className="success-note">Message ready. Webovex will follow up.</p>}
    </form>
  );
}

export default function ForgeExperience() {
  useLightReveals();

  return (
    <div className="site-page">
      <nav className="top-nav">
        <a className="brand" href="#home" aria-label="Webovex home">
          <span>W</span>
          Webovex
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#images">Tech visuals</a>
          <a href="#client-media">Clients</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-action" href="#contact">
          Get quote
        </a>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy reveal">
            <span className="eyebrow">Apple clean. Tesla sharp. Webovex fast.</span>
            <h1>Modern websites, apps, and business systems with a premium light theme.</h1>
            <p>
              Webovex now feels like a clean product launch page with technical visuals, smooth
              sections, and clear business service presentation.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#services">
                View services
              </a>
              <a className="text-btn" href="#images">
                See technical images
              </a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img
              className="hero-technical"
              src="/technical-hero.svg"
              alt="Technical product dashboard and cloud architecture preview"
            />
            <div className="hero-photo-strip" aria-label="Client growth preview images">
              <img src="/client-workspace.jpg" alt="Professional workspace for client projects" />
              <img src="/team-coding.jpg" alt="Software team working on a client build" />
              <img src="/software-engineer.jpg" alt="Software engineer building a modern web product" />
            </div>
          </div>
        </section>

        <section className="launch-strip reveal" aria-label="Webovex service summary">
          <article>
            <strong>Web</strong>
            <span>Premium landing pages and portfolio sites</span>
          </article>
          <article>
            <strong>App</strong>
            <span>Dashboards, portals, and business tools</span>
          </article>
          <article>
            <strong>Cloud</strong>
            <span>Deployment, DevOps, and scalable systems</span>
          </article>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading reveal">
            <span className="eyebrow">What Webovex builds</span>
            <h2>Simple, premium service cards with real technical clarity.</h2>
            <p>
              Apple-style spacing, Tesla-style confidence, and practical details for customers who
              need a website, app, ecommerce platform, or support system.
            </p>
          </div>

          <div className="service-grid">
            {forgeServices.map((service, index) => (
              <article className="service-card reveal" key={service.title}>
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section image-section" id="images">
          <div className="section-heading reveal">
            <span className="eyebrow">Technical images</span>
            <h2>Clear visuals for dashboards, architecture, and deployment.</h2>
            <p>
              These image panels explain dashboards, architecture, deployment, and the real systems
              Webovex can deliver.
            </p>
          </div>

          <div className="image-grid">
            {imageCards.map((card) => (
              <article className="image-card reveal" key={card.title}>
                <img src={card.src} alt={card.title} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section media-section" id="client-media">
          <div className="section-heading reveal">
            <span className="eyebrow">Client-improving media</span>
            <h2>More real images that make Webovex feel active, premium, and trustworthy.</h2>
            <p>
              Business clients decide fast. These visuals add proof, human energy, and a more
              professional first impression across the page.
            </p>
          </div>

          <div className="client-media-grid">
            {clientMedia.map((item) => (
              <article className="media-card reveal" key={item.title}>
                <img src={item.src} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section video-section">
          <div className="section-heading reveal">
            <span className="eyebrow">Video proof</span>
            <h2>Short polished video loops for stronger client confidence.</h2>
            <p>
              Smooth motion makes the website feel more alive while keeping the page clean,
              bright, and lightweight.
            </p>
          </div>

          <div className="video-grid">
            {videoStories.map((video) => (
              <article className="video-card reveal" key={video.title}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={video.poster}
                  preload="metadata"
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section">
          <div className="section-heading reveal">
            <span className="eyebrow">Technology stack</span>
            <h2>Everything needed for a serious production build.</h2>
          </div>

          <div className="stack-layout">
            <div className="blueprint-list reveal">
              {technicalBlueprint.map((item) => (
                <article key={item.title}>
                  <span>{item.stack}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="tech-cloud reveal">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading reveal">
            <span className="eyebrow">Build process</span>
            <h2>From idea to live website, clean and controlled.</h2>
          </div>
          <div className="process-rail">
            {deliveryProcess.map((step, index) => (
              <article className="process-card reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section">
          <div className="section-heading reveal">
            <span className="eyebrow">Project direction</span>
            <h2>Business-friendly examples with clean product-page styling.</h2>
          </div>
          <div className="work-grid">
            {projectShowcase.map((project) => (
              <article className="work-card reveal" key={project.title}>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                {"link" in project && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open profile
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy reveal">
            <span className="eyebrow">Contact</span>
            <h2>Ready for a cleaner Webovex build?</h2>
            <p>
              Send the project idea. Webovex can design, build, deploy, and improve the full
              website or platform.
            </p>
            <a href="mailto:subashrishid@gmail.com">subashrishid@gmail.com</a>
          </div>
          <ContactPanel />
        </section>
      </main>

      <footer className="site-footer">
        <strong>Webovex</strong>
        <span>Apple-style clarity. Tesla-style confidence. Production-ready technology.</span>
      </footer>
    </div>
  );
}
