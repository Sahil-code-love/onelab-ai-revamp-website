import { useState, useEffect } from "react";
import { MessageSquare, Bot, User, Send, Sparkles, Brain, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const AIChatbot = () => {
  const [activeBot, setActiveBot] = useState(0);
  const [messageQueue, setMessageQueue] = useState(0);
  const [isThinking, setIsThinking] = useState(false);

  const chatbots = [
    {
      name: "Customer Support",
      color: "from-blue-500 to-cyan-500",
      description: "Handles customer inquiries and support tickets",
      messages: [
        { type: "user", text: "I need help with my account" },
        { type: "bot", text: "I'd be happy to help! What specific issue are you experiencing with your account?" },
        { type: "user", text: "I can't log in" },
        { type: "bot", text: "Let me help you troubleshoot this. First, have you tried resetting your password?" }
      ]
    },
    {
      name: "Sales Assistant",
      color: "from-green-500 to-emerald-500",
      description: "Qualifies leads and assists with product information",
      messages: [
        { type: "user", text: "What plans do you offer?" },
        { type: "bot", text: "We have three main plans: Basic ($29/mo), Pro ($79/mo), and Enterprise ($199/mo). What features are most important to you?" },
        { type: "user", text: "I need advanced analytics" },
        { type: "bot", text: "Perfect! Our Pro and Enterprise plans include advanced analytics. The Pro plan offers 50+ reports while Enterprise provides unlimited custom dashboards." }
      ]
    },
    {
      name: "HR Assistant",
      color: "from-purple-500 to-pink-500",
      description: "Helps with HR policies and employee questions",
      messages: [
        { type: "user", text: "What's the vacation policy?" },
        { type: "bot", text: "Our vacation policy offers 15 days PTO for new employees, increasing to 20 days after 2 years. Would you like details about how to request time off?" },
        { type: "user", text: "Yes, how do I request it?" },
        { type: "bot", text: "You can submit requests through our HR portal or email your manager directly. Requests should be made at least 2 weeks in advance for approval." }
      ]
    }
  ];

  const capabilities = [
    { icon: <Brain className="h-6 w-6" />, title: "Natural Language", desc: "Advanced NLP for human-like conversations" },
    { icon: <Zap className="h-6 w-6" />, title: "Instant Learning", desc: "Adapts and improves from every interaction" },
    { icon: <Globe className="h-6 w-6" />, title: "Multi-Platform", desc: "Deploy across web, mobile, and messaging apps" },
    { icon: <Sparkles className="h-6 w-6" />, title: "Smart Routing", desc: "Intelligent escalation to human agents" }
  ];

  const metrics = [
    { label: "Conversations", value: "1M+", growth: "+250%" },
    { label: "Resolution Rate", value: "87%", growth: "+15%" },
    { label: "Avg Response", value: "0.8s", growth: "-60%" },
    { label: "Satisfaction", value: "4.8/5", growth: "+12%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsThinking(true);
      setTimeout(() => {
        setMessageQueue(prev => (prev + 1) % 4);
        setIsThinking(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentBot = chatbots[activeBot];
  const currentMessages = currentBot.messages.slice(0, messageQueue + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-background dark:via-purple-950/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Chatbot
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deploy intelligent conversational AI that understands context, learns from interactions, 
              and delivers personalized experiences across all your customer touchpoints.
            </p>
          </div>

          {/* Interactive Chatbot Demo */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Bot Selection */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="font-semibold mb-4">Choose Your Bot</h3>
                {chatbots.map((bot, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all ${
                      activeBot === index 
                        ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/30' 
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => {
                      setActiveBot(index);
                      setMessageQueue(0);
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${bot.color} flex items-center justify-center`}>
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-sm">{bot.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{bot.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Chat Interface */}
              <div className="lg:col-span-3">
                <Card className="bg-white/80 dark:bg-card/80 backdrop-blur border-purple-200 dark:border-purple-800 h-[500px] flex flex-col">
                  {/* Chat Header */}
                  <div className={`p-4 bg-gradient-to-r ${currentBot.color} text-white rounded-t-lg`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{currentBot.name}</h3>
                        <p className="text-sm opacity-90">AI Assistant • Online</p>
                      </div>
                      <div className="ml-auto">
                        <Badge className="bg-white/20 text-white border-0">Live Demo</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {/* Welcome Message */}
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className={`bg-gradient-to-r ${currentBot.color} text-white`}>
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-2 max-w-sm">
                        <p className="text-sm">Hello! I'm your {currentBot.name.toLowerCase()}. How can I help you today?</p>
                      </div>
                    </div>

                    {/* Conversation */}
                    {currentMessages.map((message, index) => (
                      <div key={index} className={`flex items-start space-x-3 ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className={
                            message.type === 'user' 
                              ? 'bg-primary text-white' 
                              : `bg-gradient-to-r ${currentBot.color} text-white`
                          }>
                            {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`rounded-2xl px-4 py-2 max-w-sm ${
                          message.type === 'user' 
                            ? 'bg-primary text-white rounded-tr-md' 
                            : 'bg-muted rounded-tl-md'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}

                    {/* Thinking Indicator */}
                    {isThinking && (
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className={`bg-gradient-to-r ${currentBot.color} text-white`}>
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            <span className="text-xs text-muted-foreground">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full px-4 py-2">
                        <p className="text-sm text-muted-foreground">Type your message...</p>
                      </div>
                      <Button size="sm" className={`rounded-full bg-gradient-to-r ${currentBot.color}`}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-white/80 dark:bg-card/80 backdrop-blur border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                    <div className="text-xs text-green-600">{metric.growth}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Advanced AI Capabilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:scale-105 transition-all bg-white/70 dark:bg-card/70 backdrop-blur group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-900/50 dark:group-hover:to-pink-900/50 transition-colors">
                    <div className="text-purple-600">{capability.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Deploy Everywhere</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seamlessly integrate AI chatbots across all your platforms and channels
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Website Widget", desc: "Embed directly into your website", color: "from-blue-500 to-cyan-500" },
              { title: "Mobile Apps", desc: "Native integration for iOS and Android", color: "from-green-500 to-emerald-500" },
              { title: "Messaging Platforms", desc: "WhatsApp, Facebook, Telegram & more", color: "from-purple-500 to-pink-500" }
            ].map((integration, index) => (
              <Card key={index} className="hover:scale-105 transition-all">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{integration.title}</h3>
                  <p className="text-muted-foreground">{integration.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Deploy AI Chatbots?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create intelligent conversational experiences that delight customers and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
              Build Your Bot
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbot;