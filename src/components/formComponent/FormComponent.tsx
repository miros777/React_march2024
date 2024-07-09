import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userFormValidator from "../../validators/user-form-validator"

type IForm = {
    title: string,
    body: string,
    userId: number
}
const FormComponent = () => {

    let {formState: {errors, isValid}, register, handleSubmit} = useForm<IForm>(
        {
            mode: "all",
            resolver: joiResolver(userFormValidator)
        }
    );
    let customHamdleSubmit = (data:IForm) => {
        console.log(data);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data  // API example   {title: 'foo', body: 'bar', userId: 1}
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
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