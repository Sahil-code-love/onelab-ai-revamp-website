import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Heart, Zap, Star, CheckCircle, ArrowRight, Gamepad2, ShoppingBag, Video, Music, Camera, Settings } from "lucide-react";

const ConsumerApps = () => {
  const marketSegments = [
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Mobile games and entertainment platforms"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce & Retail",
      description: "Shopping apps and marketplace platforms"
    },
    {
      icon: Video,
      title: "Social Media & Content",
      description: "Social networking and content creation apps"
    },
    {
      icon: Music,
      title: "Lifestyle & Wellness",
      description: "Health, fitness, and lifestyle applications"
    },
    {
      icon: Camera,
      title: "Photo & Creative Tools",
      description: "Photography and creative editing apps"
    },
    {
      icon: Settings,
      title: "Productivity & Utilities",
      description: "Productivity tools and utility applications"
    }
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Custom App Development",
      description: "Build unique consumer apps tailored to your vision with custom features, branding, and user experiences that set you apart from competitors."
    },
    {
      icon: Heart,
      title: "Personalized User Experience",
      description: "Create highly customized user interfaces and journeys that adapt to individual user preferences and behaviors for maximum engagement."
    },
    {
      icon: Star,
      title: "Custom AI Features",
      description: "Integrate bespoke AI capabilities like personalized recommendations, smart content curation, and intelligent user assistance tailored to your app's purpose."
    },
    {
      icon: Users,
      title: "Scalable Social Features",
      description: "Build custom social networking capabilities, community features, and user interaction systems designed specifically for your audience."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Custom performance solutions ensuring your app runs smoothly across all devices with optimized loading times and seamless interactions."
    },
    {
      icon: CheckCircle,
      title: "Custom Analytics & Insights",
      description: "Tailored analytics solutions that track the metrics that matter most to your app's success and user engagement goals."
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Mobile-First Expertise",
      description: "Specialized knowledge in creating engaging mobile experiences across iOS and Android platforms."
    },
    {
      icon: Users,
      title: "User Engagement Mastery",
      description: "Proven strategies for building apps that users love and return to frequently."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick iteration and testing of custom features to validate ideas before full development."
    },
    {
      icon: Star,
      title: "App Store Success",
      description: "Expert guidance on app store optimization and strategies for visibility and downloads."
    },
    {
      icon: Heart,
      title: "Custom Design Excellence",
      description: "Unique, branded designs that reflect your vision and resonate with your target audience."
    },
    {
      icon: Settings,
      title: "Flexible Architecture",
      description: "Custom-built solutions that can evolve and scale as your user base and requirements grow."
    }
  ];

  const features = [
    {
      icon: Star,
      title: "AI-Powered Personalization",
      description: "Custom recommendation engines and personalized content delivery"
    },
    {
      icon: Users,
      title: "Social Integration",
      description: "Custom social features and community building tools"
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Live chat, notifications, and instant updates tailored to your needs"
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
                Consumer Apps
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Custom Apps That Users 
                <span className="text-tech-accent block"> Actually Love</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Build completely customizable consumer applications with unique features and experiences that perfectly match your vision and user needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom App Build
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                See Custom App Portfolio
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
                  App Categories <span className="text-tech-accent">We Customize</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We build end-to-end customizable consumer apps for every category and use case.
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
                      <Smartphone className="w-10 h-10 text-tech-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Custom Consumer Apps</h3>
                      <p className="text-muted-foreground">Built your way</p>
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
              Our Custom <span className="text-tech-accent">App Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end customizable app development solutions tailored to your unique requirements and user experience goals.
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
              Proven expertise in delivering custom consumer apps that achieve exceptional user engagement and market success.
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Custom Features</span> We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unique functionality and features designed specifically for your app's success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-tech-accent" />
                  </div>
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
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
                Ready to Build Your Custom App?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's create a completely customized consumer app that perfectly matches your vision and delights your users.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Custom App Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download Custom App Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerApps;