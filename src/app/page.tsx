import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyOriginalPlus from "@/components/home/WhyOriginalPlus";
import Benefits from "@/components/home/Benefits";
import BestSellers from "@/components/home/BestSellers";
import RitualStrip from "@/components/home/RitualStrip";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <WhyOriginalPlus />
      <Benefits />
      <BestSellers />
      <RitualStrip />
      <Testimonials />
      <WhatsAppCTA />
      <LocationSection />
    </>
  );
}
