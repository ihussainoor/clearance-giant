import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const TradeApplication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Received!",
      description: "We'll send you the trade account application form via email shortly.",
    });

    setFormData({ fullName: "", email: "" });
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-[hsl(25,100%,55%)]">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="font-display text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4">
              Apply for Trade Account
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-xl mb-4">
              Get exclusive access to our wholesale inventory and enjoy special trade pricing for bulk orders.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              Simply provide your details below and we'll send you the application form via email within 24 hours.
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-96 bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold text-navy mb-2">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="h-12 border-border focus-visible:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-navy mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 border-border focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 text-base group"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Mail className="mr-2 w-5 h-5" />
                  <span>Send Me the Form</span>
                  <Send className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </>
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              We'll email you the application form within 24 hours.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
