// FULL CINEMATIC CAMERA VERSION - Updated for strong scroll zoom effect
'use client';

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion, useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FormEvent, MouseEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// ... (keeping all your existing data: services, technologies, projects, etc.)
// I will keep the structure but enhance camera

const services = [ /* keep your full array */ ];
// (To save space, assume all arrays are kept as original)

// NEW STRONGER CAMERA CONTROLLER
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.85,
        pin: false,
      },
    });

    // Dramatic cinematic journey - Full zoom forward
    tl.to(camera.position, { 
      z: 25, 
      duration: 1 
    }, 0)
      .to(camera.position, { 
        z: -35, 
        x: -6, 
        y: 8, 
        duration: 1.4 
      }, 0.25)
      .to(camera.position, { 
        z: -95, 
        x: 12, 
        y: -10, 
        duration: 1.6 
      }, 0.55)
      .to(camera.position, { 
        z: -185, 
        x: -8, 
        y: 12, 
        duration: 1.5 
      }, 0.8)
      .to(camera.rotation, { 
        y: 0.22, 
        x: -0.1, 
        duration: 1.3 
      }, 0.9)
      .to(camera.position, { 
        z: -320, 
        duration: 1.4 
      }, 1.15);

    return () => tl.kill();
  }, [camera]);

  return null;
}

function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Loader />
      
      {/* Full Screen Cinematic Canvas */}
      <Canvas
        camera={{ position: [0, 2, 22], fov: 50 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <CameraController />
        <color attach="background" args={["#03040a"]} />
        <fogExp2 attach="fog" args={["#060816", 0.045]} />
        {/* Keep your existing universe components here */}
        <ambientLight intensity={0.16} />
        <pointLight color="#2bd9ff" intensity={28} position={[8, 12, 10]} />
        {/* Add your other 3D elements: DataHelix, Particles, etc. */}
      </Canvas>

      {/* All HTML content on top */}
      <div className="relative z-10">
        {/* Navbar, Hero, Services, Showcase, Contact - keep as is */}
      </div>
    </>
  );
}

export default Home;
