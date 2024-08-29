class User {
    constructor(username) {
        this.username = username
    }
    showMe() {
        console.log(`Username: ${this.username}`);
        
    }
    static createId() {
        return `3553`
    }
}

const showResult = new User("akash");
// console.log(showResult.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const showResult2 = new Teacher("akash", "akks848@gmail.com");

// showResult2.showMe()            // Username: akash

console.log(showResult2.createId());     // static doen't not allow to any class or child to access its props...

