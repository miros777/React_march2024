import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import {postActions} from "../redax/slices/postSlice";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    let dispatch = useAppDispatch();
    let {posts, isLoaded, error} = useAppSelector(state => state.postStore);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            <h2>Posts Page</h2>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;