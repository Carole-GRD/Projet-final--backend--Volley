const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;
const eventRegex = /^(Match)|(Entrainement)|(Tournoi)$/i;
const dateRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
const timeRegex = /^(?<hour>[0-1]\d|2[0-3])h(?<minute>[0-5]\d)$/;

const eventValidator = yup.object({
    teamId : yup.string().required().matches(idRegex),
    coach : yup.string().matches(idRegex),
    name : yup.string().trim().required().matches(eventRegex),
    place : yup.string().trim().max(100),
    date : yup.string().trim().required().matches(dateRegex),
    time : yup.string().trim().required().matches(timeRegex),
    opposingTeam : yup.string().trim().max(100),
    presentId : yup.array().of(yup.string().required().matches(idRegex)),
    absentId : yup.array().of(yup.string().required().matches(idRegex))
})


const updateEventValidator = yup.object({
    name : yup.string().trim().required().matches(eventRegex),
    place : yup.string().trim().max(100),
    date : yup.string().trim().required().matches(dateRegex),
    time : yup.string().trim().required().matches(timeRegex),
    opposingTeam : yup.string().trim().max(100),
    presentId : yup.array().of(yup.string().required().matches(idRegex)),
    absentId : yup.array().of(yup.string().required().matches(idRegex))
})

module.exports = {eventValidator, updateEventValidator};