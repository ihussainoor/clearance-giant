import { motion } from "framer-motion";

const brands = [
  "Adidas", "Nike", "Puma", "Samsung", "Sony", "LG", 
  "Philips", "JBL", "Reebok", "Under Armour", "Asics", "New Balance",
  "Bosch", "Makita", "DeWalt", "Stanley", "Karcher", "Dyson"
];

export const Brands = () => {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Authentic Products from Brands You Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            We work with top global brands to bring you genuine quality products
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center hover:shadow-md transition-shadow"
            >
              <span className="font-display font-bold text-navy/60 text-lg">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-section mt-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          <span className="text-primary font-semibold">100% Authenticity Guaranteed</span> - All products 
          verified and sourced from official channels
        </motion.p>
      </div>
    </section>
  );
};
