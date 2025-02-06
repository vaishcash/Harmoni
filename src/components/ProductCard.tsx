import { Product } from "../types";



interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden text-left"
    >
      <div className="aspect-square relative bg-white p-4">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-gray-900 mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </button>
  );
}
