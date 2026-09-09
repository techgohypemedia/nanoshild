"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Generate smooth circular glowing particle sprite texture
function createGlowParticleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.25, "rgba(255, 240, 215, 0.7)");
  gradient.addColorStop(0.55, "rgba(255, 215, 170, 0.25)");
  gradient.addColorStop(1, "rgba(255, 215, 170, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function MarbleThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 530;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const cameraDist = 2.0;
    camera.position.z = cameraDist;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Mouse tracking with smooth lerp
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const tilt = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/marble-living.png", (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    });

    // Custom Shader Material for Luxury NanoShield Sheen & Dynamic Specular Reflection
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uImageAspect: { value: 401 / 445 },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Micro-subtle organic stone depth
          pos.z += sin(uv.y * 3.14159 + uTime * 0.6) * 0.008;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        uniform vec2 uResolution;
        uniform float uImageAspect;
        varying vec2 vUv;

        void main() {
          // Object-fit: cover logic
          vec2 uv = vUv;
          float screenAspect = uResolution.x / uResolution.y;

          if (screenAspect > uImageAspect) {
            float scale = screenAspect / uImageAspect;
            uv.y = (uv.y - 0.5) / scale + 0.5;
          } else {
            float scale = uImageAspect / screenAspect;
            uv.x = (uv.x - 0.5) / scale + 0.5;
          }

          vec4 texColor = texture2D(uTexture, uv);

          // 1. Dynamic Specular Light Glint based on Mouse Position
          // Recreates the pristine high-gloss reflection of NanoShield protection
          vec2 lightCenter = uMouse;
          float distToLight = distance(vUv, lightCenter);
          float specular = exp(-distToLight * 4.5) * 0.38;

          // 2. Continuous elegant diagonal light beam sweep across the stone
          float sweepProgress = mod(uTime * 0.25, 3.0) - 1.0;
          float diagonalCoord = (vUv.x * 0.6 + vUv.y * 0.6);
          float sweep = smoothstep(0.0, 0.16, 0.16 - abs(diagonalCoord - sweepProgress)) * 0.20;

          // Combine lighting layers (warm natural architectural lighting)
          vec3 finalColor = texColor.rgb + vec3(1.0, 0.98, 0.94) * (specular + sweep * 0.55);

          // Subtle clarity boost on hover
          finalColor = mix(finalColor, finalColor * 1.03, uHover);

          gl_FragColor = vec4(finalColor, texColor.a);
        }
      `,
      transparent: true,
    });

    // Frustum sizing
    const computeFrustumSize = () => {
      const vHeight = 2.0 * Math.tan((camera.fov * Math.PI / 180) / 2) * cameraDist;
      const vWidth = vHeight * camera.aspect;
      return { vWidth, vHeight };
    };

    const { vWidth, vHeight } = computeFrustumSize();
    const planeGeo = new THREE.PlaneGeometry(vWidth, vHeight, 32, 32);
    const planeMesh = new THREE.Mesh(planeGeo, customMaterial);
    scene.add(planeMesh);

    // Floating 3D ambient light motes with circular glow texture
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * vWidth * 1.1;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * vHeight * 1.1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5 + 0.15;
      particleSpeeds[i] = 0.0012 + Math.random() * 0.002;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const glowTexture = createGlowParticleTexture();

    const particleMat = new THREE.PointsMaterial({
      color: 0xffeed5,
      size: 0.065,
      map: glowTexture || undefined,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse & Touch Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      mouse.targetX = THREE.MathUtils.clamp(x, 0, 1);
      mouse.targetY = THREE.MathUtils.clamp(1 - y, 0, 1);

      // Smooth 3D tilt
      tilt.targetY = (x - 0.5) * 0.12; // rotation about Y
      tilt.targetX = -(y - 0.5) * 0.12; // rotation about X
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouse.targetX = 0.5;
      mouse.targetY = 0.5;
      tilt.targetX = 0;
      tilt.targetY = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = (touch.clientY - rect.top) / rect.height;
        mouse.targetX = THREE.MathUtils.clamp(x, 0, 1);
        mouse.targetY = THREE.MathUtils.clamp(1 - y, 0, 1);
        tilt.targetY = (x - 0.5) * 0.08;
        tilt.targetX = -(y - 0.5) * 0.08;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      if (isDisposed) return;
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
          customMaterial.uniforms.uResolution.value.set(newWidth, newHeight);

          const { vWidth: nw, vHeight: nh } = computeFrustumSize();
          planeMesh.geometry.dispose();
          planeMesh.geometry = new THREE.PlaneGeometry(nw, nh, 32, 32);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    const clock = new THREE.Clock();
    let currentHover = 0;

    const animate = () => {
      if (isDisposed) return;
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Lerp tilt rotation
      tilt.x += (tilt.targetX - tilt.x) * 0.07;
      tilt.y += (tilt.targetY - tilt.y) * 0.07;

      planeMesh.rotation.x = tilt.x;
      planeMesh.rotation.y = tilt.y;

      // Update shader uniforms
      customMaterial.uniforms.uTime.value = elapsedTime;
      customMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);

      const targetHover = isHovered ? 1.0 : 0.0;
      currentHover += (targetHover - currentHover) * 0.1;
      customMaterial.uniforms.uHover.value = currentHover;

      // Animate floating particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > vHeight * 0.55) {
          positions[i * 3 + 1] = -vHeight * 0.55;
        }
        positions[i * 3] += (mouse.x - 0.5) * 0.0003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchmove", handleTouchMove);

      planeMesh.geometry.dispose();
      customMaterial.dispose();
      texture.dispose();
      particleGeo.dispose();
      if (glowTexture) glowTexture.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[401/445] max-w-[540px] mx-auto rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] group select-none cursor-pointer border border-stone-200/40"
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Subtle bottom shadow overlay for photography depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Interactive Micro-Cue on Hover */}
      <div className="absolute bottom-3 left-3 text-[11px] text-white/90 px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Interactive 3D Light Refraction
      </div>
    </div>
  );
}
