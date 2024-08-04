import React from 'react';
import {useStore} from "../App";

const IncrementComponent = () => {
    let counter = useStore();

    return (
        <div>
            <button onClick={counter.inc}>+</button>
        </div>
    );
};

export default IncrementComponent;