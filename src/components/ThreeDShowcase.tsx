import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Droplets, Sparkles, SunMedium, Moon, RefreshCcw } from 'lucide-react';

export type FinishType = 'brushed-gold' | 'polished-chrome' | 'matte-black' | 'brushed-copper';

interface FinishConfig {
  id: FinishType;
  label: string;
  colorHex: number;
  metalness: number;
  roughness: number;
  cssBg: string;
}

const FINISHES: FinishConfig[] = [
  {
    id: 'brushed-gold',
    label: 'Brushed Gold',
    colorHex: 0xC89536,
    metalness: 0.92,
    roughness: 0.22,
    cssBg: 'from-[#E4BD70] to-[#C89536]'
  },
  {
    id: 'polished-chrome',
    label: 'Polished Chrome',
    colorHex: 0xE8ECF0,
    metalness: 0.98,
    roughness: 0.06,
    cssBg: 'from-[#FFFFFF] to-[#A0AAB5]'
  },
  {
    id: 'matte-black',
    label: 'Matte Obsidian',
    colorHex: 0x1A1B19,
    metalness: 0.25,
    roughness: 0.42,
    cssBg: 'from-[#333530] to-[#141513]'
  },
  {
    id: 'brushed-copper',
    label: 'Rose Copper',
    colorHex: 0xA85B32,
    metalness: 0.88,
    roughness: 0.26,
    cssBg: 'from-[#D48255] to-[#A85B32]'
  }
];

