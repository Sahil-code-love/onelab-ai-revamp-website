import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CompanyEvents = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const memoryImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1721322800607-80022131f5a1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            Company Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments that define our journey together
          </p>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          {/* Main Carousel */}
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {memoryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={image}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      {/* Subtle overlay on hover */}
                      <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      {/* Hover effect ring */}
                      <div className={`absolute inset-0 rounded-3xl ring-4 ring-primary/30 transition-all duration-300 ${
                        hoveredIndex === index ? 'ring-opacity-100 scale-105' : 'ring-opacity-0 scale-100'
                      }`} />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>


          {/* Floating decorative elements */}
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default CompanyEvents;