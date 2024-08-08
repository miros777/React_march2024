import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import "../css/main.css";
import {Link} from "react-router-dom";

interface IProps {
    posts: IPost[]
}

const PostsComponent: FC<IProps> = (posts) => {
    return (
        <div>
            {posts.posts.map((post, index) =>
                <div key={index} className={'borderPost'}>
                    <div>ID {post.id} <h4>{post.title}</h4></div>
                    <div>{post.body}</div>
                    <Link to={post.id.toString()}>Read More...</Link>
                    <br/>
                </div>
            )}
        </div>
    );
};

export default PostsComponent;