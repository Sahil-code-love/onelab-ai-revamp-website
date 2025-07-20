import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-48 h-48 bg-tech-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-6 leading-tight">
            Let's Build Something 
            <br />
            <span className="text-tech-accent">Smart Together</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            No fluff. No lock-ins. Just intelligent products, built right.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 group">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="btn-ghost-tech text-lg px-8 py-4 group">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          <div className="text-white/70 text-sm">
            <p>🚀 Free consultation • 📞 Same-day response • 💡 No commitment required</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;