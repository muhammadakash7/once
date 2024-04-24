import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export default function Home () {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = async () => {
    try {
      const response = await axios.get("http://localhost:5000/recipes");
      console.log(response.data)
      setRecipes(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  // const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      <h1>Recipes</h1>
      <button
                onClick={() => saveRecipe()}
                // disabled={isRecipeSaved(recipe._id)}
              >Get Data
                {/* {isRecipeSaved(recipe._id) ? "Saved" : "Save"} */}
              </button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};