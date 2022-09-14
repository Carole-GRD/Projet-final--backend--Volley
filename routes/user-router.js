const userRouter = require('express').Router();
const userController = require('../controllers/user-controller');

const authentication = require('../middlewares/auth-jwt-middlewares');
const idValidation = require('../middlewares/id-validation');
const bodyValidation = require('../middlewares/body-validation');
const { userValidator, userAdminValidator} = require('../validators/user-validator');
const isSameId = require('../middlewares/is-same-id-middleware');

userRouter.route('/')
    .get(userController.getAll)
    .post(userController.create);
    // ------------------------------------------------------------------------
    // ↑ "post" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    //  à commenter ou à supprimer par la suite   
    // ------------------------------------------------------------------------

userRouter.route('/:id')
    .get(idValidation(), userController.getById)
    // .get(authentication(), idValidation(), userController.getById)
    .put(idValidation(), userController.update)
    // .put(authentication(), isSameId(), idValidation(), bodyValidation(userValidator), userController.update)
    .delete(idValidation(), userController.delete);
    // .delete(authentication(), idValidation(), userController.delete);

userRouter.route('/admin/:id')
    .put(idValidation(), bodyValidation(userAdminValidator), userController.update);
    // .put(authentication(['admin']), idValidation(), bodyValidation(userAdminValidator), userController.update);
    

module.exports = userRouter;