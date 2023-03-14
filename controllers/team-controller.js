const Team = require("../models/team-model");

const teamController = {
    getAll : async (req, res) => {
        const teams = await Team.find()
            .populate({
                path : 'coach',
                select : { _id : 1, lastname : 1 , firstname : 1 }
            })
            .populate({
                path : 'userId',
                select : { _id : 1, lastname : 1 , firstname : 1, position : 1 }
            });
        
        res.status(200).json(teams);
    },
    getById : async (req, res) => {
        const id = req.params.id;

        const team = await Team.findById(id)
            .populate({
                path : 'coach',
                select : { _id : 1, lastname : 1 , firstname : 1 }
            })    
            .populate({
                    path : 'userId',
                    select : { _id : 1, lastname : 1 , firstname : 1, position : 1 }
            });
        
        if (!team) {
            return res.sendStatus(404);
        }

        res.status(200).json(team);
    },
    getByUser : async (req, res) => {
        const idUser = req.params.id;
        const playerFilter = { userId : idUser };
        const coachFilter = { coach : idUser };

        const teams = await Team.find({ $or : [playerFilter, coachFilter]})
            .populate({
                path : 'coach',
                select : { _id : 1, lastname : 1 , firstname : 1 }
            })    
            .populate({
                path : 'userId',
                select : { _id : 1, lastname : 1 , firstname : 1, position : 1 }
            });

        if (!teams) {
            return res.sendStatus(404);
        }
        res.status(200).json(teams);
    },
    create : async (req, res) => {
        const teamToAdd = Team(req.body);
        await teamToAdd.save();
        res.status(200).json(teamToAdd);
    },
    update : async (req, res) => {
        const id = req.params.id;
        // console.log(req.body);
        const { name, coach, userId } = req.body;

        const teamToUpdate = await Team.findByIdAndUpdate(id, {
            name,
            coach,
            userId
        }, { returnDocument : 'after' });

        if (!teamToUpdate) {
            return res.sendStatus(404);
        }
        // res.sendStatus(204);
        res.status(200).json(teamToUpdate);
    },
    delete : async (req, res) => {
        const id = req.params.id;
        const teamToDelete = await Team.findByIdAndDelete(id);

        if (!teamToDelete) {
            return res.sendStatus(404);
        }
        res.sendStatus(204);
    },
};

module.exports = teamController;