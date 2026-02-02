import Hero from "@/components/home/Hero";
import TrustBadge from "@/components/home/TrustBadge";
import Services from "@/components/home/Services";
import DevOpsServices from "@/components/home/DevOpsServices";
// import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadge />
      <Services />
      <DevOpsServices />
      {/* <Testimonials /> */}
      <CTASection />
    </main>
  );
}
