// src/pages/RecipesPage.js
import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/PageStyles.css'; // Import the new CSS file

const RecipesPage = () => {
    return (
        <div className="page-container">
            <Navigation />
            <h1 className="page-title">Recipes Page</h1>
            <p><a href="/recipes.html" target="_blank" rel="noopener noreferrer" className="page-link">Access recipes here</a></p>
        </div>
    );
};

export default RecipesPage;