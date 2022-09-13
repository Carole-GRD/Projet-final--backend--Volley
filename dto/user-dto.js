class UserDTO {
    id;
    pseudo;
    lastname;
    firstname;
    adress;
    position

    constructor (id, pseudo, lastname, firstname, adress, position) {
        this.id = id;
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.firstname = firstname;
        this.adress = adress;
        this.position = position
    }
}

module.exports = UserDTO;