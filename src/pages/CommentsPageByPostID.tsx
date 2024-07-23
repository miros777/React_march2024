import React, {useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getCommentsByPostId} from "../services/apiServicer";
import {useParams} from "react-router-dom";
import CommentComponent from "../components/CommentComponent";

const CommentsPageByPostID = () => {

    let {id} = useParams();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getCommentsByPostId(id).then((value) => {
            setComments(value);
        });

    }, [id]);

    return (
        <div>
            {
                comments.map((comment:IComment) => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default CommentsPageByPostID;