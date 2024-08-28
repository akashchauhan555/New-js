/*          Call              */

function setUserName(username) {
    //complex DB calls
    
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {

setUserName.call(this, username)
    this.email = email
    this.password = password
}

const result = new createUser("alok", "alok484@gmail.com", "7473");

console.log(result);


// Output: called
// createUser { email: 'alok484@gmail.com', password: '7473' }