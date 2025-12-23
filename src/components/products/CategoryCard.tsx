import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
  productCount?: number;
}

const CategoryCard = ({ name, image, href, productCount }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="category-overlay absolute inset-0 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-card mb-1 transition-transform duration-300 group-hover:-translate-y-1">
          {name}
        </h3>
        {productCount && (
          <p className="text-card/80 text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {productCount} Products
          </p>
        )}
        <div className="mt-4 inline-block opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-card text-sm font-montserrat font-semibold uppercase tracking-wide border-b-2 border-card pb-1">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
