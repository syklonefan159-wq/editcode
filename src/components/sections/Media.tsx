import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, Youtube, Video } from "lucide-react";

const Media = () => {
  const openYouTube = () => {
    window.open('https://www.youtube.com/@syklonefan', '_blank');
  };

  const videos = [
    {
      title: "Syklone Fan Manufacturing Process",
      description: "Take a behind-the-scenes look at our state-of-the-art manufacturing facility",
      thumbnail: "/api/placeholder/400/250",
      duration: "3:45",
      category: "Manufacturing"
    },
    {
      title: "Product Showcase - Pedestal Fans",
      description: "Complete overview of our premium pedestal fan collection and features",
      thumbnail: "/api/placeholder/400/250", 
      duration: "5:20",
      category: "Products"
    },
    {
      title: "Installation Guide - Bullet Fans",
      description: "Step-by-step installation guide for our industrial bullet fans",
      thumbnail: "/api/placeholder/400/250",
      duration: "4:15", 
      category: "Tutorial"
    },
    {
      title: "Quality Testing Process",
      description: "See how we ensure every fan meets our strict quality standards",
      thumbnail: "/api/placeholder/400/250",
      duration: "2:30",
      category: "Quality"
    }
  ];

  return (
    <section id="media" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Media Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Watch Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Fans in Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Explore product showcases, installation guides, and behind-the-scenes 
            manufacturing videos from our official YouTube channel.
          </p>
          
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={openYouTube}
          >
            <Youtube className="mr-2 h-5 w-5" />
            Visit SYKLONE FAN YouTube Channel
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Video className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="text-2xl font-bold text-primary">SYKLONE Fans</div>
                      <div className="text-sm text-primary font-cursive">feel the flow... :)</div>
                    </div>
                  </div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <Badge className="absolute bottom-4 right-4 bg-black/70 text-white border-0">
                    {video.duration}
                  </Badge>
                  
                  {/* Category badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                    {video.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={openYouTube}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Youtube className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Subscribe to Our YouTube Channel
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay updated with our latest product launches, installation tutorials, 
              maintenance tips, and behind-the-scenes content from Syklone Fan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={openYouTube}
              >
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                onClick={openYouTube}
              >
                View All Videos
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;