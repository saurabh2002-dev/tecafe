"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Infinity symbol made of particles
function InfinityParticles() {
    const pointsRef = useRef<THREE.Points>(null);
    // Optimized particle counts for better performance
    // Desktop: 1500, Mobile: 800
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 1500;

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const col = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color("#00d4ff");
        const color2 = new THREE.Color("#0099ff");
        const color3 = new THREE.Color("#00ffff");

        for (let i = 0; i < particleCount; i++) {
            const t = (i / particleCount) * Math.PI * 2;
            const layer = Math.floor(i / (particleCount / 20));
            const layerOffset = (layer / 20 - 0.5) * 0.8;

            const scale = 6;
            const a = scale;
            const denominator = 1 + Math.sin(t) * Math.sin(t);

            let x = (a * Math.cos(t)) / denominator;
            let y = (a * Math.sin(t) * Math.cos(t)) / denominator;

            const noiseRadius = 0.35 + Math.random() * 0.25;
            const noiseAngle = Math.random() * Math.PI * 2;
            x += Math.cos(noiseAngle) * noiseRadius;
            y += Math.sin(noiseAngle) * noiseRadius;
            const z = layerOffset * 1.5 + (Math.random() - 0.5) * 0.6;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            const colorT = (Math.sin(t) + 1) / 2;
            const tempColor = new THREE.Color();

            if (colorT < 0.5) {
                tempColor.lerpColors(color1, color2, colorT * 2);
            } else {
                tempColor.lerpColors(color2, color3, (colorT - 0.5) * 2);
            }

            col[i * 3] = tempColor.r;
            col[i * 3 + 1] = tempColor.g;
            col[i * 3 + 2] = tempColor.b;
        }

        return [pos, col];
    }, []);

    const originalPositions = useRef(new Float32Array(positions));

    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.elapsedTime;

            pointsRef.current.rotation.y = time * 0.1;
            pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

            const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
            const orig = originalPositions.current;

            for (let i = 0; i < particleCount; i++) {
                const idx = i * 3;
                const t = (i / particleCount) * Math.PI * 2;

                const wave = Math.sin(time * 2 + t * 3) * 0.05;
                const pulse = Math.sin(time * 3 + t * 2) * 0.03;

                posArray[idx] = orig[idx] + wave;
                posArray[idx + 1] = orig[idx + 1] + pulse;
                posArray[idx + 2] = orig[idx + 2] + Math.sin(time + i * 0.01) * 0.02;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} colors={colors}>
            <PointMaterial
                transparent
                vertexColors
                size={0.10}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.9}
            />
        </Points>
    );
}

// Glowing core particles that travel along infinity path
function FlowingParticles() {
    const pointsRef = useRef<THREE.Points>(null);
    const particleCount = 50;

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = 0;
            pos[i * 3 + 1] = 0;
            pos[i * 3 + 2] = 0;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.elapsedTime;
            const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const t = ((time * 0.5 + (i / particleCount) * Math.PI * 2) % (Math.PI * 2));

                const scale = 6;
                const a = scale;
                const denominator = 1 + Math.sin(t) * Math.sin(t);

                posArray[i * 3] = (a * Math.cos(t)) / denominator;
                posArray[i * 3 + 1] = (a * Math.sin(t) * Math.cos(t)) / denominator;
                posArray[i * 3 + 2] = Math.sin(time * 2 + i) * 0.2;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
            pointsRef.current.rotation.y = time * 0.1;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions}>
            <PointMaterial
                transparent
                color="#00ffff"
                size={0.2}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={1}
            />
        </Points>
    );
}

// Mouse trail particles
function MouseTrail() {
    const pointsRef = useRef<THREE.Points>(null);
    const trailLength = 20;
    const { viewport } = useThree();

    const positions = useMemo(() => {
        return new Float32Array(trailLength * 3);
    }, []);

    const trailPositions = useRef<Array<{ x: number; y: number; z: number }>>(
        Array(trailLength).fill({ x: 0, y: 0, z: 0 })
    );

    useFrame((state) => {
        if (pointsRef.current) {
            const mouseX = (state.pointer.x * viewport.width) / 2;
            const mouseY = (state.pointer.y * viewport.height) / 2;

            for (let i = trailLength - 1; i > 0; i--) {
                trailPositions.current[i] = trailPositions.current[i - 1];
            }

            trailPositions.current[0] = {
                x: mouseX,
                y: mouseY,
                z: 2 + Math.sin(state.clock.elapsedTime * 3) * 0.5,
            };

            const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < trailLength; i++) {
                posArray[i * 3] = trailPositions.current[i].x;
                posArray[i * 3 + 1] = trailPositions.current[i].y;
                posArray[i * 3 + 2] = trailPositions.current[i].z;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions}>
            <PointMaterial
                transparent
                color="#00ffff"
                size={0.15}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
}

// Orbiting rings
function OrbitRing({ radius, speed, color, tilt, offsetY = 0 }: {
    radius: number;
    speed: number;
    color: string;
    tilt: number;
    offsetY?: number;
}) {
    const ringRef = useRef<THREE.Points>(null);
    const particleCount = 80;

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = offsetY;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
        return pos;
    }, [radius, offsetY]);

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.y = state.clock.elapsedTime * speed;
            ringRef.current.rotation.x = tilt;
            ringRef.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
        }
    });

    return (
        <Points ref={ringRef} positions={positions}>
            <PointMaterial
                transparent
                color={color}
                size={0.006}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.6}
            />
        </Points>
    );
}

// Floating background particles
function FloatingParticles() {
    const particlesRef = useRef<THREE.Points>(null);
    const particleCount = 150;

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 25;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <Points ref={particlesRef} positions={positions}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.008}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.5}
            />
        </Points>
    );
}

// Main scene
function Scene() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            const targetX = state.pointer.y * 0.15;
            const targetY = state.pointer.x * 0.25;
            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.02;
            groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.02;
        }
    });

    return (
        <>
            <group ref={groupRef}>
                <InfinityParticles />
                <FlowingParticles />
                <OrbitRing radius={8.5} speed={0.15} color="#00d4ff" tilt={0.4} />
                <OrbitRing radius={9.2} speed={-0.12} color="#0099ff" tilt={-0.6} />
                <OrbitRing radius={10.4} speed={0.08} color="#00ffff" tilt={0.9} />
                <FloatingParticles />
            </group>
            <MouseTrail />
        </>
    );
}

export default function NeuralNetwork3D() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Limit DPR on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxDpr = isMobile ? 1 : 1.5;

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 1.5s ease-out",
                willChange: "opacity",
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 12], fov: 50 }}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                style={{ background: "transparent" }}
                dpr={[1, maxDpr]}
            >
                <ambientLight intensity={0.15} />
                <pointLight position={[10, 10, 10]} intensity={0.6} color="#00d4ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.4} color="#0099ff" />

                <Scene />
            </Canvas>
        </div>
    );
}
