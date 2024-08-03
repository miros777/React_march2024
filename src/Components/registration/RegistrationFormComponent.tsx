import React, {useState} from 'react';
import {userService} from "../../services/api.services";
import {UserModel} from "../../models/UserModel";
import {useForm} from "react-hook-form";
import {IUserModel} from "../../models/IUserModel";

const RegistrationFormComponent = () => {
    let {
        handleSubmit,
        register
    } = useForm<IUserModel>();

    const [isRegistrated, setIsRegistrated] = useState<boolean>(false)

    const onSubmitFormHandler = async (data: IUserModel) => {
        let isReg = await userService.saveUser(data);
        setIsRegistrated(isReg);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register me</button>
            </form>
            {
                isRegistrated && (<div>you did registration</div>)
            }
        </div>
    );
};

export default RegistrationFormComponent;