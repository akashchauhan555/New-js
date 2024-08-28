/*               PROTOTYPE                 */


// let myName = "akash     "
// let randomName = "hitesh     "


// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(randomName.truelength);


let myHeros = ["batman", "superman", "flash"]

let herosPower = {
    batman: 'detective',
    superman: 'sling',
    flash: 'speed',

    getBatmanPower: function() {
        console.log(`Bat power is detective skill ${this.batman}`);   
    }
}

Object.prototype.akash = function() {
    console.log('Akash is present in all objects');  
}

Array.prototype.heyAkash = function() {
    console.log('Akash says hello');
}


// herosPower.akash()         // Akash is present in all objects

myHeros.akash()           // Akash is present in all objects 

myHeros.heyAkash()          // Akash says hello

herosPower.heyAkash()      // Not accessible 


/*     PROTOTYPAL INHERITANCE     */

const user = {
    name: "alok",
    email: "alok848@gmail.com",
}

const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const taSupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: teacher,
}

teachingSupport.__proto__ = user

console.log(user.name);                 // alok
 
console.log(teachingSupport.name);     // alok

console.log(taSupport.makeVideo);     // true


// Modern syntax

// Object.setPrototypeOf(user, teachingSupport)


let anotherUserName = "ChaiAurCode    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()     // ChaiAurCode   True length is: 11

//"alok   ".trueLength()

"iceTea".trueLength()

