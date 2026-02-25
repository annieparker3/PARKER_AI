"use client";
"use no memo";


import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Particle {
    t: number;
    factor: number;
    speed: number;
    xFactor: number;
    yFactor: number;
    zFactor: number;
    mx: number;
    my: number;
}

function Particles({ count = 1500 }) {
    const mesh = useRef<THREE.Points>(null!);

    // Using useRef for high-performance mutations to avoid React Compiler issues
    const particlesRef = useRef<Particle[]>([]);

    // Initialize particles only once
    /* eslint-disable react-hooks/purity */
    useMemo(() => {
        const temp: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        particlesRef.current = temp;
    }, [count]);

    const points = useMemo(() => {
        /* eslint-disable react-hooks/purity */
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const particles = particlesRef.current;

        // Smoothly update positions
        for (let i = 0; i < count; i++) {
            const p = particles[i];
            p.t += p.speed / 2;
            const { t, factor, xFactor, yFactor, zFactor } = p;

            // Update positions based on mouse
            p.mx += (state.mouse.x * 1000 - p.mx) * 0.01;
            p.my += (state.mouse.y * 1000 - p.my) * 0.01;

            const x = (xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10) / 10;
            const y = (yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10) / 10;
            const z = (zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10) / 10;

            mesh.current.geometry.attributes.position.setXYZ(i, x, y, z);
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
        mesh.current.rotation.y = time * 0.05;
        mesh.current.rotation.x = time * 0.02;
    });



    return (
        <>
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[points, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.015}
                    color="#2563EB"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>
            <group>
                <mesh position={[0, 0, -10]}>
                    <sphereGeometry args={[20, 32, 32]} />
                    <meshBasicMaterial color="#0F172A" side={THREE.BackSide} />
                </mesh>
            </group>
        </>
    );
}

export default function LiveBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0F172A]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#7C3AED" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
                <Particles />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-royal-purple/20 pointer-events-none" />
        </div>
    );
}
