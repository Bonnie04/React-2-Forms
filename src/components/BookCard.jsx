import React from "react";

const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="book-card">
      {book.image && (
        <img src={book.image} alt={book.title} className="book-image" />
      )}
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        
        <div className="book-rating">
          {renderStars(parseInt(book.rating))} ({book.rating}/5)
        </div>
        
        {book.category && (
          <span className="book-category">{book.category}</span>
        )}
        
        {book.description && (
          <p className="book-description">{book.description}</p>
        )}
        
        {book.publishedDate && (
          <p className="book-date">Published: {book.publishedDate}</p>
        )}
        
        <div className="book-badges">
          {book.isRead && <span className="badge read">Read ✓</span>}
          {book.isFavorite && <span className="badge favorite">Favorite ❤️</span>}
        </div>
      </div>
    </div>
  );
};

export default BookCard;