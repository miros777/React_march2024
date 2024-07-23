import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationsCopmonent = () => {

    let [searchParams, setSerchParams] = useSearchParams({page: '1'});
    return (
        <div>
            <button onClick={() => {
                let page = +(searchParams.get('page') || -1);
                let next = page - 1;
                setSerchParams({page: next.toString()});
            }}>prev
            </button>
            <button onClick={() => {
                let page = +(searchParams.get('page') || 1);
                let next = page + 1;
                setSerchParams({page: next.toString()});
            }}>next
            </button>

        </div>
    );
};

export default PaginationsCopmonent;