import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy children playing in a garden"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-xl animate-fade-in-up">
          <span className="inline-block font-montserrat text-sm font-semibold uppercase tracking-widest text-primary bg-card/90 px-4 py-2 rounded-full mb-6">
            New Winter Collection
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Dress Them in
            <br />
            <span className="text-primary">Pure Comfort</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Discover our collection of soft, sustainable clothing designed for 
            little adventurers. Made with love, worn with joy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop?filter=new">
              <Button variant="outline" size="xl">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
