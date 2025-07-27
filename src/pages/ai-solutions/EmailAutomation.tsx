import { useState, useEffect } from "react";
import { Mail, Send, Inbox, Users, Target, TrendingUp, Clock, Zap, Edit3, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const EmailAutomation = () => {
  const [activeDemo, setActiveDemo] = useState("compose");
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const automationSteps = [
    { title: "AI Analyzes Audience", desc: "Understanding customer behavior patterns", progress: 25 },
    { title: "Generates Personalized Content", desc: "Creating unique messages for each segment", progress: 50 },
    { title: "Optimizes Send Time", desc: "Finding perfect timing for maximum engagement", progress: 75 },
    { title: "Delivers & Tracks Results", desc: "Sending and monitoring performance in real-time", progress: 100 }
  ];

  const campaignTypes = [
    {
      type: "Welcome Series",
      openRate: 89,
      clickRate: 34,
      color: "from-blue-500 to-cyan-500",
      icon: <Users className="w-5 h-5" />
    },
    {
      type: "Product Launch",
      openRate: 76,
      clickRate: 28,
      color: "from-purple-500 to-pink-500",
      icon: <Zap className="w-5 h-5" />
    },
    {
      type: "Re-engagement",
      openRate: 82,
      clickRate: 31,
      color: "from-green-500 to-emerald-500",
      icon: <Target className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % automationSteps.length);
      setProgress(automationSteps[currentStep].progress);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <Navigation />
      
      {/* Split-Screen Hero with Email Builder */}
      <section className="min-h-screen flex">
        {/* Left Side - Content */}
        <div className="w-1/2 flex items-center justify-center p-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="max-w-lg text-white space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Edit3 className="w-4 h-4 mr-2" />
                Smart Email Automation
              </Badge>
              
              <h1 className="text-5xl font-black leading-tight">
                Emails That
                <span className="block">Think & Adapt</span>
              </h1>
              
              <p className="text-xl text-indigo-100 leading-relaxed">
                AI-powered email campaigns that write themselves, optimize automatically, 
                and deliver personalized experiences at massive scale.
              </p>
            </div>

            {/* Automation Progress */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Campaign in Progress</span>
                <span className="text-sm text-indigo-200">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/20" />
              <div className="text-sm text-indigo-200">
                {automationSteps[currentStep].title}: {automationSteps[currentStep].desc}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Start Automating
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Email Builder */}
        <div className="w-1/2 flex items-center justify-center p-12 bg-white dark:bg-slate-900">
          <div className="w-full max-w-md">
            {/* Email Builder Interface */}
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Email Studio Pro</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <Button
                    size="sm"
                    variant={activeDemo === "compose" ? "default" : "ghost"}
                    onClick={() => setActiveDemo("compose")}
                    className="flex-1 text-xs"
                  >
                    Compose
                  </Button>
                  <Button
                    size="sm"
                    variant={activeDemo === "analytics" ? "default" : "ghost"}
                    onClick={() => setActiveDemo("analytics")}
                    className="flex-1 text-xs"
                  >
                    Analytics
                  </Button>
                  <Button
                    size="sm"
                    variant={activeDemo === "automation" ? "default" : "ghost"}
                    onClick={() => setActiveDemo("automation")}
                    className="flex-1 text-xs"
                  >
                    Automation
                  </Button>
                </div>

                {/* Compose View */}
                {activeDemo === "compose" && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject Line</label>
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg border">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">🚀 Your personalized offers await...</span>
                          <Badge className="bg-green-100 text-green-700 text-xs">AI Generated</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email Preview</label>
                      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 min-h-32">
                        <div className="space-y-3">
                          <div className="h-3 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                          <div className="h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
                      <Send className="w-4 h-4 mr-2" />
                      Send to 12,847 contacts
                    </Button>
                  </div>
                )}

                {/* Analytics View */}
                {activeDemo === "analytics" && (
                  <div className="space-y-4 animate-fade-in">
                    {campaignTypes.map((campaign, index) => (
                      <div key={index} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`w-8 h-8 bg-gradient-to-r ${campaign.color} rounded-lg flex items-center justify-center text-white`}>
                              {campaign.icon}
                            </div>
                            <span className="font-medium text-sm">{campaign.type}</span>
                          </div>
                          <div className="text-right text-xs text-gray-500">
                            <div>Open: {campaign.openRate}%</div>
                            <div>Click: {campaign.clickRate}%</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Progress value={campaign.openRate} className="h-1" />
                          <Progress value={campaign.clickRate} className="h-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Automation View */}
                {activeDemo === "automation" && (
                  <div className="space-y-4 animate-fade-in">
                    {automationSteps.map((step, index) => (
                      <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        index === currentStep ? 'bg-indigo-50 dark:bg-indigo-950 border border-indigo-200' : 'bg-gray-50 dark:bg-gray-800'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          index <= currentStep ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{step.title}</div>
                          <div className="text-xs text-gray-500">{step.desc}</div>
                        </div>
                        {index === currentStep && (
                          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating Feature Cards */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Email Intelligence That Adapts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Every email learns from the last, constantly improving performance</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Smart Segmentation", desc: "AI groups contacts by behavior patterns" },
              { icon: <Clock className="w-8 h-8" />, title: "Perfect Timing", desc: "Sends when each person is most likely to open" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "A/B Everything", desc: "Tests subjects, content, and timing automatically" },
              { icon: <BarChart className="w-8 h-8" />, title: "Predictive Analytics", desc: "Forecasts campaign performance before sending" }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA with Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to 10x Your Email Performance?</h2>
          <p className="text-xl text-indigo-200 mb-12">Join 50,000+ marketers using AI to create emails that actually convert</p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "89%", label: "Average Open Rate" },
              { value: "45%", label: "Click-Through Rate" },
              { value: "3.2x", label: "Revenue Increase" },
              { value: "10min", label: "Setup Time" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 text-lg">
              View Email Templates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailAutomation;