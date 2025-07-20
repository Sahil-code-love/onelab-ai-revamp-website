import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, Zap, Layers } from "lucide-react";

const WhatWeBuild = () => {
  const offerings = [
    {
      icon: Brain,
      title: "AI-Powered MVPs",
      description: "Build from zero to v1 in weeks with AI-native thinking",
      features: ["Rapid prototyping", "AI-first architecture", "Market validation"]
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Voice bots, assistants, internal tools — tailored to your workflow",
      features: ["Voice agents", "Conversational AI", "Process automation"]
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Automate decision-making, operations, and data processes",
      features: ["Smart workflows", "Data processing", "Decision engines"]
    },
    {
      icon: Layers,
      title: "Full-Stack Platforms",
      description: "Scalable apps with LLMs, realtime infra, and product-grade design",
      features: ["End-to-end platforms", "Real-time capabilities", "Enterprise scale"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            What We Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intelligent MVPs to enterprise-grade AI platforms, we deliver solutions that transform businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="glass-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <offering.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-space-grotesk">{offering.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {offering.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-tech-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;