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
      {/* Flowing background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[hsl(var(--tech-accent))] rounded-full opacity-[0.04] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[hsl(var(--primary))] rounded-full opacity-[0.03] blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-foreground mb-8">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Full-stack AI, automation, and custom agents — built fast, built right, built for production.
          </p>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* First capability - spans more space */}
          <div className="lg:col-span-7 animate-fade-in">
            <div className="group relative h-full">
              <div className="relative bg-card rounded-[2rem] border border-border/60 hover:border-[hsl(var(--tech-accent))]/40 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/[0.02] via-transparent to-[hsl(var(--tech-accent))]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-500">
                          <MessageSquare className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-500"></div>
                      </div>
                      <div className="h-16 w-0.5 bg-gradient-to-b from-[hsl(var(--tech-accent))] to-transparent opacity-30"></div>
                    </div>
                    
                    <h3 className="text-3xl font-space-grotesk font-bold text-foreground group-hover:text-[hsl(var(--tech-accent))] transition-colors duration-500 mb-6">
                      {offerings[0].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {offerings[0].description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center text-[hsl(var(--tech-accent))]/60 group-hover:text-[hsl(var(--tech-accent))] transition-colors duration-500">
                    <div className="flex-1 h-px bg-gradient-to-r from-[hsl(var(--tech-accent))]/20 to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--tech-accent))]/40 mx-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second capability - smaller card */}
          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="group relative h-full">
              <div className="relative bg-card rounded-[2rem] border border-border/60 hover:border-[hsl(var(--primary))]/40 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--tech-accent))]/[0.02] to-[hsl(var(--primary))]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--tech-accent))] to-[hsl(var(--primary))] rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-500 mb-6">
                    <Cog className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-500 mb-4">
                    {offerings[1].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {offerings[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third capability - medium card */}
          <div className="lg:col-span-5 animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="group relative h-full">
              <div className="relative bg-card rounded-[2rem] border border-border/60 hover:border-[hsl(var(--tech-accent))]/40 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/[0.02] to-[hsl(var(--tech-accent))]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-500 mb-6">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground group-hover:text-[hsl(var(--tech-accent))] transition-colors duration-500 mb-4">
                    {offerings[2].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {offerings[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth capability - larger card */}
          <div className="lg:col-span-7 animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="group relative h-full">
              <div className="relative bg-card rounded-[2rem] border border-border/60 hover:border-[hsl(var(--primary))]/40 transition-all duration-700 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--tech-accent))]/[0.02] via-transparent to-[hsl(var(--primary))]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--tech-accent))] to-[hsl(var(--primary))] rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-500">
                          <Database className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-[hsl(var(--tech-accent))] to-[hsl(var(--primary))] rounded-2xl opacity-0 group-hover:opacity-10 blur transition-all duration-500"></div>
                      </div>
                      <div className="h-16 w-0.5 bg-gradient-to-b from-[hsl(var(--primary))] to-transparent opacity-30"></div>
                    </div>
                    
                    <h3 className="text-3xl font-space-grotesk font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-500 mb-6">
                      {offerings[3].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {offerings[3].description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center text-[hsl(var(--primary))]/60 group-hover:text-[hsl(var(--primary))] transition-colors duration-500">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]/40 mr-4"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-[hsl(var(--primary))]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;