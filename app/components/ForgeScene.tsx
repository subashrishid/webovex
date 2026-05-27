"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProps = {
  progress: number;
};

// Keep camera/look stops to maintain the smooth scroll-linked parallax animations
const cameraStops = [
  new THREE.Vector3(-2.0, 1.2, 7.0),
  new THREE.Vector3(1.2, 1.5, 4.5),
  new THREE.Vector3(2.0, 1.0, 1.5),
  new THREE.Vector3(-1.0, 1.8, -2.0),
  new THREE.Vector3(1.5, 1.2, -5.0),
  new THREE.Vector3(-1.5, 1.0, -8.0),
];

const lookStops = [
  new THREE.Vector3(0.0, 0.5, 1.5),
  new THREE.Vector3(0.0, 0.5, 0.0),
  new THREE.Vector3(0.0, 0.5, -1.5),
  new THREE.Vector3(0.0, 0.5, -3.5),
  new THREE.Vector3(0.0, 0.5, -5.5),
  new THREE.Vector3(0.0, 0.5, -7.5),
];

/* ── SHADERS FOR PREMIUM GLOW ── */
const glowVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const glowFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  uniform vec3 uColor;
  uniform float uGlowPower;
  
  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    float intensity = pow(1.0 - max(dot(normal, viewDir), 0.0), uGlowPower);
    gl_FragColor = vec4(uColor, intensity);
  }
