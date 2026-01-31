import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, User, Youtube, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:syklonefan159@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const openYouTube = () => {
    window.open('https://youtube.com/@syklonefan?si=548WaE_CgcdzTxbd', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/syklone_fans?igsh=MTZuZmFpeXE1ZXd6aQ==', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/share/1B55uuRVQq/', '_blank');
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Looking for reliable cooling solutions? Contact SYKLONE Fans for product details, bulk orders, and dealership inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card border border-primary/30 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <a href="tel:+917985234708" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 79852 34708
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <a href="tel:+919454558355" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 94545 58355
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/30 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:syklonefan159@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  syklonefan159@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border border-primary/30 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sa 1/164-11a-5, Prem Chand Nagar Colony,<br />
                  Pandeypur, Varanasi – 221002,<br />
                  Uttar Pradesh, India
                </p>
              </CardContent>
            </Card>

            {/* Founders */}
            <Card className="bg-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Founders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="font-semibold text-foreground">Mr. Anil Vishwakarma</div>
                <div className="font-semibold text-foreground">Mr. Shubham Vishwakarma</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-primary/30 shadow-premium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input name="name" placeholder="Enter your full name" className="border-primary/30 focus:border-primary bg-muted/30" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input name="phone" placeholder="Enter your phone number" className="border-primary/30 focus:border-primary bg-muted/30" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input name="email" type="email" placeholder="Enter your email address" className="border-primary/30 focus:border-primary bg-muted/30" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input name="subject" placeholder="What is this regarding?" className="border-primary/30 focus:border-primary bg-muted/30" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your requirements, bulk order needs, or any questions you have..."
                      rows={5}
                      className="border-primary/30 focus:border-primary bg-muted/30"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-white text-background border-2 border-primary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
                
                {/* Social icons - white with gold border */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-primary/20">
                  <span className="text-sm text-muted-foreground">Follow us on:</span>
                  <div className="flex space-x-3">
                    <button onClick={openYouTube} className="w-8 h-8 bg-transparent border-2 border-primary hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                      <Youtube className="w-4 h-4 text-white group-hover:text-background" />
                    </button>
                    <button onClick={openInstagram} className="w-8 h-8 bg-transparent border-2 border-primary hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                      <Instagram className="w-4 h-4 text-white group-hover:text-background" />
                    </button>
                    <button onClick={openFacebook} className="w-8 h-8 bg-transparent border-2 border-primary hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                      <Facebook className="w-4 h-4 text-white group-hover:text-background" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-card rounded-2xl p-8 text-center border border-primary/30">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div>
              <div className="font-semibold text-foreground">Monday - Saturday</div>
              <div className="text-muted-foreground">9:00 AM - 7:00 PM</div>
            </div>
            <div>
              <div className="font-semibold text-foreground">Sunday</div>
              <div className="text-muted-foreground">10:00 AM - 5:00 PM</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For urgent inquiries outside business hours, please send us an email and we'll respond as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
