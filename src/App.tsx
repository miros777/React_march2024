import React from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import ButtonComponent from "./components/buttonComponent/ButtonComponent";
import IncremDicremComponent from "./components/incremDicremComponent/incremDicremComponent";

const App = () => {

    let {toggle, change} = useToggle(false);

    return (
        <>
            <h2>Use Toggle Task</h2>
            <label htmlFor="toggleMy">Agree or disagree. Toggle={toggle.toString()}</label><br/>
            <input type={"checkbox"} id='toggleMy' onClick={() => change()}/>
            <hr/>
            <br/>
            <br/>

            <h2>Prev State Task</h2>
            <ButtonComponent></ButtonComponent>
            <hr/>

            <h2>Increment Decrement</h2>
            <IncremDicremComponent></IncremDicremComponent>

        </>
    )
}

export default App;
