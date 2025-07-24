import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const caseStudyCategories = [
    {
      title: "Digital Health & MedTech",
      cases: [
        {
          company: "Middle town Medical",
          title: "How Middle town Medical streamlined patient care with AI-powered diagnostics",
          description: "Reduced diagnosis time by 60% and improved patient outcomes through intelligent health monitoring systems.",
          hasVideo: true,
          logo: "🏥"
        },
        {
          company: "Doctor Alliance",
          title: "How Doctor Alliance automated appointment scheduling and patient management",
          description: "Transformed clinical workflows with AI assistants, handling 10K+ patient interactions monthly.",
          hasVideo: true,
          logo: "👩‍⚕️"
        },
        {
          company: "Revilico",
          title: "How Revilico revolutionized telemedicine with smart consultation platforms",
          description: "Enabled seamless remote consultations with AI-powered preliminary assessments.",
          hasVideo: false,
          logo: "💊"
        },
        {
          company: "Gclinics",
          title: "How Gclinics enhanced patient experience with intelligent clinic management",
          description: "Optimized clinic operations and reduced wait times through predictive scheduling.",
          hasVideo: true,
          logo: "🩺"
        },
        {
          company: "My Health Integral",
          title: "How My Health Integral created comprehensive health tracking solutions",
          description: "Integrated multiple health metrics into a unified AI-driven wellness platform.",
          hasVideo: false,
          logo: "❤️"
        },
        {
          company: "SmartAI",
          title: "How SmartAI delivered FDA-compliant medical AI diagnostics",
          description: "Built enterprise-grade diagnostic tools with 95% accuracy and regulatory compliance.",
          hasVideo: true,
          logo: "🤖"
        }
      ]
    },
    {
      title: "Sales Automation Agents",
      cases: [
        {
          company: "Wise Sales",
          title: "How Wise Sales automated lead qualification and pipeline management",
          description: "Achieved 3x pipeline growth through intelligent lead scoring and automated follow-ups.",
          hasVideo: true,
          logo: "📊"
        },
        {
          company: "Lead Central",
          title: "How Lead Central transformed B2B lead generation with AI agents",
          description: "Increased qualified leads by 250% using predictive lead scoring and automated outreach.",
          hasVideo: true,
          logo: "🎯"
        }
      ]
    },
    {
      title: "Finance & FinTech",
      cases: [
        {
          company: "Fundhub",
          title: "How Fundhub automated investment portfolio management",
          description: "Streamlined investment decisions with AI-powered risk assessment and portfolio optimization.",
          hasVideo: true,
          logo: "💰"
        },
        {
          company: "Financee",
          title: "How Financee built intelligent personal finance assistants",
          description: "Helped users manage finances with AI-driven budgeting and investment recommendations.",
          hasVideo: false,
          logo: "💳"
        },
        {
          company: "Obiyami",
          title: "How Obiyami created smart expense tracking and analysis",
          description: "Automated expense categorization and provided intelligent spending insights.",
          hasVideo: true,
          logo: "📱"
        },
        {
          company: "NSE",
          title: "How NSE implemented AI-powered trading analytics",
          description: "Enhanced trading decisions with real-time market analysis and predictive modeling.",
          hasVideo: false,
          logo: "📈"
        },
        {
          company: "Novelty Wealth",
          title: "How Novelty Wealth automated wealth management workflows",
          description: "Optimized client portfolios using AI-driven asset allocation strategies.",
          hasVideo: true,
          logo: "💎"
        },
        {
          company: "Wasan",
          title: "How Wasan built intelligent credit scoring systems",
          description: "Improved loan approval accuracy by 40% through advanced risk assessment algorithms.",
          hasVideo: false,
          logo: "🏦"
        }
      ]
    },
    {
      title: "Data Intelligence & Automation",
      cases: [
        {
          company: "Lumina Data",
          title: "How Lumina Data processes 1M+ data points in real-time",
          description: "Built scalable data intelligence platform with instant insights and 98% accuracy.",
          hasVideo: true,
          logo: "🔍"
        },
        {
          company: "Co2opt",
          title: "How Co2opt optimized carbon footprint tracking with AI",
          description: "Automated environmental impact analysis for sustainable business decisions.",
          hasVideo: false,
          logo: "🌱"
        },
        {
          company: "Visuo",
          title: "How Visuo created intelligent visual data analysis tools",
          description: "Transformed complex datasets into actionable insights through AI-powered visualization.",
          hasVideo: true,
          logo: "👁️"
        },
        {
          company: "Bryckel",
          title: "How Bryckel automated supply chain optimization",
          description: "Reduced operational costs by 35% through predictive logistics and demand forecasting.",
          hasVideo: false,
          logo: "🚚"
        },
        {
          company: "Sahib AI",
          title: "How Sahib AI built enterprise data automation platforms",
          description: "Streamlined data workflows for Fortune 500 companies with intelligent processing.",
          hasVideo: true,
          logo: "⚡"
        },
        {
          company: "Nexus Ocean",
          title: "How Nexus Ocean transformed maritime data analytics",
          description: "Optimized shipping routes and port operations through AI-driven maritime intelligence.",
          hasVideo: false,
          logo: "🚢"
        }
      ]
    },
    {
      title: "Consumer Apps",
      cases: [
        {
          company: "Nexiun",
          title: "How Nexiun scaled to 10K users with AI-powered social discovery",
          description: "Built engaging social platform with intelligent matching and content recommendation.",
          hasVideo: true,
          logo: "📱"
        },
        {
          company: "Machali",
          title: "How Machali revolutionized food delivery with smart recommendations",
          description: "Increased order frequency by 65% through AI-powered menu personalization.",
          hasVideo: true,
          logo: "🍕"
        },
        {
          company: "SymphoMe",
          title: "How SymphoMe created personalized music experiences",
          description: "Enhanced user engagement with AI-driven music discovery and playlist generation.",
          hasVideo: false,
          logo: "🎵"
        },
        {
          company: "INSP",
          title: "How INSP built intelligent inspiration and productivity tools",
          description: "Boosted user productivity by 80% through AI-powered task management and motivation.",
          hasVideo: true,
          logo: "✨"
        },
        {
          company: "Advisor AI",
          title: "How Advisor AI delivered personalized life coaching at scale",
          description: "Provided intelligent guidance to 50K+ users through conversational AI coaching.",
          hasVideo: false,
          logo: "🎯"
        },
        {
          company: "Influenergy",
          title: "How Influenergy connected influencers with AI-powered matching",
          description: "Optimized brand-influencer partnerships through intelligent compatibility scoring.",
          hasVideo: true,
          logo: "📸"
        }
      ]
    }
  ];

  const categoryTags = ["All", ...caseStudyCategories.map(cat => cat.title)];
  
  const filteredCategories = activeFilter === "All" 
    ? caseStudyCategories 
    : caseStudyCategories.filter(cat => cat.title === activeFilter);

  // Flatten all case studies for "All" view
  const allCaseStudies = caseStudyCategories.flatMap(category => 
    category.cases.map(caseStudy => ({
      ...caseStudy,
      category: category.title
    }))
  );

  const categoryColors = {
    "Digital Health & MedTech": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Sales Automation Agents": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", 
    "Finance & FinTech": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "Data Intelligence & Automation": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Consumer Apps": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-tech-accent font-medium mb-4">Customers</p>
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Don't take our word for it. See how startups use OneLab's AI solutions to get massive impact
          </p>
          
          {/* Category Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {categoryTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tag
                    ? 'bg-tech-accent text-tech-accent-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeFilter === "All" ? (
            // Show all case studies as individual cards with category tags
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allCaseStudies.map((caseStudy, index) => (
                <Card key={index} className="glass-card hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{caseStudy.logo}</div>
                        <span className="font-medium text-foreground">{caseStudy.company}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[caseStudy.category]}`}>
                          {caseStudy.category}
                        </span>
                      </div>
                      {caseStudy.hasVideo && (
                        <div className="flex items-center space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
                          <Play className="w-5 h-5 text-tech-accent" />
                          <span className="text-xs text-tech-accent font-medium">Demo Video</span>
                        </div>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-space-grotesk mb-3 group-hover:text-tech-accent transition-colors">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button variant="ghost" className="w-full text-tech-accent hover:bg-tech-accent hover:text-tech-accent-foreground group-hover:bg-tech-accent/10 transition-all">
                      Read case study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Show grouped by category for specific filters
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-foreground mb-12 text-center">
                  {category.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.cases.map((caseStudy, index) => (
                    <Card key={index} className="glass-card hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{caseStudy.logo}</div>
                            <span className="font-medium text-foreground">{caseStudy.company}</span>
                          </div>
                          {caseStudy.hasVideo && (
                            <div className="flex items-center space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
                              <Play className="w-5 h-5 text-tech-accent" />
                              <span className="text-xs text-tech-accent font-medium">Demo Video</span>
                            </div>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl font-space-grotesk mb-3 group-hover:text-tech-accent transition-colors">
                          {caseStudy.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {caseStudy.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <Button variant="ghost" className="w-full text-tech-accent hover:bg-tech-accent hover:text-tech-accent-foreground group-hover:bg-tech-accent/10 transition-all">
                          Read case study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;