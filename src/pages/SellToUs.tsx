import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { 
  Package, 
  Clock, 
  Truck, 
  Banknote, 
  CheckCircle, 
  ArrowRight,
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Clock,
    title: "Same-Day Quotes",
    description: "Get a competitive offer within hours of submitting your stock details."
  },
  {
    icon: Banknote,
    title: "Fast Payment",
    description: "Receive payment quickly once the deal is confirmed and stock collected."
  },
  {
    icon: Truck,
    title: "Free Collection",
    description: "We arrange and cover the cost of collecting stock from your premises."
  },
  {
    icon: Package,
    title: "All Stock Types",
    description: "Customer returns, end-of-line, excess inventory, and closeout stock."
  }
];

const stockTypes = [
  "Customer Returns",
  "End-of-Line Products", 
  "Excess Inventory",
  "Closeout Stock",
  "Overstock",
  "Seasonal Products",
  "Discontinued Lines",
  "Wholesale Lots"
];

const SellToUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    stockType: "",
    quantity: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll review your stock details and get back to you with a quote within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      stockType: "",
      quantity: "",
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
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/20" />
        
        <div className="relative container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sell Your <span className="text-gradient">Excess Stock</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Turn your surplus inventory into cash. Get competitive offers for customer returns, 
              end-of-line products, and excess stock from the UK's leading clearance buyer.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById('sell-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Sell to Clearance Giant?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make selling your excess stock simple, fast, and profitable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover-lift text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Stock Do We Buy?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We purchase a wide variety of stock types from retailers, manufacturers, and wholesalers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stockTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Form */}
      <section id="sell-form" className="section-padding bg-navy">
        <div className="container-section">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-white/70">
                Tell us about your stock and we'll send you a competitive offer within 24 hours.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Stock Type (e.g., Returns, Overstock)"
                  value={formData.stockType}
                  onChange={(e) => setFormData({ ...formData, stockType: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="text"
                  placeholder="Estimated Quantity/Value"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <Textarea
                placeholder="Tell us more about your stock (categories, brands, condition, etc.)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
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
                    Submit for Quote
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SellToUs;
