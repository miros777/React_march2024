import React, {useEffect, useState} from 'react';

export const useToggle = (init:boolean) => {
    const [toggle, setToggle] = useState<boolean>(init);
    const change = () => setToggle((prevState):boolean => {
        if (prevState === true) {
            prevState = false;
        } else {
            prevState = true;
        }
        return prevState;
    });

    return {toggle, change};
}