

const teamRouter = require('express').Router();

teamRouter.route('/')
    .get((req, res) => {res.sendStatus(501)})
    .post((req, res) => {res.sendStatus(501)});

teamRouter.route('/:id')
    .get((req, res) => {res.sendStatus(501)})
    .put((req, res) => {res.sendStatus(501)})
    .delete((req, res) => {res.sendStatus(501)});

// ↓ toutes les équipes liées à un utilisateur
teamRouter.route('/:user')
    .get((req, res) => {res.sendStatus(501)})


module.exports = teamRouter;