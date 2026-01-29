import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Loader2,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "general",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      type: "general",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-secondary/20" />
        
        <div className="relative container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-white/70">
              Ready to discuss your stock requirements? Get in touch with our team 
              and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>

                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="resize-none"
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg group"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-10">
                <a 
                  href="tel:+447341533335"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Mobile</div>
                    <div className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      +44 7341 533335
                    </div>
                  </div>
                </a>

                <a 
                  href="tel:+441615498653"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Landline</div>
                    <div className="text-foreground font-semibold group-hover:text-primary transition-colors">
                      +44 161 549 8653
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:sales@clearancegiant.co.uk"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Email</div>
                    <div className="text-foreground font-semibold group-hover:text-secondary transition-colors">
                      sales@clearancegiant.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Address</div>
                    <div className="text-foreground font-medium leading-relaxed">
                      G6, Independence House<br />
                      Adelaide Street, Heywood<br />
                      OL10 4HF Manchester, UK
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm mb-1">Visits</div>
                    <div className="text-foreground font-medium">
                      By Appointment Only
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/447341533335"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-success text-success-foreground font-semibold hover:bg-success/90 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactUs;
