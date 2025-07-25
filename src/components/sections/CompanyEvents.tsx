import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const CompanyEvents = () => {
  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      location: "Tech Hub, Bangalore",
      attendees: "500+",
      description: "Join industry leaders discussing the future of AI in product development.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      featured: true
    },
    {
      title: "Startup Founders Meetup",
      date: "February 28, 2024", 
      location: "OneLab Office, Mumbai",
      attendees: "150+",
      description: "Networking event for startup founders and tech entrepreneurs.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      featured: false
    },
    {
      title: "Product Design Workshop",
      date: "January 20, 2024",
      location: "Design Studio, Delhi",
      attendees: "75+",
      description: "Hands-on workshop on designing AI-powered user experiences.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      featured: false
    },
    {
      title: "Tech Talk: Machine Learning",
      date: "December 10, 2023",
      location: "Virtual Event",
      attendees: "1000+",
      description: "Deep dive into practical machine learning applications.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      featured: false
    }
  ];

  const featuredEvent = events.find(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Company Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community events, workshops, and meetups to connect with industry leaders and innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Event - Takes 2 columns */}
          {featuredEvent && (
            <Card className="lg:col-span-2 glass-card group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
              <div className="relative h-80 lg:h-96">
                <img 
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Event
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-space-grotesk font-bold mb-4">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-white/90 mb-6 text-lg">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{featuredEvent.attendees} attendees</span>
                    </div>
                  </div>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Regular Events - Stacked in 1 column */}
          <div className="space-y-6">
            {regularEvents.map((event, index) => (
              <Card key={index} className="glass-card group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 flex-1">
                    <h4 className="font-space-grotesk font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompanyEvents;