import { FaCube, FaCogs, FaPlug, FaTachometerAlt, FaHeadset, FaExchangeAlt, FaImages, FaCloudUploadAlt, FaJava, FaReact, FaCloud, FaServer } from 'react-icons/fa';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function AEMDevelopmentPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaCube />,
                text: "AEM Development Services"
            }}
            title="Enterprise"
            titleHighlight="AEM Solutions"
            description="Adobe Experience Manager implementation, customization, and optimization. We build scalable content management solutions that power exceptional digital experiences at enterprise scale."
            keyPoints={[
                "AEM Implementation & Customization",
                "Integration & Performance Optimization",
                "24/7 Support & Maintenance"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="8-16 week delivery"
            techStack={[
                { icon: <FaCube />, name: "AEM Sites" },
                { icon: <FaImages />, name: "AEM Assets" },
                { icon: <FaJava />, name: "Java/OSGi" },
                { icon: <FaReact />, name: "React/SPA" },
                { icon: <FaCloud />, name: "AEM Cloud" },
                { icon: <FaServer />, name: "Dispatcher" },
            ]}
            metrics={[
                { value: "50+", label: "AEM Projects" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
            ]}
            features={[
                {
                    icon: <FaCogs />,
                    title: "AEM Implementation",
                    description: "End-to-end AEM implementation with custom components and templates",
                    capabilities: [
                        "Custom component development",
                        "Template & page creation",
                        "Workflow customization",
                        "Multi-site management"
                    ]
                },
                {
                    icon: <FaPlug />,
                    title: "AEM Integration",
                    description: "Seamless integration with third-party systems and marketing platforms",
                    capabilities: [
                        "API integration",
                        "CRM connectivity",
                        "Marketing automation",
                        "E-commerce integration"
                    ]
                },
                {
                    icon: <FaTachometerAlt />,
                    title: "Performance Optimization",
                    description: "Optimize AEM performance for faster load times and better UX",
                    capabilities: [
                        "Cache optimization",
                        "CDN configuration",
                        "Dispatcher tuning",
                        "Load testing"
                    ]
                },
                {
                    icon: <FaHeadset />,
                    title: "Support & Maintenance",
                    description: "24/7 support and proactive maintenance for your AEM instance",
                    capabilities: [
                        "24/7 technical support",
                        "Bug fixes & patches",
                        "Security updates",
                        "Version upgrades"
                    ]
                },
                {
                    icon: <FaExchangeAlt />,
                    title: "Content Migration",
                    description: "Migrate content from legacy systems to AEM with minimal downtime",
                    capabilities: [
                        "Legacy system migration",
                        "Content mapping",
                        "Asset migration",
                        "Testing & validation"
                    ]
                },
                {
                    icon: <FaCloudUploadAlt />,
                    title: "Cloud Deployment",
                    description: "Deploy and manage AEM on cloud platforms for scalability",
                    capabilities: [
                        "AEM as a Cloud Service",
                        "AWS/Azure deployment",
                        "Auto-scaling",
                        "CI/CD automation"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Transform",
                titleHighlight: "Your Digital Experience?",
                description: "Partner with us to build enterprise-scale AEM solutions that power exceptional content experiences.",
                trustStats: [
                    "50+ AEM Projects",
                    "99.9% Uptime",
                    "Adobe Certified"
                ]
            }}
        />
    );
}
