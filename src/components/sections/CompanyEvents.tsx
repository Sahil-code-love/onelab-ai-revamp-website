import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CompanyEvents = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const events = [
    {
      title: "AI Agents Hackathon",
      description: "48-hour innovation sprint where our team built groundbreaking AI solutions. From ideation to implementation, witnessing brilliant minds collaborate and create the future of artificial intelligence.",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
      ],
      date: "March 2024",
      highlight: "Innovation & Creativity"
    },
    {
      title: "All Hands Meeting (Townhall)", 
      description: "Our quarterly gathering bringing the entire team together. Sharing achievements, aligning on vision, and celebrating the milestones that define our journey towards AI excellence.",
      images: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop"
      ],
      date: "February 2024",
      highlight: "Team Unity & Vision"
    },
    {
      title: "Tech Innovation Summit",
      description: "Diving deep into the latest AI technologies and methodologies. A day of learning, sharing knowledge, and exploring the cutting-edge developments shaping our industry.",
      images: [
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
      ],
      date: "January 2024",
      highlight: "Knowledge & Growth"
    },
    {
      title: "Product Milestone Celebration",
      description: "Commemorating the successful launch of our latest AI product. A moment of pride as we celebrated the culmination of months of hard work and dedication.",
      images: [
        "https://images.unsplash.com/photo-1721322800607-80022131f5a1?w=800&h=600&fit=crop"
      ],
      date: "December 2023",
      highlight: "Achievement & Success"
    }
  ];

  // Flatten all images for the carousel
  const allImages = events.flatMap((event, eventIndex) => 
    event.images.map((image, imageIndex) => ({
      image,
      event,
      eventIndex,
      imageIndex
    }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [events.length]);

  const currentEvent = events[currentEventIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Our Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the moments that define our journey - from innovation sprints to team celebrations
          </p>
        </div>

        {/* Main Memory Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Auto-scrolling Images - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {allImages.map((item, index) => (
                    <CarouselItem key={index} className="pl-2">
                      <div className="relative group">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={item.image}
                            alt={item.event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Date Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                              <span className="text-white font-medium text-sm">
                                {item.event.date}
                              </span>
                            </div>
                          </div>
                          
                          {/* Title Overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white font-space-grotesk font-bold text-xl mb-2">
                              {item.event.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-0.5 bg-primary" />
                              <span className="text-white/90 text-sm font-medium">
                                {item.event.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {events.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentEventIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Event Details - Right Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  {/* Current Event Title */}
                  <div>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Featured Memory
                    </div>
                    <h3 className="text-3xl font-space-grotesk font-bold text-foreground mb-3">
                      {currentEvent.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-6">
                      <span className="text-lg font-medium">{currentEvent.date}</span>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span className="text-sm">{currentEvent.highlight}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentEvent.description}
                  </p>

                  {/* Highlight Section */}
                  <div className="bg-muted/30 rounded-2xl p-6 border-l-4 border-primary">
                    <h4 className="font-space-grotesk font-bold text-foreground mb-2">
                      Memory Highlight
                    </h4>
                    <p className="text-muted-foreground">
                      {currentEvent.highlight} - {currentEvent.description.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyEvents;