import { FaCode, FaWordpress, FaMobileAlt, FaTachometerAlt, FaSearch, FaShieldAlt, FaReact, FaBolt, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function WebDevelopmentPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaCode />,
                text: "Web Development Services"
            }}
            title="Professional Web Development"
            titleHighlight="Solutions"
            description="Custom web applications, WordPress solutions, and full-stack development tailored to your business needs. We build scalable, secure, and high-performance web solutions."
            keyPoints={[
                "Custom Development & WordPress",
                "Performance & SEO Optimized",
                "Full-Stack Expertise"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="2-4 week delivery"
            techStack={[
                { icon: <FaReact />, name: "React" },
                { icon: <FaBolt />, name: "Next.js" },
                { icon: <FaWordpress />, name: "WordPress" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <FaPhp />, name: "PHP" },
                { icon: <FaDatabase />, name: "MySQL" },
            ]}
            metrics={[
                { value: "100+", label: "Projects" },
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
            ]}
            features={[
                {
                    icon: <FaCode />,
                    title: "Custom Development",
                    description: "Build bespoke web applications with React, Next.js, and modern frameworks",
                    capabilities: [
                        "React & Next.js apps",
                        "API development",
                        "Database architecture",
                        "Third-party integrations"
                    ]
                },
                {
                    icon: <FaWordpress />,
                    title: "WordPress Solutions",
                    description: "Complete WordPress development with custom themes, plugins, and maintenance",
                    capabilities: [
                        "Custom themes & plugins",
                        "Security & performance",
                        "Content migration",
                        "24/7 support"
                    ]
                },
                {
                    icon: <FaMobileAlt />,
                    title: "Responsive Design",
                    description: "Mobile-first, pixel-perfect designs that deliver exceptional UX across all devices",
                    capabilities: [
                        "Mobile-first approach",
                        "Cross-browser testing",
                        "Touch-optimized UI",
                        "Adaptive layouts"
                    ]
                },
                {
                    icon: <FaTachometerAlt />,
                    title: "Performance Optimization",
                    description: "Lightning-fast load times with advanced optimization and CDN integration",
                    capabilities: [
                        "Core Web Vitals",
                        "Code optimization",
                        "CDN integration",
                        "Caching strategies"
                    ]
                },
                {
                    icon: <FaSearch />,
                    title: "SEO & Analytics",
                    description: "Technical SEO implementation and analytics setup to drive traffic",
                    capabilities: [
                        "Technical SEO",
                        "Schema markup",
                        "Analytics integration",
                        "Performance tracking"
                    ]
                },
                {
                    icon: <FaShieldAlt />,
                    title: "Security & Support",
                    description: "Enterprise-grade security with continuous monitoring and 24/7 support",
                    capabilities: [
                        "Security hardening",
                        "Regular backups",
                        "Uptime monitoring",
                        "Dedicated support"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Transform",
                titleHighlight: "Your Digital Presence?",
                description: "Partner with us to build web applications that combine cutting-edge technology with exceptional user experience.",
                trustStats: [
                    "100+ Projects Delivered",
                    "50+ Happy Clients",
                    "Industry Recognized"
                ]
            }}
        />
    );
}
