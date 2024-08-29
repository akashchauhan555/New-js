class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const chai = new Teacher("Ritesh Singh", "ritesh55@gmail.com", "7575");

chai.addCourse()                         // A new course is added by Ritesh Singh
chai.logMe()                             // USERNAME: Ritesh Singh

const tea = new User("akash");            

tea.logMe();                             // USERNAME: akash


console.log(chai instanceof User);   // true

console.log(chai instanceof Teacher);   // true

console.log(tea instanceof Teacher);    // false

console.log(tea instanceof User);       // true
