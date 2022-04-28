import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";


describe('Search Bar', () => {
    test('Call search function when submitting', () => {
        const mockFilterRecipeFn = jest.fn();

        render(<SearchBar search={mockFilterRecipeFn} />);

        const form = screen.getByLabelText('search-bar');        
        const input = screen.getByLabelText('search-input');
        const filterText = "test";
        fireEvent.change(input, { target: { value: filterText } })
        fireEvent.submit(form)

        expect(mockFilterRecipeFn).toHaveBeenCalledTimes(1)
        expect(mockFilterRecipeFn).toBeCalledWith(filterText)
    });
})