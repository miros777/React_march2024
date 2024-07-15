import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
           <div key={post.id}>
            <b>ID: {post.id}</b>
            <h3><Link to={post.id.toString()}>{post.title}</Link></h3>
            <div>{post.body}</div>
            <hr/>
        </div>
            </div>
    );
};

export default PostComponent;