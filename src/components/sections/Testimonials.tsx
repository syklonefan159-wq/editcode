import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Powerful airflow and solid build quality. Perfect for our shop. Running smoothly for over 2 years now.",
      author: "Rajesh Kumar",
      role: "Local Business Owner",
      location: "Varanasi"
    },
    {
      quote: "Best fans for the price. The metal body feels premium and the motor is very quiet. Highly recommended!",
      author: "Amit Sharma",
      role: "Home User",
      location: "Lucknow"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by homes, shops & industries across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border border-primary/30 hover:shadow-premium transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/40 mb-4" />
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
