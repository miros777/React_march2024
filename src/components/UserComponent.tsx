import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IUser} from "../models/IUser";

interface IProps {
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    let navigate = useNavigate();
    return (
        <div key={user.id}>
            <b>ID: {user.id}</b>
            <h3>Name: {user.name}</h3>
            <h4>UserName: {user.username}</h4>
            <button onClick={() => {
                navigate(user.id.toString() + '/posts')
            }}>Show Post</button>
            <hr/>
        </div>
    );
};

export default UserComponent;