// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Ensure you have the Home.css file with styles

const Home = () => {
  return (
    <div className="home-container text-center">
      <h1 className="display-3">Welcome to LounasFinder</h1>
      <p className="lead">Discover and share the best lunch spots in town.</p>
      <hr className="my-4" />
      <p>Join now and start exploring the best places to eat around you.</p>
      <div className="auth-links">
        <Link to="/signin" className="btn btn-primary btn-lg m-2">Sign In</Link>
        <Link to="/signup" className="btn btn-secondary btn-lg m-2">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
