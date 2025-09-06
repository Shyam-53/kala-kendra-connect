import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="block animate-slide-in-left">GAVBAZAAR</span>
          <span className="bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent animate-slide-in-right">
            Local Artisan Hub
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 animate-fade-in" style={{animationDelay: '0.3s'}}>
          Discover authentic handcrafted treasures from local Indian artisans. 
          From traditional pottery to exquisite textiles, connect with the makers behind the art.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-3 hover-lift hover:animate-glow-pulse">
            Explore Artisans
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-3 hover-glow">
            Join as Seller
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in" style={{animationDelay: '0.9s'}}>
          <div className="text-center hover-lift cursor-pointer">
            <div className="text-3xl font-bold text-saffron animate-bounce-gentle">500+</div>
            <div className="text-sm opacity-80">Artisans</div>
          </div>
          <div className="text-center hover-lift cursor-pointer">
            <div className="text-3xl font-bold text-gold animate-bounce-gentle" style={{animationDelay: '0.5s'}}>2000+</div>
            <div className="text-sm opacity-80">Products</div>
          </div>
          <div className="text-center hover-lift cursor-pointer">
            <div className="text-3xl font-bold text-saffron animate-bounce-gentle" style={{animationDelay: '1s'}}>50+</div>
            <div className="text-sm opacity-80">Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;