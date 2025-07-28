import { useState, useEffect } from "react";
import { MessageCircle, Send, Users, Clock, Zap, CheckCheck, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const WhatsAppAutomation = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const chatConversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Thanks for the quick response!",
      time: "2 min ago",
      unread: 0,
      avatar: "SJ",
      status: "online"
    },
    {
      id: 2,
      name: "Mike Chen",
      lastMessage: "Can you help me with my order?",
      time: "5 min ago",
      unread: 2,
      avatar: "MC",
      status: "away"
    },
    {
      id: 3,
      name: "Emma Wilson",
      lastMessage: "Perfect! That's exactly what I needed",
      time: "12 min ago",
      unread: 0,
      avatar: "EW",
      status: "online"
    }
  ];

  const sampleMessages = [
    { type: "user", text: "Hi, I need help with my recent order", time: "14:30" },
    { type: "bot", text: "Hello! I'd be happy to help you with your order. Can you please provide your order number?", time: "14:30" },
    { type: "user", text: "Sure, it's #12345", time: "14:31" },
    { type: "bot", text: "Thank you! I found your order. It's currently being processed and will ship within 24 hours. You'll receive a tracking number via email.", time: "14:31" },
    { type: "user", text: "Great! Can I change the delivery address?", time: "14:32" },
    { type: "bot", text: "I can help you update the delivery address. Let me transfer you to our shipping specialist who can make that change immediately.", time: "14:32" }
  ];

  const automationStats = [
    { label: "Response Time", value: "< 30s", color: "text-green-600" },
    { label: "Satisfaction Rate", value: "96%", color: "text-blue-600" },
    { label: "Messages Handled", value: "50K+", color: "text-purple-600" },
    { label: "Cost Reduction", value: "70%", color: "text-orange-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (messageIndex < sampleMessages.length - 1) {
        setIsTyping(true);
        setTimeout(() => {
          setMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      } else {
        setMessageIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-emerald-50 dark:from-green-950/20 dark:via-background dark:to-emerald-950/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent mb-6">
              WhatsApp Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform customer communication with intelligent WhatsApp automation that provides instant, 
              personalized responses while maintaining the human touch your customers love.
            </p>
          </div>

          {/* WhatsApp Interface Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-card rounded-3xl shadow-2xl overflow-hidden border border-green-200 dark:border-green-800">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3" />
                <div className="flex-1">
                  <h3 className="font-semibold">Business WhatsApp</h3>
                  <p className="text-sm text-green-100">AI Assistant Active</p>
                </div>
                <Badge className="bg-white/20 text-white border-0">Live Demo</Badge>
              </div>

              <div className="flex h-[500px]">
                {/* Chat List */}
                <div className="w-1/3 border-r border-border bg-muted/30">
                  <div className="p-4 border-b border-border">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recent Chats</h4>
                  </div>
                  <div className="space-y-1">
                    {chatConversations.map((chat, index) => (
                      <div
                        key={chat.id}
                        className={`p-4 border-b border-border cursor-pointer transition-colors ${
                          activeChat === index ? 'bg-green-50 dark:bg-green-950/30' : 'hover:bg-muted/50'
                        }`}
                        onClick={() => setActiveChat(index)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                                {chat.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                              chat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                            }`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium truncate">{chat.name}</p>
                              <p className="text-xs text-muted-foreground">{chat.time}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                              {chat.unread > 0 && (
                                <Badge className="bg-green-600 text-white text-xs min-w-5 h-5 rounded-full flex items-center justify-center">
                                  {chat.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-border bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {chatConversations[activeChat].avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{chatConversations[activeChat].name}</p>
                        <p className="text-xs text-muted-foreground">Online • AI Assistant Active</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {sampleMessages.slice(0, messageIndex + 1).map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.type === 'user' 
                            ? 'bg-green-600 text-white rounded-br-md' 
                            : 'bg-muted border rounded-bl-md'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && (
                              <Bot className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm">{message.text}</p>
                              <div className="flex items-center justify-end mt-1 space-x-1">
                                <span className={`text-xs ${message.type === 'user' ? 'text-green-100' : 'text-muted-foreground'}`}>
                                  {message.time}
                                </span>
                                {message.type === 'user' && <CheckCheck className="h-3 w-3 text-green-100" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted border rounded-2xl rounded-bl-md px-4 py-2">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-green-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full px-4 py-2">
                        <p className="text-sm text-muted-foreground">AI is handling this conversation...</p>
                      </div>
                      <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {automationStats.map((stat, index) => (
                <Card key={index} className="bg-white/80 dark:bg-card/80 backdrop-blur border-green-200 dark:border-green-800 hover:scale-105 transition-transform">
                  <CardContent className="p-4 text-center">
                    <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">WhatsApp Business Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="h-6 w-6" />, title: "Instant Responses", desc: "Sub-second reply times for all customer inquiries" },
              { icon: <Users className="h-6 w-6" />, title: "Multi-Agent Support", desc: "Handle thousands of conversations simultaneously" },
              { icon: <MessageCircle className="h-6 w-6" />, title: "Rich Media", desc: "Send images, documents, and interactive buttons" },
              { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", desc: "Round-the-clock customer support automation" },
              { icon: <CheckCheck className="h-6 w-6" />, title: "Smart Routing", desc: "Intelligent escalation to human agents when needed" },
              { icon: <Bot className="h-6 w-6" />, title: "AI Learning", desc: "Continuous improvement from every conversation" }
            ].map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-all bg-white/70 dark:bg-card/70 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-green-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate WhatsApp?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your customer service with intelligent WhatsApp automation that scales with your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              See Live Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppAutomation;