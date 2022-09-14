const { Schema, model, Types } = require('mongoose');
const User = require('./user-model');

const teamSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    coach : {
        // type : String,
        // trim : true
        type : Types.ObjectId,
        ref : User
    },
    userId : [{
        type : Types.ObjectId,
        ref : User
    }]
}, {
    collection : 'Team',
    timestamps : true
});

const Team = model('Team', teamSchema);

module.exports = Team;