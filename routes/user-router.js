const userRouter = require('express').Router();
const userController = require('../controllers/user-controller');

// const authentication = require('../middlewares/auth-jwt-middlewares');
// const idValidator = require('../middlewares/id-validator');
// const bodyValidator = require('../middlewares/body-validator');
// const userValidator = require('../validators/user-validator');

userRouter.route('/')
    .get(userController.getAll)
    // .post(userController.create);
    // ------------------------------------------------------------------------
    // ↑ "post" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    //  à commenter ou à supprimer par la suite   
    // ------------------------------------------------------------------------

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);
    // .get(authentication(), idValidator(), userController.getById)
    // .put(authentication(), idValidator(), bodyValidator(userValidator), userController.update)
    // .delete(authentication(['admin']), idValidator(), userController.delete);

module.exports = userRouter;