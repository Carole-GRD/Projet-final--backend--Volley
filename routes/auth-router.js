const authRouter = require('express').Router();
const authController = require('../controllers/auth-controller');

const bodyValidation = require('../middlewares/body-validation');
const { loginValidator, registerValidator } = require('../validators/auth-validator');


authRouter.route('/login')
    // .post(authController.login);
    .post(bodyValidation(loginValidator), authController.login);

authRouter.route('/register')
    // .post(authController.register);
    .post(bodyValidation(registerValidator), authController.register);

// authRouter.route('/logout')
//     .get((req, res) => req.logout());


module.exports = authRouter;