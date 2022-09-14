const yup = require('yup');

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
const phoneRegex = /^[0][0-9]{2,3}(\s*[0-9]{2}){3}$/;

const registerValidator = yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    lastname : yup.string().trim().required().max(150),
    firstname : yup.string().trim().required().max(150),
    adress : yup.string().trim().max(500),
    password : yup.string().required().min(8).max(64).matches(pwdRegex),
    email : yup.string().trim(). email().required().max(255),
    phone : yup.string().trim().required().matches(phoneRegex)
});


const loginValidator = yup.object({
    credential : yup.string().required().max(255),
    password : yup.string().required(),
});


module.exports = { registerValidator, loginValidator };
