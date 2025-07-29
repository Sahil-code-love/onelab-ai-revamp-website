import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Cpu, Zap, Settings, CheckCircle, ArrowRight, Building2, Factory, ShoppingCart, TrendingUp, Users, Brain } from "lucide-react";

const DataIntelligence = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Enterprise Organizations",
      description: "Large corporations with complex data ecosystems"
    },
    {
      icon: Factory,
      title: "Manufacturing & Supply Chain",
      description: "Production and logistics optimization"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Customer behavior and inventory analytics"
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Risk analysis and investment intelligence"
    },
    {
      icon: Users,
      title: "Marketing Agencies",
      description: "Campaign performance and audience insights"
    },
    {
      icon: Brain,
      title: "Research Organizations",
      description: "Academic and scientific data analysis"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Custom Data Architecture",
      description: "Build tailored data pipelines and infrastructure designed specifically for your unique data sources, volume, and processing requirements."
    },
    {
      icon: BarChart3,
      title: "Personalized Analytics Dashboards",
      description: "Create custom visualization and reporting solutions that display exactly the insights and KPIs most critical to your business decisions."
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Develop bespoke machine learning models trained on your specific data to solve your unique business challenges and prediction needs."
    },
    {
      icon: Zap,
      title: "Real-time Processing Solutions",
      description: "Build custom real-time data processing systems that deliver instant insights and automated responses to changing conditions."
    },
    {
      icon: Settings,
      title: "Process Automation Design",
      description: "Create tailored workflow automation that streamlines your specific business processes and decision-making workflows."
    },
    {
      icon: CheckCircle,
      title: "Data Quality & Governance",
      description: "Implement custom data quality frameworks and governance systems designed for your compliance and accuracy requirements."
    }
  ];

  const benefits = [
    {
      icon: Database,
      title: "Data Engineering Expertise",
      description: "Deep technical knowledge in building scalable, reliable data infrastructure and processing systems."
    },
    {
      icon: Brain,
      title: "AI/ML Specialization",
      description: "Advanced expertise in developing custom machine learning models and AI solutions for data intelligence."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Custom solutions optimized for speed, accuracy, and efficiency in processing large-scale data."
    },
    {
      icon: Settings,
      title: "Integration Mastery",
      description: "Seamless integration of custom solutions with your existing data sources and business systems."
    },
    {
      icon: BarChart3,
      title: "Visualization Excellence",
      description: "Beautiful, interactive dashboards and reports that make complex data insights accessible and actionable."
    },
    {
      icon: CheckCircle,
      title: "Scalable Architecture",
      description: "Custom solutions built to grow with your data volume and evolving analytical requirements."
    }
  ];

  const capabilities = [
    {
      icon: Database,
      title: "Custom ETL Pipelines",
      description: "Tailored data extraction, transformation, and loading processes"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Custom forecasting and prediction models for your specific use cases"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Custom visualization solutions with real-time data updates"
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
                Custom Data Solutions 
                <span className="text-tech-accent block"> Built for Your Needs</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Transform your data into actionable insights with fully customizable analytics platforms, AI models, and automation solutions designed specifically for your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Build Custom Data Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                See Custom Analytics
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
                  Industries <span className="text-tech-accent">We Analyze For</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We build end-to-end customizable data intelligence solutions for every industry and analytical challenge.
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
                      <Database className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Custom Data Intelligence</h3>
                      <p className="text-muted-foreground">Tailored to your data</p>
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
              Our Custom <span className="text-tech-accent">Data Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end customizable data intelligence solutions built specifically for your unique data challenges and business objectives.
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
              Proven expertise in delivering custom data intelligence solutions that transform raw data into competitive advantages.
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

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Custom Capabilities</span> We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized data processing and analytics capabilities designed specifically for your requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{capability.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {capability.description}
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
                Ready for Your Custom Data Solution?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's build a completely customized data intelligence platform that transforms your data into actionable business insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom Data Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Custom Analytics Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataIntelligence;