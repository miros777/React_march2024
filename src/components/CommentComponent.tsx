import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <div key={comment.id} >
                <b>Comment ID: {comment.id}  PostId: {comment.postId}</b>
                <h3>{comment.body}</h3>
                <hr/>
            </div>
        </div>
    );
};

export default CommentComponent;