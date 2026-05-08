"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FormEvent, MouseEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full Stack Development",
    kicker: "PERN / Next.js / APIs",
    copy: "End-to-end product engineering across React interfaces, Node services, PostgreSQL data models, and deployment-ready architecture.",
    tags: ["React", "Node", "PostgreSQL"],
  },
  {
    title: "AI Systems",
    kicker: "Copilots / Agents / RAG",
    copy: "Practical AI layers for internal tools, automated decisions, support workflows, retrieval systems, and intelligent product features.",
    tags: ["LLM", "Automation", "Data"],
  },
  {
    title: "Enterprise Apps",
    kicker: "Operations / RBAC / Audit",
    copy: "Secure business platforms with role logic, dashboards, approval flows, document handling, reporting, and long-term maintainability.",
    tags: ["RBAC", "Dashboards", "Audit"],
  },
  {
    title: "Docker & DevOps",
    kicker: "Containers / CI / Release",
    copy: "Containerized services, repeatable environments, deployment pipelines, runtime observability, and production launch discipline.",
    tags: ["Docker", "CI/CD", "Deploy"],
  },
  {
    title: "Cloud Infrastructure",
    kicker: "Scale / Resilience / Ops",
    copy: "Cloud-ready systems designed for uptime, secure configuration, backups, network boundaries, and measurable performance.",
    tags: ["Cloud", "Infra", "Scale"],
  },
  {
    title: "API Engineering",
    kicker: "REST / Auth / Contracts",
    copy: "Stable API systems with clear contracts, validation, authentication, rate-aware patterns, integrations, and backend orchestration.",
    tags: ["REST", "JWT", "Integrations"],
  },
  {
    title: "SaaS Platforms",
    kicker: "Multi-tenant / Product Core",
    copy: "SaaS foundations with tenant-aware data design, admin surfaces, subscription-ready flows, usage paths, and scalable modules.",
    tags: ["SaaS", "Tenancy", "Admin"],
  },
  {
    title: "Authentication",
    kicker: "JWT / Sessions / Access",
    copy: "Secure identity flows with JWT, session control, RBAC, password recovery, protected routes, and audit-friendly access design.",
    tags: ["JWT", "Sessions", "Security"],
  },
  {
    title: "UI/UX Engineering",
    kicker: "Interfaces / Motion / Systems",
    copy: "Fast, clear product interfaces with design systems, motion restraint, accessibility, responsive layouts, and conversion-aware flows.",
    tags: ["UX", "Motion", "Design"],
  },
  {
    title: "Automation Systems",
    kicker: "Workflows / Alerts / Logic",
    copy: "Automation for reminders, approvals, notifications, data movement, scheduled work, and operations that should not depend on memory.",
    tags: ["Workflows", "Alerts", "Ops"],
  },
];

const technologies = [
  ["React", "Interactive product interfaces"],
  ["Next.js", "App Router and static delivery"],
  ["Node.js", "Service logic and backend APIs"],
  ["PostgreSQL", "Relational data architecture"],
  ["MongoDB", "Flexible document workloads"],
  ["Docker", "Containerized environments"],
  ["TailwindCSS", "Composable visual systems"],
  ["TypeScript", "Typed product engineering"],
  ["Three.js", "Cinematic WebGL scenes"],
  ["GSAP", "Scroll and timeline motion"],
  ["Framer Motion", "Interface transitions"],
  ["JWT", "Secure authentication layers"],
  ["Cloud Infrastructure", "Deployment and scale"],
];

const projects = [
  ["AI Platforms", "Copilots, retrieval workflows, prompt orchestration, and decision systems for high-signal operations."],
  ["Enterprise Dashboards", "Command surfaces with analytics, approvals, records, alerts, and role-aware visibility."],
  ["SaaS Systems", "Multi-tenant product foundations with subscriptions, usage paths, and scalable data models."],
  ["Secure Authentication", "JWT, session logic, RBAC, protected routes, and audit-ready identity flows."],
  ["Cloud Applications", "Containerized services, resilient infrastructure, deployment pipelines, and cloud automation."],
  ["Admin Dashboards", "Precise internal tools for teams that need speed, clarity, permissions, and operational confidence."],
];

