import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-card -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-card translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="inline-block font-montserrat text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Limited Time Offer
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Winter Sale is Live!
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-lg mb-6">
              Get up to 40% off on our cozy winter collection. 
              Sweaters, jackets, and more at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/shop?filter=sale">
                <Button variant="hero" size="xl" className="bg-card text-primary hover:bg-card/90">
                  Shop the Sale
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Discount Badge */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent flex flex-col items-center justify-center text-accent-foreground animate-bounce-subtle">
              <span className="text-lg font-montserrat font-bold uppercase">Up to</span>
              <span className="text-5xl md:text-6xl font-playfair font-bold">40%</span>
              <span className="text-lg font-montserrat font-bold uppercase">Off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
