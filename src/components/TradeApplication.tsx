import { motion } from "framer-motion";
import { FileDown, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TradeApplication = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-[hsl(25,100%,55%)]">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Apply for Trade Account
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Get exclusive access to our wholesale inventory and special trade pricing. 
              Download our application form to get started.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 group"
            >
              <FileDown className="mr-2 w-5 h-5" />
              Download Form
              <ArrowRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6"
              onClick={() => window.location.href = "mailto:sales@clearancegiant.co.uk"}
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
