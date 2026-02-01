import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { getAssetUrl } from "@/lib/assetUrl";

const navLinks = [
  { href: "/about-us", label: "About Us", external: false },
  { href: "/sell-to-us", label: "Sell to Us", external: false },
  { href: "/buy-from-us", label: "Buy From Us", external: false },
  { href: "/contact-us", label: "Contact Us", external: false },
  { href: "https://blogs.clearancegiant.com/", label: "Blog", external: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-navy py-5"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={getAssetUrl("logo.webp")} alt="Clearance Giant" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors text-sm font-medium ${
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+447341533335" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+44 7341 533335</span>
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            asChild
          >
            <Link to="/contact-us">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10"
          >
            <nav className="container-section py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors py-2 text-lg font-medium flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:+447341533335" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+44 7341 533335</span>
                </a>
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/contact-us">Get Started</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
