import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openYouTube = () => {
    window.open('https://www.youtube.com/@SYKLONEFAN/shorts', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/syklone_fans/', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=61572975796734', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-black to-gray-950 border-t border-primary/20 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/syklone-logo-icon.png" 
                alt="Syklone Logo" 
                className="object-contain drop-shadow-[0_0_8px_hsl(42_50%_54%/0.4)]"
                style={{ width: '10rem', height: 'auto', background: 'transparent' }}
              />
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">SYKLONE Fans</div>
                <div className="text-sm text-primary-light/90 font-medium italic">Feel the Flow</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Powering comfort and cooling every corner with quality fans trusted by homes, offices, and industries across India.
            </p>
            {/* Brand Info Badges */}
            <div className="space-y-2 mb-6 text-sm">
              <p className="text-primary font-medium">✓ Manufacturing Since 2004</p>
              <p className="text-primary font-medium">✓ 1 Year Warranty</p>
              <p className="text-primary font-medium">✓ 100% Direct Manufacturing</p>
            </div>
            {/* Social icons - white with gold border */}
            <div className="flex space-x-3">
              <button 
                onClick={openYouTube}
                className="w-10 h-10 bg-transparent border-2 border-primary hover:bg-white hover:text-background rounded-full flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-background" />
              </button>
              <button 
                onClick={openInstagram}
                className="w-10 h-10 bg-transparent border-2 border-primary hover:bg-white hover:text-background rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-background" />
              </button>
              <button 
                onClick={openFacebook}
                className="w-10 h-10 bg-transparent border-2 border-primary hover:bg-white hover:text-background rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-background" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('spare-parts')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Spare Parts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('media')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300 text-sm">Table Fans</span></li>
              <li><span className="text-gray-300 text-sm">Pedestal Fans</span></li>
              <li><span className="text-gray-300 text-sm">Wall Fans</span></li>
              <li><span className="text-gray-300 text-sm">Exhaust Fans</span></li>
              <li><span className="text-gray-300 text-sm">Foldable Fans</span></li>
              <li><span className="text-gray-300 text-sm">Spare Parts</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+917985234708" className="text-gray-300 hover:text-primary transition-colors block">
                    +91 79852 34708
                  </a>
                  <a href="tel:+919454558355" className="text-gray-300 hover:text-primary transition-colors block">
                    +91 94545 58355
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:syklonefan159@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors text-sm break-all"
                >
                  syklonefan159@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sa 1/164-11a-5, Prem Chand Nagar Colony,<br />
                  Pandeypur, Varanasi – 221002,<br />
                  Uttar Pradesh, India
                </p>
              </div>
              
              {/* Website */}
              <div className="flex items-center space-x-3 pt-2">
                <span className="text-primary text-sm">🌐</span>
                <a 
                  href="https://syklonefan.shop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors text-sm font-medium"
                >
                  syklonefan.shop
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © 2026 SYKLONE Fans. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              onClick={scrollToTop}
              className="bg-transparent border-2 border-primary text-white hover:bg-white hover:text-background transition-colors font-semibold"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
