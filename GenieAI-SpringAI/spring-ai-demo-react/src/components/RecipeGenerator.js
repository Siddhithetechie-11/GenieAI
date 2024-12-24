import React, { useState } from "react";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");
  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`
      );
      const data = await response.text();
      setRecipe(data);
    } catch (e) {
      console.log("Error generating recipe : " + e);
    }
  };
  return (
    <div>
      <h2>Recipe Generator!</h2>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (comma seperated)"
      />
      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine"
      />
      <input
        type="text"
        value={dietaryRestrictions}
        onChange={(e) => setDietaryRestrictions(e.target.value)}
        placeholder="Enter dietary Restrictions"
      />
      <button onClick={createRecipe}>Create Recipe</button>
      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
};

export default RecipeGenerator;
