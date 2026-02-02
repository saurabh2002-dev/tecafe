"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaArrowRight, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="modern-footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    <div className="row">
                        {/* Brand Section */}
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <div className="footer-brand">
                                <h2 className="brand-logo">
                                    <span className="brand-te">Te</span>
                                    <span className="brand-cafe">cafe</span>
                                    <span className="brand-dot">.</span>
                                </h2>
                                <p className="footer-tagline">
                                    Empowering businesses through intelligent software and AI solutions. Building the future, today.
                                </p>
                                <div className="footer-contact">
                                    <a href="mailto:info@Tecafe.co.in" className="contact-link">
                                        <FaEnvelope />
                                        info@tecafe.co.in
                                    </a>
                                    <a href="tel:+919582004430" className="contact-link">
                                        <FaPhone />
                                        +91-9582004430
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div className="col-lg-2 col-md-6 col-6 mb-5 mb-lg-0">
                            <div className="footer-column">
                                <h5 className="footer-column-title">Services</h5>
                                <ul className="footer-links">
                                    <li><Link href="/services/generative-ai">Generative AI</Link></li>
                                    <li><Link href="/services/agentic-ai">Agentic AI</Link></li>
                                    <li><Link href="/services/mcp-integration">MCP Integration</Link></li>
                                    <li><Link href="/services/web-devlopment">Web Development</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Company Column */}
                        <div className="col-lg-2 col-md-6 col-6 mb-5 mb-lg-0">
                            <div className="footer-column">
                                <h5 className="footer-column-title">Company</h5>
                                <ul className="footer-links">
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/portfolio">Portfolio</Link></li>
                                    <li><Link href="/careers">Careers</Link></li>
                                    <li><Link href="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Column */}
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <div className="footer-column">
                                <h5 className="footer-column-title">Newsletter</h5>
                                <p className="newsletter-text">
                                    Subscribe to our newsletter for the latest AI trends and updates.
                                </p>
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="newsletter-input"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        <button type="submit" className="newsletter-button">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="copyright-text">
                                © 2025 Tecafe. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-social">
                                <a href="https://www.linkedin.com/company/tecafe-software-pvt-ltd" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/tecafe" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
