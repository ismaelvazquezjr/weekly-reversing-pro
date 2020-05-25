import {useState} from "react";

function useInputState(initialState = "") {
    const [textState, changeTextState] = useState(initialState);

    function handleTextChange(e) {
        changeTextState(e.target.value);
    }

    return [textState, handleTextChange];
}

export default useInputState;