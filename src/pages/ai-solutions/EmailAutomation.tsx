import { useState, useEffect } from "react";
import { Mail, Send, Inbox, Target, TrendingUp, Zap, Users, Calendar, Shield, Settings, Globe, Brain, CheckCircle, Plug, MessageSquare, ArrowUpRight, Heart, Headphones, FileText, RefreshCw, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const EmailAutomation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [emailProgress, setEmailProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(0);

  const demoEmails = [
    {
      from: "sarah@customer.com",
      subject: "Order #1234 - Delivery Question",
      content: "Hi, I need to change my delivery address for order #1234. Can you help?",
      aiResponse: "Hi Sarah! I'd be happy to help you update the delivery address for order #1234. I can see your order is currently being prepared. Let me update that for you right away...",
      context: "Order found • Status: Processing • Address change allowed"
    },
    {
      from: "mike@lead.com", 
      subject: "Interested in your services",
      content: "Hello, I saw your recent case study and I'm interested in learning more about your AI solutions for our e-commerce platform.",
      aiResponse: "Hi Mike! Thank you for your interest in our AI solutions. I'd love to schedule a personalized demo to show you how we've helped similar e-commerce platforms increase conversion rates by 35%...",
      context: "Lead detected • Industry: E-commerce • Demo request identified"
    },
    {
      from: "team@internal.com",
      subject: "Ticket #5678 - System Integration Issue", 
      content: "The new payment integration is causing checkout failures on mobile. Priority: High",
      aiResponse: "Alert: High priority ticket detected. I've automatically escalated this to the engineering team and created a Slack notification. ETA for resolution: 2 hours based on similar issues...",
      context: "Internal ticket • Auto-escalated • Team notified"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
      setEmailProgress((prev) => (prev >= 100 ? 0 : prev + Math.random() * 15));
      setCurrentEmail((prev) => (prev + 1) % demoEmails.length);
      
      // Simulate AI generation
      if (Math.random() > 0.7) {
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 1500);
      }
    }, 3000);

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

      {/* Demo Clips Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🎬 DEMO CLIPS</h2>
            <p className="text-lg text-muted-foreground">
              See how our email automation system works in real-time
            </p>
          </div>
          
          {/* Interactive Email Demo */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Email Interface */}
            <Card className="bg-white/90 dark:bg-card/90 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    Inbox - AI Assistant Active
                  </h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Live
                  </Badge>
                </div>

                {/* Email Thread */}
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-600">{demoEmails[currentEmail].from}</span>
                      <span className="text-xs text-muted-foreground">2 min ago</span>
                    </div>
                    <h4 className="font-medium mb-2">{demoEmails[currentEmail].subject}</h4>
                    <p className="text-sm text-muted-foreground">{demoEmails[currentEmail].content}</p>
                  </div>

                  {/* AI Context Understanding */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-purple-600">AI Context Analysis</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{demoEmails[currentEmail].context}</p>
                  </div>

                  {/* AI Generated Response */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-600">AI Generated Reply</span>
                      </div>
                      {isGenerating && <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-500 border-t-transparent"></div>}
                    </div>
                    <p className="text-sm text-muted-foreground">{demoEmails[currentEmail].aiResponse}</p>
                    <div className="mt-3 flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Send className="h-3 w-3 mr-1" />
                        Send
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Steps */}
            <Card className="bg-white/90 dark:bg-card/90 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                  AI Processing Pipeline
                </h3>
                
                <div className="space-y-4">
                  {[
                    { step: "Email Reception", icon: <Inbox className="h-4 w-4" />, status: "complete" },
                    { step: "Context Analysis", icon: <Brain className="h-4 w-4" />, status: currentStep >= 1 ? "complete" : "processing" },
                    { step: "Response Generation", icon: <MessageSquare className="h-4 w-4" />, status: currentStep >= 2 ? "complete" : "pending" },
                    { step: "Human Review", icon: <Users className="h-4 w-4" />, status: currentStep >= 3 ? "complete" : "pending" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      item.status === 'complete' ? 'bg-green-50 dark:bg-green-950/30' :
                      item.status === 'processing' ? 'bg-blue-50 dark:bg-blue-950/30' :
                      'bg-muted/30'
                    }`}>
                      <div className={`p-2 rounded-lg ${
                        item.status === 'complete' ? 'bg-green-500 text-white' :
                        item.status === 'processing' ? 'bg-blue-500 text-white animate-pulse' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span className="font-medium">{item.step}</span>
                        <div className="w-full bg-muted rounded-full h-2 mt-1">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              item.status === 'complete' ? 'bg-green-500 w-full' :
                              item.status === 'processing' ? 'bg-blue-500 w-3/4' :
                              'bg-muted w-0'
                            }`}
                          ></div>
                        </div>
                      </div>
                      <Badge variant={
                        item.status === 'complete' ? 'default' :
                        item.status === 'processing' ? 'secondary' : 'outline'
                      } className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Processing Speed</span>
                    <span className="text-sm text-muted-foreground">{Math.round(emailProgress)}%</span>
                  </div>
                  <Progress value={emailProgress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Average response time: 1.2 seconds
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Badge variant="secondary" className="text-sm">
              🔄 Auto-cycling through different email scenarios • Interactive demo
            </Badge>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">💼 USE CASES & EXAMPLES</h2>
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
            <h2 className="text-4xl font-bold mb-4">🔌 Fits Right Into Your Workflow</h2>
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
            <h2 className="text-4xl font-bold mb-4">✅ WHY ONELAB?</h2>
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
                  <CardTitle className="text-xl mb-4">🚀 {benefit.title}</CardTitle>
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