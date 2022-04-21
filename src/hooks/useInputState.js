import { useState } from "react";
function useInputSate(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    const setVal = (val) => {
        setValue(val)
    }
    return [value, handleChange, reset, setVal];
};

export default useInputSate;
