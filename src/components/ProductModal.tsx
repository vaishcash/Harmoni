import { useEffect, useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import { Product, CartItem } from "../types";

interface ProductModalProps {
  product: CartItem;
  onClose: () => void;
  onAddToCart: (cartItem: Product) => void;
  onRemoveToCart: (id: number) => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onRemoveToCart,
}: ProductModalProps) {
  const cartData: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const [quantity, setQuantity] = useState(
    cartData.find((item) => item.id === product.id)?.quantity || 0
  );
  useEffect(() => {
    setQuantity(cartData.find((item) => item.id === product.id)?.quantity || 0);
  }, [cartData]);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      quantity,
    };
    onAddToCart(cartItem);
    // onClose();
  };

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
            {product.description}
          </p>
        </div>

        {/* Price, Quantity & Button */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => onRemoveToCart(product.id)}
                className="p-2 border-r hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleAddToCart}
                className="p-2 border-l hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
