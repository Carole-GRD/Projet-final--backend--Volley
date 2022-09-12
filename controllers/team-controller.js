const Team = require("../models/team-model");

const teamController = {
    getAll : async (req, res) => {
        const teams = await Team.find()
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
                path : 'userId',
                select : { _id : 1, lastname : 1 , firstname : 1 }
            });
        
        if (!team) {
            return res.sendStatus(404);
        }

        res.status(200).json(team);
    },
    // getByUser : async (req, res) => {
    //     const idUser = req.params.id;
    //     console.log(idUser);
    //     const userFilter = { userId : idUser};
        
    //     const teams = await Team.find(userFilter);
        
    //     if (!teams) {
    //         return res.sendStatus(404);
    //     }
    //     res.status(200).json(teams);
    // },
    create : async (req, res) => {
        const teamToAdd = Team(req.body);
        await teamToAdd.save();
        res.status(200).json(teamToAdd);
    },
    update : (req, res) => {
        console.log(`Modification de l'équipe dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    delete : (req, res) => {
        console.log(`Suppression de l'équipe dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
};

module.exports = teamController;