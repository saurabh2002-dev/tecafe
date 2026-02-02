"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import ProjectCard from "@/components/portfolio/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Operation Atlas",
        description: "A website and graphics design project aimed at enhancing user engagement and visual appeal.",
        category: ["website", "graphics"],
        image: "/images/works-img-1.jpg"
    },
    {
        id: 2,
        title: "Quantum Quest",
        description: "An integrated digital marketing and website development initiative to boost online presence.",
        category: ["digital", "website"],
        image: "/images/works-img-2.jpg"
    },
    {
        id: 3,
        title: "Blue Horizon Initiative",
        description: "A digital marketing campaign focusing on expanding brand awareness and customer engagement.",
        category: ["digital"],
        image: "/images/works-img-3.jpg"
    },
    {
        id: 4,
        title: "Project Alpha",
        description: "An innovative app development project aimed at streamlining user experiences and functionalities.",
        category: ["app"],
        image: "/images/works-img-4.jpg"
    },
    {
        id: 5,
        title: "Terra Nova",
        description: "An app development initiative focusing on creating a robust and scalable mobile application.",
        category: ["app"],
        image: "/images/works-img-3.jpg"
    },
    {
        id: 6,
        title: "Infinity Initiative",
        description: "A graphics design project aiming to create visually stunning and impactful branding elements.",
        category: ["graphics"],
        image: "/images/works-img-4.jpg"
    }
];

const categories = ["all", "digital", "website", "app", "graphics"];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category.includes(activeCategory));

    return (
        <main>
            <PageHeader
                title="Portfolio"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Portfolio" }
                ]}
            />

            <section className="our-projects" style={{ padding: "100px 0", background: "#000" }}>
                <div className="container">
                    <PortfolioFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    <div className="row">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="col-md-6 mb-4">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    category={project.category}
                                />
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-5">
                            <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "18px" }}>
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
