import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { 
  ShoppingBag, 
  Percent, 
  Shield, 
  Truck, 
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
    icon: Percent,
    title: "30-70% Below Retail",
    description: "Access premium branded goods at significant discounts compared to regular wholesale prices."
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Every product is verified authentic. We never deal in counterfeit or fake goods."
  },
  {
    icon: ShoppingBag,
    title: "Wide Selection",
    description: "Electronics, fashion, homeware, toys, health & beauty, and much more."
  },
  {
    icon: Truck,
    title: "UK & Europe Delivery",
    description: "Fast and reliable delivery to anywhere in the UK and Europe with tracking included."
  }
];

const categories = [
  "Electronics & Gadgets",
  "Fashion & Clothing",
  "Health & Beauty",
  "Home & Garden",
  "Toys & Games",
  "Sports & Fitness",
  "Kitchen & Dining",
  "Baby & Kids"
];

const BuyFromUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productDetails: "",
    productPhoto: "",
    productCategory: "",
    productType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Interest Registered!",
      description: "We'll be in touch shortly with available stock matching your requirements.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productDetails: "",
      productPhoto: "",
      productCategory: "",
      productType: "",
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
              Buy <span className="text-secondary">Premium Brands</span> at Clearance Prices
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Access authentic branded goods at 30-70% below retail prices. Perfect for resellers, 
              retailers, market traders, and online sellers.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById('buy-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Your Interest
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
              Why Buy From Clearance Giant?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied buyers who source quality products at unbeatable prices.
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
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary" />
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

      {/* Categories */}
      <section className="section-padding bg-muted/30">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We source a wide variety of products across multiple categories from top brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Form */}
      <section id="buy-form" className="section-padding bg-navy">
        <div className="container-section">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Register as a Buyer
              </h2>
              <p className="text-white/70">
                Tell us what you're looking for and we'll notify you when matching stock becomes available.
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
                  placeholder="Company/Business Name"
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
                  placeholder="Product Details *"
                  value={formData.productDetails}
                  onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="text"
                  placeholder="Product Photo Feed *"
                  value={formData.productPhoto}
                  onChange={(e) => setFormData({ ...formData, productPhoto: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Select Product Category *"
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="text"
                  placeholder="Select Type *"
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  required
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <Textarea
                placeholder="Tell us more about what you're looking for (brands, quantities, etc.)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg group"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Register Interest
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

export default BuyFromUs;
