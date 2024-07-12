import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

interface IProps {
    users: IUser[]
}
const UsersComponent:FC<IProps> = ({users}) => {

    return (
        <div>
            {
                users.map((user: IUser) => <div key={user.id}>
                    <b>ID: {user.id}</b>
                    <h3><Link to={user.id.toString()}>Name: {user.name}</Link></h3>
                    <b>UserName: {user.username}</b>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default UsersComponent;