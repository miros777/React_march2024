import React, {useEffect, useState} from 'react';
import {getComments} from "../services/apiServicer";
import {IComment} from "../models/IComment";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then((value) => {
            setComments(value);
        });

    }, []);

    return (
        <div>
            <h1>Comments All</h1>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;