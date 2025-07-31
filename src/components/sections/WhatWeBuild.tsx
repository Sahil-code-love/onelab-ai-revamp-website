import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Workflow, Code, Server } from "lucide-react";

const WhatWeBuild = () => {
  const offerings = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Conversational, task-driven, or multi-modal — we build intelligent agents tailored to your workflows. Integrated, fine-tuned, and grounded in your real-world context.",
      accent: "tech-accent"
    },
    {
      icon: Workflow,
      title: "Enterprise Automation & AI Ops",
      description: "We streamline operations using AI — from smart workflows and dynamic approvals to autonomous decision engines. Built to integrate into your stack, scale with usage, and deliver measurable ROI.",
      accent: "primary"
    },
    {
      icon: Code,
      title: "Full-Stack AI Applications",
      description: "We architect and ship AI-first web and mobile platforms — from intelligent dashboards to data-rich SaaS tools. End-to-end systems combining frontend UX, backend logic, vector stores, LLMs, and cloud infra.",
      accent: "tech-accent"
    },
    {
      icon: Server,
      title: "Data & Model Infrastructure",
      description: "Robust data pipelines, embeddings, model orchestration, and API-level integrations — we set up the foundation for scalable AI, so your systems can evolve with intelligence built-in.",
      accent: "primary"
    }
  ];

  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Dynamic geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-40 w-96 h-96 bg-[hsl(var(--tech-accent))] rounded-full opacity-[0.03] blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[hsl(var(--primary))] rounded-full opacity-[0.04] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[hsl(var(--tech-accent))]/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-foreground mb-8">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Full-stack AI, automation, and custom agents — built fast, built right, built for production.
          </p>
        </div>

        {/* Modern hexagonal grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative">
                {/* Floating icon container */}
                <div className="absolute -top-8 left-8 z-10">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-strong transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow ${
                      offering.accent === 'tech-accent' 
                        ? 'bg-gradient-to-br from-[hsl(var(--tech-accent))] to-[hsl(var(--primary))]' 
                        : 'bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))]'
                    }`}>
                      <offering.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    {/* Rotating ring */}
                    <div className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:rotate-180 ${
                      offering.accent === 'tech-accent' 
                        ? 'border-[hsl(var(--tech-accent))]' 
                        : 'border-[hsl(var(--primary))]'
                    }`}></div>
                  </div>
                </div>

                {/* Main card */}
                <div className="relative bg-card rounded-[2.5rem] border border-border/60 hover:border-[hsl(var(--tech-accent))]/30 transition-all duration-700 overflow-hidden pt-16 group-hover:shadow-strong">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    offering.accent === 'tech-accent'
                      ? 'bg-gradient-to-br from-[hsl(var(--tech-accent))]/[0.02] to-[hsl(var(--primary))]/[0.02]'
                      : 'bg-gradient-to-br from-[hsl(var(--primary))]/[0.02] to-[hsl(var(--tech-accent))]/[0.02]'
                  }`}></div>
                  
                  {/* Content area */}
                  <div className="relative p-10 pt-8">
                    <h3 className={`text-2xl font-space-grotesk font-bold text-foreground mb-6 transition-colors duration-500 ${
                      offering.accent === 'tech-accent'
                        ? 'group-hover:text-[hsl(var(--tech-accent))]'
                        : 'group-hover:text-[hsl(var(--primary))]'
                    }`}>
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                      {offering.description}
                    </p>
                    
                    {/* Bottom design element */}
                    <div className="flex items-center justify-between">
                      <div className={`flex-1 h-px transition-all duration-700 ${
                        offering.accent === 'tech-accent'
                          ? 'bg-gradient-to-r from-[hsl(var(--tech-accent))]/20 to-transparent'
                          : 'bg-gradient-to-r from-[hsl(var(--primary))]/20 to-transparent'
                      } group-hover:to-50%`}></div>
                      <div className={`w-3 h-3 rounded-full ml-4 transition-all duration-500 ${
                        offering.accent === 'tech-accent'
                          ? 'bg-[hsl(var(--tech-accent))]/30 group-hover:bg-[hsl(var(--tech-accent))]/60'
                          : 'bg-[hsl(var(--primary))]/30 group-hover:bg-[hsl(var(--primary))]/60'
                      }`}></div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                    offering.accent === 'tech-accent'
                      ? 'bg-gradient-to-bl from-[hsl(var(--tech-accent))]/10 to-transparent'
                      : 'bg-gradient-to-bl from-[hsl(var(--primary))]/10 to-transparent'
                  } rounded-bl-[2rem]`}></div>
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