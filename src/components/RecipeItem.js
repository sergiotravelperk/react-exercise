import React from "react";
import { RecipeItemContainer } from './Common';
import { arrayToString } from '../utils';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import useRecipeState from "../hooks/useRecipeState";

function RecipeItem({ recipe, refreshList }) {
  let navigate = useNavigate();
  const { deleteRecipe } = useRecipeState([]);

  async function removeRecipe(id) {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await deleteRecipe(id);
      refreshList();
    }
  }

  return (
    <RecipeItemContainer>
      <div className="header">
        <span>{recipe.name}</span>
        <div className="icons">
          <FaEdit className="icon" onClick={() => navigate(`/edit/${recipe.id}`)} />
          <FaTrash className="icon" onClick={() => removeRecipe(recipe.id)} />
        </div>
      </div>
      <div className="content">
        <p>
          {recipe.description}
          {recipe.ingredients.length > 0 &&
            <>
              <br /><br />
              <b>Ingredients</b>
              <br /><br />
              {arrayToString(recipe.ingredients)}
            </>}
        </p>
      </div>
    </RecipeItemContainer>
  );
}
export default RecipeItem;
