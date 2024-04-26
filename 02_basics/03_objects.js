// singleton => constructor
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"akash",
    "fullname":"akashchauhan",
    //mySym:"key1",                                    // NOTE:This is treates as string not as symbol
    [mySym]:"key1",
    age:19,
    location:"Lucknow",
    email:"ac1675229@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday", "Saturday"]
}

// console.log(JsUser.name);                             // akash
// console.log(JsUser["name"]);                          // akash
// console.log(JsUser["age"]);                           // 19
// console.log(JsUser["lastLoggedIn"]);                  // ['Monday', 'Saturday']

// console.log(JsUser[mySym]);                            // key1
// console.log(typeof JsUser[mySym]);                     // string

// JsUser.email = "akashchauhan@gmail.com"
// console.log(JsUser["email"]);                           // akashchauhan@gmail.com

// Object.freeze(JsUser)
// JsUser.email = "akashchauhan@google.com"
// console.log(JsUser); 


JsUser.greeting = function() {
    console.log("Hello Js user");                  // Hello Js user
}

// console.log(JsUser.greeting());                    // undefined    

// console.log(JsUser.greeting);                      // [Function (anonymous)]


JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);       // Hello Js user, akash             
}
//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());                     // undefined

