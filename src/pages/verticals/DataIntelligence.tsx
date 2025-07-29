import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Rocket, Database, BarChart3, Brain, Zap, Settings, HeadphonesIcon, Eye, Puzzle, CheckCircle, Shield, ArrowRight } from "lucide-react";

const DataIntelligence = () => {
  const marketSegments = [
    {
      icon: Users,
      title: "Retail & E-Commerce",
      description: "Enabling smart inventory planning, customer segmentation, and real-time performance tracking."
    },
    {
      icon: Settings,
      title: "Healthcare & Life Sciences",
      description: "Structuring clinical data, automating documentation, and supporting compliance workflows."
    },
    {
      icon: Target,
      title: "Banking & Insurance",
      description: "Powering fraud detection, risk modeling, and internal workflow automation with secure systems."
    },
    {
      icon: Rocket,
      title: "Logistics & Supply Chain",
      description: "Building data-backed dispatch, tracking, and demand planning systems."
    },
    {
      icon: Database,
      title: "Product & SaaS Platforms",
      description: "Creating internal analytics tools, automation flows, and ML-based recommendations."
    }
  ];

  const ourServices = [
    {
      icon: Database,
      title: "Data Engineering & Integration",
      description: "We consolidate messy data from different sources into structured pipelines and unified views."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards & Visibility Tools",
      description: "We build simple, powerful dashboards that support fast, data-informed decisions."
    },
    {
      icon: Brain,
      title: "Machine Learning Applications",
      description: "We design clear, production-ready models to detect patterns, forecast demand, or reduce churn."
    },
    {
      icon: Zap,
      title: "Internal Tools & Workflow Automation",
      description: "We replace spreadsheets, emails, and manual tasks with logic-driven, connected systems."
    },
    {
      icon: Settings,
      title: "Smart Ops Assistants & Agents",
      description: "We create AI-based tools to support ops teams with triage, summarization, and routing."
    },
    {
      icon: HeadphonesIcon,
      title: "Model Monitoring & Optimization",
      description: "We ensure systems stay reliable over time with performance tracking and feedback loops."
    }
  ];

  const whyChooseUs = [
    {
      icon: Puzzle,
      title: "Works with Your Stack",
      description: "Our solutions adapt to your existing tools, systems, and workflows — no forced migrations."
    },
    {
      icon: Eye,
      title: "Designed for Adoption",
      description: "Our interfaces are made for real users — not just analysts or engineers."
    },
    {
      icon: Shield,
      title: "Explainable AI, Not Black Boxes",
      description: "We keep logic visible and interpretable — so your team understands how the system works."
    },
    {
      icon: Zap,
      title: "Practical Automation",
      description: "We automate with intent — freeing up time where it matters and leaving decisions in your hands when needed."
    },
    {
      icon: Database,
      title: "Modular Architecture",
      description: "Systems are built to scale and evolve without lock-in or bloat."
    },
    {
      icon: Users,
      title: "Collaborative Delivery",
      description: "We embed alongside your team — from design through launch and beyond."
    }
  ];

  const governanceLayers = [
    {
      icon: Users,
      title: "Human-in-the-Loop Workflows",
      description: "Automations are designed to assist — not override — human decision-making where it matters."
    },
    {
      icon: Shield,
      title: "Role-Based Access & Controls",
      description: "Define exactly who can trigger, edit, or view automated processes."
    },
    {
      icon: Eye,
      title: "End-to-End Audit Trails",
      description: "Every action and automation step is logged for review, rollback, or compliance checks."
    },
    {
      icon: Settings,
      title: "Fail-Safe & Manual Overrides",
      description: "When something's off, your team stays in control — with pause, review, and fallback options."
    },
    {
      icon: CheckCircle,
      title: "Pre-Deployment Testing",
      description: "Automation flows can be simulated before going live — ensuring reliability and trust."
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
                Data Intelligence & Automation
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                From Data Chaos to Smart,
                <span className="text-tech-accent block">Connected Systems</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We help businesses turn fragmented data and manual operations into streamlined, intelligent systems — using automation, analytics, and custom-built tools tailored to your workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Building with Onelab
                <ArrowRight className="ml-2 h-5 w-5" />
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
                  We work across data-intensive industries — where operational visibility, speed, and scale matter.
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
                      <Brain className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Data Intelligence</h3>
                      <p className="text-muted-foreground">Turning chaos into clarity</p>
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
              Our <span className="text-tech-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design intelligent systems that are easy to adopt, flexible to scale, and built for long-term clarity and control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-l-tech-accent bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tech-accent to-tech-accent/70 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
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

      {/* Why Choose Onelab Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-tech-accent">Onelab</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just building tools — we're building systems that align with your people, process, and performance needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300 bg-secondary/20 border-2 border-dashed border-tech-accent/30 hover:border-tech-accent/60">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-tech-accent/5 border border-tech-accent/20 flex items-center justify-center mb-6">
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

      {/* Governance & Control Layers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Governance & Control Layers</span> in Intelligent Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automation should never feel risky or invisible. We build in transparency, safety nets, and clear human oversight.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governanceLayers.map((item, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-t from-tech-accent/5 to-transparent border-t-4 border-t-tech-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 border-2 border-tech-accent/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Build Intelligent Systems You Can Trust
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We help teams automate what matters, structure the data that drives them, and create tools they can actually rely on — from first build to full scale.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Building with Onelab
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataIntelligence;