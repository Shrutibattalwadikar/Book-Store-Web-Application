import React, { useState, useEffect } from "react";
import "./CategorySection.css";

function CategorySection() {
  const categories = [
    "Fiction",
    "Science",
    "Programming",
    "History",
    "Comics",
    "Kids",
    "Biographies",
    "Romantic",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchBooks = async () => {
      setLoading(true);

      const url = `https://openlibrary.org/search.json?subject=${selectedCategory.toLowerCase()}&limit=20`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const mappedBooks = (data.docs || []).map((doc) => ({
          id: doc.key,
          title: doc.title,
          author: doc.author_name ? doc.author_name.join(", ") : "Unknown",
          cover_id: doc.cover_i,
          googleUrl: `https://www.google.com/search?q=${encodeURIComponent(doc.title + " book")}`,
        }));

        setBooks(mappedBooks);
      } catch (err) {
        console.error("Error fetching books:", err);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [selectedCategory]);

  const getCoverUrl = (coverId) =>
    coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="category-container">
      <h2>Book Categories</h2>

      {/* Category Buttons */}
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`category-card ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            <h3>{cat}</h3>
          </div>
        ))}
      </div>

      {/* Books Section */}
      {selectedCategory && (
        <div className="books-section">
          <h3>{selectedCategory} Books</h3>

          {loading ? (
            <p>Loading books...</p>
          ) : (
            <div className="books-grid">
              {books.length > 0 ? (
                books.map((b) => (
                  <a
                    key={b.id}
                    href={b.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-card"
                  >
                    <img src={getCoverUrl(b.cover_id)} alt={b.title} className="book-cover" />
                    <p className="book-title">{b.title}</p>
                    <p className="book-author">{b.author}</p>
                  </a>
                ))
              ) : (
                <p>No books found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CategorySection;
