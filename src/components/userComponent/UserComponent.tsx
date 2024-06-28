import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type IProps = {
    user: IUser,
    info: string,
    getPosts: () => void
}


const UserComponent: FC<IProps> = ({user, info, getPosts}) => {
    const {id, firstName} = user;

    return (
        <div>FIRSTNAME: {user.firstName}
           ID: {user.id}
            <button onClick={() => getPosts()}>Sow posts</button>
        </div>
    );
};

export default UserComponent;