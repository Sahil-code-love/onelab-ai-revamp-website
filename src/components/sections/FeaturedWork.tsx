import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Clock } from "lucide-react";

const FeaturedWork = () => {
  const projects = [
    {
      icon: "🧾",
      title: "DocIntel",
      description: "AI parser to extract insights from complex bank PDFs — slashed underwriting time by 80%",
      metrics: [
        { label: "Time Saved", value: "80%", icon: Clock },
        { label: "Processing Speed", value: "10x faster", icon: TrendingUp },
        { label: "Accuracy", value: "99.5%", icon: TrendingUp }
      ],
      tags: ["FinTech", "Document AI", "Enterprise"],
      category: "Banking & Finance"
    },
    {
      icon: "🎙",
      title: "VoiceFlow AI",
      description: "Natural-language voice agent for real estate sales — live in 3 weeks, 300+ leads qualified",
      metrics: [
        { label: "Launch Time", value: "3 weeks", icon: Clock },
        { label: "Leads Qualified", value: "300+", icon: Users },
        { label: "Conversion Rate", value: "45%", icon: TrendingUp }
      ],
      tags: ["Voice AI", "Real Estate", "Sales"],
      category: "AI Solutions"
    },
    {
      icon: "📱",
      title: "Nexiun",
      description: "AI-powered social discovery app — scaled to 10K users within 60 days",
      metrics: [
        { label: "User Growth", value: "10K users", icon: Users },
        { label: "Time to Scale", value: "60 days", icon: Clock },
        { label: "Engagement", value: "85%", icon: TrendingUp }
      ],
      tags: ["Social AI", "Consumer App", "Mobile"],
      category: "Consumer Apps"
    },
    {
      icon: "🤖",
      title: "SmartAI Diagnostics",
      description: "Medical AI assistant for diagnosis support — 95% accuracy, FDA compliance ready",
      metrics: [
        { label: "Accuracy", value: "95%", icon: TrendingUp },
        { label: "Response Time", value: "<2s", icon: Clock },
        { label: "Cases Processed", value: "50K+", icon: Users }
      ],
      tags: ["MedTech", "AI Diagnostics", "Healthcare"],
      category: "Digital Health"
    },
    {
      icon: "📊",
      title: "Wise Sales",
      description: "Intelligent sales automation platform — 3x pipeline growth, automated lead scoring",
      metrics: [
        { label: "Pipeline Growth", value: "3x", icon: TrendingUp },
        { label: "Time Saved", value: "70%", icon: Clock },
        { label: "Lead Quality", value: "90%", icon: Users }
      ],
      tags: ["Sales AI", "Automation", "B2B"],
      category: "Sales Automation"
    },
    {
      icon: "🔍",
      title: "Lumina Data",
      description: "Real-time data intelligence platform — processes 1M+ data points, instant insights",
      metrics: [
        { label: "Data Points", value: "1M+", icon: TrendingUp },
        { label: "Processing Speed", value: "Real-time", icon: Clock },
        { label: "Accuracy", value: "98%", icon: Users }
      ],
      tags: ["Data AI", "Analytics", "Enterprise"],
      category: "Data Intelligence"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            ⚡ Real AI products, real outcomes.
          </p>
          <p className="text-lg text-muted-foreground">
            Discover how we've transformed businesses across industries with intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-tech-accent" />
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-tech-accent bg-tech-accent/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-space-grotesk mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full text-tech-accent hover:bg-tech-accent hover:text-tech-accent-foreground group-hover:bg-tech-accent group-hover:text-tech-accent-foreground transition-all" asChild>
                  <a href="/case-studies">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="btn-ghost-tech" asChild>
            <a href="/case-studies">
              View More Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;