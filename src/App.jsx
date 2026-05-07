import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import emailjs from '@emailjs/browser';

const EJS_SVC = 'service_q9r9259';
const EJS_TPL = 'template_7mtemk4';
const EJS_KEY = 'kZS3jYfnudOKH8as5';
const OWNER_EMAIL = 'subashrishid@gmail.com';

const services = [
  { name: 'Web Apps', detail: 'React interfaces, dashboards, portals', color: '#61dafb' },
  { name: 'Django', detail: 'Python systems, admin workflows, RBAC', color: '#6ee7b7' },
  { name: 'DevOps', detail: 'Docker, Nginx, SSL, deploy pipelines', color: '#facc15' },
  { name: 'Security', detail: 'JWT, encryption, hardening, validation', color: '#f472b6' },
  { name: 'E-Commerce', detail: 'Catalogs, carts, payments, admin tools', color: '#a78bfa' },
  { name: 'APIs', detail: 'REST contracts, integrations, webhooks', color: '#93c5fd' },
  { name: 'Cloud', detail: 'AWS-ready systems and production handoff', color: '#86efac' },
];

const projects = [
  {
    title: 'Enterprise Platform',
    type: 'Compliance, renewal and workflow automation',
    value: 'Automates reminders, secure records, team workflows and production deployment.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Nginx', 'JWT', 'AES-256'],
  },
  {
    title: 'Enterprise IT Ticket Tool',
    type: 'Helpdesk and ticket management system',
    value: 'Organizes IT support, role access, file handling, SMTP alerts and audit-friendly workflows.',
    stack: ['Django', 'Python', 'SQLite', 'Bootstrap', 'Waitress', 'WhiteNoise'],
  },
];

const processSteps = ['Discover', 'Design', 'Build', 'Secure', 'Deploy'];
const skills = ['React', 'Node.js', 'Express', 'PostgreSQL', 'Django', 'Python', 'Docker', 'Nginx', 'AWS', 'JWT', 'REST APIs', 'Security'];

function makeLabel(text, color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = 2;
  canvas.width = 320 * dpr;
  canvas.height = 88 * dpr;
  ctx.scale(dpr, dpr);
  ctx.font = '700 20px Space Grotesk, Inter, sans-serif';
  const width = Math.min(286, ctx.measureText(text).width + 48);
  const x = (320 - width) / 2;
  ctx.fillStyle = 'rgba(8, 10, 20, 0.72)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, 20, width, 42, 16);
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = color;
  ctx.shadowBlur = 12;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 160, 41);

  const texture = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(1.9, 0.52, 1);
  return sprite;
}

function createGlowMaterial(color, opacity = 0.18) {
  return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
}

