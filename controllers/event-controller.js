
const eventController = {
    getAll : (req, res) => {
        console.log('Récupération de toutes les activités');
        res.sendStatus(501);
    },
    getById : (req, res) => {
        console.log(`Récupération de l'activité dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    getByTeam : (req, res) => {
        console.log('Récupération des activités liées à une équipe');
        res.sendStatus(501);
    },
    create : (req, res) => {
        console.log('Création d\'une activité');
        res.sendStatus(501);
    },
    update : (req, res) => {
        console.log(`Modification de l'activité dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    delete : (req, res) => {
        console.log(`Suppression de l'activité dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    }
};

module.exports = eventController;