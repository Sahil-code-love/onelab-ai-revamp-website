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
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-10 w-72 h-72 bg-[hsl(var(--primary))] rounded-full opacity-[0.02] blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-[hsl(var(--tech-accent))] rounded-full opacity-[0.03] blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-gradient-to-b from-[hsl(var(--tech-accent))]/20 to-transparent rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-24 bg-gradient-to-b from-[hsl(var(--primary))]/20 to-transparent -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-foreground mb-8">
            Why Teams Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Trusted AI execution partners — fast, hands-on, and built for real-world outcomes.
          </p>
        </div>

        {/* Asymmetric masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`group animate-fade-in ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : 
                index === 3 ? 'md:col-span-2 lg:col-span-2' : 
                'md:col-span-1'
              }`}
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative h-full">
                {/* Main card container */}
                <div className={`
                  relative bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border/40 
                  hover:border-[hsl(var(--${reason.accent}))]/30 transition-all duration-700 overflow-hidden p-8 h-full
                  group-hover:shadow-strong group-hover:bg-card/80
                `}>
                  
                  {/* Gradient background overlay */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                    bg-gradient-to-br from-[hsl(var(--${reason.accent}))]/[0.03] to-transparent
                  `}></div>
                  
                  {/* Icon container with floating effect */}
                  <div className="relative mb-6">
                    <div className={`
                      w-18 h-18 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 
                      group-hover:scale-110 group-hover:shadow-glow relative z-10
                      bg-gradient-to-br from-[hsl(var(--${reason.accent}))] to-[hsl(var(--${reason.accent === 'primary' ? 'tech-accent' : 'primary'}))]
                    `}>
                      <reason.icon className="w-9 h-9 text-primary-foreground" />
                    </div>
                    
                    {/* Floating ring animation */}
                    <div className={`
                      absolute top-0 left-0 w-18 h-18 rounded-2xl border-2 opacity-0 
                      group-hover:opacity-40 transition-all duration-1000 group-hover:scale-125
                      border-[hsl(var(--${reason.accent}))]
                    `}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`
                      text-2xl font-space-grotesk font-bold text-foreground mb-4 
                      transition-colors duration-500 leading-tight
                      group-hover:text-[hsl(var(--${reason.accent}))]
                    `}>
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-[2rem]">
                    <div className={`
                      h-full w-0 group-hover:w-full transition-all duration-700 delay-200
                      bg-gradient-to-r from-[hsl(var(--${reason.accent}))] to-[hsl(var(--${reason.accent === 'primary' ? 'tech-accent' : 'primary'}))]
                    `}></div>
                  </div>

                  {/* Corner decoration */}
                  <div className={`
                    absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 
                    transition-all duration-700 rounded-tr-[2rem] rounded-bl-2xl
                    bg-gradient-to-bl from-[hsl(var(--${reason.accent}))]/10 to-transparent
                  `}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;