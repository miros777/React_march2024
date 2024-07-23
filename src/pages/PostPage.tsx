import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostComponent from "../components/PostComponent";
import {getOnePostById} from "../services/apiServicer";
import {IPost} from "../models/IPost";
import {useAppLocation} from "../hooks/useAppLocation";


// interface IProps {
//     post: IPost
// }
const PostPage = () => {
    // let {id} = useParams();
    // console.log(id);
    // const params = useParams();
    // const currentID = params.id;
    // let location = useAppLocation<IPost>();
    // let state = location.state;
    // console.log(params);



    // const [post, setPost] = useState<any>();
    //
    //     useEffect(() => {
    //         if (currentID) {
    //             getOnePostById(currentID).then(value => {
    //                 console.log(value)
    //                 setPost(value)
    //             })
    //             console.log(post);
    //
    //         }
    //
    //     }, []);

    let {id} = useParams();
    const [post, setPosts] = useState<any>()
    useEffect(() => {
        if (id) {
            getOnePostById(id).then(value => setPosts(value));

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