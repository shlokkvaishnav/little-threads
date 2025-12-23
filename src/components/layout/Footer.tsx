import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Join the LittleLeaves Family
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Subscribe for exclusive offers, new arrivals, and parenting tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-5 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button variant="hero" className="bg-gold text-gold-foreground hover:bg-gold/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold text-xl">L</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-background">
                LittleLeaves
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Dressing little ones in comfort and style since 2020. Sustainable, 
              adorable clothing for every adventure.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-sm mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              {["New Arrivals", "Girls", "Boys", "Baby", "Sale", "Gift Cards"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-background/70 hover:text-sage transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-sm mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Contact Us",
                "FAQs",
                "Size Guide",
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Track Order",
              ].map((item) => (
                <li key={item}>
                  <Link to="/help" className="text-background/70 hover:text-sage transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-semibold uppercase tracking-wide text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sage shrink-0 mt-0.5" />
                <span className="text-background/70">
                  123 Garden Lane, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sage shrink-0" />
                <a href="tel:+919876543210" className="text-background/70 hover:text-sage transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sage shrink-0" />
                <a href="mailto:hello@littleleaves.com" className="text-background/70 hover:text-sage transition-colors">
                  hello@littleleaves.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 LittleLeaves. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
