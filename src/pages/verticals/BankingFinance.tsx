import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Shield, TrendingUp, Zap, Users, CheckCircle, ArrowRight, DollarSign } from "lucide-react";

const BankingFinance = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced fraud detection and risk assessment algorithms"
    },
    {
      icon: CreditCard,
      title: "Digital Banking",
      description: "Seamless customer experience across all digital touchpoints"
    },
    {
      icon: TrendingUp,
      title: "Investment Intelligence",
      description: "AI-powered market analysis and portfolio optimization"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant transaction processing and decision making"
    },
    {
      icon: Users,
      title: "Customer Insights",
      description: "Deep customer behavior analysis for personalized services"
    }
  ];

  const solutions = [
    {
      title: "Fraud Detection & Prevention",
      description: "Machine learning models that identify suspicious activities in real-time",
      features: ["Transaction monitoring", "Behavioral analysis", "Risk scoring"]
    },
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and virtual assistants for 24/7 support",
      features: ["Account inquiries", "Transaction support", "Product recommendations"]
    },
    {
      title: "Credit Risk Assessment",
      description: "Intelligent credit scoring and loan approval automation",
      features: ["Credit analysis", "Income verification", "Alternative data scoring"]
    }
  ];

  const stats = [
    { value: "95%", label: "Fraud detection accuracy" },
    { value: "70%", label: "Faster loan processing" },
    { value: "24/7", label: "Automated support" },
    { value: "99.9%", label: "System availability" }
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
                  Banking & Finance
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  The Future of 
                  <span className="text-tech-accent"> Financial Services</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionize your financial operations with AI-powered solutions that enhance 
                  security, streamline processes, and deliver exceptional customer experiences.
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
                    <DollarSign className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Financial Assistant</h3>
                    <p className="text-sm text-muted-foreground">Processing transactions</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Fraud analysis complete</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Risk assessment done</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Transaction approved</span>
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
              Transform Financial Operations with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure, compliant, and intelligent solutions built for the financial industry
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
              Comprehensive Financial AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From fraud detection to customer service, we cover all aspects of modern banking
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
                Ready to Modernize Your Financial Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join leading financial institutions using our AI solutions to stay competitive
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download FinTech AI Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingFinance;