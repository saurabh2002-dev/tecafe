"use client";

import { useState, FormEvent } from "react";
import ContactHero from "@/components/contact/ContactHero";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/your-form-id", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main>
            <ContactHero />

            <section className="contact-section-v2">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-v2">
                            <h2>Send a Message</h2>

                            {status === "success" && (
                                <div className="form-message success">
                                    Message sent! We'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="form-message error">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    disabled={status === "submitting"}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    disabled={status === "submitting"}
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    disabled={status === "submitting"}
                                ></textarea>
                                <button type="submit" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : (
                                        <>Send Message <FaPaperPlane /></>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="contact-info-v2">
                            <h3>Contact Info</h3>
                            
                            <div className="info-item">
                                <FaEnvelope />
                                <a href="mailto:info@tecafe.co.in">info@tecafe.co.in</a>
                            </div>
                            
                            <div className="info-item">
                                <FaPhone />
                                <a href="tel:+919582004430">+91-9582004430</a>
                            </div>
                            
                            <div className="info-item">
                                <FaMapMarkerAlt />
                                <span>India</span>
                            </div>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/company/tecafe-software-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/tecafe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
