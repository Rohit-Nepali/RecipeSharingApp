import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Fetch recipes from API or use static data
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/getRecipe'); // Replace with your API URL
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  // Update filtered recipes as the user types
  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 mx-1 py-2 border rounded-lg mr-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <svg
        className="w-5 h-5 absolute left-3 top-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Display suggestions */}
      {searchTerm && filteredRecipes.length > 0 && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log(`Selected: ${recipe.name}`)} // Handle selection
            >
              {recipe.name}
            </div>
          ))}
        </div>
      )}

      {/* Optionally, show "No results found" message */}
      {searchTerm && filteredRecipes.length === 0 && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg p-2 text-gray-500">
          No recipes found.
        </div>
      )}
    </div>
  );
}

export default SearchBar;
