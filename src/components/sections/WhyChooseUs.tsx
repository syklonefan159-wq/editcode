import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, Shield, Wind, Volume2, Clock, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Cog,
      title: "Bearing Based Motor",
      description: "Long-lasting bearing motors for smooth, quiet operation and extended lifespan.",
      highlight: "Durable"
    },
    {
      icon: Shield,
      title: "Heavy Duty Metal Body",
      description: "Robust metal construction ensures durability and stability for years of use.",
      highlight: "Strong Build"
    },
    {
      icon: Wind,
      title: "High Air Delivery",
      description: "Aerodynamic blade design delivers powerful airflow to every corner of your space.",
      highlight: "Powerful"
    },
    {
      icon: Volume2,
      title: "Low Noise Operation", 
      description: "Engineered for whisper-quiet performance without compromising on cooling power.",
      highlight: "Silent"
    },
    {
      icon: Clock,
      title: "Longer Motor Life",
      description: "Premium quality motors designed to run efficiently for years without issues.",
      highlight: "Reliable"
    },
    {
      icon: Wrench,
      title: "Easy Installation & Maintenance",
      description: "Simple setup and hassle-free maintenance keeps your fan running perfectly.",
      highlight: "Convenient"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              SYKLONE Fans?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built with quality, designed for performance, and trusted for reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-primary/30 bg-card relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
                      <IconComponent className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs bg-primary/20 text-primary border-0">
                        {feature.highlight}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-2xl p-8 border border-primary/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2004</div>
              <div className="text-foreground font-semibold">Founded</div>
              <div className="text-muted-foreground text-sm">Years of trust</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-foreground font-semibold">Happy Customers</div>
              <div className="text-muted-foreground text-sm">Nationwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-foreground font-semibold">Quality Assured</div>
              <div className="text-muted-foreground text-sm">Tested products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1 Year</div>
              <div className="text-foreground font-semibold">Warranty</div>
              <div className="text-muted-foreground text-sm">On all products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
