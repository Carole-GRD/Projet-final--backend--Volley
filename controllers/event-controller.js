const Event = require('../models/event-model');

const eventController = {
    getAll : async (req, res) => {
        const events = await Event.find()
            .populate({
                path: 'teamId',
                select : { _id : 1, name : 1 }
            })
            .populate({
                path: 'coach',
                select : { _id : 1, lastname : 1, firstname : 1 }
            })
            .populate({
                path: 'presentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            })
            .populate({
                path: 'absentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            });
            
            res.status(200).json(events);
    },
    getById : async (req, res) => {
        const id = req.params.id;
        const event = await Event.findById(id)
            .populate({
                path: 'teamId',
                select : { _id : 1, name : 1 }
            })
            .populate({
                path: 'presentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            })
            .populate({
                path: 'absentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            });
        
            if (!event) {
                return res.sendStatus(404);
            }
            res.status(200).json(event);
    },
    getByTeam : async (req, res) => {
        const idTeam = req.params.id;
        const teamFilter = { teamId : idTeam};

        const events = await Event.find(teamFilter)
            .populate({
                path: 'teamId',
                select : { _id : 1, name : 1 }
            })
            .populate({
                path: 'presentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            })
            .populate({
                path: 'absentId',
                select : { _id : 1, lastname : 1, firstname : 1 }
            });

            if (!events) {
                return res.sendStatus(404);
            }
            res.status(200).json(events);
    },
    create : async (req, res) => {
        const eventToAdd = Event(req.body);
        await eventToAdd.save();
        res.status(200).json(eventToAdd);
    },
    update : async (req, res) => {
        const id = req.params.id;
        const { name, place, date, time, opposingTeam, presentId, absentId } = req.body;

        const eventToUpdate = await Event.findByIdAndUpdate(id, {
            name,
            place,
            date,
            time,
            opposingTeam,
            presentId,
            absentId
        }, { returnDocument : 'after'});

        if (!eventToUpdate) {
            return res.sendStatus(404);
        }
        res.status(200).json(eventToUpdate);
    },
    delete : async (req, res) => {
        const id = req.params.id;
        const eventToDelete = await Event.findByIdAndDelete(id);

        if (!eventToDelete) {
            return res.sendStatus(404);
        }
        res.sendStatus(204);
    }
};

module.exports = eventController;