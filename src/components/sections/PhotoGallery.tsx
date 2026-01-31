import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ZoomIn } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

const PhotoGallery = () => {
  const photos = [
    {
      src: "/gallery/syklone-pedestal-fan-black.jpg",
      title: "SYKLONE Pedestal Fan",
      description: "Black pedestal fan with superior airflow"
    },
    {
      src: "/gallery/blue-pedestal-fan.jpg",
      title: "Blue Pedestal Fan",
      description: "Stylish blue design with powerful performance"
    },
    {
      src: "/gallery/black-white-pedestal-fan.jpg",
      title: "Classic Pedestal Fan",
      description: "Elegant black and white design"
    },
    {
      src: "/gallery/white-blue-table-fan.jpg", 
      title: "Table Fan - Blue Edition",
      description: "Compact table fan with vibrant blue blades"
    },
    {
      src: "/gallery/white-brown-table-fan.jpg",
      title: "Table Fan - Brown Edition",
      description: "Stylish table fan with brown blade accents"
    },
    {
      src: "/gallery/mini-storm-table-fan.jpg",
      title: "Mini Storm Table Fan",
      description: "Compact and powerful for personal use"
    },
    {
      src: "/gallery/white-spiral-fan.jpg",
      title: "Spiral Design Fan", 
      description: "Innovative spiral blade technology"
    },
    {
      src: "/gallery/fan-motor-component.jpg",
      title: "Fan Motor Component",
      description: "High-quality motor assembly"
    },
    {
      src: manufacturingImage,
      title: "Manufacturing Facility", 
      description: "Our state-of-the-art production unit"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Product{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our range of SYKLONE fans designed for durability, performance, and everyday reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-primary/30 bg-card">
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden">
                  {/* Image container with proper contain fit */}
                  <div className="w-full h-80 flex items-center justify-center p-4 bg-gradient-to-b from-muted/20 to-muted/40">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{photo.description}</p>
                    <Button 
                      size="sm"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-background transition-colors font-semibold"
                    >
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="bg-card rounded-2xl p-8 text-center border border-primary/30">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-foreground font-semibold">Product Models</div>
              <div className="text-muted-foreground text-sm">Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground font-semibold">Quality Tested</div>
              <div className="text-muted-foreground text-sm">Before Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-foreground font-semibold">Happy Customers</div>
              <div className="text-muted-foreground text-sm">Since 2004</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