const aboutSignals = [
  "PERN Stack",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Authentication Systems",
  "AI Systems",
  "Enterprise Applications",
  "Cloud Infrastructure",
  "SaaS Platforms",
  "API Engineering",
  "Automation Systems",
];

const proofPoints = [
  ["Backend Architecture", "PostgreSQL schemas, API contracts, queue-ready workflows, and services designed to evolve cleanly."],
  ["Security Discipline", "Authentication, RBAC, validation, protected routes, and operational safeguards built into the product layer."],
  ["Cloud Readiness", "Dockerized apps, environment separation, deployment pipelines, observability, backups, and release hygiene."],
  ["AI Enablement", "AI systems that support real workflows: copilots, summaries, automation, triage, and retrieval-backed answers."],
];

const cameraPath = [
  new THREE.Vector3(-0.85, 1.38, 9.4),
  new THREE.Vector3(1.05, 1.92, 5.6),
  new THREE.Vector3(0.72, 1.7, 1.9),
  new THREE.Vector3(1.45, 2.08, -1.55),
  new THREE.Vector3(0.58, 1.88, -5.2),
  new THREE.Vector3(1.65, 1.52, -8.95),
];

const lookPath = [
  new THREE.Vector3(2.18, 1.55, 6.1),
  new THREE.Vector3(2.05, 1.78, 2.6),
  new THREE.Vector3(2.2, 1.7, -0.9),
  new THREE.Vector3(2.35, 1.86, -3.55),
  new THREE.Vector3(2.05, 1.72, -6.55),
  new THREE.Vector3(2.32, 1.45, -10.6),
];

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.88,
      easing: (t) => 1 - Math.pow(1 - t, 2.6),
      smoothWheel: true,
      wheelMultiplier: 0.92,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function usePageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      frame = 0;
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return progress;
}

function usePointerDepth() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return pointer;
}

function CinematicRig({ progress, pointer }: { progress: number; pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const next = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const eased = THREE.MathUtils.smoothstep(progress, 0, 1);
    const scaled = eased * (cameraPath.length - 1);
    const index = Math.min(cameraPath.length - 2, Math.floor(scaled));
    const local = scaled - index;

    next.lerpVectors(cameraPath[index], cameraPath[index + 1], local);
    target.lerpVectors(lookPath[index], lookPath[index + 1], local);
    next.x += pointer.current.x * 0.42;
    next.y -= pointer.current.y * 0.28;
    camera.position.lerp(next, 1 - Math.pow(0.001, delta));
    camera.lookAt(target.x + pointer.current.x * 0.28, target.y - pointer.current.y * 0.12, target.z);
  });

  return null;
}

const hologramVertex = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    float wave = sin((p.x * 2.1 + p.y * 3.8) + uTime * 1.6);
    p.z += wave * 0.14;
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const hologramFragment = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    float scan = smoothstep(0.035, 0.0, abs(sin(vUv.y * 86.0 + uTime * 3.0)));
    float gridX = smoothstep(0.018, 0.0, abs(fract(vUv.x * 14.0) - 0.5));
    float gridY = smoothstep(0.018, 0.0, abs(fract(vUv.y * 9.0) - 0.5));
    float edge = smoothstep(0.52, 0.16, distance(vUv, vec2(0.5)));
    vec3 color = mix(uColorA, uColorB, vUv.x + vWave * 0.08);
    float alpha = edge * 0.2 + scan * 0.35 + (gridX + gridY) * 0.055;
    gl_FragColor = vec4(color, alpha);
  }
