import React from 'react';
import {useAppContext} from "../App";

const DecrementComponent = () => {
    let counter = useAppContext();

    return (
        <div>
            <button onClick={counter.dec}>-</button>
        </div>
    );
};

export default DecrementComponent;