"use client";

import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaClock, FaHeadset, FaRocket, FaBriefcase, FaUsers, FaAward } from "react-icons/fa";
import { ReactNode } from "react";

interface TechItem {
    icon: ReactNode;
    name: string;
}

interface Metric {
    value: string;
    label: string;
}

interface Feature {
    icon: ReactNode;
    title: string;
    description: string;
    capabilities: string[];
}

interface ServiceDetailProps {
    badge: {
        icon: ReactNode;
        text: string;
    };
    title: string;
    titleHighlight: string;
    description: string;
    keyPoints: string[];
    ctaText: string;
    deliveryTime: string;
    techStack: TechItem[];
    metrics: Metric[];
    features: Feature[];
    ctaSection: {
        badge: string;
        title: string;
        titleHighlight: string;
        description: string;
        trustStats: string[];
    };
}

export default function ServiceDetailLayout({
    badge,
    title,
    titleHighlight,
    description,
    keyPoints,
    ctaText,
    deliveryTime,
    techStack,
    metrics,
    features,
    ctaSection,
}: ServiceDetailProps) {
    return (
        <main>
            {/* Hero Section */}
            <section className="service-detail-hero">
                <div className="service-detail-hero-bg">
                    <div className="hero-glow hero-glow-1"></div>
                    <div className="hero-glow hero-glow-2"></div>
                    <div className="hero-grid-pattern"></div>
                </div>
                
                <div className="container">
                    <div className="service-detail-hero-grid">
                        {/* Left Content */}
                        <div className="service-detail-content">
                            <div className="service-badge-v2">
                                {badge.icon}
                                <span>{badge.text}</span>
                            </div>

                            <h1>
                                {title} <span className="text-gradient-cyan">{titleHighlight}</span>
                            </h1>

                            <p className="service-detail-desc">{description}</p>

                            <div className="service-key-points-v2">
                                {keyPoints.map((point, idx) => (
                                    <div key={idx} className="key-point-v2">
                                        <FaCheckCircle />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="service-detail-cta">
                                <Link href="/contact-us" className="btn-service-v2">
                                    {ctaText}
                                    <FaArrowRight />
                                </Link>
                                <div className="service-meta-v2">
                                    <span><FaClock /> {deliveryTime}</span>
                                    <span><FaHeadset /> Expert support</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel */}
                        <div className="service-detail-panel">
                            <div className="tech-panel-v2">
                                <div className="tech-panel-header">
                                    {badge.icon}
                                    <span>Technology Stack</span>
                                </div>
                                <div className="tech-grid-v2">
                                    {techStack.map((tech, idx) => (
                                        <div key={idx} className="tech-item-v2">
                                            {tech.icon}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="metrics-grid-v2">
                                    {metrics.map((metric, idx) => (
                                        <div key={idx} className="metric-item-v2">
                                            <span className="metric-value">{metric.value}</span>
                                            <span className="metric-label">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="service-features-v2">
                <div className="container">
                    <div className="features-header-v2">
                        <h2>What We Offer</h2>
                        <p>Comprehensive solutions tailored to your needs</p>
                    </div>

                    <div className="features-grid-v2">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card-v2">
                                <div className="feature-icon-v2">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <ul className="feature-list-v2">
                                    {feature.capabilities.map((cap, idx) => (
                                        <li key={idx}>
                                            <FaCheckCircle />
                                            <span>{cap}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta-v2">
                <div className="container">
                    <div className="cta-card-v2">
                        <div className="cta-badge-v2">
                            <FaRocket />
                            <span>{ctaSection.badge}</span>
                        </div>
                        <h2>
                            {ctaSection.title} <span className="text-gradient-cyan">{ctaSection.titleHighlight}</span>
                        </h2>
                        <p>{ctaSection.description}</p>
                        <div className="cta-buttons-v2">
                            <Link href="/contact-us" className="btn-cta-v2 primary">
                                Start Your Project <FaArrowRight />
                            </Link>
                            <Link href="/portfolio" className="btn-cta-v2 secondary">
                                <FaBriefcase /> View Portfolio
                            </Link>
                        </div>
                        <div className="cta-trust-v2">
                            {ctaSection.trustStats.map((stat, idx) => (
                                <div key={idx} className="trust-item-v2">
                                    <FaCheckCircle />
                                    <span>{stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
