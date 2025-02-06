import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { CartItem } from "../types";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.length}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-6 border-b border-gray-200 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-grow ml-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-lg font-semibold">
                      ${item.price} x {item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Total</h2>
                <p className="text-2xl font-bold">${calculateTotal()}</p>
              </div>
              <button
                className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => alert("Checkout functionality coming soon!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
