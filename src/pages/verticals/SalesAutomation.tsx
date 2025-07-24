import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, Zap, Bot, CheckCircle, ArrowRight, Phone } from "lucide-react";

const SalesAutomation = () => {
  const benefits = [
    {
      icon: Target,
      title: "Lead Qualification",
      description: "AI-powered lead scoring and qualification automation"
    },
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Faster deal closure with intelligent sales insights"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep customer insights for personalized sales approaches"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlined sales workflows and follow-up automation"
    },
    {
      icon: Bot,
      title: "AI Sales Agents",
      description: "Virtual sales assistants that work 24/7"
    }
  ];

  const solutions = [
    {
      title: "Intelligent Lead Generation",
      description: "AI-powered prospecting and lead identification systems",
      features: ["Prospect research", "Contact discovery", "Lead enrichment"]
    },
    {
      title: "Sales Conversation AI",
      description: "Automated sales calls and email campaigns with AI agents",
      features: ["Voice AI agents", "Email automation", "Follow-up sequences"]
    },
    {
      title: "Sales Analytics Platform",
      description: "Comprehensive sales performance tracking and optimization",
      features: ["Pipeline analysis", "Performance metrics", "Predictive forecasting"]
    }
  ];

  const stats = [
    { value: "68%", label: "Increase in qualified leads" },
    { value: "45%", label: "Faster sales cycles" },
    { value: "3x", label: "More meetings booked" },
    { value: "24/7", label: "Automated prospecting" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-tech-accent text-tech-accent">
                  Sales Automation Agents
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Scale Your Sales with 
                  <span className="text-tech-accent"> AI Agents</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionize your sales process with intelligent automation agents that 
                  prospect, qualify, and convert leads while you focus on closing deals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-tech">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="btn-ghost-tech">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-tech-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Sales Agent</h3>
                    <p className="text-sm text-muted-foreground">Qualifying prospects</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Lead researched & qualified</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Personalized outreach sent</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Meeting scheduled</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tech-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transform Your Sales Process with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent automation that handles the heavy lifting while you focus on what matters most
            </p>
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

      {/* Solutions Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Complete Sales Automation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end AI solutions for every stage of your sales funnel
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <CardTitle className="text-xl mb-4">{solution.title}</CardTitle>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-tech-accent mr-2 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Supercharge Your Sales?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join leading sales teams using our AI agents to accelerate growth and close more deals
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Sales AI Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAutomation;