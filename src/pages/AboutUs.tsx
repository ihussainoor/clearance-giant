import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Users, Award, Globe, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize building long-term relationships with our suppliers and buyers, ensuring mutual success."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every product we handle goes through strict quality checks to maintain our 100% authenticity guarantee."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our network spans across the UK and internationally, connecting businesses worldwide."
  },
  {
    icon: Target,
    title: "Fair Pricing",
    description: "We ensure fair deals for both sellers and buyers, maximizing value for everyone involved."
  }
];

const milestones = [
  "5,500+ satisfied clients across the UK",
  "£700K+ worth of stock traded",
  "100% authentic branded products",
  "Same-day quote turnaround",
  "Dedicated account management",
  "Secure and confidential transactions"
];

const AboutUs = () => {
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
              About <span className="text-gradient">Clearance Giant</span>
            </h1>
            <p className="text-xl text-white/70">
              The UK's leading B2B wholesale clearance marketplace, connecting businesses 
              to maximize value from excess stock and source premium branded goods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Clearance Giant was founded with a simple mission: to bridge the gap between 
                  businesses with excess inventory and those seeking quality branded products 
                  at competitive prices.
                </p>
                <p>
                  What started as a small operation has grown into the UK's largest B2B 
                  clearance network, serving over 5,500 suppliers and buyers. We specialize 
                  in handling excess stock, customer returns, and end-of-line products from 
                  major retailers and brands.
                </p>
                <p>
                  Our team of experienced professionals understands the unique challenges 
                  businesses face when dealing with surplus inventory. We provide fast, 
                  fair, and hassle-free solutions that help companies recover maximum value 
                  from their stock.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <div className="font-display text-4xl font-bold text-primary mb-2">£700K+</div>
                <div className="text-muted-foreground">Stock Traded</div>
              </div>
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="font-display text-4xl font-bold text-secondary mb-2">5,500+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-6 rounded-xl bg-success/10 border border-success/20">
                <div className="font-display text-4xl font-bold text-success mb-2">100%</div>
                <div className="text-muted-foreground">Authenticity</div>
              </div>
              <div className="p-6 rounded-xl bg-warning/10 border border-warning/20">
                <div className="font-display text-4xl font-bold text-warning mb-2">24hr</div>
                <div className="text-muted-foreground">Quote Turnaround</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Clearance Giant.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Why Businesses Choose Us
              </h2>
              <p className="text-white/70 mb-8">
                We've built our reputation on trust, transparency, and delivering exceptional 
                value to our partners. Here's what sets us apart.
              </p>
              <div className="grid gap-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/90">{milestone}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-6xl font-bold text-white mb-4">#1</div>
                  <div className="text-white/80 text-xl">UK's Largest B2B<br />Clearance Network</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutUs;
