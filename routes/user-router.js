
const userRouter = require('express').Router();

const userController = require('../controllers/user-controller');


userRouter.route('/')
    .get(userController.getAll)
    .post(userController.create);
    // ------------------------------------------------------------------------
    // ↑ "post" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    //  à commenter ou à supprimer par la suite   
    // ------------------------------------------------------------------------

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete);

    
// ↓ tous les membres d'une équipe
userRouter.route('/:team')
    .get(userController.getByTeam);


module.exports = userRouter;