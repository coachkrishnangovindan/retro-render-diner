import { useState } from "react";
import { Phone, Clock, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.phone.trim()) {
      toast({
        title: "Phone required", 
        description: "Please enter your phone number.",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Simulate form submission (client-side only)
    toast({
      title: "Message sent!",
      description: `Thanks ${formData.name}! We'll get back to you soon.`,
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to order or have questions? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-6 text-primary">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Call to Order</p>
                      <a 
                        href="tel:(206)624-1234" 
                        className="text-lg text-primary hover:underline font-semibold"
                      >
                        (206) 624-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">
                        Open daily 9:00 AM – 5:00 PM<br />
                        <span className="text-destructive font-medium">Closed Tuesdays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Seattle, WA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="card-diner p-6 bg-cream">
                <h4 className="font-heading font-semibold text-lg mb-3 text-primary">
                  Important Notice
                </h4>
                <p className="text-muted-foreground">
                  Parties of 6 or more will be charged 15% gratuity. 
                  We appreciate your understanding and look forward to serving you!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-diner p-8">
              <h3 className="font-heading font-semibold text-2xl mb-6 text-primary">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="(206) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-vertical"
                    placeholder="Tell us about your inquiry, special requests, or feedback..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-hero flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Required fields. This form is for inquiries only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;