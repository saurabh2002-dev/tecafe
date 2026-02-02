'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="newsletter-v2">
            <div className="container">
                <h2>Stay Updated</h2>
                <p>Get the latest articles delivered to your inbox.</p>

                {submitted ? (
                    <div className="newsletter-success">Thanks for subscribing!</div>
                ) : (
                    <form onSubmit={handleSubmit} className="newsletter-form-v2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
