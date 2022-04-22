import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecipeList from "../components/RecipeList";

it("renders correctly", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <RecipeList
                recipes={[{
                    'id': '1', 'test': 'test recipe',
                    'ingredients': [{ 'name': 'test' }]
                }]}
                refresh={() => { }}
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});