import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {IPost} from "../models/IPost";
import {getPostsByUserId} from "../services/apiServicer";
import PaginationsCopmonent from "../components/PaginationsCopmonent";
import {useParams} from "react-router-dom";

const PostsPage = () => {

    let {id} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if(id){
        getPostsByUserId(id).then((value) => {setPosts(value) });
        }
    }, [id]);

    return (
        <div>
            <h1>Posts All</h1>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;