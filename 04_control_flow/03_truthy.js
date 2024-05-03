// const userEmail = "akash@3949gmail.com"
const userEmail = ""

// if(userEmail) {
//   console.log("Got user email");                             // Got user email
// } else {
//   console.log("Don't have user email")                      // Don't have user email
// }

// falsy values

/*false, 0, -0, bigint 0n, "" or '', null, undefined, NaN*/

// truthy values

/* "0", 'false', " ", [], {}, function(){} */


// const newUser = []

// if(newUser.length === 0) {
//   console.log("Array is empty");                   
// }

// const newObj = {}

// if(Object.keys(newObj).length === 0) {
//   console.log("Object is empty");                              // Object is empty 
// }

/*********************************************Investigating study******************************************************/

false == 0                // => true
false == ''               // => true
0 == ''                   // => true


// Nullish Coslescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10                             // => 5
// val1 = null ?? 10;                        // => 10
// val1 = undefined ?? 38;                   // => 38
// val1 = null ?? 30 ?? 40;                  // => 30
// val1 = undefined ?? 40 ?? 60;             // => 40

//console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");                     // => more than 80