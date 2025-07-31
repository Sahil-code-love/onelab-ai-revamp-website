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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-tech-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Why Teams Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted AI execution partners — fast, hands-on, and built for real-world outcomes.
          </p>
        </div>

        {/* Vertical timeline layout */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tech-accent to-primary opacity-30 hidden lg:block"></div>

          <div className="space-y-16">
            {reasons.map((reason, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-tech-accent rounded-full border-4 border-background z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content container */}
                  <div className={`flex items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Spacer for timeline alignment */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                    
                    {/* Content */}
                    <div className="w-full lg:w-1/2 lg:px-12">
                      <div className={`bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/20 transition-all duration-500 group-hover:shadow-xl transform group-hover:scale-105 ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}>
                        
                        {/* Number badge */}
                        <div className="flex items-start space-x-6">
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                              <reason.icon className="w-8 h-8 text-white" />
                            </div>
                            {/* Floating ring */}
                            <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                              {reason.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              {reason.description}
                            </p>
                          </div>
                        </div>

                        {/* Connecting line to timeline */}
                        <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-r from-primary to-tech-accent opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;