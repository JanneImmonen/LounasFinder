// src/components/Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Dashboard.css'; // Import the CSS file for styling

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="dashboard-nav">
            {location.pathname !== '/dashboard' && <Link to="/dashboard">Dashboard</Link>}
            {location.pathname !== '/map' && <Link to="/map">Map</Link>}
            {location.pathname !== '/recipes' && <Link to="/recipes">Recipes</Link>}
            {location.pathname !== '/signout' && <Link to="/signout">Sign Out</Link>}
        </nav>
    );
};

export default Navigation;