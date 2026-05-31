import HeroSwitcher from "@/components/HeroSwitcher";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import Team from "@/components/sections/Team";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function HomePage() {
  return (
    <>
      <HeroSwitcher />
      <main>
        <About />
        <Services />
        <Approach />
        <Team />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
