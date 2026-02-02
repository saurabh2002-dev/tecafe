import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

interface CaseStudyCardProps {
    title: string;
    company: string;
    category: string;
    image?: string;
    gradient?: string;
    challenge: string;
    solution: string;
    impact: string;
    tags: string[];
    metrics: { value: string; label: string }[];
    slug: string;
    isReversed?: boolean;
}

export default function CaseStudyCard({
    title,
    company,
    category,
    image,
    gradient,
    challenge,
    solution,
    impact,
    tags,
    metrics,
    slug,
    isReversed = false
}: CaseStudyCardProps) {
    return (
        <div className="case-study-card-modern wow fadeInUp" data-wow-delay="0.1s">
            <div className="card-image-wrapper-modern">
                {image ? (
                    <Image
                        src={image}
                        alt={`${company} Case Study`}
                        width={800}
                        height={600}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: gradient || 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        position: 'relative'
                    }}></div>
                )}
                <div className="card-overlay-modern">
                    <div className="card-category-badge">{category}</div>
                </div>
            </div>

            <div className="card-content-modern">
                <h2 className="card-title-modern">
                    <span style={{ color: "#10b981" }}>{company}</span> - {title}
                </h2>

                <p className="card-desc-modern">
                    {impact}
                </p>

                <div className="card-metrics-modern">
                    {metrics && metrics.map((metric, index) => (
                        <div key={index} className="metric-item-modern">
                            <span className="value">{metric.value}</span>
                            <span className="label">{metric.label}</span>
                        </div>
                    ))}
                </div>

                <div className="card-tags-modern">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag-modern">{tag}</span>
                    ))}
                </div>

                <Link href={`/case-study/${slug}`} className="card-link-modern">
                    View Full Story <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}
