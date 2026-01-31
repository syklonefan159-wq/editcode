import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Wrench, Cog, Shield } from "lucide-react";

const SpareParts = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetQuote = (partName: string) => {
    // Pre-fill contact form with spare part inquiry
    const subject = `Quote Request for ${partName}`;
    const body = `I am interested in getting a quote for ${partName}. Please provide pricing and availability details.`;
    window.open(`mailto:syklonefan159@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  const handleBulkQuote = () => {
    const subject = 'Bulk Spare Parts Quote Request';
    const body = 'I am interested in bulk purchasing spare parts. Please provide wholesale pricing and terms.';
    window.open(`mailto:syklonefan159@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  const handleDownloadCatalog = () => {
    // For now, we'll redirect to contact - later can be replaced with actual catalog download
    const subject = 'Spare Parts Catalog Request';
    const body = 'Please send me the complete spare parts catalog with pricing.';
    window.open(`mailto:syklonefan159@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };
  const spareParts = [
    {
      name: "Fan Canopy",
      description: "Premium quality canopy (piche ka cover) for all fan models",
      icon: Settings,
      availability: "In Stock"
    },
    {
      name: "Fan Motors", 
      description: "High-performance motors available separately for replacements",
      icon: Cog,
      availability: "Available"
    },
    {
      name: "Back Cap",
      description: "Durable back cap (motor ke piche ka cover) for motor protection",
      icon: Shield,
      availability: "In Stock"
    },
    {
      name: "Fan Jali",
      description: "Safety grills in various sizes for complete protection",
      icon: Wrench,
      availability: "Bulk Available"
    }
  ];

  return (
    <section id="spare-parts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Spare Parts & Accessories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Spare Parts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Apart from complete fans, Syklone Fan also supplies premium spare parts in bulk 
            with the same warranty & durability assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {spareParts.map((part, index) => {
            const IconComponent = part.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/50">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {part.name}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {part.availability}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {part.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => handleGetQuote(part.name)}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bulk Order Section */}
        <div className="bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 shadow-card border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Bulk Orders Available
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We supply spare parts in bulk quantities for dealers, distributors, 
                and service centers. All parts come with the same quality assurance 
                and warranty as our complete fans.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Same 1-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Premium Quality Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Direct Manufacturer Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Fast Delivery Available</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-xl p-6 inline-block">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-foreground font-semibold mb-1">Spare Part Types</div>
                <div className="text-muted-foreground text-sm">Available in bulk</div>
              </div>
              <div className="mt-6 space-y-3">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-premium transition-all duration-300 w-full lg:w-auto"
                  onClick={handleBulkQuote}
                >
                  Request Bulk Quote
                </Button>
                <div>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={handleDownloadCatalog}
                  >
                    Download Catalog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpareParts;