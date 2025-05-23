
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

interface WorldProps {
  data: any[];
  globeConfig: {
    pointSize: number;
    globeColor: string;
    showAtmosphere: boolean;
    atmosphereColor: string;
    atmosphereAltitude: number;
    emissive: string;
    emissiveIntensity: number;
    shininess: number;
    polygonColor: string;
    ambientLight: string;
    directionalLeftLight: string;
    directionalTopLight: string;
    pointLight: string;
    arcTime: number;
    arcLength: number;
    rings: number;
    maxRings: number;
    initialPosition: { lat: number; lng: number };
    autoRotate: boolean;
    autoRotateSpeed: number;
  };
}

export const World: React.FC<WorldProps> = ({ data, globeConfig }) => {
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
        .globeImageUrl('//unpkg.com/three-globe@2.28.0/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe@2.28.0/example/img/earth-topology.png')
        .arcsData(data)
        .arcStartLat(d => (d as any).startLat)
        .arcStartLng(d => (d as any).startLng)
        .arcEndLat(d => (d as any).endLat)
        .arcEndLng(d => (d as any).endLng)
        .arcColor(d => (d as any).color)
        .arcDashLength(globeConfig.arcLength)
        .arcDashGap(0.5)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(globeConfig.arcTime)
        .arcStroke(0.5)
        .arcAltitude((d) => {
          return (d as any).arcAlt;
        });

      // Apply atmosphere if supported
      if (typeof myGlobe.atmosphereColor === 'function') {
        myGlobe.atmosphereColor(globeConfig.atmosphereColor);
        myGlobe.atmosphereAltitude(globeConfig.atmosphereAltitude);
      }
    } catch (error) {
      console.error("Failed to initialize ThreeGlobe:", error);
      return;
    }

    // Setup scene
    const scene = new THREE.Scene();
    scene.add(myGlobe);
    scene.background = new THREE.Color(globeConfig.globeColor);

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
  }, [data, globeConfig]);

  return <div ref={globeEl} className="w-full h-full" />;
};

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
        .globeImageUrl('//unpkg.com/three-globe@2.28.0/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe@2.28.0/example/img/earth-topology.png');

      // Apply atmosphere if supported
      if (typeof myGlobe.atmosphereColor === 'function') {
        myGlobe.atmosphereColor('#3a228a');
        myGlobe.atmosphereAltitude(0.85);
      }
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
