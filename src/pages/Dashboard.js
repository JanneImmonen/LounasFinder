// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/map">Map</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/signout">Sign Out</Link>
        </nav>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-link">
          <Link to="/map">
            <img src="/map.png" alt="Map" />
            <span>Map</span>
          </Link>
        </div>
        <div className="dashboard-link">
          <Link to="/recipes">
            <img src="/recipes.png" alt="Recipes" />
            <span>Recipes</span>
          </Link>
        </div>
        <div className="dashboard-link">
          <Link to="/signout">
            <img src="/signout.png" alt="Sign Out" />
            <span>Sign Out</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
