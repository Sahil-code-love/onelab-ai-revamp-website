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
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Full-stack AI, automation, and custom agents — built fast, built right, built for production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="group relative overflow-hidden bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-strong">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" 
                   style={{background: 'var(--gradient-primary)'}} />
              
              <CardHeader className="p-10">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--tech-accent))] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-medium">
                    <offering.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <CardTitle className="text-2xl font-space-grotesk font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                      {offering.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;