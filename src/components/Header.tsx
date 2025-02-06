"use client";

import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export default function Header({
  cartCount,
  onCategorySelect,
  selectedCategory,
}: HeaderProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Fake Store</h1>

        <div className=" flex items-center justify-center gap-4">
          <div>
            <div>
              <div className="flex items-center gap-4">
                <ol className="flex items-center text-gray-600 text-sm gap-4">
                  <Link to="/">HOME</Link>
                  <Link to="/women">WOMEN</Link>
                  <Link to="/men">MEN</Link>
                  <Link to="/kids">KIDS</Link>
                </ol>

                <input
                  className="w-full h-9 ml-2 rounded-full px-14 outline-none bg-gray-300"
                  type="text"
                  placeholder="Search for products, brands and more"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  ref={inputRef}
                />

                <button
                  onClick={() => {
                    onCategorySelect(inputRef.current?.value || "");
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategorySelect(category);
                      setIsSearchOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors",
                      selectedCategory === category && "bg-gray-100"
                    )}
                  >
                    {category}
                  </button>
                ))}
                {selectedCategory && (
                  <button
                    onClick={() => {
                      onCategorySelect("");
                      setIsSearchOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <Link to="/cart">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <img src=""></img>
      </div>
    </header>
  );
}


