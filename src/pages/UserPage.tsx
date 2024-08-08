import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import {postActions} from "../redax/slices/postSlice";
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";

const UserPage = () => {
    let dispatch = useAppDispatch();
    let {posts, isLoaded, error} = useAppSelector(state => state.postStore);
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(postActions.loadPostByUserID(+id));
        }
    }, [id]);

    return (
        <div>
            <h2>User Posts Page</h2>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default UserPage;