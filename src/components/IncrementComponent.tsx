import React from 'react';
import {useStoreCounter} from "../store/useStoreCounter";

const IncrementComponent = () => {
    let counter = useStoreCounter();

    return (
        <div>
            <button onClick={counter.inc}>+</button>
        </div>
    );
};

export default IncrementComponent;