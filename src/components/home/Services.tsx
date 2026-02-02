"use client";

import Link from "next/link";
import { FaBrain, FaRobot, FaDatabase, FaPlug, FaCode, FaLayerGroup, FaArrowRight } from "react-icons/fa";

const services = [
    {
        icon: FaBrain,
        title: "Generative AI",
        description: "Custom GPT models, chatbots, and AI assistants powered by cutting-edge LLMs",
        tags: ["ChatGPT", "LLMs", "Fine-tuning"],
        href: "/services/generative-ai",
        featured: true,
    },
    {
        icon: FaRobot,
        title: "Agentic AI",
        description: "Autonomous AI agents that automate workflows and make intelligent decisions",
        tags: ["Automation", "Workflows", "Agents"],
        href: "/services/agentic-ai",
        featured: true,
    },
    {
        icon: FaDatabase,
        title: "RAG Systems",
        description: "Intelligent knowledge bases with Retrieval-Augmented Generation",
        tags: ["Vector DB", "LangChain", "Embeddings"],
        href: "/services/rag-systems",
        featured: true,
    },
    {
        icon: FaPlug,
        title: "MCP Integration",
        description: "Model Context Protocol for seamless AI-data interactions",
        tags: ["MCP Servers", "Claude", "Custom Tools"],
        href: "/services/mcp-integration",
        featured: true,
    },
    {
        icon: FaCode,
        title: "Web Development",
        description: "High-performance web apps with modern frameworks",
        tags: ["React", "Next.js", "Node.js"],
        href: "/services/web-development",
        featured: false,
    },
    {
        icon: FaLayerGroup,
        title: "AEM Development",
        description: "Enterprise digital experiences with Adobe Experience Manager",
        tags: ["AEM Sites", "AEM Assets", "Adobe Cloud"],
        href: "/services/aem-development",
        featured: false,
    },
];

export default function Services() {
    return (
        <section className="services-section-v2">
            <div className="container">
                <div className="services-header-v2">
                    <span className="services-label">What We Do</span>
                    <h2 className="services-title-v2">
                        AI-First Solutions for <span className="text-gradient-cyan">Modern Enterprises</span>
                    </h2>
                </div>

                <div className="services-bento-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link 
                                key={service.title} 
                                href={service.href}
                                className={`service-card-v2 ${service.featured ? 'featured' : ''} ${index === 0 ? 'large' : ''}`}
                            >
                                <div className="service-card-inner">
                                    <div className="service-icon-v2">
                                        <Icon />
                                    </div>
                                    <div className="service-content-v2">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <div className="service-tags-v2">
                                            {service.tags.map(tag => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="service-arrow-v2">
                                        <FaArrowRight />
                                    </div>
                                </div>
                                {service.featured && <div className="ai-badge">AI</div>}
                            </Link>
                        );
                    })}
                </div>

                <div className="services-cta-v2">
                    <Link href="/service" className="btn-view-all">
                        View All Services <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
