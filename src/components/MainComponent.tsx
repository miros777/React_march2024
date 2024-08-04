import React from 'react';
import {useAppContext} from "../App";

const MainComponent = () => {
    let counter = useAppContext();

    return (
        <div>
            {counter.counter}
        </div>
    );
};

export default MainComponent;