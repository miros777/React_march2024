import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './user-component.module.css';

interface IProps {
    user: IUser,
    getPosts: (id:number) => void
}

const UserComponent: FC<IProps> = ({user, getPosts}) => {
    const {id, firstName, phone} = user;

    return (
        <div className={styles.userWrap}>
            <div className={styles.userIdWrap}>ID: {id}</div>
            <div className={styles.userNameWrap}>FIRSTNAME: {firstName}</div>
            <div>PHONE: {phone}</div>
            <button onClick={() => getPosts(id)}>Sow posts</button>
        </div>
    );
};

export default UserComponent;