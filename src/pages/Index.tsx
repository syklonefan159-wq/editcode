import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import ProductCarousel from "@/components/sections/ProductCarousel";
import Products from "@/components/sections/Products";
import SpareParts from "@/components/sections/SpareParts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import PhotoGallery from "@/components/sections/PhotoGallery";
import Media from "@/components/sections/Media";
import Contact from "@/components/sections/Contact";
import AvailableModels from "@/components/sections/AvailableModels";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VideoSection />
      <About />
      <Categories />
      <ProductCarousel />
      <Products />
      <SpareParts />
      <WhyChooseUs />
      <Testimonials />
      <PhotoGallery />
      <Media />
      <AvailableModels />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
