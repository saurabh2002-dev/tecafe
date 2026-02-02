import { FaMobileAlt, FaApple, FaAndroid, FaLayerGroup, FaPencilRuler, FaVial, FaTools, FaReact, FaFire, FaCloud } from 'react-icons/fa';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function MobileAppsPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaMobileAlt />,
                text: "Mobile App Development"
            }}
            title="Build Powerful"
            titleHighlight="Mobile Applications"
            description="Native iOS and Android apps, cross-platform solutions with React Native and Flutter. We create mobile experiences that users love with seamless performance and intuitive design."
            keyPoints={[
                "Native iOS & Android Development",
                "Cross-Platform (React Native/Flutter)",
                "App Store Optimization & Support"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="6-12 week delivery"
            techStack={[
                { icon: <FaApple />, name: "iOS/Swift" },
                { icon: <FaAndroid />, name: "Android/Kotlin" },
                { icon: <FaReact />, name: "React Native" },
                { icon: <FaMobileAlt />, name: "Flutter" },
                { icon: <FaFire />, name: "Firebase" },
                { icon: <FaCloud />, name: "AWS Mobile" },
            ]}
            metrics={[
                { value: "80+", label: "Apps Built" },
                { value: "4.8★", label: "Avg Rating" },
                { value: "24/7", label: "Support" },
            ]}
            features={[
                {
                    icon: <FaApple />,
                    title: "iOS Development",
                    description: "Native iOS applications built with Swift and SwiftUI for optimal performance",
                    capabilities: [
                        "iPhone & iPad apps",
                        "Apple Watch apps",
                        "App Store submission",
                        "iOS design guidelines"
                    ]
                },
                {
                    icon: <FaAndroid />,
                    title: "Android Development",
                    description: "Scalable Android applications using Kotlin and Jetpack Compose",
                    capabilities: [
                        "Phone & Tablet apps",
                        "Google Play submission",
                        "Material Design",
                        "Kotlin/Java"
                    ]
                },
                {
                    icon: <FaLayerGroup />,
                    title: "Cross-Platform Apps",
                    description: "Cost-effective solutions using React Native and Flutter for both platforms",
                    capabilities: [
                        "React Native",
                        "Flutter",
                        "Code reusability",
                        "Faster time-to-market"
                    ]
                },
                {
                    icon: <FaPencilRuler />,
                    title: "Mobile UI/UX Design",
                    description: "User-centric design that ensures intuitive navigation and engagement",
                    capabilities: [
                        "User research",
                        "Wireframing",
                        "Prototyping",
                        "Visual design"
                    ]
                },
                {
                    icon: <FaVial />,
                    title: "App Testing & QA",
                    description: "Rigorous testing to ensure your app is bug-free and performs flawlessly",
                    capabilities: [
                        "Automated testing",
                        "Manual testing",
                        "Performance testing",
                        "Security testing"
                    ]
                },
                {
                    icon: <FaTools />,
                    title: "Maintenance & Support",
                    description: "Ongoing support to keep your app updated and compatible with new OS versions",
                    capabilities: [
                        "Bug fixes",
                        "OS updates",
                        "Feature enhancements",
                        "Performance monitoring"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Launch",
                titleHighlight: "Your Mobile App?",
                description: "Partner with us to build mobile applications that users love and businesses rely on.",
                trustStats: [
                    "80+ Apps Launched",
                    "60+ Happy Clients",
                    "4.8★ Average Rating"
                ]
            }}
        />
    );
}
