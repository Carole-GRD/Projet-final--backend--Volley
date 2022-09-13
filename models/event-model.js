import Team from './team-model';
import User from './user-model';

const { Schema, model, Types } = require('mongoose');

const eventSchema = new Schema({
    team : {
        type : Types.ObjectId,
        ref : Team,
        require : true,
        trim : true
    },
    name : {
        type : String,
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
    present : {
        type : Types.ObjectId,
        ref : User
    },
    absent : {
        type : Types.ObjectId,
        ref : User
    }
}, {
    collection : 'Event',
    timestamps : true
});

const Event = model('Event', eventSchema);

module.exports = Event;