
// This file contains custom type definitions for the project

// Type declarations for three-globe
declare module 'three-globe' {
  import { Object3D } from 'three';
  
  export default class ThreeGlobe extends Object3D {
    constructor(options?: any);
    
    // Globe geometry
    globeImageUrl: (url: string) => ThreeGlobe;
    bumpImageUrl: (url: string) => ThreeGlobe;
    
    // Points
    pointsData: (data: any[]) => ThreeGlobe;
    pointLat: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    pointLng: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    pointColor: (accessor: string | ((d: any) => string)) => ThreeGlobe;
    pointAltitude: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    pointRadius: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    
    // Arcs
    arcsData: (data: any[]) => ThreeGlobe;
    arcStartLat: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    arcStartLng: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    arcEndLat: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    arcEndLng: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    arcColor: (accessor: string | ((d: any) => string)) => ThreeGlobe;
    arcAltitude: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    
    // Labels
    labelsData: (data: any[]) => ThreeGlobe;
    labelLat: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    labelLng: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    labelText: (accessor: string | ((d: any) => string)) => ThreeGlobe;
    labelSize: (accessor: string | ((d: any) => number)) => ThreeGlobe;
    labelColor: (accessor: string | ((d: any) => string)) => ThreeGlobe;
    
    // Render control
    width: (width: number) => ThreeGlobe;
    height: (height: number) => ThreeGlobe;
    
    // Animation
    rotation: (options: any) => ThreeGlobe;
    
    // Additional methods
    tick: () => void;
    
    // Add any other methods that you need
  }
}

// This fixes the three-stdlib error with LuminanceFormat
declare module 'three' {
  export const LuminanceFormat: number;
}
