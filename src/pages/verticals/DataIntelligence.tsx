import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Cpu, Zap, Settings, CheckCircle, ArrowRight, Brain } from "lucide-react";

const DataIntelligence = () => {
  const benefits = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and unify data from multiple sources"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights through machine learning and predictive modeling"
    },
    {
      icon: Cpu,
      title: "Intelligent Processing",
      description: "Automated data processing and pattern recognition"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Live data analysis and instant decision support"
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Streamline operations with intelligent workflow automation"
    }
  ];

  const solutions = [
    {
      title: "Business Intelligence Platform",
      description: "Comprehensive analytics dashboard with AI-powered insights",
      features: ["Custom dashboards", "Predictive analytics", "Automated reporting"]
    },
    {
      title: "Data Pipeline Automation",
      description: "End-to-end data processing with intelligent ETL workflows",
      features: ["Data cleansing", "Quality validation", "Automated scheduling"]
    },
    {
      title: "Intelligent Process Mining",
      description: "Discover and optimize business processes with AI analysis",
      features: ["Process discovery", "Bottleneck identification", "Optimization recommendations"]
    }
  ];

  const stats = [
    { value: "85%", label: "Faster data processing" },
    { value: "92%", label: "Accuracy improvement" },
    { value: "60%", label: "Cost reduction" },
    { value: "24/7", label: "Automated monitoring" }
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
                  Data Intelligence & Automation
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Unlock the Power of 
                  <span className="text-tech-accent"> Your Data</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform raw data into actionable insights with our advanced AI-powered 
                  analytics platform. Automate processes and make data-driven decisions at scale.
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
                    <Brain className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Data Processor</h3>
                    <p className="text-sm text-muted-foreground">Analyzing patterns</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Data sources integrated</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Patterns identified</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Insights generated</span>
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
              Intelligent Data Solutions That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turn your data into a competitive advantage with cutting-edge AI and automation
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
              Complete Data Intelligence Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From data integration to intelligent automation, we provide end-to-end solutions
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
                Ready to Harness Your Data's Potential?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your business with intelligent data solutions and automation
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Data Intelligence Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataIntelligence;