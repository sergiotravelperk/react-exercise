import React from "react";
import RecipeForm from '../components/RecipeForm';
import { useParams } from "react-router-dom";

function Edit() {
    const {id} = useParams()

    return <RecipeForm id={id} />
}
export default Edit;
