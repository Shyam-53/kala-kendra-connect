import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "GAVBAZAAR - Indian Local Marketplace for Authentic Handcrafts";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'GAVBAZAAR - Discover authentic handcrafted treasures from local Indian artisans. Shop pottery, textiles, jewelry and more directly from skilled craftsmen. Support local heritage.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="about">
          <About />
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
