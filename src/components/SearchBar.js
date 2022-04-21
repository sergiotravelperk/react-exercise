import React from "react";
import useInput from "../hooks/useInputState";
import { SearchContainer, SearchInput } from "./Common";

function SearchBar(props) {
    const [value, setValue] = useInput('')

    function filterRecipe(e) {
        e.preventDefault()
        props.search(value)
    }

    return (
        <SearchContainer>
            <form aria-label="search-bar" onSubmit={filterRecipe}>
                <SearchInput type={"text"} onChange={setValue} value={value} placeholder="Search recipes..."/>
            </form>
        </SearchContainer>
    )
}

export default SearchBar;