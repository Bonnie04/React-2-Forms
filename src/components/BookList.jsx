import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return (
      <div className="book-list">
        <h2>My Books</h2>
        <p className="no-books">No books added yet. Add your first book above!</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      <h2>My Books ({books.length})</h2>
      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;