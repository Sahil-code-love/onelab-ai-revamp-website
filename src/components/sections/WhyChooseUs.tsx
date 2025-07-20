import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "AI-Native Thinking",
      description: "We embed intelligence into products from day one",
      details: "Our team doesn't just add AI as an afterthought. We architect solutions with AI-first principles, ensuring every component leverages machine learning for optimal performance."
    },
    {
      icon: Users,
      title: "In-House Team, Zero Fluff",
      description: "150+ engineers, designers & PMs — no freelancers or delays",
      details: "Our dedicated team of experts works exclusively on your project. No outsourcing, no communication gaps, no compromises on quality or timeline."
    },
    {
      icon: Rocket,
      title: "Rapid, Reliable Delivery",
      description: "Agile pods that ship fast without compromising quality",
      details: "We use proven methodologies and cutting-edge tools to deliver production-ready solutions in weeks, not months. Speed without sacrifice."
    },
    {
      icon: TrendingUp,
      title: "Built for Startups, Scalable for Enterprise",
      description: "Launch lean, scale clean — without rework or vendor lock-in",
      details: "Start with an MVP that can grow into enterprise-grade infrastructure. Our architecture scales with your success, eliminating costly rewrites."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Why Founders Choose OneLab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another development agency. We're your AI-first product partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="glass-card hover:shadow-medium transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-tech-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-space-grotesk mb-2">{reason.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mb-4">
                      {reason.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {reason.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;