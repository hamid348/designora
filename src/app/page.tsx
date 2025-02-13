
import NavBar from "@/components/Navbar/NavBar";
import HeroSection from "@/components/HeroSection/HeroSection";
import ClientsLogo from "@/components/ClientsLogo/ClientsLogo";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import BlogPostSection from "@/components/BlogPostSection/BlogPostSection";
import WhatsAppCompo from "@/components/WhatsAppCompo/WhatsAppCompo";
import Footer from "@/components/Footer/Footer";
import AboutUsSection from "@/components/AboutUs/AboutUsSection";
export default function Home() {
  return (
    <>
    <div>
      <NavBar />
      <HeroSection />
      <ClientsLogo />
      <WhyChooseUs />
      <PortfolioSection />
      <ServicesSection />
      <BlogPostSection />
      <AboutUsSection />
      <WhatsAppCompo />
      <Footer />
    </div>
    </>
  );
}
