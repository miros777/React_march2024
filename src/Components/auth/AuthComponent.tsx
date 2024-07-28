import React from 'react';
import {TokenObtainPairModel} from "../../models/TokenObtainPairModel";
import {useForm} from "react-hook-form";
import {authUser} from "../../services/api.services";

const AuthComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>();

    const authentificate = (data: TokenObtainPairModel) => {
        authUser.authenticate(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(authentificate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>Auth Me</button>
            </form>
        </div>
    );
};

export default AuthComponent;