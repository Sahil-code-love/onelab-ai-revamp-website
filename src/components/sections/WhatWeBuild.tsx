import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Cog, Globe, Database } from "lucide-react";

const WhatWeBuild = () => {
  const offerings = [
    {
      icon: MessageSquare,
      title: "Custom AI Agents",
      description: "Conversational, task-driven, or multi-modal — we build intelligent agents tailored to your workflows. Integrated, fine-tuned, and grounded in your real-world context.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Cog,
      title: "Enterprise Automation & AI Ops",
      description: "We streamline operations using AI — from smart workflows and dynamic approvals to autonomous decision engines. Built to integrate into your stack, scale with usage, and deliver measurable ROI.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Full-Stack AI Applications",
      description: "We architect and ship AI-first web and mobile platforms — from intelligent dashboards to data-rich SaaS tools. End-to-end systems combining frontend UX, backend logic, vector stores, LLMs, and cloud infra.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Database,
      title: "Data & Model Infrastructure",
      description: "Robust data pipelines, embeddings, model orchestration, and API-level integrations — we set up the foundation for scalable AI, so your systems can evolve with intelligence built-in.",
      gradient: "from-indigo-500 to-blue-600"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                   style={{backgroundImage: `linear-gradient(135deg, var(--primary), var(--primary-glow))`}} />
              
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${offering.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <offering.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl font-space-grotesk font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
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