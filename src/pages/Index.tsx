import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Product } from "@/types/product";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <ProductGrid onViewDetails={setSelectedProduct} />
        <Features />
      </main>
      <Footer />
      <CartDrawer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
