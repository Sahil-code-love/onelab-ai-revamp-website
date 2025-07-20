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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover:shadow-medium transition-all duration-300 group relative">
              {testimonial.hasVideo && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-tech-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-tech-accent text-tech-accent" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-tech-accent rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-tech-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;