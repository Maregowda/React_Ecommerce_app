import React, { useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce'; // Import debounce from lodash
import '../css/Search.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async (term) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?title=${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const debouncedSearch = debounce(fetchSearchResults, 500);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);

    // Show or hide search results based on input value
    if (term.trim() === '') {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((product) => (
            <div key={product.id} className="search-result">
              <Link to={{ pathname: `/products/${product.id}`, state: { product: product } }} className="view-details" onClick={handleSearchResultClick}>
                {product.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
