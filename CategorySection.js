import React, { useState } from "react";
import "./CategorySection.css";

function CategorySection() {
  const categories = [
    "Fiction",
    "Science",
    "Programming",
    "History",
    "Comics",
    "Kids Books",
    "Biographies",
    "Romantic",
  ];

  // Books database with Google search URL
  const booksData = {
    Fiction: [
      { title: "The Alchemist", price: 299, url: "https://www.google.com/search?q=The+Alchemist+book" },
      { title: "Harry Potter", price: 599, url: "https://www.google.com/search?q=Harry+Potter+book" },
    ],
    Science: [
      { title: "A Brief History of Time", price: 450, url: "https://www.google.com/search?q=A+Brief+History+of+Time+book" },
      { title: "Astrophysics for People in a Hurry", price: 380, url: "https://www.google.com/search?q=Astrophysics+for+People+in+a+Hurry+book" },
    ],
    Programming: [
      { title: "JavaScript Guide", price: 550, url: "https://www.google.com/search?q=JavaScript+Guide+book" },
      { title: "React for Beginners", price: 620, url: "https://www.google.com/search?q=React+for+Beginners+book" },
    ],
    History: [
      { title: "World War II", price: 399, url: "https://www.google.com/search?q=World+War+II+book" },
      { title: "History of India", price: 480, url: "https://www.google.com/search?q=History+of+India+book" },
    ],
    Comics: [
      { title: "Marvel Avengers", price: 250, url: "https://www.google.com/search?q=Marvel+Avengers+comic" },
      { title: "Batman Origins", price: 300, url: "https://www.google.com/search?q=Batman+Origins+comic" },
    ],
    "Kids Books": [
      { title: "Fairy Tales", price: 150, url: "https://www.google.com/search?q=Fairy+Tales+book" },
      { title: "Jungle Book", price: 200, url: "https://www.google.com/search?q=Jungle+Book" },
    ],
    Biographies: [
      { title: "Elon Musk", price: 499, url: "https://www.google.com/search?q=Elon+Musk+biography+book" },
      { title: "APJ Abdul Kalam", price: 350, url: "https://www.google.com/search?q=APJ+Abdul+Kalam+biography+book" },
    ],
    Romantic: [
      { title: "The Fault in Our Stars", price: 299, url: "https://www.google.com/search?q=The+Fault+in+Our+Stars+book" },
      { title: "It Ends With Us", price: 350, url: "https://www.google.com/search?q=It+Ends+With+Us+book" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="category-container">
      <h2>Book Categories</h2>

      {/* Category List */}
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => setSelectedCategory(cat)}
          >
            <h3>{cat}</h3>
          </div>
        ))}
      </div>

      {/* Show books when clicking a category */}
      {selectedCategory && (
        <div className="books-section">
          <h3>{selectedCategory} Books</h3>

          <div className="books-grid">
            {booksData[selectedCategory].map((book, idx) => (
              <a
                key={idx}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="book-card"
              >
                <p className="book-title">{book.title}</p>
                <p className="book-price">₹ {book.price}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategorySection;
