import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold text-white mb-6 leading-tight">
            AI-First Product Development
            <br />
            <span className="text-tech-accent">That Actually Ships</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We build complex AI applications, automation workflows, custom voice agents, 
            and intelligent platforms — fast, lean, and reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-tech text-lg px-8 py-4 group">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="btn-ghost-tech text-lg px-8 py-4 group">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in">
            <p className="text-white/70 text-sm mb-6">Trusted by 100+ founders and enterprise teams</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">AI Startups</div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">Healthcare</div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">Fintech</div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">SaaS</div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="text-white font-semibold">Enterprise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;