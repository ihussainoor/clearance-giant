import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Brands } from "@/components/Brands";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TradeApplication } from "@/components/TradeApplication";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Brands />
      <Statistics />
      <Testimonials />
      <WhyChooseUs />
      <TradeApplication />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
