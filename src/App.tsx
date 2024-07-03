import React from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {usePrevious} from "./hooks/usePrevious";
const App = () => {
    return (
        <>
            {useToggle()}
            <br/>
            <br/>
            {usePrevious()}
        </>
    )
}

export default App;
