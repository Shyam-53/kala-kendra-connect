import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Local Artisans,
              <span className="text-primary block">Preserving Heritage</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our marketplace connects you directly with skilled Indian artisans who have 
              inherited their craft through generations. Every purchase supports local 
              communities and helps preserve traditional art forms.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Direct from Artisans</h4>
                  <p className="text-muted-foreground">No middlemen, fair prices for creators</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-terracotta rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Authentic Handmade</h4>
                  <p className="text-muted-foreground">Each piece is unique and crafted with love</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-saffron rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Heritage Preservation</h4>
                  <p className="text-muted-foreground">Supporting traditional crafts for future generations</p>
                </div>
              </div>
            </div>
            
            <Button variant="marketplace" size="lg" className="text-lg px-8 py-3">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-terracotta mb-1">15+</div>
                  <p className="text-sm text-muted-foreground">States Covered</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-saffron mb-1">5K+</div>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warm-red mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Authentic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;