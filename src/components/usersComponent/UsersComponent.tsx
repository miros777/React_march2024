import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser";
import UserComponent from "../userComponent/UserComponent";

const UsersComponent:FC = () => {
    const [usersAll, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value.users)
            });
    }, []);

    const getPosts = () => {
        console.log('iiiiiiiiiiii');

    }

    return (
        <div>
            {
                usersAll.map(user => <UserComponent key={user.id} info={user.firstName} user={user} getPosts={getPosts}/>)
            }
        </div>
    )
}
export default UsersComponent;