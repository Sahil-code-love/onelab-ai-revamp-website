import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "AI-Native Thinking",
      description: "We embed intelligence into products from day one"
    },
    {
      icon: Users,
      title: "In-House Team, Zero Fluff",
      description: "150+ engineers, designers & PMs — no freelancers or delays"
    },
    {
      icon: Rocket,
      title: "Rapid, Reliable Delivery",
      description: "Agile pods that ship fast without compromising quality"
    },
    {
      icon: TrendingUp,
      title: "Built for Startups, Scalable for Enterprise",
      description: "Launch lean, scale clean — without rework or vendor lock-in"
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
            <Card key={index} className="glass-card hover:shadow-strong transition-all duration-300 group border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-tech-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-medium">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-space-grotesk font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {reason.title}
                    </CardTitle>
                    <CardDescription className="text-xl text-muted-foreground leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;