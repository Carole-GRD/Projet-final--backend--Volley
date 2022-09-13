const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;
const eventRegex = /^(Match)|(Entrainement)$/i;
// TODO: trouver une autre regex pour la date !
const dateRegex = /^[0-9]{4}-((0[1-9])|(1[0-2]))-[0-3][0-9]$/;
// TODO: trouver une autre regex pour l'heure ! et l'ajouter dans "time"

const eventValidator = yup.object({
    teamId : yup.string().required().matches(idRegex),
    name : yup.string().trim().required().matches(eventRegex),
    date : yup.string().trim().required().matches(dateRegex),
    time : yup.string().trim().required(),
    // time : yup.string().trim().required().matches(timeRegex),
    opposingTeam : yup.string().trim().max(100),
    presentId : yup.string().required().matches(idRegex),
    absentId : yup.string().required().matches(idRegex)
})

module.exports = eventValidator;