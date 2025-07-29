import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Rocket, Database, BarChart3, Brain, Zap, Settings, HeadphonesIcon, Eye, Puzzle, CheckCircle, Shield, ArrowRight } from "lucide-react";

const DataIntelligence = () => {
  const whoWeWorkWith = [
    {
      icon: Users,
      title: "Product-Led Teams",
      description: "Helping product teams use data to personalize experiences and make features more useful."
    },
    {
      icon: Settings,
      title: "Operations & Support Teams",
      description: "Reducing repetitive work and improving service quality through thoughtful automation."
    },
    {
      icon: Target,
      title: "Leadership & Strategy",
      description: "Enabling leaders to track what matters — with dashboards that drive action."
    },
    {
      icon: Rocket,
      title: "Founders & Growth Teams",
      description: "Setting up lean, reliable systems to unlock early momentum and scale confidently."
    }
  ];

  const whatWeBuild = [
    {
      icon: Database,
      title: "Clean & Reliable Data Pipelines",
      description: "Connecting the dots between tools and teams, so your data is always ready when you need it."
    },
    {
      icon: BarChart3,
      title: "Custom Dashboards & Reporting",
      description: "Real-time views that help your team stay aligned and act quickly."
    },
    {
      icon: Brain,
      title: "Tailored Machine Learning Models",
      description: "Solving specific problems — like predicting churn, classifying tickets, or scoring leads."
    },
    {
      icon: Zap,
      title: "Smart Workflows & Automations",
      description: "Replacing manual tasks with intelligent systems that save time and reduce errors."
    },
    {
      icon: Settings,
      title: "AI-Powered Product Features",
      description: "From recommendations to auto-tagging — we build subtle, smart features that improve user experience."
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support & Monitoring",
      description: "Keeping systems healthy and improving over time, with retraining and real-world feedback."
    }
  ];

  const howWeWork = [
    {
      step: "1",
      title: "Understand What Matters",
      description: "We start by learning your priorities, challenges, and what a meaningful result looks like for you."
    },
    {
      step: "2",
      title: "Design the Right Approach",
      description: "We map out a clean, reliable setup — choosing the right tools and structure for your needs."
    },
    {
      step: "3",
      title: "Build & Deliver Use-Case Value",
      description: "We focus on what will actually help your team — not just reports or features no one uses."
    },
    {
      step: "4",
      title: "Support, Evolve & Improve",
      description: "We stay with you post-launch to ensure everything stays valuable as your needs grow."
    }
  ];

  const whyChooseUs = [
    {
      icon: Puzzle,
      title: "Built for Your Context",
      description: "We don't use templates — every solution is grounded in your unique use case."
    },
    {
      icon: Eye,
      title: "Clear & Modular Thinking",
      description: "We break complexity into small, manageable steps — so you can build with clarity."
    },
    {
      icon: Shield,
      title: "Transparent & Explainable",
      description: "We make sure what we build is understandable — not a black box."
    },
    {
      icon: Users,
      title: "Cross-Functional by Nature",
      description: "We speak the language of both business and tech — so everyone stays aligned."
    },
    {
      icon: HeadphonesIcon,
      title: "Thoughtful Ongoing Support",
      description: "Beyond delivery, we help you keep things running and improving."
    },
    {
      icon: TrendingUp,
      title: "Built to Scale With You",
      description: "What we create today is designed to grow with your team — not hold it back later."
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
                Helping You Make Better Decisions
                <span className="text-tech-accent block">with Data That Works for You</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At Onelab, we build tailored solutions that turn scattered data into clear insights — and manual work into smart, streamlined processes.
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

      {/* Who We Work With Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who We Work With
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We support growing teams and established organizations alike — helping them get more value from their data, with less complexity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeWorkWith.map((item, index) => (
              <Card key={index} className="h-full bg-gradient-to-br from-primary/5 to-secondary/20 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-3 text-primary">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Help You Build Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What We Help You Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every solution is designed around your needs — whether you're just starting or scaling something that works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeBuild.map((item, index) => (
              <Card key={index} className="h-full border-l-4 border-l-accent bg-accent/5 hover:bg-accent/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl mb-4 text-accent">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work With You Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How We Work With You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We keep things simple, collaborative, and grounded in your real goals — not just technical possibilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl border-2 border-dashed border-muted-foreground/20 p-6 h-full hover:border-muted-foreground/40 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < howWeWork.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-muted-foreground/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Teams Choose Onelab Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Teams Choose Onelab
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring technical depth with a human approach — helping your team feel supported, heard, and ready to act on your data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="h-full bg-gradient-to-br from-secondary to-muted/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Make Your Data Work Smarter?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We'll help you unlock insights, reduce manual work, and build the kind of systems that actually make life easier.
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

export default DataIntelligence;