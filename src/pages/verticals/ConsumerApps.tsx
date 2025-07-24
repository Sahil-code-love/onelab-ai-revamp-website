import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Heart, Zap, Star, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const ConsumerApps = () => {
  const benefits = [
    {
      icon: Users,
      title: "User Engagement",
      description: "AI-powered personalization that keeps users coming back"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized experiences across all mobile platforms"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Intuitive interfaces powered by behavioral AI"
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Instant responses and live interactions"
    },
    {
      icon: Star,
      title: "App Store Success",
      description: "Strategies to improve ratings and visibility"
    }
  ];

  const solutions = [
    {
      title: "Personalization Engine",
      description: "AI-driven content and feature recommendations for each user",
      features: ["Content curation", "Behavioral analysis", "Dynamic interfaces"]
    },
    {
      title: "In-App AI Assistant",
      description: "Smart chatbots and virtual assistants for seamless user support",
      features: ["Natural conversations", "Context awareness", "Multi-language support"]
    },
    {
      title: "User Analytics & Insights",
      description: "Deep understanding of user behavior and app performance",
      features: ["Usage patterns", "Retention analysis", "A/B testing automation"]
    }
  ];

  const stats = [
    { value: "73%", label: "Higher user retention" },
    { value: "45%", label: "Increased engagement" },
    { value: "2.5x", label: "Faster development" },
    { value: "4.8★", label: "Average app rating" }
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
                  Consumer Apps
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Build Apps Users 
                  <span className="text-tech-accent"> Love</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Create engaging consumer applications with AI-powered features that delight users, 
                  increase retention, and drive business growth.
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
                    <MessageCircle className="w-6 h-6 text-tech-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI App Assistant</h3>
                    <p className="text-sm text-muted-foreground">Personalizing experience</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">User preferences learned</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Content personalized</span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="text-sm">Engagement optimized</span>
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
              AI-Powered Consumer App Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create exceptional user experiences with intelligent features and personalization
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
              Complete App Development Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to launch, we provide all the tools and intelligence your app needs
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
                Ready to Build Your Next Hit App?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create consumer apps that stand out in the marketplace with our AI expertise
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-tech">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-ghost-tech">
                Download App Development Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerApps;