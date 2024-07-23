import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostComponent from "../components/PostComponent";
import {getPostsByUserId} from "../services/apiServicer";

const PostPage = () => {

    let {id} = useParams();
    const [post, setPosts] = useState<any>()
    useEffect(() => {
        if (id) {
            getPostsByUserId(id).then(value => setPosts(value));
        }
    }, [id]);

    return (
        <div>
            Post Page {id}
            <PostComponent post={post} key={post.id}/>
        </div>
    );
};

export default PostPage;