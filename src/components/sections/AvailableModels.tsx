import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Wind, Fan, CircleDot, AirVent, Factory } from "lucide-react";

const AvailableModels = () => {
  const models = [
    {
      name: "Table Fans",
      icon: Wind,
      description: "Compact design with powerful airflow"
    },
    {
      name: "Wall Fans",
      icon: CircleDot,
      description: "Wide coverage cooling for large spaces"
    },
    {
      name: "Pedestal Fans",
      icon: Fan,
      description: "Height adjustable with heavy air delivery"
    },
    {
      name: "Exhaust Fans",
      icon: AirVent,
      description: "Efficient ventilation for fresh air"
    },
    {
      name: "Industrial Fans",
      icon: Factory,
      description: "Heavy-duty cooling for large spaces"
    }
  ];

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="available-models" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Fan Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Available{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Models
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from our wide range of fan categories designed for every application
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-primary/30 bg-card overflow-hidden"
                onClick={scrollToProducts}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailableModels;
