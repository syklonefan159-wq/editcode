import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import chatbotMascot from "@/assets/chatbot-mascot.png";

const Hero = () => {
  const [chatbotPosition, setChatbotPosition] = useState({ x: 0, y: 0 });
  const chatbotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!chatbotRef.current) return;

      const rect = chatbotRef.current.getBoundingClientRect();
      const chatbotCenterX = rect.left + rect.width / 2;
      const chatbotCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - chatbotCenterX, 2) + 
        Math.pow(e.clientY - chatbotCenterY, 2)
      );

      // If cursor is within 150px of chatbot, move it away
      if (distance < 150) {
        const angle = Math.atan2(chatbotCenterY - e.clientY, chatbotCenterX - e.clientX);
        const moveDistance = 100;
        
        setChatbotPosition(prev => ({
          x: prev.x + Math.cos(angle) * moveDistance,
          y: prev.y + Math.sin(angle) * moveDistance
        }));
      } else {
        // Return to original position when cursor is far away
        setChatbotPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openYouTube = () => {
    window.open('https://www.youtube.com/@syklonefan', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/syklone_fan', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/syklonefan', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Rotating Fan - Enhanced Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        {/* Radial Glow Behind Fan */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-radial from-primary/25 via-primary/10 to-transparent blur-3xl"></div>
        </div>
        
        {/* Rotating Fan Animation with Gold highlights - 20% opacity */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            {/* Fan Blades */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full animate-[spin_12s_linear_infinite] drop-shadow-[0_0_30px_hsl(42_60%_50%/0.4)]"
            >
              {/* Center hub with glow */}
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(42 60% 60%)" stopOpacity="1"/>
                  <stop offset="70%" stopColor="hsl(42 50% 45%)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="hsl(42 40% 35%)" stopOpacity="0.6"/>
                </radialGradient>
                <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(42 70% 60%)" stopOpacity="0.9"/>
                  <stop offset="50%" stopColor="hsl(42 55% 50%)" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="hsl(42 45% 40%)" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              
              <circle cx="100" cy="100" r="18" fill="url(#hubGlow)" />
              <circle cx="100" cy="100" r="8" fill="hsl(42 70% 65%)" opacity="0.9" />
              
              {/* Fan blades with gradient and sharper edges */}
              <g fill="url(#bladeGradient)" stroke="hsl(42 60% 55%)" strokeWidth="0.5" opacity="0.85">
                <path d="M100,82 Q135,50 100,15 Q65,50 100,82 Z" />
                <path d="M118,100 Q150,135 185,100 Q150,65 118,100 Z" />
                <path d="M100,118 Q65,150 100,185 Q135,150 100,118 Z" />
                <path d="M82,100 Q50,65 15,100 Q50,135 82,100 Z" />
              </g>
              
              {/* Outer ring with warm highlight */}
              <circle cx="100" cy="100" r="95" fill="none" stroke="hsl(42 55% 55%)" strokeWidth="1.5" opacity="0.35" />
              <circle cx="100" cy="100" r="92" fill="none" stroke="hsl(42 60% 60%)" strokeWidth="0.5" opacity="0.25" />
            </svg>
          </div>
        </div>
        
        {/* Gold glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg animate-fade-in">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                SYKLONE Fans
              </span>
            </h2>
            
            {/* Trust Line */}
            <p className="text-primary font-semibold text-lg md:text-xl mb-4 animate-fade-in" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
              ✦ Trusted by Homes, Shops & Industries Across India ✦
            </p>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4 drop-shadow-md animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Where Comfort Meets Innovation
            </h3>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md mb-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              Experience powerful and reliable airflow with <span className="text-primary font-semibold">SYKLONE Fans</span>, engineered for Indian homes, shops, and industries. Our fans are built with strong motors, durable metal bodies, and aerodynamic blades to deliver high air throw with low noise.
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              Whether it's a hot summer afternoon or a long working day, SYKLONE fans ensure consistent cooling, energy efficiency, and long-lasting performance — built to serve you for years.
            </p>
          </div>

          {/* CTA Buttons - Premium Gold Style */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button 
              size="lg"
              className="bg-white text-background border-2 border-primary hover:bg-primary hover:text-background hover:shadow-[0_0_20px_hsl(42_50%_54%/0.5)] transition-all duration-300 text-lg px-8 py-6 font-semibold"
              onClick={scrollToProducts}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              className="bg-white text-background border-2 border-primary hover:bg-primary hover:text-background hover:shadow-[0_0_20px_hsl(42_50%_54%/0.5)] transition-all duration-300 text-lg px-8 py-6 font-semibold"
              onClick={scrollToContact}
            >
              Get Quote
            </Button>
          </div>
          
          {/* Micro-text under button */}
          <p className="text-sm text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            Quick Response • Best Price • Factory Direct
          </p>

          {/* Key Features - Gold themed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card border border-primary/30">
              <div className="text-primary font-bold text-2xl mb-2">1 Year</div>
              <div className="text-foreground font-semibold">Warranty</div>
              <div className="text-muted-foreground text-sm">On all products</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card border border-primary/30">
              <div className="text-primary font-bold text-2xl mb-2">20+</div>
              <div className="text-foreground font-semibold">Years Experience</div>
              <div className="text-muted-foreground text-sm">Since 2004</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-card border border-primary/30">
              <div className="text-primary font-bold text-2xl mb-2">100%</div>
              <div className="text-foreground font-semibold">Direct Manufacturing</div>
              <div className="text-muted-foreground text-sm">No middleman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Gold outline with glow on hover */}
      <div className="absolute top-40 right-8 hidden lg:flex flex-col space-y-4">
        <div className="relative group">
          <button onClick={openInstagram} className="w-12 h-12 bg-transparent border-2 border-primary hover:bg-primary hover:shadow-[0_0_20px_hsl(42_50%_54%/0.6)] transition-all duration-300 rounded-full flex items-center justify-center group">
            <span className="text-white group-hover:text-background font-semibold">IG</span>
          </button>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-1 rounded text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/30">Instagram</span>
        </div>
        <div className="relative group">
          <button onClick={openFacebook} className="w-12 h-12 bg-transparent border-2 border-primary hover:bg-primary hover:shadow-[0_0_20px_hsl(42_50%_54%/0.6)] transition-all duration-300 rounded-full flex items-center justify-center group">
            <span className="text-white group-hover:text-background font-semibold">FB</span>
          </button>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-1 rounded text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/30">Facebook</span>
        </div>
        <div className="relative group">
          <button onClick={openYouTube} className="w-12 h-12 bg-transparent border-2 border-primary hover:bg-primary hover:shadow-[0_0_20px_hsl(42_50%_54%/0.6)] transition-all duration-300 rounded-full flex items-center justify-center group">
            <span className="text-white group-hover:text-background font-semibold">YT</span>
          </button>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-1 rounded text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/30">YouTube</span>
        </div>
      </div>

      {/* Cute Chatbot Mascot */}
      <div 
        ref={chatbotRef}
        className="absolute bottom-20 right-12 hidden lg:block animate-fade-in transition-all duration-500 ease-out cursor-pointer" 
        style={{ 
          animationDelay: '1.2s', 
          animationFillMode: 'both',
          transform: `translate(${chatbotPosition.x}px, ${chatbotPosition.y}px)`
        }}
      >
        <div className="relative">
          {/* Speech Bubble */}
          <div className="absolute bottom-full right-0 mb-4 bg-card rounded-2xl px-6 py-4 shadow-premium border border-primary/30 animate-[bounce_2s_ease-in-out_infinite]">
            <p className="text-foreground font-medium whitespace-nowrap text-sm">
              Thank you! for your valuable time. 👋
            </p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-primary/30 transform rotate-45"></div>
          </div>
          
          {/* Chatbot Character - Sticker Style */}
          <div className="relative animate-[float_3s_ease-in-out_infinite]">
            <img 
              src={chatbotMascot} 
              alt="SYKLONE Chatbot" 
              className="w-32 h-32 drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] brightness-105"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(42 50% 54% / 0.4))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
