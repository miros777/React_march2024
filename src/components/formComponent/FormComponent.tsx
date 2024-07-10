import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userFormValidator from "../../validators/user-form-validator"
import {sendPost} from "../../services/postsFormSender";
import {IForm} from "../../models/IForm";

const FormComponent = () => {

    let {formState: {errors, isValid}, register, handleSubmit} = useForm<IForm>(
        {
            mode: "all",
            resolver: joiResolver(userFormValidator)
        }
    );

    let customHamdleSubmit = (data:IForm) => {
        sendPost(data);
    }

    return (
        <div>
            {errors.body && errors.body?.message}
            {errors.title && errors.title?.message}
            {errors.userId && errors.userId?.message}
            <form onSubmit={handleSubmit(customHamdleSubmit)}>
                <input type="text" {...register('title')}/><br/>
                <textarea {...register('body')}/><br/>
                <input type="number" {...register('userId')}/><br/>
                <button disabled={!isValid}>SEND</button>
            </form>
        </div>
    );
};

export default FormComponent;