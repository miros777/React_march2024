import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import UsersComponent from "../components/UsersComponent";
import {userActions} from "../redax/slices/userSlice";

const UsersPage = () => {

    let dispatch = useAppDispatch();
    let {users, isLoaded, error} = useAppSelector(state => state.userStore);


    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <h2>Users Page</h2>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;