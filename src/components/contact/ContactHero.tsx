"use client";

import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactHero() {
    return (
        <div className="contact-hero-v2">
            <div className="container">
                <span className="hero-tag">Contact Us</span>
                <h1>Let's Build Something <span className="text-gradient-cyan">Amazing</span></h1>
                <p>Have a project in mind? Get in touch and let's start a conversation.</p>

                <div className="hero-contact-links">
                    <a href="mailto:info@tecafe.co.in" className="contact-link">
                        <FaEnvelope />
                        <span>info@tecafe.co.in</span>
                    </a>
                    <a href="tel:+919582004430" className="contact-link">
                        <FaPhone />
                        <span>+91-9582004430</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
