
const userController = {
    getAll : (req, res) => {
        console.log('Récupération de tous les utilisateurs');
        res.sendStatus(501);
    },
    getById : (req, res) => {
        console.log('Récupération d\'un utilisateur');
        res.sendStatus(501);
    },
    getByTeam : (req, res) => {
        console.log('Récupération de tous les utilisateurs liés à une équipe');
        res.sendStatus(501);
    },
    // ------------------------------------------------------------------------
    // ↓ "create" est une route temporaire pour créer quelques "users" en attendant de faire le "register"
    //  à commenter ou à supprimer par la suite   
    // ------------------------------------------------------------------------
    create : (req, res) => {
        console.log('Créer un utilisateur');
        res.sendStatus(501);
    },
    update : (req, res) => {
        console.log('Modifier un utilisateur');
        res.sendStatus(501);
    },
    delete : (req, res) => {
        console.log('Supprimer un utilisateur');
        res.sendStatus(501);
    }
};

module.exports = userController;