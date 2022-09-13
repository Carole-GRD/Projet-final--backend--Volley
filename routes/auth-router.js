const authRouter = require('express').Router();
const authController = require('../controllers/auth-controller');

// const bodyValidator = require('../middlewares/body-validator');
// const { loginValidator, registerValidator } = require('../validators/auth-validator');


authRouter.route('/login')
    .post(authController.login);
    // .post(bodyValidator(loginValidator), authController.login);

authRouter.route('/register')
    .post(authController.register);
    // .post(bodyValidator(registerValidator), authController.register);

module.exports = authRouter;