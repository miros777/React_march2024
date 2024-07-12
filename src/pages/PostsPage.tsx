import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {IPost} from "../models/IPost";
import {getPosts} from "../services/apiServicer";


const PostsPage = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then((value) => {
             setPosts(value);
        });

    }, []);

    return (
        <div>
            Posts
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;