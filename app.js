
require('dotenv-flow').config();

const { NODE_ENV, MESSAGE, PORT, DB_CONNECTION } = process.env;
console.log('Lancé en', NODE_ENV, ':', MESSAGE);


const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const app = express();

const cors = require('cors');
app.use(cors());

// import du module router présent dans index.js en important tout le dossier routes
const router = require('./routes');

// Route temporaire
// --------------------------------
// app.get('/user', (req, res) => {
//     console.log(req.url);
//     const data = {
//         msg : "Projet final"
//     };
//     res.json(data);
// });


// Middleware pour utiliser json en post
app.use(express.json());

// Connection à la base de données
app.use(async(req, res, next) => {
    await mongoose.connect(DB_CONNECTION);
    console.log('Connection réussie !');
    next();
})

// Routing
app.use('/api', router);


// Start
app.listen(PORT, () => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
});