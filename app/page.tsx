'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CinematicCamera() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.6,
        pin: true,
      },
    });

    // Full cinematic camera zoom journey
    tl.to(camera.position, { z: 35, duration: 1 }, 0)
      .to(camera.position, { z: -45, x: -12, y: 15, duration: 2 }, 0.2)
      .to(camera.position, { z: -140, x: 20, y: -25, duration: 2.2 }, 0.5)
      .to(camera.position, { z: -280, x: -15, y: 18, duration: 2 }, 0.8);

    return () => tl.kill();
  }, [camera]);

  return null;
}

export default function Home() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 5, 35], fov: 55 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <CinematicCamera />
        <color attach="background" args={['#03040a']} />
        <fog attach="fog" args={['#0a0a1f', 100, 450]} />
      </Canvas>

      <div className="relative z-10 min-h-screen text-white font-sans">
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-black/60 backdrop-blur-md">
          <div className="text-3xl font-black tracking-[-2px] text-cyan-400">webovex</div>
          <div className="flex gap-8 text-sm uppercase tracking-[1px] font-medium">
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#tech" className="hover:text-white transition-colors">TECH</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-2 rounded-full mb-8 text-sm tracking-widest">
              OFFICIAL WEBSITE
            </div>
            <h1 className="text-7xl md:text-[5.5rem] font-black tracking-[-3px] leading-none mb-6">WEBOVEX</h1>
            <p className="text-2xl text-cyan-300 mb-12">Immersive AI & Enterprise Software Universe</p>
            <p className="text-lg text-gray-400 max-w-md mx-auto">Scroll down to experience the full cinematic camera zoom</p>
          </div>
        </section>

        <section id="tech" className="py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-semibold mb-16 text-center">Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h3 className="text-cyan-400 text-xl mb-6">PERN Stack</h3>
                <p className="text-gray-400">PostgreSQL, Express, React, Node.js</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h3 className="text-cyan-400 text-xl mb-6">Django & AI</h3>
                <p className="text-gray-400">Python backend with AI integrations</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h3 className="text-cyan-400 text-xl mb-6">Cloud & SaaS</h3>
                <p className="text-gray-400">Scalable cloud applications</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-black/80">
          <div className="text-center">
            <p className="text-6xl font-light text-cyan-400 mb-8">Keep scrolling...</p>
            <p className="text-xl text-gray-500">The camera is flying through your digital universe</p>
          </div>
        </div>
      </div>
    </>
  );
}
