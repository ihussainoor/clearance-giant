import { motion } from "framer-motion";

const brands = [
  { name: "Nike", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Adidas", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Puma", color: "#FFFFFF", bgColor: "#000000" },
  { name: "Reebok", color: "#FFFFFF", bgColor: "#000000" },
  { name: "Samsung", color: "#1428A0", bgColor: "#FFFFFF" },
  { name: "Sony", color: "#000000", bgColor: "#FFFFFF" },
  { name: "LG", color: "#CC0000", bgColor: "#FFFFFF" },
  { name: "Philips", color: "#CC0000", bgColor: "#FFFFFF" },
  { name: "Apple", color: "#000000", bgColor: "#F5F5F7" },
  { name: "Canon", color: "#E60012", bgColor: "#FFFFFF" },
  { name: "Nikon", color: "#FFDE00", bgColor: "#000000" },
  { name: "GoPro", color: "#FFFFFF", bgColor: "#2E3236" },
  { name: "IKEA", color: "#FFFFFF", bgColor: "#0051BA" },
  { name: "Dunelm", color: "#0066CC", bgColor: "#FFFFFF" },
  { name: "Next", color: "#FFFFFF", bgColor: "#E60000" },
  { name: "Argos", color: "#FFFFFF", bgColor: "#FF6600" },
  { name: "Dyson", color: "#FFFFFF", bgColor: "#000000" },
  { name: "Shark", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Bissell", color: "#8B4513", bgColor: "#FFFFFF" },
  { name: "Kärcher", color: "#FFCC00", bgColor: "#000000" },
  { name: "Bosch", color: "#CC0000", bgColor: "#FFFFFF" },
  { name: "DeWalt", color: "#FFCC00", bgColor: "#000000" },
  { name: "Makita", color: "#E60000", bgColor: "#FFFFFF" },
  { name: "Stanley", color: "#FFCC00", bgColor: "#000000" },
  { name: "Nespresso", color: "#FFFFFF", bgColor: "#C41E3A" },
  { name: "DeLonghi", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Kenwood", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Under Armour", color: "#FFFFFF", bgColor: "#0A1428" },
  { name: "New Balance", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Asics", color: "#FFFFFF", bgColor: "#E41020" },
  { name: "Saucony", color: "#FFFFFF", bgColor: "#F05A3C" },
  { name: "Lego", color: "#FFFFFF", bgColor: "#E4040D" },
  { name: "Hasbro", color: "#FFFFFF", bgColor: "#003DA5" },
  { name: "Mattel", color: "#FFFFFF", bgColor: "#E91E1E" },
  { name: "Ravensburger", color: "#FFFFFF", bgColor: "#003DA5" },
  { name: "Gillette", color: "#003DA5", bgColor: "#FFFFFF" },
  { name: "Nivea", color: "#FFFFFF", bgColor: "#003DA5" },
  { name: "L'Oréal", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Pantene", color: "#FFFFFF", bgColor: "#FFD700" },
  { name: "Nestlé", color: "#8B4513", bgColor: "#FFFFFF" },
  { name: "Unilever", color: "#FFFFFF", bgColor: "#003DA5" },
  { name: "P&G", color: "#FFFFFF", bgColor: "#003DA5" },
  { name: "Colgate", color: "#E60000", bgColor: "#FFFFFF" },
  { name: "Calor", color: "#FFFFFF", bgColor: "#E60000" },
  { name: "Russell Hobbs", color: "#000000", bgColor: "#FFFFFF" },
  { name: "Breville", color: "#8B4513", bgColor: "#FFFFFF" },
  { name: "Sage", color: "#000000", bgColor: "#FFFFFF" }
];

export const Brands = () => {
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
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-40 h-24 rounded-xl shadow-sm border border-border flex items-center justify-center hover:shadow-md transition-shadow"
              style={{ backgroundColor: brand.bgColor }}
            >
              <span 
                className="font-display font-bold text-center px-4"
                style={{ 
                  color: brand.color,
                  fontSize: brand.name.length > 10 ? '14px' : '18px'
                }}
              >
                {brand.name}
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
