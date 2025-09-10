import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="gradient-warm min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo & Tagline */}
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 text-shadow-sm">
              Market Diner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Classic comfort. Fresh flavors.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => scrollToSection('menu')}
              className="btn-hero text-lg px-8 py-4"
            >
              View Menu
            </button>
            <a
              href="tel:(206)624-1234"
              className="btn-outline-diner text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call to Order
            </a>
          </div>

          {/* Hours & Info Card */}
          <div className="card-diner max-w-2xl mx-auto p-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">Hours</h3>
                <p className="text-muted-foreground">
                  Open daily 9:00 AM – 5:00 PM<br />
                  <span className="text-destructive font-medium">Closed on Tuesdays</span>
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-primary">Contact</h3>
                <p className="text-muted-foreground">
                  <a href="tel:(206)624-1234" className="hover:text-primary transition-colors">
                    (206) 624-1234
                  </a>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  *Parties of 6+ will be charged 15% gratuity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;