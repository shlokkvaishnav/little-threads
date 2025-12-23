import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
  rating?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isBestseller,
  isNew,
  rating = 4.5,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="product-image-container bg-muted">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        
        {/* Badges */}
        {isBestseller && (
          <div className="badge-bestseller flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            <span>Bestseller</span>
          </div>
        )}
        {isNew && !isBestseller && <div className="badge-new">New</div>}
        {discount > 0 && !isNew && !isBestseller && (
          <div className="badge-sale">-{discount}%</div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all duration-200 ${
            isWishlisted
              ? "bg-accent text-accent-foreground"
              : "bg-card/80 text-foreground hover:bg-card"
          }`}
        >
          <Heart
            className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`}
          />
        </button>

        {/* Hover Actions */}
        <div
          className={`absolute inset-0 bg-foreground/10 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link to={`/product/${id}`}>
            <Button variant="icon" size="icon" className="bg-card hover:bg-card shadow-lg">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="default" size="icon" className="shadow-lg">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? "text-gold fill-gold"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
