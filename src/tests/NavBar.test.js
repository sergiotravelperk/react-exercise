import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";


describe('NavBar', () => {
    test('Check logo present in navbar', () => {
        const title = "title test";
        const logo = "image";

        render(
            <BrowserRouter>
                <NavBar src={logo} title={title} />
            </BrowserRouter>
        );
        const img = screen.getByLabelText('logo');
        expect(img).toBeInTheDocument();
    });
})