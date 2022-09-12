
const teamController = {
    getAll : (req, res) => {
        console.log('Récupération de toutes les équipes');
        res.sendStatus(501);
    },
    getById : (req, res) => {
        console.log(`Récupération de l'équipe dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    getByUser : (req, res) => {
        console.log('Récupération des équipes liées à un utilisateur');
        res.sendStatus(501);
    },
    create : (req, res) => {
        console.log('Création d\'une nouvelle équipe');
        res.sendStatus(501);
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