import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import UserComponent from "./UserComponent";
import { useSearchParams} from "react-router-dom";

interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {

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