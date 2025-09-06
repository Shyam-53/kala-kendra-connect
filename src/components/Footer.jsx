const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4 hover-lift cursor-pointer">
              <div className="text-2xl animate-bounce-gentle">🎨</div>
              <span className="text-xl font-bold hover:text-saffron transition-colors duration-300">GAVBAZAAR</span>
            </div>
            <p className="text-white/70 mb-4">
              Connecting authentic Indian artisans with art lovers worldwide. 
              Preserving heritage, one craft at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">📘</a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">📷</a>
              <a href="#" className="text-white/70 hover:text-saffron transition-colors">🐦</a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Pottery & Ceramics</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Textiles & Fabrics</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Jewelry & Metalwork</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Wood Crafts</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Paintings & Art</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Help Center</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Shipping Info</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Returns</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Contact Us</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">FAQs</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">About Us</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Our Mission</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Careers</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Press</a></li>
              <li><a href="#" className="hover:text-saffron transition-all duration-300 hover:translate-x-1">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 GAVBAZAAR. Made with ❤️ for Indian artisans and their craft.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;