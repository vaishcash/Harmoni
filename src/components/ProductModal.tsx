"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Product } from "../types";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [loading, setLoading] = useState(true);
  const [fullProduct, setFullProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFullProduct(data);
        setLoading(false);
      });
  }, [product.id]);

  if (loading) {
    return <>...Loading</>;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[75vh] p-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="text-md font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center mt-4">
          <div className="aspect-square bg-white flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="object-contain h-28 w-28"
            />
          </div>

          <p className="text-gray-600 text-sm mt-2 text-center line-clamp-2">
            {fullProduct?.description || product.description}
          </p>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={onAddToCart}
            className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
