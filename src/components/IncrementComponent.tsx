import React from 'react';
import {useAppContext} from "../App";

const IncrementComponent = () => {
    let counter = useAppContext();

    return (
        <div>
            <button onClick={counter.inc}>+</button>
        </div>
    );
};

export default IncrementComponent;