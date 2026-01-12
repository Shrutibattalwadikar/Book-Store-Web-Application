import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart || [];

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    if (!address || !payment) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Save order data to localStorage (for MyOrders)
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      address,
      payment,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    navigate("/myorders", { state: { orderSuccess: true } });
  };

  return (
    <div className="checkout-container p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout 💳</h1>

      <form
        onSubmit={handleOrder}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-semibold mb-3">Delivery Address</h2>
        <textarea
          className="w-full border p-2 rounded mb-4"
          rows="3"
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
        <select
          className="w-full border p-2 rounded mb-4"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">-- Select Payment --</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>

        <div className="text-lg font-semibold mb-4">
          Total Amount: ₹{total}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
        >
          Place Order ✅
        </button>
      </form>
    </div>
  );
}

export default Checkout;
