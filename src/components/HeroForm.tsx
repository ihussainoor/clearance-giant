import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const HeroForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "sell",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with a quote.",
    });

    setFormData({ name: "", email: "", type: "sell" });
    setIsLoading(false);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-navy mb-2">
          Get Your Free Quote
        </h3>
        <p className="text-muted-foreground">
          Quick response within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "sell" })}
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.type === "sell"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-muted/30 text-muted-foreground hover:border-primary/50"
            }`}
          >
            <div className="font-semibold">I want to Sell</div>
            <div className="text-xs opacity-70">Clear excess stock</div>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: "buy" })}
            className={`p-4 rounded-xl border-2 transition-all ${
              formData.type === "buy"
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border bg-muted/30 text-muted-foreground hover:border-secondary/50"
            }`}
          >
            <div className="font-semibold">I want to Buy</div>
            <div className="text-xs opacity-70">Find great deals</div>
          </button>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg group"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Get Free Quote
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground mt-4">
        🔒 Your information is secure and never shared
      </p>
    </motion.div>
  );
};
