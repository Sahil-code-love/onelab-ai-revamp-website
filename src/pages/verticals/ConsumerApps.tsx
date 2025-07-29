import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Heart, Zap, Star, CheckCircle, ArrowRight, MessageSquare, Lightbulb, Wallet, GraduationCap, ShoppingCart, Code, Layers, Palette, Globe, BarChart3, GitBranch, Gauge, Shield, WifiOff, RefreshCw, AlertTriangle, MonitorSpeaker } from "lucide-react";

const ConsumerApps = () => {
  const marketSegments = [
    {
      icon: MessageSquare,
      title: "Social & Communication Platforms",
      description: "Building intuitive experiences for messaging, community, and collaboration at scale."
    },
    {
      icon: Heart,
      title: "Wellness, Lifestyle & Fitness",
      description: "Creating apps that motivate, track progress, and support daily habit-building."
    },
    {
      icon: Wallet,
      title: "Fintech & Personal Finance",
      description: "Designing secure, user-friendly platforms for payments, budgeting, and investing."
    },
    {
      icon: GraduationCap,
      title: "Education & Learning Apps",
      description: "Powering personalized, engaging digital learning tools for all age groups."
    },
    {
      icon: ShoppingCart,
      title: "Marketplaces & Creator Platforms",
      description: "Enabling seamless experiences for discovery, content sharing, and monetization."
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Product Strategy & Rapid Prototyping",
      description: "Validating early ideas with high-impact wireframes, clickable demos, and MVPs."
    },
    {
      icon: Code,
      title: "Full-Cycle App Development",
      description: "Building mobile and web apps with modern tech stacks — designed to scale."
    },
    {
      icon: Palette,
      title: "User-Centered Design & UX",
      description: "Crafting beautiful, accessible interfaces that drive engagement and retention."
    },
    {
      icon: Layers,
      title: "Growth-Ready Architecture",
      description: "Structuring backend systems to handle growth without performance trade-offs."
    },
    {
      icon: BarChart3,
      title: "Analytics & Engagement Tooling",
      description: "Integrating systems to track behavior, trigger campaigns, and improve retention."
    },
    {
      icon: GitBranch,
      title: "Feedback-Driven Iteration",
      description: "Supporting feature rollouts, A/B testing, and product improvement post-launch."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast, Flexible Delivery",
      description: "We move quickly without cutting corners — adapting to your product roadmap in real-time."
    },
    {
      icon: Star,
      title: "Beautiful + Functional Design",
      description: "We prioritize both usability and craft — with design systems that scale."
    },
    {
      icon: Users,
      title: "Custom-Built for Your Audience",
      description: "We tailor every build to your app's unique brand, users, and goals."
    },
    {
      icon: RefreshCw,
      title: "Tight Feedback Loops",
      description: "We work closely with founders, product managers, and users to keep improving."
    },
    {
      icon: Globe,
      title: "Scalable Infrastructure",
      description: "We build backend systems that handle scale without breaking."
    },
    {
      icon: CheckCircle,
      title: "Launch & Beyond",
      description: "We stay involved post-launch — helping monitor, iterate, and evolve the product."
    }
  ];

  const features = [
    {
      icon: Gauge,
      title: "Fast-Loading Interfaces",
      description: "Speed that meets user expectations — even on lower-end devices or poor networks."
    },
    {
      icon: Shield,
      title: "Crash-Resistant Apps",
      description: "Stability across platforms, OS versions, and edge cases — tested for real-world use."
    },
    {
      icon: WifiOff,
      title: "Offline & Sync Support",
      description: "Building resilience into the experience — even with spotty connections."
    },
    {
      icon: CheckCircle,
      title: "Fail-Safe Transactions",
      description: "Ensuring purchases, messages, and content are saved and retried if needed."
    },
    {
      icon: MonitorSpeaker,
      title: "Monitoring & Alerts",
      description: "Tracking performance and errors in real time — with systems to recover instantly."
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "We embed security from the start — safeguarding user data and preventing common risks."
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
                From Idea to Experience — 
                <span className="text-tech-accent block">Built for Real Users</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We help fast-moving teams turn product concepts into polished, scalable consumer apps — with beautiful design, flexible architecture, and a focus on usability from day one.
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
                  We work across a wide range of consumer-facing categories — helping teams deliver better user experiences, retain users, and grow sustainably.
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
                      <h3 className="text-xl font-bold text-foreground">Consumer Apps</h3>
                      <p className="text-muted-foreground">Built for real users</p>
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
              We help bring consumer products to life — balancing design, speed, and long-term product thinking with a user-first mindset.
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
              From MVP to scale-up, we support consumer app teams with the right blend of product care, technical depth, and fast execution.
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

      {/* Experience-First Architecture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-tech-accent">Experience-First Architecture</span> & Reliability
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In consumer products, <strong>experience is everything</strong>. We design systems that perform well under pressure and respond gracefully at every touchpoint.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-t from-tech-accent/5 to-transparent border-t-4 border-t-tech-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-tech-accent/10 border-2 border-tech-accent/20 flex items-center justify-center mx-auto mb-6">
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
                Let's Build an App Users Love — and Stay With
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you're launching your first product or scaling a high-growth platform, we'll help you build intuitive, reliable, and user-loved experiences — from strategy to execution.
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

export default ConsumerApps;