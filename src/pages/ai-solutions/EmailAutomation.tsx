import { useState } from "react";
import { Mail, Send, Inbox, Users, Target, TrendingUp, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const EmailAutomation = () => {
  const [activeTab, setActiveTab] = useState("compose");
  const [isTyping, setIsTyping] = useState(false);

  const emailTemplates = [
    { id: 1, subject: "Welcome to Our Platform", type: "Welcome", opened: 94, clicked: 67 },
    { id: 2, subject: "Your Weekly Analytics Report", type: "Analytics", opened: 89, clicked: 45 },
    { id: 3, subject: "Special Offer Just for You", type: "Promotional", opened: 76, clicked: 34 },
    { id: 4, subject: "Account Security Update", type: "Security", opened: 98, clicked: 23 }
  ];

  const automationFeatures = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Smart Segmentation",
      description: "AI-powered audience targeting based on behavior and preferences"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Perfect Timing",
      description: "Send emails when your audience is most likely to engage"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "A/B Testing",
      description: "Automatically optimize subject lines and content for better results"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Triggers",
      description: "Real-time automation based on user actions and behaviors"
    }
  ];

  const metrics = [
    { label: "Open Rate", value: "89%", trend: "+12%" },
    { label: "Click Rate", value: "45%", trend: "+18%" },
    { label: "Conversion", value: "23%", trend: "+25%" },
    { label: "Revenue Generated", value: "$2.4M", trend: "+35%" }
  ];

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      {/* Hero Section with Email Interface */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Email Automation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Craft intelligent email campaigns that adapt, learn, and deliver personalized experiences 
                  at scale with AI-powered automation.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Start Automating
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  View Templates
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.slice(0, 2).map((metric, index) => (
                  <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800 hover-scale">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-green-600">{metric.trend}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interactive Email Dashboard */}
            <div className="relative">
              <div className="bg-white dark:bg-card rounded-2xl shadow-elegant border border-border p-6 space-y-4">
                {/* Email Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">Email Studio</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant={activeTab === "compose" ? "default" : "ghost"}
                      onClick={() => setActiveTab("compose")}
                      className="text-xs"
                    >
                      Compose
                    </Button>
                    <Button
                      size="sm"
                      variant={activeTab === "analytics" ? "default" : "ghost"}
                      onClick={() => setActiveTab("analytics")}
                      className="text-xs"
                    >
                      Analytics
                    </Button>
                  </div>
                </div>

                {activeTab === "compose" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To:</label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">VIP Customers (1,247)</Badge>
                        <Badge variant="secondary">New Signups (892)</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject:</label>
                      <div className="p-3 bg-muted/50 rounded-lg border">
                        {isTyping ? (
                          <div className="flex items-center space-x-2">
                            <span>AI is writing...</span>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></div>
                              <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        ) : (
                          "🚀 Your personalized insights are ready!"
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Content Preview:</label>
                      <div className="p-4 bg-muted/30 rounded-lg border min-h-[120px] flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto flex items-center justify-center">
                            <Mail className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-sm text-muted-foreground">AI-generated personalized content</p>
                        </div>
                      </div>
                    </div>

                    <Button onClick={simulateTyping} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Send className="h-4 w-4 mr-2" />
                      Generate & Send
                    </Button>
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm">Campaign Performance</h3>
                    {emailTemplates.slice(0, 3).map((template) => (
                      <div key={template.id} className="p-3 bg-muted/30 rounded-lg space-y-2">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{template.subject}</p>
                            <Badge variant="outline" className="text-xs">{template.type}</Badge>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Open: {template.opened}%</span>
                          <span>Click: {template.clicked}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full" 
                            style={{width: `${template.opened}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <Inbox className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Email Automation</h2>
            <p className="text-muted-foreground text-lg">AI-powered features that maximize engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="hover-scale bg-white/70 dark:bg-card/70 backdrop-blur border-border/50 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-900/50 dark:group-hover:to-purple-900/50 transition-colors">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Results That Drive Growth</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-semibold">{metric.trend}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Email Success?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of marketers using AI to create emails that convert
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              See Email Templates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailAutomation;