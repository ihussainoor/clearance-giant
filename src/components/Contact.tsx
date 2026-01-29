import { useState } from "react";
import { motion } from "framer-motion";
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

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "sell",
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
      type: "sell",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white/70 mb-8">
              Ready to sell your stock or buy wholesale? Fill out the form and 
              we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
                />
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "sell" })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.type === "sell"
                      ? "border-primary bg-primary/20 text-white"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold">I want to Sell</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: "buy" })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    formData.type === "buy"
                      ? "border-secondary bg-secondary/20 text-white"
                      : "border-white/20 bg-white/5 text-white/70 hover:border-secondary/50"
                  }`}
                >
                  <div className="font-semibold">I want to Buy</div>
                </button>
              </div>

              <Textarea
                placeholder="Tell us about your stock or what you're looking for..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary resize-none"
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
                    Submit Request
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
            <h3 className="font-display text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              <a 
                href="tel:+447341533335"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Mobile</div>
                  <div className="text-white font-semibold group-hover:text-primary transition-colors">
                    +44 7341 533335
                  </div>
                </div>
              </a>

              <a 
                href="tel:+441615498653"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Landline</div>
                  <div className="text-white font-semibold group-hover:text-primary transition-colors">
                    +44 161 549 8653
                  </div>
                </div>
              </a>

              <a 
                href="mailto:sales@clearancegiant.co.uk"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Email</div>
                  <div className="text-white font-semibold group-hover:text-secondary transition-colors">
                    sales@clearancegiant.co.uk
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Address</div>
                  <div className="text-white font-medium leading-relaxed">
                    G6, Independence House<br />
                    Adelaide Street, Heywood<br />
                    OL10 4HF Manchester, UK
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Visits</div>
                  <div className="text-white font-medium">
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
              Join Our WhatsApp Group
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
