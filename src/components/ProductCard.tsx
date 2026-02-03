import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-muted rounded-sm mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Actions Overlay */}
        <div
          className={`absolute inset-0 bg-foreground/5 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-full shadow-card"
            onClick={() => onViewDetails(product)}
          >
            <Eye className="h-5 w-5" />
          </Button>
          <Button
            variant="cart"
            size="icon"
            className="h-12 w-12 rounded-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-heading text-lg font-medium">{product.name}</h3>
        <p className="text-muted-foreground font-medium">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
