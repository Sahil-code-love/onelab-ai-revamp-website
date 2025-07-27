import { useState, useEffect } from "react";
import { Bot, MessageSquare, Brain, Lightbulb, Settings, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const AIChatbot = () => {
  const [activeBot, setActiveBot] = useState("customer-service");
  const [isThinking, setIsThinking] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const botTypes = [
    {
      id: "customer-service",
      name: "Customer Service Bot",
      color: "from-purple-500 to-pink-500",
      accent: "purple-500",
      description: "24/7 support automation"
    },
    {
      id: "sales",
      name: "Sales Assistant",
      color: "from-orange-500 to-red-500",
      accent: "orange-500",
      description: "Lead qualification & conversion"
    },
    {
      id: "knowledge",
      name: "Knowledge Bot",
      color: "from-cyan-500 to-blue-500",
      accent: "cyan-500",
      description: "Instant information retrieval"
    }
  ];

  const chatScenarios = {
    "customer-service": [
      { type: "user", text: "I need help with my subscription", time: "now" },
      { type: "bot", text: "I'd be happy to help! Let me check your account details. Can you provide your email address?", time: "now" },
      { type: "user", text: "john@example.com", time: "now" },
      { type: "bot", text: "Perfect! I found your Premium subscription. What specific issue are you experiencing?", time: "now" }
    ],
    "sales": [
      { type: "user", text: "Tell me about your pricing plans", time: "now" },
      { type: "bot", text: "Great question! We have 3 main plans: Starter ($29/mo), Professional ($99/mo), and Enterprise (custom). What's your team size?", time: "now" },
      { type: "user", text: "About 15 people", time: "now" },
      { type: "bot", text: "Perfect! For a 15-person team, I'd recommend our Professional plan. Would you like to see a detailed comparison or start a free trial?", time: "now" }
    ],
    "knowledge": [
      { type: "user", text: "How do I integrate your API?", time: "now" },
      { type: "bot", text: "Our API integration is straightforward! Here's a quick guide: 1) Get your API key from the dashboard 2) Use our REST endpoints 3) Check our documentation for examples. Would you like code samples?", time: "now" },
      { type: "user", text: "Yes, show me a Python example", time: "now" },
      { type: "bot", text: "```python\nimport requests\n\napi_key = 'your_key_here'\nresponse = requests.post(\n  'https://api.onelab.ai/chat',\n  headers={'Authorization': f'Bearer {api_key}'}\n)\n```\nNeed help with authentication?", time: "now" }
    ]
  };

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Advanced NLP",
      description: "Understanding context, intent, and sentiment in real-time"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Smart Learning",
      description: "Continuously improves from every conversation"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Easy Integration",
      description: "Deploy anywhere with simple API or widget embed"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Channel",
      description: "Works across websites, apps, and messaging platforms"
    }
  ];

  const metrics = [
    { label: "Conversations", value: "500K+", trend: "+89%" },
    { label: "Resolution Rate", value: "92%", trend: "+15%" },
    { label: "Response Time", value: "0.8s", trend: "-45%" },
    { label: "User Satisfaction", value: "4.8/5", trend: "+12%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsThinking(true);
      setTimeout(() => {
        setIsThinking(false);
        setMessageCount(prev => prev + 1);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentBot = botTypes.find(bot => bot.id === activeBot);
  const currentMessages = chatScenarios[activeBot] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-background to-indigo-50 dark:from-slate-900 dark:via-background dark:to-indigo-950">
      <Navigation />
      
      {/* Hero Section with Interactive Bot */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Chatbot
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Deploy intelligent conversational AI that understands, learns, and adapts. 
                  Create meaningful interactions that drive engagement and solve problems instantly.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  <Bot className="h-5 w-5 mr-2" />
                  Build Your Bot
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  Try Live Demo
                </Button>
              </div>

              {/* Bot Type Selector */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-muted-foreground">Choose Bot Type:</p>
                <div className="flex flex-wrap gap-2">
                  {botTypes.map((bot) => (
                    <Button
                      key={bot.id}
                      size="sm"
                      variant={activeBot === bot.id ? "default" : "outline"}
                      onClick={() => setActiveBot(bot.id)}
                      className={activeBot === bot.id ? `bg-gradient-to-r ${bot.color} text-white` : ""}
                    >
                      {bot.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.slice(0, 2).map((metric, index) => (
                  <Card key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border-indigo-200 dark:border-indigo-800 hover-scale">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-indigo-600">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-green-600">{metric.trend}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interactive Chatbot Interface */}
            <div className="relative">
              <div className="bg-white dark:bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
                {/* Bot Header */}
                <div className={`bg-gradient-to-r ${currentBot?.color} p-4 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{currentBot?.name}</div>
                      <div className="text-sm opacity-90">{currentBot?.description}</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="h-80 p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
                  {currentMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-indigo-500 text-white rounded-br-sm' 
                          : `bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm shadow-sm border-l-4 border-${currentBot?.accent}`
                      }`}>
                        {message.type === 'bot' && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Bot className="h-3 w-3 opacity-70" />
                            <span className="text-xs opacity-70 font-medium">AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Thinking Animation */}
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className={`bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-sm shadow-sm border-l-4 border-${currentBot?.accent}`}>
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="h-3 w-3 opacity-70" />
                          <span className="text-xs opacity-70 font-medium">AI Assistant</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className={`w-2 h-2 bg-${currentBot?.accent} rounded-full animate-bounce`}></div>
                          <div className={`w-2 h-2 bg-${currentBot?.accent} rounded-full animate-bounce`} style={{animationDelay: '0.1s'}}></div>
                          <div className={`w-2 h-2 bg-${currentBot?.accent} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-card border-t border-border">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Ask me anything..." 
                        className="w-full bg-transparent text-sm outline-none"
                        disabled
                      />
                    </div>
                    <Button size="sm" className={`rounded-full bg-gradient-to-r ${currentBot?.color}`}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Features */}
              <div className="absolute -top-4 -right-4 space-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Conversation Technology</h2>
            <p className="text-muted-foreground text-lg">Advanced AI capabilities that power exceptional chat experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale bg-white/80 dark:bg-card/80 backdrop-blur border-border/50 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-200 group-hover:to-purple-200 dark:group-hover:from-indigo-900/50 dark:group-hover:to-purple-900/50 transition-colors">
                    <div className="text-indigo-600">{feature.icon}</div>
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
            <h2 className="text-3xl font-bold mb-4">Chatbot Solutions for Every Need</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {botTypes.map((bot, index) => (
              <Card key={index} className={`hover-scale bg-gradient-to-br from-white to-gray-50 dark:from-card dark:to-gray-900/50 border-2 border-transparent hover:border-gradient-to-r hover:${bot.color.replace('from-', 'border-l-').replace('to-', 'border-r-')}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${bot.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{bot.name}</h3>
                  <p className="text-muted-foreground mb-4">{bot.description}</p>
                  <div className="space-y-2">
                    {bot.id === 'customer-service' && (
                      <>
                        <Badge variant="secondary" className="mr-2 mb-2">FAQ Automation</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Ticket Routing</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Live Chat Handoff</Badge>
                      </>
                    )}
                    {bot.id === 'sales' && (
                      <>
                        <Badge variant="secondary" className="mr-2 mb-2">Lead Qualification</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Product Recommendations</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Appointment Booking</Badge>
                      </>
                    )}
                    {bot.id === 'knowledge' && (
                      <>
                        <Badge variant="secondary" className="mr-2 mb-2">Document Search</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">Code Examples</Badge>
                        <Badge variant="secondary" className="mr-2 mb-2">API Documentation</Badge>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Measurable Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-white/80 dark:bg-card/80 backdrop-blur border-indigo-200 dark:border-indigo-800 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-semibold">{metric.trend}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your AI Chatbot?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Create intelligent conversations that engage users and drive results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
              <Bot className="h-5 w-5 mr-2" />
              Start Building
            </Button>
            <Button variant="outline" size="lg">
              Explore Templates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChatbot;