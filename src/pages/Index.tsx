import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturesBar from "@/components/home/FeaturesBar";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <CategoriesSection />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
