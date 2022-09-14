const Team = require('./team-model');
const User = require('./user-model');

const { Schema, model, Types } = require('mongoose');

const eventSchema = new Schema({
    teamId : {
        type : Types.ObjectId,
        ref : Team,
        required : true
    },
    name : {
        type : String,
        enum : ['Match', 'Entrainement'],
        required : true,
        trim : true
    },
    date : {
        type : String,
        required : true,
        trim : true
    },
    time : {
        type : String,
        required : true,
        trim : true
    },
    opposingTeam : {
        type : String,
        trim : true
    },
    presentId : [{
        type : Types.ObjectId,
        ref : User
    }],
    absentId : [{
        type : Types.ObjectId,
        ref : User
    }]
}, {
    collection : 'Event',
    timestamps : true
});

const Event = model('Event', eventSchema);

module.exports = Event;