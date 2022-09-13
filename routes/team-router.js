const teamRouter = require('express').Router();
const teamController = require('../controllers/team-controller');

// const authentication = require('../middlewares/auth-jwt-middlewares');
// const idValidator = require('../middlewares/id-validator');
// const bodyValidator = require('../middlewares/body-validator');
// const teamValidator = require('../validators/team-validator');

teamRouter.route('/')
    .get(teamController.getAll)
    .post(teamController.create);
    // .get(teamController.getAll)
    // .post(authentication(['admin']), bodyValidator(teamValidator), teamController.create);

teamRouter.route('/:id')
    .get(teamController.getById)
    .put(teamController.update)
    .delete(teamController.delete);
    // .get(idValidator(), teamController.getById)
    // .put(authentication(['coach', 'admin']), idValidator(), bodyValidator(teamValidator), teamController.update)
    // .delete(authentication(['admin']), idValidator(), teamController.delete);

// ↓ toutes les équipes liées à un utilisateur
teamRouter.route('/user/:id')
    .get(teamController.getByUser)
    // .get(authentication(), idValidator(), teamController.getByUser)


module.exports = teamRouter;