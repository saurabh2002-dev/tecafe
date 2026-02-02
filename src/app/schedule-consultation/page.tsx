"use client";

import CalendlyInline from "@/components/common/CalendlyInline";
import PageHeader from "@/components/common/PageHeader";

export default function ScheduleConsultation() {
    return (
        <main>
            <PageHeader
                title="Schedule a Consultation"
                subtitle="Book a free consultation with our AI experts to discuss your project needs and explore how we can help transform your business."
            />

            <section className="schedule-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="schedule-content">
                                <div className="schedule-intro">
                                    <h2>Let's Connect</h2>
                                    <p>
                                        Choose a time that works best for you. Our team will be ready to discuss:
                                    </p>
                                    <ul className="benefits-list">
                                        <li>Your business goals and challenges</li>
                                        <li>AI solutions tailored to your needs</li>
                                        <li>Project timeline and roadmap</li>
                                        <li>Budget and pricing options</li>
                                    </ul>
                                </div>

                                <div className="calendly-container">
                                    <CalendlyInline height="800px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
