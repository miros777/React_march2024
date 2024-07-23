import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostsByUserId} from "../services/apiServicer";
import {IPost} from "../models/IPost";
import PostsComponent from "../components/PostsComponent";

const UserPage = () => {
    let {id} = useParams();

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if(id){
            getPostsByUserId(id.toString()).then(value => setPosts(value));
        }
    }, [id]);

    return (
        <div>
            User ID:{id}
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default UserPage;