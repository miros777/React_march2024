import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IProps = {
    user: IUser,
    info: string
}
const UserComponent: FC<IProps> = ({user, info}) => {
    const {id, firstName} = user;

    return (
        <div>FIRSTNAME: {user.firstName}
           ID: {user.id}
            <button onClick={getPosts()}></button>
        </div>
    );
};

export default UserComponent;