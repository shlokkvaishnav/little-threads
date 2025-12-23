import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, ShoppingBag, Star, Minus, Plus, Truck, Shield, RefreshCw, ChevronRight, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import ProductCard from "@/components/products/ProductCard";

const productImages = [product1, product2, product3, product4];

const sizes = [
  { label: "0-3M", available: true },
  { label: "3-6M", available: true },
  { label: "6-12M", available: true },
  { label: "12-18M", available: false },
  { label: "18-24M", available: true },
  { label: "2-3Y", available: true },
];

const relatedProducts = [
  {
    id: 2,
    name: "Classic Cotton Tee & Shorts Set",
    price: 899,
    image: product2,
    category: "Boys",
    isNew: true,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Coral Ruffle Romper",
    price: 1099,
    originalPrice: 1399,
    image: product3,
    category: "Baby",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Forest Green Knit Sweater",
    price: 1499,
    image: product4,
    category: "Unisex",
    isBestseller: true,
    rating: 4.7,
  },
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">Sage Green Flutter Sleeve Dress</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                Girls • New Arrival
              </p>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sage Green Flutter Sleeve Dress
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-gold fill-gold" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.8 (124 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">₹1,299</span>
              <span className="text-xl text-muted-foreground line-through">₹1,599</span>
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                19% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Dress your little one in this adorable flutter sleeve dress made from 100% organic cotton. 
              Perfect for everyday wear or special occasions, featuring a comfortable elastic waist 
              and machine-washable fabric.
            </p>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Select Size</span>
                <button className="text-sm text-primary hover:underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.label}
                    disabled={!size.available}
                    onClick={() => setSelectedSize(size.label)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size.label
                        ? "border-primary bg-primary text-primary-foreground"
                        : size.available
                        ? "border-border hover:border-primary"
                        : "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="font-medium block mb-3">Quantity</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">Only 5 left in stock</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="iconLg"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={isWishlisted ? "text-accent border-accent" : ""}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="iconLg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over ₹999</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">15-day policy</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% secure</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
