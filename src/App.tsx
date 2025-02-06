import { useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import { CartItem, Product } from "./types";
import Footer from "./components/Footer";
import BannerCarousel from "./components/BannerCarousel";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);
  // console.log("🚀 ~ Home ~ selectedProduct:", selectedProduct);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleAddToCart = (product: Product) => {
    const currentCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];

    // Check if product already exists in cart
    const existingProductIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart: CartItem[];
    if (existingProductIndex > -1) {
      // If product exists, update its quantity
      updatedCart = currentCart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If product doesn't exist, add new product
      updatedCart = [...currentCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
    // setSelectedProduct(null);
  };

  const handleRemoveFromCart = (id: number) => {
    const currentCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];
    const updatedCart = currentCart.reduce((acc: CartItem[], product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          acc.push({ ...product, quantity: product.quantity - 1 });
        }
      } else {
        acc.push(product);
      }
      return acc;
    }, []);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
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
          onAddToCart={handleAddToCart}
          onRemoveToCart={handleRemoveFromCart}
        />
      )}
      <Footer />
    </div>
  );
}
