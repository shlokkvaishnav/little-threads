import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Absolutely love the quality! My daughter lives in these dresses. The fabric is so soft and the colors don't fade even after multiple washes.",
    avatar: "P",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    comment:
      "Best children's clothing brand I've found. Great sizing, fast delivery, and amazing customer service. Highly recommend!",
    avatar: "R",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    comment:
      "The sustainable approach really matters to me. These clothes are not just beautiful but also kind to the planet. My kids adore them!",
    avatar: "A",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-montserrat text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
            Happy Parents
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-sage/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
