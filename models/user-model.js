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
    adress : {
        type : String,
        trim : true
    },
    password : {
        type : String,       
        required : true
    },
    role : {
        type : String,
        enum : ['player', 'coach', 'admin'],
        required : true,
        default : 'player'
    },
    position : {
        type : String,
        enum : ['réceptionneur attaquant', 'pointu', 'central', 'passeur', 'libéro', 'aucune'],
        default : 'aucune'
    },
    // team : {
    //     type : Array,
    //     trim : true
    // },
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

userSchema.index({licence : 1}, {sparse : true});

const User = model('User', userSchema);
module.exports = User;