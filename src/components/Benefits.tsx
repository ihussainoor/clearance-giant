import { motion } from "framer-motion";
import { 
  Banknote, 
  Tag, 
  Warehouse, 
  Scale, 
  Lock, 
  TrendingDown, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  TrendingUp 
} from "lucide-react";

const sellerBenefits = [
  { icon: Banknote, text: "Quick cash for excess inventory" },
  { icon: Tag, text: "No listing fees or commissions" },
  { icon: Warehouse, text: "Free up warehouse space" },
  { icon: Scale, text: "Fair market valuations" },
  { icon: Lock, text: "Confidential transactions" },
];

const buyerBenefits = [
  { icon: TrendingDown, text: "30-70% below retail prices" },
  { icon: ShieldCheck, text: "Authentic branded products" },
  { icon: Layers, text: "Flexible order quantities" },
  { icon: RefreshCw, text: "Regular new inventory" },
  { icon: TrendingUp, text: "Increase your profit margins" },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="container-section relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-white/70 text-lg">
            Whether you're clearing stock or sourcing products, we deliver real value
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sellers Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <span className="font-semibold">For Sellers</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Sell Your Excess Stock with Confidence
            </h3>

            <div className="space-y-4">
              {sellerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Buyers Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
              <span className="font-semibold">For Buyers</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Source Quality Products at Wholesale Prices
            </h3>

            <div className="space-y-4">
              {buyerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
