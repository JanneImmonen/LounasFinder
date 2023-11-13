// src/pages/RecipesPage.js
import React, { useState, useEffect, useCallback } from 'react';
import Navigation from '../components/Navigation';
import '../styles/PageStyles.css';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Corrected
    const [error, setError] = useState(null); // Corrected

    const fetchAreas = async () => {
        // Implement fetch logic for areas
        // Example:
        // const response = await fetch('URL_FOR_AREAS');
        // const data = await response.json();
        // setAreas(data.areas);
    };

    const fetchCategories = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (!response.ok) throw new Error('Something went wrong!');
            const data = await response.json();
            setCategories(data.categories);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    const fetchRecipes = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            let url = `https://www.themealdb.com/api/json/v1/1/filter.php?`;
            if (filter) url += `a=${filter}`;
            if (categoryFilter) url += `c=${categoryFilter}`;

            const response = await fetch(url);
            if (!response.ok) throw new Error('Something went wrong!');
            const data = await response.json();
            setRecipes(data.meals);
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, [filter, categoryFilter]);

    useEffect(() => {
        fetchAreas();
        fetchCategories();
    }, []);

    useEffect(() => {
        if (filter || categoryFilter) {
            fetchRecipes();
        }
    }, [filter, categoryFilter, fetchRecipes]);

    const handleAreaFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleCategoryFilterChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    return (
        <div className="page-container">
            <Navigation />
            <h1 className="page-title">Recipes Page</h1>
            <p>Discover a world of flavors with our diverse collection of recipes. Choose a region or category to find your next culinary adventure!</p>
            {/* Display loading message */}
            {isLoading && <p>Loading...</p>}
            {/* Display error message */}
            {error && <p>Error: {error}</p>}
            {/* Area Filter Dropdown */}
            <select className="select-dropdown" onChange={handleAreaFilterChange} value={filter}>
                <option value="">Select Area</option>
                {/* Add options for each area */}
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Canadian">Canadian</option>
                <option value="Chinese">Chinese</option>
                <option value="Dutch">Dutch</option>
                <option value="Egyptian">Egyptian</option>
                <option value="French">French</option>
                <option value="Greek">Greek</option>
                <option value="Indian">Indian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Jamaican">Jamaican</option>
                <option value="Japanese">Japanese</option>
                <option value="Kenyan">Kenyan</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Mexican">Mexican</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Russian">Russian</option>
                <option value="Spanish">Spanish</option>
                <option value="Thai">Thai</option>
                <option value="Tunisian">Tunisian</option>
                <option value="Turkish">Turkish</option>
                <option value="Unknown">Unknown</option>
                <option value="Vietnamese">Vietnamese</option>
            </select>
    
            {/* Category Filter Dropdown */}
            <select className="select-dropdown" onChange={handleCategoryFilterChange} value={categoryFilter}>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.idCategory} value={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>
    
            {/* Recipes Grid */}
            <div className="recipes-grid">
                {recipes && recipes.map(recipe => (
                    <div key={recipe.idMeal} className="recipe-card">
                        <h3>{recipe.strMeal}</h3>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        {/* You can add more recipe details here */}
                    </div>
                ))}
            </div>
    
            <img src="/recipes.png" alt="recipes" className="page-image" />
        </div>
    );
};

export default RecipesPage;