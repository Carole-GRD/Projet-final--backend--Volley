
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
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

    
// ↓ tous les membres d'une équipe
userRouter.route('/:team')
    .get((req, res) => {res.sendStatus(501)});


module.exports = userRouter;