`;

const sparkVertex = `
  uniform float uTime;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aSize;
  varying float vLife;
  varying float vSeed;

  void main() {
    vSeed = aSeed;
    float life = fract(uTime * aSpeed + aSeed);
    vLife = 1.0 - life;
    vec3 p = position;
    p.x += sin(uTime * 0.15 + aSeed * 10.0) * 1.5;
    p.y += life * 4.0 - 2.0;
    p.z += cos(uTime * 0.15 + aSeed * 10.0) * 1.5;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (aSize * (1.0 - life) + 0.8) * (20.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const sparkFragment = `
  varying float vLife;
  varying float vSeed;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float core = smoothstep(0.5, 0.0, d);
    // Apple Siri/AI colors (violet/blue/indigo)
    vec3 indigo = vec3(0.51, 0.33, 1.0);
    vec3 cyan = vec3(0.18, 0.72, 1.0);
    vec3 color = mix(indigo, cyan, vSeed);
    gl_FragColor = vec4(color, core * vLife * 0.6);
  }
`;

const dustVertex = `
  uniform float uTime;
  attribute float aScale;
  varying float vScale;

  void main() {
    vScale = aScale;
    vec3 p = position;
    p.y += sin(uTime * 0.18 + p.x * 0.15 + p.z * 0.1) * 0.3;
    p.x += cos(uTime * 0.1 + p.z * 0.1) * 0.15;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (0.5 + aScale * 2.0) * (15.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const dustFragment = `
  varying float vScale;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float haze = smoothstep(0.5, 0.0, d);
    vec3 silver = vec3(0.85, 0.88, 0.95);
    gl_FragColor = vec4(silver, haze * (0.08 + vScale * 0.15));
  }
`;

function usePointer() {
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

function CameraRig({ progress }: SceneProps) {
  const pointer = usePointer();
  const { camera } = useThree();
  const next = useMemo(() => new THREE.Vector3(), []);
  const target = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const smooth = THREE.MathUtils.smoothstep(progress, 0, 1);
    const scaled = smooth * (cameraStops.length - 1);
    const index = Math.min(cameraStops.length - 2, Math.floor(scaled));
    const local = scaled - index;

    next.lerpVectors(cameraStops[index], cameraStops[index + 1], local);
    target.lerpVectors(lookStops[index], lookStops[index + 1], local);
    
    // Add subtle pointer parallax
    next.x += pointer.current.x * 0.25;
    next.y -= pointer.current.y * 0.15;

    camera.position.lerp(next, 1 - Math.pow(0.001, delta));
    camera.lookAt(target.x + pointer.current.x * 0.1, target.y - pointer.current.y * 0.05, target.z);
  });

  return null;
}

/* ── ABSTRACT FLOATING QUANTUM PROCESSOR (Webovex Core) ── */
function WebovexCore({ progress }: SceneProps) {
  const innerRing = useRef<THREE.Mesh>(null);
  const middleRing = useRef<THREE.Mesh>(null);
  const outerRing = useRef<THREE.Mesh>(null);
  const centerSphere = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    
    // Rotation logic on different axes for abstract machinery feel
    if (innerRing.current) {
      innerRing.current.rotation.x += delta * 0.4;
      innerRing.current.rotation.y += delta * 0.15;
    }
    if (middleRing.current) {
      middleRing.current.rotation.y -= delta * 0.25;
      middleRing.current.rotation.z += delta * 0.1;
    }
    if (outerRing.current) {
      outerRing.current.rotation.z += delta * 0.15;
      outerRing.current.rotation.x -= delta * 0.08;
    }
    if (centerSphere.current) {
      centerSphere.current.position.y = 0.5 + Math.sin(time * 1.5) * 0.06;
    }
  });

  return (
    <group position={[0, 0.4, 0]}>
      {/* Outer Ring - Titanium Finish */}
      <mesh ref={outerRing} castShadow receiveShadow>
        <torusGeometry args={[2.0, 0.05, 16, 100]} />
        <meshPhysicalMaterial
          color="#3a3a3c"
          roughness={0.15}
          metalness={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Middle Ring - Frosted Glass Refraction */}
      <mesh ref={middleRing} castShadow>
        <torusGeometry args={[1.5, 0.08, 16, 80]} />
        <meshPhysicalMaterial
          color="#a259ff"
          roughness={0.15}
          transmission={0.6}
          thickness={0.5}
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner Ring - Silver Chrome */}
      <mesh ref={innerRing} castShadow>
        <torusGeometry args={[1.05, 0.035, 12, 64]} />
        <meshPhysicalMaterial
          color="#e5e5ea"
          roughness={0.05}
          metalness={0.98}
          clearcoat={1.0}
        />
      </mesh>

      {/* Center Intelligence Core - Glowing Nebula Sphere */}
      <group>
        <mesh ref={centerSphere} castShadow>
          <sphereGeometry args={[0.42, 64, 64]} />
          <meshPhysicalMaterial
            color="#2997ff"
            emissive="#5121a8"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1.0}
          />
        </mesh>
        
        {/* Glow halo */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.54, 32, 32]} />
          <shaderMaterial
            vertexShader={glowVertexShader}
            fragmentShader={glowFragmentShader}
            uniforms={{
              uColor: { value: new THREE.Color("#9b5de5") },
              uGlowPower: { value: 3.5 }
            }}
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Subtle support lighting */}
      <pointLight color="#2997ff" intensity={8} distance={5} position={[0, 0.5, 0]} />
      <pointLight color="#a259ff" intensity={12} distance={6} position={[0.5, -0.5, 0]} />
    </group>
  );
}

/* ── SOFT DUST AND DATA POINTS FIELDS ── */
function SparkField() {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const count = 350; // Cleaner, less cluttered

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 5.0;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 3.5;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 5.0;
      seeds[index] = Math.random();
      speeds[index] = 0.12 + Math.random() * 0.15;
      sizes[index] = 1.5 + Math.random() * 3.0;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
    if (points.current) points.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={sparkVertex}
        fragmentShader={sparkFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DustField() {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const count = 450;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 12.0;
      positions[index * 3 + 1] = Math.random() * 6.0 - 2.0;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 12.0;
      scales[index] = Math.random();
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
    if (points.current) points.current.rotation.y += delta * 0.003;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={dustVertex}
        fragmentShader={dustFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── SOFT LIGHT CONES (GOD RAYS) ── */
function SoftGodRays() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <group ref={group} position={[0, 4.0, -2.0]}>
      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} position={[(index - 1.5) * 1.5, 0.0, index * -0.5]} rotation={[0.3, 0.02 * index, 0.0]}>
          <cylinderGeometry args={[0.02, 0.6, 6.0, 16, 1, true]} />
          <meshBasicMaterial
            color={index % 2 === 0 ? "#2997ff" : "#a259ff"}
            transparent
            opacity={0.035}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── MAIN 3D WORLD ASSEMBLY ── */
function ForgeWorld({ progress }: SceneProps) {
  const world = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!world.current) return;
    world.current.position.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.03;
    world.current.rotation.y = THREE.MathUtils.lerp(-0.01, 0.03, progress);
  });

  return (
    <group ref={world}>
      <WebovexCore progress={progress} />
      <SparkField />
      <DustField />
      <SoftGodRays />
    </group>
  );
}

export default function ForgeScene({ progress }: SceneProps) {
  return (
    <div className="forge-canvas" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.45]}
        camera={{ position: [-2.0, 1.2, 7.0], fov: 38, near: 0.1, far: 50 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
      >
        <color attach="background" args={["#000000"]} />
        <fogExp2 attach="fog" args={["#000000", 0.045]} />
        <CameraRig progress={progress} />
        <ambientLight intensity={0.15} />
        <hemisphereLight args={["#e5e5ea", "#1c1c1e", 0.55]} />
        
        {/* Sleek studio lighting */}
        <directionalLight color="#ffffff" intensity={1.6} position={[-2.0, 4.0, 3.0]} castShadow />
        <spotLight color="#2997ff" intensity={120} distance={18} angle={0.35} penumbra={0.9} position={[2.5, 3.0, 2.0]} />
        <spotLight color="#a259ff" intensity={160} distance={15} angle={0.4} penumbra={0.9} position={[-2.5, 2.0, -1.0]} />
        
        <ForgeWorld progress={progress} />
      </Canvas>
    </div>
  );
}
