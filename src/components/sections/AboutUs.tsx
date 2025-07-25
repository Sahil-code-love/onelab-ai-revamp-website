import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6 leading-tight">
                AI Innovation Studio
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                We are a product development studio specializing in transforming 
                visionary ideas into intelligent, scalable solutions. With a leadership 
                team of experts from IITs, we have successfully developed over 100 
                products, including AI-powered applications with 500K+ downloads.
              </p>
              
              <p>
                Our team of skilled AI engineers, designers, and product managers 
                collaborates with clients to harness the power of artificial intelligence. 
                From predictive analytics to automation and machine learning, we 
                create cutting-edge solutions across AI, SaaS, Fintech, Insurance, and 
                Healthcare domains, empowering businesses to stay ahead in a rapidly 
                evolving world.
              </p>
            </div>

            {/* Vision Card */}
            <Card className="mt-8 bg-gradient-to-br from-primary to-tech-accent border-0 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-space-grotesk font-bold mb-4">Our Vision</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Our vision at Onelab is to be the driving force behind 
                      startup success, empowering entrepreneurs with 
                      technology solutions and fostering a thriving 
                      ecosystem of digital innovation.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Image */}
          <div className="animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-muted/50 rounded-3xl p-8 backdrop-blur-sm border">
                <img 
                  src="/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png"
                  alt="Team collaborating on AI solutions"
                  className="w-full h-auto rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 shadow-strong border max-w-xs">
                  <h4 className="text-2xl font-space-grotesk font-bold text-foreground mb-2">
                    Agile Solutions for Rapid Growth
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Empowering startups with intelligent, scalable technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;