"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProps = {
  progress: number;
};

const cameraStops = [
  new THREE.Vector3(-2.7, 1.72, 8.6),
  new THREE.Vector3(0.9, 1.84, 5.1),
  new THREE.Vector3(2.25, 1.48, 1.15),
  new THREE.Vector3(-1.2, 2.12, -2.8),
  new THREE.Vector3(1.9, 1.7, -6.25),
  new THREE.Vector3(-1.9, 1.46, -10.3),
];

const lookStops = [
  new THREE.Vector3(0.1, 1.15, 2.4),
  new THREE.Vector3(0.35, 1.08, 0.2),
  new THREE.Vector3(0.1, 1.28, -2.75),
  new THREE.Vector3(0.4, 1.18, -5.05),
  new THREE.Vector3(-0.1, 1.1, -7.5),
  new THREE.Vector3(0.3, 1.05, -11.2),
];

const moltenVertex = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += sin((p.x * 4.0 + uTime * 1.7)) * 0.018;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const moltenFragment = `
  uniform float uTime;
  varying vec2 vUv;

  float line(float value, float width) {
    return smoothstep(width, 0.0, abs(value));
  }

  void main() {
    float river = sin(vUv.y * 38.0 + uTime * 2.8) * 0.5 + 0.5;
    float veins = line(fract(vUv.x * 9.0 + river * 0.16) - 0.5, 0.08);
    float pulse = sin(uTime * 2.4 + vUv.y * 8.0) * 0.5 + 0.5;
    vec3 deep = vec3(0.32, 0.045, 0.0);
    vec3 ember = vec3(1.0, 0.31, 0.035);
    vec3 hot = vec3(1.0, 0.78, 0.26);
    vec3 color = mix(deep, ember, river * 0.7 + pulse * 0.2);
    color = mix(color, hot, veins * 0.55);
    float alpha = 0.82 + veins * 0.16;
    gl_FragColor = vec4(color, alpha);
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
    p.x += (life - 0.5) * (2.8 + aSeed * 2.2);
    p.y += life * (2.4 + aSeed * 2.1);
    p.z += sin(life * 6.283 + aSeed * 18.0) * 0.7;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (aSize * (1.0 - life) + 1.2) * (28.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const sparkFragment = `
  varying float vLife;
  varying float vSeed;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float core = smoothstep(0.5, 0.0, d);
    vec3 orange = vec3(1.0, 0.32, 0.035);
    vec3 whiteHot = vec3(1.0, 0.86, 0.46);
    vec3 color = mix(orange, whiteHot, smoothstep(0.55, 1.0, vSeed));
    gl_FragColor = vec4(color, core * vLife);
  }
`;

const dustVertex = `
  uniform float uTime;
  attribute float aScale;
  varying float vScale;

  void main() {
    vScale = aScale;
    vec3 p = position;
    p.y += sin(uTime * 0.28 + p.x * 0.2 + p.z * 0.1) * 0.24;
    p.x += cos(uTime * 0.18 + p.z * 0.18) * 0.1;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (0.8 + aScale * 2.8) * (18.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const dustFragment = `
  varying float vScale;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float haze = smoothstep(0.48, 0.0, d);
    vec3 blue = vec3(0.18, 0.72, 1.0);
    vec3 ash = vec3(0.56, 0.62, 0.66);
    vec3 color = mix(ash, blue, vScale * 0.5);
    gl_FragColor = vec4(color, haze * (0.16 + vScale * 0.2));
  }
`;

const hologramVertex = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 p = position;
    p.z += sin((p.x * 3.0 + p.y * 5.0) + uTime * 1.8) * 0.035;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const hologramFragment = `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    float scan = smoothstep(0.035, 0.0, abs(sin(vUv.y * 88.0 + uTime * 3.0)));
    float grid = smoothstep(0.018, 0.0, abs(fract(vUv.x * 12.0) - 0.5));
    float edge = smoothstep(0.68, 0.18, distance(vUv, vec2(0.5)));
    vec3 color = mix(vec3(0.07, 0.55, 1.0), vec3(0.56, 0.93, 1.0), vUv.y);
    float alpha = edge * 0.12 + scan * 0.32 + grid * 0.06;
    gl_FragColor = vec4(color, alpha);
  }
`;

function makeNoiseTexture(size: number, contrast = 42) {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) return null;

  const image = context.createImageData(size, size);
  for (let index = 0; index < image.data.length; index += 4) {
    const value = 92 + Math.random() * contrast;
    image.data[index] = value;
    image.data[index + 1] = value * 0.92;
    image.data[index + 2] = value * 0.82;
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 10);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

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
    next.x += pointer.current.x * 0.34;
    next.y -= pointer.current.y * 0.18;

    camera.position.lerp(next, 1 - Math.pow(0.001, delta));
    camera.lookAt(target.x + pointer.current.x * 0.16, target.y - pointer.current.y * 0.08, target.z);
  });

  return null;
}

