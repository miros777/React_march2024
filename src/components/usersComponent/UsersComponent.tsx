import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import UserComponent from "../userComponent/UserComponent";
import PostComponent from "../PostsComponent/PostComponent";
import {IPost} from "../../models/IPost";
import {getPostsFormUser, getUsers} from "../../services/apiServices";

const UsersComponent: FC = () => {

    const [usersAll, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        // @ts-ignore
        getUsers().then(value => setUsers([...value]) );
    }, []);

    const [posts, setPosts] = useState<IPost[]>([]);
    const getPosts = (id: number) => {
        // @ts-ignore
        getPostsFormUser(id).then(posts => setPosts([...posts]) );
    }

    return (
        <>
            <div>
                {
                    usersAll.map(user => <UserComponent key={user.id} user={user} getPosts={getPosts}/>)
                }
            </div>
            <div>
                <PostComponent posts={posts}/>
            </div>
        </>
    )
}
export default UsersComponent;
