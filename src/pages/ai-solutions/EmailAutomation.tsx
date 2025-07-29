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
          
          {/* Demo Video Placeholder */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2 border-dashed border-blue-300 dark:border-blue-700">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-6">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 border-0"
                >
                  {isPlaying ? <Inbox className="h-8 w-8 text-white" /> : <Mail className="h-8 w-8 text-white" />}
                </Button>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Email Assistant Demo</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Watch how our AI understands context, drafts personalized replies, and handles complex email threads automatically. 
                From customer support to lead nurturing - see the magic in action.
              </p>
              <Badge variant="secondary" className="text-sm">
                Auto-running demo • Click to interact
              </Badge>
            </CardContent>
          </Card>
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