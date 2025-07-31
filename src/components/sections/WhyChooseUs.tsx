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
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground mb-4">
            Why Teams Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted AI execution partners — fast, hands-on, and built for real-world outcomes.
          </p>
        </div>

        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl border-2 border-border hover:border-primary/40 transition-all duration-500 p-6 h-full group-hover:shadow-lg group-hover:-translate-y-1">
                
                {/* Compact Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <reason.icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-accent rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg transform scale-125"></div>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-xl group-hover:scale-125 group-hover:border-primary/50 transition-all duration-700"></div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-space-grotesk font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 w-10 h-0.5 bg-gradient-to-r from-primary to-tech-accent mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;