import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import emailjs from '@emailjs/browser';

const EJS_SVC = 'service_q9r9259';
const EJS_TPL = 'template_7mtemk4';
const EJS_KEY = 'kZS3jYfnudOKH8as5';
const OWNER_EMAIL = 'subashrishid@gmail.com';

const services = [
  { name: 'React Web Apps', detail: 'Interfaces, dashboards, portals, and product workflows', color: '#5eead4', metric: 'UI' },
  { name: 'Django Systems', detail: 'Python apps, admin flows, RBAC, and secure business logic', color: '#86efac', metric: 'PY' },
  { name: 'PERN Platforms', detail: 'Node APIs, PostgreSQL data models, and production services', color: '#93c5fd', metric: 'API' },
  { name: 'DevOps Launch', detail: 'Docker, Nginx, SSL, CI paths, and deployment handoff', color: '#facc15', metric: 'OPS' },
  { name: 'Security Layer', detail: 'JWT, validation, encryption, headers, and hardening', color: '#fb7185', metric: 'SSL' },
  { name: 'E-Commerce', detail: 'Catalogs, carts, payments, admin panels, and automation', color: '#c084fc', metric: 'PAY' },
];

const projects = [
  {
    title: 'Enterprise Platform',
    type: 'Compliance, renewal and workflow automation',
    value: 'Automates reminders, secure records, team workflows, deployment, and operational visibility.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Nginx', 'JWT', 'AES-256'],
  },
  {
    title: 'Enterprise IT Ticket Tool',
    type: 'Helpdesk and ticket management system',
    value: 'Organizes IT support, role access, file handling, SMTP alerts, and audit-friendly workflows.',
    stack: ['Django', 'Python', 'SQLite', 'Bootstrap', 'Waitress', 'WhiteNoise'],
  },
];

const processSteps = ['Discover', 'Design', 'Build', 'Secure', 'Deploy', 'Support'];
const skills = ['React', 'Node.js', 'Express', 'PostgreSQL', 'Django', 'Python', 'Docker', 'Nginx', 'AWS', 'JWT', 'REST APIs', 'Security'];
const navLinks = [
  ['#hero', 'Home'],
  ['#services', 'Services'],
  ['#process', 'Process'],
  ['#projects', 'Projects'],
  ['#skills', 'Skills'],
  ['#contact', 'Contact'],
];

