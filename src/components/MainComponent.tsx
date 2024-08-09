import React from 'react';
import {useStoreCounter} from "../store/useStoreCounter";

const MainComponent = () => {
    let counter = useStoreCounter();

    return (
        <div>
            {counter.counter}
        </div>
    );
};

export default MainComponent;