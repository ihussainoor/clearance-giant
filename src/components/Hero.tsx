import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroForm } from "./HeroForm";

const trustBadges = [
  { icon: Users, text: "5,500+ Suppliers & Buyers" },
  { icon: ShieldCheck, text: "100% Authentic Products" },
  { icon: Zap, text: "Same-Day Quotes" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-secondary/20" />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-1/4 right-0 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative container-section pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs sm:text-sm font-medium">UK's #1 Wholesale Clearance Marketplace</span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Turn Excess Stock Into{" "}
              <span className="text-gradient">Cash</span>
              <br />
              or Buy Premium Brands at{" "}
              <span className="text-secondary">Clearance Prices</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl">
              Join the UK's largest B2B clearance network. Whether you're clearing warehouse space 
              or sourcing quality branded goods at 30-70% below retail, we've got you covered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group btn-glow animate-pulse-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Sell Your Stock
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-navy hover:bg-white/90 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Deals
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroForm />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8"
        >
          {[
            { value: "£700K+", label: "Stock Traded" },
            { value: "5,500+", label: "Happy Clients" },
            { value: "100%", label: "Authenticity" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 sm:p-4 lg:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="font-display text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
