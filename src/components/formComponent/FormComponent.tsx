import React from 'react';
import {useForm} from "react-hook-form";

type IForm = {
    name: string,
    surname: string,
    age: number
}
const FormComponent = () => {


    let {register, handleSubmit} = useForm<IForm>();
    let customHamdleSubmit = (data:IForm) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHamdleSubmit)}>
                <input type="text" {...register('name')}/>
                <input type="text" {...register('surname')}/>
                <input type="text" {...register('age')}/>
                <button>SEND</button>
            </form>
        </div>
    );
};

export default FormComponent;