`;

function HolographicMembrane({ progress }: { progress: number }) {
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#36d9ff") },
      uColorB: { value: new THREE.Color("#9c7cff") },
    }),
    [],
  );

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
  });

  return (
    <group position={[0, 1.9, -2.8]} rotation={[0.14, -0.22 + progress * 0.26, 0.02]}>
      <mesh>
        <planeGeometry args={[8.4, 4.2, 68, 30]} />
        <shaderMaterial
          ref={material}
          uniforms={uniforms}
          vertexShader={hologramVertex}
          fragmentShader={hologramFragment}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

const particleVertex = `
  uniform float uTime;
  attribute float aScale;
  varying float vScale;
  void main() {
    vScale = aScale;
    vec3 p = position;
    p.y += sin(uTime * 0.7 + p.x * 0.35) * 0.18;
    p.x += cos(uTime * 0.45 + p.z * 0.22) * 0.12;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (1.35 + aScale * 4.6) * (18.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const particleFragment = `
  varying float vScale;
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float glow = smoothstep(0.48, 0.0, d);
    vec3 color = mix(vec3(0.22, 0.84, 1.0), vec3(0.62, 0.38, 1.0), vScale);
    gl_FragColor = vec4(color, glow * 0.58);
  }
`;

function ParticleField({ progress }: { progress: number }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const particleCount = 820;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 4 + Math.random() * 10;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.2) * 7;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 2;
      scales[i] = Math.random();
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
    if (points.current) {
      points.current.rotation.y += delta * 0.012;
      points.current.rotation.z = progress * 0.1;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MetallicArchitecture({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const towers = useMemo(
    () =>
      Array.from({ length: 11 }, (_, index) => ({
        x: Math.cos(index * 0.74) * (2.6 + (index % 5) * 0.58),
        z: Math.sin(index * 0.74) * (2.8 + (index % 4) * 0.62) - 1.5,
        h: 0.8 + (index % 6) * 0.34,
        r: index * 0.23,
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.018;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.045;
  });

  return (
    <group ref={group} rotation={[0, progress * 0.7, 0]}>
      <mesh position={[0, -0.08, -1.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[8.8, 72]} />
        <meshPhysicalMaterial color="#07080d" metalness={0.82} roughness={0.3} clearcoat={0.45} />
      </mesh>
      <gridHelper args={[20, 28, "#2bd9ff", "#181d31"]} position={[0, 0.01, -1.4]} />
      {towers.map((tower, index) => (
        <mesh key={index} position={[tower.x, tower.h / 2, tower.z]} rotation={[0, tower.r, 0]}>
          <boxGeometry args={[0.16 + (index % 3) * 0.08, tower.h, 0.16 + (index % 4) * 0.06]} />
          <meshPhysicalMaterial
            color={index % 2 ? "#1a2238" : "#11131e"}
            emissive={index % 3 === 0 ? "#143a55" : "#140f2a"}
            emissiveIntensity={0.18}
            metalness={0.84}
            roughness={0.24}
            clearcoat={0.6}
          />
        </mesh>
      ))}
      <mesh position={[0, 1.78, -1.4]} rotation={[1.18, 0.14, progress * 0.9]}>
        <torusKnotGeometry args={[1.16, 0.045, 112, 8]} />
        <meshPhysicalMaterial color="#cfd9e9" emissive="#1bbfff" emissiveIntensity={0.28} metalness={0.9} roughness={0.18} />
      </mesh>
    </group>
  );
}

function NeuralConstellation({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      technologies.map(([tech], index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        const band = index % 3;
        return {
          tech,
          position: new THREE.Vector3(Math.cos(angle) * (2 + band * 0.72), 1.15 + Math.sin(index * 1.7) * 1.05, Math.sin(angle) * (2 + band * 0.72) - 2.2),
          color: index % 3 === 0 ? "#2bd9ff" : index % 3 === 1 ? "#a886ff" : "#f6f8ff",
        };
      }),
    [],
  );

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    nodes.forEach((node, index) => {
      const next = nodes[(index + 3) % nodes.length];
      positions.push(node.position.x, node.position.y, node.position.z, next.position.x, next.position.y, next.position.z);
      if (index % 2 === 0) {
        const cross = nodes[(index + 6) % nodes.length];
        positions.push(node.position.x, node.position.y, node.position.z, cross.position.x, cross.position.y, cross.position.z);
      }
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.04;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.07 + progress * 0.1;
  });

  return (
    <group ref={group} position={[0, 2.2, -3.2]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#65dcff" transparent opacity={0.13} blending={THREE.AdditiveBlending} />
      </lineSegments>
      {nodes.map((node, index) => (
        <mesh key={node.tech} position={node.position}>
          <sphereGeometry args={[0.055 + (index % 4) * 0.012, 16, 10]} />
          <meshPhysicalMaterial color={node.color} emissive={node.color} emissiveIntensity={0.72} metalness={0.48} roughness={0.24} />
        </mesh>
      ))}
    </group>
  );
}

function LightBeams() {
  const beams = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!beams.current) return;
    beams.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    beams.current.children.forEach((child, index) => {
      child.scale.y = 1 + Math.sin(state.clock.elapsedTime * 1.1 + index) * 0.08;
    });
  });

  return (
    <group ref={beams} position={[0, 1.7, -2.4]}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} position={[(index - 3) * 0.72, 0.7, -index * 0.2]} rotation={[0.42, 0.2 + index * 0.04, 0.12]}>
          <cylinderGeometry args={[0.008, 0.09, 4.4, 12, 1, true]} />
          <meshBasicMaterial color={index % 2 ? "#8665ff" : "#2bd9ff"} transparent opacity={0.07} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function makeHelixPoint(index: number, phase = 0) {
  const progress = index / 190;
  const z = THREE.MathUtils.lerp(7.8, -10.6, progress);
  const angle = progress * Math.PI * 15.5 + phase;
  const radius = 0.82 + Math.sin(progress * Math.PI * 3.4) * 0.12;
  return new THREE.Vector3(Math.cos(angle) * radius + 2.15, 1.62 + Math.sin(angle) * 0.58, z);
}

function DataHelixStrands() {
  const group = useRef<THREE.Group>(null);
  const curves = useMemo(() => {
    const strandA = Array.from({ length: 191 }, (_, index) => makeHelixPoint(index, 0));
    const strandB = Array.from({ length: 191 }, (_, index) => makeHelixPoint(index, Math.PI));
    const auraA = Array.from({ length: 191 }, (_, index) => makeHelixPoint(index, 0.24).multiply(new THREE.Vector3(1.08, 1.02, 1)));
    const auraB = Array.from({ length: 191 }, (_, index) => makeHelixPoint(index, Math.PI - 0.24).multiply(new THREE.Vector3(1.08, 1.02, 1)));
    return {
      strandA: new THREE.CatmullRomCurve3(strandA),
      strandB: new THREE.CatmullRomCurve3(strandB),
      auraA: new THREE.CatmullRomCurve3(auraA),
      auraB: new THREE.CatmullRomCurve3(auraB),
    };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.16) * 0.03;
    group.current.rotation.y += delta * 0.032;
  });

  return (
    <group ref={group}>
      <mesh>
        <tubeGeometry args={[curves.strandA, 260, 0.028, 12, false]} />
        <meshBasicMaterial color="#f8fbff" transparent opacity={0.42} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curves.strandB, 260, 0.028, 12, false]} />
        <meshBasicMaterial color="#2bd9ff" transparent opacity={0.42} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curves.auraA, 220, 0.09, 10, false]} />
        <meshBasicMaterial color="#2bd9ff" transparent opacity={0.045} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh>
        <tubeGeometry args={[curves.auraB, 220, 0.085, 10, false]} />
        <meshBasicMaterial color="#9c7cff" transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function DataHelixRungs() {
  const group = useRef<THREE.Group>(null);
  const rungs = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => {
        const pointIndex = 6 + index * 4;
        return {
          a: makeHelixPoint(pointIndex, 0),
          b: makeHelixPoint(pointIndex, Math.PI),
          color: index % 3 === 0 ? "#f8fbff" : index % 2 ? "#9c7cff" : "#2bd9ff",
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      const material = "material" in child ? (child.material as THREE.Material | THREE.Material[]) : null;
      if (material && !Array.isArray(material)) {
        material.opacity = 0.12 + Math.max(0, Math.sin(state.clock.elapsedTime * 1.35 + index * 0.32)) * 0.26;
      }
    });
  });

  return (
    <group ref={group}>
      {rungs.map((rung, index) => (
        <mesh key={index}>
          <tubeGeometry args={[new THREE.CatmullRomCurve3([rung.a, rung.b]), 2, index % 5 === 0 ? 0.015 : 0.009, 6, false]} />
          <meshBasicMaterial color={rung.color} transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function HelixNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 72 }, (_, index) => {
        const pointIndex = 2 + Math.floor(index * 2.6);
        const phase = index % 2 === 0 ? 0 : Math.PI;
        return {
          position: makeHelixPoint(pointIndex, phase),
          scale: index % 7 === 0 ? 0.055 : 0.032,
          color: index % 5 === 0 ? "#f8fbff" : index % 3 === 0 ? "#9c7cff" : "#2bd9ff",
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      child.scale.setScalar(0.8 + Math.sin(state.clock.elapsedTime * 1.9 + index * 0.4) * 0.18);
    });
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[node.scale, 16, 10]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.76} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function HelixDataPackets() {
  const group = useRef<THREE.Group>(null);
  const packets = useMemo(() => Array.from({ length: 38 }, (_, index) => ({ offset: index / 38, lane: index % 2 === 0 ? 0 : Math.PI })), []);
  const temp = useMemo(() => new THREE.Vector3(), []);
  const ahead = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      const packet = packets[index];
      const t = (state.clock.elapsedTime * (0.035 + (index % 4) * 0.006) + packet.offset) % 1;
      const pointIndex = Math.floor(t * 190);
      const nextIndex = Math.min(190, pointIndex + 2);
      temp.copy(makeHelixPoint(pointIndex, packet.lane));
      ahead.copy(makeHelixPoint(nextIndex, packet.lane));
      child.position.copy(temp);
      child.lookAt(ahead);
      child.scale.setScalar(0.82 + Math.sin(state.clock.elapsedTime * 3 + index) * 0.18);
    });
  });

  return (
    <group ref={group}>
      {packets.map((packet, index) => (
        <group key={index}>
          <mesh>
            <sphereGeometry args={[index % 6 === 0 ? 0.07 : 0.04, 16, 10]} />
            <meshBasicMaterial color={index % 4 === 0 ? "#f8fbff" : packet.lane === 0 ? "#2bd9ff" : "#9c7cff"} transparent opacity={0.86} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
          <mesh position={[0, 0, 0.14]}>
            <coneGeometry args={[0.026, 0.2, 10]} />
            <meshBasicMaterial color={packet.lane === 0 ? "#2bd9ff" : "#9c7cff"} transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HelixAtmosphere() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 520;
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const spread = 6.8;
      positions[i * 3] = 1.9 + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = 1.2 + (Math.random() - 0.5) * 5.2;
      positions[i * 3 + 2] = THREE.MathUtils.lerp(8, -10.5, Math.random());
      scales[i] = Math.random();
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    if (points.current) points.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DataSignalJourney({ progress }: { progress: number }) {
  const journey = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!journey.current) return;
    journey.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.035;
    journey.current.rotation.y = THREE.MathUtils.lerp(-0.15, 0.2, progress);
    journey.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.025;
  });

  return (
    <group ref={journey} position={[0.15, 0, 0]}>
      <HelixAtmosphere />
      <DataHelixStrands />
      <DataHelixRungs />
      <HelixNodes />
      <HelixDataPackets />
    </group>
  );
}

function WebGLUniverse({ progress }: { progress: number }) {
  const pointer = usePointerDepth();
  const reduceMotion = useReducedMotion();

  return (
    <div className="webgl-universe" aria-hidden="true">
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 1.3, 8.6], fov: 42, near: 0.1, far: 90 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <color attach="background" args={["#03040a"]} />
        <fogExp2 attach="fog" args={["#060816", 0.052]} />
        <CinematicRig progress={progress} pointer={pointer} />
        <ambientLight intensity={0.14} />
        <hemisphereLight args={["#9fe8ff", "#090412", 0.34]} />
        <pointLight color="#2bd9ff" intensity={24} distance={22} position={[3.4, 4.2, 2.8]} />
        <pointLight color="#9c7cff" intensity={18} distance={20} position={[-4.6, 3.2, -1.8]} />
        <spotLight color="#f7f8ff" intensity={96} distance={32} angle={0.38} penumbra={0.78} position={[0, 7.5, 4.8]} />
        <DataSignalJourney progress={progress} />
      </Canvas>
    </div>
  );
}

function Loader() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 18 + 8);
      setProgress(Math.round(value));
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setReady(true), 520);
      }
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loader"
      initial={false}
      animate={ready ? { opacity: 0, visibility: "hidden" } : { opacity: 1, visibility: "visible" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader-grid" />
      <motion.div className="loader-core" initial={{ scale: 0.86, filter: "blur(10px)" }} animate={{ scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.2 }}>
        <span className="boot-label">WEBOVEX OS / INITIALIZING</span>
        <strong>WEBOVEX</strong>
        <div className="loader-orbit">
          {Array.from({ length: 28 }, (_, index) => (
            <i key={index} style={{ transform: `rotate(${index * 12.85}deg) translateX(${92 + (index % 5) * 9}px)` }} />
          ))}
        </div>
        <div className="loader-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
        <em>{progress}% neural atmosphere online</em>
      </motion.div>
    </motion.div>
  );
}

