import { Search, Users, Building2, Zap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Search,
      title: "We Start Where It's Messy",
      description: "Unstructured data, unclear workflows, no documentation — that's where we shine. We bring clarity and ship working solutions where others hesitate.",
      accent: "primary"
    },
    {
      icon: Users,
      title: "150+ Builders. Zero Bureaucracy.",
      description: "A sharp, cross-functional team of AI engineers, full-stack developers, designers, and PMs — ready to own delivery end-to-end, without handoffs or friction.",
      accent: "tech-accent"
    },
    {
      icon: Building2,
      title: "All Under One Roof",
      description: "LLM agents, workflow automations, intelligent platforms — we design, build, and scale everything in-house. No vendor juggling. No shortcuts.",
      accent: "primary"
    },
    {
      icon: Zap,
      title: "Leaner Than In-House. Stronger Than Freelance.",
      description: "We offer high-leverage talent and fast iterations at a cost structure built for startups and scale-ups — without compromising on quality or accountability.",
      accent: "tech-accent"
    },
    {
      icon: Shield,
      title: "Execution You Can Trust",
      description: "No bloated decks. No excuses. Just clear ownership, fast progress, and a partner who treats your product like their own.",
      accent: "primary"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Why Teams Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted AI execution partners — fast, hands-on, and built for real-world outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`group animate-fade-in ${
                index === 0 ? 'md:col-span-2' : 
                index === 4 ? 'md:col-span-2 lg:col-span-3' :
                ''
              }`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative h-full bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 p-8 group-hover:shadow-strong">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tech-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    reason.accent === 'primary' 
                      ? 'bg-gradient-to-br from-primary to-primary/80' 
                      : 'bg-gradient-to-br from-tech-accent to-tech-accent/80'
                  }`}>
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-tech-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;