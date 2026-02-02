import Link from "next/link";
import { FaShieldAlt, FaPlug, FaCode, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

export default function MCPSection() {
    return (
        <section className="mcp-section-modern">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5 wow fadeInUp">
                    <span className="mcp-badge">MODEL CONTEXT PROTOCOL</span>
                    <h2 className="mcp-title">
                        USB-C for <span className="gradient-text">AI Integration</span>
                    </h2>
                    <p className="mcp-subtitle">
                        Open protocol connecting AI models to your data and tools—secure, standardized, scalable
                    </p>
                </div>

                {/* Hero Card */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="mcp-hero-card wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row align-items-center g-4">
                                <div className="col-lg-8">
                                    <h3 className="mcp-hero-title">What is MCP?</h3>
                                    <p className="mcp-hero-text">
                                        Think of MCP as USB-C for AI—a universal standard connecting Claude and other LLMs to databases, APIs, files, and custom tools through plug-and-play architecture.
                                    </p>
                                    <div className="mcp-features">
                                        <div className="mcp-feature-item">
                                            <FaShieldAlt />
                                            <span>Secure Access</span>
                                        </div>
                                        <div className="mcp-feature-item">
                                            <FaPlug />
                                            <span>Plug & Play</span>
                                        </div>
                                        <div className="mcp-feature-item">
                                            <FaCode />
                                            <span>Open Source</span>
                                        </div>
                                    </div>
                                    <div className="mcp-hero-actions">
                                        <Link href="/services/mcp-integration" className="mcp-learn-more-btn">
                                            Learn More <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <div className="mcp-hero-icon">
                                        <FaPlug />
                                    </div>
                                    <a
                                        href="https://modelcontextprotocol.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mcp-docs-btn"
                                    >
                                        Official Docs <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