function WebovexScene() {
  const mountRef = useRef(null);
  const fallbackRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const fallback = fallbackRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 760px)').matches;
    const lowPower = mobile || navigator.hardwareConcurrency <= 4;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !lowPower, alpha: true, powerPreference: lowPower ? 'low-power' : 'high-performance' });
    } catch (_) {
      fallback?.classList.add('visible');
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.8));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 100);
    camera.position.set(0, 0.25, 8.2);

    const ambient = new THREE.AmbientLight(0xbfdcff, 0.76);
    const key = new THREE.PointLight(0x7c3aed, 4.2, 24);
    const rim = new THREE.PointLight(0x06b6d4, 3.8, 22);
    key.position.set(-4, 5, 5);
    rim.position.set(4, -2, 4);
    scene.add(ambient, key, rim);

    const root = new THREE.Group();
    scene.add(root);

    const core = new THREE.Group();
    const coreMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 4),
      new THREE.MeshStandardMaterial({ color: 0x11182c, metalness: 0.76, roughness: 0.2, emissive: 0x22105a, emissiveIntensity: 0.36 })
    );
    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.1, 2),
      new THREE.MeshBasicMaterial({ color: 0x67e8f9, wireframe: true, transparent: true, opacity: 0.28 })
    );
    core.add(coreMesh, coreWire);
    root.add(core);

    const rings = [1.7, 2.35, 3.05].map((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.01, 12, 190),
        new THREE.MeshBasicMaterial({ color: index === 1 ? 0x06b6d4 : 0x7c3aed, transparent: true, opacity: 0.35 })
      );
      ring.rotation.set(Math.PI / 2 + index * 0.28, index * 0.34, index * 0.1);
      root.add(ring);
      return ring;
    });

    const serviceNodes = services.map((service, index) => {
      const color = new THREE.Color(service.color);
      const group = new THREE.Group();
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.14, 28, 28),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.58, roughness: 0.32, metalness: 0.36 })
      );
      const glow = new THREE.Mesh(new THREE.SphereGeometry(0.32, 28, 28), createGlowMaterial(color, 0.13));
      const label = makeLabel(service.name, service.color);
      label.position.y = 0.48;
      group.add(node, glow, label);
      group.userData = {
        angle: (index / services.length) * Math.PI * 2,
        radius: 2.65 + (index % 2) * 0.36,
        baseY: (index % 3 - 1) * 0.36,
      };
      root.add(group);
      return group;
    });

    const pipeline = new THREE.Group();
    const stagePositions = [];
    processSteps.forEach((step, index) => {
      const color = new THREE.Color(['#67e8f9', '#a78bfa', '#6ee7b7', '#f472b6', '#facc15'][index]);
      const block = new THREE.Group();
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.92, 0.5, 0.92),
        new THREE.MeshStandardMaterial({ color: 0x101827, metalness: 0.52, roughness: 0.24, emissive: color, emissiveIntensity: 0.1 })
      );
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.75 }));
      const label = makeLabel(step, `#${color.getHexString()}`);
      label.position.y = 0.64;
      const x = -2.35 + index * 1.18;
      const y = index % 2 ? 0.48 : -0.38;
      block.position.set(x, y, Math.sin(index) * 0.46);
      block.userData.baseY = y;
      block.userData.phase = index * 0.72;
      block.add(box, edges, label);
      pipeline.add(block);
      stagePositions.push(block.position.clone());
    });
    const curve = new THREE.CatmullRomCurve3(stagePositions);
    pipeline.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(90)), new THREE.LineBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.4 })));
    const flowDots = Array.from({ length: lowPower ? 5 : 9 }, (_, index) => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 16), new THREE.MeshBasicMaterial({ color: index % 2 ? 0x7c3aed : 0x06b6d4 }));
      dot.userData.offset = index / (lowPower ? 5 : 9);
      pipeline.add(dot);
      return dot;
    });
    pipeline.visible = false;
    root.add(pipeline);

    const architecture = new THREE.Group();
    const architectureLabels = ['Client', 'API', 'Data', 'Secure', 'Cloud'];
    architectureLabels.forEach((name, index) => {
      const color = ['#93c5fd', '#a78bfa', '#67e8f9', '#facc15', '#86efac'][index];
      const group = new THREE.Group();
      const shape = new THREE.Mesh(
        new THREE.CylinderGeometry(0.36, 0.36, 0.22, 6),
        new THREE.MeshStandardMaterial({ color: 0x111827, emissive: new THREE.Color(color), emissiveIntensity: 0.16, metalness: 0.58, roughness: 0.28 })
      );
      const label = makeLabel(name, color);
      label.position.y = 0.58;
      group.add(shape, label);
      group.position.set(-2.25 + index * 1.12, Math.sin(index * 1.3) * 0.32, 0);
      architecture.add(group);
      if (index > 0) {
        const points = [new THREE.Vector3(-2.25 + (index - 1) * 1.12, Math.sin((index - 1) * 1.3) * 0.32, 0), group.position.clone()];
        architecture.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22 })));
      }
    });
    architecture.visible = false;
    root.add(architecture);

    const starCount = lowPower ? 100 : 240;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      starPositions[i * 3] = (Math.random() - 0.5) * 10;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x8bd3ff, size: 0.024, transparent: true, opacity: 0.52 }));
    scene.add(stars);

    const states = {
      hero: { camera: [0, 0.15, 8.1], root: [-0.18, 0.48, 0], scale: 1, mode: 'core' },
      about: { camera: [-0.65, 0.25, 7.5], root: [-0.06, 0.96, 0], scale: 0.95, mode: 'core' },
      services: { camera: [0.25, 0.2, 6.7], root: [-0.18, 1.55, 0], scale: 1.1, mode: 'core' },
      projects: { camera: [-0.3, 0.25, 6.4], root: [-0.38, 2.15, 0], scale: 0.98, mode: 'pipeline' },
      process: { camera: [0.15, 0.28, 6.2], root: [-0.28, 2.78, 0], scale: 1.08, mode: 'pipeline' },
      architecture: { camera: [0, 0.18, 6.7], root: [-0.12, 3.15, 0], scale: 1.12, mode: 'architecture' },
      contact: { camera: [0, 0.12, 8.6], root: [-0.08, 4.05, 0], scale: 0.84, mode: 'core' },
    };
    let current = states.hero;

    const updateState = () => {
      const ids = ['hero', 'about', 'services', 'projects', 'process', 'architecture', 'contact'];
      let best = 'hero';
      let bestScore = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerDistance = Math.abs(rect.top + rect.height * 0.45 - window.innerHeight * 0.5);
        const score = -centerDistance;
        if (score > bestScore) {
          bestScore = score;
          best = id;
        }
      });
      current = states[best];
      const mode = current.mode;
      pipeline.visible = mode === 'pipeline';
      architecture.visible = mode === 'architecture';
      core.visible = mode !== 'pipeline' && mode !== 'architecture';
      rings.forEach((ring) => { ring.visible = mode === 'core'; });
      serviceNodes.forEach((node) => { node.visible = mode === 'core'; });
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      updateState();
    };

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      camera.position.lerp(new THREE.Vector3(...current.camera), reduceMotion ? 1 : 0.055);
      root.rotation.x += (current.root[0] - root.rotation.x) * 0.055;
      root.rotation.y += (current.root[1] - root.rotation.y) * 0.055;
      root.rotation.z += (current.root[2] - root.rotation.z) * 0.055;
      root.scale.lerp(new THREE.Vector3(current.scale, current.scale, current.scale), 0.05);

      if (!reduceMotion) {
        core.rotation.y = t * 0.34;
        core.rotation.x = Math.sin(t * 0.35) * 0.08;
        rings.forEach((ring, index) => {
          ring.rotation.z = t * (0.11 + index * 0.03);
          ring.rotation.y += 0.0015 + index * 0.0005;
        });
        serviceNodes.forEach((node, index) => {
          const angle = node.userData.angle + t * (0.22 + index * 0.012);
          node.position.set(Math.cos(angle) * node.userData.radius, node.userData.baseY + Math.sin(t * 1.1 + index) * 0.16, Math.sin(angle) * node.userData.radius * 0.58);
        });
        pipeline.children.forEach((child) => {
          if (child.userData.baseY !== undefined) child.position.y = child.userData.baseY + Math.sin(t * 1.7 + child.userData.phase) * 0.06;
        });
        flowDots.forEach((dot) => dot.position.copy(curve.getPoint((t * 0.16 + dot.userData.offset) % 1)));
        architecture.rotation.y = Math.sin(t * 0.35) * 0.18;
        stars.rotation.y = t * 0.025;
      }

      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', updateState, { passive: true });
    resize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateState);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="webgl-layer" ref={mountRef} aria-hidden="true" />
      <div className="webgl-fallback" ref={fallbackRef}>Webovex platform core: secure full-stack systems from interface to cloud.</div>
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#hero', 'Home'],
    ['#about', 'About'],
    ['#projects', 'Projects'],
    ['#skills', 'Skills'],
    ['#services', 'Services'],
    ['#contact', 'Contact'],
  ];
  return (
    <>
      <nav className="nav">
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          <span className="brand-mark">W</span>
          <span>Webovex</span>
        </a>
        <div className="nav-links">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Start a Project</a>
        <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Start a Project</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero panel">
      <div className="hero-copy">
        <span className="eyebrow">Full-stack development studio in Chennai</span>
        <h1>Webovex builds secure full-stack platforms for growing businesses</h1>
        <p className="lead">From polished React frontends to Django and PERN backends, payments, dashboards, deployment, and security architecture. One studio to design, build, ship, and support your system.</p>
        <p className="brand-proof">Webovex.com is the official website of Webovex, a full-stack development studio in Chennai building modern web apps, Django systems, e-commerce platforms, and secure enterprise software.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Start a Project</a>
          <a className="button secondary" href="#services">View Systems</a>
        </div>
        <div className="trust-grid" aria-label="Trust metrics">
          <Metric value="5+" label="Core stacks" />
          <Metric value="35+" label="Production tools" />
          <Metric value="2" label="Enterprise systems" />
          <Metric value="24h" label="Reply window" />
        </div>
      </div>
      <div className="scene-caption">
        <span>Scroll journey</span>
        <strong>Webovex platform core</strong>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="panel split-panel">
      <div>
        <span className="eyebrow">About Webovex</span>
        <h2>Built for clients who need real software, not just a screen.</h2>
      </div>
      <div className="glass-copy">
        <p>I'm Subash N, a full-stack developer and system architect from Chennai. Webovex focuses on secure web apps, Django systems, e-commerce platforms, IT workflow tools, and production deployment paths that make sense for growing businesses.</p>
        <div className="proof-list">
          <span>System design before code</span>
          <span>Security-first backend logic</span>
          <span>Cloud-ready deployment handoff</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="panel">
      <div className="section-head">
        <span className="eyebrow">Services</span>
        <h2>Client outcomes Webovex can build.</h2>
        <p>Each service connects to the same platform core: interface, API, data, security, deployment, and support.</p>
      </div>
      <div className="card-grid services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name} style={{ '--accent': service.color }}>
            <span className="service-line" />
            <h3>{service.name}</h3>
            <p>{service.detail}</p>
            <strong>Deliverable-ready architecture</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="panel">
      <div className="section-head">
        <span className="eyebrow">Featured Work</span>
        <h2>Case studies that prove the stack.</h2>
        <p>These are shaped like product systems: business problem, engineering value, and deployment path.</p>
      </div>
      <div className="project-stack">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.value}</p>
            </div>
            <div className="stack-row">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="panel">
      <div className="section-head">
        <span className="eyebrow">Process</span>
        <h2>A polished build pipeline from idea to launch.</h2>
        <p>Discovery first, architecture second, then development, hardening, deployment, and post-launch support.</p>
      </div>
      <div className="pipeline-list">
        {processSteps.map((step, index) => (
          <article className="pipeline-card" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
            <p>{[
              'Clarify the goal, user flow, scope, and release path.',
              'Plan architecture, database models, APIs, and security boundaries.',
              'Build frontend, backend, integrations, validation, and workflows.',
              'Harden authentication, data handling, headers, and operational risks.',
              'Package, deploy, verify, and hand over a stable production system.',
            ][index]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="panel split-panel">
      <div>
        <span className="eyebrow">Architecture</span>
        <h2>Systems designed for real business workflows.</h2>
      </div>
      <div className="architecture-card">
        {['Client UI', 'API Layer', 'Database', 'Security', 'Cloud'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="panel compact-panel">
      <span className="eyebrow">Skills</span>
      <h2>Production stack coverage.</h2>
      <div className="skills-row">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}

function Contact() {
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init(EJS_KEY);
  }, []);

  const showToast = (message, error = false) => {
    setToast({ message, error });
    window.setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    const clientName = String(data.get('name') || '').trim();
    const clientEmail = String(data.get('email') || '').trim();
    const serviceValue = String(data.get('subject') || '');
    const clientMsg = String(data.get('message') || '').trim() || '(No message provided)';
    const emailRe = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

    if (clientName.length < 2) nextErrors.name = true;
    if (!emailRe.test(clientEmail)) nextErrors.email = true;
    if (!serviceValue) nextErrors.subject = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subjectSelect = form.elements.subject;
    const serviceLabel = subjectSelect.options[subjectSelect.selectedIndex].text;
    setSending(true);
    try {
      await emailjs.send(EJS_SVC, EJS_TPL, {
        to_name: 'Subash',
        to_email: OWNER_EMAIL,
        service: serviceLabel,
        message: `From: ${clientName}\nEmail: ${clientEmail}\nService: ${serviceLabel}\nMessage: ${clientMsg}`,
        from_name: 'Webovex Contact Form',
        reply_to: clientEmail,
      });
      try {
        await emailjs.send(EJS_SVC, EJS_TPL, {
          to_name: clientName,
          to_email: clientEmail,
          service: serviceLabel,
          message: clientMsg,
          from_name: 'Subash N - Webovex',
          reply_to: OWNER_EMAIL,
        });
      } catch (confirmationError) {
        console.warn('Confirmation email failed:', confirmationError);
      }
      form.reset();
      showToast('Successfully submitted.');
    } catch (error) {
      console.error('Form submission error:', error);
      showToast(`Error: ${error.text || 'Network error. Please try again or email subashrishid@gmail.com'}`, true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="panel contact-panel">
      <div className="contact-copy">
        <span className="eyebrow">Project Inquiry</span>
        <h2>Start your build with Webovex.</h2>
        <p>Share the goal, deadline, and must-have features. I will reply with a practical next step, build path, and the right stack for your project.</p>
        <div className="contact-details">
          <span>subashrishid@gmail.com</span>
          <span>9952019436</span>
          <span>Chennai, Tamil Nadu</span>
        </div>
      </div>
      <form className="contact-form" id="cForm" noValidate onSubmit={handleSubmit}>
        <label htmlFor="fName">Name</label>
        <input id="fName" name="name" className={errors.name ? 'error' : ''} placeholder="Your name" />
        <span className={errors.name ? 'field-error show' : 'field-error'}>Please enter your name.</span>

        <label htmlFor="fEmail">Email</label>
        <input id="fEmail" name="email" className={errors.email ? 'error' : ''} placeholder="you@company.com" />
        <span className={errors.email ? 'field-error show' : 'field-error'}>Please enter a valid email.</span>

        <label htmlFor="fSubject">Project Type</label>
        <select id="fSubject" name="subject" className={errors.subject ? 'error' : ''} defaultValue="">
          <option value="">Select a project type</option>
          <option value="web-app">Web App Development</option>
          <option value="ecommerce">E-Commerce Website</option>
          <option value="django">Django System</option>
          <option value="devops">DevOps Setup</option>
          <option value="security">Security Audit</option>
          <option value="api">API Integration</option>
          <option value="other">Other</option>
        </select>
        <span className={errors.subject ? 'field-error show' : 'field-error'}>Please select a project type.</span>

        <label htmlFor="fMsg">Message</label>
        <textarea id="fMsg" name="message" placeholder="Tell me about your project" />
        <button className="button primary submit-btn" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
      </form>
      {toast && <div className={`toast ${toast.error ? 'error' : ''}`}>{toast.message}</div>}
    </section>
  );
}

export default function App() {
  return (
    <>
      <WebovexScene />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Architecture />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <strong>Webovex</strong>
        <span>Full-Stack Development Studio - Chennai, Tamil Nadu</span>
        <span>Copyright 2026 Subash N - Webovex</span>
      </footer>
    </>
  );
}
