import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';
import Header from '../components/Header'

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts(response.data);
      setSelectedCategory(category);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const toggleProductsVisibility = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setProducts([]);
    } else {
      fetchProductsByCategory(category);
    }
  };


  return (
    <div>
        <div>
            <Header />
        </div>
      <h1>All Categories</h1>
      <div className='row'>
        <ul>
            {categories.map(category => (
                <li key={category}>
                    <button onClick={() => toggleProductsVisibility(category)}>
                    {category}
                    </button>
                </li>
                ))}
        </ul>
      </div>
      
      {selectedCategory && (
            <div>
                <h2>{selectedCategory} Products</h2>
                <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.title} />
                    <div className="product-details">
                      <p className="product-title">{product.title}</p>
                      <p className="product-price">${product.price}</p>
                      <div className="product-rating">
                        Rating: {product.rating.rate} ({product.rating.count} reviews)
                      </div>
                      <Link to={{ pathname: `/products/${product.id}`, state: { product: product } }} className="view-details">
                        View Details
                      </Link>

                     </div>
                   </div>
                ))}
                </div>
            </div>
        )}

    </div>
  );
};

export default Home;
