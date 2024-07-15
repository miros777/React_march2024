import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IUser} from "../models/IUser";

interface IProps {
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div key={user.id}>
            <b>ID: {user.id}</b>
            <h3><Link to={user.id.toString()}>Name: {user.name}</Link></h3>
            <b>UserName: {user.username}</b>
            <hr/>
        </div>
    );
};

export default UserComponent;