import { FaRobot, FaProjectDiagram, FaBrain, FaUsersCog, FaLink, FaCode } from 'react-icons/fa';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function AgenticAIPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaRobot />,
                text: "Agentic AI Services"
            }}
            title="Deploy Autonomous AI Agents"
            titleHighlight="That Work for You"
            description="Build intelligent agents that can plan, reason, and execute complex tasks autonomously—transforming how your business operates with minimal human oversight."
            keyPoints={[
                "Autonomous Task Execution",
                "Workflow Automation",
                "Decision Intelligence"
            ]}
            ctaText="Deploy AI Agents"
            deliveryTime="4-8 week delivery"
            techStack={[
                { icon: <FaProjectDiagram />, name: "LangGraph" },
                { icon: <FaRobot />, name: "AutoGPT" },
                { icon: <FaUsersCog />, name: "CrewAI" },
                { icon: <FaLink />, name: "LangChain" },
                { icon: <FaCode />, name: "Semantic Kernel" },
                { icon: <FaRobot />, name: "Assistants API" },
            ]}
            metrics={[
                { value: "40+", label: "Agents Built" },
                { value: "85%", label: "Task Automation" },
                { value: "24/7", label: "Operations" },
            ]}
            features={[
                {
                    icon: <FaRobot />,
                    title: "Autonomous Agents",
                    description: "Deploy AI agents that can plan, execute tasks, and make decisions independently",
                    capabilities: [
                        "Goal-oriented planning",
                        "Multi-step reasoning",
                        "Tool usage & API calls",
                        "Self-correction mechanisms",
                        "Memory & context retention",
                        "Parallel task execution"
                    ]
                },
                {
                    icon: <FaProjectDiagram />,
                    title: "Workflow Automation",
                    description: "Automate complex business processes with intelligent AI-driven workflows",
                    capabilities: [
                        "Process orchestration",
                        "Conditional logic",
                        "Error handling",
                        "Human-in-the-loop",
                        "Integration with existing systems",
                        "Real-time monitoring"
                    ]
                },
                {
                    icon: <FaBrain />,
                    title: "Decision Intelligence",
                    description: "AI systems that analyze data, evaluate options, and make informed decisions",
                    capabilities: [
                        "Data analysis",
                        "Predictive modeling",
                        "Risk assessment",
                        "Recommendation engines",
                        "A/B testing automation",
                        "Performance optimization"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Automate with Intelligence",
                title: "Ready to Deploy",
                titleHighlight: "Autonomous Agents?",
                description: "Partner with us to build agentic AI systems that automate workflows, make intelligent decisions, and drive unprecedented business efficiency.",
                trustStats: [
                    "40+ Agents Deployed",
                    "25+ Enterprise Clients",
                    "Automation Experts"
                ]
            }}
        />
    );
}
