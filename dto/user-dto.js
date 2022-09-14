// TODO:  retirer "role", c'est juste pour les tests !
// lignes 10, 13 et 19

class UserDTO {
    id;
    pseudo;
    lastname;
    firstname;
    adress;
    role;              
    position;
    email;
    phone;
    licence

    constructor (id, pseudo, lastname, firstname, adress, role, position, email, phone, licence) {
        this.id = id;
        this.pseudo = pseudo;
        this.lastname = lastname;
        this.firstname = firstname;
        this.role = role;
        this.adress = adress;
        this.position = position;
        this.email = email;
        this.phone = phone;
        this.licence = licence;
    }
}

module.exports = UserDTO;