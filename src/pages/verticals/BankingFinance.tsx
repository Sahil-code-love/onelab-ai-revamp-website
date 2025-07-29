import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, TrendingUp, Zap, Users, CheckCircle, ArrowRight, Building2, Banknote, Lock, FileText, Activity, Brain } from "lucide-react";

const BankingFinance = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Commercial Banks",
      description: "Traditional and digital banking institutions"
    },
    {
      icon: CreditCard,
      title: "Credit Unions",
      description: "Member-owned financial cooperatives"
    },
    {
      icon: TrendingUp,
      title: "Investment Firms",
      description: "Asset management and investment services"
    },
    {
      icon: Shield,
      title: "Insurance Companies",
      description: "Life, health, and property insurers"
    },
    {
      icon: Banknote,
      title: "FinTech Startups",
      description: "Digital-first financial services"
    },
    {
      icon: Users,
      title: "Payment Processors",
      description: "Transaction and payment gateway providers"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "Custom AI Risk Management",
      description: "Tailored fraud detection and risk assessment systems built specifically for your institution's unique risk profile and regulatory requirements."
    },
    {
      icon: CreditCard,
      title: "End-to-End Digital Banking",
      description: "Complete digital transformation solutions from mobile apps to core banking systems, customized to your brand and customer needs."
    },
    {
      icon: TrendingUp,
      title: "Personalized Investment Intelligence",
      description: "Custom AI models for portfolio optimization, market analysis, and investment recommendations tailored to your client base."
    },
    {
      icon: Lock,
      title: "Compliance & Security Solutions",
      description: "Fully customizable regulatory compliance systems ensuring adherence to local and international financial regulations."
    },
    {
      icon: Activity,
      title: "Scalable Infrastructure Design",
      description: "Custom cloud architecture solutions that grow with your business while maintaining security and performance standards."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance Excellence",
      description: "Comprehensive testing protocols designed specifically for financial applications with zero-tolerance for errors."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Financial Domain Expertise",
      description: "Deep understanding of banking regulations, compliance requirements, and financial workflows."
    },
    {
      icon: Lock,
      title: "Enterprise Security Framework",
      description: "Bank-grade security with multi-layered protection and comprehensive audit trails."
    },
    {
      icon: FileText,
      title: "Regulatory Compliance Mastery",
      description: "Expert implementation of PCI DSS, SOX, Basel III, and other financial regulations."
    },
    {
      icon: Activity,
      title: "High-Performance Architecture",
      description: "Scalable systems designed to handle millions of transactions with minimal latency."
    },
    {
      icon: Brain,
      title: "Advanced AI/ML for Finance",
      description: "Sophisticated machine learning models trained specifically on financial datasets."
    },
    {
      icon: Zap,
      title: "Rapid Custom Development",
      description: "Agile methodology that delivers secure, customized financial solutions faster than traditional approaches."
    }
  ];

  const compliances = [
    {
      icon: Shield,
      title: "PCI DSS Compliant",
      description: "Payment Card Industry Data Security Standards for secure payment processing"
    },
    {
      icon: FileText,
      title: "SOX Compliance",
      description: "Sarbanes-Oxley Act compliance for financial reporting and internal controls"
    },
    {
      icon: Lock,
      title: "Basel III Ready",
      description: "International regulatory framework for bank capital adequacy and risk management"
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
                Custom Financial Solutions 
                <span className="text-tech-accent block"> Built for You</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Transform your financial services with fully customizable AI solutions designed from the ground up to meet your unique business requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                See Custom Solutions
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
                  Financial Sectors <span className="text-tech-accent">We Customize For</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We build end-to-end customizable solutions tailored to each financial sector's unique requirements.
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
                      <CreditCard className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Custom Financial Tech</h3>
                      <p className="text-muted-foreground">Built for your needs</p>
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
              Our Custom <span className="text-tech-accent">Financial Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end customizable solutions built specifically for your financial institution's unique requirements.
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
              Proven expertise in delivering customizable financial solutions that transform operations and drive growth.
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

      {/* Compliances Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Financial Compliance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade compliance certifications ensuring the highest standards of financial data protection.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {compliances.map((compliance, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 flex items-center justify-center mx-auto mb-6">
                    <compliance.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{compliance.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {compliance.description}
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
                Ready for Your Custom Financial Solution?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's build a completely customized solution that fits your exact requirements and grows with your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Custom Solutions Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingFinance;