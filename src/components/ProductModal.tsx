import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { X, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-sm shadow-elevated max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mt-2 mb-4">
              {product.name}
            </h2>
            <p className="text-2xl font-medium text-accent mb-6">
              ${product.price}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-accent" />
                <span>Handcrafted with care</span>
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
