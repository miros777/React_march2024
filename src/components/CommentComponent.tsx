import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <div key={comment.id}>
                <b>ID: {comment.id}</b>
                <h3><Link to={comment.id.toString()}>{comment.body}</Link></h3>
                <div>{comment.postId}</div>
                <hr/>
            </div>
        </div>
    );
};

export default CommentComponent;