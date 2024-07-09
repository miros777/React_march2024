import Joi from "joi";

const userFormValidator = Joi.object({
    title: Joi.string()
        .min(3)
        .max(50)
        .required(),
    body: Joi.string()
        .min(10)
        .max(1000)
        .required()
        .messages({"string.min": "min 3 letters"}),
    userId: Joi.number()
        .min(1)
        .max(30)
        .required()
        .messages({"number.min": "min ID 1 "})
        .messages({"number.max": "max ID 30 "}),
})

export default userFormValidator;