import { motion } from "framer-motion";
import { Package, Clock, Layers, Truck, Calculator, Tag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    icon: Package,
    question: "What types of stock do you buy?",
    answer: "We buy a wide range of products including electronics, clothing, footwear, home goods, tools, and more. We're interested in excess inventory, overstock, end-of-line products, customer returns, and clearance stock from reputable brands.",
  },
  {
    icon: Clock,
    question: "How quickly can I get paid?",
    answer: "Once you accept our offer, we aim to complete payment within 2-5 business days. For larger deals, we can arrange faster payments if needed. We understand cash flow is important for your business.",
  },
  {
    icon: Layers,
    question: "What's the minimum order quantity?",
    answer: "For buyers, minimum order quantities vary depending on the product category. Generally, we work with pallets and container loads, but we're flexible and can accommodate smaller orders for certain products.",
  },
  {
    icon: Truck,
    question: "Do you offer collection services?",
    answer: "Yes! We arrange free collection of your stock across the UK. Our logistics partners will coordinate with you to schedule a convenient pickup time and handle all the transportation.",
  },
  {
    icon: Calculator,
    question: "How do you determine prices?",
    answer: "Our valuations are based on current market conditions, product condition, brand value, and quantity. We use our extensive market knowledge to offer fair prices that work for both parties.",
  },
  {
    icon: Tag,
    question: "Which brands do you work with?",
    answer: "We work with major brands including Adidas, Nike, Puma, Samsung, Sony, LG, Philips, and many more. If you have branded stock from reputable manufacturers, we'd love to hear from you.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, 
            feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display font-semibold text-navy">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
