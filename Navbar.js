import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, setUser }) {
  return (
    <nav>
      <h2>BookBasket.com</h2>

      <div className="nav-links">

        {/* Public Links */}
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/categories">Categories</Link>

        {/* If user NOT logged in */}
        {!user ? (
          <>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            {/* Logged-in Links */}
            <Link to="/booklist">Books</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/myorders">My Orders</Link>
            <Link to="/admindashboard">Admin</Link>

            <button
              onClick={() => setUser(null)}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
