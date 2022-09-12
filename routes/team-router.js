
const teamRouter = require('express').Router();

const teamController = require('../controllers/team-controller');

teamRouter.route('/')
    .get(teamController.getAll)
    .post(teamController.create);

teamRouter.route('/:id')
    .get(teamController.getById)
    .put(teamController.update)
    .delete(teamController.delete);

// ↓ toutes les équipes liées à un utilisateur
// teamRouter.route('/:user')
//     .get(teamController.getByUser)


module.exports = teamRouter;