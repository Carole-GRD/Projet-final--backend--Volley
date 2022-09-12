const { Schema, model, Types } = require('mongoose');
const User = require('./user-model');

const teamSchema = new Schema({
    name : {
        type : String,
        trim : true
    },
    coach : {
        type : String,
        trim : true
    },
    players : {
        type : Types.ObjectId,
        ref : User
    }
}, {
    collection : 'Team',
    timestamps : true
});

const Team = model('Team', teamSchema);

module.exports = Team;