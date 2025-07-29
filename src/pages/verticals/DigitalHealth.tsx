import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Zap, Users, CheckCircle, ArrowRight, Building2, Stethoscope, Pill, Activity, FileText, Lock } from "lucide-react";

const DigitalHealth = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Hospitals & Health Systems",
      description: "Enhancing care coordination, operational efficiency, and digital transformation."
    },
    {
      icon: Activity,
      title: "Health IT & EMR Providers",
      description: "Supporting platform modernization, interoperability, and AI feature integration."
    },
    {
      icon: Users,
      title: "Payers & Insurance Organizations",
      description: "Enabling smarter claims processing, member engagement, and risk analytics."
    },
    {
      icon: Pill,
      title: "Pharma & BioTech Companies",
      description: "Powering research data automation, trial efficiency, and regulatory compliance."
    },
    {
      icon: Stethoscope,
      title: "MedTech & Diagnostics Companies",
      description: "Connecting smart devices, ensuring data security, and building scalable digital layers."
    },
    {
      icon: Heart,
      title: "Digital Health Startups",
      description: "Accelerating MVPs, building compliant infrastructure, and supporting go-to-market."
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "Purpose-Built Digital Engineering",
      description: "Modular and scalable platforms to support clinical and operational workflows."
    },
    {
      icon: Heart,
      title: "Human-Centered Product Design",
      description: "Intuitive, accessible, and clinically aligned experiences for all users."
    },
    {
      icon: Shield,
      title: "AI & Data Intelligence",
      description: "Secure, explainable ML models and analytics for diagnostics and decision support."
    },
    {
      icon: Lock,
      title: "Cloud & Infrastructure Modernization",
      description: "Secure, high-performance cloud environments built for compliance and scale."
    },
    {
      icon: Activity,
      title: "Privacy-Centered Data Architecture",
      description: "End-to-end encryption, role-based access, and HIPAA-first system design."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Compliance Testing",
      description: "Rigorous testing aligned with healthcare standards to ensure reliability and audit readiness."
    }
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: "Healthcare Domain Expertise",
      description: "We understand the realities of clinical workflows, stakeholder needs, and tech regulations."
    },
    {
      icon: Shield,
      title: "Built-In Compliance & Security",
      description: "HIPAA, SOC 2, ISO — every build aligns with the latest industry standards."
    },
    {
      icon: Activity,
      title: "Interoperability Focus",
      description: "Built using HL7, FHIR, DICOM, and other healthcare data standards."
    },
    {
      icon: Lock,
      title: "Scalable & Modular Architecture",
      description: "Systems designed to evolve with your needs, not lock you in."
    },
    {
      icon: Brain,
      title: "Applied AI Expertise",
      description: "From pilot to production — we build explainable, reliable AI."
    },
    {
      icon: Zap,
      title: "Collaborative Delivery",
      description: "Agile teams that work closely with your in-house product and tech leaders."
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
      icon: CheckCircle,
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
                Digital Health & MedTech
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Empowering Healthcare Innovation Through 
                <span className="text-tech-accent block">Custom-Built Digital Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At Onelab, we partner with healthcare organizations to design, build, and scale AI-powered, secure, and patient-centered platforms — tailored to fit unique clinical, operational, and regulatory needs.
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
                  We collaborate with healthcare innovators across the ecosystem to modernize systems, streamline care, and drive better outcomes through tailored technology.
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
                      <Heart className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Healthcare Innovation</h3>
                      <p className="text-muted-foreground">Transforming patient care</p>
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
              We build digital products and platforms that solve healthcare's unique challenges — with a strong foundation in compliance, UX, and technical depth.
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-tech-accent">Onelab</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring product innovation, healthcare expertise, and collaborative delivery to every engagement.
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

      {/* Compliances Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Compliances</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We build systems that meet the highest standards of patient data protection and regulatory readiness.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {compliances.map((compliance, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-t from-tech-accent/5 to-transparent border-t-4 border-t-tech-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 border-2 border-tech-accent/20 flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Build the Future of Healthcare?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's co-create solutions that meet your needs today — and grow with your goals tomorrow.
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

export default DigitalHealth;