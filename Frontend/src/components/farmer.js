import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar1'; // Import the NavBar component

const Farmer = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '' // Added category field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category // Include category in formData
      };

      const response = await axios.post('/uploadProduct', formData);
      console.log(response.data);
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '' // Clear category after submission
      });
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={product.description} onChange={handleChange} required />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleChange} required max={25} />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={product.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Seafood">Sea Food</option>
        </select>

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default Farmer;
