import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Page Heading */}
      <h1 className="about-heading">About BookBasket.com</h1>

      {/* Intro Section */}
      <div className="intro-section">
        <img
          src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/06/19222633/19062017_JustBooksCLC_02.jpg"
          alt="BookNest Bookstore"
          className="intro-image"
        />
        <div className="intro-text">
          <p>
            Welcome to <span>BookBasket.com</span> — your go-to online bookstore for a wide range of genres. From timeless classics to modern bestsellers, we bring the joy of reading right to your fingertips.
          </p>
          <p>
            Our website provides you <span>reading opportunities</span> to explore new worlds, learn new things, and dive into amazing stories from talented authors around the globe.
          </p>
          <p>
            At BookBasket.com, we believe that every book has the power to inspire, educate, and entertain. Whether you're a student, a professional, or a passionate reader, we’ve got something for everyone.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="cards-section">
        <div className="card">
          <img
            src="https://t4.ftcdn.net/jpg/00/96/54/53/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg"
            alt="Mission"
            className="card-image"
          />
          <h2>Our Mission</h2>
          <p>To make reading accessible to everyone and inspire a lifelong love of books.</p>
        </div>

        <div className="card">
          <img
            src="https://thumbs.dreamstime.com/b/our-vision-drawn-white-brick-wall-d-inscription-modern-illustation-blue-arrow-hand-icons-around-brickwall-89018617.jpg"
            alt="Vision"
            className="card-image"
          />
          <h2>Our Vision</h2>
          <p>To become the most trusted online platform for readers to discover and purchase books worldwide.</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="cards-section">
        <div className="card">
          <img
            src="https://www.shutterstock.com/image-photo/core-values-magnifying-glass-on-600nw-2434119217.jpg"
            alt="Core Values"
            className="card-image"
          />
          <h2>Our Core Values</h2>
          <ul>
            <li>Quality and curated selection of books</li>
            <li>Customer satisfaction and support</li>
            <li>Promoting education and knowledge</li>
            <li>Supporting local and international authors</li>
            <li>Creating a friendly reading community</li>
          </ul>
        </div>

        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkwQJlYUabThvatM-PuG8QeMfN4oVHEA7qw&s"
            alt="Services"
            className="card-image"
          />
          <h2>What We Offer</h2>
          <ul>
            <li>Wide range of genres: fiction, non-fiction, academic books, self-help, etc.</li>
            <li>Online ordering and home delivery</li>
            <li>Book recommendations and reviews</li>
            <li>Special offers and discounts</li>
            <li>Membership for regular readers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
