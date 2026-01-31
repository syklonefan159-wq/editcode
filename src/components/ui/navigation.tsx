import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Fan, Wind, CircleDot, Cog, Package, AirVent, Disc3 } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/syklone-logo-icon-transparent.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFansOpen, setIsFansOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const fanCategories = [
    { name: "Ceiling Fan", icon: Fan },
    { name: "Pedestal Fan", icon: Wind },
    { name: "Table Fan", icon: Disc3 },
    { name: "Wall Fan", icon: CircleDot },
    { name: "Exhaust Fan", icon: AirVent },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-950 via-black to-gray-950 backdrop-blur-md border-b border-primary/20 z-50 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo - Clean floating icon with NO background */}
          <div className="flex items-center gap-3">
            <img 
              src={logoIcon}
              alt="Syklone Logo" 
              className="block shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              style={{ backgroundColor: "transparent" }}
              draggable={false}
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent drop-shadow-sm tracking-wide leading-none">
                SYKLONE Fans
              </span>
              <span className="mt-1 text-xs md:text-sm text-primary/80 font-medium tracking-wide leading-none">
                Feel the Flow
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-primary transition-all duration-300 font-medium hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-primary transition-all duration-300 font-medium hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]"
            >
              About
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-300 hover:text-primary transition-all duration-300 font-medium flex items-center gap-1 hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-primary/30 z-50">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    <Fan className="mr-2 h-4 w-4" />
                    Fans
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="bg-card border-primary/30 z-50">
                    {fanCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <DropdownMenuItem
                          key={category.name}
                          onClick={() => scrollToSection('products')}
                          className="cursor-pointer flex flex-col items-center gap-1 py-3"
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                          <span className="text-xs">{category.name}</span>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem onClick={() => scrollToSection('products')} className="cursor-pointer">
                  <Cog className="mr-2 h-4 w-4" />
                  Motors
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('products')} className="cursor-pointer">
                  <Package className="mr-2 h-4 w-4" />
                  Others
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => scrollToSection('spare-parts')}
              className="text-gray-300 hover:text-primary transition-all duration-300 font-medium hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]"
            >
              Spare Parts
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-300 hover:text-primary transition-all duration-300 font-medium flex items-center gap-1 hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]">
                Gallery <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-primary/30 z-50">
                <DropdownMenuItem onClick={() => scrollToSection('photo-gallery')} className="cursor-pointer">
                  Photos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('media')} className="cursor-pointer">
                  Videos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-primary transition-all duration-300 font-medium hover:[text-shadow:0_0_20px_hsl(42_50%_54%/0.8),0_0_40px_hsl(42_50%_54%/0.5)]"
            >
              Contact
            </button>
            <Button 
              className="bg-white text-background border-2 border-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-lg mt-2 shadow-2xl border border-primary/20">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
              >
                About
              </button>
              <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium text-left">
                  Products <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-1">
                  <Collapsible open={isFansOpen} onOpenChange={setIsFansOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium text-left">
                      <span className="flex items-center gap-2">
                        <Fan className="h-4 w-4" />
                        Fans
                      </span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isFansOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-6 space-y-2 py-2">
                      {fanCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <button
                            key={category.name}
                            onClick={() => scrollToSection('products')}
                            className="flex flex-col items-center gap-1 px-3 py-2 text-gray-300 hover:text-primary transition-colors w-full"
                          >
                            <IconComponent className="h-5 w-5 text-primary" />
                            <span className="text-xs">{category.name}</span>
                          </button>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
                  >
                    <Cog className="h-4 w-4" />
                    Motors
                  </button>
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
                  >
                    <Package className="h-4 w-4" />
                    Others
                  </button>
                </CollapsibleContent>
              </Collapsible>
              <button 
                onClick={() => scrollToSection('spare-parts')}
                className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Spare Parts
              </button>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium text-left">
                  Gallery <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 space-y-1">
                  <button 
                    onClick={() => scrollToSection('photo-gallery')}
                    className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
                  >
                    Photos
                  </button>
                  <button 
                    onClick={() => scrollToSection('media')}
                    className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
                  >
                    Videos
                  </button>
                </CollapsibleContent>
              </Collapsible>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-300 hover:text-primary transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
              <Button 
                className="bg-white text-background border-2 border-primary hover:bg-primary hover:text-background w-full mt-2 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
