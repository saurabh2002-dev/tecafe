"use client";

import { caseStudies } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { FaBriefcase } from 'react-icons/fa';

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <main style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
            {/* Hero Section */}
            <section className="case-study-hero-modern" style={{ paddingBottom: "60px" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="hero-badge-modern wow fadeInUp">
                                <FaBriefcase />
                                <span>{study.category} Case Study</span>
                            </div>
                            <h1 className="hero-title-modern wow fadeInUp" data-wow-delay="0.1s" style={{ fontSize: "48px" }}>
                                {study.company} - {study.title}
                            </h1>
                            <p className="hero-subtitle-modern wow fadeInUp" data-wow-delay="0.2s">
                                Transforming business operations with advanced technology solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="case-study-content" style={{ padding: "0 0 100px" }}>
                <div className="container">
                    {/* Main Image */}
                    <div className="row mb-5 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12">
                            <div style={{ position: "relative", height: "500px", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, transparent 50%)" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="row mb-5 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="col-12">
                            <div className="metrics-grid">
                                {study.metrics.map((metric, index) => (
                                    <div key={index} className={`metric-card gradient-${(index % 4) + 1}`}>
                                        <div className="metric-value">{metric.value}</div>
                                        <div className="metric-label">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="content-block mb-5 wow fadeInUp" data-wow-delay="0.5s">
                                <h2 className="section-title" style={{ fontSize: "32px", fontWeight: "700", marginBottom: "24px", color: "#10b981" }}>The Challenge</h2>
                                <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
                                    {study.challenge}
                                </p>
                            </div>

                            <div className="content-block mb-5 wow fadeInUp" data-wow-delay="0.6s">
                                <h2 className="section-title" style={{ fontSize: "32px", fontWeight: "700", marginBottom: "24px", color: "#3b82f6" }}>Our Solution</h2>
                                <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
                                    {study.solution}
                                </p>
                            </div>

                            <div className="content-block mb-5 wow fadeInUp" data-wow-delay="0.7s">
                                <h2 className="section-title" style={{ fontSize: "32px", fontWeight: "700", marginBottom: "24px", color: "#8b5cf6" }}>Business Impact</h2>
                                <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
                                    {study.impact}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar-widget p-4 wow fadeInUp" data-wow-delay="0.8s" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>Technologies Used</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {study.tags.map((tag, index) => (
                                        <span key={index} style={{ padding: "8px 16px", background: "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "14px", color: "#fff" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-widget p-4 mt-4 wow fadeInUp" data-wow-delay="0.9s" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)", borderRadius: "24px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>Ready to transform your business?</h3>
                                <p style={{ fontSize: "14px", marginBottom: "24px", color: "rgba(255,255,255,0.7)" }}>
                                    Let's discuss how we can help you achieve similar results.
                                </p>
                                <Link href="/contact-us" className="btn btn-primary w-100" style={{ borderRadius: "50px", padding: "12px 24px", fontWeight: "600" }}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
