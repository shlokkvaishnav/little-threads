import CategoryCard from "@/components/products/CategoryCard";
import girlsImage from "@/assets/categories/girls.jpg";
import boysImage from "@/assets/categories/boys.jpg";
import babyImage from "@/assets/categories/baby.jpg";

const categories = [
  {
    name: "Girls",
    image: girlsImage,
    href: "/shop?category=girls",
    productCount: 245,
  },
  {
    name: "Boys",
    image: boysImage,
    href: "/shop?category=boys",
    productCount: 198,
  },
  {
    name: "Baby",
    image: babyImage,
    href: "/shop?category=baby",
    productCount: 156,
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Find the perfect outfit for your little one. Browse our curated collections.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
