const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    pseudo : {
        type : String,
        unique : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,       
        required : true
    },
    role : {
        type : String,
        enum : ['Player', 'Coach', 'Admin'],
        required : true,
        default : 'Player'
    },
    position : {
        type : String,
        enum : ['réceptionneur attaquant', 'pointu', 'central', 'passeur', 'libéro']
    },
    team : {
        type : String,
        enum : ['Minime', 'Cadet', 'P4D', 'P3D', 'P2D', 'P3H', 'P1H']
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    phone : {
        type : String,
        trim : true
    },
    licence : {
        type : String,
        unique : true,
        trim : true
    }
}, {
    collection : 'User',
    timestamps : true
});

const User = model('User', userSchema);

module.exports = User ;