import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import emailjs from '@emailjs/browser';

const EJS_SVC = 'service_q9r9259';
const EJS_TPL = 'template_7mtemk4';
const EJS_KEY = 'kZS3jYfnudOKH8as5';
const OWNER_EMAIL = 'subashrishid@gmail.com';

const services = [
  { title: 'React UI', text: 'Dashboards, portals, product screens', tag: 'Frontend' },
  { title: 'Django', text: 'Admin systems, RBAC, Python logic', tag: 'Backend' },
  { title: 'PERN APIs', text: 'Node, Express, PostgreSQL, REST', tag: 'API' },
  { title: 'DevOps', text: 'Docker, Nginx, SSL, deployment', tag: 'Launch' },
  { title: 'Security', text: 'JWT, validation, encryption, hardening', tag: 'Secure' },
  { title: 'E-Commerce', text: 'Carts, payments, catalog, automation', tag: 'Commerce' },
];

const projects = [
  {
    title: 'Enterprise Platform',
    text: 'Compliance, renewal reminders, secure records, team workflows, and production deployment.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Nginx', 'JWT'],
  },
  {
    title: 'Enterprise IT Ticket Tool',
    text: 'Django helpdesk system with roles, file handling, SMTP alerts, and audit-friendly workflows.',
    stack: ['Django', 'Python', 'SQLite', 'Bootstrap', 'Waitress'],
  },
];

const process = ['Inquiry', 'Design', 'Build', 'Secure', 'Deploy', 'Support'];
const navLinks = [['#hero', 'Home'], ['#services', 'Services'], ['#process', 'Process'], ['#projects', 'Projects'], ['#contact', 'Contact']];

function makeLabel(text, color = '#f97316', width = 280) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = 2;
  canvas.width = width * dpr;
  canvas.height = 92 * dpr;
  ctx.scale(dpr, dpr);
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.16)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(8, 14, width - 16, 54, 14);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = '900 21px Space Grotesk, Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, 41);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
  sprite.scale.set(width / 150, 0.62, 1);
  return sprite;
}

function box(w, h, d, color, options = {}) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({
      color,
      metalness: options.metalness ?? 0.2,
      roughness: options.roughness ?? 0.42,
      emissive: options.emissive ?? 0x000000,
      emissiveIntensity: options.emissiveIntensity ?? 0,
    })
  );
}

function addEdges(mesh, color = 0x1f2937, opacity = 0.16) {
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity })
  );
  edges.position.copy(mesh.position);
  edges.rotation.copy(mesh.rotation);
  edges.scale.copy(mesh.scale);
  mesh.parent?.add(edges);
  return edges;
}

function worker(color = 0xf97316) {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xf2b28f, roughness: 0.55 });
  const orange = new THREE.MeshStandardMaterial({ color, roughness: 0.45 });
  const blue = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.42 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.45 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.32, 6, 12), blue);
  body.position.y = 0.48;
  const vest = box(0.29, 0.19, 0.08, color);
  vest.position.y = 0.54;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 18), skin);
  head.position.y = 0.78;
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 18, 0, Math.PI * 2, 0, Math.PI * 0.55), orange);
  helmet.position.y = 0.86;
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.28, 5, 8), skin);
  const armR = armL.clone();
  armL.position.set(-0.19, 0.54, 0.02);
  armR.position.set(0.19, 0.54, 0.02);
  armL.rotation.z = -0.72;
  armR.rotation.z = 0.72;
  const legL = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.26, 5, 8), dark);
  const legR = legL.clone();
  legL.position.set(-0.07, 0.18, 0);
  legR.position.set(0.07, 0.18, 0);
  g.add(body, vest, head, helmet, armL, armR, legL, legR);
  g.userData.armL = armL;
  g.userData.armR = armR;
  g.userData.head = head;
  return g;
}

function createScene(container) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = window.matchMedia('(max-width: 760px)').matches;
  const lowPower = mobile || navigator.hardwareConcurrency <= 4;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !lowPower, powerPreference: lowPower ? 'low-power' : 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.15 : 1.55));
  renderer.setClearColor(0xffffff, 0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(5.4, 4.2, 7.2);
  camera.lookAt(0, 0.8, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 2.1));
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.position.set(4, 7, 6);
  scene.add(sun);
  const orangeLight = new THREE.PointLight(0xff7a18, 5.5, 16);
  orangeLight.position.set(-1.8, 1.8, 2.4);
  scene.add(orangeLight);
  const blueLight = new THREE.PointLight(0x38bdf8, 2.8, 12);
  blueLight.position.set(2.8, 2.2, -1.5);
  scene.add(blueLight);

  const world = new THREE.Group();
  scene.add(world);

  const base = box(6.9, 0.22, 4.9, 0xf8fafc, { roughness: 0.55 });
  base.position.y = -0.12;
  world.add(base);
  addEdges(base, 0x94a3b8, 0.28);

  const dashboard = box(2.55, 2.25, 0.16, 0x111827, { metalness: 0.48, roughness: 0.22, emissive: 0x050812, emissiveIntensity: 0.3 });
  dashboard.position.set(-2.05, 1.28, -1.55);
  dashboard.rotation.y = 0.08;
  world.add(dashboard);
  addEdges(dashboard, 0x0f172a, 0.4);

  const screen = new THREE.Group();
  const screenPanel = box(2.25, 1.74, 0.04, 0xffffff, { roughness: 0.18, emissive: 0xffffff, emissiveIntensity: 0.04 });
  screenPanel.position.set(-2.05, 1.34, -1.45);
  screen.add(screenPanel);
  const chartBars = [0.42, 0.68, 0.52, 0.9, 0.62].map((h, i) => {
    const b = box(0.16, h, 0.03, i % 2 ? 0x38bdf8 : 0xf97316, { emissive: i % 2 ? 0x0369a1 : 0xc2410c, emissiveIntensity: 0.25 });
    b.position.set(-2.65 + i * 0.28, 0.83 + h / 2, -1.4);
    screen.add(b);
    return b;
  });
  const linePts = [-2.67, -2.35, -2.03, -1.72, -1.4].map((x, i) => new THREE.Vector3(x, 1.05 + Math.sin(i * 1.2) * 0.28 + i * 0.08, -1.38));
  const chartLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(linePts), new THREE.LineBasicMaterial({ color: 0xf97316, linewidth: 2 }));
  screen.add(chartLine);
  const brandLabel = makeLabel('WEBOVEX', '#f97316', 300);
  brandLabel.position.set(-2.04, 2.68, -1.38);
  screen.add(brandLabel);
  world.add(screen);

  const conveyor = new THREE.Group();
  const beltA = box(3.1, 0.18, 0.74, 0x27272a, { metalness: 0.35, roughness: 0.3 });
  beltA.position.set(-0.4, 0.16, 0.6);
  beltA.rotation.y = -0.55;
  const beltB = box(2.45, 0.18, 0.74, 0x27272a, { metalness: 0.35, roughness: 0.3 });
  beltB.position.set(0.7, 0.16, -0.28);
  beltB.rotation.y = 0.58;
  conveyor.add(beltA, beltB);
  world.add(conveyor);

  const boxes = [];
  for (let i = 0; i < 13; i += 1) {
    const parcel = box(0.34, 0.28, 0.34, 0xd97706, { roughness: 0.58 });
    parcel.position.set(-2.2 + (i % 5) * 0.72, 0.36 + Math.floor(i / 5) * 0.1, 0.92 - (i % 3) * 0.46);
    parcel.rotation.y = i * 0.4;
    parcel.userData.offset = i * 0.18;
    world.add(parcel);
    addEdges(parcel, 0x7c2d12, 0.28);
    boxes.push(parcel);
  }

  const racks = new THREE.Group();
  for (let col = 0; col < 3; col += 1) {
    for (let level = 0; level < 3; level += 1) {
      const shelf = box(1.0, 0.08, 0.52, 0x475569, { metalness: 0.52, roughness: 0.34 });
      shelf.position.set(1.55 + col * 0.88, 0.35 + level * 0.58, -1.2);
      racks.add(shelf);
      const crate = box(0.62, 0.34, 0.42, level % 2 ? 0xfb923c : 0xc2410c, { roughness: 0.62 });
      crate.position.set(1.55 + col * 0.88, 0.55 + level * 0.58, -1.2);
      racks.add(crate);
      addEdges(crate, 0x7c2d12, 0.18);
    }
    const postA = box(0.06, 1.95, 0.06, 0x64748b, { metalness: 0.62, roughness: 0.24 });
    const postB = postA.clone();
    postA.position.set(1.08 + col * 0.88, 0.94, -0.9);
    postB.position.set(2.02 + col * 0.88, 0.94, -1.5);
    racks.add(postA, postB);
  }
  world.add(racks);

  const laptopTable = box(1.2, 0.1, 0.82, 0x0f172a, { metalness: 0.42, roughness: 0.25 });
  laptopTable.position.set(-0.4, 0.48, -0.95);
  world.add(laptopTable);
  const laptopBase = box(0.72, 0.04, 0.48, 0x1f2937, { metalness: 0.65, roughness: 0.25 });
  const laptopScreen = box(0.7, 0.48, 0.04, 0x0f172a, { emissive: 0x0284c7, emissiveIntensity: 0.5 });
  laptopBase.position.set(-0.4, 0.57, -0.86);
  laptopScreen.position.set(-0.4, 0.86, -1.1);
  laptopScreen.rotation.x = -0.55;
  world.add(laptopBase, laptopScreen);

  const dev = worker(0xf97316);
  dev.position.set(-0.4, 0.14, -0.18);
  dev.rotation.y = Math.PI;
  world.add(dev);

  const workerA = worker(0xf97316);
  workerA.position.set(-2.8, 0.02, 0.88);
  workerA.rotation.y = 0.8;
  const workerB = worker(0xf97316);
  workerB.position.set(1.15, 0.02, 1.65);
  workerB.rotation.y = -0.9;
  world.add(workerA, workerB);

  const truck = new THREE.Group();
  const cab = box(0.62, 0.5, 0.58, 0xf97316, { roughness: 0.38 });
  const cargo = box(1.22, 0.62, 0.64, 0xffffff, { roughness: 0.35 });
  cab.position.set(2.1, 0.35, 1.82);
  cargo.position.set(2.86, 0.42, 1.82);
  truck.add(cab, cargo);
  for (let i = 0; i < 4; i += 1) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.08, 18), new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.45 }));
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(2.1 + (i > 1 ? 0.76 : 0), 0.08, 1.48 + (i % 2) * 0.68);
    truck.add(wheel);
  }
  const truckLabel = makeLabel('Webovex', '#f97316', 220);
  truckLabel.position.set(2.86, 0.82, 1.46);
  truck.add(truckLabel);
  world.add(truck);

  const techLabels = [
    ['React', -2.05, 1.9, -1.36, '#38bdf8'],
    ['Django', -2.05, 1.64, -1.36, '#16a34a'],
    ['Docker', -2.05, 1.38, -1.36, '#2563eb'],
    ['SSL', -2.05, 1.12, -1.36, '#f97316'],
  ].map(([text, x, y, z, color]) => {
    const label = makeLabel(text, color, 180);
    label.position.set(x, y, z);
    screen.add(label);
    return label;
  });

  const dataDots = [];
  const curves = [
    new THREE.CatmullRomCurve3([new THREE.Vector3(-0.4, 0.8, -0.86), new THREE.Vector3(-1.1, 1.1, -0.9), new THREE.Vector3(-2.0, 1.35, -1.3)]),
    new THREE.CatmullRomCurve3([new THREE.Vector3(-0.2, 0.68, -0.5), new THREE.Vector3(0.8, 0.78, -0.8), new THREE.Vector3(2.1, 1.0, -1.2)]),
    new THREE.CatmullRomCurve3([new THREE.Vector3(0.3, 0.42, 0.5), new THREE.Vector3(1.4, 0.48, 1.25), new THREE.Vector3(2.65, 0.52, 1.7)]),
  ];
  curves.forEach((curve, curveIndex) => {
    world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)), new THREE.LineBasicMaterial({ color: curveIndex === 0 ? 0x38bdf8 : 0xf97316, transparent: true, opacity: 0.45 })));
    for (let i = 0; i < 6; i += 1) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 16), new THREE.MeshBasicMaterial({ color: curveIndex === 0 ? 0x38bdf8 : 0xf97316 }));
      dot.userData.curve = curveIndex;
      dot.userData.offset = i / 6;
      dataDots.push(dot);
      world.add(dot);
    }
  });

  const serviceSprites = services.map((service, index) => {
    const label = makeLabel(service.tag, index % 2 ? '#2563eb' : '#f97316', 190);
    label.position.set(0.6 + Math.cos(index) * 2.3, 2.25 + Math.sin(index * 0.8) * 0.3, 0.4 + Math.sin(index) * 1.4);
    world.add(label);
    return label;
  });

  const resize = () => {
    const { clientWidth, clientHeight } = container;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  };

  const clock = new THREE.Clock();
  let frame = 0;
  const animate = () => {
    const t = clock.getElapsedTime();
    if (!reduceMotion) {
      world.rotation.y = Math.sin(t * 0.18) * 0.04;
      dashboard.position.y = 1.28 + Math.sin(t * 0.8) * 0.025;
      chartBars.forEach((bar, index) => {
        bar.scale.y = 0.88 + Math.sin(t * 1.8 + index) * 0.1;
      });
      boxes.forEach((parcel, index) => {
        parcel.position.y = 0.36 + Math.floor(index / 5) * 0.1 + Math.sin(t * 1.4 + parcel.userData.offset) * 0.03;
        parcel.rotation.y += 0.004;
      });
      [dev, workerA, workerB].forEach((person, index) => {
        person.userData.armL.rotation.x = Math.sin(t * 7 + index) * 0.12;
        person.userData.armR.rotation.x = Math.sin(t * 7.5 + index) * 0.12;
        person.userData.head.rotation.x = Math.sin(t * 1.3 + index) * 0.04;
      });
      dataDots.forEach((dot, index) => {
        const curve = curves[dot.userData.curve];
        dot.position.copy(curve.getPoint((t * (0.16 + dot.userData.curve * 0.03) + dot.userData.offset + index * 0.01) % 1));
      });
      serviceSprites.forEach((sprite, index) => {
        sprite.position.y += Math.sin(t * 1.2 + index) * 0.0015;
        sprite.lookAt(camera.position);
      });
      techLabels.forEach((label) => label.lookAt(camera.position));
      truck.position.x = Math.sin(t * 0.35) * 0.04;
      laptopScreen.material.emissiveIntensity = 0.42 + Math.sin(t * 3) * 0.12;
    }
    renderer.render(scene, camera);
    frame = requestAnimationFrame(animate);
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();
  animate();

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize', resize);
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((material) => material.dispose());
        else obj.material.dispose();
      }
    });
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}

