// src/pages/MapPage.js
import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/PageStyles.css'; // Import the new CSS file

const MapPage = () => {
    return (
        <div className="page-container">
            <Navigation />
            <h1 className="page-title">Map Page</h1>
            <p><a href="/map.html" target="_blank" rel="noopener noreferrer" className="page-link">Access the map here</a></p>
        </div>
    );
};

export default MapPage;