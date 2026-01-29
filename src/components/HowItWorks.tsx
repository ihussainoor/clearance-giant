import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Clock, CreditCard, Warehouse, Search, Tag, TrendingUp, Package } from "lucide-react";

const sellSteps = [
  {
    icon: FileText,
    title: "Submit Details",
    description: "Tell us about your excess stock - type, quantity, and condition. Quick form takes 2 minutes.",
  },
  {
    icon: Clock,
    title: "Get Quote in 24hrs",
    description: "Our expert team evaluates your stock and provides a fair market valuation.",
  },
  {
    icon: CreditCard,
    title: "Accept & Get Paid Fast",
    description: "Agree to our offer and receive payment quickly - often within days.",
  },
  {
    icon: Warehouse,
    title: "Free Warehouse Space",
    description: "We arrange collection. Clear your warehouse and focus on your core business.",
  },
];

const buySteps = [
  {
    icon: Search,
    title: "Browse Inventory",
    description: "Explore our wide range of branded clearance stock updated weekly.",
  },
  {
    icon: Tag,
    title: "Request Products",
    description: "Tell us what you're looking for - brands, categories, quantities.",
  },
  {
    icon: Package,
    title: "Get Best Rates",
    description: "Receive competitive wholesale prices 30-70% below retail.",
  },
  {
    icon: TrendingUp,
    title: "Boost Your Margins",
    description: "Stock quality branded products and increase your profit margins.",
  },
];

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"sell" | "buy">("sell");
  const steps = activeTab === "sell" ? sellSteps : buySteps;

  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple, fast, and transparent process for both sellers and buyers
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-xl bg-muted">
            <button
              onClick={() => setActiveTab("sell")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "sell"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              I Want to Sell
            </button>
            <button
              onClick={() => setActiveTab("buy")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "buy"
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              I Want to Buy
            </button>
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                )}

                <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    activeTab === "sell" ? "bg-primary/10" : "bg-secondary/10"
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      activeTab === "sell" ? "text-primary" : "text-secondary"
                    }`} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
