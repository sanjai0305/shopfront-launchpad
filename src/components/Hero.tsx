import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
              New Collection 2026
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
              Timeless
              <br />
              <span className="text-accent">Craftsmanship</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover our curated selection of thoughtfully designed essentials. 
              Each piece tells a story of quality materials and expert artistry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={scrollToProducts}>
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Lookbook
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Featured collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-card rounded-sm">
              <p className="text-sm text-muted-foreground mb-1">Starting from</p>
              <p className="font-heading text-3xl font-semibold">$45</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
