const eventRouter = require('express').Router();
const eventController = require('../controllers/event-controller');

const authentication = require('../middlewares/auth-jwt-middlewares');
const idValidation = require('../middlewares/id-validation');
const bodyValidation = require('../middlewares/body-validation');
const {eventValidator, updateEventValidator} = require('../validators/event-validator');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(bodyValidation(eventValidator), eventController.create);
    // .post(authentication(['coach', 'admin']), bodyValidation(eventValidator), eventController.create);

eventRouter.route('/:id')
    .get(idValidation(), eventController.getById)
    .put(idValidation(), bodyValidation(updateEventValidator), eventController.update)
    .delete(idValidation(), eventController.delete);
    // .get(authentication(), idValidation(), eventController.getById)
    // .put(authentication(['coach', 'admin']), idValidation(), bodyValidation(eventValidator), eventController.update)
    // .delete(authentication(['coach', 'admin']), idValidation(), eventController.delete);

// ↓ toutes les activités liées à une équipe
eventRouter.route('/team/:id')
    .get(idValidation(), eventController.getByTeam);


module.exports = eventRouter;
