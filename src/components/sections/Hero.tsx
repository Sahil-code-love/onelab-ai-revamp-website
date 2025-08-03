import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Trophy, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Sophisticated animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-accent/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-tech-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-tech-accent/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-up">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Globe className="w-4 h-4 text-tech-accent" />
            <span className="text-white/90 text-sm font-medium">Trusted by Fortune 500 Companies Globally</span>
          </div>

          {/* Main headline with enhanced typography */}
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold text-white mb-8 leading-[0.9] tracking-tight">
            AI-First Product
            <br />
            <span className="bg-gradient-to-r from-tech-accent via-white to-tech-accent bg-clip-text text-transparent">
              Development
            </span>
            <br />
            <span className="text-5xl md:text-6xl text-white/90">That Actually Ships</span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            We architect and deploy enterprise-grade AI solutions, intelligent automation workflows, 
            conversational agents, and scalable platforms for global market leaders.
          </p>

          {/* CTA section with multiple options */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button size="lg" className="btn-tech text-lg px-10 py-4 group shadow-2xl">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-tech-accent" />
              <span className="text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-tech-accent" />
              <span className="text-sm">Rapid Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-tech-accent" />
              <span className="text-sm">Award Winning</span>
            </div>
          </div>

          {/* Enhanced Key Metrics with better visual hierarchy */}
          <div className="animate-fade-in">
            <h3 className="text-white/70 text-lg font-medium mb-8 tracking-wide">PROVEN TRACK RECORD</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-tech-accent/30 transition-all duration-300 hover:bg-white/10">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-tech-accent transition-colors">150+</div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wide">Expert Team Members</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-tech-accent/30 transition-all duration-300 hover:bg-white/10">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-tech-accent transition-colors">500+</div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wide">Products Delivered</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-tech-accent/30 transition-all duration-300 hover:bg-white/10">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-tech-accent transition-colors">25+</div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wide">Global Markets</div>
                </div>
              </div>
              <div className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-tech-accent/30 transition-all duration-300 hover:bg-white/10">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-tech-accent transition-colors">98%</div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-tech-accent/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;