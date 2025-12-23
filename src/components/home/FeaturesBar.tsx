import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹999",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment methods",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "15-day hassle-free returns",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer support",
  },
];

const FeaturesBar = () => {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-4"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
