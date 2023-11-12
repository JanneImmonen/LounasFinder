// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/map">Map</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/signout">Sign Out</Link> {/* Added Sign Out link */}
        </nav>
      </header>
      <main className="dashboard-main">
        {/* Main content can be added here */}
      </main>
    </div>
  );
};

export default Dashboard;
