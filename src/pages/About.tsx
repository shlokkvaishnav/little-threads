import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/hero-children.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={heroImage}
            alt="About LittleLeaves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-card">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Story
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 text-card/90">
                Dressing little ones in comfort and joy since 2020
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-montserrat text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
              Our Mission
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Clothing That Grows With Them
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At LittleLeaves, we believe that children deserve clothing that's as 
              extraordinary as they are. We create sustainable, comfortable, and stylish 
              pieces that let kids be kids – exploring, playing, and discovering the world 
              around them.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  100% organic cotton and eco-friendly practices in everything we do.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  Comfort First
                </h3>
                <p className="text-muted-foreground">
                  Soft, gentle fabrics that feel like a hug for delicate skin.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  Quality
                </h3>
                <p className="text-muted-foreground">
                  Built to last through countless washes and endless adventures.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  Supporting parents and children in their journey together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto py-16 md:py-24 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Dress Your Little One?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Explore our collection of thoughtfully designed children's clothing.
          </p>
          <Link to="/shop">
            <Button variant="hero" size="xl">
              Shop Now
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
