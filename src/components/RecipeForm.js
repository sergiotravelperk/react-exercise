import React, { useState, useEffect } from "react";
import { FormRecipeContainer, FormWrapper, FormListItem, FormButton } from './Common';
import useInput from "../hooks/useInputState";
import { FaTrash, FaPlus } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import useRecipeState from "../hooks/useRecipeState";

function RecipeForm(params) {
  const id = params.id;
  const [name, handleNameChange, resetName, setName] = useInput('');
  const [description, handleDescriptionChange, resetDescription, setDescription] = useInput('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient, cleanNewIngredient] = useInput("");
  const [disabled, setDisabled] = useState(true);
  const { addRecipe, getRecipeById, updateRecipe } = useRecipeState([]);
  let navigate = useNavigate();

  function removeIngredient(id) {
    let updatedIngredients = [...ingredients];
    updatedIngredients.splice(id, 1);
    setIngredients(updatedIngredients);
  }

  function addIngredient(e) {
    if (newIngredient && newIngredient !== "") {
      setIngredients([...ingredients, newIngredient])
      cleanNewIngredient();
    }
  }

  async function loadRecipe() {
    const data = await getRecipeById(id);
    const recipeIngredients = data.ingredients.map(function (ingredient) {
      return ingredient.name
    });
    setIngredients(recipeIngredients);
    setName(data.name);
    setDescription(data.description);
  }

  useEffect(() => {
    if (id) {
      loadRecipe()
    }
  }, [id]);

  useEffect(() => {    
      setDisabled(!(name !== "" && description !== "" && ingredients.length > 0));    
  }, [name, description, ingredients]);

  async function save(e) {
    e.preventDefault();

    let data = {
      name: name,
      description: description,
      ingredients: (ingredients.map(function (ingredient) {
        return { name: ingredient }
      }))
    };

    if (id) {
      await updateRecipe(id, data);
    } else {
      await addRecipe(data);
    }

    navigate("/");
  }

  return (
    <FormRecipeContainer>
      <form onSubmit={save}>
        <h3 htmlFor="id">{id ? "Edit Recipe" : "Create Recipe"}</h3>
        <FormWrapper>
          <label htmlFor="name">Name</label>
          <input onChange={handleNameChange} value={name} maxLength="255" />
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="description">Description</label>
          <input onChange={handleDescriptionChange} value={description} />
        </FormWrapper>
        <FormWrapper>
          <label >Ingredients</label>
          {ingredients.length > 0 && ingredients.map(function (ingredient, id) {
            return (
              <FormListItem key={id}>
                {ingredient}
                <FaTrash className="item-icon" onClick={() => removeIngredient(id)} />
              </FormListItem>
            )
          })}
          <div className="item-add">
            <input onChange={setNewIngredient} value={newIngredient} />&nbsp;&nbsp;
            <FaPlus className="item-icon" onClick={addIngredient} />
          </div>
        </FormWrapper>
        <FormWrapper>
          <FormButton disabled={disabled}>Save</FormButton>
        </FormWrapper>
      </form>
    </FormRecipeContainer>
  );
}
export default RecipeForm;