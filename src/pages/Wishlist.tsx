import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, ShoppingBag, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product4 from "@/assets/products/product-4.jpg";

const initialWishlist = [
  {
    id: 1,
    name: "Sage Green Flutter Sleeve Dress",
    price: 1299,
    originalPrice: 1599,
    image: product1,
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Cotton Tee & Shorts Set",
    price: 899,
    image: product2,
    inStock: true,
  },
  {
    id: 4,
    name: "Forest Green Knit Sweater",
    price: 1499,
    image: product4,
    inStock: false,
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">Wishlist</span>
        </nav>

        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
          My Wishlist ({wishlistItems.length})
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Start adding items you love to your wishlist.
            </p>
            <Link to="/shop">
              <Button variant="hero">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden shadow-sm group"
              >
                <div className="relative aspect-[4/5] bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-card/90 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                      <span className="px-4 py-2 bg-card rounded-full font-medium">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-medium text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-primary">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    disabled={!item.inStock}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
