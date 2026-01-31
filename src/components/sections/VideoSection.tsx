import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-background via-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Play className="w-3 h-3 mr-1" /> Video
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                SYKLONE Fans
              </span>{" "}
              in Action
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the powerful airflow and superior engineering of our fans
            </p>
          </div>
          
          {/* Video Container - Full visible, no cropping */}
          <div className="relative rounded-2xl overflow-hidden shadow-premium border border-primary/30 animate-fade-in bg-black" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
            
            {/* Video with proper aspect ratio - object-contain ensures no cropping */}
            <div className="relative w-full flex items-center justify-center bg-black">
              <video 
                className="w-full max-h-[70vh] object-contain"
                controls
                muted
                playsInline
                poster="/products/syklone-tornado-max.jpg"
                style={{ aspectRatio: 'auto' }}
              >
                <source src="/syklone-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-center text-muted-foreground mt-6 italic animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            SYKLONE Fans – Engineered for powerful, consistent airflow
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
