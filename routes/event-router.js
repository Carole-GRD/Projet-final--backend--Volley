const eventRouter = require('express').Router();

eventRouter.route('/')
    .get((req, res) => {res.sendStatus(501)})
    .post((req, res) => {res.sendStatus(501)});

eventRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

// ↓ toutes les activités liées à une équipe
eventRouter.route('/:team')
    .get((req, res) => {res.sendStatus(501)});


module.exports = eventRouter;
