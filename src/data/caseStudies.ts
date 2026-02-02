export interface CaseStudy {
    id: string;
    slug: string;
    company: string;
    title: string;
    category: string;
    image: string;
    gradient: string;
    challenge: string;
    solution: string;
    impact: string;
    tags: string[];
    metrics: { value: string; label: string }[];
    isReversed?: boolean;
    fullDescription?: string; // For the detail page
}

export const caseStudies: CaseStudy[] = [
    {
        id: "cimb",
        slug: "cimb-queue-management",
        company: "CIMB",
        title: "Queue Management System",
        category: "Banking",
        image: "/images/case-studies/cimb.png",
        gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        challenge: "CIMB faced the challenge of managing long queues in their Malaysian market branches efficiently, requiring a system that could streamline the process and improve customer satisfaction.",
        solution: "We developed an Adobe Experience Manager (AEM)-based queue management system, incorporating advanced data ingestion from CSV files into AEM. This approach enabled real-time queue management and improved service delivery.",
        impact: "The implementation of this system significantly reduced waiting times for customers, leading to enhanced customer satisfaction and loyalty. Additionally, it allowed CIMB to optimize staff allocation, improving overall operational efficiency.",
        tags: ["AEM", "Queue Management", "Real-time Data"],
        metrics: [
            { value: "60%", label: "Reduced Wait Time" },
            { value: "45%", label: "Improved Efficiency" },
            { value: "200+", label: "Branches Deployed" }
        ],
        isReversed: false
    },
    {
        id: "caltex",
        slug: "caltex-b2b-redesign",
        company: "Caltex",
        title: "B2B Market Redesign and Migration to AEM",
        category: "Energy",
        image: "/images/case-studies/caltex.png",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #f97316 100%)",
        challenge: "Caltex aimed to differentiate their B2B and B2C branding and digital experience, requiring a platform that could support diverse market needs while maintaining brand consistency.",
        solution: "We executed a comprehensive redesign for the B2B markets, aligning them with distinct branding from B2C. This involved creating new functional components, implementing a dynamic HTML form framework for B2B/ITC, and migrating to AEM 6.4.2, followed by an upgrade to 6.5.4 for enhanced performance and integration with loyalty and lead generation systems.",
        impact: "The project led to a revitalized digital presence for Caltex's B2B sector, improved lead generation through integrated forms, and enhanced customer loyalty. The scalable solutions provided a foundation for future growth and market expansion.",
        tags: ["B2B Platform", "AEM 6.5.4", "Brand Redesign"],
        metrics: [
            { value: "85%", label: "Lead Generation Increase" },
            { value: "12", label: "Markets Launched" },
            { value: "3x", label: "Faster Load Times" }
        ],
        isReversed: true
    },
    {
        id: "zespri",
        slug: "zespri-website-migration",
        company: "Zespri",
        title: "Website Migration to AEMasCS",
        category: "Agriculture",
        image: "/images/case-studies/zespri.png",
        gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
        challenge: "Zespri needed to migrate 32 websites from Contentful to AEMasCS to streamline their content management process and improve the user experience across their digital platforms.",
        solution: "Our team successfully migrated the websites to AEMasCS and reorganized the Google Analytics implementation, making it more dynamic and manageable. This strategic move facilitated better content management and analytics tracking.",
        impact: "The migration improved Zespri's digital agility and user engagement, leading to an increase in website traffic and enhanced content delivery. The streamlined analytics also provided better insights into user behavior, aiding in targeted marketing efforts.",
        tags: ["AEMasCS", "Migration", "32 Websites"],
        metrics: [
            { value: "32", label: "Websites Migrated" },
            { value: "40%", label: "Traffic Increase" },
            { value: "99.9%", label: "Uptime Achieved" }
        ],
        isReversed: false
    },
    {
        id: "cpf",
        slug: "cpf-digital-services",
        company: "CPF",
        title: "AEM Sites and Forms Implementation",
        category: "Government",
        image: "/images/case-studies/cpf.png",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #64748b 100%)",
        challenge: "CPF needed to modernize its digital services to enhance user experience, streamline service delivery, and integrate with Singapore's national identity service, Singpass, for Single Sign-On (SSO) capabilities.",
        solution: "We implemented AEM sites and forms, creating a modernized platform with integrated microservices for dynamic data access. The SSO integration with Singpass enabled seamless and secure user authentication.",
        impact: "CPF's digital service delivery was significantly enhanced, providing a user-friendly and efficient platform. Singpass integration improved security and convenience, leading to higher user satisfaction and engagement.",
        tags: ["AEM Forms", "Singpass SSO", "Microservices"],
        metrics: [
            { value: "2M+", label: "Active Users" },
            { value: "70%", label: "Faster Processing" },
            { value: "95%", label: "User Satisfaction" }
        ],
        isReversed: true
    },
    {
        id: "mediacorp",
        slug: "mediacorp-toggle-experience",
        company: "MediaCorp",
        title: "Toggle's New Video Experience on AEM",
        category: "Media",
        image: "/images/case-studies/mediacorp.png",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
        challenge: "MediaCorp aimed to enhance their video streaming platform, Toggle, by providing a more engaging and interactive user experience.",
        solution: "We utilized AEM to develop a robust video streaming platform with advanced content management capabilities. The project included custom components for dynamic video content delivery and user interaction.",
        impact: "The revamped platform offered a superior user experience, leading to increased viewership and user engagement. The scalable solution ensured long-term sustainability and growth for MediaCorp's digital offerings.",
        tags: ["Video Streaming", "AEM", "Custom Components"],
        metrics: [
            { value: "150%", label: "Viewer Growth" },
            { value: "50%", label: "Engagement Increase" },
            { value: "4K", label: "Content Pieces" }
        ],
        isReversed: false
    },
    {
        id: "intentx",
        slug: "intentx-platform",
        company: "Intentx",
        title: "Platform - Custom Implementation and Enhancement",
        category: "Technology",
        image: "/images/case-studies/intentx.png",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
        challenge: "Intentx required a custom implementation of their platform to address specific business needs and improve overall performance and scalability.",
        solution: "We developed and enhanced the Intentx platform with tailored functionalities and optimizations, ensuring it met the client's unique requirements. This involved extensive customization and integration with third-party services.",
        impact: "The tailored solution significantly boosted platform performance, scalability, and user satisfaction. The enhancements facilitated better business operations and supported Intentx's growth objectives.",
        tags: ["Custom Platform", "Performance", "Scalability"],
        metrics: [
            { value: "5x", label: "Performance Boost" },
            { value: "99.99%", label: "Platform Uptime" },
            { value: "10K+", label: "Daily Transactions" }
        ],
        isReversed: true
    }
];
