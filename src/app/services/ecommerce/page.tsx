import { FaShoppingCart, FaChartLine, FaLaptopCode, FaBuilding, FaServer, FaMobileAlt, FaPlug, FaLayerGroup, FaCreditCard, FaStore, FaShoppingBag } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function ECommercePage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaShoppingCart />,
                text: "E-Commerce Development"
            }}
            title="Launch Powerful"
            titleHighlight="Online Stores"
            description="Build scalable e-commerce platforms with seamless payment integration, inventory management, and optimized user experiences that drive conversions and maximize sales."
            keyPoints={[
                "Custom Storefronts & Marketplaces",
                "Payment & Shipping Integration",
                "Conversion Optimization & Analytics"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="4-8 week delivery"
            techStack={[
                { icon: <FaShoppingCart />, name: "Shopify" },
                { icon: <FaWordpress />, name: "WooCommerce" },
                { icon: <FaCreditCard />, name: "Stripe" },
                { icon: <FaStore />, name: "Magento" },
                { icon: <FaShoppingBag />, name: "BigCommerce" },
                { icon: <FaLaptopCode />, name: "Custom" },
            ]}
            metrics={[
                { value: "120+", label: "Stores Built" },
                { value: "$5M+", label: "Revenue Generated" },
                { value: "24/7", label: "Support" },
            ]}
            features={[
                {
                    icon: <FaChartLine />,
                    title: "E-Commerce Strategy",
                    description: "Choose the most suitable technology stack for optimal performance",
                    capabilities: [
                        "Technology stack selection",
                        "Performance optimization",
                        "Business model analysis",
                        "Growth strategy"
                    ]
                },
                {
                    icon: <FaShoppingCart />,
                    title: "E-Commerce Development",
                    description: "Maximize online sales with personalized features and seamless UX",
                    capabilities: [
                        "Custom storefronts",
                        "Personalized features",
                        "Conversion optimization",
                        "Secure checkout"
                    ]
                },
                {
                    icon: <FaLaptopCode />,
                    title: "Custom Web Apps",
                    description: "Tailor-made applications crafted to meet your unique requirements",
                    capabilities: [
                        "Bespoke development",
                        "Scalable architecture",
                        "Security implementation",
                        "Custom workflows"
                    ]
                },
                {
                    icon: <FaBuilding />,
                    title: "Enterprise Apps",
                    description: "Enterprise-level applications to streamline operations",
                    capabilities: [
                        "Operational streamlining",
                        "Productivity enhancement",
                        "Enterprise security",
                        "Legacy integration"
                    ]
                },
                {
                    icon: <FaPlug />,
                    title: "Third-Party Integration",
                    description: "Seamlessly integrate payment gateways, shipping, and CRM systems",
                    capabilities: [
                        "Payment gateways",
                        "Shipping providers",
                        "CRM integration",
                        "Inventory systems"
                    ]
                },
                {
                    icon: <FaLayerGroup />,
                    title: "Full Stack Development",
                    description: "Full-stack expertise using PHP, Node.js, React, and Vue.js",
                    capabilities: [
                        "PHP & Node.js",
                        "React & Vue.js",
                        "Database design",
                        "API development"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Launch",
                titleHighlight: "Your Online Store?",
                description: "Partner with us to build e-commerce platforms that drive sales and delight customers.",
                trustStats: [
                    "120+ Stores Launched",
                    "$5M+ Revenue Generated",
                    "Industry Recognized"
                ]
            }}
        />
    );
}
