"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { DeviceOrientationControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function MaskModel({
  mousePosition,
  isMobile,
}: {
  mousePosition: { x: number; y: number };
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3d/mask2.glb");

  useEffect(() => {
    if (!groupRef.current) return;

    const sensitivityx = isMobile ? 0.2 : 0.9;
    const sensitivityy = isMobile ? 0.1 : 0.3;

    const rotX = mousePosition.y * sensitivityy + 0.05;
    const rotY = mousePosition.x * sensitivityx + 0.05;

    groupRef.current.rotation.x = rotX;
    groupRef.current.rotation.y = rotY;
  }, [mousePosition]);

  useEffect(() => {
    if (!groupRef.current || !isMobile) return;

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      const { alpha, beta, gamma } = event;

      if (groupRef.current) {
        // Convert alpha, beta, gamma to radians and apply to rotation
        groupRef.current.rotation.x = THREE.MathUtils.degToRad(beta || 0); // Front-back tilt
        groupRef.current.rotation.y = THREE.MathUtils.degToRad(gamma || 0); // Left-right tilt
        groupRef.current.rotation.z = THREE.MathUtils.degToRad(alpha || 0); // Compass direction
      }
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  return (
    <group ref={groupRef} scale={2.5}>
      <primitive object={scene} />
    </group>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile =
    typeof window !== "undefined" &&
    /Mobi|Android|iPhone/i.test(navigator.userAgent);

  useEffect(() => {
    interface MouseEventNormalized {
      x: number;
      y: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      // Normalize mouse position between -1 and 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    console.log("Mouse Position:", mousePosition);
  }, [mousePosition]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: "100%", height: "100%", touchAction: "none" }}
        >
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <MaskModel mousePosition={mousePosition} isMobile={isMobile} />
          <Environment preset="city" />
          <MaskModel mousePosition={mousePosition} isMobile={isMobile} />
        </Canvas>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-6 inline-block rounded-full bg-slate-700/50 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-sm font-medium">April 23-24, 2025</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          2 Days Workshop
        </h1>
        <h3 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-4xl">
          Digital Transformation through Big Data & Cloud Computing
        </h3>
        <p className="mx-auto mb-8 max-w-5xl text-lg text-slate-300 sm:text-l">
          This 2-day workshop is designed to equip participants with the
          knowledge and skills needed to leverage Big Data and Cloud Computing
          for driving digital transformation in organizations. Attendees will
          explore real-world use cases, tools, and strategies to harness the
          power of data analytics, cloud platforms, and scalable infrastructure.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://forms.gle/NWRWzWMBmxfYqtAw6">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
              I'm Instersted
            </Button>
          </a>
          {/* <Link
            href="#details"
            className="group flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
          >
            Free Register
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link> */}
        </div>
      </div>
    </section>
  );
}

useGLTF.preload("/3d/mask.glb");
