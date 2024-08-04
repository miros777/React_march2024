import React from 'react';
import {useStore} from "../App";

const DecrementComponent = () => {
    let counter = useStore();

    return (
        <div>
            <button onClick={counter.dec}>-</button>
        </div>
    );
};

export default DecrementComponent;