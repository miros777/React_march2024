import React, {FC, useEffect} from 'react';
import {IPost} from "../models/IPost";
import {useAppDispatch, useAppSelector} from "../redax/store";
import {userActions} from "../redax/slices/userSlice";
import {useParams} from "react-router-dom";
import {postActions} from "../redax/slices/postSlice";
import PostComponent from "../components/PostComponent";
import CommentsComponent from "../components/CommentsComponent";
import {commentActions} from "../redax/slices/commentSlice";

const PostPage:FC = () => {
    let {id} = useParams();
    let dispatch = useAppDispatch();
    let post = useAppSelector(state => state.postStore.post);
    // let comments = useAppSelector(state => state.commentStore.comments);

    useEffect(() => {
        if(id) {
            dispatch(postActions.loadPost(+id));
            // dispatch(commentActions.loadComment(+id));
        }
    }, [id]);

    return (
        <div>
            <h1>Post Page</h1>

           <PostComponent post={post}/>
            {/*<CommentsComponent comments={comments}/>*/}
        </div>
    );
};

export default PostPage;