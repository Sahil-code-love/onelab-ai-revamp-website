import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, Zap, Bot, CheckCircle, ArrowRight, Building2, Briefcase, HeadphonesIcon, Mail, Phone, Settings, Lightbulb, Cpu, Code, MessageSquare } from "lucide-react";

const SalesAutomation = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "B2B SaaS Companies",
      description: "Automating demo scheduling, lead qualification, and pipeline updates."
    },
    {
      icon: TrendingUp,
      title: "Sales-Led Startups",
      description: "Helping lean teams scale outreach with limited resources."
    },
    {
      icon: Settings,
      title: "CRM & Sales Tech Providers",
      description: "Building layered automations, integrations, and tools on top of existing systems."
    },
    {
      icon: Target,
      title: "Marketing & Demand Gen Teams",
      description: "Bridging MQLs into booked meetings with automated nurture flows."
    },
    {
      icon: Users,
      title: "Enterprise Sales Teams",
      description: "Scaling multi-channel engagement and improving pipeline visibility."
    },
    {
      icon: Briefcase,
      title: "Sales-Focused Agencies",
      description: "Automating prospecting and follow-up workflows for client or internal teams."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Lead Capture & Routing",
      description: "Qualify and assign leads in real time, based on your sales logic."
    },
    {
      icon: MessageSquare,
      title: "Conversational Sales Assistants",
      description: "Automate FAQs, meeting booking, and early objection handling via email or chat."
    },
    {
      icon: Mail,
      title: "Email Sequences & Smart Follow-Ups",
      description: "Automatically re-engage leads based on timing, interaction, or deal stage."
    },
    {
      icon: Settings,
      title: "CRM & Tool Integrations",
      description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, or custom platforms."
    },
    {
      icon: Bot,
      title: "Agent Assist & Deal Intelligence",
      description: "Recommend next steps and responses in real-time, using historical deal data."
    },
    {
      icon: TrendingUp,
      title: "Lead Scoring & Forecast Automation",
      description: "Use AI to prioritize pipeline and enhance win probability insights."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Sales-Aligned Thinking",
      description: "We tailor automations to your process, not generic templates."
    },
    {
      icon: Zap,
      title: "Built-In Flexibility",
      description: "Logic flows are mapped to your actual handoffs and funnel stages."
    },
    {
      icon: Settings,
      title: "CRM-Native Integrations",
      description: "Automations stay in sync with your existing data and tools."
    },
    {
      icon: Users,
      title: "Maintain Human Touch",
      description: "Bots automate the routine — reps focus on relationships."
    },
    {
      icon: TrendingUp,
      title: "Actionable Metrics",
      description: "Track what works and where drop-offs happen, without noise."
    },
    {
      icon: CheckCircle,
      title: "Secure & Scalable",
      description: "Built with enterprise-grade security and ready to grow with your team."
    }
  ];

  const automations = [
    {
      icon: Lightbulb,
      title: "From Strategy to Execution",
      description: "Your sales logic becomes executable code — no compromises. We capture your intent, team rules, and outreach flows, and automate them with precision."
    },
    {
      icon: Cpu,
      title: "Fully Tailored, No-Code for You",
      description: "We handle the complexity behind the scenes. You get automation that fits your existing stack and team workflows — without learning new tools or platforms."
    },
    {
      icon: Code,
      title: "Adaptable to Change",
      description: "As your GTM strategy evolves, so can your automation. From changing routing rules to new ICPs — your sales agents stay in sync."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge variant="outline" className="border-tech-accent text-tech-accent mx-auto">
                Sales Automation Agents
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Smarter Sales, 
                <span className="text-tech-accent block">Less Manual Work</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From lead engagement to deal closure, we build custom automation agents that streamline sales workflows, improve follow-ups, and scale outreach — without adding complexity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Building with Onelab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                See Custom Automations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Segments Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Market Segments <span className="text-tech-accent">We Serve</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We work with sales-driven organizations across industries — helping them automate touchpoints, personalize outreach, and scale growth.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {marketSegments.map((segment, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-medium transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-tech-accent/10 flex items-center justify-center flex-shrink-0">
                      <segment.icon className="w-5 h-5 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{segment.title}</h3>
                      <p className="text-sm text-muted-foreground">{segment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-tech-accent/20 to-purple-500/20 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-card/80 backdrop-blur-sm border shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-tech-accent/10 flex items-center justify-center">
                      <Bot className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Custom Sales AI</h3>
                      <p className="text-muted-foreground">Tailored to your process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-tech-accent">Offerings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build automation systems aligned with your team, tools, and sales motion — not the other way around.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-tech-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why <span className="text-tech-accent">Onelab</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-tech-accent/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Sales Logic, <span className="text-tech-accent">Turned Into Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't force your team to adapt to rigid flows. Instead, we build automation around your existing playbooks, routing logic, and GTM strategy — giving you control, without the manual work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {automations.map((automation, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 flex items-center justify-center mx-auto mb-6">
                    <automation.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{automation.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {automation.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Automate What Slows You Down
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're fixing drop-offs, chasing follow-ups, or scaling faster — we build automation that works for your team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Building with Onelab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Automation Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAutomation;