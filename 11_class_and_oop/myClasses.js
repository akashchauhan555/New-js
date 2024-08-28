/*                           Classes                            */

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const result = new User("nitish", "adj8@gmail.com", "4894");


console.log(result.encryptPassword());                                           // 4894abc
console.log(result.changeUsername());                                            // NITISH


// BEHIND THE SCENE

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const result2 = new User('ritesh', 'rit@gmail.com', '7747');


console.log(result2.changeUsername());                                               // RITESH

console.log(result2.encryptPassword());                                              // 7747abc

