const yup = require('yup');

const positionRegex = /^(réceptionneur attaquant)|(pointu)|(central)|(passeur)|(libéro)|(aucune)$/i;
const roleRegex = /^(player)|(coach)|(admin)$/i;
// const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
const phoneRegex = /^[0][0-9]{2,3}(\s*[0-9]{2}){3}$/;

const userAdminValidator = yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    lastname : yup.string().trim().required().max(150),
    firstname : yup.string().trim().required().max(150),
    adress : yup.string().trim().max(500),
    // password : yup.string().trim().required().min(8).max(64).matches(pwdRegex),
    role : yup.string().trim().required().matches(roleRegex),
    position : yup.string().trim().required().matches(positionRegex),
    // team : yup.string().trim().max(50), 
    email : yup.string().trim().email().required().max(255),
    phone : yup.string().trim().required().matches(phoneRegex),
    licence : yup.string().trim().max(10)
});

const userValidator = yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    lastname : yup.string().trim().required().max(150),
    firstname : yup.string().trim().required().max(150),
    adress : yup.string().trim().max(500),
    // password : yup.string().trim().required().min(8).max(64).matches(pwdRegex),
    // role : yup.string().trim().required().matches(roleRegex),
    // position : yup.string().trim().required().matches(positionRegex),
    // team : yup.string().trim().max(50), 
    email : yup.string().trim().email().required().max(255),
    phone : yup.string().trim().required().matches(phoneRegex)
    // licence : yup.string().trim().max(10)
});

module.exports = { userAdminValidator, userValidator };
