import React, {useEffect, useState} from 'react';
import {IPost} from "../models/IPost";
import {getAllPosts} from "../services/apiServicer";
import PostsComponent from "../components/PostsComponent";

const AllPostsPage = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts().then((value) => {
            setPosts(value)
        });
    }, []);

    return (
        <div>
            <h1>Posts All</h1>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default AllPostsPage;