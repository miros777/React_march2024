import React, {useReducer} from "react";

export const usePrevious = () => {
    const [counter, dispatch] = useReducer((prevState: number, action: { type: string, payload: number }) => {
        switch (action.type) {
            case 'add':
                return prevState + action.payload;
            case 'rem':
                return prevState - action.payload;
        }

        return prevState
    }, 0);

    return (
        <>
            <h2>Use Prev</h2>
            <form action="#">
                <button onClick={() => dispatch({type: 'add', payload: 10})}> +</button>
                <input type="number" value={counter} onChange={(e)=> e.target.value}/>
                <button onClick={() => dispatch({type: 'rem', payload: 10})}> -</button>
            </form>
        </>
    )
}