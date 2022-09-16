const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;

const teamValidator = yup.object({
    name : yup.string().trim().required().max(50),
    // coach : yup.string().trim().max(150),
    coach : yup.string().matches(idRegex),
    userId : yup.array().of(yup.string().required().matches(idRegex))
})

module.exports = teamValidator;