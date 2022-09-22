const User = require("../models/user-model");
const jwtUtils = require('../utils/jwt-utils');
const argon2 = require('argon2');

const authController = {
    login : async (req, res) => {

        const { credential, password } = req.body;
        const credentialFilter = { $or : [{email : credential}, {pseudo : credential}]};
        
        const userToLogin = await User.findOne(credentialFilter);
        if (!userToLogin) {
            return res.status(401).json({ error : 'Données invalides'});
        }

        const isPasswordValid = await argon2.verify(userToLogin.password, password);
        if (!isPasswordValid) {
            return res.status(401).json({ error : 'Données invalides'});
        }

        // return res.json({msg : 'Vous êtes bien connecté.e'});
        const token = await jwtUtils.generate(userToLogin);
        return res.status(200).json({token, userId : userToLogin._id, userRole : userToLogin.role, userFirstName : userToLogin.firstname, userLastName : userToLogin.lastname});
    },
    register : async (req, res) => {
        
        const { pseudo, lastname, firstname, adress, password, email, phone } = req.body;

        const hashedPassword = await argon2.hash(password);
        
        const userToRegister = User({
            pseudo,
            lastname,
            firstname,
            adress,
            password : hashedPassword,
            email,
            phone
        });

        await userToRegister.save();
        // res.status(200).json(userToRegister);
        const token = await jwtUtils.generate(userToRegister);
        return res.status(200).json({token, userId : userToRegister._id, userRole : userToRegister.role, userFirstName : userToRegister.firstname, userLastName : userToRegister.lastname});
    }
};

module.exports = authController;