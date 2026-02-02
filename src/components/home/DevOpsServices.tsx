"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRobot, FaShieldAlt, FaCoins, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export default function DevOpsServices() {
    const terminalRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        initTerminalAnimation();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (terminalRef.current) {
            observer.observe(terminalRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const initTerminalAnimation = async () => {
        const terminalBody = document.querySelector(".terminal-body-v2");
        if (!terminalBody) return;

        terminalBody.innerHTML = "";

        const lines = [
            { type: "command", text: "$ describe infrastructure", delay: 0 },
            { type: "output", text: '"HA ECS cluster on AWS with RDS..."', delay: 300 },
            { type: "command", text: "$ flurit generate", delay: 600 },
            { type: "success", text: "✓ Generating Terraform modules...", delay: 900 },
            { type: "success", text: "✓ Validating security policies...", delay: 1200 },
            { type: "success", text: "✓ Tecafe Supervisor Approved", delay: 1500 },
            { type: "info", text: "🚀 Deploying to Production...", delay: 1800 },
        ];

        for (const line of lines) {
            await new Promise(resolve => setTimeout(resolve, line.delay === 0 ? 0 : 300));
            
            const lineElement = document.createElement("div");
            lineElement.className = `terminal-line ${line.type}`;
            
            if (line.type === "command") {
                lineElement.innerHTML = `<span class="prompt">$</span> ${line.text.replace("$ ", "")}`;
            } else {
                lineElement.textContent = line.text;
            }
            
            terminalBody.appendChild(lineElement);
            lineElement.style.animation = "fadeInLine 0.3s ease forwards";
        }
    };

    const features = [
        {
            icon: <FaRobot />,
            title: "AI Agentic IaC",
            description: "Flurit.ai generates secure Terraform code instantly",
            metric: "90% faster",
            color: "#00d4ff"
        },
        {
            icon: <FaShieldAlt />,
            title: "Expert Supervision",
            description: "Tecafe engineers ensure security & compliance",
            metric: "100% audit-ready",
            color: "#10b981"
        },
        {
            icon: <FaCoins />,
            title: "Cost Optimization",
            description: "Intelligent scaling and right-sizing",
            metric: "40% savings",
            color: "#f59e0b"
        }
    ];

    return (
        <section className="devops-section-v2">
            <div className="devops-bg-v2">
                <div className="devops-glow-1"></div>
                <div className="devops-glow-2"></div>
            </div>

            <div className="container">
                {/* Header */}
                <div className="devops-header-v2">
                    <a href="https://flurit.ai" target="_blank" rel="noopener noreferrer" className="powered-badge">
                        <span className="powered-label">POWERED BY</span>
                        <Image src="/images/flurit-logo-official.png" alt="Flurit.ai" width={24} height={24} className="powered-logo" />
                        <span className="powered-name">Flurit.ai</span>
                        <FaExternalLinkAlt className="powered-icon" />
                    </a>

                    <h2>
                        Deploy Production-Ready <br />
                        <span className="text-gradient-cyan">Infrastructure</span> in Minutes
                    </h2>

                    <p>
                        Combine expert supervision with autonomous AI infrastructure generation. 
                        Join 50+ companies achieving 99.9% uptime.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="devops-grid-v2">
                    {/* Features */}
                    <div className="devops-features-v2">
                        {features.map((feature, index) => (
                            <div key={index} className="devops-feature-v2">
                                <div className="feature-icon-v2" style={{ color: feature.color }}>
                                    {feature.icon}
                                </div>
                                <div className="feature-content-v2">
                                    <div className="feature-header-v2">
                                        <h4>{feature.title}</h4>
                                        <span className="feature-metric" style={{ color: feature.color }}>
                                            {feature.metric}
                                        </span>
                                    </div>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Terminal */}
                    <div className="devops-terminal-v2" ref={terminalRef}>
                        <div className="terminal-header-v2">
                            <div className="terminal-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="terminal-title">flurit-agent</span>
                        </div>
                        <div className="terminal-body-v2">
                            {/* Content generated by JS */}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="devops-cta-v2">
                    <Link href="/contact-us" className="btn-devops-primary">
                        Get DevOps Assessment <FaArrowRight />
                    </Link>
                    <a href="https://www.youtube.com/watch?v=Au-BtrzQSI0" target="_blank" rel="noopener noreferrer" className="btn-devops-secondary">
                        Watch Flurit Demo <FaExternalLinkAlt />
                    </a>
                </div>
            </div>
        </section>
    );
}
