import { useState, useEffect } from "react";
import { Phone, PhoneCall, Mic, MicOff, Volume2, VolumeX, Clock, Zap, MessageSquare, Brain, CheckCircle, Users, Headphones, TrendingUp, Shield, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const CallingAgent = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [micActive, setMicActive] = useState(true);
  const [speakerActive, setSpeakerActive] = useState(true);
  const [demoStep, setDemoStep] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const demoSteps = [
    { 
      title: "Incoming Call", 
      description: "Customer calls for support",
      status: "Connecting...",
      action: "ring"
    },
    { 
      title: "AI Answers", 
      description: "AI agent picks up instantly",
      status: "Hi! How can I help you today?",
      action: "speaking"
    },
    { 
      title: "Understanding Query", 
      description: "AI processes customer request",
      status: "I understand you need order status",
      action: "listening"
    },
    { 
      title: "CRM Update", 
      description: "Real-time data sync",
      status: "Checking your order #12345...",
      action: "processing"
    },
    { 
      title: "Natural Response", 
      description: "Provides accurate information",
      status: "Your order will arrive tomorrow!",
      action: "complete"
    }
  ];

  const metrics = [
    { label: "Response Time", value: "0.3s", icon: <Zap className="h-4 w-4" /> },
    { label: "Success Rate", value: "94%", icon: <Brain className="h-4 w-4" /> },
    { label: "Languages", value: "30+", icon: <MessageSquare className="h-4 w-4" /> },
    { label: "Uptime", value: "99.9%", icon: <Clock className="h-4 w-4" /> }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let demoInterval: NodeJS.Timeout;

    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);

      demoInterval = setInterval(() => {
        setDemoStep(prev => (prev + 1) % demoSteps.length);
      }, 3000);
    } else {
      setDemoStep(0);
    }

    return () => {
      clearInterval(interval);
      clearInterval(demoInterval);
    };
  }, [isCallActive]);

  // Voice synthesis function
  const speakText = (text: string) => {
    if ('speechSynthesis' in window && speakerActive) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
    }
  };

  // Voice synthesis for demo steps
  useEffect(() => {
    if (isCallActive && demoStep > 0) {
      const currentStep = demoSteps[demoStep];
      if (currentStep.action === "speaking" || currentStep.action === "complete") {
        speakText(currentStep.status);
      }
    }
  }, [demoStep, isCallActive, speakerActive]);

  const handleCallToggle = () => {
    if (isCallActive) {
      setIsCallActive(false);
      setCallDuration(0);
      setDemoStep(0);
      setIsSpeaking(false);
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
    } else {
      setIsCallActive(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section with Phone Interface */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-tech-accent to-primary bg-clip-text text-transparent mb-6">
              AI Calling Agent
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the future of voice communication with AI agents that sound human, 
              understand context, and deliver exceptional customer experiences 24/7.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="btn-tech px-8">
                Build with Onelab
              </Button>
            </div>
          </div>

          {/* Interactive Phone Interface */}
          <div className="flex justify-center mb-16 px-4">
            <div className="relative w-full max-w-2xl">
              {/* Phone Frame */}
              <div className="w-96 h-[600px] bg-gradient-to-b from-card via-card to-muted/50 rounded-[3rem] border-8 border-border shadow-2xl relative overflow-hidden mx-auto">
                {/* Phone Screen */}
                <div className="absolute inset-4 bg-background rounded-[2rem] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 border-b border-border/50">
                    <span className="text-sm font-medium">AI Agent</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-muted-foreground'}`}></div>
                      <span className={`text-xs ${isCallActive ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {isCallActive ? 'Connected' : 'Ready'}
                      </span>
                    </div>
                  </div>

                  {/* Call Display */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
                    {/* Avatar */}
                    <div className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCallActive ? 'bg-gradient-to-br from-tech-accent to-primary animate-pulse' : 'bg-gradient-to-br from-primary to-tech-accent'
                    }`}>
                      <div className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center transition-all ${
                        isSpeaking ? 'scale-110' : 'scale-100'
                      }`}>
                        <Phone className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Call Status */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold">
                        {isCallActive ? 'Call in Progress' : 'Ready to Connect'}
                      </h3>
                      {isCallActive && (
                        <div className="text-tech-accent font-mono text-base">
                          {formatTime(callDuration)}
                        </div>
                      )}
                    </div>

                    {/* Demo Progress */}
                    {isCallActive && (
                      <div className="bg-muted/50 rounded-xl p-3 max-w-xs text-center space-y-1">
                        <div className="text-xs font-medium text-primary">
                          {demoSteps[demoStep].title}
                        </div>
                        <p className="text-sm text-foreground font-medium">
                          {demoSteps[demoStep].status}
                        </p>
                        <div className="text-xs text-tech-accent">
                          {demoSteps[demoStep].description}
                        </div>
                        {isSpeaking && (
                          <div className="flex items-center justify-center space-x-1 mt-2">
                            <Volume2 className="h-3 w-3 text-green-600 animate-pulse" />
                            <span className="text-xs text-green-600">Speaking...</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Voice Waves */}
                    {isCallActive && (
                      <div className="flex space-x-1 items-end h-6">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all duration-300 ${
                              isSpeaking ? 'bg-green-500' : 'bg-tech-accent'
                            }`}
                            style={{
                              height: `${isSpeaking ? Math.sin(Date.now() / 200 + i) * 8 + 12 : 8}px`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Call Controls */}
                  <div className="p-4 border-t border-border/50">
                    <div className="flex justify-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`rounded-full w-12 h-12 ${!micActive ? 'bg-destructive/10 border-destructive' : ''}`}
                        onClick={() => setMicActive(!micActive)}
                      >
                        {micActive ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4 text-destructive" />}
                      </Button>
                      
                      <Button
                        size="sm"
                        onClick={handleCallToggle}
                        className={`rounded-full w-14 h-14 ${
                          isCallActive 
                            ? 'bg-destructive hover:bg-destructive/90' 
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        {isCallActive ? <Phone className="h-5 w-5" /> : <PhoneCall className="h-5 w-5" />}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className={`rounded-full w-12 h-12 ${!speakerActive ? 'bg-destructive/10 border-destructive' : ''}`}
                        onClick={() => setSpeakerActive(!speakerActive)}
                      >
                        {speakerActive ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4 text-destructive" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics - Mobile Responsive */}
              <div className="hidden lg:block absolute -left-24 top-16 space-y-3">
                {metrics.slice(0, 2).map((metric, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur border-primary/20 hover:scale-105 transition-transform">
                    <CardContent className="p-3 flex items-center space-x-2">
                      <div className="text-primary">{metric.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="hidden lg:block absolute -right-24 top-16 space-y-3">
                {metrics.slice(2).map((metric, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur border-tech-accent/20 hover:scale-105 transition-transform">
                    <CardContent className="p-3 flex items-center space-x-2">
                      <div className="text-tech-accent">{metric.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mobile Metrics */}
              <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                {metrics.map((metric, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur border-primary/20">
                    <CardContent className="p-3 flex items-center space-x-2">
                      <div className="text-primary">{metric.icon}</div>
                      <div>
                        <div className="text-sm font-semibold">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="btn-tech px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Voice AI Capabilities</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Natural Conversations */}
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Natural Conversations</h3>
                <p className="text-muted-foreground">Human-like interactions with advanced speech recognition and natural language understanding.</p>
              </CardContent>
            </Card>

            {/* Real-time Processing */}
            <Card className="bg-gradient-to-br from-tech-accent/10 to-transparent border-tech-accent/20 hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-tech-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-tech-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">Sub-second response times with real-time conversation processing and intelligent routing.</p>
              </CardContent>
            </Card>

            {/* Smart Learning */}
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 hover:scale-105 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground">AI that improves with every conversation, adapting to your business needs and customer preferences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases & Examples */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Use Cases & Examples</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're managing high call volumes or aiming to offer 24/7 voice support, our AI agent helps you handle conversations at scale — without sacrificing the human experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inbound Support Calls",
                description: "Handle common questions or requests automatically — from service info to payment queries.",
                icon: <Headphones className="h-8 w-8 text-primary" />
              },
              {
                title: "Outbound Reminders & Confirmations",
                description: "Make automated calls for appointments, renewals, or follow-ups — with live updates.",
                icon: <Phone className="h-8 w-8 text-tech-accent" />
              },
              {
                title: "Lead Qualification",
                description: "Pre-screen leads, collect key inputs, and route them to the right team in real-time.",
                icon: <Users className="h-8 w-8 text-primary" />
              },
              {
                title: "Post-Service Feedback Collection",
                description: "Initiate follow-up calls after a service interaction and record user sentiment.",
                icon: <MessageSquare className="h-8 w-8 text-tech-accent" />
              },
              {
                title: "Order & Delivery Tracking",
                description: "Let customers check their order status or reschedule delivery — without waiting in a queue.",
                icon: <CheckCircle className="h-8 w-8 text-primary" />
              },
              {
                title: "HR & Internal Operations",
                description: "Automate repetitive voice-based workflows like attendance, leave confirmations, or info dispatch.",
                icon: <Cog className="h-8 w-8 text-tech-accent" />
              }
            ].map((useCase, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Fits Right Into Your Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI calling agent integrates with your existing contact center systems, CRMs, or phone platforms — so you don't have to change the way you operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Integrates with Twilio, Exotel, Ozonetel, and other major voice APIs",
              "Connects to CRM tools like Zoho, Salesforce, Freshdesk",
              "Syncs call transcripts, tags, and outcomes with your backend",
              "Supports live call transfer to agents at any point",
              "Customizable speech styles, languages, and intent flows",
              "Built for regulatory-safe call handling and data retention"
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Onelab */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Onelab</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural-Language Conversations",
                description: "Calls are handled with conversational AI tuned to your scripts, tone, and workflows.",
                icon: <MessageSquare className="h-8 w-8 text-primary" />
              },
              {
                title: "Rapid Go-Live",
                description: "Use pre-tested flows to launch in days — with hands-on onboarding and custom tuning.",
                icon: <Zap className="h-8 w-8 text-tech-accent" />
              },
              {
                title: "Built with Privacy in Mind",
                description: "All call data is processed securely, aligned with voice-data standards and storage rules.",
                icon: <Shield className="h-8 w-8 text-primary" />
              },
              {
                title: "Live Agent Routing",
                description: "Smart fallback and escalation logic ensure that high-touch calls reach the right humans.",
                icon: <Users className="h-8 w-8 text-tech-accent" />
              },
              {
                title: "No-Code Updates",
                description: "Easily update prompts, flows, or responses — no deep tech support needed.",
                icon: <Cog className="h-8 w-8 text-primary" />
              },
              {
                title: "Scales Without Limits",
                description: "From small teams to enterprise call centers, we support volume without compromise.",
                icon: <TrendingUp className="h-8 w-8 text-tech-accent" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-tech-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Customer Communication</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Deploy AI calling agents that handle customer inquiries with human-like precision and care.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="btn-tech px-8">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="px-8">
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