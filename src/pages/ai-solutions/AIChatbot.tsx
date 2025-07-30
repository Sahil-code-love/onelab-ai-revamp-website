import { useState, useEffect, useRef } from "react";
import { MessageSquare, Bot, User, Send, Sparkles, Brain, Zap, Globe, Clock, Users, CheckCircle, Target, HeadphonesIcon, UserPlus, BarChart3, Shield, Languages, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const AIChatbot = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const demoSteps = [
    { 
      type: "widget-appears", 
      delay: 3000,
      content: "Chat widget appears in bottom-right after 3 seconds" 
    },
    {
      type: "bot",
      text: "Hi there! Looking for something in particular? I can help you find it fast.",
      buttons: ["Find a Product", "Browse Deals", "Just Looking"],
      delay: 1000
    },
    {
      type: "user",
      text: "Find a Product",
      delay: 2000
    },
    {
      type: "bot",
      text: "Awesome. What are you looking for?",
      delay: 1000
    },
    {
      type: "user",
      text: "Wireless headphones under $100",
      delay: 2500
    },
    {
      type: "bot",
      text: "Here are some options you might like:",
      products: [
        { name: "Sony ZX Series", price: "$79", image: "🎧" },
        { name: "Audio-Technica ATH", price: "$89", image: "🎧" },
        { name: "JBL Tune 500BT", price: "$59", image: "🎧" }
      ],
      delay: 1500
    },
    {
      type: "user",
      text: "Sony ZX Series",
      delay: 2000
    },
    {
      type: "bot",
      text: "Great choice! Want me to add this to your cart?",
      buttons: ["Yes", "See More Options"],
      delay: 1000
    },
    {
      type: "user",
      text: "Yes",
      delay: 1500
    },
    {
      type: "bot",
      text: "Item added. Let's place the order — please confirm your delivery details:",
      form: [
        { label: "Name", value: "Alex Carter" },
        { label: "Address", value: "221B Willow Street, Chicago, IL" },
        { label: "Phone", value: "(312) 555-0147" }
      ],
      delay: 1500
    },
    {
      type: "bot",
      text: "How would you like to pay?",
      buttons: ["Credit/Debit Card", "PayPal", "Cash on Delivery"],
      delay: 2000
    },
    {
      type: "user",
      text: "Credit/Debit Card",
      delay: 1500
    },
    {
      type: "bot",
      text: "Thanks, Alex! Your order for the 'Sony ZX Series' headphones has been successfully placed.\n\n📧 Order confirmation sent to your email\n📦 Estimated delivery: 2-3 business days\n🆔 Order ID: #WH2024-4792",
      completion: true,
      delay: 2000
    }
  ];

  const useCases = [
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Instant Customer Support",
      description: "Answer FAQs, resolve issues, and reduce support tickets with smart automation."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Plan & Product Discovery",
      description: "Guide visitors to the right solution based on size, goals, or behavior — in real-time."
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Conversational Lead Capture",
      description: "Collect qualified leads with a human-like flow instead of long forms."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Onboarding New Users",
      description: "Help users get started with product walkthroughs and helpful nudges inside the chat."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Internal Chat for Teams",
      description: "Enable employees to get quick HR or IT help, check policies, or access internal tools via chat."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Feedback & Surveys",
      description: "Collect user feedback and NPS ratings contextually — when it matters most."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Tailored Flows",
      description: "No generic templates — we build conversations that reflect your product, brand, and business model."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Setup",
      description: "Launch quickly with pre-built components and our guided onboarding."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Fully On-Brand",
      description: "From tone to interface, everything is adapted to fit your identity."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise-Level Security",
      description: "End-to-end encrypted and built to meet compliance and data privacy standards."
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Multilingual Capability",
      description: "Serve users in multiple languages with dynamic content switching."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Actionable Analytics",
      description: "Track what users ask, where they drop off, and how they convert — directly in your dashboard."
    }
  ];

  const displayedSteps = demoSteps.filter(step => step.type !== "widget-appears").slice(0, demoStep);

  // Auto-scroll to bottom when new messages appear (without affecting page scroll)
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  }, [demoStep]);

  useEffect(() => {
    const startDemo = () => {
      setIsVisible(false);
      setDemoStep(0);
      
      // Widget appears after 3 seconds
      setTimeout(() => {
        setIsVisible(true);
        
        // Start the conversation steps
        const runSteps = (stepIndex: number) => {
          if (stepIndex < demoSteps.length - 1) { // -1 because we skip widget-appears step
            setTimeout(() => {
              setDemoStep(stepIndex + 1);
              runSteps(stepIndex + 1);
            }, demoSteps[stepIndex + 1]?.delay || 2000);
          }
        };
        
        runSteps(0);
      }, 3000);
    };

    startDemo();
    
    // Loop the demo
    const interval = setInterval(() => {
      startDemo();
    }, 35000); // Reset every 35 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-background dark:via-purple-950/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              AI Chatbot
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Deploy intelligent conversational AI that understands context, learns from interactions, 
              and delivers personalized experiences across all your customer touchpoints.
            </p>
            
            {/* Build with onelab Button */}
            <div className="mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8">
                Build with onelab
              </Button>
            </div>
          </div>

          {/* Advanced Demo - E-commerce */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative h-[600px] overflow-hidden">
              {/* E-commerce Website Background */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 h-full">
                {/* Website Header */}
                <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">E</span>
                      </div>
                      <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">ElectroStore</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                      <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Products</a>
                        <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Deals</a>
                        <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Support</a>
                      </nav>
                      <Button variant="outline" size="sm">🛒 Cart (0)</Button>
                      <Button size="sm">Sign In</Button>
                    </div>
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-8 h-full overflow-hidden">
                  {/* Hero Section */}
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                      Latest Electronics & Gadgets
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      Discover the newest tech at unbeatable prices. Free shipping on orders over $50.
                    </p>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg inline-block">
                      🔥 Black Friday Sale - Up to 70% Off!
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid md:grid-cols-4 gap-4 opacity-90">
                    <Card className="relative hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-3 flex items-center justify-center text-2xl">
                          🎧
                        </div>
                        <h3 className="font-semibold text-sm mb-1">Sony ZX Series</h3>
                        <p className="text-green-600 font-bold">$79</p>
                        <p className="text-xs text-muted-foreground line-through">$129</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="relative hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-3 flex items-center justify-center text-2xl">
                          📱
                        </div>
                        <h3 className="font-semibold text-sm mb-1">iPhone 15 Pro</h3>
                        <p className="text-green-600 font-bold">$999</p>
                        <p className="text-xs text-muted-foreground line-through">$1199</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="relative hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-3 flex items-center justify-center text-2xl">
                          💻
                        </div>
                        <h3 className="font-semibold text-sm mb-1">MacBook Air M3</h3>
                        <p className="text-green-600 font-bold">$1099</p>
                        <p className="text-xs text-muted-foreground line-through">$1299</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="relative hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-3 flex items-center justify-center text-2xl">
                          ⌚
                        </div>
                        <h3 className="font-semibold text-sm mb-1">Apple Watch S9</h3>
                        <p className="text-green-600 font-bold">$329</p>
                        <p className="text-xs text-muted-foreground line-through">$399</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Chat Widget */}
              {isVisible && (
                <div className="absolute bottom-4 right-4 w-80 bg-white dark:bg-card rounded-2xl shadow-2xl border border-purple-200 dark:border-purple-800 animate-scale-in">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Shopping Assistant</h3>
                        <p className="text-xs opacity-90">Online</p>
                      </div>
                      <div className="ml-auto">
                        <Badge className="bg-white/20 text-white border-0 text-xs">Live Demo</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3 h-80 overflow-y-auto scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                    {displayedSteps.map((step, index) => (
                      <div key={index} className={`flex items-start space-x-2 ${
                        step.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <Avatar className="h-6 w-6 flex-shrink-0">
                          <AvatarFallback className={
                            step.type === 'user' 
                              ? 'bg-primary text-white text-xs' 
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs'
                          }>
                            {step.type === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`rounded-2xl px-3 py-2 max-w-xs text-xs ${
                          step.type === 'user' 
                            ? 'bg-primary text-white rounded-tr-md' 
                            : 'bg-muted rounded-tl-md'
                        }`}>
                          <p className="whitespace-pre-line">{step.text}</p>
                          
                          {step.products && (
                            <div className="mt-2 space-y-2">
                              {step.products.map((product, prodIndex) => (
                                <div key={prodIndex} className="bg-white/10 rounded-lg p-2 flex items-center space-x-2 border border-white/20">
                                  <span className="text-lg">{product.image}</span>
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-xs truncate">{product.name}</p>
                                    <p className="text-green-400 font-bold text-xs">{product.price}</p>
                                  </div>
                                  <Button size="sm" className="h-5 px-2 text-xs bg-green-500 hover:bg-green-600">
                                    Select
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {step.form && (
                            <div className="mt-2 space-y-2 bg-white/10 rounded-lg p-2 border border-white/20">
                              {step.form.map((field, fieldIndex) => (
                                <div key={fieldIndex} className="flex justify-between text-xs">
                                  <span className="text-white/70">{field.label}:</span>
                                  <span className="font-medium">{field.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {step.buttons && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {step.buttons.map((button, btnIndex) => (
                                <Button
                                  key={btnIndex}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs h-6 px-2 bg-white/50 border-white/50 hover:bg-white/70"
                                >
                                  {button}
                                </Button>
                              ))}
                            </div>
                          )}
                          
                          {step.completion && (
                            <div className="mt-2 flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                              <span className="text-xs text-green-600 dark:text-green-400 font-medium">Order Completed Successfully!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-3 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted rounded-full px-3 py-1">
                        <p className="text-xs text-muted-foreground">Type your message...</p>
                      </div>
                      <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 h-7 w-7 p-0">
                        <Send className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Demo Statistics */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/50 dark:bg-card/50 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">2.5x</h3>
                <p className="text-sm text-muted-foreground">Faster Lead Qualification</p>
              </div>
              <div className="bg-white/50 dark:bg-card/50 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">84%</h3>
                <p className="text-sm text-muted-foreground">Reduction in Support Tickets</p>
              </div>
              <div className="bg-white/50 dark:bg-card/50 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
                <p className="text-sm text-muted-foreground">Always Available Support</p>
              </div>
              <div className="bg-white/50 dark:bg-card/50 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">95%</h3>
                <p className="text-sm text-muted-foreground">Customer Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Examples Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Use Cases & Examples</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI Chatbot helps across touchpoints — from product discovery to support and onboarding. Here are some of the ways it can be customized for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:scale-105 transition-all bg-white/70 dark:bg-card/70 backdrop-blur group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-900/50 dark:group-hover:to-pink-900/50 transition-colors">
                    <div className="text-purple-600">{useCase.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fits Right Into Your Workflow Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Fits Right Into Your Workflow</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You don't need to change your tools or processes. Our chatbot integrates with what you already use — and adapts to how you work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Deploy on your website, portal, or app", icon: <Globe className="h-5 w-5" /> },
              { text: "Integrates with CRMs like Salesforce, HubSpot, and Zoho", icon: <BarChart3 className="h-5 w-5" /> },
              { text: "Works with tools like Intercom, Freshdesk, and Zendesk", icon: <HeadphonesIcon className="h-5 w-5" /> },
              { text: "Supports routing to human agents when needed", icon: <Users className="h-5 w-5" /> },
              { text: "Fully customizable logic and flow", icon: <Sparkles className="h-5 w-5" /> },
              { text: "No-code interface for content and updates", icon: <Zap className="h-5 w-5" /> }
            ].map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-600">{feature.icon}</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Onelab Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Onelab</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-all bg-white/70 dark:bg-card/70 backdrop-blur group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-900/50 dark:group-hover:to-pink-900/50 transition-colors">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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