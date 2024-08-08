import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

type IProps = {
    user: IUser
}
const UserComponent:FC<IProps> = ({user}) => {

    return (
        <div>
            <div>
                ID: {user.id}  NAME: {user.name}
                <br/>
                <Link to={user.id.toString() + '/posts'}>Show User Posts</Link>
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default UserComponent;