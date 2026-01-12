import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const navigate = useNavigate();

  const handleShopNow = () => {
    if (user) {
      // If already logged in → go to book list
      navigate("/booklist");
    } else {
      // If not logged in → go to signin first
      navigate("/signin", { state: { fromHome: true } });
    }
  };

  return (
    <div className="home-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source 
          src="https://media.istockphoto.com/id/1207745492/video/stedicam-shot-camera-moves-forward-along-shelves-filled-with-paper-books-the-huge-round.mp4?s=mp4-640x640-is&k=20&c=-7kpTeGC4T7LphcRat1Vo7ktnLWI_DNdt-1lo1FnXVk=" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="home-content">
        <h1>📚 Welcome to BookBasket.com</h1>
        <h2>Welcome to our Online Book Store</h2>
        <p>
          Discover, explore, and buy your favorite books online — from fiction to self-help,
          all in one place. Join BookNest today to experience a modern digital bookstore.
        </p>
        <button className="shop-btn" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
