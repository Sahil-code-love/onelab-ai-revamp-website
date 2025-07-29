import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const verticals = [
    { name: "Digital Health & MedTech", href: "/verticals/digital-health" },
    { name: "Banking & Finance", href: "/verticals/banking-finance" },
    { name: "Data Intelligence & Automation", href: "/verticals/data-intelligence" },
    { name: "Consumer Apps", href: "/verticals/consumer-apps" },
    { name: "Sales Automation Agents", href: "/verticals/sales-automation" }
  ];

  const aiSolutions = [
    { name: "Calling Agent", href: "/ai-solutions/calling-agent" },
    { name: "Email Automation", href: "/ai-solutions/email-automation" },
    { name: "WhatsApp Automation", href: "/ai-solutions/whatsapp-automation" },
    { name: "AI Chatbot", href: "/ai-solutions/chatbot" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="8" width="24" height="4" rx="2" fill="#2dd4bf"/>
                <rect x="20" y="0" width="4" height="32" rx="2" fill="#000000"/>
                <text x="32" y="22" fill="#2dd4bf" fontSize="16" fontWeight="600" fontFamily="system-ui">one</text>
                <text x="60" y="22" fill="#000000" fontSize="16" fontWeight="600" fontFamily="system-ui">lab</text>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-foreground hover:text-tech-accent transition-colors font-medium">
                Home
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-tech-accent transition-colors font-medium">
                  Verticals
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-popover border-border shadow-medium">
                  {verticals.map((vertical) => (
                    <DropdownMenuItem key={vertical.name} asChild>
                      <a href={vertical.href} className="w-full hover:bg-accent hover:text-accent-foreground">
                        {vertical.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

               <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-tech-accent transition-colors font-medium">
                  Conversational AI
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border-border shadow-medium">
                  {aiSolutions.map((solution) => (
                    <DropdownMenuItem key={solution.name} asChild>
                      <a href={solution.href} className="w-full hover:bg-accent hover:text-accent-foreground">
                        {solution.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="/case-studies" className="text-foreground hover:text-tech-accent transition-colors font-medium">
                Case Studies
              </a>
              <a href="/about" className="text-foreground hover:text-tech-accent transition-colors font-medium">
                About Us
              </a>
              <a href="/careers" className="text-foreground hover:text-tech-accent transition-colors font-medium">
                Careers
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-tech">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border bg-white">
              <a href="/" className="block px-3 py-2 text-foreground hover:text-tech-accent transition-colors font-medium">
                Home
              </a>
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Verticals</p>
                {verticals.map((vertical) => (
                  <a key={vertical.name} href={vertical.href} className="block px-3 py-1 text-sm text-foreground hover:text-tech-accent transition-colors">
                    {vertical.name}
                  </a>
                ))}
              </div>
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Conversational AI</p>
                {aiSolutions.map((solution) => (
                  <a key={solution.name} href={solution.href} className="block px-3 py-1 text-sm text-foreground hover:text-tech-accent transition-colors">
                    {solution.name}
                  </a>
                ))}
              </div>
              <a href="/case-studies" className="block px-3 py-2 text-foreground hover:text-tech-accent transition-colors font-medium">
                Case Studies
              </a>
              <a href="/about" className="block px-3 py-2 text-foreground hover:text-tech-accent transition-colors font-medium">
                About Us
              </a>
              <a href="/careers" className="block px-3 py-2 text-foreground hover:text-tech-accent transition-colors font-medium">
                Careers
              </a>
              <div className="px-3 py-2">
                <Button className="w-full btn-tech">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;