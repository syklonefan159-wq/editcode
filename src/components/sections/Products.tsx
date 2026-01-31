import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductDetailsDialog } from "@/components/ui/product-details-dialog";
import { Wind, Zap, Shield, Star, Check } from "lucide-react";

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: "SYKLONE BREEZE PRO",
      tagline: "Close-range. Powerful. Silent.",
      description: "SYKLONE Breeze Pro is designed for close-range cooling with powerful air throw and smooth, silent operation. Ideal for homes, offices, desks, and workstations where efficient personal cooling is required.",
      image: "/products/syklone-breeze-pro.jpg",
      highlights: ["Heavy-duty metal body", "High-speed motor", "Low noise performance", "Long-lasting durability"],
      category: "Table Fan",
      price: "Contact for Price",
      specifications: {
        power: "45W",
        speed: "2400 RPM",
        sweep: "300mm",
        body: "Metal Body",
        oscillation: "Uniform Oscillation"
      }
    },
    {
      name: "SYKLONE AIR BLAST",
      tagline: "Power that covers every corner.",
      description: "Built for wide-area cooling, SYKLONE Air Blast delivers strong and consistent airflow with a stable wall-mounted design. Perfect for shops, halls, showrooms, and commercial spaces.",
      image: "/products/syklone-air-blast.jpg",
      highlights: ["Wide air spread", "Strong metal blades", "Stable wall mounting", "Continuous performance"],
      category: "Wall Fan",
      price: "Contact for Price",
      specifications: {
        power: "80W",
        speed: "2400 RPM",
        sweep: "400mm",
        body: "Metal Body",
        oscillation: "Wide Oscillation"
      }
    },
    {
      name: "SYKLONE TORNADO MAX",
      tagline: "Height-adjustable. Heavy airflow.",
      description: "SYKLONE Tornado Max offers adjustable height and powerful cooling performance. Designed for both residential and industrial environments, it delivers high air throw with excellent stability.",
      image: "/products/syklone-tornado-max.jpg",
      highlights: ["Adjustable height", "Powerful air delivery", "Heavy base for stability", "Energy-efficient motor"],
      category: "Pedestal Fan",
      price: "Contact for Price",
      specifications: {
        power: "75W",
        speed: "2500 RPM",
        sweep: "450mm",
        body: "Metal Body",
        oscillation: "Wide Oscillation"
      }
    },
    {
      name: "SYKLONE FRESH AIR",
      tagline: "Remove heat. Bring freshness.",
      description: "SYKLONE Fresh Air exhaust fan ensures proper ventilation by efficiently removing hot air, smoke, and unwanted odors, helping maintain a fresh and comfortable environment.",
      image: "/products/syklone-fresh-air.jpg",
      highlights: ["High suction capacity", "Durable metal frame", "Easy installation", "Low maintenance"],
      category: "Exhaust Fan",
      price: "Contact for Price",
      specifications: {
        power: "40W",
        speed: "1800 RPM",
        sweep: "225mm",
        body: "Metal Body",
        oscillation: "No"
      }
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our complete range of high-quality fans designed for every need - 
            from homes to offices to industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-primary/30 bg-card">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-muted/40">
                  {/* Image container with generous padding - no cropping */}
                  <div className="w-full h-96 flex items-center justify-center p-10">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                  <Badge 
                    className="absolute top-4 left-4 bg-primary text-primary-foreground border-0"
                  >
                    {product.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary font-semibold italic text-lg">{product.tagline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {/* Short product line */}
                <p className="text-primary text-sm font-medium mb-3">
                  High Air Throw • Low Noise • Long Life
                </p>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Wind className="w-4 h-4 mr-2 text-primary" />
                    Highlights:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-bold text-primary">
                      {product.price}
                    </div>
                  </div>
                  <ProductDetailsDialog
                    product={{...product, features: product.highlights}}
                    trigger={
                      <Button 
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-background hover:shadow-[0_0_15px_hsl(42_50%_54%/0.4)] transition-all duration-300 font-semibold"
                      >
                        View Details
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            SYKLONE Fans vs Others
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/30 rounded-xl p-6 border-2 border-primary">
              <h4 className="text-xl font-bold text-primary mb-4 text-center">SYKLONE Fans</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Affordable price
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Bearing based motor
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Easy to assemble
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Longer lifespan
                </li>
                <li className="flex items-center text-foreground">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  Better airflow
                </li>
              </ul>
            </div>
            <div className="bg-muted/20 rounded-xl p-6">
              <h4 className="text-xl font-bold text-muted-foreground mb-4 text-center">Other Fans</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">✗</span>
                  Higher price
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">✗</span>
                  Bush based motor
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">✗</span>
                  Difficult to assemble
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">✗</span>
                  Short lifespan
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="w-5 h-5 mr-3 flex items-center justify-center">✗</span>
                  Low airflow
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Highlights */}
        <div className="bg-card rounded-2xl p-8 text-center border border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            All Fans Come With Our Promise
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">1-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Energy Efficient</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Bulk Orders Available</span>
            </div>
          </div>
          <Button 
            size="lg"
            className="bg-white text-background border-2 border-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
            onClick={scrollToContact}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
