import Box from "@mui/material/Box";
import { JsonLd } from "./components/seo/JsonLd.tsx";
import { PageMeta } from "./components/seo/PageMeta.tsx";
import { CTASection } from "./components/conversion/CTASection.tsx";
import { FloatingActions } from "./components/conversion/FloatingActions.tsx";
import { StickyMobileCTA } from "./components/conversion/StickyMobileCTA.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { AboutSection } from "./components/sections/AboutSection.tsx";
import { AreasSection } from "./components/sections/AreasSection.tsx";
import { FAQSection } from "./components/sections/FAQSection.tsx";
import { GallerySection } from "./components/sections/GallerySection.tsx";
import { HeroSection } from "./components/sections/HeroSection.tsx";
import { ServicesSection } from "./components/sections/ServicesSection.tsx";
import { TestimonialsSection } from "./components/sections/TestimonialsSection.tsx";
import { VideosSection } from "./components/sections/VideosSection.tsx";
import { WhyChooseUsSection } from "./components/sections/WhyChooseUsSection.tsx";

function App() {
  return (
    <>
      <PageMeta />
      <JsonLd />
      <Box component="main">
        <HeroSection />
        <ServicesSection />
        <CTASection location="after-services" />
        <WhyChooseUsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <VideosSection />
        <CTASection location="after-gallery-testimonials" />
        <AreasSection />
        <FAQSection />
        <Footer />
        <StickyMobileCTA />
        <FloatingActions />
      </Box>
    </>
  );
}

export default App;
