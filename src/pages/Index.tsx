import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import OurCustomers from "@/components/sections/OurCustomers";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import CoreLeadershipTeam from "@/components/sections/CoreLeadershipTeam";
import AboutUs from "@/components/sections/AboutUs";
import CompanyEvents from "@/components/sections/CompanyEvents";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurCustomers />
      <WhatWeBuild />
      <WhyChooseUs />
      <FeaturedWork />
      <Testimonials />
      <CoreLeadershipTeam />
      <AboutUs />
      <CompanyEvents />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
