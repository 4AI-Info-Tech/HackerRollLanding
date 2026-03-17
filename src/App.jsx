import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import VisualFeedShowcase from "./components/VisualFeedShowcase";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <VisualFeedShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
