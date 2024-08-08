import React, {FC} from 'react';
import {IComment} from "../models/IComment";

type IProps = {
    comments: IComment[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment=>
                <div key={comment.id}>
                <h3>ID: {comment.id}</h3>
                <i>{comment.email}</i>
                <h4> {comment.name}</h4>
                <p> {comment.body}</p>
                    {/*<L ink to={'/comments'}>Show comments...</Link>*/}
                </div>
            )}
        </div>
    );
};

export default CommentsComponent;