function MagneticButton({ children, href }: { children: ReactNode; href: string }) {
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
      y: (y - rect.height / 2) * 0.2,
      duration: 0.55,
      ease: "elastic.out(1, 0.36)",
    });
  };

  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.75, ease: "elastic.out(1, 0.36)" });
  };

  return (
    <a className="magnetic-button" href={href} ref={ref} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </a>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (time: number) => {
      const p = Math.min(1, (time - start) / 1400);
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(value * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const output = value % 1 === 0 ? Math.round(current).toString() : current.toFixed(1);
  return <span ref={ref}>{output}{suffix}</span>;
}

function SectionShell({ eyebrow, title, copy, children, id }: { eyebrow: string; title: string; copy: string; children?: ReactNode; id: string }) {
  return (
    <section className="cinematic-section" id={id}>
      <div className="section-copy reveal-block">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      {children}
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    node.style.setProperty("--mx", `${x}px`);
    node.style.setProperty("--my", `${y}px`);
    gsap.to(node, {
      rotateX: (0.5 - y / rect.height) * 4,
      rotateY: (x / rect.width - 0.5) * 5,
      y: -4,
      duration: 0.38,
      ease: "power3.out",
    });
  };

  const leave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: "power3.out" });
  };

  return (
    <article className="service-card reveal-block" ref={ref} onMouseMove={move} onMouseLeave={leave}>
      <div className="service-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <em>{service.kicker}</em>
      </div>
      <h3>{service.title}</h3>
      <p>{service.copy}</p>
      <div className="service-tags">
        {service.tags.map((tag) => <small key={tag}>{tag}</small>)}
      </div>
    </article>
  );
}

function HorizontalShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const travel = Math.max(1, ref.current.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setShift(window.innerWidth > 760 ? progress * -54 : 0);
      frame = 0;
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="showcase" id="showcase" ref={ref}>
      <div className="showcase-sticky">
        <div className="section-copy compact">
          <span className="eyebrow">PROJECT SHOWCASE</span>
          <h2>Cinematic case studies in motion.</h2>
        </div>
        <motion.div className="project-track" style={{ transform: `translate3d(${shift}%, 0, 0)` }}>
          {projects.map(([title, copy], index) => (
            <article className="project-scene" key={title}>
              <span>SCENE {String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="project-ui" aria-hidden="true">
                <i />
                <i />
                <i />
                <strong />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactCommandCenter() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4200);
    event.currentTarget.reset();
  };

  return (
    <section className="contact-command cinematic-section" id="contact">
      <div className="section-copy reveal-block">
        <span className="eyebrow">CONTACT COMMAND CENTER</span>
        <h2>Start the next build.</h2>
        <p>Send a signal for AI systems, enterprise applications, SaaS platforms, cloud infrastructure, or immersive product experiences.</p>
      </div>
      <form className="command-form reveal-block" onSubmit={submit}>
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
        <label>
          <span>Mission Type</span>
          <select name="mission" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>AI Platform</option>
            <option>Enterprise Software</option>
            <option>SaaS System</option>
            <option>Cloud Infrastructure</option>
            <option>Immersive Web Experience</option>
          </select>
        </label>
        <label className="wide">
          <span>Message</span>
          <textarea name="message" required placeholder="Describe the future you want engineered." />
        </label>
        <button className="command-submit" type="submit">Launch Signal</button>
        {sent && <div className="success-pulse">Signal received. Webovex will respond soon.</div>}
      </form>
      <div className="contact-lines">
        <a href="mailto:subashrishid@gmail.com">subashrishid@gmail.com</a>
        <a href="tel:+919952019436">+91 99520 19436</a>
        <span>Chennai / Global Delivery</span>
      </div>
    </section>
  );
}

function useGsapReveals() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 34, autoAlpha: 0, filter: "blur(8px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 82%" },
          },
        );
      });
    });

    return () => context.revert();
  }, []);
}

