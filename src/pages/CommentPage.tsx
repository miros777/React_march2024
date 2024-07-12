import React from 'react';
import {useParams} from "react-router-dom";

const CommentPage = () => {
    const {id} = useParams()
    return (
        <div>
            Comments {id}
        </div>
    );
};

export default CommentPage;