"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import CalendlyButton from "@/components/common/CalendlyButton";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 100) {
                        setIsSticky(true);
                    } else {
                        setIsSticky(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="main-header">
            <div className={`header-sticky ${isSticky ? "active" : ""}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand" href="/">
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: "-1px", margin: 0, fontSize: "24px" }}>
                                <span style={{ color: "#00d9ff" }}>Te</span>
                                <span style={{ color: "#fff" }}>cafe</span>
                            </h2>
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className={`collapse navbar-collapse main-menu ${isMobileMenuOpen ? "show" : ""}`} style={{ display: isMobileMenuOpen ? "block" : "" }}>
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Home</Link>
                                    </li>

                                    {/* AI Solutions Dropdown */}
                                    <li className="nav-item submenu">
                                        <Link className="nav-link" href="/service">AI Solutions</Link>
                                        <ul>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/generative-ai">
                                                    Generative AI
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/agentic-ai">
                                                    Agentic AI
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/rag-systems">
                                                    RAG Systems
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/mcp-integration">
                                                    MCP Integration
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/data-ml">
                                                    Data & ML
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* Development Services Dropdown */}
                                    <li className="nav-item submenu">
                                        <Link className="nav-link" href="/service">Development</Link>
                                        <ul>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/web-development">
                                                    Web Development
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/mobile-apps">
                                                    Mobile Apps
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/ecommerce">
                                                    E-Commerce
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/aem-development">
                                                    AEM Solutions
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/ui-ux-design">
                                                    Design & UX
                                                </Link>
                                            </li>
                                            <li className="nav-item sab-menu">
                                                <Link className="nav-link" href="/services/devops">
                                                    DevOps & Cloud
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/case-study">Case Studies</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact-us">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Let's Start Button Start */}
                            <div className="d-inline-flex">
                                <CalendlyButton
                                    text="Schedule Consultation"
                                    className="btn-modern"
                                />
                            </div>
                            {/* Let's Start Button End */}
                        </div>
                        {/* Main Menu End */}

                        <div className="navbar-toggle" onClick={toggleMobileMenu}>
                            <FaBars style={{ color: "#fff", fontSize: "24px", cursor: "pointer" }} />
                        </div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
}
