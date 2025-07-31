import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Cog, Globe, Database } from "lucide-react";

const WhatWeBuild = () => {
  const offerings = [
    {
      icon: MessageSquare,
      title: "Custom AI Agents",
      description: "Conversational, task-driven, or multi-modal — we build intelligent agents tailored to your workflows. Integrated, fine-tuned, and grounded in your real-world context."
    },
    {
      icon: Cog,
      title: "Enterprise Automation & AI Ops",
      description: "We streamline operations using AI — from smart workflows and dynamic approvals to autonomous decision engines. Built to integrate into your stack, scale with usage, and deliver measurable ROI."
    },
    {
      icon: Globe,
      title: "Full-Stack AI Applications",
      description: "We architect and ship AI-first web and mobile platforms — from intelligent dashboards to data-rich SaaS tools. End-to-end systems combining frontend UX, backend logic, vector stores, LLMs, and cloud infra."
    },
    {
      icon: Database,
      title: "Data & Model Infrastructure",
      description: "Robust data pipelines, embeddings, model orchestration, and API-level integrations — we set up the foundation for scalable AI, so your systems can evolve with intelligence built-in."
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--tech-accent))] rounded-full opacity-[0.03] blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--primary))] rounded-full opacity-[0.02] blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-foreground mb-8">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Full-stack AI, automation, and custom agents — built fast, built right, built for production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative bg-card rounded-3xl border border-border/60 hover:border-[hsl(var(--tech-accent))]/30 transition-all duration-700 hover:shadow-strong overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/[0.01] to-[hsl(var(--tech-accent))]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Icon section */}
                <div className="relative p-10 pb-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong group-hover:scale-110 transition-all duration-500">
                        <offering.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
                    </div>
                    
                    {/* Number indicator */}
                    <div className="text-6xl font-space-grotesk font-bold text-[hsl(var(--tech-accent))]/10 group-hover:text-[hsl(var(--tech-accent))]/20 transition-colors duration-500">
                      0{index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-space-grotesk font-bold text-foreground group-hover:text-[hsl(var(--tech-accent))] transition-colors duration-500">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {offering.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;