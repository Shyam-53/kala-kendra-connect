import { Card } from "@/components/ui/card";
import potteryImage from "@/assets/pottery-category.jpg";
import textilesImage from "@/assets/textiles-category.jpg";
import jewelryImage from "@/assets/jewelry-category.jpg";

const categories = [
  {
    title: "Pottery & Ceramics",
    description: "Traditional clay work and terracotta art",
    image: potteryImage,
    artisans: "150+ Artisans"
  },
  {
    title: "Textiles & Fabrics",
    description: "Handwoven fabrics and traditional weaving",
    image: textilesImage,
    artisans: "200+ Artisans"
  },
  {
    title: "Jewelry & Metalwork",
    description: "Handcrafted jewelry and metal artifacts",
    image: jewelryImage,
    artisans: "100+ Artisans"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 hover:text-shimmer transition-all duration-300">
            Discover Authentic Crafts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left" style={{animationDelay: '0.3s'}}>
            Explore diverse categories of traditional Indian craftsmanship, 
            each telling a unique story of heritage and skill.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden bg-white interactive-card hover:shadow-warm hover:animate-glow-pulse animate-fade-in"
              style={{animationDelay: `${0.6 + index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-[-10px]">
                  <span className="text-sm font-medium text-shimmer">{category.artisans}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-saffron rounded-full flex items-center justify-center animate-bounce-gentle">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors hover:text-shimmer">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;