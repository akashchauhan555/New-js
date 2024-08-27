const details = {
    username: "akashchauhan",
    loginCount: 5,
    signedIn: true,
    jobrole: "devOps engineer",

    getAllDetails: function() {
      //  console.log("Got user details from the database");  
      //  console.log(`loginCount: ${this.loginCount}`);
    }
}


// details.getAllDetails();

// console.log(details.signedIn);

// console.log(details.jobrole);


function userDetails(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome: ${this.username}`);
        
    }
 
    return this
}

const userOne = new userDetails("akash", 23, true)

const userTwo = new userDetails("hitesh", 30, true)

console.log(userOne);
console.log(userTwo);












