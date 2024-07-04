import React, {useState} from 'react';
import {usePrevious} from "../../hooks/usePrevious";

const ButtonComponent = () => {
    const [counter, setCounter] = useState(0);

    const showNumber = () => {
        setCounter(prevState => prevState + 1)
    }

    return (
        <div>
            <button onClick={showNumber}>Result: {counter}</button>
            <div>Prev value: {usePrevious(counter)}</div>
        </div>
    );
};

export default ButtonComponent;