// if

const isUserLoggedIn = true

// if( 2 === "2") { 
//   condsole.log("executed");
// }
// else {
//   console.log("not executed");
// }


 const temperature = 41
// if( temperature == 40) { 
//   console.log("Less than 50");
// }
// else {
//   console.log("Temp is greater than 50");
// }
// // <, >, <=, >=, ==, ===, !=


// const score = 200

// if(score > 100 ) {
//   let power = "fly"
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 800
// if( balance > 500) console.log("test"),
// console.log("test2");

// if(balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if(balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = false
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 if(userLoggedIn && debitCard ) {
  console.log("Allow to buy the course.");
 }

 if(loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in.")
 }
