import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Clock, CheckCircle, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DecisionTreeFlow from "@/components/DecisionTreeFlow";

const DoctorAlliance = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 0,
      title: "AI Scheduling Assistant",
      description: "Watch how our AI assistant seamlessly handles patient scheduling and appointment management",
      color: "from-blue-600 to-purple-700"
    },
    {
      id: 1,
      title: "Patient Mobile App",
      description: "See the intuitive mobile experience for booking appointments and virtual consultations",
      color: "from-green-600 to-teal-700"
    },
    {
      id: 2,
      title: "Voice AI Assistant",
      description: "Experience natural language processing for patient inquiries and workflow automation",
      color: "from-purple-600 to-pink-700"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Explore real-time insights into appointment patterns and clinic efficiency metrics",
      color: "from-orange-600 to-red-700"
    }
  ];

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
              {videos[activeVideo].description}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
              {/* Main Video Display - Left Side */}
              <div className="col-span-3">
                <Card className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-0">
                  <div className={`aspect-video relative bg-gradient-to-br ${videos[activeVideo].color} flex items-center justify-center transition-all duration-500`}>
                    {/* Video Title Tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                        {videos[activeVideo].title}
                      </Badge>
                    </div>
                    
                    {/* Simulated Video Interface */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
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

              {/* Video Selection List - Right Side */}
              <div className="col-span-1 flex flex-col space-y-4">
                {videos.map((video, index) => (
                  <Card 
                    key={video.id}
                    className={`overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 transform-gpu ${activeVideo === index ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setActiveVideo(index)}
                  >
                    <div className={`aspect-video relative bg-gradient-to-br ${video.color} flex items-center justify-center group`}>
                      <div className="absolute top-2 left-2 z-20">
                        <Badge className="bg-black/50 text-white border-white/20 backdrop-blur-sm text-xs">
                          {video.title}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <Play className="w-4 h-4 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
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

      {/* Challenge → Solution → Result Decision Tree */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space-grotesk font-bold text-foreground mb-4">
              Our Strategic Approach: Challenge to Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our systematic problem-solving methodology, showing how each challenge was addressed with targeted AI solutions.
            </p>
            
            {/* Legend */}
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded border-2 border-red-200/60 bg-red-50/50 dark:border-red-800/40 dark:bg-red-950/20"></div>
                <span className="text-muted-foreground">Challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded border-2 border-blue-200/60 bg-blue-50/50 dark:border-blue-800/40 dark:bg-blue-950/20"></div>
                <span className="text-muted-foreground">AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded border-2 border-green-200/60 bg-green-50/50 dark:border-green-800/40 dark:bg-green-950/20"></div>
                <span className="text-muted-foreground">Results</span>
              </div>
            </div>
          </div>

          {/* Decision Tree Flow */}
          <DecisionTreeFlow challengesSolutionsResults={challengesSolutionsResults} />
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