function makeCanvasLabel(text, color, options = {}) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const dpr = 2;
  const width = options.width || 360;
  const height = options.height || 108;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, width, height);
  ctx.font = `800 ${options.fontSize || 21}px Space Grotesk, Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const labelWidth = Math.min(width - 26, ctx.measureText(text).width + 54);
  const x = (width - labelWidth) / 2;

  ctx.fillStyle = 'rgba(7, 12, 24, 0.84)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, 26, labelWidth, 48, 16);
  ctx.fill();
  ctx.stroke();
  ctx.shadowColor = color;
  ctx.shadowBlur = 18;
  ctx.fillStyle = color;
  ctx.fillText(text, width / 2, 50);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(options.scaleX || 2.1, options.scaleY || 0.64, 1);
  return sprite;
}

function glowMaterial(color, opacity = 0.2) {
  return new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
}

function createRoundedPanel(width, height, color) {
  const group = new THREE.Group();
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, 0.04),
    new THREE.MeshStandardMaterial({
      color: 0x08111f,
      emissive: color,
      emissiveIntensity: 0.08,
      metalness: 0.42,
      roughness: 0.24,
      transparent: true,
      opacity: 0.88,
    })
  );
  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(panel.geometry),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.68 })
  );
  group.add(panel, edge);
  return group;
}

function createServerRack(index, lowPower) {
  const rack = new THREE.Group();
  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(0.72, 2.7, 0.72),
    new THREE.MeshStandardMaterial({
      color: 0x0b1222,
      emissive: index % 2 ? 0x071b2d : 0x160d2a,
      emissiveIntensity: 0.28,
      metalness: 0.62,
      roughness: 0.3,
    })
  );
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(shell.geometry),
    new THREE.LineBasicMaterial({ color: index % 2 ? 0x22d3ee : 0xa78bfa, transparent: true, opacity: 0.52 })
  );
  rack.add(shell, edges);

  const bayCount = lowPower ? 5 : 8;
  rack.userData.lights = [];
  for (let i = 0; i < bayCount; i += 1) {
    const bay = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.16, 0.03),
      new THREE.MeshBasicMaterial({ color: i % 2 ? 0x1e293b : 0x111827, transparent: true, opacity: 0.9 })
    );
    bay.position.set(0, 1.0 - i * 0.27, 0.38);
    rack.add(bay);

    const lightColor = [0x22c55e, 0x38bdf8, 0xfacc15, 0xfb7185][(i + index) % 4];
    const led = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 10, 10),
      new THREE.MeshBasicMaterial({ color: lightColor, transparent: true, opacity: 0.82 })
    );
    led.position.set(-0.22 + (i % 3) * 0.18, 1.0 - i * 0.27, 0.42);
    led.userData.phase = index * 0.7 + i * 0.42;
    rack.userData.lights.push(led);
    rack.add(led);
  }
  return rack;
}

function createDeveloper() {
  const dev = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0xf3b88f, roughness: 0.55 });
  const shirt = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.42, metalness: 0.08 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.5 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.56, 8, 18), shirt);
  body.position.set(0, 0.72, 0);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 22, 22), skin);
  head.position.set(0, 1.2, 0.03);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.205, 18, 18, 0, Math.PI * 2, 0, Math.PI * 0.56), dark);
  hair.position.set(0, 1.29, 0.02);

  const leftArm = new THREE.Group();
  const rightArm = new THREE.Group();
  const armGeo = new THREE.CapsuleGeometry(0.055, 0.52, 6, 12);
  const la = new THREE.Mesh(armGeo, skin);
  const ra = new THREE.Mesh(armGeo, skin);
  la.rotation.z = -0.92;
  ra.rotation.z = 0.92;
  la.position.set(-0.22, 0, 0);
  ra.position.set(0.22, 0, 0);
  leftArm.position.set(-0.15, 0.86, 0.09);
  rightArm.position.set(0.15, 0.86, 0.09);
  leftArm.add(la);
  rightArm.add(ra);

  const chair = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 0.42, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.2, roughness: 0.4 })
  );
  chair.position.set(0, 0.28, -0.1);

  dev.add(chair, body, head, hair, leftArm, rightArm);
  dev.userData.leftArm = leftArm;
  dev.userData.rightArm = rightArm;
  dev.userData.head = head;
  dev.userData.body = body;
  return dev;
}

function createLaptop() {
  const laptop = new THREE.Group();
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.72, roughness: 0.22 });
  const glow = new THREE.MeshBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.55 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.05, 0.58), baseMat);
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.5, 0.04), baseMat);
  const display = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.34), glow);
  const keyboard = new THREE.Mesh(new THREE.PlaneGeometry(0.66, 0.28), new THREE.MeshBasicMaterial({ color: 0x1f2937, transparent: true, opacity: 0.88 }));
  base.position.set(0, 0.66, 0.38);
  screen.position.set(0, 0.94, 0.13);
  screen.rotation.x = -0.52;
  display.position.set(0, 0.95, 0.105);
  display.rotation.x = -0.52;
  keyboard.position.set(0, 0.691, 0.42);
  keyboard.rotation.x = -Math.PI / 2;
  laptop.add(base, screen, display, keyboard);
  laptop.userData.display = display;
  return laptop;
}

function createDataDot(color, offset) {
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 16, 16),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
  );
  dot.userData.offset = offset;
  return dot;
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
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !lowPower, powerPreference: lowPower ? 'low-power' : 'high-performance' });
    } catch (_) {
      fallback?.classList.add('visible');
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.15 : 1.65));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.55, 8.8);

    scene.add(new THREE.AmbientLight(0x9fc5ff, 0.72));
    const key = new THREE.PointLight(0x67e8f9, 5.2, 24);
    const magenta = new THREE.PointLight(0x8b5cf6, 4.8, 24);
    const warm = new THREE.PointLight(0xfacc15, 1.8, 12);
    key.position.set(-3.6, 4, 4.8);
    magenta.position.set(4.2, 2.2, 4.4);
    warm.position.set(0.2, 1.1, 2.8);
    scene.add(key, magenta, warm);

    const room = new THREE.Group();
    scene.add(room);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(9.5, 6.4, 20, 14),
      new THREE.MeshStandardMaterial({ color: 0x07111f, metalness: 0.28, roughness: 0.36, transparent: true, opacity: 0.76 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.05;
    room.add(floor);

    const grid = new THREE.GridHelper(9.4, 20, 0x155e75, 0x1e293b);
    grid.position.y = -0.035;
    grid.material.transparent = true;
    grid.material.opacity = 0.36;
    room.add(grid);

    const racks = [];
    [-3.15, -2.25, 2.25, 3.15].forEach((x, index) => {
      const rack = createServerRack(index, lowPower);
      rack.position.set(x, 1.27, -1.25 - (index % 2) * 0.38);
      rack.rotation.y = x < 0 ? 0.16 : -0.16;
      room.add(rack);
      racks.push(rack);
    });

    const desk = new THREE.Group();
    const table = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.11, 1.0),
      new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.55, roughness: 0.28 })
    );
    table.position.set(0, 0.58, 0.45);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.62, roughness: 0.25 });
    [-0.82, 0.82].forEach((x) => [-0.34, 0.34].forEach((z) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.66, 10), legMat);
      leg.position.set(x, 0.27, z + 0.45);
      desk.add(leg);
    }));
    desk.add(table);

    const laptop = createLaptop();
    const developer = createDeveloper();
    developer.position.set(0, 0, 1.05);
    developer.rotation.y = Math.PI;
    desk.add(laptop, developer);
    room.add(desk);

    const logoCore = new THREE.Group();
    const coreShape = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.72, 2),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x312e81, emissiveIntensity: 0.56, metalness: 0.72, roughness: 0.18 })
    );
    const logoLabel = makeCanvasLabel('WEBOVEX', '#67e8f9', { width: 420, height: 120, scaleX: 2.35, scaleY: 0.68, fontSize: 24 });
    logoLabel.position.set(0, 0.98, 0);
    const wire = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.78, 1),
      new THREE.MeshBasicMaterial({ color: 0x67e8f9, wireframe: true, transparent: true, opacity: 0.42 })
    );
    const halo = new THREE.Mesh(new THREE.SphereGeometry(1.05, 32, 32), glowMaterial(0x67e8f9, 0.08));
    logoCore.add(coreShape, wire, halo, logoLabel);
    logoCore.position.set(0, 2.2, -0.6);
    room.add(logoCore);

    const serviceModules = services.map((service, index) => {
      const color = new THREE.Color(service.color);
      const group = new THREE.Group();
      const panel = createRoundedPanel(0.8, 0.44, color);
      const label = makeCanvasLabel(service.metric, service.color, { width: 220, height: 82, scaleX: 0.98, scaleY: 0.34, fontSize: 20 });
      label.position.z = 0.06;
      group.add(panel, label);
      group.userData = {
        angle: (index / services.length) * Math.PI * 2,
        radius: 2.1 + (index % 2) * 0.24,
        baseY: 2.2 + Math.sin(index) * 0.18,
      };
      room.add(group);
      return group;
    });

    const workflow = new THREE.Group();
    const stepPositions = processSteps.map((_, index) => new THREE.Vector3(-2.85 + index * 1.14, 1.05 + Math.sin(index * 0.8) * 0.24, 1.35 - index * 0.35));
    stepPositions.forEach((position, index) => {
      const color = new THREE.Color(['#67e8f9', '#a78bfa', '#93c5fd', '#fb7185', '#facc15', '#86efac'][index]);
      const node = new THREE.Group();
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.48, 0.28, 0.48),
        new THREE.MeshStandardMaterial({ color: 0x0d1728, emissive: color, emissiveIntensity: 0.16, metalness: 0.55, roughness: 0.24 })
      );
      const edge = new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.78 }));
      const label = makeCanvasLabel(processSteps[index], `#${color.getHexString()}`, { width: 260, height: 86, scaleX: 1.12, scaleY: 0.36, fontSize: 18 });
      label.position.y = 0.38;
      node.add(box, edge, label);
      node.position.copy(position);
      node.userData.baseY = position.y;
      node.userData.phase = index * 0.6;
      workflow.add(node);
    });

    const workflowCurve = new THREE.CatmullRomCurve3(stepPositions);
    workflow.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(workflowCurve.getPoints(90)),
      new THREE.LineBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.42 })
    ));
    const workflowDots = Array.from({ length: lowPower ? 6 : 12 }, (_, index) => {
      const dot = createDataDot(index % 3 === 0 ? 0xfacc15 : 0x67e8f9, index / (lowPower ? 6 : 12));
      workflow.add(dot);
      return dot;
    });
    room.add(workflow);

    const dataCurves = [
      new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.95, 0.35), new THREE.Vector3(-1.2, 1.45, -0.2), new THREE.Vector3(-2.65, 1.6, -0.86)]),
      new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.95, 0.35), new THREE.Vector3(1.2, 1.45, -0.2), new THREE.Vector3(2.65, 1.6, -0.86)]),
      new THREE.CatmullRomCurve3([new THREE.Vector3(0, 1.06, 0.25), new THREE.Vector3(0, 1.75, -0.18), new THREE.Vector3(0, 2.2, -0.6)]),
    ];
    const dataDots = [];
    dataCurves.forEach((curve, curveIndex) => {
      room.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(42)),
        new THREE.LineBasicMaterial({ color: curveIndex === 2 ? 0xa78bfa : 0x67e8f9, transparent: true, opacity: 0.24 })
      ));
      const count = lowPower ? 3 : 6;
      for (let i = 0; i < count; i += 1) {
        const dot = createDataDot(curveIndex === 1 ? 0x86efac : 0x67e8f9, i / count);
        dot.userData.curveIndex = curveIndex;
        room.add(dot);
        dataDots.push(dot);
      }
    });

    const dashboard = new THREE.Group();
    projects.forEach((project, index) => {
      const color = index ? 0x86efac : 0x67e8f9;
      const card = createRoundedPanel(1.72, 0.9, color);
      const label = makeCanvasLabel(project.title, index ? '#86efac' : '#67e8f9', { width: 420, height: 100, scaleX: 1.72, scaleY: 0.44, fontSize: 18 });
      label.position.set(0, 0.12, 0.08);
      card.add(label);
      card.position.set(index ? 1.05 : -1.05, 1.75 - index * 0.2, -0.35 + index * 0.25);
      card.userData.phase = index * 0.9;
      dashboard.add(card);
    });
    room.add(dashboard);

    const starCount = lowPower ? 120 : 260;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 5.8;
      positions[i * 3 + 2] = -3.7 + Math.random() * 5.2;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.022, transparent: true, opacity: 0.5 }));
    scene.add(particles);

    const states = {
      hero: { camera: [0, 1.45, 8.6], look: [0, 1.25, -0.1], room: [0, 0.1, 0], scale: mobile ? 0.78 : 1 },
      services: { camera: [1.3, 1.9, 7.4], look: [0, 1.75, -0.6], room: [-0.15, 0.08, 0], scale: mobile ? 0.76 : 1.04 },
      process: { camera: [-0.55, 1.65, 6.7], look: [0, 1.25, 0.28], room: [-0.05, 0, 0], scale: mobile ? 0.78 : 1.08 },
      projects: { camera: [0.9, 1.95, 7.1], look: [0, 1.7, -0.15], room: [-0.18, 0.02, 0], scale: mobile ? 0.76 : 1.02 },
      architecture: { camera: [0, 1.65, 7.2], look: [0, 1.55, -1.0], room: [0.1, 0, 0], scale: mobile ? 0.74 : 1 },
      skills: { camera: [-1.15, 1.75, 7.6], look: [0, 1.7, -0.72], room: [0.05, 0.02, 0], scale: mobile ? 0.76 : 1 },
      contact: { camera: [0.15, 1.22, 7.8], look: [0, 0.95, 0.48], room: [0, 0, 0], scale: mobile ? 0.8 : 0.96 },
    };
    let current = states.hero;
    let targetLook = new THREE.Vector3(...current.look);

    const updateState = () => {
      const ids = ['hero', 'services', 'process', 'projects', 'architecture', 'skills', 'contact'];
      let best = 'hero';
      let bestScore = -Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerDistance = Math.abs(rect.top + rect.height * 0.42 - window.innerHeight * 0.5);
        const score = -centerDistance;
        if (score > bestScore) {
          bestScore = score;
          best = id;
        }
      });
      current = states[best];
      targetLook = new THREE.Vector3(...current.look);
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      updateState();
    };

    const look = new THREE.Vector3(...current.look);
    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      const t = clock.getElapsedTime();
      camera.position.lerp(new THREE.Vector3(...current.camera), reduceMotion ? 1 : 0.055);
      look.lerp(targetLook, reduceMotion ? 1 : 0.06);
      room.position.lerp(new THREE.Vector3(...current.room), 0.045);
      room.scale.lerp(new THREE.Vector3(current.scale, current.scale, current.scale), 0.045);

      if (!reduceMotion) {
        room.rotation.y = Math.sin(t * 0.18) * 0.035;
        logoCore.rotation.y = t * 0.42;
        logoCore.rotation.x = Math.sin(t * 0.5) * 0.12;
        coreShape.scale.setScalar(1 + Math.sin(t * 2.1) * 0.025);
        laptop.userData.display.material.opacity = 0.48 + Math.sin(t * 3.2) * 0.08;

        developer.userData.leftArm.rotation.x = Math.sin(t * 8.5) * 0.1;
        developer.userData.rightArm.rotation.x = Math.sin(t * 9.2 + 1.4) * 0.1;
        developer.userData.head.rotation.x = -0.14 + Math.sin(t * 1.4) * 0.04;
        developer.userData.body.rotation.z = Math.sin(t * 1.1) * 0.025;

        racks.forEach((rack, rackIndex) => {
          rack.userData.lights.forEach((led) => {
            led.material.opacity = 0.42 + Math.abs(Math.sin(t * (2.4 + rackIndex * 0.12) + led.userData.phase)) * 0.58;
          });
        });

        serviceModules.forEach((module, index) => {
          const angle = module.userData.angle + t * (0.28 + index * 0.008);
          module.position.set(
            Math.cos(angle) * module.userData.radius,
            module.userData.baseY + Math.sin(t * 1.15 + index) * 0.12,
            -0.55 + Math.sin(angle) * module.userData.radius * 0.42
          );
          module.lookAt(camera.position);
        });

        workflow.children.forEach((child) => {
          if (child.userData.baseY !== undefined) child.position.y = child.userData.baseY + Math.sin(t * 1.6 + child.userData.phase) * 0.055;
        });
        workflowDots.forEach((dot) => dot.position.copy(workflowCurve.getPoint((t * 0.13 + dot.userData.offset) % 1)));
        dataDots.forEach((dot, index) => {
          const curve = dataCurves[dot.userData.curveIndex];
          dot.position.copy(curve.getPoint((t * (0.22 + dot.userData.curveIndex * 0.03) + dot.userData.offset + index * 0.01) % 1));
          dot.material.opacity = 0.55 + Math.sin(t * 3 + index) * 0.24;
        });
        dashboard.children.forEach((card, index) => {
          card.position.y = 1.75 - index * 0.2 + Math.sin(t * 1.2 + card.userData.phase) * 0.06;
          card.lookAt(camera.position);
        });
        particles.rotation.y = t * 0.018;
      }

      camera.lookAt(look);
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
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="webgl-layer" ref={mountRef} aria-hidden="true" />
      <div className="webgl-fallback" ref={fallbackRef}>Webovex server room: developer, laptop, services, security, and cloud deployment.</div>
    </>
  );
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
          {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Start a Project</a>
        <button className="menu-btn" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Start a Project</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero panel">
      <div className="hero-copy reveal-card">
        <span className="eyebrow">3D full-stack studio in Chennai</span>
        <h1>Webovex builds live-ready software from laptop to server room.</h1>
        <p className="lead">React interfaces, Django systems, PERN platforms, e-commerce flows, secure APIs, Docker deployment, Nginx, SSL, and production handoff in one technical pipeline.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Start a Project</a>
          <a className="button secondary" href="#process">See Workflow</a>
        </div>
        <div className="status-strip" aria-label="Webovex delivery signals">
          <Metric value="React" label="Frontend" />
          <Metric value="Django" label="Backend" />
          <Metric value="Docker" label="Deploy" />
          <Metric value="SSL" label="Secure" />
        </div>
      </div>
      <div className="scene-callout">
        <span>Live 3D workflow</span>
        <strong>Developer laptop connected to Webovex server room</strong>
        <p>Scroll to follow services, process, projects, and deployment.</p>
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
        <h2>Technical builds for clients who need real systems.</h2>
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
        <span className="eyebrow">Server-room modules</span>
        <h2>Each Webovex service becomes one connected technical unit.</h2>
        <p>The 3D workflow turns your project into interface, API, database, security, deployment, and support modules.</p>
      </div>
      <div className="service-console">
        {services.map((service, index) => (
          <article className="service-card" key={service.name} style={{ '--accent': service.color }}>
            <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.name}</h3>
            <p>{service.detail}</p>
            <strong>{service.metric}</strong>
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
        <span className="eyebrow">Movement pipeline</span>
        <h2>From first idea to a deployed system with support.</h2>
        <p>Data moves from the developer laptop through design, code, security, deployment, and ongoing handoff.</p>
      </div>
      <div className="pipeline-list">
        {processSteps.map((step, index) => (
          <article className="pipeline-card" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
            <p>{[
              'Clarify the business goal, users, content, and release path.',
              'Plan screens, architecture, database models, APIs, and access.',
              'Build frontend, backend, integrations, validation, and workflows.',
              'Harden authentication, data handling, headers, and operational risks.',
              'Package, deploy, verify DNS/SSL, and prepare production handoff.',
              'Support improvements, bug fixes, scaling, and future modules.',
            ][index]}</p>
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
        <span className="eyebrow">Featured systems</span>
        <h2>Project dashboards inside the Webovex server room.</h2>
        <p>These systems show how Webovex turns technical stacks into practical business workflows.</p>
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

function Architecture() {
  return (
    <section id="architecture" className="panel split-panel">
      <div>
        <span className="eyebrow">Architecture map</span>
        <h2>Every build connects UI, API, data, security, and deployment.</h2>
      </div>
      <div className="architecture-card">
        {['Client UI', 'API Layer', 'Database', 'Security', 'Cloud Deploy'].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = useMemo(() => [
    ['Frontend', ['React', 'HTML5', 'CSS3', 'JavaScript']],
    ['Backend', ['Node.js', 'Express', 'Django', 'Python']],
    ['Data', ['PostgreSQL', 'SQLite', 'REST APIs']],
    ['Launch', ['Docker', 'Nginx', 'AWS', 'SSL', 'JWT']],
  ], []);

  return (
    <section id="skills" className="panel compact-panel">
      <span className="eyebrow">Technical stack</span>
      <h2>Production coverage from screen to cloud.</h2>
      <div className="skills-board">
        {skillGroups.map(([group, items]) => (
          <article className="skill-group" key={group}>
            <strong>{group}</strong>
            <div className="skills-row">
              {items.map((skill) => <span key={skill}>{skill}</span>)}
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
    <section id="contact" className="panel contact-panel">
      <div className="contact-copy">
        <span className="eyebrow">Project inquiry</span>
        <h2>Send your idea into the Webovex build room.</h2>
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
        <Process />
        <Projects />
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