function IsometricScene() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return createScene(ref.current);
  }, []);

  return <div className="iso-scene" ref={ref} aria-label="Webovex 3D technical server factory animation" />;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          <span className="brand-mark">W</span>
          <span>Webovex</span>
        </a>
        <div className="nav-links">
          {navLinks.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Start Project</a>
        <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Start Project</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-copy">
        <span className="eyebrow">Isometric 3D technical studio</span>
        <h1>Webovex builds your software like a live server factory.</h1>
        <p>React interfaces, Django systems, PERN APIs, security, Docker, Nginx, SSL, and cloud deployment move through one clear production pipeline.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Build My Project</a>
          <a className="button ghost" href="#services">See Modules</a>
        </div>
        <div className="proof-strip">
          <span>React</span>
          <span>Django</span>
          <span>Node APIs</span>
          <span>Docker Deploy</span>
        </div>
      </div>
      <IsometricScene />
    </section>
  );
}

function About() {
  return (
    <section className="section split-section" id="about">
      <div>
        <span className="eyebrow">About Webovex</span>
        <h2>Full-stack systems, not plain static pages.</h2>
      </div>
      <div className="copy-panel">
        <p>I'm Subash N, a full-stack developer and system architect from Chennai. Webovex builds secure web apps, Django systems, e-commerce platforms, IT workflow tools, and production deployment paths for growing businesses.</p>
        <div className="pill-row">
          <span>System design</span>
          <span>Secure backend</span>
          <span>Cloud handoff</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-head">
        <span className="eyebrow">Technical modules</span>
        <h2>Every service is one station in the Webovex production floor.</h2>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{service.tag}</strong>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-head">
        <span className="eyebrow">Movement pipeline</span>
        <h2>Idea comes in. Production software goes live.</h2>
      </div>
      <div className="process-line">
        {process.map((step, index) => (
          <article className="process-card" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="eyebrow">Built systems</span>
        <h2>Project dashboards for real business workflows.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="pill-row">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
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
    <section className="section contact-section" id="contact">
      <div className="contact-copy">
        <span className="eyebrow">Start production</span>
        <h2>Send your idea to the Webovex build floor.</h2>
        <p>Share your project goal, deadline, and must-have features. I will reply with a practical next step and stack recommendation.</p>
        <div className="pill-row">
          <span>subashrishid@gmail.com</span>
          <span>9952019436</span>
          <span>Chennai, Tamil Nadu</span>
        </div>
      </div>
      <form className="contact-form" noValidate onSubmit={handleSubmit}>
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
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
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
