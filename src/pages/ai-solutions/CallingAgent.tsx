import { useState } from "react";
import { Phone, PhoneCall, Mic, Volume2, Users, Clock, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const CallingAgent = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  const features = [
    {
      icon: <PhoneCall className="h-6 w-6" />,
      title: "Natural Voice Interactions",
      description: "Human-like conversations with advanced speech recognition and synthesis"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Language Support",
      description: "Communicate in 30+ languages with native accent adaptation"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Track call performance, sentiment, and conversion metrics"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Response",
      description: "Zero wait time with intelligent call routing and handling"
    }
  ];

  const callStats = [
    { label: "Calls Handled", value: "10K+", change: "+25%" },
    { label: "Avg Response Time", value: "0.3s", change: "-40%" },
    { label: "Customer Satisfaction", value: "94%", change: "+15%" },
    { label: "Cost Reduction", value: "60%", change: "+60%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navigation />
      
      {/* Hero Section with Interactive Phone */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-tech-accent to-primary bg-clip-text text-transparent">
                  AI Calling Agent
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your customer communication with intelligent voice agents that handle calls 24/7, 
                  providing natural conversations and instant responses.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-tech">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  Watch Demo
                </Button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-2 gap-4">
                {callStats.slice(0, 2).map((stat, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover-scale">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-tech-accent">{stat.change}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interactive Phone Interface */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Device */}
                <div className="w-80 h-96 bg-gradient-to-b from-card to-muted rounded-3xl border-2 border-border shadow-elegant p-6">
                  <div className="h-full flex flex-col items-center justify-center space-y-8">
                    {/* Call Status */}
                    <div className="text-center space-y-2">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCallActive ? 'bg-tech-accent animate-pulse' : 'bg-primary'
                      }`}>
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-lg font-semibold">
                        {isCallActive ? 'Call Active' : 'Ready to Call'}
                      </div>
                      {isCallActive && (
                        <div className="text-tech-accent font-mono">
                          {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}
                        </div>
                      )}
                    </div>

                    {/* Call Controls */}
                    <div className="flex space-x-4">
                      <Button
                        size="lg"
                        variant={isCallActive ? "destructive" : "default"}
                        onClick={() => {
                          setIsCallActive(!isCallActive);
                          if (!isCallActive) {
                            const timer = setInterval(() => {
                              setCallDuration(prev => {
                                if (prev >= 30) {
                                  clearInterval(timer);
                                  setIsCallActive(false);
                                  return 0;
                                }
                                return prev + 1;
                              });
                            }, 1000);
                          } else {
                            setCallDuration(0);
                          }
                        }}
                        className="rounded-full w-16 h-16"
                      >
                        {isCallActive ? <Phone className="h-6 w-6" /> : <PhoneCall className="h-6 w-6" />}
                      </Button>
                      
                      <Button variant="outline" className="rounded-full w-16 h-16">
                        <Mic className="h-6 w-6" />
                      </Button>
                      
                      <Button variant="outline" className="rounded-full w-16 h-16">
                        <Volume2 className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Voice Waves Animation */}
                    {isCallActive && (
                      <div className="flex space-x-1 items-end">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-tech-accent rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 20 + 10}px`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-tech-accent rounded-full flex items-center justify-center animate-bounce">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Voice AI Capabilities</h2>
            <p className="text-muted-foreground text-lg">Advanced features that make every call count</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale bg-card/70 backdrop-blur border-border/50 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Performance That Speaks Volumes</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {callStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary/5 to-tech-accent/5 border-primary/20 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-tech-accent font-semibold">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-tech-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Call Experience?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses using AI calling agents to enhance customer communication
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="btn-tech">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallingAgent;