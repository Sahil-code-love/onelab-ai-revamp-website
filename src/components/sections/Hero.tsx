import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Trophy, Shield, Sparkles, Brain, Rocket, Target, Code, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedCounts, setAnimatedCounts] = useState({ teams: 0, products: 0, markets: 0, success: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targets = { teams: 150, products: 500, markets: 25, success: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animateNumber = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    };

    const timeout = setTimeout(() => {
      animateNumber('teams', targets.teams);
      animateNumber('products', targets.products);
      animateNumber('markets', targets.markets);
      animateNumber('success', targets.success);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const floatingElements = [
    { icon: Brain, delay: 0, x: 10, y: 20 },
    { icon: Code, delay: 1000, x: 85, y: 15 },
    { icon: Rocket, delay: 2000, x: 15, y: 75 },
    { icon: Target, delay: 3000, x: 80, y: 80 },
    { icon: Users, delay: 1500, x: 50, y: 10 },
    { icon: Sparkles, delay: 2500, x: 90, y: 50 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Interactive Mouse-Following Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        animation: 'grid-move 20s linear infinite'
      }} />

      {/* Floating Interactive Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className="absolute opacity-20 group cursor-pointer transition-all duration-500 hover:opacity-80 hover:scale-150"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}ms`
            }}
          >
            <Icon className="w-8 h-8 text-purple-400 animate-pulse group-hover:text-yellow-400 transition-colors" />
          </div>
        );
      })}

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Header Badge */}
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-12 group hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <Globe className="w-5 h-5 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-white text-sm font-medium">Trusted by Fortune 500 Companies Globally</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>

          {/* Interactive Main Headline */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-space-grotesk font-bold mb-12 leading-[0.85] tracking-tight">
              <span className="block text-white hover:text-purple-300 transition-colors duration-300 cursor-default">
                AI-First Product
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Development
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90 hover:text-white transition-colors duration-300 cursor-default">
                That Actually Ships
              </span>
            </h1>
            
            {/* Interactive Accent Line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            We architect and deploy enterprise-grade AI solutions, intelligent automation workflows, 
            conversational agents, and scalable platforms for <span className="text-purple-400 font-medium">global market leaders</span>.
          </p>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12 py-6 rounded-2xl group shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Start Your AI Journey
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white/30 hover:bg-white/10 text-lg px-10 py-6 rounded-2xl backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <Target className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          {/* Interactive Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-20">
            {[
              { icon: Shield, text: "Enterprise Security", color: "text-green-400" },
              { icon: Zap, text: "Rapid Deployment", color: "text-yellow-400" },
              { icon: Trophy, text: "Award Winning", color: "text-purple-400" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 group cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-6 h-6 ${item.color} group-hover:animate-bounce`} />
                  <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Interactive Metrics Grid */}
          <div className="animate-fade-in">
            <h3 className="text-white/70 text-lg font-medium mb-12 tracking-widest">PROVEN TRACK RECORD</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { value: animatedCounts.teams, suffix: "+", label: "Expert Team Members", isActive: currentMetric === 0 },
                { value: animatedCounts.products, suffix: "+", label: "Products Delivered", isActive: currentMetric === 1 },
                { value: animatedCounts.markets, suffix: "+", label: "Global Markets", isActive: currentMetric === 2 },
                { value: animatedCounts.success, suffix: "%", label: "Success Rate", isActive: currentMetric === 3 }
              ].map((metric, index) => (
                <div 
                  key={index} 
                  className={`group cursor-pointer transition-all duration-500 hover:scale-110 ${
                    metric.isActive ? 'scale-110' : ''
                  }`}
                >
                  <div className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 hover:bg-white/15 ${
                    metric.isActive 
                      ? 'border-purple-400/50 bg-white/10 shadow-lg shadow-purple-500/20' 
                      : 'border-white/10 hover:border-purple-400/30'
                  }`}>
                    {metric.isActive && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping" />
                    )}
                    <div className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 ${
                      metric.isActive ? 'text-purple-400' : 'text-white group-hover:text-purple-400'
                    }`}>
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-white/70 text-sm font-medium uppercase tracking-wide leading-tight">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-md group-hover:border-purple-400/50 transition-colors duration-300 group-hover:scale-110">
          <div className="w-1.5 h-4 bg-purple-400 rounded-full mt-2 animate-bounce group-hover:bg-yellow-400 transition-colors"></div>
        </div>
        <p className="text-white/50 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll to explore</p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100px, 100px); }
          }
        `
      }} />
    </section>
  );
};

export default Hero;