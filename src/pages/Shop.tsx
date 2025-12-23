import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Filter, SlidersHorizontal, ChevronDown, X, Grid3X3, LayoutGrid } from "lucide-react";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";

const allProducts = [
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
  {
    id: 5,
    name: "Floral Print Summer Dress",
    price: 1199,
    image: product1,
    category: "Girls",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Striped Polo & Chino Set",
    price: 1349,
    originalPrice: 1699,
    image: product2,
    category: "Boys",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Organic Cotton Onesie Pack",
    price: 799,
    image: product3,
    category: "Baby",
    isBestseller: true,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Cozy Fleece Hoodie",
    price: 1099,
    image: product4,
    category: "Unisex",
    isNew: true,
    rating: 4.6,
  },
];

const categories = ["All", "Girls", "Boys", "Baby", "Unisex"];
const sortOptions = ["Featured", "Newest", "Price: Low to High", "Price: High to Low", "Best Rating"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState(4);

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-primary">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of adorable children's clothing
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* Desktop Category Filters */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Results Count */}
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 pl-4 pr-10 rounded-lg bg-card border border-border text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>

            {/* Grid Toggle */}
            <div className="hidden md:flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 rounded-md transition-colors ${
                  gridCols === 3 ? "bg-card shadow-sm" : "hover:bg-card/50"
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 rounded-md transition-colors ${
                  gridCols === 4 ? "bg-card shadow-sm" : "hover:bg-card/50"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="lg:hidden mb-6 p-4 bg-muted rounded-xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            gridCols === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
