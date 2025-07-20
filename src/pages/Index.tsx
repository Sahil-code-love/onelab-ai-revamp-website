import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatWeBuild />
      <WhyChooseUs />
      <FeaturedWork />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
