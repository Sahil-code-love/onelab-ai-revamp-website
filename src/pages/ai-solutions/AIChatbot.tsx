import { useState, useEffect } from "react";
import { Bot, MessageSquare, Brain, Lightbulb, Settings, Users, Zap, TrendingUp, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const AIChatbot = () => {
  const [activePersonality, setActivePersonality] = useState("helpful");
  const [messageFlow, setMessageFlow] = useState(0);

  const personalities = {
    helpful: { name: "Helpful Assistant", color: "from-blue-500 to-indigo-500", emoji: "🤝" },
    creative: { name: "Creative Genius", color: "from-purple-500 to-pink-500", emoji: "🎨" },
    analytical: { name: "Data Expert", color: "from-green-500 to-teal-500", emoji: "📊" },
    technical: { name: "Code Wizard", color: "from-orange-500 to-red-500", emoji: "⚡" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white overflow-hidden">
      <Navigation />
      
      {/* Floating Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Hero - Immersive Dashboard */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Left: Interactive Control Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Gen AI Chatbots
              </Badge>
              
              <h1 className="text-6xl font-black leading-none">
                <span className="block text-white">Build</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Intelligent
                </span>
                <span className="block text-white">Chatbots</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Create conversational AI that thinks, learns, and adapts. 
                No coding required - just pure intelligence.
              </p>
            </div>

            {/* Personality Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Choose AI Personality:</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(personalities).map(([key, personality]) => (
                  <Button
                    key={key}
                    variant={activePersonality === key ? "default" : "outline"}
                    onClick={() => setActivePersonality(key)}
                    className={`justify-start h-auto p-4 ${
                      activePersonality === key 
                        ? `bg-gradient-to-r ${personality.color} text-white border-0` 
                        : "border-gray-600 text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg mr-2">{personality.emoji}</span>
                    <span className="text-sm">{personality.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                <Bot className="w-5 h-5 mr-2" />
                Create Chatbot
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Explore Templates
              </Button>
            </div>
          </div>

          {/* Right: Multi-Panel Interface */}
          <div className="lg:col-span-3 h-[600px]">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
              
              {/* Chat Preview */}
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white text-sm">Live Chat</span>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3 h-48 overflow-y-auto">
                  {[
                    { type: "user", text: "How does this work?" },
                    { type: "bot", text: "I'm an AI assistant that can help with various tasks. What would you like to know?" },
                    { type: "user", text: "Show me analytics" }
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-2 rounded-lg text-xs ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-200'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-4 text-sm">Real-time Analytics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Active Chats</span>
                      <span className="text-lg font-bold text-green-400">247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Satisfaction</span>
                      <span className="text-lg font-bold text-blue-400">96%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Response Time</span>
                      <span className="text-lg font-bold text-purple-400">0.8s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code Integration */}
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white text-sm">Integration</h3>
                    <Code2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="bg-black/50 rounded p-3 text-xs font-mono text-green-400">
                    <div>&lt;script src="onelab-chat.js"&gt;</div>
                    <div className="text-blue-400">  chatbot.init()</div>
                    <div>&lt;/script&gt;</div>
                  </div>
                </CardContent>
              </Card>

              {/* Knowledge Base */}
              <Card className="bg-gray-900/50 border-gray-700 backdrop-blur">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-3 text-sm">Knowledge Base</h3>
                  <div className="space-y-2">
                    {["Product Documentation", "FAQ Database", "Support Tickets"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI That Actually Understands</h2>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Deep Learning", desc: "Neural networks that evolve", gradient: "from-blue-500 to-cyan-500" },
              { icon: Lightbulb, title: "Creative Problem Solving", desc: "Think outside the box", gradient: "from-yellow-500 to-orange-500" },
              { icon: Settings, title: "Easy Configuration", desc: "No coding required", gradient: "from-green-500 to-teal-500" },
              { icon: TrendingUp, title: "Continuous Learning", desc: "Gets smarter over time", gradient: "from-purple-500 to-pink-500" }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-indigo-200 mb-8">Create AI chatbots that your customers will love talking to</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
              <Bot className="w-5 h-5 mr-2" />
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg">
              See Live Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbot;