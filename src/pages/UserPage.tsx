import React, {useEffect, useState} from 'react';
import {Location, useLocation, useParams} from "react-router-dom";
import {getUserById} from "../services/apiServicer";
import {IPost} from "../models/IPost";
import {useAppLocation} from "../hooks/useAppLocation";
import UserComponent from "../components/UserComponent";
import {IUser} from "../models/IUser";

const UserPage = () => {
    const {id} = useParams();

    // console.log(post);
    // console.log(typeof id);
    // console.log(userData);

    return (
        <div>
            User Page {id}
            {/*<UserComponent user={userData}/>*/}
        </div>
    );
};

export default UserPage;