
/// <reference types="vite/client" />

// Add custom type declarations for modules without type definitions
declare module 'three-globe' {
  import { Object3D } from 'three';
  
  export default class ThreeGlobe extends Object3D {
    // Add minimal type definitions for the methods we're using
    hexPolygonsData: (data: any[]) => ThreeGlobe;
    hexPolygonResolution: (resolution: number) => ThreeGlobe;
    hexPolygonMargin: (margin: number) => ThreeGlobe;
    showAtmosphere: (show: boolean) => ThreeGlobe;
    atmosphereColor: (color: string) => ThreeGlobe;
    atmosphereAltitude: (altitude: number) => ThreeGlobe;
    hexPolygonColor: (colorFn: () => string) => ThreeGlobe;
    arcsData: (data: any[]) => ThreeGlobe;
    arcStartLat: (fn: (d: any) => number) => ThreeGlobe;
    arcStartLng: (fn: (d: any) => number) => ThreeGlobe;
    arcEndLat: (fn: (d: any) => number) => ThreeGlobe;
    arcEndLng: (fn: (d: any) => number) => ThreeGlobe;
    arcColor: (fn: (e: any) => string) => ThreeGlobe;
    arcAltitude: (fn: (e: any) => number) => ThreeGlobe;
    arcStroke: (fn: () => number[]) => ThreeGlobe;
    arcDashLength: (length: number) => ThreeGlobe;
    arcDashInitialGap: (fn: (e: any) => number) => ThreeGlobe;
    arcDashGap: (gap: number) => ThreeGlobe;
    arcDashAnimateTime: (fn: () => number) => ThreeGlobe;
    pointsData: (data: any[]) => ThreeGlobe;
    pointColor: (fn: (e: any) => string) => ThreeGlobe;
    pointsMerge: (merge: boolean) => ThreeGlobe;
    pointAltitude: (altitude: number) => ThreeGlobe;
    pointRadius: (radius: number) => ThreeGlobe;
    ringsData: (data: any[]) => ThreeGlobe;
    ringColor: (fn: () => string) => ThreeGlobe;
    ringMaxRadius: (radius: number) => ThreeGlobe;
    ringPropagationSpeed: (speed: number) => ThreeGlobe;
    ringRepeatPeriod: (period: number) => ThreeGlobe;
    globeMaterial: () => any;
  }
}
