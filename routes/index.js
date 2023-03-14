// import des router "enfant" teamRouter ...
const teamRouter = require('./team-router');
const eventRouter = require('./event-router');
const userRouter = require('./user-router');
const authRouter = require('./auth-router');


// Création du routeut "parent"
const router = require('express').Router();

// Paramétrer toutes les routes
// On indique qu'à l'arrivée sur le segment /team, il faut charger le routeur "enfant" teamRouter / pour aller chercher des informations sur la collection "Team" en BDD 
router.use('/team', teamRouter);
// idem pour les autres segments
router.use('/event', eventRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)


module.exports = router;