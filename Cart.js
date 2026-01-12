import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, handleRemove }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // ✅ Go to Checkout and pass cart data
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="cart-container p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">My Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is currently empty.
        </p>
      ) : (
        <div className="cart-content">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item border rounded-lg p-4 mb-4 shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.author}</p>
                <p className="text-green-700 font-bold">₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary text-center mt-6">
            <h3 className="text-2xl font-semibold mb-2">
              Total: ₹{totalPrice}
            </h3>
            <button
              onClick={handleCheckout}
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Proceed to Checkout 💳
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
