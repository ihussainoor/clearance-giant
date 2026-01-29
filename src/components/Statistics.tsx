import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Users, ShieldCheck, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: 700000,
    prefix: "£",
    suffix: "+",
    label: "Worth of Goods Traded",
  },
  {
    icon: Users,
    value: 5500,
    prefix: "",
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: ShieldCheck,
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Authenticity Guarantee",
  },
  {
    icon: TrendingUp,
    value: 70,
    prefix: "",
    suffix: "%",
    label: "Max Savings",
  },
];

const AnimatedCounter = ({ value, prefix, suffix, inView }: { 
  value: number; 
  prefix: string; 
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container-section relative" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
