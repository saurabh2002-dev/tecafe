"use client";

import { useEffect, useRef, useState } from "react";
import { FaRocket, FaUsersCog, FaClock, FaChartLine, FaCode, FaShieldAlt, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

interface StatItem {
    id: number;
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    description: string;
    color: string;
}

const stats: StatItem[] = [
    {
        id: 1,
        icon: <FaRocket />,
        value: 50,
        suffix: "+",
        label: "AI Projects Delivered",
        description: "Production-ready AI solutions",
        color: "#10b981"
    },
    {
        id: 2,
        icon: <FaUsersCog />,
        value: 100,
        suffix: "+",
        label: "Enterprise Clients",
        description: "Including Fortune 500 companies",
        color: "#3b82f6"
    },
    {
        id: 3,
        icon: <FaClock />,
        value: 99,
        suffix: ".9%",
        label: "Uptime Guarantee",
        description: "24/7 monitoring & support",
        color: "#8b5cf6"
    },
    {
        id: 4,
        icon: <FaChartLine />,
        value: 300,
        suffix: "%",
        label: "Average ROI",
        description: "For AI implementation projects",
        color: "#f59e0b"
    },
    {
        id: 5,
        icon: <FaCode />,
        value: 500000,
        suffix: "+",
        label: "Lines of Code",
        description: "Powering AI solutions",
        color: "#ec4899"
    },
    {
        id: 6,
        icon: <FaShieldAlt />,
        value: 100,
        suffix: "%",
        label: "Security Compliant",
        description: "SOC 2, ISO 27001 certified",
        color: "#06b6d4"
    }
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="stat-number">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function StatsCounter() {
    return (
        <section className="stats-counter-section-2025">
            <div className="stats-bg-wrapper">
                <div className="stats-gradient-orb orb-1"></div>
                <div className="stats-gradient-orb orb-2"></div>
                <div className="stats-grid-pattern"></div>
            </div>

            <div className="container">
                {/* Section Header */}
                <div className="section-header-modern text-center mb-5 wow fadeInUp">
                    <span className="section-tag">OUR IMPACT</span>
                    <h2 className="section-title-modern">
                        Driving <span className="text-gradient-modern">Measurable Results</span>
                    </h2>
                    <p className="section-subtitle">
                        Numbers that speak to our commitment to excellence and innovation
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="row g-4">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="col-lg-4 col-md-6">
                            <div
                                className="stat-card-2025 wow fadeInUp"
                                data-wow-delay={`${index * 0.1}s`}
                                style={{
                                    '--stat-color': stat.color
                                } as React.CSSProperties}
                            >
                                <div className="stat-icon-wrapper">
                                    <div className="stat-icon-bg"></div>
                                    {stat.icon}
                                </div>

                                <div className="stat-content">
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                    <h4 className="stat-label">{stat.label}</h4>
                                    <p className="stat-description">{stat.description}</p>
                                </div>

                                <div className="stat-decoration">
                                    <div className="decoration-circle"></div>
                                    <div className="decoration-line"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="stats-cta-wrapper text-center mt-5 wow fadeInUp" data-wow-delay="0.6s">
                    <p className="stats-cta-text">
                        Ready to become our next success story?
                    </p>
                    <div className="stats-cta-buttons">
                        <a href="/contact-us" className="btn-stats-primary">
                            <span>Start Your Project</span>
                            <FaArrowRight />
                        </a>
                        <a href="/case-study" className="btn-stats-secondary">
                            <span>View Case Studies</span>
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
