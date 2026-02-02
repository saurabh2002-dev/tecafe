import { FaPencilRuler, FaMobileAlt, FaDesktop, FaUsers, FaLayerGroup, FaCheckCircle, FaRocket, FaLightbulb, FaEye, FaMagic } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function UIUXDesignPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaPencilRuler />,
                text: "UI/UX Design Services"
            }}
            title="Design Experiences"
            titleHighlight="Users Love"
            description="Create beautiful, intuitive interfaces that provide exceptional user experiences and drive conversions. From user research to final designs, we craft digital experiences that delight."
            keyPoints={[
                "User Research & Testing",
                "UI Design & Prototyping",
                "Brand Identity & Design Systems"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="3-6 week delivery"
            techStack={[
                { icon: <SiFigma />, name: "Figma" },
                { icon: <FaPencilRuler />, name: "Adobe XD" },
                { icon: <FaLayerGroup />, name: "Sketch" },
                { icon: <FaEye />, name: "InVision" },
                { icon: <FaMagic />, name: "Framer" },
                { icon: <FaDesktop />, name: "Prototyping" },
            ]}
            metrics={[
                { value: "200+", label: "Designs" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
            ]}
            features={[
                {
                    icon: <FaPencilRuler />,
                    title: "Custom UI/UX Design",
                    description: "Create beautiful, modern interfaces that captivate users",
                    capabilities: [
                        "Visual design",
                        "Design systems",
                        "Component libraries",
                        "Responsive layouts"
                    ]
                },
                {
                    icon: <FaMobileAlt />,
                    title: "Mobile App Design",
                    description: "User-friendly mobile experiences for iOS and Android",
                    capabilities: [
                        "iOS design guidelines",
                        "Material Design",
                        "Touch interactions",
                        "App navigation"
                    ]
                },
                {
                    icon: <FaDesktop />,
                    title: "Web App Design",
                    description: "Intuitive interfaces for complex web applications and SaaS",
                    capabilities: [
                        "Dashboard design",
                        "Data visualization",
                        "User flows",
                        "Information architecture"
                    ]
                },
                {
                    icon: <FaUsers />,
                    title: "User Research",
                    description: "Understand your users through research and data-driven insights",
                    capabilities: [
                        "User interviews",
                        "User personas",
                        "Journey mapping",
                        "Competitive analysis"
                    ]
                },
                {
                    icon: <FaLayerGroup />,
                    title: "Wireframing & Prototyping",
                    description: "Bring ideas to life with interactive prototypes",
                    capabilities: [
                        "Low-fidelity wireframes",
                        "High-fidelity mockups",
                        "Interactive prototypes",
                        "Design handoff"
                    ]
                },
                {
                    icon: <FaCheckCircle />,
                    title: "Usability Testing",
                    description: "Validate designs with real users to ensure optimal usability",
                    capabilities: [
                        "A/B testing",
                        "User testing sessions",
                        "Heatmaps",
                        "Iterative improvements"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Transform",
                titleHighlight: "Your User Experience?",
                description: "Partner with us to create designs that delight users and drive business results.",
                trustStats: [
                    "200+ Designs Delivered",
                    "98% Satisfaction Rate",
                    "Award-Winning Designs"
                ]
            }}
        />
    );
}
