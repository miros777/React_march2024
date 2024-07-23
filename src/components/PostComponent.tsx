import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPost
}
const PostComponent:FC<IProps> = ({post}) => {

    let navigate = useNavigate();

    return (
        <div>
           <div>
                <h3>POST ID: {post.id} USER ID: {post.userId}</h3>
                <h3>Title: {post.title}</h3>
                <div>Body: {post.body}</div>
               <button onClick={() => {
                   navigate(post.id.toString() + '/comments')
               }}>Show comments</button>
                <hr/>
            </div>
        </div>
    );
};

export default PostComponent;