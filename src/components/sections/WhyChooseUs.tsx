import { Search, Users, Building2, Zap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Search,
      title: "We Start Where It's Messy",
      description: "Unstructured data, unclear workflows, no documentation — that's where we shine. We bring clarity and ship working solutions where others hesitate."
    },
    {
      icon: Users,
      title: "150+ Builders. Zero Bureaucracy.",
      description: "A sharp, cross-functional team of AI engineers, full-stack developers, designers, and PMs — ready to own delivery end-to-end, without handoffs or friction."
    },
    {
      icon: Building2,
      title: "All Under One Roof", 
      description: "LLM agents, workflow automations, intelligent platforms — we design, build, and scale everything in-house. No vendor juggling. No shortcuts."
    },
    {
      icon: Zap,
      title: "Leaner Than In-House. Stronger Than Freelance.",
      description: "We offer high-leverage talent and fast iterations at a cost structure built for startups and scale-ups — without compromising on quality or accountability."
    },
    {
      icon: Shield,
      title: "Execution You Can Trust",
      description: "No bloated decks. No excuses. Just clear ownership, fast progress, and a partner who treats your product like their own."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Why Teams Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted AI execution partners — fast, hands-on, and built for real-world outcomes.
          </p>
        </div>

        {/* 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center">
              <div className="bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 p-8 h-full group-hover:shadow-xl group-hover:-translate-y-2">
                
                {/* Enhanced Icon Container */}
                <div className="relative mb-8 flex justify-center">
                  {/* Main icon background */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary via-primary to-tech-accent rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <reason.icon className="w-12 h-12 text-white relative z-10" />
                    
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-accent rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl transform scale-150"></div>
                  </div>
                  
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 w-24 h-24 border-2 border-primary/20 rounded-3xl group-hover:scale-125 group-hover:border-primary/40 transition-all duration-700 group-hover:rotate-180"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-tech-accent/60 rounded-full group-hover:animate-bounce"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary/60 rounded-full group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;