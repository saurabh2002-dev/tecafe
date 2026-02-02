"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef, useCallback } from "react";

const NeuralNetwork3D = dynamic(() => import("./NeuralNetwork3D"), {
    ssr: false,
    loading: () => <div className="neural-network-loader" />,
});

const AI_SERVICES = [
    "Generative AI",
    "RAG Systems", 
    "Agentic AI",
    "MCP Integration",
];

export default function Hero() {
    const [showContent, setShowContent] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldLoad3D, setShouldLoad3D] = useState(false);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Delay 3D loading by 1.5s to prioritize critical content
    useEffect(() => {
        const timer = setTimeout(() => setShouldLoad3D(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    const eraseIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const eraseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const nextIndexTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const eraseText = useCallback((text: string) => {
        let charIndex = text.length;
        setIsTyping(true);

        // Clear any existing erase interval
        if (eraseIntervalRef.current) {
            clearInterval(eraseIntervalRef.current);
        }

        const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
                setDisplayText(text.slice(0, charIndex - 1));
                charIndex--;
            } else {
                clearInterval(eraseInterval);
                eraseIntervalRef.current = null;
                
                // Clear any existing next index timeout
                if (nextIndexTimeoutRef.current) {
                    clearTimeout(nextIndexTimeoutRef.current);
                }
                
                nextIndexTimeoutRef.current = setTimeout(() => {
                    setCurrentServiceIndex((prev) => (prev + 1) % AI_SERVICES.length);
                    nextIndexTimeoutRef.current = null;
                }, 300); // Small pause before next word
            }
        }, 60); // Smoother erase

        eraseIntervalRef.current = eraseInterval;
    }, []);

    const typeText = useCallback(() => {
        const currentService = AI_SERVICES[currentServiceIndex];
        let charIndex = 0;
        setIsTyping(true);
        setDisplayText("");

        const typeInterval = setInterval(() => {
            if (charIndex < currentService.length) {
                setDisplayText(currentService.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setIsTyping(false);
                
                // Clear any existing erase timeout
                if (eraseTimeoutRef.current) {
                    clearTimeout(eraseTimeoutRef.current);
                }
                
                eraseTimeoutRef.current = setTimeout(() => {
                    eraseText(currentService);
                }, 3000);
            }
        }, 120); // Slower, smoother typing

        return () => {
            clearInterval(typeInterval);
            if (eraseTimeoutRef.current) {
                clearTimeout(eraseTimeoutRef.current);
            }
            if (eraseIntervalRef.current) {
                clearInterval(eraseIntervalRef.current);
                eraseIntervalRef.current = null;
            }
            if (nextIndexTimeoutRef.current) {
                clearTimeout(nextIndexTimeoutRef.current);
            }
        };
    }, [currentServiceIndex, eraseText]);

    useEffect(() => {
        if (showContent && isVisible) {
            const cleanup = typeText();
            return cleanup;
        }
    }, [currentServiceIndex, showContent, isVisible, typeText]);

    return (
        <section ref={heroRef} className="hero-minimal" style={{ position: "relative", overflow: "hidden" }}>
            {isVisible && shouldLoad3D && <NeuralNetwork3D />}

            <div className={`hero-tagline-container ${showContent ? "hero-content-visible" : "hero-content-hidden"}`}>
                <h1 className="hero-headline-impact">
                    <span className="hero-subtitle-text">ENGINEERING TOMORROW&apos;S</span>
                    <span className="gradient-text-animated">
                        {displayText}
                        <span className={`typing-cursor ${!isTyping ? 'blink' : ''}`}>|</span>
                    </span>
                </h1>

                <p className="hero-subheading-enhanced">
                    AI innovation and strategic technology partnerships that accelerate digital transformation.
                </p>
            </div>
        </section>
    );
}
