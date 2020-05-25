import {useState} from 'react';

function useToggleState(initialState = false) {
    const [isToggled, changeToggleState] = useState(initialState);
    const toggleState = function() {
        changeToggleState(!isToggled);
    }
    
    return [isToggled, toggleState];
}

export default useToggleState;