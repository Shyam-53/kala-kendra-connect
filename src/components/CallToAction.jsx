import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-terracotta to-saffron">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're an artisan looking to showcase your craft or a customer 
            seeking authentic handmade products, we welcome you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 transition-all duration-500 interactive-card hover:animate-glow-pulse animate-slide-in-left">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-bounce-gentle hover:scale-125 transition-transform duration-300 cursor-pointer">🎨</div>
              <h3 className="text-2xl font-bold mb-4 hover:text-shimmer transition-all duration-300">For Artisans</h3>
              <p className="mb-6 opacity-90">
                Showcase your craft to a wider audience. Get fair prices for your handmade creations 
                and connect with customers who value authentic art.
              </p>
              <Button variant="elegant" size="lg" className="w-full hover-lift">
                Start Selling
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 transition-all duration-500 interactive-card hover:animate-glow-pulse animate-slide-in-right">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-bounce-gentle hover:scale-125 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>🛍️</div>
              <h3 className="text-2xl font-bold mb-4 hover:text-shimmer transition-all duration-300">For Customers</h3>
              <p className="mb-6 opacity-90">
                Discover unique handcrafted items that tell a story. Support local artisans 
                and own pieces that reflect India's rich cultural heritage.
              </p>
              <Button variant="hero" size="lg" className="w-full hover-lift">
                Start Shopping
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/80 text-lg">
            ✨ Join thousands of satisfied customers and artisans already part of our marketplace
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;