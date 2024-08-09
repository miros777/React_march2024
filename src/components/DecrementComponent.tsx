import React from 'react';
import {useStoreCounter} from "../store/useStoreCounter";

const DecrementComponent = () => {
    let counter = useStoreCounter();

    return (
        <div>
            <button onClick={counter.dec}>-</button>
        </div>
    );
};

export default DecrementComponent;