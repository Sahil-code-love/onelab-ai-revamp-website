import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Brain, Zap, Users, CheckCircle, ArrowRight, Building2, Stethoscope, Pill, Activity, FileText, Lock } from "lucide-react";

const DigitalHealth = () => {
  const marketSegments = [
    {
      icon: Building2,
      title: "Providers & Health Systems",
      description: "Hospitals, clinics, and healthcare networks"
    },
    {
      icon: Activity,
      title: "Health IT",
      description: "Healthcare technology companies and EMR providers"
    },
    {
      icon: Users,
      title: "Payors",
      description: "Insurance companies and managed care organizations"
    },
    {
      icon: Pill,
      title: "Pharma & Bio-Tech",
      description: "Pharmaceutical and biotechnology companies"
    },
    {
      icon: Stethoscope,
      title: "Med-Tech",
      description: "Medical device and diagnostic equipment manufacturers"
    },
    {
      icon: Heart,
      title: "Digital Health Startups",
      description: "Innovative health technology companies"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Clinical Intelligence",
      description: "Transform diagnostic accuracy with machine learning models that analyze patient data, predict outcomes, and recommend personalized treatment plans in real-time."
    },
    {
      icon: Heart,
      title: "Patient Experience Revolution",
      description: "Create intuitive, empathy-driven digital interfaces that streamline patient journeys from appointment booking to post-care follow-ups."
    },
    {
      icon: Shield,
      title: "Healthcare Data Analytics",
      description: "Unlock actionable insights from complex medical data to optimize operations, reduce costs, and improve patient outcomes across your organization."
    },
    {
      icon: Lock,
      title: "HIPAA-Compliant Security",
      description: "Enterprise-grade security architecture ensuring complete protection of sensitive health information with zero-trust protocols and end-to-end encryption."
    },
    {
      icon: Activity,
      title: "Scalable Health Infrastructure",
      description: "Cloud-native solutions that grow with your practice, ensuring 99.9% uptime and seamless integration with existing healthcare systems."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance Excellence",
      description: "Rigorous testing protocols specifically designed for healthcare applications, ensuring reliability, accuracy, and regulatory compliance."
    }
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: "Healthcare Domain Expertise",
      description: "Deep clinical knowledge combined with cutting-edge technology expertise to deliver solutions that truly understand healthcare workflows."
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant Development",
      description: "Dedicated secure development environment with strict access controls and comprehensive audit trails for complete compliance."
    },
    {
      icon: Lock,
      title: "Enterprise Security Framework",
      description: "SOC 2 Type 2 certified processes with multi-layered security controls protecting your most sensitive patient data."
    },
    {
      icon: Activity,
      title: "Interoperability Mastery",
      description: "Expert implementation of FHIR, HL7, and modern healthcare standards ensuring seamless data exchange across systems."
    },
    {
      icon: Brain,
      title: "AI/ML Healthcare Specialization",
      description: "Advanced machine learning capabilities specifically trained on medical datasets to deliver accurate, actionable healthcare insights."
    },
    {
      icon: Zap,
      title: "Rapid Innovation Delivery",
      description: "Agile development methodology designed for healthcare's unique requirements, delivering secure solutions faster than traditional approaches."
    }
  ];

  const compliances = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Protecting the privacy, security, and integrity of patient's health information"
    },
    {
      icon: FileText,
      title: "SOC 2 Type 2",
      description: "Safeguarding customer data by strict implementation of security reports"
    },
    {
      icon: CheckCircle,
      title: "ISO Compliant",
      description: "We adhere to the requirements of ISO standards, without the firm listed."
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
                The Future of Healthcare is 
                <span className="text-tech-accent block"> Intelligent</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Revolutionize patient care with AI-powered solutions that predict, prevent, and personalize healthcare experiences at every touchpoint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                See Live Demo
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
                  We offer custom software and advanced product engineering services to advance the digital healthcare industry.
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
              We offer custom software and advanced product engineering services to advance the digital healthcare industry.
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
              Proven expertise in delivering healthcare solutions that transform patient outcomes and streamline operations.
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
              <span className="text-tech-accent">Compliances</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade compliance and security certifications ensuring the highest standards of data protection and regulatory adherence.
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join leading healthcare organizations using our AI solutions to improve patient outcomes
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Healthcare AI Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalHealth;