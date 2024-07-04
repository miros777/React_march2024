import React, {useReducer} from 'react';

const IncremDicremComponent = () => {

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
            <form action="#">
                <button onClick={() => dispatch({type: 'add', payload: 10})}> +</button>
                <input type="number" value={counter} onChange={(e)=> e.target.value}/>
                <button onClick={() => dispatch({type: 'rem', payload: 10})}> -</button>
            </form>
        </>
    )
};

export default IncremDicremComponent;