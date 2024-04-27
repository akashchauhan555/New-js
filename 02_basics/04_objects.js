const tinderUser = new Object()      //singleton or constructor (Object)

const tinderUser2 = {}               // Object literals

// console.log(tinderUser);             // => {}
// console.log(tinderUser2);            // => {}

const newObj = {}

newObj.name = "akash"
newObj.email = "ac8484@gmail.com"
newObj.isLoggedIn = false
newObj.location = "Lucknow"

//console.log(newObj);                                // => {name:'akash', email:'ac8484@gmail.com', isLoggedIn:false, location:'Lucknow'}


const newUser = {
    email:"ac44@gamil.com",
    newUser2: {
        fullname: {                                  // NOTE: Nesting of object inside object is allowed.
            firstname:"Akash",
            lastname:"Chauhan"
        }
    }
}
// console.log(newUser.newUser2.fullname.firstname);      // => Akash      
// console.log(newUser.newUser2.fullname);                // => {firstname:'Akash', lastname:'Chauhan'}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


//const obj3 = {obj1, obj2}                               
 
//console.log(obj3);                                       // => { obj1: {1: 'a', 2: 'b'}, obj2:  {3: 'c', 4: 'd'} }

//const obj4 = Object.assign({}, obj1, obj2, obj3)                             

 /*SYNTAX:Object joining => Object.assign( {}, target, source)*/

const obj4 = {...obj1, ...obj2, ...obj3}

 //console.log(obj4);                                        // => {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5:'e', 6:'f'}


 const users = [
    {
        id:1,
        email:"ac1636@gamil.com"                       //  NOTE:Indexing starts from zero
    },
    {
        id:2,                                         // => This is called the array of objects
        email:"ak1636@gamil.com"
    },
    {
        id:3,
        email:"as1636@gamil.com"
    },
 ]

//  console.log(users[1].id);                          // => 2
//  console.log(users[2].email);                       // => as1636@gmail.com

//console.log(newObj);                                 // {name:'akash',email:'ac8484@gmail.com', isLoggedIn:false, location:'Lucknow'}


//console.log(Object.keys(newObj));                      // => ['name', 'email', 'isLoggedIn', 'location']
//console.log(Object.values(newObj));                  // => ['akash', 'ac8484@gmail.com', false, 'Lucknow']
console.log(Object.entries(newObj));      // => [['name','akash'], ['email', 'ac8484@gmail.com'], ['isLoggedIn', false], ['location', 'Lucknow']]

console.log(newObj.hasOwnProperty("location"));         // => true
console.log(newObj.hasOwnProperty("email2"));           // => false









