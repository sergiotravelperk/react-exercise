import React, { useState, useEffect } from "react";
import RecipeList from '../components/RecipeList';
import SearchBar from '../components/SearchBar';
import useRecipeState from "../hooks/useRecipeState";

function Home() {
  const [name, setName] = useState("")
  const { recipes, getRecipes } = useRecipeState([]);

  async function loadRecipes() {
    await getRecipes(name);
  }

  useEffect(() => {
    loadRecipes();
  }, [name]);

  return (
    <>
      <SearchBar search={(filterText) => setName(filterText)} />
      <RecipeList recipes={recipes} refresh={loadRecipes} />
    </>
  );
}
export default Home;
