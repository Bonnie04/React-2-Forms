import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook onAddBook={addBook} />
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);