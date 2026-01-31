import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const products = [
    {
      name: "SYKLONE BREEZE PRO",
      tagline: "Close-range. Powerful. Silent.",
      image: "/products/syklone-breeze-pro.jpg",
      category: "Table Fan"
    },
    {
      name: "SYKLONE TORNADO MAX",
      tagline: "Height-adjustable. Heavy airflow.",
      image: "/products/syklone-tornado-max.jpg",
      category: "Pedestal Fan"
    },
    {
      name: "SYKLONE AIR BLAST",
      tagline: "Power that covers every corner.",
      image: "/products/syklone-air-blast.jpg",
      category: "Wall Fan"
    },
    {
      name: "SYKLONE FRESH AIR",
      tagline: "Remove heat. Bring freshness.",
      image: "/products/syklone-fresh-air.jpg",
      category: "Exhaust Fan"
    },
    {
      name: "SYKLONE FLEXI FLOW",
      tagline: "Flexible cooling. Anywhere.",
      image: "/products/syklone-flexi-flow.jpg",
      category: "Foldable Fan"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="product-carousel" className="py-16 bg-gradient-to-b from-card via-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Featured Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide */}
          <Card className="overflow-hidden border border-primary/30 bg-card">
            <CardContent className="p-0">
              <div className="relative">
                {/* Image with smooth transition */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-b from-muted/20 to-muted/40 overflow-hidden">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ease-in-out ${
                        index === currentIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <Badge className="mb-2 bg-primary text-primary-foreground border-0">
                    {products[currentIndex].category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-primary font-medium italic">
                    {products[currentIndex].tagline}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    High Air Throw • Low Noise • Long Life
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 border-primary/50 hover:bg-primary hover:text-background rounded-full z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 border-primary/50 hover:bg-primary hover:text-background rounded-full z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
