const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;

const teamValidator = yup.object({
    name : yup.string().trim().required().max(50),
    coach : yup.string().trim().max(150),
    userId : yup.string().required().matches(idRegex),
})

module.exports = teamValidator;