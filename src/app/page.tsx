import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { GallerySection } from "@/components/home/gallery-section";
import { InfoSection } from "@/components/home/info-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { GridBackground } from "@/components/ui/grid-background";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <JsonLd />
      <GridBackground />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <InfoSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