export default function Home() {
  const progress = usePageProgress();
  useLenis();
  useGsapReveals();

  return (
    <>
      <Loader />
      <WebGLUniverse progress={progress} />
      <nav className="topbar">
        <a className="brand" href="#hero" aria-label="Webovex home">
          <span>WX</span>
          <strong>WEBOVEX</strong>
        </a>
        <div>
          <a href="#services">Services</a>
          <a href="#tech">Tech</a>
          <a href="#showcase">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main>
        <section className="hero" id="hero">
          <div className="hero-depth" />
          <div className="hero-copy">
            <span className="eyebrow">AI / CLOUD / ENTERPRISE / IMMERSIVE DIGITAL EXPERIENCES</span>
            <h1>WEBOVEX</h1>
            <p>ENGINEERING DIGITAL FUTURES</p>
            <div className="hero-actions">
              <MagneticButton href="#services">Enter Universe</MagneticButton>
              <MagneticButton href="#contact">Start Mission</MagneticButton>
            </div>
          </div>
          <div className="hero-hud">
            <span>Volumetric signal</span>
            <strong>{Math.round(progress * 100).toString().padStart(2, "0")}%</strong>
          </div>
        </section>

        <SectionShell
          id="about"
          eyebrow="ABOUT EXPERIENCE"
          title="Future-ready software architecture for AI, cloud, and enterprise systems."
          copy="Webovex engineers scalable systems across PERN, React, Node.js, PostgreSQL, Docker, authentication, AI systems, enterprise applications, cloud infrastructure, SaaS platforms, API engineering, and automation."
        >
          <div className="about-matrix">
            {aboutSignals.map((signal, index) => (
              <span className="reveal-block" style={{ "--delay": `${index * 0.035}s` } as React.CSSProperties} key={signal}>
                {signal}
              </span>
            ))}
          </div>
          <div className="proof-grid">
            {proofPoints.map(([title, copy]) => (
              <article className="proof-card reveal-block" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="stat-grid reveal-block">
            <article><CountUp value={10} suffix="+" /><p>service worlds</p></article>
            <article><CountUp value={13} /><p>core technologies</p></article>
            <article><CountUp value={99.9} suffix="%" /><p>reliability mindset</p></article>
          </div>
        </SectionShell>

        <SectionShell
          id="services"
          eyebrow="ENGINEERING SERVICES"
          title="Enterprise systems, engineered with precision."
          copy="A focused build stack for companies that need secure applications, intelligent automation, cloud deployment, and interfaces that feel fast without becoming noisy."
        >
          <div className="service-grid">
            {services.map((service, index) => <ServiceCard service={service} index={index} key={service.title} />)}
          </div>
        </SectionShell>

        <SectionShell
          id="tech"
          eyebrow="TECH STACK"
          title="Production stack for scalable platforms."
          copy="A modern stack for typed frontend engineering, API services, containerized deployments, secure authentication, and immersive interface systems."
        >
          <div className="tech-orbit-list reveal-block">
            {technologies.map(([tech, copy], index) => (
              <span style={{ "--delay": `${index * 0.04}s` } as React.CSSProperties} key={tech}>
                <strong>{tech}</strong>
                <em>{copy}</em>
              </span>
            ))}
          </div>
        </SectionShell>

        <HorizontalShowcase />

        <SectionShell
          id="why"
          eyebrow="WHY WEBOVEX"
          title="Built for scale, security, and intelligent automation."
          copy="Webovex blends premium engineering with resilient architecture: performance, secure systems, intelligent automation, enterprise reliability, and software that can evolve without losing clarity."
        >
          <div className="why-grid">
            {["Scalable architecture", "Performance-first interfaces", "Secure access logic", "Cloud deployment discipline", "Automation-ready workflows", "Premium UX engineering"].map((item) => (
              <article className="why-card reveal-block" key={item}>
                <span />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </SectionShell>

        <ContactCommandCenter />
      </main>
      <footer className="footer">
        <strong>WEBOVEX</strong>
        <span>Engineering digital futures.</span>
        <span>Copyright 2026 Subash N - Webovex</span>
      </footer>
    </>
  );
}
