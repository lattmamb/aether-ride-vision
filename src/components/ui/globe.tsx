import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const Globe = () => {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;

    let myGlobe: ThreeGlobe;

    // Initialize ThreeGlobe
    try {
      myGlobe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        .globeImageUrl('//unpkg.com/three-globe@1.11.2/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe@1.11.2/example/img/earth-topology.png')
        .showAtmosphere(true)
        .atmosphereColor('#3a228a')
        .atmosphereAltitude(0.85);
    } catch (error) {
      console.error("Failed to initialize ThreeGlobe:", error);
      return;
    }

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(myGlobe);
    scene.background = new THREE.Color('#040d21');

    const camera = new THREE.PerspectiveCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = 400;
    camera.far = 1000;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (globeEl.current) {
      globeEl.current.appendChild(renderer.domElement);
    }

    // Render loop
    (function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globeEl.current && renderer.domElement) {
        globeEl.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={globeEl} className="w-full h-full" />;
};

export default Globe;
