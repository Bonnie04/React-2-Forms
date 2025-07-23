import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    publishedDate: "",
    description: "",
    rating: 1,
    category: "",
    isRead: false,
    isFavorite: false
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "fiction", "non-fiction", "poetry", "drama", "biography", 
    "history", "science", "technology", "art", "music", 
    "travel", "cooking", "gardening"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }
    
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddBook(formData);
      setFormData({
        title: "",
        author: "",
        image: "",
        publishedDate: "",
        description: "",
        rating: 1,
        category: "",
        isRead: false,
        isFavorite: false
      });
    }
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="book-form">
        
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
            placeholder="Enter book title"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Author *</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={errors.author ? 'error' : ''}
            placeholder="Enter author name"
          />
          {errors.author && <span className="error-message">{errors.author}</span>}
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>

        <div className="form-group">
          <label>Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter book description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Rating *</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={errors.rating ? 'error' : ''}
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
          {errors.rating && <span className="error-message">{errors.rating}</span>}
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group checkboxes">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isRead"
              checked={formData.isRead}
              onChange={handleChange}
            />
            I have read this book
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isFavorite"
              checked={formData.isFavorite}
              onChange={handleChange}
            />
            This is a favorite book
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;