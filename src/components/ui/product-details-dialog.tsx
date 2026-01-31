import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Zap, Wind, Phone, Mail } from "lucide-react";
import { ReactNode } from "react";

interface ProductDetailsDialogProps {
  trigger: ReactNode;
  product: {
    name: string;
    description: string;
    image: string;
    features: string[];
    category: string;
  };
}

export const ProductDetailsDialog = ({ trigger, product }: ProductDetailsDialogProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const specifications = {
    "Bullet Fan": {
      power: "75W",
      speed: "1400 RPM",
      airflow: "230 CMM",
      warranty: "1 Year",
      material: "Aluminum Body"
    },
    "Office Pedestal Fan": {
      power: "55W",
      speed: "1200 RPM", 
      airflow: "210 CMM",
      warranty: "1 Year",
      material: "Steel Base"
    },
    "Copper Fan": {
      power: "65W",
      speed: "1300 RPM",
      airflow: "220 CMM", 
      warranty: "1 Year",
      material: "Copper Motor"
    },
    "Aluminium Fan": {
      power: "60W",
      speed: "1250 RPM",
      airflow: "215 CMM",
      warranty: "1 Year", 
      material: "Aluminum Body"
    },
    "Exhaust Fan": {
      power: "45W",
      speed: "1100 RPM",
      airflow: "180 CMM",
      warranty: "1 Year",
      material: "Plastic Body"
    }
  };

  const currentSpecs = specifications[product.name as keyof typeof specifications];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.name} - Complete Details
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              <Badge 
                className="absolute top-4 left-4 bg-primary text-primary-foreground"
              >
                {product.category}
              </Badge>
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-foreground flex items-center mb-3">
                <Wind className="w-4 h-4 mr-2 text-primary" />
                Key Features:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Specifications */}
            {currentSpecs && (
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Technical Specifications:
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Power:</span>
                      <div className="font-semibold text-foreground">{currentSpecs.power}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Speed:</span>
                      <div className="font-semibold text-foreground">{currentSpecs.speed}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Airflow:</span>
                      <div className="font-semibold text-foreground">{currentSpecs.airflow}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Material:</span>
                      <div className="font-semibold text-foreground">{currentSpecs.material}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Warranty */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">1 Year Comprehensive Warranty</span>
            </div>

            {/* Contact Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:shadow-premium"
                onClick={scrollToContact}
              >
                Get Price Quote
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('tel:+917985234708')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('mailto:syklonefan159@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};