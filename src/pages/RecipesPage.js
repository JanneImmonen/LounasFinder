// src/pages/RecipesPage.js
import React from 'react';

const RecipesPage = () => {
  return (
    <div>
      <h1>Recipes Page</h1>
      {/* Update the href to point directly to recipes.html */}
      <p>Access recipes <a href="/recipes.html" target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>
  );
};

export default RecipesPage;
