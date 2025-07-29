import { useState, useEffect } from "react";
import { Mail, Send, Inbox, Target, TrendingUp, Zap, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const EmailAutomation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailProgress, setEmailProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const automationSteps = [
    { title: "Audience Segmentation", icon: <Users className="h-5 w-5" />, progress: 100 },
    { title: "Content Generation", icon: <Mail className="h-5 w-5" />, progress: 75 },
    { title: "Timing Optimization", icon: <Calendar className="h-5 w-5" />, progress: 45 },
    { title: "Send & Track", icon: <Send className="h-5 w-5" />, progress: 0 }
  ];

  const campaigns = [
    { name: "Welcome Series", open: 94, click: 67, status: "active" },
    { name: "Product Launch", open: 89, click: 45, status: "draft" },
    { name: "Re-engagement", open: 76, click: 34, status: "scheduled" }
  ];

  const emailTypes = [
    { type: "Welcome", count: 1247, color: "bg-blue-500" },
    { type: "Promotional", count: 892, color: "bg-green-500" },
    { type: "Transactional", count: 634, color: "bg-purple-500" },
    { type: "Newsletter", count: 445, color: "bg-orange-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % automationSteps.length);
      setEmailProgress((prev) => (prev >= 100 ? 0 : prev + Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

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
              Create intelligent email campaigns that adapt, learn, and deliver personalized experiences 
              at scale with our advanced AI automation platform.
            </p>
          </div>

          {/* Email Studio Interface */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Campaign Builder */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 dark:bg-card/80 backdrop-blur border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-blue-600" />
                        Email Campaign Builder
                      </h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        AI Powered
                      </Badge>
                    </div>

                    {/* Automation Pipeline */}
                    <div className="space-y-4 mb-6">
                      {automationSteps.map((step, index) => (
                        <div key={index} className={`p-4 rounded-lg border-2 transition-all ${
                          currentStep === index 
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30' 
                            : 'border-border bg-muted/30'
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                currentStep === index ? 'bg-blue-500 text-white' : 'bg-muted text-muted-foreground'
                              }`}>
                                {step.icon}
                              </div>
                              <span className="font-medium">{step.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{step.progress}%</span>
                          </div>
                          <Progress value={step.progress} className="h-2" />
                        </div>
                      ))}
                    </div>

                    {/* Email Preview */}
                    <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-6 border-2 border-dashed border-border">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto flex items-center justify-center">
                          <Mail className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">AI Email Generator</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Our AI analyzes your audience and creates personalized content
                          </p>
                          <Button 
                            onClick={handleGenerate} 
                            disabled={isGenerating}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            {isGenerating ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                                Generating...
                              </>
                            ) : (
                              <>
                                <Zap className="h-4 w-4 mr-2" />
                                Generate Email
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Analytics Panel */}
              <div className="space-y-6">
                {/* Live Campaign Stats */}
                <Card className="bg-white/80 dark:bg-card/80 backdrop-blur border-purple-200 dark:border-purple-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-purple-600" />
                      Live Campaigns
                    </h3>
                    <div className="space-y-4">
                      {campaigns.map((campaign, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{campaign.name}</span>
                            <Badge variant={
                              campaign.status === 'active' ? 'default' :
                              campaign.status === 'scheduled' ? 'secondary' : 'outline'
                            }>
                              {campaign.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Open: {campaign.open}%</span>
                            <span>Click: {campaign.click}%</span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000" 
                                style={{width: `${campaign.open}%`}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Email Types Distribution */}
                <Card className="bg-white/80 dark:bg-card/80 backdrop-blur border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Inbox className="h-5 w-5 mr-2 text-green-600" />
                      Email Distribution
                    </h3>
                    <div className="space-y-3">
                      {emailTypes.map((type, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                            <span className="text-sm font-medium">{type.type}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{type.count}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-950/30 dark:to-purple-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Smart Email Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="h-6 w-6" />, title: "Smart Targeting", desc: "AI-powered audience segmentation" },
              { icon: <Calendar className="h-6 w-6" />, title: "Perfect Timing", desc: "Optimal send time prediction" },
              { icon: <TrendingUp className="h-6 w-6" />, title: "A/B Testing", desc: "Automated optimization" },
              { icon: <Zap className="h-6 w-6" />, title: "Real-time Triggers", desc: "Behavioral automation" }
            ].map((feature, index) => (
              <Card key={index} className="hover:scale-105 transition-all bg-white/70 dark:bg-card/70 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{feature.icon}</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Email Success?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of marketers using AI to create emails that convert and engage.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Templates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailAutomation;