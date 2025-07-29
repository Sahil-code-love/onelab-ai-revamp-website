import { useState, useEffect } from "react";
import { Phone, PhoneCall, Mic, MicOff, Volume2, VolumeX, Clock, Zap, MessageSquare, Brain } from "lucide-react";
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
  const [currentPhase, setCurrentPhase] = useState("greeting");

  const callPhases = [
    { id: "greeting", text: "Hello! How can I help you today?", duration: 3 },
    { id: "listening", text: "I understand you need help with...", duration: 4 },
    { id: "processing", text: "Let me find the best solution for you.", duration: 3 },
    { id: "response", text: "Here's what I can offer you...", duration: 4 }
  ];

  const metrics = [
    { label: "Response Time", value: "0.3s", icon: <Zap className="h-4 w-4" /> },
    { label: "Success Rate", value: "94%", icon: <Brain className="h-4 w-4" /> },
    { label: "Languages", value: "30+", icon: <MessageSquare className="h-4 w-4" /> },
    { label: "Uptime", value: "99.9%", icon: <Clock className="h-4 w-4" /> }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let phaseTimeout: NodeJS.Timeout;

    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);

      const cyclePhases = () => {
        const currentIndex = callPhases.findIndex(phase => phase.id === currentPhase);
        const nextIndex = (currentIndex + 1) % callPhases.length;
        const nextPhase = callPhases[nextIndex];
        
        phaseTimeout = setTimeout(() => {
          setCurrentPhase(nextPhase.id);
          cyclePhases();
        }, nextPhase.duration * 1000);
      };

      cyclePhases();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(phaseTimeout);
    };
  }, [isCallActive, currentPhase]);

  const handleCallToggle = () => {
    if (isCallActive) {
      setIsCallActive(false);
      setCallDuration(0);
      setCurrentPhase("greeting");
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the future of voice communication with AI agents that sound human, 
              understand context, and deliver exceptional customer experiences 24/7.
            </p>
          </div>

          {/* Interactive Phone Interface */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-96 h-[600px] bg-gradient-to-b from-card via-card to-muted/50 rounded-[3rem] border-8 border-border shadow-2xl relative overflow-hidden">
                {/* Phone Screen */}
                <div className="absolute inset-4 bg-background rounded-[2rem] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-4 border-b border-border/50">
                    <span className="text-sm font-medium">AI Agent</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600">Connected</span>
                    </div>
                  </div>

                  {/* Call Display */}
                  <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-8">
                    {/* Avatar */}
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isCallActive ? 'bg-gradient-to-br from-tech-accent to-primary animate-pulse' : 'bg-gradient-to-br from-primary to-tech-accent'
                    }`}>
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <Phone className="h-12 w-12 text-white" />
                      </div>
                    </div>

                    {/* Call Status */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-semibold">
                        {isCallActive ? 'Call in Progress' : 'Ready to Connect'}
                      </h3>
                      {isCallActive && (
                        <div className="text-tech-accent font-mono text-lg">
                          {formatTime(callDuration)}
                        </div>
                      )}
                    </div>

                    {/* AI Response */}
                    {isCallActive && (
                      <div className="bg-muted/50 rounded-2xl p-4 max-w-xs text-center">
                        <p className="text-sm text-muted-foreground">
                          {callPhases.find(phase => phase.id === currentPhase)?.text}
                        </p>
                      </div>
                    )}

                    {/* Voice Waves */}
                    {isCallActive && (
                      <div className="flex space-x-1 items-end h-8">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-tech-accent rounded-full transition-all duration-300"
                            style={{
                              height: `${Math.sin(Date.now() / 300 + i) * 12 + 16}px`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Call Controls */}
                  <div className="p-6 border-t border-border/50">
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full w-14 h-14 ${!micActive ? 'bg-destructive/10 border-destructive' : ''}`}
                        onClick={() => setMicActive(!micActive)}
                      >
                        {micActive ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5 text-destructive" />}
                      </Button>
                      
                      <Button
                        size="lg"
                        onClick={handleCallToggle}
                        className={`rounded-full w-16 h-16 ${
                          isCallActive 
                            ? 'bg-destructive hover:bg-destructive/90' 
                            : 'bg-green-600 hover:bg-green-700'
                        }`}
                      >
                        {isCallActive ? <Phone className="h-6 w-6" /> : <PhoneCall className="h-6 w-6" />}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full w-14 h-14 ${!speakerActive ? 'bg-destructive/10 border-destructive' : ''}`}
                        onClick={() => setSpeakerActive(!speakerActive)}
                      >
                        {speakerActive ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5 text-destructive" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute -left-20 top-20 space-y-4">
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

              <div className="absolute -right-20 top-20 space-y-4">
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