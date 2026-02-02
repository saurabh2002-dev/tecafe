import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    category: string[];
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
        <div className="works-item" style={{ marginBottom: "30px" }}>
            <div className="works-image" style={{ position: "relative", overflow: "hidden", borderRadius: "16px", marginBottom: "20px" }}>
                <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto", transition: "transform 0.4s ease" }}
                    className="project-image"
                />
            </div>
            <div className="works-content">
                <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px", color: "#fff" }}>
                    {title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px", lineHeight: "1.6" }}>
                    {description}
                </p>
            </div>
        </div>
    );
}
