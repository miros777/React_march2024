import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/apiServicer";
import {IUser} from "../models/IUser";
import UsersComponent from "../components/UsersComponent";
const UsersPage = () => {

    const [users,setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);

    return (
        <div>
            <h1>Users All</h1>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;