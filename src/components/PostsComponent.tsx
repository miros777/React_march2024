import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Link} from "react-router-dom";
interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
// console.log(posts);
    return (
        <div>
            {
                posts.map((post: IPost) => <div key={post.id}>
                    <b>ID: {post.id}</b>
                    <h3><Link to={post.id.toString()}>{post.title}</Link></h3>
                    <div>{post.body}</div>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default PostsComponent;