import { useState, useEffect } from "react";
import { MessageCircle, Send, Users, Globe, Zap, BarChart3, Clock, Shield, Smartphone, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const WhatsAppAutomation = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const conversations = [
    {
      customer: "Alex Johnson",
      avatar: "AJ",
      type: "Order Support",
      messages: [
        { type: "user", text: "Hi, where's my order?", time: "2:34 PM", status: "read" },
        { type: "bot", text: "Hello Alex! I can help you track your order. Let me check that for you right away.", time: "2:34 PM", status: "read" },
        { type: "user", text: "Order #12345", time: "2:35 PM", status: "read" },
        { type: "bot", text: "Great! Your order is out for delivery and will arrive within 2 hours. I'll send you live tracking.", time: "2:35 PM", status: "delivered" }
      ]
    },
    {
      customer: "Sarah Kim",
      avatar: "SK",
      type: "Product Inquiry",
      messages: [
        { type: "user", text: "Do you have this in size M?", time: "3:15 PM", status: "read" },
        { type: "bot", text: "Yes! We have the Medium size in stock. Would you like me to reserve it for you?", time: "3:15 PM", status: "read" },
        { type: "user", text: "Yes please!", time: "3:16 PM", status: "read" },
        { type: "bot", text: "Perfect! I've reserved it for 24 hours. Here's your direct checkout link.", time: "3:16 PM", status: "delivered" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % conversations[activeChat].messages.length);
        setIsTyping(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeChat]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
      <Navigation />
      
      {/* Mobile-First Hero - Simulating WhatsApp Interface */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - WhatsApp Business Interface */}
        <div className="lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-sm w-full">
            {/* Phone Frame */}
            <div className="relative">
              <div className="w-full bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-4 shadow-2xl">
                {/* WhatsApp Interface */}
                <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 p-4 flex items-center space-x-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">WhatsApp Business</h3>
                      <p className="text-xs text-green-100">AI Assistant Active</p>
                    </div>
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  </div>

                  {/* Chat List */}
                  <div className="flex-1 bg-gray-50 flex flex-col">
                    {/* Chat Headers */}
                    <div className="border-b border-gray-200 p-2 space-y-1">
                      {conversations.map((conv, index) => (
                        <div 
                          key={index}
                          onClick={() => setActiveChat(index)}
                          className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                            activeChat === index ? 'bg-green-100' : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {conv.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <p className="font-medium text-gray-900 text-sm truncate">{conv.customer}</p>
                              <span className="text-xs text-gray-500">{conv.messages[conv.messages.length - 1].time}</span>
                            </div>
                            <p className="text-xs text-gray-600 truncate">{conv.messages[conv.messages.length - 1].text}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-700 text-xs">{conv.type}</Badge>
                        </div>
                      ))}
                    </div>

                    {/* Active Chat */}
                    <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                      {conversations[activeChat].messages.slice(0, messageIndex + 1).map((message, idx) => (
                        <div key={idx} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xs px-3 py-2 rounded-2xl ${
                            message.type === 'user' 
                              ? 'bg-green-500 text-white rounded-br-sm' 
                              : 'bg-white border text-gray-800 rounded-bl-sm shadow-sm'
                          }`}>
                            {message.type === 'bot' && (
                              <div className="flex items-center space-x-1 mb-1">
                                <Bot className="w-3 h-3 text-green-600" />
                                <span className="text-xs text-green-600 font-medium">AI Assistant</span>
                              </div>
                            )}
                            <p className="text-sm">{message.text}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className={`text-xs ${message.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                                {message.time}
                              </span>
                              {message.type === 'bot' && (
                                <div className="flex space-x-1">
                                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white border p-3 rounded-2xl rounded-bl-sm shadow-sm">
                            <div className="flex items-center space-x-1 mb-1">
                              <Bot className="w-3 h-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">AI Assistant</span>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t">
                      <div className="flex items-center space-x-2">
                        <input 
                          placeholder="Type a message..."
                          className="flex-1 p-2 bg-gray-100 rounded-full text-sm outline-none text-gray-800"
                          disabled
                        />
                        <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-lg space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                WhatsApp Business API
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                <span className="block">WhatsApp</span>
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-green-100 leading-relaxed">
                Connect with 2+ billion users through intelligent WhatsApp automation. 
                Personal conversations at enterprise scale.
              </p>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">2.3B</div>
                  <div className="text-xs text-green-200">Monthly Users</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-300">94%</div>
                  <div className="text-xs text-green-200">Open Rate</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Messaging
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800">
                View Integration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Feature Showcase */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why WhatsApp Automation Works</h2>
            <p className="text-xl text-green-200">The platform your customers actually use</p>
          </div>

          {/* Circular Layout */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <MessageCircle className="w-16 h-16 text-green-600" />
                </div>
              </div>

              {/* Feature Circles */}
              {[
                { icon: Globe, title: "Global Reach", desc: "2B+ users worldwide", angle: 0 },
                { icon: Shield, title: "Secure", desc: "End-to-end encrypted", angle: 90 },
                { icon: Zap, title: "Instant", desc: "Real-time delivery", angle: 180 },
                { icon: Users, title: "Personal", desc: "1-on-1 conversations", angle: 270 }
              ].map((feature, index) => {
                const radius = 140;
                const angleRad = (feature.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                  >
                    <Card className="w-24 h-24 bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                        <feature.icon className="w-8 h-8 text-white mb-1" />
                        <div className="text-xs text-white font-medium text-center">{feature.title}</div>
                      </CardContent>
                    </Card>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      {feature.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Metrics Timeline */}
      <section className="py-20 bg-gradient-to-b from-emerald-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Performance Timeline</h2>
            <p className="text-xl text-emerald-200">Watch your metrics improve over time</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-teal-400"></div>

            {/* Timeline Items */}
            {[
              { time: "Week 1", metric: "Response Rate", value: "78%", desc: "Initial automation setup" },
              { time: "Week 2", metric: "Customer Satisfaction", value: "89%", desc: "AI learning improves responses" },
              { time: "Week 4", metric: "Resolution Time", value: "2.3min", desc: "Optimized conversation flows" },
              { time: "Week 8", metric: "Cost Reduction", value: "67%", desc: "Full automation efficiency" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all">
                    <CardContent className="p-6">
                      <div className="text-sm text-green-300 mb-1">{item.time}</div>
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-lg font-semibold text-emerald-200 mb-2">{item.metric}</div>
                      <div className="text-sm text-green-100">{item.desc}</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-8 h-8 bg-white rounded-full border-4 border-green-400 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate WhatsApp?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join 50,000+ businesses using WhatsApp automation to enhance customer experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg">
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppAutomation;