import { useState, useEffect } from "react";
import { Phone, PhoneCall, Mic, Volume2, Users, Clock, BarChart3, Zap, Play, Pause, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const CallingAgent = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState("support");

  const callScenarios = {
    support: {
      title: "Customer Support Call",
      transcript: [
        { speaker: "Customer", text: "Hi, I'm having trouble with my recent order" },
        { speaker: "AI Agent", text: "I'd be happy to help! Can you provide your order number?" },
        { speaker: "Customer", text: "It's #ORD-12345" },
        { speaker: "AI Agent", text: "I found your order. I can see it's delayed due to weather. I'll expedite shipping at no cost and you'll receive it tomorrow." }
      ]
    },
    sales: {
      title: "Sales Consultation",
      transcript: [
        { speaker: "Lead", text: "I'm interested in your premium plan" },
        { speaker: "AI Agent", text: "Great choice! Our premium plan includes advanced analytics and priority support. What's your team size?" },
        { speaker: "Lead", text: "We have about 20 employees" },
        { speaker: "AI Agent", text: "Perfect! For 20 users, you'd save 30% with our annual plan. I can schedule a demo right now." }
      ]
    },
    appointment: {
      title: "Appointment Booking",
      transcript: [
        { speaker: "Patient", text: "I need to schedule a check-up" },
        { speaker: "AI Agent", text: "I can help you schedule that. Do you prefer morning or afternoon appointments?" },
        { speaker: "Patient", text: "Morning would be better" },
        { speaker: "AI Agent", text: "I have Tuesday at 9 AM available with Dr. Smith. Should I book that for you?" }
      ]
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => {
          if (prev >= 45) {
            setIsCallActive(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      
      {/* Immersive Hero with 3D Phone Interface */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-sm px-4 py-2">
                <Phone className="w-4 h-4 mr-2" />
                Voice AI Technology
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-black tracking-tight">
                <span className="block text-white">AI Calling</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Human-like AI agents that handle thousands of calls simultaneously. 
                Natural conversations, instant responses, perfect memory.
              </p>
            </div>

            {/* Scenario Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Try Different Scenarios:</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(callScenarios).map(([key, scenario]) => (
                  <Button
                    key={key}
                    variant={selectedScenario === key ? "default" : "outline"}
                    onClick={() => setSelectedScenario(key)}
                    className={`${
                      selectedScenario === key 
                        ? "bg-blue-600 hover:bg-blue-700 text-white" 
                        : "border-gray-600 text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {scenario.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">0.3s</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-xs text-gray-400">Available</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: 3D Phone Interface */}
          <div className="relative flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Phone Frame with Glassmorphism */}
              <div className="w-80 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[40px] p-6 border border-gray-700 shadow-2xl backdrop-blur">
                
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[32px] p-6 relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-white text-sm">
                    <span>AI Agent</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Live</span>
                    </div>
                  </div>

                  {/* Call Status */}
                  <div className="text-center space-y-6">
                    <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCallActive 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      <Phone className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {callScenarios[selectedScenario].title}
                      </h3>
                      {isCallActive && (
                        <div className="text-blue-400 font-mono text-sm mt-2">
                          {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}
                        </div>
                      )}
                    </div>

                    {/* Voice Wave Animation */}
                    {isCallActive && (
                      <div className="flex justify-center space-x-1 items-end h-12">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-blue-400 rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 30 + 20}px`,
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: '1s'
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Call Controls */}
                    <div className="flex justify-center space-x-4 mt-8">
                      <Button
                        size="lg"
                        onClick={() => setIsCallActive(!isCallActive)}
                        className={`rounded-full w-16 h-16 ${
                          isCallActive 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-green-500 hover:bg-green-600'
                        }`}
                      >
                        {isCallActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Conversation Transcript */}
      <section className="py-20 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Real-Time Conversation</h2>
            <p className="text-gray-400">Experience natural AI conversations in action</p>
          </div>

          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur">
            <CardContent className="p-8">
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {callScenarios[selectedScenario].transcript.map((message, index) => (
                  <div key={index} className={`flex ${message.speaker === 'AI Agent' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-xs p-4 rounded-2xl ${
                      message.speaker === 'AI Agent'
                        ? 'bg-blue-600 text-white rounded-bl-sm'
                        : 'bg-gray-700 text-gray-200 rounded-br-sm'
                    }`}>
                      <div className="text-xs opacity-70 mb-1">{message.speaker}</div>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Showcase - Horizontal Scroll */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Beyond Human Capabilities</h2>
          </div>
          
          <div className="flex space-x-8 overflow-x-auto pb-8">
            {[
              { icon: Phone, title: "Unlimited Concurrent Calls", desc: "Handle thousands simultaneously" },
              { icon: Clock, title: "Instant Response", desc: "Sub-second reaction time" },
              { icon: Users, title: "Perfect Memory", desc: "Never forgets customer history" },
              { icon: Zap, title: "24/7 Availability", desc: "No breaks, no holidays" }
            ].map((feature, index) => (
              <Card key={index} className="flex-shrink-0 w-72 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Voice Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">Deploy AI agents that never sleep, never tire, and always deliver perfect service</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
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