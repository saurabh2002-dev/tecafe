import { FaBrain, FaComments, FaPenFancy, FaRobot, FaLink, FaCloud, FaGem } from 'react-icons/fa';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function GenerativeAIPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaBrain />,
                text: "Generative AI Services"
            }}
            title="Build Intelligent Solutions with"
            titleHighlight="Generative AI"
            description="Harness the power of GPT-4, Claude, and cutting-edge language models to create custom chatbots, content generators, and AI assistants that transform your business operations."
            keyPoints={[
                "Custom Chatbots & AI Assistants",
                "Content Generation & Automation",
                "Fine-tuned LLM Models"
            ]}
            ctaText="Start Your Project"
            deliveryTime="3-6 week delivery"
            techStack={[
                { icon: <FaRobot />, name: "GPT-4" },
                { icon: <FaBrain />, name: "Claude 3.5" },
                { icon: <FaLink />, name: "LangChain" },
                { icon: <FaComments />, name: "Hugging Face" },
                { icon: <FaCloud />, name: "Azure AI" },
                { icon: <FaGem />, name: "Gemini" },
            ]}
            metrics={[
                { value: "50+", label: "AI Projects" },
                { value: "10+", label: "LLM Models" },
                { value: "99%", label: "Uptime" },
            ]}
            features={[
                {
                    icon: <FaComments />,
                    title: "Custom Chatbots",
                    description: "Build intelligent conversational AI powered by GPT-4, Claude, and other LLMs",
                    capabilities: [
                        "Multi-turn conversations",
                        "Context-aware responses",
                        "Custom knowledge integration",
                        "Multi-language support",
                        "Sentiment analysis",
                        "Intent recognition"
                    ]
                },
                {
                    icon: <FaBrain />,
                    title: "Custom GPT Models",
                    description: "Fine-tune and deploy specialized language models for your specific use cases",
                    capabilities: [
                        "Domain-specific training",
                        "Model fine-tuning",
                        "Prompt engineering",
                        "Performance optimization",
                        "API integration",
                        "Scalable deployment"
                    ]
                },
                {
                    icon: <FaPenFancy />,
                    title: "Content Generation",
                    description: "Automate content creation with AI-powered writing, summarization, and translation",
                    capabilities: [
                        "Article & blog writing",
                        "Marketing copy",
                        "Code generation",
                        "Document summarization",
                        "Language translation",
                        "SEO optimization"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Transform with AI",
                title: "Ready to Build",
                titleHighlight: "Intelligent Solutions?",
                description: "Partner with us to create generative AI solutions that automate tasks, enhance creativity, and drive innovation across your organization.",
                trustStats: [
                    "50+ AI Projects Delivered",
                    "30+ Enterprise Clients",
                    "AI Innovation Leaders"
                ]
            }}
        />
    );
}
