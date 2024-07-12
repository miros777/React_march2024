import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/apiServicer";
import {IUser} from "../models/IUser";
import UsersComponent from "../components/UsersComponent";
const UsersPage = () => {

    const [users,setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value));
        console.log(users)
    }, []);

    return (
        <div>
            Users
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;