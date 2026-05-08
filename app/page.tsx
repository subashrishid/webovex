// FULL WORKING CINEMATIC VERSION - Strong Scroll Camera Zoom
'use client';

import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 35], fov: 55 }}
        style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1}}
        gl={{ antialias: false, alpha: true }}
      >
        <CinematicCamera />
        {/* Your existing 3D content here - keep all your universe components */}
        <color attach="background" args={["#03040a"]} />
        <fog attach="fog" args={["#0a0a1f", 100, 450]} />
      </Canvas>

      {/* All your HTML sections on top with z-10 */}
      <div className="relative z-10">
        {/* Navbar, Hero, Services, Projects, Contact etc. */}
        <h1 style={{color: 'white', padding: '200px 40px'}}>WEBOVEX - Cinematic Scroll Active</h1>
        <p style={{color: '#00f5ff', padding: '40px'}}>Scroll down strongly to see full camera zoom effect...</p>
      </div>
    </>
  );
}

function CinematicCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.6,
      }
    });

    tl.to(camera.position, { z: 35, duration: 1 }, 0)
       .to(camera.position, { z: -40, x: -12, y: 15, duration: 2 }, 0.2)
       .to(camera.position, { z: -140, x: 20, y: -25, duration: 2.2 }, 0.5)
       .to(camera.position, { z: -280, x: -15, y: 18, duration: 2 }, 0.8);

    return () => tl.kill();
  }, [camera]);

  return null;
}
