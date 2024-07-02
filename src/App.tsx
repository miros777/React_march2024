import React from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
const App = () => {

    return (
        <>
            {useToggle()}
        </>
    )
}

export default App;
