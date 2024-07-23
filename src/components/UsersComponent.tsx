import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";
import {Location, useLocation, useSearchParams} from "react-router-dom";
import {IPost} from "../models/IPost";
import {getUserById} from "../services/apiServicer";

interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {

    // const location:Location<IPost>  = useLocation();
    // let state = location.state;
    //
    // console.log(location);
    // console.log(state);
    //
    // const [userData, setPost] = useState<IUser>();
    // useEffect(() => {
    //     getUserById(id).then(value => setPost(value))
    // }, [id]);
    let [searchParams, setSearchParams] = useSearchParams({'page': '0'});

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user}/>)
            }
            <div>
                <button onClick={() => {
                    let page = +(searchParams.get('page') || '1');
                    let prevPage = (page - 1).toString();
                    setSearchParams({'page': prevPage})
                }}>Prev
                </button>
                <button onClick={() => {
                    let page = +(searchParams.get('page') || '1');
                    let nextPage = (page + 1).toString();
                    setSearchParams({'page': nextPage})
                }}>Next
                </button>
            </div>

        </div>
    );
};

export default UsersComponent;