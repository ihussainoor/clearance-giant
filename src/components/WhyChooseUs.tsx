import { motion } from "framer-motion";
import { Zap, Scale, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Get quotes within 24 hours and complete deals in days, not weeks. We value your time.",
  },
  {
    icon: Scale,
    title: "Best Market Prices",
    description: "Fair valuations for sellers, competitive rates for buyers. We ensure everyone wins.",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    description: "All products verified and from trusted brands. No fakes, no compromises on quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Years of experience in wholesale clearance. We understand your business needs.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Why Choose Clearance Giant?
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just another clearance company. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
