export default function WhyChooseUs() {
    const reasons = [
        {
            icon: "fa-lightbulb",
            title: "Innovation",
            description: "We stay ahead of the curve by constantly embracing cutting-edge technologies and methodologies to deliver innovative solutions that drive your business forward.",
            gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
        },
        {
            icon: "fa-award",
            title: "Quality-Focused",
            description: "Our commitment to quality is unwavering. We ensure that every project we undertake meets the highest standards of excellence and precision.",
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
        },
        {
            icon: "fa-hand-holding-usd",
            title: "Value For Money",
            description: "We offer exceptional services at competitive prices, ensuring you get the best value for your investment without compromising on quality.",
            gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
        }
    ];

    return (
        <section className="why-choose-us-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-header text-center mb-5">
                            <h2 className="section-title wow fadeInUp">
                                Why <span className="gradient-text">Choose Us</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {reasons.map((reason, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="why-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                <div className="why-icon-wrapper">
                                    <div
                                        className="why-icon-bg"
                                        style={{ background: reason.gradient }}
                                    >
                                        <i className={`fas ${reason.icon} why-icon`}></i>
                                    </div>
                                </div>
                                <h3 className="why-title">{reason.title}</h3>
                                <p className="why-description">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
