import { Card, CardContent } from "@/components/ui/card";

const CompanyEvents = () => {
  const events = [
    {
      title: "AI Hackathon 2024",
      description: "48-hour innovation sprint building AI solutions",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      category: "Innovation"
    },
    {
      title: "All Hands Meeting Q1", 
      description: "Quarterly team gathering and strategy alignment",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      category: "Team Building"
    },
    {
      title: "Tech Talk Series",
      description: "Weekly knowledge sharing sessions",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      category: "Learning"
    },
    {
      title: "Product Launch Event",
      description: "Celebrating our latest AI product release",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      category: "Product"
    },
    {
      title: "Team Offsite Retreat",
      description: "Annual team building and planning retreat",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      category: "Culture"
    },
    {
      title: "Innovation Workshop",
      description: "Collaborative brainstorming and ideation sessions",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      category: "Innovation"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Company Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moments from our journey - capturing the innovation, collaboration, and culture that drives us forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="glass-card group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyEvents;