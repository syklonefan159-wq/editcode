import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, Award, Zap } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Since 2004
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              SYKLONE Fans
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              SYKLONE Fans is a performance-focused brand delivering high-quality air circulation solutions. With years of manufacturing experience, we specialize in bearing-based motors, heavy-duty fan structures, and efficient airflow technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our products are trusted for durability, affordability, and strong performance across residential, commercial, and industrial spaces.
            </p>
          </div>

          <div className="relative">
            <img 
              src={manufacturingImage} 
              alt="Syklone Manufacturing" 
              className="rounded-2xl shadow-premium w-full h-[400px] object-cover border border-primary/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl border-l-4 border-primary shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3 text-primary-foreground">🎯</span>
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver superior air comfort through innovative, energy-efficient, and durable fans that blend modern design with powerful performance, enhancing every home and workspace with refreshing air at affordable price.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-2xl border-l-4 border-primary shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3 text-primary-foreground">🌟</span>
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted and preferred fan brand by redefining comfort, quality, style, and sustainability — creating a future where every breeze we deliver inspires freshness and well-being.
            </p>
          </div>
        </div>

        {/* Product Range */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Product Range
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Table Fans",
              "Pedestal Fans", 
              "Wall Fans",
              "Exhaust Fans",
              "Foldable Fans"
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-primary/30 bg-card">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{product}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl shadow-card border border-primary/30">
            <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">2</div>
            <div className="text-muted-foreground text-sm">Founders</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card border border-primary/30">
            <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">20+</div>
            <div className="text-muted-foreground text-sm">Years</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card border border-primary/30">
            <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">1 Year</div>
            <div className="text-muted-foreground text-sm">Warranty</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card border border-primary/30">
            <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Direct</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
