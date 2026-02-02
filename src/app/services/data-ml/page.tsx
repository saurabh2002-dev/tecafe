import { FaBrain, FaDatabase, FaCogs, FaLightbulb, FaServer, FaRobot, FaFire, FaChartLine } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function DataMLPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaBrain />,
                text: "Data & Machine Learning"
            }}
            title="Transform Data into"
            titleHighlight="Intelligent Insights"
            description="Harness the power of big data analytics and machine learning to unlock insights, predict outcomes, and drive intelligent decision-making. We build scalable data pipelines and production-ready ML solutions."
            keyPoints={[
                "Big Data Analytics & Processing",
                "Custom ML Models & AI Solutions",
                "MLOps & Production Deployment"
            ]}
            ctaText="Discuss Your Project"
            deliveryTime="4-8 week delivery"
            techStack={[
                { icon: <FaBrain />, name: "TensorFlow" },
                { icon: <FaFire />, name: "PyTorch" },
                { icon: <FaDatabase />, name: "Apache Spark" },
                { icon: <FaChartLine />, name: "Scikit-learn" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <FaServer />, name: "MLflow" },
            ]}
            metrics={[
                { value: "50+", label: "ML Models" },
                { value: "95%", label: "Accuracy" },
                { value: "24/7", label: "Monitoring" },
            ]}
            features={[
                {
                    icon: <FaDatabase />,
                    title: "Big Data Analytics",
                    description: "Process and analyze massive datasets to uncover hidden patterns",
                    capabilities: [
                        "Data warehousing",
                        "Real-time processing",
                        "Predictive analytics",
                        "Data visualization"
                    ]
                },
                {
                    icon: <FaBrain />,
                    title: "Machine Learning",
                    description: "Build intelligent systems that learn and adapt",
                    capabilities: [
                        "Custom ML models",
                        "Deep learning",
                        "NLP & Computer Vision",
                        "Recommendation engines"
                    ]
                },
                {
                    icon: <FaCogs />,
                    title: "Process Optimization",
                    description: "Optimize business processes using data-driven insights",
                    capabilities: [
                        "Workflow automation",
                        "Efficiency analysis",
                        "Resource optimization",
                        "Cost reduction"
                    ]
                },
                {
                    icon: <FaLightbulb />,
                    title: "Business Insights",
                    description: "Transform raw data into actionable insights",
                    capabilities: [
                        "Executive dashboards",
                        "KPI monitoring",
                        "Trend analysis",
                        "Forecasting"
                    ]
                },
                {
                    icon: <FaServer />,
                    title: "Data Infrastructure",
                    description: "Build robust and scalable data infrastructure",
                    capabilities: [
                        "Cloud data lakes",
                        "Database management",
                        "Data architecture",
                        "Security & compliance"
                    ]
                },
                {
                    icon: <FaRobot />,
                    title: "AI Solutions",
                    description: "Implement cutting-edge AI to solve complex problems",
                    capabilities: [
                        "Chatbots & assistants",
                        "Sentiment analysis",
                        "Fraud detection",
                        "Automated decisioning"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Unlock",
                titleHighlight: "Your Data's Potential?",
                description: "Partner with us to build intelligent data solutions that transform your data into competitive advantage.",
                trustStats: [
                    "50+ ML Models Deployed",
                    "30+ Data Projects",
                    "Industry Recognized"
                ]
            }}
        />
    );
}
