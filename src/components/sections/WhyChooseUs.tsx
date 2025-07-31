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

        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="bg-card rounded-2xl border-2 border-border hover:border-primary/40 transition-all duration-500 p-8 h-full group-hover:shadow-xl group-hover:-translate-y-1">
                
                {/* Enhanced Icon Container */}
                <div className="relative mb-8 flex justify-center">
                  {/* Main icon background */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary via-primary to-tech-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <reason.icon className="w-10 h-10 text-white relative z-10" />
                    
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg transform scale-125"></div>
                  </div>
                  
                  {/* Outer ring animation */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-primary/20 rounded-2xl group-hover:scale-125 group-hover:border-primary/50 transition-all duration-700 group-hover:rotate-180"></div>
                  
                  {/* Corner accent dots */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-tech-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;