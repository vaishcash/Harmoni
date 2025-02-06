"use client";

import { useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import { Product } from "./types";
import Footer from "./components/Footer";
import BannerCarousel from "./components/BannerCarousel";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleAddToCart = (product : Product) => {
    setCartCount((prev) => prev + 1);
    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cart") || "[]"),
        product,
      ])
    );
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <BannerCarousel />
      <main className="container mx-auto px-4 py-8">
        <ProductGrid
          category={selectedCategory}
          onProductSelect={setSelectedProduct}
        />
      </main>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}

          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
      <Footer />
    </div>
  );
}
