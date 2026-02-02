"use client";

import Link from "next/link";
import CalendlyButton from "@/components/common/CalendlyButton";

export default function CTASection() {
    return (
        <section className="cta-section-v3">
            <div className="container">
                <div className="cta-content-v3">
                    <h2>Ready to Build Something <span className="text-gradient-cyan">Amazing?</span></h2>
                    <p>Let's discuss how AI can transform your business</p>
                    
                    <div className="cta-buttons-v3">
                        <CalendlyButton
                            text="Schedule a Call"
                            className="cta-btn-primary"
                        />
                        <Link href="/contact-us" className="cta-btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
