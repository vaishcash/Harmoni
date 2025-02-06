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
// "use client";

// import { useState } from "react";
// import { X, Minus, Plus } from "lucide-react";

// interface ProductCardProps {
//   product: {
//     image: string;
//     title: string;
//     price: number;
//     description: string;
//     stock: boolean;
//     reviews: number;
//   };
//   onClose: () => void;
// }

// export default function ProductCard({ product, onClose }: ProductCardProps) {
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full flex p-6">
//         {/* Image Section */}
//         <div className="w-1/2">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="rounded-lg object-cover w-full h-full"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-1/2 pl-4 flex flex-col justify-between">
//           {/* Title & Close Button */}
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">{product.title}</h2>
//             <button
//               onClick={onClose}
//               className="p-2 hover:bg-gray-200 rounded-full transition"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Ratings & Stock Status */}
//           <div className="text-sm text-gray-500 flex items-center gap-2">
//             ⭐⭐⭐⭐⭐ <span>({product.reviews} Reviews)</span>
//             <span className={product.stock ? "text-green-500" : "text-red-500"}>
//               {product.stock ? "In Stock" : "Out of Stock"}
//             </span>
//           </div>

//           {/* Price */}
//           <p className="text-2xl font-bold text-gray-900">
//             ${product.price.toFixed(2)}
//           </p>

//           {/* Short Description */}
//           <p className="text-sm text-gray-600 line-clamp-2">
//             {product.description}
//           </p>

//           {/* Quantity & Buy Now Button */}
//           <div className="flex items-center gap-4 mt-4">
//             <div className="flex items-center border rounded-lg">
//               <button
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                 className="p-2 border-r hover:bg-gray-100"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 onClick={() => setQuantity((q) => q + 1)}
//                 className="p-2 border-l hover:bg-gray-100"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>

//             <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
