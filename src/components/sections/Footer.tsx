import { MessageCircle, Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const verticals = [
    "Digital Health & MedTech",
    "Banking & Finance", 
    "Data Intelligence & Automation",
    "Consumer Apps",
    "Sales Automation Agents"
  ];

  const aiSolutions = [
    "Calling Agent",
    "Email Automation", 
    "WhatsApp Automation",
    "AI Chatbot"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="text-xl font-space-grotesk font-bold mb-3">
              OneLab Ventures
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md text-sm leading-relaxed">
              AI-First Product Development Studio. We build intelligent applications, automation workflows, and custom AI agents that actually ship.
            </p>
            
            {/* Location */}
            <div className="flex items-start text-primary-foreground/60 mb-4">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-xs leading-tight">
                Basement Floor, Pesh Infotech, Plot No 46, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057
              </span>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:hello@onelabventures.com" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="font-medium mb-3 text-sm">Verticals</h3>
            <ul className="space-y-1.5">
              {verticals.map((vertical, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                    {vertical}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side content */}
          <div className="space-y-6">
            {/* Conversational AI */}
            <div>
              <h3 className="font-medium mb-3 text-sm">Conversational AI</h3>
              <ul className="space-y-1.5">
                {aiSolutions.map((solution, index) => (
                  <li key={index}>
                    <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                      {solution}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-medium mb-3 text-sm">Company</h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="/case-studies" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors text-xs">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* One last nudge CTA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-md p-3 border border-white/10">
              <p className="text-xs font-medium mb-2 text-primary-foreground/80">Got an AI idea or existing app you want to enhance with AI?</p>
              <button className="text-tech-accent font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer text-xs">
                Let's talk.
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-xs mb-2 md:mb-0">
            © {currentYear} OneLab Ventures. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
            <a href="/privacy" className="hover:text-primary-foreground/90 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-foreground/90 transition-colors">
              Terms of Service
            </a>
            <a href="tel:08827135321" className="flex items-center hover:text-primary-foreground/90 transition-colors cursor-pointer">
              <Phone className="w-3 h-3 mr-1" />
              <span>088271 35321</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;