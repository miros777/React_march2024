import  {useEffect, useRef} from "react";

export const usePrevious = (value:number) => {
    const ref = useRef(value);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}