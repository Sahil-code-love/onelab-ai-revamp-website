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

        {/* 5-item specific layout: 2 top (larger) + 3 bottom */}
        <div className="space-y-8">
          {/* Top Row - 2 larger cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reasons.slice(0, 2).map((reason, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 p-10 h-full group-hover:shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-tech-accent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                      <reason.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.slice(2, 5).map((reason, index) => (
              <div key={index + 2} className="group">
                <div className="bg-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 p-8 h-full group-hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;