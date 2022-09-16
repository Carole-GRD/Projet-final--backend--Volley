const UserDTO = require("../dto/user-dto");
const User = require("../models/user-model");
// TODO:  retirer "role", c'est juste pour les tests !
const userMapperToDTO = (user) => new UserDTO(user.id, user.pseudo, user.lastname, user.firstname, user.adress, user.role, user.position, user.email, user.phone, user.licence);

const userController = {
    getAll : async (req, res) => {
        
        let roleFilter;
        const role = req.query.role;
        
        if (role) {
            // Si notre status est un tableau (contient plusieurs status à évaluer)
            if (Array.isArray(role)) {
                // Puisqu'on a un tableau, on regarde si le role de chaque reqête a une valeur compris dans le tableau fourni
                roleFilter = { role : { $in : role } };
            }
            else {
                roleFilter = { role : role };
            }
        }
        else {
            roleFilter = {};
        }


        const users = await User.find(roleFilter);

        const userDTO = users.map(userMapperToDTO);
        res.status(200).json(userDTO);
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
        const { pseudo, lastname, firstname, adress, role, position, email, phone, licence } = req.body;

        const userToUpdate = await User.findByIdAndUpdate(id, {
            pseudo,
            lastname,
            firstname,
            adress,
            role,
            position,
            email,
            phone,
            licence
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