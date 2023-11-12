// src/pages/MapPage.js
import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/PageStyles.css'; // Import the new CSS file

const MapPage = () => {
    return (
        <div className="page-container">
            <Navigation />
            <h1 className="page-title">Map Page</h1>
            <p>Explore our interactive map to discover nearby places, view detailed information about locations, and read user reviews. Click the link below to access the map and start your exploration!</p>
            <p><a href="/map.html" target="_blank" rel="noopener noreferrer" className="page-link">Access the map here</a></p>
            <img src="/map.png" alt="map" className="page-image" />
        </div>
    );
};

export default MapPage;
