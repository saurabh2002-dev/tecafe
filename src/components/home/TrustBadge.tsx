"use client";

import { useEffect, useRef } from "react";

const partners = [
    { name: "OpenAI", icon: "🤖" },
    { name: "Anthropic", icon: "🧠" },
    { name: "AWS", icon: "☁️" },
    { name: "Google Cloud", icon: "🌐" },
    { name: "Azure", icon: "💎" },
    { name: "LangChain", icon: "🔗" },
    { name: "Vercel", icon: "▲" },
    { name: "MongoDB", icon: "🍃" },
];

export default function TrustBadge() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollContent = scrollContainer.querySelector('.partners-track');
        if (scrollContent && !scrollContainer.querySelector('.partners-track-clone')) {
            const clone = scrollContent.cloneNode(true) as HTMLElement;
            clone.classList.add('partners-track-clone');
            scrollContainer.appendChild(clone);
        }
    }, []);

    return (
        <section className="trust-section-v3">
            <div className="container">
                <p className="trust-tagline">Trusted by Industry Leaders</p>

                <div className="partners-scroll" ref={scrollRef}>
                    <div className="partners-track">
                        {partners.map((partner) => (
                            <div key={partner.name} className="partner-chip">
                                <span className="partner-icon">{partner.icon}</span>
                                <span className="partner-name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
