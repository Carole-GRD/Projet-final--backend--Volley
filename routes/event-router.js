const eventRouter = require('express').Router();
const eventController = require('../controllers/event-controller');

eventRouter.route('/')
    .get(eventController.getAll)
    .post(eventController.create);

eventRouter.route('/:id')
    .get(eventController.getById)
    .put(eventController.update)
    .delete(eventController.delete);

// ↓ toutes les activités liées à une équipe
eventRouter.route('/team/:id')
    .get(eventController.getByTeam);


module.exports = eventRouter;
