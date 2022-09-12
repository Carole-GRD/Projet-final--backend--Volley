class UserDTO {
    id;
    pseudo;
    lastname;
    firstname;
    position;
    team;

    constructor (id, pseudo, lastname, firstname, position, team) {
        this.id = id;
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.firstname = firstname;
        this.position = position;
        this.team = team;
    }
}

module.exports = UserDTO;