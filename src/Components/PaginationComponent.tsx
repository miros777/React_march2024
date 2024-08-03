import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type IProps = {
    next: null | {page: string},
    prev: null | {page: string}
}
const PaginationComponent:FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'})
    return (
        <div>
            <button
                disabled={!prev}
                onClick={()=>{
                let page = +(query.get('page') || -1);
                let prev = page - 1;
                setQuery({page: prev.toString()})
            }}>prev</button>
            <button
                disabled={!next}
                onClick={()=>{
                let page = +(query.get('page') || 1);
                let next = page + 1;
                setQuery({page: next.toString()})
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;