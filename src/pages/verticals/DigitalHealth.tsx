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
      title: "Next-Gen Engineering for Smarter Healthcare Delivery",
      description: "We bring advanced AI engineering and data science capabilities to modernize healthcare systems, optimizing PHRs and refining care coordination to integrating advanced telehealth innovations, all while ensuring interoperability and streamlined workflows as they are all core."
    },
    {
      icon: Heart,
      title: "Empathy-Driven Digital Experience Design",
      description: "A thoughtful UX healthcare experience design considers the emotional and technical needs of patients, providers and administrators. We create intuitive designs with empowered processes to ensure digital solutions that are not only functional but also emotionally resonant throughout critical healthcare information technology strategies that boost care in all of ways."
    },
    {
      icon: Shield,
      title: "Insightful AI-Powered Healthcare Analytics",
      description: "We develop enterprise-grade strategic assist with comprehensive healthcare compliance to uncover critical data, actionable insights, driving smarter decisions across quality and scheduling personalized care while enhancing clinical efficiency and patient outcomes across software a new era of data-empowered healthcare."
    },
    {
      icon: Lock,
      title: "Security and Compliance for Sensitive Health Information",
      description: "Healthcare involves the management of highly personal data. Therefore cybersecurity measures are comprehensive throughout the overall process. We ensure sensitive data and ensure strict safest of the regulatory requirements and our teams and organizations we work with under key NIST, PCI, SOC2, HL7, and GDPR norms security and compliance are good."
    },
    {
      icon: Activity,
      title: "DevOps for Scalable Health Systems",
      description: "Good tech ops are the perfect architecture to secure optimal technology care digital platforms provide, cloud-optimized healthcare solutions, ensuring better infrastructure reliability, operational consistency, and robust data security to elevate health system performance in your healthcare delivery."
    },
    {
      icon: CheckCircle,
      title: "Quality-Assured HealthTech",
      description: "Content in accordance with our rigorous quality assurance that meticulous testing and analysis ensures every healthcare digital solution undergoes the maximum standard of excellence. Our processes. Thanks to comprehensive software technology that completes digital and pharmaceutical production which comprehensive software solutions in ensuring production and compliance and effective healthcare industry is."
    }
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: "Healthcare Domain Expertise",
      description: "Deep understanding of healthcare workflows, regulations, and clinical needs"
    },
    {
      icon: Shield,
      title: "HIPAA-Compliant ODC",
      description: "Dedicated offshore development centers with stringent security measures and full HIPAA compliance to handle patient information"
    },
    {
      icon: Lock,
      title: "Robust Security Framework",
      description: "We follow SOC 2 certification process to provide comprehensive financial controls and a state-of-the-art cyber intrusion context to secure data placement"
    },
    {
      icon: Activity,
      title: "Interoperability Mastery",
      description: "Expertise in FHIR, HL7, and other healthcare interoperability standards including HL7 SQL and HCFA EDI forms"
    },
    {
      icon: Brain,
      title: "Certified Proficiency in Leading Cloud Technologies",
      description: "We have a core team of specialization certified in AWS, Google Cloud, and Red Hat, positioning us at the forefront of cloud computing innovations"
    },
    {
      icon: Zap,
      title: "Advanced AI/ML Capabilities for Healthcare Innovation",
      description: "Our twenty-strong strong team excels at the implementation of sophisticated AI and ML capabilities offering a team of trained experts and AI automation to empower healthcare."
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
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-tech-accent text-tech-accent">
                  Digital Health & MedTech
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Revolutionizing Healthcare with 
                  <span className="text-tech-accent"> AI Intelligence</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform patient care, streamline operations, and improve outcomes with our 
                  cutting-edge AI solutions designed specifically for healthcare and medical technology.
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
                    <Heart className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Health Assistant</h3>
                    <p className="text-sm text-muted-foreground">Active now</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Patient vitals analyzed</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Drug interactions checked</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Treatment plan optimized</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </div>
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
              Why Choose <span className="text-tech-accent">Coditas</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a unique blend of technical expertise and industry-specific knowledge to provide exceptional value to clients.
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
              We are certified in AWS, Google Cloud, and Red Hat to implement best practices, reduce downtimes, and optimize system performance.
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