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
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-square relative bg-white mb-6">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="object-contain p-4"
            />
          </div>

          <p className="text-gray-600 mb-6">
            {fullProduct?.description || product.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={onAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
