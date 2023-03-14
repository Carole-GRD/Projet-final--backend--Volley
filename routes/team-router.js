const teamRouter = require('express').Router();
const teamController = require('../controllers/team-controller');

const isSameId = require('../middlewares/is-same-id-middleware');
const authentication = require('../middlewares/auth-jwt-middlewares');
const idValidation = require('../middlewares/id-validation');
const bodyValidation = require('../middlewares/body-validation');
const teamValidator = require('../validators/team-validator');

teamRouter.route('/')
    .get(teamController.getAll)
    .post(teamController.create);
    // .get(teamController.getAll)
    // .post(authentication(['admin']), bodyValidation(teamValidator), teamController.create);

teamRouter.route('/:id')
    .get(idValidation(), teamController.getById)
    .put(idValidation(), bodyValidation(teamValidator), teamController.update)
    .delete(idValidation(), teamController.delete);
    // .get(authentication(), idValidation(), teamController.getById)
    // .put(authentication(['coach', 'admin']), idValidation(), bodyValidation(teamValidator), teamController.update)
    // .delete(authentication(['admin']), idValidation(), teamController.delete);

// ↓ toutes les équipes liées à un utilisateur
teamRouter.route('/user/:id')
    .get(idValidation(), teamController.getByUser)
    // .get(authentication(), isSameId() , idValidation(), teamController.getByUser)




module.exports = teamRouter;