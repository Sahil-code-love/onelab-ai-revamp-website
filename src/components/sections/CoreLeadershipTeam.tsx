import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

const CoreLeadershipTeam = () => {
  const leaders = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "15+ years building AI-first products. Former VP Engineering at TechCorp.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder", 
      bio: "ML PhD from Stanford. Led AI initiatives at Fortune 500 companies.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Rodriguez",
      role: "Head of Product",
      bio: "Product strategist with 12+ years scaling tech products globally.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Zhang",
      role: "Head of Design",
      bio: "Design leader passionate about human-centered AI experiences.",
      image: "/lovable-uploads/f27552c6-b623-42b0-a251-8da00dce19f1.png",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Core Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries driving AI innovation and building the future of intelligent products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="glass-card group hover:shadow-strong transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-bold text-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href={leader.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href={leader.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreLeadershipTeam;