import React from "react";
import { useLocation } from "react-router-dom";
import "./MyOrders.css";

function MyOrders() {
  const location = useLocation();
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  return (
    <div className="orders-container p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">My Orders 📦</h1>

      {location.state?.orderSuccess && (
        <p className="text-green-600 text-lg mb-4 font-semibold">
          🎉 Thank you for your order! Your books will be delivered soon.
        </p>
      )}

      {orders.length === 0 ? (
        <p>No past orders yet.</p>
      ) : (
        <div className="order-list max-w-3xl mx-auto">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-4 mb-4 rounded shadow text-left bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">
                Order #{order.id}
              </h2>
              <p>Date: {order.date}</p>
              <p>Address: {order.address}</p>
              <p>Payment: {order.payment}</p>
              <p className="font-bold mt-2">Total: ₹{order.total}</p>

              <div className="mt-3">
                <h3 className="font-semibold">Books Ordered:</h3>
                <ul className="list-disc ml-6">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.title} × {item.quantity} — ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
