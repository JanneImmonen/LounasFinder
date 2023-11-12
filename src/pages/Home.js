// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to LounasFinder</h1>
      <p>Discover and share the best lunch spots in town.</p>
      <div className="auth-links">
        <Link to="/signin" className="btn btn-primary">Sign In</Link>
        <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
