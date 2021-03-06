import Joi from '@hapi/joi';

const registerValidate = data => {
    let schema = Joi.object({
        nome: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(9).max(50),
        idade: Joi.string().required().min(2).max(3),
        pais: Joi.string().required().min(2).max(30),
        senha: Joi.string().required().min(9).max(500)
    });

    return schema.validate(data);
};

const loginValidate = data => {
    let schema = Joi.object({
        email: Joi.string().required().min(9).max(50),
        senha: Joi.string().required().min(9).max(500)
    });

    return schema.validate(data);
};

const editValidate = data => {
    let schema = Joi.object({
        nome: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(9).max(50),
        idade: Joi.string().required().min(2).max(3),
        pais: Joi.string().required().min(2).max(30),
        senha: Joi.string().required().min(9).max(500)
    });

    return schema.validate(data);
};

export { registerValidate, loginValidate, editValidate };
