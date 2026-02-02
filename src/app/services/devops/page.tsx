import { FaInfinity, FaDocker, FaAws, FaCodeBranch, FaFileCode, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function DevOpsPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaInfinity />,
                text: "DevOps & Cloud Solutions"
            }}
            title="DevOps & Cloud"
            titleHighlight="Infrastructure"
            description="Streamline your development lifecycle with enterprise-grade DevOps solutions. From CI/CD pipelines to cloud infrastructure automation, we help you ship faster and more reliably."
            keyPoints={[
                "CI/CD Pipeline Automation",
                "Infrastructure as Code (IaC)",
                "Container Orchestration"
            ]}
            ctaText="Start Your DevOps Journey"
            deliveryTime="2-6 week delivery"
            techStack={[
                { icon: <FaDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <SiJenkins />, name: "Jenkins" },
                { icon: <SiTerraform />, name: "Terraform" },
                { icon: <FaAws />, name: "AWS" },
                { icon: <FaCloud />, name: "Azure/GCP" },
            ]}
            metrics={[
                { value: "60+", label: "Deployments" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Monitoring" },
            ]}
            features={[
                {
                    icon: <FaCodeBranch />,
                    title: "CI/CD Pipeline Setup",
                    description: "Automated build, test, and deployment pipelines for faster releases",
                    capabilities: [
                        "Jenkins/GitLab CI",
                        "GitHub Actions",
                        "Automated testing",
                        "Deployment automation"
                    ]
                },
                {
                    icon: <FaDocker />,
                    title: "Containerization",
                    description: "Docker containerization and Kubernetes orchestration",
                    capabilities: [
                        "Docker setup",
                        "Kubernetes clusters",
                        "Container registry",
                        "Service mesh"
                    ]
                },
                {
                    icon: <FaFileCode />,
                    title: "Infrastructure as Code",
                    description: "Version-controlled, reproducible infrastructure provisioning",
                    capabilities: [
                        "Terraform",
                        "CloudFormation",
                        "Ansible",
                        "Pulumi"
                    ]
                },
                {
                    icon: <FaCloud />,
                    title: "Cloud Migration",
                    description: "Migrate and optimize your infrastructure on cloud platforms",
                    capabilities: [
                        "AWS/Azure/GCP",
                        "Migration planning",
                        "Cost optimization",
                        "Multi-cloud strategy"
                    ]
                },
                {
                    icon: <FaChartLine />,
                    title: "Monitoring & Observability",
                    description: "Comprehensive monitoring and alerting for your infrastructure",
                    capabilities: [
                        "Prometheus/Grafana",
                        "Log aggregation",
                        "APM solutions",
                        "Alerting setup"
                    ]
                },
                {
                    icon: <FaShieldAlt />,
                    title: "Security & Compliance",
                    description: "DevSecOps practices and security automation",
                    capabilities: [
                        "Security scanning",
                        "Compliance automation",
                        "Secret management",
                        "Access control"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Let's Build Together",
                title: "Ready to Accelerate",
                titleHighlight: "Your Delivery Pipeline?",
                description: "Partner with us to build robust DevOps infrastructure that enables faster, more reliable software delivery.",
                trustStats: [
                    "60+ Deployments",
                    "99.9% Uptime SLA",
                    "DevOps Certified"
                ]
            }}
        />
    );
}
