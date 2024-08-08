import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";

interface IProps {
    users: IUser[]
}
const UsersComponent:FC<IProps> = (users) => {
    return (
        <div>
            {users.users.map((user)=>
                <UserComponent user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UsersComponent;