export const ThreeDShowcase: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeFinish, setActiveFinish] = useState<FinishType>('brushed-gold');
  const [isWaterFlowing, setIsWaterFlowing] = useState<boolean>(true);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [lightingMode, setLightingMode] = useState<'studio' | 'evening'>('studio');
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  // References to Three.js elements for runtime updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const faucetGroupRef = useRef<THREE.Group | null>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const waterStreamRef = useRef<THREE.Group | null>(null);
  const waterParticlesRef = useRef<THREE.Points | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const spotLightRef = useRef<THREE.SpotLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.6);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.replaceChildren(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xfff3db, 2.2);
    dirLight.position.set(4, 5, 3);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    const rimLight = new THREE.DirectionalLight(0xe4bd70, 1.6);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    const spotLight = new THREE.SpotLight(0xffffff, 3.0);
    spotLight.position.set(0, 5, 2);
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.6;
    scene.add(spotLight);
    spotLightRef.current = spotLight;

    // Base Pedestal / Countertop
    const plinthGeo = new THREE.CylinderGeometry(1.6, 1.7, 0.2, 48);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x161715,
      roughness: 0.8,
      metalness: 0.1
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = -0.1;
    plinth.receiveShadow = true;
    scene.add(plinth);

    // Decorative Countertop Gold Trim Ring
    const trimGeo = new THREE.TorusGeometry(1.65, 0.015, 16, 64);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xC89536,
      metalness: 0.9,
      roughness: 0.2
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.rotation.x = Math.PI / 2;
    trim.position.y = 0.0;
    scene.add(trim);

    // Luxury Procedural Architectural Faucet Group
    const faucetGroup = new THREE.Group();
    faucetGroupRef.current = faucetGroup;
    scene.add(faucetGroup);

    // Main Faucet Material
    const initialConfig = FINISHES[0];
    const faucetMaterial = new THREE.MeshStandardMaterial({
      color: initialConfig.colorHex,
      metalness: initialConfig.metalness,
      roughness: initialConfig.roughness
    });
    materialRef.current = faucetMaterial;

    // 1. Escutcheon Base Flange
    const baseGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.1, 36);
    const baseMesh = new THREE.Mesh(baseGeo, faucetMaterial);
    baseMesh.position.y = 0.05;
    baseMesh.castShadow = true;
    faucetGroup.add(baseMesh);

    // 2. Faucet Main Body Column
    const bodyGeo = new THREE.CylinderGeometry(0.2, 0.24, 0.9, 36);
    const bodyMesh = new THREE.Mesh(bodyGeo, faucetMaterial);
    bodyMesh.position.y = 0.55;
    bodyMesh.castShadow = true;
    faucetGroup.add(bodyMesh);

    // 3. Spout Curve (Curved Tube Geometry)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.9, 0),
      new THREE.Vector3(0, 1.4, 0),
      new THREE.Vector3(0.2, 1.7, 0),
      new THREE.Vector3(0.6, 1.75, 0),
      new THREE.Vector3(0.85, 1.5, 0),
      new THREE.Vector3(0.9, 1.2, 0)
    ]);
    const spoutGeo = new THREE.TubeGeometry(curve, 40, 0.1, 24, false);
    const spoutMesh = new THREE.Mesh(spoutGeo, faucetMaterial);
    spoutMesh.castShadow = true;
    faucetGroup.add(spoutMesh);

    // 4. Aerator Nozzle Cap
    const nozzleGeo = new THREE.CylinderGeometry(0.11, 0.1, 0.12, 24);
    const nozzleMesh = new THREE.Mesh(nozzleGeo, faucetMaterial);
    nozzleMesh.position.set(0.9, 1.15, 0);
    faucetGroup.add(nozzleMesh);

    // 5. Minimalist Lever Handle
    const handleHubGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.22, 24);
    const handleHub = new THREE.Mesh(handleHubGeo, faucetMaterial);
    handleHub.position.set(-0.24, 0.65, 0);
    handleHub.rotation.z = Math.PI / 4;
    faucetGroup.add(handleHub);

    const leverGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.55, 16);
    const lever = new THREE.Mesh(leverGeo, faucetMaterial);
    lever.position.set(-0.4, 0.85, 0);
    lever.rotation.z = Math.PI / 3;
    faucetGroup.add(lever);

    // 6. Water Stream Simulation Group
    const waterGroup = new THREE.Group();
    waterStreamRef.current = waterGroup;
    faucetGroup.add(waterGroup);

    // Flowing Water Core
    const waterCoreGeo = new THREE.CylinderGeometry(0.04, 0.06, 1.15, 16);
    const waterCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x88ccff,
      transmission: 0.85,
      opacity: 0.75,
      transparent: true,
      roughness: 0.1,
      ior: 1.33
    });
    const waterCore = new THREE.Mesh(waterCoreGeo, waterCoreMat);
    waterCore.position.set(0.9, 0.55, 0);
    waterGroup.add(waterCore);

    // Splash Particles at Base
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = 0.9 + (Math.random() - 0.5) * 0.25;
      particlePositions[i * 3 + 1] = Math.random() * 0.18;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xaadaff,
      size: 0.035,
      transparent: true,
      opacity: 0.65
    });
    const waterParticles = new THREE.Points(particleGeo, particleMat);
    waterParticlesRef.current = waterParticles;
    waterGroup.add(waterParticles);

    // Interaction handling (drag rotation)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !faucetGroupRef.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      faucetGroupRef.current.rotation.y += deltaX * 0.008;
      camera.position.y = Math.max(0.8, Math.min(3.2, camera.position.y - deltaY * 0.005));
      camera.lookAt(0, 0.6, 0);

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow elegant auto-spin when idle
      if (isAutoRotate && !isDragging && faucetGroupRef.current) {
        faucetGroupRef.current.rotation.y += 0.005;
      }

      // Animate water drops jitter
      if (waterParticlesRef.current && isWaterFlowing) {
        const positions = waterParticlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] = ((positions[i * 3 + 1] + 0.008) % 0.22);
        }
        waterParticlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
    };
  }, [isAutoRotate, isWaterFlowing]);

  // Update material on finish change
  useEffect(() => {
    if (!materialRef.current) return;
    const config = FINISHES.find(f => f.id === activeFinish) || FINISHES[0];
    materialRef.current.color.setHex(config.colorHex);
    materialRef.current.metalness = config.metalness;
    materialRef.current.roughness = config.roughness;
    materialRef.current.needsUpdate = true;
  }, [activeFinish]);

  // Update water visibility
  useEffect(() => {
    if (waterStreamRef.current) {
      waterStreamRef.current.visible = isWaterFlowing;
    }
  }, [isWaterFlowing]);

  // Update lighting mode
  useEffect(() => {
    if (!dirLightRef.current || !ambientLightRef.current || !spotLightRef.current) return;
    if (lightingMode === 'evening') {
      dirLightRef.current.color.setHex(0xe4bd70);
      dirLightRef.current.intensity = 1.4;
      ambientLightRef.current.color.setHex(0xffddaa);
      ambientLightRef.current.intensity = 0.5;
      spotLightRef.current.intensity = 2.0;
    } else {
      dirLightRef.current.color.setHex(0xfff5eb);
      dirLightRef.current.intensity = 2.2;
      ambientLightRef.current.color.setHex(0xffffff);
      ambientLightRef.current.intensity = 0.9;
      spotLightRef.current.intensity = 3.0;
    }
  }, [lightingMode]);

  const resetView = () => {
    if (faucetGroupRef.current) {
      faucetGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full h-[460px] md:h-[520px] rounded-2xl bg-gradient-to-b from-[#1C1D1A]/90 to-[#10110F] border border-[#C89536]/25 overflow-hidden shadow-2xl flex flex-col">
      {/* Top Studio Header & Controls */}
      <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-[#C89536]/15 bg-[#10110F]/60 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C89536]" />
          <span className="text-xs uppercase tracking-wider font-semibold text-[#F5F0E7]">
            Interactive 3D Fitting Studio
          </span>
          <span className="text-[11px] text-[#96958F] hidden sm:inline">
            · 360° Drag & Finish Switcher
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Lighting Mode Switcher */}
          <button
            onClick={() => setLightingMode(prev => prev === 'studio' ? 'evening' : 'studio')}
            aria-label="Toggle studio lighting mood"
            className="p-1.5 rounded-lg border border-[#C89536]/20 bg-[#1C1D1A] text-[#96958F] hover:text-[#E4BD70] transition-colors"
            title={lightingMode === 'studio' ? 'Switch to Warm Evening Lighting' : 'Switch to Daylight Studio'}
          >
            {lightingMode === 'studio' ? <SunMedium className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5 text-[#E4BD70]" />}
          </button>

          {/* Reset Camera */}
          <button
            onClick={resetView}
            aria-label="Reset 3D view"
            className="p-1.5 rounded-lg border border-[#C89536]/20 bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7] transition-colors"
            title="Reset Angle"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full flex-1 cursor-grab active:cursor-grabbing relative"
        title="Click and drag to rotate in 3D"
      />

      {/* Interactive Helper Overlay (fades out while interacting) */}
      <div
        className={`absolute top-16 left-5 pointer-events-none transition-opacity duration-300 ${
          isInteracting ? 'opacity-0' : 'opacity-85'
        }`}
      >
        <div className="text-[11px] font-mono text-[#96958F] bg-[#10110F]/70 px-2.5 py-1 rounded border border-[#C89536]/20 backdrop-blur-sm">
          Drag to inspect 360°
        </div>
      </div>

      {/* Bottom Interactive Control Deck */}
      <div className="relative z-10 px-5 py-3 border-t border-[#C89536]/20 bg-[#10110F]/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        {/* Material Finish Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#96958F] uppercase tracking-wider font-medium mr-1 hidden sm:inline">
            Finish:
          </span>
          <div className="flex items-center gap-1.5 bg-[#1C1D1A] p-1 rounded-lg border border-[#C89536]/20">
            {FINISHES.map(finish => {
              const isActive = activeFinish === finish.id;
              return (
                <button
                  key={finish.id}
                  onClick={() => setActiveFinish(finish.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all ${
                    isActive
                      ? 'bg-[#C89536] text-[#10110F] font-semibold shadow-sm'
                      : 'text-[#96958F] hover:text-[#F5F0E7]'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${finish.cssBg} border border-black/20`}
                  />
                  <span>{finish.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="flex items-center gap-2">
          {/* Water Flow Stream Toggle */}
          <button
            onClick={() => setIsWaterFlowing(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
              isWaterFlowing
                ? 'border-[#88ccff]/40 bg-[#88ccff]/10 text-[#88ccff]'
                : 'border-[#333] bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7]'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Water {isWaterFlowing ? 'On' : 'Off'}</span>
          </button>

          {/* Auto Rotate Toggle */}
          <button
            onClick={() => setIsAutoRotate(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
              isAutoRotate
                ? 'border-[#C89536]/40 bg-[#C89536]/10 text-[#E4BD70]'
                : 'border-[#333] bg-[#1C1D1A] text-[#96958F] hover:text-[#F5F0E7]'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Spin</span>
          </button>
        </div>
      </div>
    </div>
  );
};
