import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <AboutSection />
    <ServicesSection />
    <Testimonials />
   </>
  );
}

