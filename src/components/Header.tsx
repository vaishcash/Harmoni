"use client";

import { useState, useRef } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
  onCategorySelect: (category: string) => void;
}

export default function Header({ cartCount, onCategorySelect }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">Fake Store</h1>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-md mx-4 relative">
          <input
            className="w-full h-9 rounded-full px-10 outline-none bg-gray-100 text-sm md:text-base"
            type="text"
            placeholder="Search for products..."
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            ref={inputRef}
          />
          <button
            onClick={() => onCategorySelect(inputRef.current?.value || "")}
            className="absolute right-3 top-2 p-1"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
          </Link>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
