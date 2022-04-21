import { useState } from "react";
import { get, create, getById, update, remove } from "../clients/recipeClient"

function useRecipeState(initialRecipes) {
    const [recipes, setRecipes] = useState(initialRecipes);
    return {
        recipes,
        getRecipes: async name => {
            setRecipes(await get({ name }));
        },
        addRecipe: async (data) => {
            await create(data);
        },
        getRecipeById: async id => {
            return await getById(id);
        },
        updateRecipe: async (id, data) => {
            await update(id, data);
        },
        deleteRecipe: async (id) => {
            await remove(id);
        }
    };
};

export default useRecipeState;
