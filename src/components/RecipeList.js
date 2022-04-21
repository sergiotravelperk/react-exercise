import React from "react";
import { RecipeContainer, Divider } from './Common';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, refresh }) {
    return (
      <RecipeContainer>
          {recipes && recipes.map((recipe, i) => (
            <React.Fragment key={i}>
                <RecipeItem
                    recipe = {recipe}
                    refreshList = {refresh}
                />
                {i < recipes.length - 1 && <Divider />}
            </React.Fragment>
          ))}
      </RecipeContainer>
    );
}
export default RecipeList;
