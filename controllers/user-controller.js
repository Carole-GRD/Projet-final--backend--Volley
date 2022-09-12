const UserDTO = require("../dto/user-dto");
const User = require("../models/user-model");

const userMapperToDTO = (user) => new UserDTO(user.id, user.pseudo, user.lastname, user.firstname, user.position, user.team);

const userController = {
    getAll : async (req, res) => {

        const users = await User.find();

        const usersDTO = users.map(userMapperToDTO);
        res.status(200).json(usersDTO);
    },
    getById : async (req, res) => {

        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.sendStatus(404);
        }
        const userDTO = userMapperToDTO(user);
        res.status(200).json(userDTO);
    },
    // ------------------------------------------------------------------------
    // ↓ "create" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    //  à commenter ou à supprimer par la suite   
    // ------------------------------------------------------------------------
    create : async (req, res) => {

        const userToAdd = User(req.body);
        await userToAdd.save();
        res.status(200).json(userToAdd);

        },
    update : async (req, res) => {
        const id = req.params.id;
        const { pseudo, lastname, firstname, position, team, email, phone } = req.body;

        const userToUpdate = await User.findByIdAndUpdate(id, {
            pseudo,
            lastname,
            firstname,
            position,
            team,
            email,
            phone
        }, { returnDocument : 'after'});

        if (!userToUpdate) {
            return res.sendStatus(404);
        }
        const userDTO = userMapperToDTO(userToUpdate);
        res.status(200).json(userDTO);

    },
    delete : async (req, res) => {
        const id = req.params.id;
        const userToDelete = await User.findByIdAndDelete(id);

        if (!userToDelete) {
            return res.sendStatus(404);
        }
        res.sendStatus(204);
    }
};

module.exports = userController;