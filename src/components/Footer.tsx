import { Facebook, Twitter, Instagram, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">Market Diner</h3>
            <p className="text-background/80 mb-4">
              Classic comfort food with fresh flavors, served daily with warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:(206)624-1234" className="hover:text-background transition-colors">
                  (206) 624-1234
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <p>9:00 AM – 5:00 PM</p>
                  <p className="text-red-300">Closed Tuesdays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Menu</h4>
            <nav className="space-y-2 text-background/80">
              <p className="hover:text-background transition-colors cursor-pointer">Appetizers</p>
              <p className="hover:text-background transition-colors cursor-pointer">Breakfast</p>
              <p className="hover:text-background transition-colors cursor-pointer">Lunch</p>
              <p className="hover:text-background transition-colors cursor-pointer">Seafood</p>
              <p className="hover:text-background transition-colors cursor-pointer">Drinks</p>
            </nav>
          </div>
        </div>

        <hr className="my-8 border-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-background/80 text-sm">
          <p>© {currentYear} Market Diner. All rights reserved.</p>
          <p>Parties of 6+ will be charged 15% gratuity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;