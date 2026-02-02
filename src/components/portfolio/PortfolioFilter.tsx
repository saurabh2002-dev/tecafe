"use client";

import { useState } from "react";

interface PortfolioFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) {
    return (
        <div className="portfolio-filter mb-5">
            <ul className="d-flex flex-wrap justify-content-center gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => onCategoryChange(category)}
                            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                            style={{
                                background: activeCategory === category ? "var(--gradient-primary)" : "rgba(255, 255, 255, 0.05)",
                                border: activeCategory === category ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "50px",
                                padding: "10px 24px",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                textTransform: "capitalize"
                            }}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
