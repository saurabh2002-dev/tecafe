import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyBentoGrid from "@/components/case-study/CaseStudyBentoGrid";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

export default function CaseStudyPage() {
    return (
        <main className="case-study-page">
            <CaseStudyHero />
            
            <section className="case-studies-section">
                <CaseStudyBentoGrid caseStudies={caseStudies} />
            </section>

            <section className="case-cta-section">
                <div className="container">
                    <h2>Ready to Write Your <span className="text-gradient-cyan">Success Story?</span></h2>
                    <p>Let's discuss how we can help transform your business.</p>
                    <Link href="/contact-us" className="cta-btn-primary">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
