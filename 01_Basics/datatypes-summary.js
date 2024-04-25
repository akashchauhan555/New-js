// Primitive (always call by value)

// 7 types : String, Number, Null, Boolean, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.44

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('455')
const anotherId = Symbol('455')

// console.log(id === anotherId);                 //false


const bigNumber = 47476474443n;
// console.log(typeof bigNumber);                 //bigint





// Reference (Non-Primitive)

// Array, Objects, Functions



const heroes = ["Ironman","Aquaman","Ghostrider","Loki"];
let myObj = {
    name:"Akash",
    age:19,
    college:"Nitm",
}

const myFunction = function() {
    console.log("hello world");
}


// console.log(typeof heroes);                  //object
// console.log(typeof score);                  //number
// console.log(typeof scoreValue);             //number
// console.log(typeof isLoggedIn);             //boolean
// console.log(typeof outsideTemp);           //object
// console.log(typeof userEmail);             //undefined
// console.log(typeof (myFunction));          //function

// console.log(typeof id);                    //symbol







/*******************************************************STACK AND HEAP***********************************************************/

// Stack (Primitive),   Heap (Non-Primitive)

let myYtName = "akashchauhan"

let anotherName = myYtName
anotherName = "ayushrajput"

// console.log(myYtName);
// console.log(anotherName);


let userOne = {
    email:"akashchauhan@gmail.com",
    upi:"884943494@ybl",
}

let userTwo = userOne

userTwo.email = "alslkf@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);



// NOTE:In Heap the referencial or the main value get changed when we make change whereas in the Stack it doesn't change only get changed in the current value.