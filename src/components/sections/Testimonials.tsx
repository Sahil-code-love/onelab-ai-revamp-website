import { Card, CardContent } from "@/components/ui/card";
import { Star, Play } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, HealthTech Innovations",
      company: "Series A Startup",
      content: "OneLab delivered our AI-powered diagnostic platform in just 8 weeks. Their AI-first approach saved us months of development time and $500K in costs.",
      rating: 5,
      hasVideo: true,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, FinanceFlow",
      company: "Series B Company",
      content: "The voice AI agent they built processes 1000+ customer calls daily with 95% accuracy. It's transformed our customer service operations completely.",
      rating: 5,
      hasVideo: false,
      avatar: "MR"
    },
    {
      name: "Dr. Priya Patel",
      role: "Founder, MedAssist AI",
      company: "Healthcare Startup",
      content: "Their team understood our complex medical requirements instantly. The AI diagnostic tool they built is now used by 50+ clinics nationwide.",
      rating: 5,
      hasVideo: true,
      avatar: "PP"
    },
    {
      name: "James Wilson",
      role: "VP Engineering, DataCorp",
      company: "Enterprise Client",
      content: "OneLab's data intelligence platform processes millions of transactions in real-time. Their solution scaled seamlessly as we grew 10x.",
      rating: 5,
      hasVideo: false,
      avatar: "JW"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from founders and CTOs who've scaled with OneLab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              {/* Video thumbnail style card */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-tech-accent/10 rounded-lg overflow-hidden mb-4 cursor-pointer group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-accent/20"></div>
                
                {/* Avatar in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                </div>

                {/* Play button overlay - only show if hasVideo is true */}
                {testimonial.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Company badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-white text-xs font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>

              {/* Quote and details */}
              <div className="space-y-3">
                <blockquote className="text-sm text-foreground leading-relaxed line-clamp-3">
                  "{testimonial.content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;