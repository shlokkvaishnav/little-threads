import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Sage Green Flutter Sleeve Dress",
    price: 1299,
    originalPrice: 1599,
    image: product1,
    category: "Girls",
    isBestseller: true,
    rating: 4.8,
  },
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

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="font-montserrat text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
              Handpicked for You
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              New Arrivals
            </h2>
          </div>
          <Link to="/shop?filter=new">
            <Button variant="link" className="text-primary font-semibold">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
