import { useState, useEffect } from "react";
import { MessageCircle, Send, Users, Globe, Zap, BarChart3, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const WhatsAppAutomation = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatMessages = [
    { type: "user", text: "Hi, I need help with my order", time: "2:34 PM" },
    { type: "bot", text: "Hello! I'd be happy to help you with your order. Can you please share your order number?", time: "2:34 PM" },
    { type: "user", text: "#12345", time: "2:35 PM" },
    { type: "bot", text: "Found your order! It's currently being processed and will be shipped within 24 hours. Would you like tracking updates?", time: "2:35 PM" }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Messaging",
      description: "Reach customers worldwide with WhatsApp Business API integration"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "End-to-end encryption with full WhatsApp Business compliance"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Responses",
      description: "AI-powered replies within seconds, 24/7 availability"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Rich Analytics",
      description: "Track engagement, response rates, and customer satisfaction"
    }
  ];

  const metrics = [
    { label: "Messages Sent", value: "2.3M", trend: "+45%" },
    { label: "Response Rate", value: "94%", trend: "+12%" },
    { label: "Avg Response Time", value: "1.2s", trend: "-67%" },
    { label: "Customer Satisfaction", value: "96%", trend: "+8%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % chatMessages.length);
        setIsTyping(false);
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-green-50 dark:from-green-950/20 dark:via-background dark:to-green-950/20">
      <Navigation />
      
      {/* Hero Section with WhatsApp Interface */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
                  WhatsApp Automation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform customer conversations with intelligent WhatsApp automation. 
                  Deliver personalized experiences at scale on the world's most popular messaging platform.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Messaging
                </Button>
                <Button variant="outline" size="lg" className="hover-scale border-green-200 text-green-700 hover:bg-green-50">
                  View Integration
                </Button>
              </div>

              {/* Live Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.slice(0, 2).map((metric, index) => (
                  <Card key={index} className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border-green-200 dark:border-green-800 hover-scale">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-green-600 font-semibold">{metric.trend}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* WhatsApp Chat Interface */}
            <div className="relative flex justify-center">
              <div className="w-80 h-96 bg-white dark:bg-gray-900 rounded-3xl shadow-elegant overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* WhatsApp Header */}
                <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">AI Assistant</div>
                    <div className="text-xs opacity-90">Online</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 space-y-3 h-80 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-green-500 text-white rounded-br-sm' 
                          : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm shadow-sm'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-green-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="w-full bg-transparent text-sm outline-none"
                        disabled
                      />
                    </div>
                    <Button size="sm" className="rounded-full bg-green-600 hover:bg-green-700 text-white">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Status Indicators */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">WhatsApp Business Automation</h2>
            <p className="text-muted-foreground text-lg">Powerful features for seamless customer communication</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale bg-white/80 dark:bg-card/80 backdrop-blur border-green-100 dark:border-green-800 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Business Communication</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support",
                description: "Automate support tickets, FAQs, and issue resolution",
                examples: ["Order status", "Refund requests", "Product information"]
              },
              {
                title: "Marketing Campaigns",
                description: "Send targeted promotional messages and updates",
                examples: ["Product launches", "Special offers", "Event notifications"]
              },
              {
                title: "Sales Automation",
                description: "Qualify leads and guide customers through purchase",
                examples: ["Lead qualification", "Product demos", "Order processing"]
              }
            ].map((useCase, index) => (
              <Card key={index} className="hover-scale bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-card border-green-100 dark:border-green-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-green-700 dark:text-green-400">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white/80 dark:bg-card/80 backdrop-blur border-green-200 dark:border-green-700 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-semibold">{metric.trend}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/10 via-green-500/10 to-green-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate WhatsApp?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of businesses using WhatsApp automation to enhance customer experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
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