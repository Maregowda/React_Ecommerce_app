import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css';
import Header from './Header';



const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
      setCartCount(precartCount => precartCount + 1);
    };
    console.log("This in prodcntrl "+cartCount);
    useEffect(() => {
        const fetchProductById = async () => {
          try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchProductById();
      }, [id]);

  if (!product) {
    return <div>Error: Product data not found</div>;
  }

  return (
    <div>
        <Header cartCount={cartCount}/>
        <div className="product-detail">
        <div className="product-image">
        <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
            Description: {product.description}
        </div>
        <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
        </div>
    </div>
  </div>
  );
};

export default ProductDetail;
