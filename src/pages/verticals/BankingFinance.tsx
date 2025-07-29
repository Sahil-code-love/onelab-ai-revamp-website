import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, TrendingUp, Zap, Users, CheckCircle, ArrowRight, Building2, Banknote, Lock, FileText, Activity, Brain, DollarSign, PieChart, Smartphone, Database, Cloud, Settings, Search, BarChart3, Monitor, HardDrive } from "lucide-react";

const BankingFinance = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Retail & Commercial Banks",
      description: "Supporting core system upgrades, customer portals, and real-time operations."
    },
    {
      icon: Zap,
      title: "Fintech Companies",
      description: "Accelerating product development, platform reliability, and regulatory readiness."
    },
    {
      icon: PieChart,
      title: "Wealth & Asset Management Firms",
      description: "Building personalized portfolio tools, performance analytics, and client dashboards."
    },
    {
      icon: DollarSign,
      title: "Lending & Credit Platforms",
      description: "Streamlining loan origination, underwriting automation, and KYC/AML workflows."
    },
    {
      icon: Shield,
      title: "Insurance & Insurtech Players",
      description: "Enabling claims automation, fraud detection, and data-driven decisioning."
    },
    {
      icon: CreditCard,
      title: "Payment Infrastructure Providers",
      description: "Powering secure, high-throughput systems with fraud protection and traceability."
    }
  ];

  const services = [
    {
      icon: Settings,
      title: "Core Platform Engineering",
      description: "From digital banking portals to modular lending systems — we modernize legacy workflows without disrupting operations."
    },
    {
      icon: Database,
      title: "Real-Time Data Infrastructure",
      description: "We build secure data layers to unify transactions, risk events, user behavior, and analytics in one place."
    },
    {
      icon: Brain,
      title: "Intelligent Process Automation",
      description: "We apply AI/ML for fraud detection, credit scoring, document intelligence, and service automation."
    },
    {
      icon: Smartphone,
      title: "Customer Experience Design",
      description: "We craft intuitive web and mobile user journeys to improve trust and retention."
    },
    {
      icon: Cloud,
      title: "Cloud & API Architecture",
      description: "We enable cloud-native or hybrid environments, exposing APIs securely for partners and internal teams."
    },
    {
      icon: Activity,
      title: "Integrations with Ecosystem Tools",
      description: "Seamless connections with CRMs, core banking, payment gateways, KYC/AML, and compliance tools."
    }
  ];

  const resilience = [
    {
      icon: Monitor,
      title: "Built for High Availability",
      description: "Systems designed to keep running with minimal disruption or downtime."
    },
    {
      icon: BarChart3,
      title: "Load-Tested for Traffic Surges",
      description: "We prepare for peak activity — so your platform won't slow down when it matters most."
    },
    {
      icon: HardDrive,
      title: "Disaster Recovery Ready",
      description: "Backup and restore systems in place to protect business continuity."
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Our platforms grow with your user base — without performance issues."
    }
  ];

  const benefits = [
    {
      icon: Search,
      title: "Industry-Aligned Thinking",
      description: "We understand how banks, fintechs, and payment platforms operate — and what slows them down."
    },
    {
      icon: Lock,
      title: "Secure by Design",
      description: "Data protection, encryption, and access controls are built into every layer."
    },
    {
      icon: Settings,
      title: "Built to Fit, Not Force",
      description: "Every platform we deliver is built around your workflows — never out-of-the-box templates."
    },
    {
      icon: Activity,
      title: "Real-Time and Data-Ready",
      description: "Unified data layers support fast insights and intelligent automation."
    },
    {
      icon: Cloud,
      title: "Future-Proof Infrastructure",
      description: "Platforms built to scale — from new feature rollouts to global expansion."
    },
    {
      icon: CheckCircle,
      title: "Transparent Delivery Process",
      description: "We collaborate across sprints, with clarity on priorities and timelines from day one."
    }
  ];

  const compliances = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Protecting patient privacy through strict access controls and encryption."
    },
    {
      icon: FileText,
      title: "SOC 2 Type 2",
      description: "Infrastructure built to meet enterprise-grade operational standards."
    },
    {
      icon: Lock,
      title: "ISO Compliant",
      description: "Supporting globally recognized quality and security certifications."
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
                Banking & Finance
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Building Custom Financial Platforms That Balance 
                <span className="text-tech-accent block">Innovation, Trust & Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At Onelab, we help financial institutions and fintech companies design AI-enabled, secure, and scalable digital products — purpose-built to handle evolving regulations, legacy modernization, and customer trust at scale.
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
                  We support a wide range of financial organizations — from banks to emerging fintech players — helping them modernize systems, reduce risks, and improve customer experiences through tailored technology.
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
                      <Shield className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Financial Innovation</h3>
                      <p className="text-muted-foreground">Building trust through technology</p>
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
              We build future-ready financial systems that are scalable, compliant, and built around how you operate — not the other way around.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Resilience & Reliability Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Resilience & Reliability <span className="text-tech-accent">at Scale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In financial systems, downtime isn't an option. We build platforms that stay fast, secure, and stable — even during peak loads.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resilience.map((item, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-t from-green-500/5 to-transparent border-t-4 border-t-green-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-green-600" />
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

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-tech-accent">Onelab</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help financial teams innovate with confidence — balancing modern technology with stability, security, and trust.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Build Smarter, Safer Financial Platforms — <span className="text-tech-accent">Together</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start with the workflows you already know. Scale with the flexibility you need.
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

export default BankingFinance;