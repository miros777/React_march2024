import React from 'react';
import {useStore} from "../App";

const MainComponent = () => {
    let counter = useStore();

    return (
        <div>
            {counter.counter}
        </div>
    );
};

export default MainComponent;