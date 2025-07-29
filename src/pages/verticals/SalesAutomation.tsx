import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, Zap, Bot, CheckCircle, ArrowRight, Building2, Briefcase, HeadphonesIcon, Mail, Phone, Settings } from "lucide-react";

const SalesAutomation = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Enterprise Sales Teams",
      description: "Large organizations with complex sales processes"
    },
    {
      icon: Briefcase,
      title: "B2B Service Providers",
      description: "Professional services and consulting firms"
    },
    {
      icon: Target,
      title: "SaaS Companies",
      description: "Software companies with subscription models"
    },
    {
      icon: HeadphonesIcon,
      title: "Real Estate Agencies",
      description: "Property sales and real estate professionals"
    },
    {
      icon: Users,
      title: "Insurance Companies",
      description: "Insurance brokers and agencies"
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Investment firms and financial advisors"
    }
  ];

  const services = [
    {
      icon: Bot,
      title: "Custom AI Sales Agents",
      description: "Build personalized AI agents that understand your unique sales process, product portfolio, and customer personas for maximum conversion."
    },
    {
      icon: Phone,
      title: "Tailored Calling Solutions",
      description: "Custom voice AI systems that sound natural and handle objections specific to your industry and sales methodology."
    },
    {
      icon: Mail,
      title: "Personalized Email Automation",
      description: "Customized email sequences and follow-up campaigns that reflect your brand voice and sales approach."
    },
    {
      icon: Target,
      title: "Custom Lead Qualification",
      description: "Build intelligent lead scoring systems tailored to your ideal customer profile and sales criteria."
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics Dashboard",
      description: "Custom reporting and analytics solutions that track the metrics most important to your sales goals."
    },
    {
      icon: Settings,
      title: "CRM Integration Solutions",
      description: "Seamless integration with your existing CRM and sales tools, customized to your workflow requirements."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Sales Process Expertise",
      description: "Deep understanding of various sales methodologies and industry-specific approaches."
    },
    {
      icon: Bot,
      title: "AI Agent Specialization",
      description: "Advanced expertise in building and training AI agents for sales conversations and automation."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Quick deployment of custom sales automation solutions with minimal disruption to existing processes."
    },
    {
      icon: Users,
      title: "Team Training & Support",
      description: "Comprehensive training and ongoing support to ensure your team maximizes the custom solution."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of custom automation based on real performance data and feedback."
    },
    {
      icon: CheckCircle,
      title: "Scalable Architecture",
      description: "Custom solutions built to scale with your growing sales team and expanding market reach."
    }
  ];

  const automations = [
    {
      icon: Phone,
      title: "Voice AI Calling",
      description: "Custom voice agents for prospecting, qualification, and appointment setting"
    },
    {
      icon: Mail,
      title: "Email Sequences",
      description: "Personalized automated email campaigns and follow-up sequences"
    },
    {
      icon: Target,
      title: "Lead Scoring",
      description: "Intelligent lead qualification and priority ranking systems"
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
                Custom Sales Automation 
                <span className="text-tech-accent block"> Built for Your Process</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Transform your unique sales process with fully customizable AI agents and automation tools designed specifically for your industry and methodology.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Build Custom Sales AI
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
                  Industries <span className="text-tech-accent">We Automate For</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We build end-to-end customizable sales automation solutions for every industry and sales model.
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
              Our Custom <span className="text-tech-accent">Sales Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end customizable sales automation solutions built specifically for your unique sales process and requirements.
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
              Why Choose <span className="text-tech-accent">OneLib</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven expertise in delivering custom sales automation that transforms sales performance and drives revenue growth.
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

      {/* Automation Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Custom Automations</span> We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored automation solutions designed specifically for your sales process and customer journey.
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
                Ready for Your Custom Sales Automation?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's build a completely customized sales automation solution that fits your exact process and drives measurable results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom Sales Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Custom Automation Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAutomation;