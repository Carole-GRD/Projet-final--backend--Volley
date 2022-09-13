const eventRouter = require('express').Router();
const eventController = require('../controllers/event-controller');

const authentication = require('../middlewares/auth-jwt-middlewares');
const idValidator = require('../middlewares/id-validator');
const bodyValidator = require('../middlewares/body-validator');
const eventValidator = require('../validators/event-validator');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(eventController.create);
    // .post(authentication(['coach', 'admin']), bodyValidator(eventValidator), eventController.create);

eventRouter.route('/:id')
    .get(eventController.getById)
    .put(eventController.update)
    .delete(eventController.delete);
    // .get(idValidator(), eventController.getById)
    // .put(authentication(['coach', 'admin']), idValidator(), bodyValidator(eventValidator), eventController.update)
    // .delete(authentication(['coach', 'admin']), idValidator(), eventController.delete);

// ↓ toutes les activités liées à une équipe
eventRouter.route('/team/:id')
    .get(eventController.getByTeam);
    // .get(idValidator(), eventController.getByTeam);


module.exports = eventRouter;
