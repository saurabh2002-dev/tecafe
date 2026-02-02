import { FaDatabase, FaBook, FaComments, FaProjectDiagram, FaServer, FaLink, FaNetworkWired } from "react-icons/fa";
import { TbVectorTriangle } from "react-icons/tb";
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export default function RAGSystemsPage() {
    return (
        <ServiceDetailLayout
            badge={{
                icon: <FaDatabase />,
                text: "RAG Systems Services"
            }}
            title="Build Intelligent Knowledge Bases with"
            titleHighlight="RAG"
            description="Implement Retrieval-Augmented Generation to create AI systems that provide accurate, contextual answers from your proprietary data using vector databases and semantic search."
            keyPoints={[
                "Vector Database Setup",
                "Intelligent Knowledge Bases",
                "Context-Aware Q&A"
            ]}
            ctaText="Build Your RAG System"
            deliveryTime="4-6 week delivery"
            techStack={[
                { icon: <FaDatabase />, name: "Pinecone" },
                { icon: <FaProjectDiagram />, name: "Weaviate" },
                { icon: <FaServer />, name: "ChromaDB" },
                { icon: <FaLink />, name: "LangChain" },
                { icon: <TbVectorTriangle />, name: "Embeddings" },
                { icon: <FaNetworkWired />, name: "Qdrant" },
            ]}
            metrics={[
                { value: "35+", label: "RAG Systems" },
                { value: "95%", label: "Accuracy" },
                { value: "100M+", label: "Vectors" },
            ]}
            features={[
                {
                    icon: <FaDatabase />,
                    title: "Vector Databases",
                    description: "Build scalable vector search systems for semantic similarity and intelligent retrieval",
                    capabilities: [
                        "Embedding generation",
                        "Similarity search",
                        "Hybrid search (vector + keyword)",
                        "Metadata filtering",
                        "Real-time indexing",
                        "Scalable infrastructure"
                    ]
                },
                {
                    icon: <FaBook />,
                    title: "Knowledge Bases",
                    description: "Create intelligent knowledge repositories that understand and retrieve contextual information",
                    capabilities: [
                        "Document ingestion",
                        "Automatic chunking",
                        "Semantic indexing",
                        "Multi-source integration",
                        "Version control",
                        "Access management"
                    ]
                },
                {
                    icon: <FaComments />,
                    title: "Q&A Systems",
                    description: "Deploy intelligent question-answering systems powered by your proprietary data",
                    capabilities: [
                        "Context-aware answers",
                        "Source attribution",
                        "Multi-turn conversations",
                        "Confidence scoring",
                        "Fallback handling",
                        "Analytics & insights"
                    ]
                }
            ]}
            ctaSection={{
                badge: "Unlock Your Data",
                title: "Ready to Build",
                titleHighlight: "Your RAG System?",
                description: "Partner with us to create intelligent knowledge bases that unlock the value of your proprietary data with retrieval-augmented generation.",
                trustStats: [
                    "35+ RAG Systems Built",
                    "20+ Knowledge Bases",
                    "Vector Search Experts"
                ]
            }}
        />
    );
}
