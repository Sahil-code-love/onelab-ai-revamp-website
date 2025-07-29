import { useState, useEffect } from "react";
import { Mail, Send, Inbox, Target, TrendingUp, Zap, Users, Calendar, Shield, Settings, Globe, Brain, CheckCircle, Plug, MessageSquare, ArrowUpRight, Heart, Headphones, FileText, RefreshCw, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const EmailAutomation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % 3;
        if (next === 2) setIsTyping(true);
        else setIsTyping(false);
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const useCases = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Support Responses",
      description: "Auto-draft accurate replies to common queries, reducing agent load."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Lead Engagement & Nurturing", 
      description: "Follow up instantly with personalized replies that sound human."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Internal Ticket Updates",
      description: "Summarize or respond to internal issues across teams with context-aware replies."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Order/Service Confirmations",
      description: "Dynamically generate updates or confirmations based on order status."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Follow-ups & Reminders",
      description: "Automate gentle nudges, confirmations, or escalations with logic-driven flows."
    }
  ];

  const integrations = [
    "Connects with Gmail, Outlook, and enterprise mailboxes",
    "Works alongside tools like Hubspot, Salesforce, Zendesk, and Freshdesk",
    "Can be deployed in internal ticketing platforms or shared inboxes",
    "Preserves your branding and signature format",
    "Can auto-label, tag, or route based on the thread context"
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast to Deploy",
      description: "Get your AI email assistant running in days — not weeks."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Stays in Your Control",
      description: "Your content, your infrastructure — we customize without pulling data externally."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Built with Security in Mind",
      description: "Encrypted at every step. Aligned with your internal access and compliance protocols."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Custom-Fit Logic",
      description: "We tune the AI to your domain, workflows, and tone — not just generic templates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Email Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Turn every email into an intelligent conversation with AI that understands context, drafts perfect replies, and manages your inbox like a human assistant.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Simple Email Demo */}
          <Card className="border-0 shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Incoming Email */}
                <div className="p-8 border-r dark:border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-muted-foreground">Incoming Email</h3>
                    <Badge variant="outline" className="text-xs">
                      Customer Support
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">sarah@customer.com</span>
                        <span className="text-xs text-muted-foreground">Just now</span>
                      </div>
                      <h4 className="font-medium mb-2 text-foreground">Order Status Question</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Hi, I placed order #1234 yesterday and haven't received any updates. 
                        Could you please let me know the current status? Thanks!
                      </p>
                    </div>
                    
                    {/* AI Processing Indicator */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800/50">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentStep >= 1 ? 'bg-blue-500' : 'bg-muted-foreground/30'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">Reading email...</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentStep >= 2 ? 'bg-blue-500' : 'bg-muted-foreground/30'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">Finding order details...</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentStep >= 0 ? 'bg-blue-500 animate-pulse' : 'bg-muted-foreground/30'
                        } ${isTyping ? 'animate-pulse' : ''}`}></div>
                        <span className="text-sm text-muted-foreground">Generating response...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Generated Response */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-muted-foreground">AI Generated Reply</h3>
                    <Badge className="text-xs">
                      Ready to Send
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">support@yourcompany.com</span>
                        <span className="text-xs text-muted-foreground">Draft</span>
                      </div>
                      <h4 className="font-medium mb-2 text-foreground">Re: Order Status Question</h4>
                      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                        <p>Hi Sarah,</p>
                        <p>Thank you for reaching out! I've located your order #1234 placed yesterday.</p>
                        <p>Great news - your order is currently being packed at our fulfillment center and will ship today. You'll receive a tracking number via email within the next 2 hours.</p>
                        <p>Expected delivery: Tomorrow by 3 PM</p>
                        <p>Let me know if you have any other questions!</p>
                        <p>Best regards,<br/>Customer Support Team</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Send className="h-3 w-3 mr-2" />
                        Send Reply
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">USE CASES & EXAMPLES</h2>
            <h3 className="text-2xl font-semibold text-tech-accent mb-4">
              Where Email Automation Makes the Biggest Difference
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-tech-accent/10 flex items-center justify-center mb-6">
                    <div className="text-tech-accent">{useCase.icon}</div>
                  </div>
                  <CardTitle className="text-xl mb-4">{useCase.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fits Right Into Your Workflow</h2>
            <h3 className="text-2xl font-semibold text-tech-accent mb-4">
              No Need to Start from Scratch
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our email agent plugs directly into your existing inbox or CRM — no need to migrate or retrain your team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-muted/30 to-muted/10 border-tech-accent/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {integrations.map((integration, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-tech-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-tech-accent" />
                      </div>
                      <p className="text-lg leading-relaxed">{integration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Onelab Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">WHY ONELAB?</h2>
            <h3 className="text-2xl font-semibold text-tech-accent mb-4">
              Smarter Email, Without the Complexity
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver tailored AI email agents — fast, secure, and easy to integrate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-tech-accent/10 flex items-center justify-center mb-6">
                    <div className="text-tech-accent">{benefit.icon}</div>
                  </div>
                  <CardTitle className="text-xl mb-4">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Workflow?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let our AI handle the heavy lifting while you focus on what matters most.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
            Start Building with Onelab
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailAutomation;