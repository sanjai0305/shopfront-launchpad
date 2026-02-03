import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  onViewDetails: (product: Product) => void;
}

const ProductGrid = ({ onViewDetails }: ProductGridProps) => {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-3">
            Curated Collection
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Carefully selected pieces designed to last, crafted with intention and care.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
