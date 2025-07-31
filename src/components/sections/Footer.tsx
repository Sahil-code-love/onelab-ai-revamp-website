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
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-space-grotesk font-bold mb-4">
              OneLab Ventures
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              AI-First Product Development Studio. We build intelligent applications, automation workflows, and custom AI agents that actually ship.
            </p>
            
            {/* One last nudge CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <p className="text-sm font-medium mb-2">Got an AI idea or existing app you want to enhance with AI?</p>
              <button className="text-tech-accent font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer">
                Let's talk.
              </button>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@onelabventures.com" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="font-semibold mb-4">Verticals</h3>
            <ul className="space-y-2">
              {verticals.map((vertical, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    {vertical}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversational AI */}
          <div>
            <h3 className="font-semibold mb-4">Conversational AI</h3>
            <ul className="space-y-2">
              {aiSolutions.map((solution, index) => (
                <li key={index}>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="flex items-start text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <p className="leading-relaxed">
                Basement Floor, Pesh Infotech, Plot No 46, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © {currentYear} OneLab Ventures. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="tel:+918827135321" className="flex items-center hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>088271 35321</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;