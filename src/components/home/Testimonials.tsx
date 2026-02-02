"use client";

import { useState, useEffect } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CTO",
        company: "TechCorp Global",
        content: "The AI solutions delivered by this team have transformed our operations. Their expertise in implementing RAG systems reduced our customer support response time by 70%.",
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        role: "Head of Digital Innovation",
        company: "FinanceHub",
        content: "Exceptional work on our AEM migration project. The team's technical prowess ensured a seamless transition across 32 websites with zero downtime.",
    },
    {
        id: 3,
        name: "Dr. Emily Watson",
        role: "VP of Product",
        company: "HealthTech Labs",
        content: "Their MCP integration expertise helped us build a revolutionary healthcare AI platform. The autonomous agents process complex workflows with 95% accuracy.",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-v3">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-tag">Testimonials</span>
                    <h2>What Our <span className="text-gradient-cyan">Clients Say</span></h2>
                </div>

                <div className="testimonial-card-v3">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text-v3">{testimonials[activeIndex].content}</p>
                    
                    <div className="testimonial-author-v3">
                        <div className="author-avatar-v3">
                            {testimonials[activeIndex].name.charAt(0)}
                        </div>
                        <div className="author-info-v3">
                            <h4>{testimonials[activeIndex].name}</h4>
                            <p>{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