function useForgeMaterials() {
  const concrete = useMemo(() => makeNoiseTexture(256, 62), []);
  const rust = useMemo(() => makeNoiseTexture(192, 82), []);

  return { concrete, rust };
}

function SteelFrame() {
  const ribs = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        z: 5.6 - index * 1.55,
        scale: 1 + (index % 3) * 0.05,
      })),
    [],
  );

  return (
    <group>
      {ribs.map((rib, index) => (
        <group key={rib.z} position={[0, 1.75, rib.z]} scale={[rib.scale, rib.scale, rib.scale]}>
          <mesh position={[-4.95, 0, 0]} rotation={[0, 0, 0.08]} castShadow>
            <boxGeometry args={[0.22, 3.6, 0.18]} />
            <meshPhysicalMaterial color={index % 2 ? "#2b2721" : "#38322a"} roughness={0.52} metalness={0.72} clearcoat={0.25} />
          </mesh>
          <mesh position={[4.95, 0, 0]} rotation={[0, 0, -0.08]} castShadow>
            <boxGeometry args={[0.22, 3.6, 0.18]} />
            <meshPhysicalMaterial color={index % 2 ? "#342a21" : "#4b3a2b"} roughness={0.58} metalness={0.7} clearcoat={0.18} />
          </mesh>
          <mesh position={[0, 1.86, 0]} castShadow>
            <boxGeometry args={[10.1, 0.22, 0.2]} />
            <meshPhysicalMaterial color="#535960" roughness={0.28} metalness={0.88} clearcoat={0.55} />
          </mesh>
          <mesh position={[0, 0.92, 0]} rotation={[0, 0, Math.PI / 5]} castShadow>
            <boxGeometry args={[5.75, 0.08, 0.12]} />
            <meshPhysicalMaterial color="#1a2025" roughness={0.42} metalness={0.82} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ConcreteShell() {
  const { concrete, rust } = useForgeMaterials();
  const floorPanels = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        z: 6.6 - index * 1.28,
        x: index % 2 ? -2.55 : 2.55,
      })),
    [],
  );

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, -3.2]} receiveShadow>
        <planeGeometry args={[12.4, 28, 18, 44]} />
        <meshStandardMaterial color="#151514" roughness={0.93} metalness={0.04} map={concrete ?? undefined} />
      </mesh>
      <mesh position={[-5.8, 1.68, -3.8]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[27, 4.2, 34, 5]} />
        <meshStandardMaterial color="#121415" roughness={0.86} metalness={0.05} map={concrete ?? undefined} />
      </mesh>
      <mesh position={[5.8, 1.68, -3.8]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[27, 4.2, 34, 5]} />
        <meshStandardMaterial color="#171512" roughness={0.84} metalness={0.08} map={rust ?? undefined} />
      </mesh>
      <mesh position={[0, 3.82, -3.8]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 27, 16, 34]} />
        <meshStandardMaterial color="#0c0e10" roughness={0.72} metalness={0.16} />
      </mesh>

      {floorPanels.map((panel, index) => (
        <mesh key={`${panel.z}-${panel.x}`} position={[panel.x, -0.035, panel.z]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <boxGeometry args={[4.65, 1.05, 0.035]} />
          <meshStandardMaterial color={index % 3 === 0 ? "#23211e" : "#181818"} roughness={0.82} metalness={0.18} />
        </mesh>
      ))}
    </group>
  );
}

