import { useState} from 'react';

export const useToggle = (init:boolean) => {
    const [toggle, setToggle] = useState<boolean>(init);
    const change = () => { setToggle(prevState => !prevState) }

    return {toggle, change};
}