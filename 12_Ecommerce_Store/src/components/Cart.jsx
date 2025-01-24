import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4 border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            className="border rounded p-1 w-16 mr-2"
          />
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white py-1 px-3 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
