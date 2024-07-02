import React, {useState} from 'react';

export const useToggle = () => {
    const [toggle, setToggle] = useState<boolean>(true);
    const change = () => setToggle((prevState:boolean) => {
        if (prevState === true) {
            prevState = false;
        } else {
            prevState = true;
        }
        return prevState;
    });

    return (
        <>
            <label htmlFor="toggleMy">Agree or disagree. Toggle={toggle.toString()}</label><br/>
            <input type={"checkbox"} id='toggleMy' onClick={() => change()}/>
        </>
    )
}