import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";

type IProps = {
    post: IPost | null;
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div key={post?.id}>
            <div>ID {post?.id}</div>
            <div><h4>{post?.title}</h4></div>
            <div>{post?.body}</div>
            <Link to={'comments'}>Show comments...</Link>

        </div>
    );
};

export default PostComponent;