import React, {FC} from 'react';
import {IComment} from "../models/IComment";
import {Link} from "react-router-dom";

interface IProps {
    comments: IComment[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment:IComment) => <div key={comment.id}>
                    <b>ID: {comment.id}</b>
                    <h3><Link to={comment.id.toString()}>{comment.body}</Link></h3>
                    <div>{comment.postId}</div>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default CommentsComponent;