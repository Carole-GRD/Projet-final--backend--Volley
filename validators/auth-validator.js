const yup = require('yup');

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
// TODO: trouver une autre regex pour le téléphone !
const phoneRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

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
