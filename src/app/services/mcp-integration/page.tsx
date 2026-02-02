import { FaPlug, FaServer, FaDesktop, FaBuilding, FaDatabase, FaLink, FaFolder, FaCode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function MCPIntegrationPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaPlug />,
                text: "MCP Integration Services"
            }}
            title="Model Context Protocol"
            titleHighlight="Integration"
            description="Connect Claude and other LLMs to your databases, APIs, and custom tools through standardized MCP servers. Think of it as USB-C for AI—universal, secure, and plug-and-play."
            keyPoints={[
                "Custom MCP Server Development",
                "Claude Desktop Integration",
                "Enterprise-grade Security"
            ]}
            ctaText="Integrate with MCP"
            deliveryTime="2-4 week delivery"
            techStack={[
                { icon: <FaDatabase />, name: "Databases" },
                { icon: <FaLink />, name: "APIs" },
                { icon: <FaFolder />, name: "File Systems" },
                { icon: <FaCode />, name: "TypeScript" },
                { icon: <FaPython />, name: "Python" },
                { icon: <FaDesktop />, name: "Claude Desktop" },
            ]}
            metrics={[
                { value: "30+", label: "MCP Servers" },
                { value: "15+", label: "Data Sources" },
                { value: "100%", label: "Secure" },
            ]}
            features={[
                {
                    icon: <FaServer />,
                    title: "Server Development",
                    description: "Build custom MCP servers that expose your databases, APIs, and business logic to AI models",
                    capabilities: [
                        "TypeScript & Python implementations",
                        "Database connectors",
                        "REST & GraphQL integrations",
                        "Custom tool development",
                        "Real-time data streaming",
                        "Authentication & authorization"
                    ]
                },
                {
                    icon: <FaDesktop />,
                    title: "Claude Desktop Integration",
                    description: "Configure and optimize MCP for Claude Desktop with seamless local and remote access",
                    capabilities: [
                        "Configuration setup",
                        "SSH tunnel configuration",
                        "Local resource access",
                        "Remote server connections",
                        "Multi-server management",
                        "Troubleshooting & support"
                    ]
                },
                {
                    icon: <FaBuilding />,
                    title: "Enterprise Solutions",
                    description: "Scale MCP across your organization with enterprise-grade security and compliance",
                    capabilities: [
                        "Multi-tenant architecture",
                        "Role-based access control",
                        "Audit logging & compliance",
                        "High availability setup",
                        "Performance optimization",
                        "24/7 enterprise support"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Connect with MCP",
                title: "Ready to Integrate",
                titleHighlight: "Your Systems with AI?",
                description: "Partner with us to build secure MCP servers that connect your data, APIs, and tools directly to Claude and other AI models.",
                trustStats: [
                    "30+ MCP Servers Built",
                    "20+ Integrations",
                    "MCP Certified Experts"
                ]
            }}
        />
    );
}
