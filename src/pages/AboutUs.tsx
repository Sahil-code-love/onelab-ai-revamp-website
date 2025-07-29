import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Code,
  Brain,
  Zap,
  ArrowRight
} from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rahul Dangi",
      role: "Co-Founder and CEO",
      experience: "8 yrs exp. in software dev. | Ex-Talentica Software | B.Tech, IIT Delhi",
      image: "/placeholder.svg"
    },
    {
      name: "Neha Singh", 
      role: "Co-Founder and COO",
      experience: "5 yrs exp. in design & product management | M.Tech, IIT Roorkee",
      image: "/placeholder.svg"
    },
    {
      name: "Vidur Sharma",
      role: "Advisor - Product",
      experience: "Associate Managing Consultant at MasterCard | MBA, IIM Ahmedabad | B.Tech, IIT Delhi",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "3", label: "Years of Operations", description: "3 successful years with great products", icon: Target },
    { number: "100+", label: "Products", description: "Web and mobile apps, ML solutions", icon: Code },
    { number: "15+", label: "Tech Stack", description: "Various tech stack and different projects", icon: Zap },
    { number: "100+", label: "Team Members", description: "Carefully chosen, Expertly trained team", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-tech-accent/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>HOME</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-primary">ABOUT US</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions with cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">We are</Badge>
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground mb-6 leading-tight">
                  Leaders in AI-Powered
                  <span className="text-primary block">Software Development</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With 2020, the number of traditional IT agencies working in the waterfall model 
                  which didn't align well with I can start startups. Entrepreneurs faced challenges 
                  with outsourced work such as lack of transparency, inflexibility, and inadequate 
                  product management.
                </p>
                
                <p>
                  To address these issues, Onelab was founded, committed to Agile methodology, 
                  clean coding, and streamlined product development. From a team of 2 ITians, 
                  we have grown to a dynamic group of 100 members revolutionizing product development.
                </p>
                
                <p>
                  As the best custom software development company in India, today we have a track 
                  record of building 100+ tech products for startups.
                </p>
              </div>
              
              <Button className="mt-6">
                CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team collaboration" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-space-grotesk font-bold text-foreground mb-2">
                    The team is cooperative and professional.
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    They were able to deliver the project successfully.
                  </p>
                  <p className="text-xs text-primary mt-2 font-medium">
                    HARSHITA KEJRIWAL
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-tech-accent/5 border-tech-accent/20 mt-8">
                <CardContent className="p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Analytics dashboard" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-tech-accent" />
                    <span className="text-sm font-medium text-foreground">AI-Powered Analytics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground">
              Core Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">in</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Thriving</Badge>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground">
              Our Growth Journey
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-space-grotesk font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <h4 className="text-lg font-medium text-foreground mb-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-12 opacity-60 grayscale hover:opacity-80 transition-opacity">
            <img src="/placeholder.svg" alt="Client 1" className="h-8" />
            <img src="/placeholder.svg" alt="Client 2" className="h-8" />
            <img src="/placeholder.svg" alt="Client 3" className="h-8" />
            <img src="/placeholder.svg" alt="Client 4" className="h-8" />
            <img src="/placeholder.svg" alt="Client 5" className="h-8" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-tech-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Book a free consultation
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to take your business to the next level? Get a personalized quote 
            tailored to your specific needs and goals.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;