function MoltenChannel() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
  });

  return (
    <group>
      <mesh position={[0, -0.015, -3.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.88, 25, 18, 84]} />
        <shaderMaterial
          ref={material}
          uniforms={uniforms}
          vertexShader={moltenVertex}
          fragmentShader={moltenFragment}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <pointLight color="#ff6a19" intensity={26} distance={7} position={[0, 0.42, -1.6]} />
      <pointLight color="#ff3d0a" intensity={15} distance={6} position={[0, 0.28, -7.4]} />
    </group>
  );
}

function ForgeCore({ progress }: SceneProps) {
  const core = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!core.current) return;
    core.current.rotation.y += delta * 0.16;
    core.current.position.y = 0.05 + Math.sin(state.clock.elapsedTime * 0.8) * 0.025;
  });

  return (
    <group position={[0, 0.82, -2.4]}>
      <group ref={core}>
        <mesh rotation={[Math.PI / 2, 0, progress * 2.2]} castShadow>
          <torusGeometry args={[1.16, 0.08, 16, 96]} />
          <meshPhysicalMaterial color="#aeb7c2" emissive="#214e61" emissiveIntensity={0.22} roughness={0.22} metalness={0.92} clearcoat={0.75} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, -progress * 2.8]} castShadow>
          <torusGeometry args={[0.78, 0.045, 14, 86]} />
          <meshPhysicalMaterial color="#2c343c" emissive="#27d5ff" emissiveIntensity={0.34} roughness={0.3} metalness={0.86} />
        </mesh>
        <mesh castShadow>
          <cylinderGeometry args={[0.36, 0.5, 0.34, 48]} />
          <meshPhysicalMaterial color="#ff7825" emissive="#ff4b0b" emissiveIntensity={2.15} roughness={0.38} metalness={0.12} />
        </mesh>
      </group>
      <mesh position={[0, -0.54, 0]} receiveShadow>
        <cylinderGeometry args={[1.72, 1.95, 0.34, 8]} />
        <meshPhysicalMaterial color="#15181b" roughness={0.55} metalness={0.82} clearcoat={0.34} />
      </mesh>
      <pointLight color="#ff6b1f" intensity={42} distance={9} position={[0, 0.26, 0]} />
      <pointLight color="#20c8ff" intensity={8} distance={7} position={[1.8, 1.4, -0.5]} />
    </group>
  );
}

function RoboticArms() {
  const arm = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!arm.current) return;
    arm.current.children.forEach((child, index) => {
      child.rotation.z = Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.08;
    });
  });

  return (
    <group ref={arm}>
      {[-1, 1].map((side) => (
        <group key={side} position={[side * 2.55, 1.16, -2.4]} rotation={[0, side * 0.28, side * -0.28]}>
          <mesh castShadow>
            <boxGeometry args={[0.28, 1.3, 0.32]} />
            <meshPhysicalMaterial color="#20252a" roughness={0.33} metalness={0.84} clearcoat={0.28} />
          </mesh>
          <mesh position={[side * -0.42, -0.75, 0]} rotation={[0, 0, side * 0.58]} castShadow>
            <boxGeometry args={[0.24, 1.36, 0.26]} />
            <meshPhysicalMaterial color="#5e656b" roughness={0.24} metalness={0.9} clearcoat={0.58} />
          </mesh>
          <mesh position={[side * -0.82, -1.42, 0]} rotation={[0, 0, side * 0.92]} castShadow>
            <coneGeometry args={[0.14, 0.5, 4]} />
            <meshPhysicalMaterial color="#ff7a20" emissive="#ff4a08" emissiveIntensity={1.1} roughness={0.36} metalness={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function HologramPanels() {
  const materialA = useRef<THREE.ShaderMaterial>(null);
  const materialB = useRef<THREE.ShaderMaterial>(null);
  const uniformsA = useMemo(() => ({ uTime: { value: 0 } }), []);
  const uniformsB = useMemo(() => ({ uTime: { value: 1.8 } }), []);

  useFrame((_, delta) => {
    if (materialA.current) materialA.current.uniforms.uTime.value += delta;
    if (materialB.current) materialB.current.uniforms.uTime.value += delta * 0.82;
  });

  return (
    <group>
      <mesh position={[-3.9, 1.78, 0.25]} rotation={[0.06, 0.34, 0.02]}>
        <planeGeometry args={[2.15, 1.22, 32, 18]} />
        <shaderMaterial ref={materialA} uniforms={uniformsA} vertexShader={hologramVertex} fragmentShader={hologramFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh position={[3.95, 1.44, -5.1]} rotation={[0.03, -0.42, -0.02]}>
        <planeGeometry args={[2.7, 1.54, 38, 20]} />
        <shaderMaterial ref={materialB} uniforms={uniformsB} vertexShader={hologramVertex} fragmentShader={hologramFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

function SparkField() {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const count = 760;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 0.9;
      positions[index * 3 + 1] = 0.12 + Math.random() * 0.5;
      positions[index * 3 + 2] = -2.5 + (Math.random() - 0.5) * 1.2;
      seeds[index] = Math.random();
      speeds[index] = 0.42 + Math.random() * 0.84;
      sizes[index] = 2.2 + Math.random() * 4.4;
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
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial ref={material} uniforms={uniforms} vertexShader={sparkVertex} fragmentShader={sparkFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function DustField() {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const count = 900;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 10.5;
      positions[index * 3 + 1] = Math.random() * 4.1;
      positions[index * 3 + 2] = 6.8 - Math.random() * 23.5;
      scales[index] = Math.random();
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
    if (points.current) points.current.rotation.y += delta * 0.004;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial ref={material} uniforms={uniforms} vertexShader={dustVertex} fragmentShader={dustFragment} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function GodRays() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    group.current.children.forEach((child, index) => {
      child.scale.y = 1 + Math.sin(state.clock.elapsedTime * 0.75 + index) * 0.1;
    });
  });

  return (
    <group ref={group} position={[0, 2.2, -3.8]}>
      {Array.from({ length: 6 }, (_, index) => (
        <mesh key={index} position={[(index - 2.5) * 0.9, 0.2, index * -1.4]} rotation={[0.48, 0.05 * index, 0.04]}>
          <cylinderGeometry args={[0.04, 0.48, 5.8, 18, 1, true]} />
          <meshBasicMaterial color={index % 2 ? "#2bd9ff" : "#ff7a21"} transparent opacity={index % 2 ? 0.045 : 0.055} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function NeonRails() {
  return (
    <group>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 1.22, 0.03, -3.3]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.035, 25.2, 0.035]} />
          <meshBasicMaterial color={side > 0 ? "#2bd9ff" : "#ff6f1d"} transparent opacity={0.72} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

function ForgeWorld({ progress }: SceneProps) {
  const world = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!world.current) return;
    world.current.position.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.018;
    world.current.rotation.y = THREE.MathUtils.lerp(-0.025, 0.05, progress);
  });

  return (
    <group ref={world}>
      <ConcreteShell />
      <SteelFrame />
      <MoltenChannel />
      <ForgeCore progress={progress} />
      <RoboticArms />
      <HologramPanels />
      <SparkField />
      <DustField />
      <GodRays />
      <NeonRails />
    </group>
  );
}

export default function ForgeScene({ progress }: SceneProps) {
  return (
    <div className="forge-canvas" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.45]}
        camera={{ position: [-2.7, 1.72, 8.6], fov: 42, near: 0.1, far: 80 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <color attach="background" args={["#030303"]} />
        <fogExp2 attach="fog" args={["#070707", 0.055]} />
        <CameraRig progress={progress} />
        <ambientLight intensity={0.11} />
        <hemisphereLight args={["#8bdfff", "#1c0903", 0.45]} />
        <directionalLight color="#cfd9e6" intensity={1.15} position={[-2.5, 5.8, 2.2]} castShadow shadow-mapSize={[1024, 1024]} />
        <spotLight color="#2bd9ff" intensity={92} distance={24} angle={0.32} penumbra={0.78} position={[3.8, 5.2, 2.2]} castShadow />
        <spotLight color="#ff7420" intensity={118} distance={18} angle={0.42} penumbra={0.8} position={[-2.8, 3.4, -1.2]} />
        <ForgeWorld progress={progress} />
      </Canvas>
    </div>
  );
}
