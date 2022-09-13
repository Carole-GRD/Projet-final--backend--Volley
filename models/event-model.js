const Team = require('./team-model');
const User = require('./user-model');

const { Schema, model, Types } = require('mongoose');

const eventSchema = new Schema({
    teamId : {
        type : Types.ObjectId,
        ref : Team,
        require : true
    },
    name : {
        type : String,
        enum : ['Match', 'Entrainement'],
        trim : true
    },
    date : {
        type : String,
        require : true,
        trim : true
    },
    time : {
        type : String,
        require : true,
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