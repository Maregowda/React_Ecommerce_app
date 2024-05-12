import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
