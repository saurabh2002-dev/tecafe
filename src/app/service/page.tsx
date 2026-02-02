import Link from "next/link";
import { FaBrain, FaRobot, FaDatabase, FaPlug, FaChartLine, FaCode, FaMobileAlt, FaShoppingCart, FaCube, FaPencilRuler, FaInfinity, FaArrowRight } from "react-icons/fa";

const aiServices = [
    {
        title: "Generative AI",
        description: "Build intelligent AI solutions that generate content, code, and insights using cutting-edge LLMs like GPT-4 and Claude.",
        icon: FaBrain,
        href: "/services/generative-ai",
        tags: ["ChatGPT", "Claude", "LLMs", "Fine-tuning"],
    },
    {
        title: "Agentic AI",
        description: "Autonomous AI agents that can plan, execute tasks, and make decisions independently with minimal human oversight.",
        icon: FaRobot,
        href: "/services/agentic-ai",
        tags: ["Automation", "Workflows", "Multi-Agent"],
    },
    {
        title: "RAG Systems",
        description: "Retrieval-Augmented Generation systems for accurate, context-aware AI responses from your proprietary data.",
        icon: FaDatabase,
        href: "/services/rag-systems",
        tags: ["Vector DB", "LangChain", "Embeddings"],
    },
    {
        title: "MCP Integration",
        description: "Connect Claude and LLMs to your databases, APIs, and tools through standardized Model Context Protocol servers.",
        icon: FaPlug,
        href: "/services/mcp-integration",
        tags: ["MCP Servers", "Claude Desktop", "Tool Integration"],
    },
    {
        title: "Data & ML",
        description: "Big Data analytics, machine learning models, and MLOps solutions to unlock insights from your data.",
        icon: FaChartLine,
        href: "/services/data-ml",
        tags: ["ML Models", "Analytics", "MLOps"],
    },
];

const devServices = [
    {
        title: "Web Development",
        description: "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
        icon: FaCode,
        href: "/services/web-development",
        tags: ["React", "Next.js", "Node.js"],
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: FaMobileAlt,
        href: "/services/mobile-apps",
        tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
        title: "E-Commerce",
        description: "Full-featured online stores with Shopify, WooCommerce, and custom solutions.",
        icon: FaShoppingCart,
        href: "/services/ecommerce",
        tags: ["Shopify", "WooCommerce", "Custom"],
    },
    {
        title: "AEM Development",
        description: "Adobe Experience Manager implementation and customization for enterprise content management.",
        icon: FaCube,
        href: "/services/aem-development",
        tags: ["AEM Sites", "AEM Assets", "Adobe Cloud"],
    },
    {
        title: "UI/UX Design",
        description: "User-centered design solutions that create delightful, intuitive experiences.",
        icon: FaPencilRuler,
        href: "/services/ui-ux-design",
        tags: ["Figma", "Prototyping", "User Research"],
    },
    {
        title: "DevOps & Cloud",
        description: "CI/CD pipelines, infrastructure automation, and cloud solutions.",
        icon: FaInfinity,
        href: "/services/devops",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
];

function ServiceCard({ service }: { service: typeof aiServices[0] }) {
    const Icon = service.icon;
    return (
        <Link href={service.href} className="service-card-v2">
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
        </Link>
    );
}

export default function Services() {
    return (
        <main>
            {/* Services Hero */}
            <section className="services-hero">
                <div className="services-hero-bg">
                    <div className="hero-glow hero-glow-1"></div>
                    <div className="hero-glow hero-glow-2"></div>
                    <div className="hero-grid-pattern"></div>
                </div>
                <div className="container">
                    <div className="services-hero-content">
                        <span className="hero-label">Our Expertise</span>
                        <h1>
                            Building the Future with
                            <span className="text-gradient-cyan"> AI & Technology</span>
                        </h1>
                        <p>
                            From intelligent AI systems to full-stack development, we deliver 
                            solutions that transform how businesses operate and compete.
                        </p>
                        <div className="hero-stats">
                            <div className="hero-stat-item">
                                <span className="stat-number">11+</span>
                                <span className="stat-text">Services</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat-item">
                                <span className="stat-number">5</span>
                                <span className="stat-text">AI Solutions</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-text">Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-page-v2">
                <div className="container">
                    {/* AI Services Section */}
                    <div className="services-category">
                        <div className="category-header">
                            <span className="category-badge">AI-Powered</span>
                            <h2>Artificial Intelligence</h2>
                            <p>Transform your business with cutting-edge AI solutions</p>
                        </div>
                        <div className="services-grid-v2">
                            {aiServices.map(service => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </div>
                    </div>

                    {/* Development Services Section */}
                    <div className="services-category">
                        <div className="category-header">
                            <span className="category-badge">Development</span>
                            <h2>Software & Design</h2>
                            <p>Full-stack development and design services</p>
                        </div>
                        <div className="services-grid-v2">
                            {devServices.map(service => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
