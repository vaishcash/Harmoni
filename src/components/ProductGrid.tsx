import { useEffect, useState } from "react";
import { CartItem, Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  category: string;
  onProductSelect: (product: CartItem) => void;
}

export default function ProductGrid({
  category,
  onProductSelect,
}: ProductGridProps) {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => res.json())
      .then((data: Product[]) => {
        // local storage
        const currentCart = JSON.parse(
          localStorage.getItem("cart") || "[]"
        ) as CartItem[];

        setProducts(
          data.map((product) => {
            const existingProduct = currentCart.find(
              (item) => item.id === product.id
            );
            return existingProduct || { ...product, quantity: 0 };
          })
        );

        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 rounded-lg aspect-square mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductSelect(product)}
        />
      ))}
    </div>
  );
}
