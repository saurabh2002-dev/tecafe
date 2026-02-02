"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from 'react-icons/fa';

interface CaseStudy {
    id: string;
    slug: string;
    company: string;
    title: string;
    category: string;
    image: string;
    gradient: string;
    impact: string;
    tags: string[];
    metrics: { value: string; label: string }[];
}

interface CaseStudyBentoGridProps {
    caseStudies: CaseStudy[];
}

export default function CaseStudyBentoGrid({ caseStudies }: CaseStudyBentoGridProps) {
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const categories = ["all", ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

    const filteredStudies = activeFilter === "all"
        ? caseStudies
        : caseStudies.filter(cs => cs.category === activeFilter);

    return (
        <div className="case-grid-wrapper">
            {/* Filter Pills */}
            <div className="case-filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat === "all" ? "All" : cat}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="case-cards-grid">
                {filteredStudies.map((study) => (
                    <Link
                        key={study.id}
                        href={`/case-study/${study.slug}`}
                        className="case-card-v2"
                    >
                        <div className="case-card-image">
                            {study.image ? (
                                <Image
                                    src={study.image}
                                    alt={study.company}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            ) : (
                                <div className="case-gradient-bg" style={{ background: study.gradient }} />
                            )}
                            <span className="case-category">{study.category}</span>
                        </div>

                        <div className="case-card-content">
                            <h3>{study.company}</h3>
                            <p className="case-title">{study.title}</p>
                            
                            <div className="case-metrics">
                                {study.metrics.slice(0, 2).map((metric, idx) => (
                                    <div key={idx} className="case-metric">
                                        <span className="metric-value">{metric.value}</span>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="case-card-footer">
                                <div className="case-tags">
                                    {study.tags.slice(0, 2).map((tag, idx) => (
                                        <span key={idx} className="case-tag">{tag}</span>
                                    ))}
                                </div>
                                <span className="case-arrow"><FaArrowRight /></span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
