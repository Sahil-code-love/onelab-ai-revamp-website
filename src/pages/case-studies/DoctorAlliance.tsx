import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Clock, CheckCircle, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DoctorAlliance = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const stats = [
    { label: "Monthly Patient Interactions", value: "10,000+", icon: Users },
    { label: "Time Saved Per Day", value: "8 hours", icon: Clock },
    { label: "Appointment Accuracy", value: "98%", icon: Target },
    { label: "Patient Satisfaction", value: "95%", icon: TrendingUp }
  ];

  const challengesSolutionsResults = [
    {
      challenge: "Manual appointment scheduling causing delays",
      solution: "AI-powered appointment scheduling system",
      result: "60% reduction in appointment scheduling time"
    },
    {
      challenge: "High volume of patient calls overwhelming staff",
      solution: "24/7 virtual assistant for basic inquiries",
      result: "40% improvement in staff productivity"
    },
    {
      challenge: "Missed appointments due to poor communication",
      solution: "Automated patient reminders via SMS and email",
      result: "85% decrease in missed appointments"
    },
    {
      challenge: "Inefficient patient data management",
      solution: "Integrated EHR system with voice commands",
      result: "95% patient satisfaction rate"
    },
    {
      challenge: "Limited after-hours support for patients",
      solution: "Smart patient triage and routing",
      result: "24/7 patient support availability"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/case-studies">
              <Button variant="ghost" size="sm" className="text-tech-accent hover:bg-tech-accent/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
          
          <div className="flex items-start space-x-6 mb-8">
            <div className="text-6xl">👩‍⚕️</div>
            <div className="flex-1">
              <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Digital Health & MedTech
              </Badge>
              <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-4">
                Doctor Alliance
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                How Doctor Alliance automated appointment scheduling and patient management, 
                transforming clinical workflows with AI assistants that handle 10K+ patient interactions monthly.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Project Duration: 4 months
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Team Size: 6 specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-tech-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-foreground mb-4">
              See the Solution in Action
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how our AI assistant seamlessly handles patient scheduling, 
              appointment management, and clinical workflow automation.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-0">
              <div className="aspect-video relative bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                {/* Simulated Video Interface */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="text-center z-10">
                  <Button
                    size="lg"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/20"
                  >
                    {isVideoPlaying ? <Pause className="w-6 h-6 mr-2" /> : <Play className="w-6 h-6 mr-2" />}
                    {isVideoPlaying ? "Pause" : "Play"} Demo
                  </Button>
                </div>

                {/* Animated elements to simulate video */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>AI Assistant: "Good morning! I can help schedule your appointment..."</span>
                      <div className="flex space-x-1">
                        <div className={`w-2 h-2 rounded-full ${isVideoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`}></div>
                        <div className={`w-2 h-2 rounded-full ${isVideoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse delay-100`}></div>
                        <div className={`w-2 h-2 rounded-full ${isVideoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse delay-200`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-space-grotesk font-bold text-foreground text-center mb-12">
            Project Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard Interface */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    AI Dashboard Interface
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Smart Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time insights into appointment patterns, patient flow, and clinic efficiency metrics.
                </p>
              </CardContent>
            </Card>

            {/* Mobile App */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-sm font-medium text-green-800 dark:text-green-200">
                    Patient Mobile App
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Patient Mobile Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive mobile app for appointment booking, reminders, and virtual consultations.
                </p>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-sm font-medium text-purple-800 dark:text-purple-200">
                    AI Voice Assistant
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Voice-Enabled AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Natural language processing for appointment scheduling and patient inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge → Solution → Result Flow */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Our Approach: From Challenge to Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we systematically addressed each challenge with targeted AI solutions and achieved measurable results.
            </p>
          </div>

          <div className="space-y-8">
            {challengesSolutionsResults.map((item, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  
                  {/* Challenge */}
                  <div className="relative">
                    <Card className="h-full p-5 border-l-4 border-l-destructive bg-destructive/5 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-destructive mb-2 uppercase tracking-wide">
                            Challenge {index + 1}
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">{item.challenge}</p>
                        </div>
                      </div>
                    </Card>
                    
                    {/* Desktop Arrow */}
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-2 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Mobile Arrow */}
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-2 border-t-primary border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="relative">
                    <Card className="h-full p-5 border-l-4 border-l-primary bg-primary/5 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                            AI Solution
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">{item.solution}</p>
                        </div>
                      </div>
                    </Card>
                    
                    {/* Desktop Arrow */}
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-2 border-l-green-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      </div>
                    </div>
                    
                    {/* Mobile Arrow */}
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-2 border-t-green-500 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div>
                    <Card className="h-full p-5 border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-950/20 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">
                            Result Achieved
                          </div>
                          <p className="text-sm text-foreground leading-relaxed font-medium">{item.result}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Connecting Line Between Rows */}
                {index < challengesSolutionsResults.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-space-grotesk font-bold text-foreground mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI can revolutionize your patient management and clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-tech-accent hover:bg-tech-accent/90">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorAlliance;