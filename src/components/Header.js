import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/Search';
import '../css/Header.css';

function Header({ cartCount }) {
  return (
    <div className="header-container">
      <div className="brand">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div className="search-bar">
        <Search />
      </div>
      <div className="icons">
        <div className="carticons">
            <FontAwesomeIcon icon={faCartPlus} />
            {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
        </div>
        <div className="profileicons">
            <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
